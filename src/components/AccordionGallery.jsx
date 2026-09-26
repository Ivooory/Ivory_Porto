import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

function Gallery({ items, setIndex, setOpen, index }) {
  return (
    <div className="rounded-md w-fit md:gap-2 gap-1 flex pb-4 pt-4">
      {items.map((item, i) => (
        <motion.img
          key={item.id}
          whileTap={{ scale: 0.95 }}
          className={`rounded-xl ${
            index === i
              ? "w-[220px]"
              : "xl:w-[50px] md:w-[30px] sm:w-[20px] w-[14px]"
          } h-[180px] shrink-0 object-cover transition-[width] ease-in-out duration-300 cursor-pointer`}
          onMouseEnter={() => setIndex(i)}
          onClick={() => {
            setIndex(i);
            setOpen(true);
          }}
          src={item.url}
          alt={item.title}
          layoutId={String(item.id)}
        />
      ))}
    </div>
  );
}

export default function AccordionGallery({ items }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <div className="relative w-full">
      <Gallery
        items={items}
        index={index}
        setIndex={setIndex}
        setOpen={setOpen}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white/40 backdrop-blur-lg fixed inset-0 z-50 grid place-content-center"
            onClick={() => setOpen(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <motion.div
                layoutId={String(items[index].id)}
                className="w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-2xl relative cursor-default overflow-hidden shadow-2xl"
              >
                <img
                  src={items[index].url}
                  alt={items[index].title}
                  className="rounded-2xl h-full w-full object-cover"
                />
                <article className="bg-white/40 backdrop-blur-md absolute bottom-0 left-0 w-full rounded-b-2xl p-3">
                  <motion.h3
                    initial={{ scaleY: 0.2 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0.2 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="text-lg font-bold text-black"
                  >
                    {items[index].title}
                  </motion.h3>
                  {items[index].description && (
                    <motion.p
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      className="text-sm text-zinc-700 mt-1"
                    >
                      {items[index].description}
                    </motion.p>
                  )}
                </article>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
