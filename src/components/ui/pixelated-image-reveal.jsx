import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    const current = result[index];
    result[index] = result[swapIndex];
    result[swapIndex] = current;
  }
  return result;
}

function createRandomStaggerDelays(count, stepDuration) {
  const order = shuffle([...new Array(count).keys()]);
  const stagger = stepDuration / count;
  const delays = new Array(count).fill(0);
  for (let position = 0; position < count; position++) {
    delays[order[position]] = position * stagger;
  }
  return delays;
}

function useCoarsePointer() {
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const update = () => setIsCoarsePointer(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);
  return isCoarsePointer;
}

export function PixelatedImageReveal({
  aspect = "square",
  stepDuration = 0.3,
  gridSize = 7,
  defaultSrc,
  activeSrc,
  alt = "",
  pixelColor = "#3b82f6",
  className,
  pixelClassName,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();
  const isCoarsePointer = useCoarsePointer();
  const [isRevealed, setIsRevealed] = useState(false);
  const [pixelsVisible, setPixelsVisible] = useState(false);
  const [pixelDelays, setPixelDelays] = useState([]);
  const activeIntentRef = useRef(false);
  const generationRef = useRef(0);
  const timeoutIdsRef = useRef([]);

  const pixelCount = gridSize * gridSize;
  const pixelSizePercent = 100 / gridSize;

  const pixelIndexes = useMemo(
    () => [...new Array(pixelCount).keys()],
    [pixelCount]
  );

  const clearScheduledTimeouts = useCallback(() => {
    for (const id of timeoutIdsRef.current) clearTimeout(id);
    timeoutIdsRef.current = [];
  }, []);

  const scheduleTimeout = useCallback((callback, delayMs) => {
    const id = setTimeout(callback, delayMs);
    timeoutIdsRef.current.push(id);
  }, []);

  const runReveal = useCallback(
    (activate) => {
      activeIntentRef.current = activate;
      clearScheduledTimeouts();
      const generation = ++generationRef.current;

      if (prefersReducedMotion) {
        setPixelsVisible(false);
        setIsRevealed(activate);
        return;
      }

      setPixelsVisible(false);
      setPixelDelays(createRandomStaggerDelays(pixelCount, stepDuration));

      requestAnimationFrame(() => {
        if (generation !== generationRef.current) return;
        setPixelsVisible(true);
      });

      scheduleTimeout(() => {
        if (generation !== generationRef.current) return;
        setIsRevealed(activate);
      }, stepDuration * 1000);

      scheduleTimeout(() => {
        if (generation !== generationRef.current) return;
        setPixelDelays(createRandomStaggerDelays(pixelCount, stepDuration));
        setPixelsVisible(false);
      }, stepDuration * 1000);
    },
    [clearScheduledTimeouts, pixelCount, prefersReducedMotion, scheduleTimeout, stepDuration]
  );

  useEffect(() => clearScheduledTimeouts, [clearScheduledTimeouts]);

  const aspectClass = aspect === "square" ? "aspect-square" : aspect === "video" ? "aspect-video" : "";

  return (
    <div
      className={cn(
        "relative w-full max-w-full overflow-hidden rounded-lg bg-neutral-800",
        aspectClass,
        className
      )}
      onClick={() => isCoarsePointer && runReveal(!activeIntentRef.current)}
      onKeyDown={(e) => {
        if (isCoarsePointer && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          runReveal(!activeIntentRef.current);
        }
      }}
      onMouseEnter={() => { if (!isCoarsePointer && !activeIntentRef.current) runReveal(true); }}
      onMouseLeave={() => { if (!isCoarsePointer && activeIntentRef.current) runReveal(false); }}
      {...(isCoarsePointer
        ? { "aria-label": alt || "Toggle image reveal", role: "button", tabIndex: 0 }
        : { role: "group" })}
      {...props}
    >
      {/* DEFAULT IMAGE */}
      <img
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        src={defaultSrc}
      />
      {/* ACTIVE / HOVER IMAGE */}
      <img
        alt=""
        aria-hidden="true"
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-0",
          isRevealed ? "opacity-100" : "opacity-0"
        )}
        src={activeSrc}
      />
      {/* PIXEL GRID OVERLAY */}
      <div aria-hidden="true" className="absolute inset-0">
        {pixelIndexes.map((index) => {
          const row = Math.floor(index / gridSize);
          const col = index % gridSize;
          return (
            <motion.div
              key={index}
              animate={{ opacity: pixelsVisible ? 1 : 0 }}
              className={cn("absolute will-change-[opacity]", pixelClassName)}
              initial={false}
              style={{
                backgroundColor: pixelColor,
                height: `${pixelSizePercent}%`,
                left: `${col * pixelSizePercent}%`,
                top: `${row * pixelSizePercent}%`,
                width: `${pixelSizePercent}%`,
              }}
              transition={{ delay: pixelDelays[index] ?? 0, duration: 0 }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PixelatedImageReveal;
