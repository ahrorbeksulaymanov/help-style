import { useEffect, useState } from "react";

export const useWindowWidth = () => {

    const [width, setWidth] = useState(1000); // ❗ Fallback qiymat (SSR paytida muammo bo'lmasligi uchun)

    useEffect(() => {
        if (typeof window !== "undefined") { // ✅ Next.js SSR muammosini oldini olish
        const handleResize = () => {
            setWidth(window.innerWidth - 40); // 🔥 Dinamik width (40px padding)
        };
    
        setWidth(window.innerWidth - 40); // ✅ Boshlang‘ich qiymat
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return width;
}