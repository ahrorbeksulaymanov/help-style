import { useEffect, useState, useRef } from "react";

export const useElementSize = () => {
  const ref = useRef<HTMLDivElement>(null); // 🔥 `div` uchun ref
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      if (entry?.contentRect) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, size };
};
