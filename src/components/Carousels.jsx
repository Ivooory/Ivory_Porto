import { motion } from 'framer-motion';

export function ImageCarousel({ images }) {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden pt-2 pb-2">
      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="w-48 sm:w-60 h-32 sm:h-36 flex-shrink-0 border border-zinc-200 bg-zinc-100 shadow-sm overflow-hidden"
          >
            <img
              src={src}
              alt={`Experience preview ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function TechCarousel({ items, speed = 20 }) {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-2">
      <motion.div
        className="flex gap-4 sm:gap-6 w-max"
        animate={{
          x: ["0%", "-33.33%"],
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 px-4 py-3 border border-zinc-200 bg-zinc-50/50 transition-colors shadow-sm flex-shrink-0"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
            />
            <span className="text-sm sm:text-base font-semibold text-zinc-800">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
