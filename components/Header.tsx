"use client"

import { useScrollHeader } from "@/hooks/useScrollHeader";
import Link from "next/link";

const Header = () => {

    const isScrolled = useScrollHeader(30); // 50px dan keyin oq bo'ladi

    return (
        <header  className={`py-4 fixed top-0 right-0 left-0 transition-all duration-300 z-[150] ${
            isScrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Link href={'/'} className="font-bold text-[25px]">Help Style</Link>
                    {/* <div className="flex justify-between items-center gap-6">
                        <Link href="/about">About</Link>
                        <a href="#">link 2</a>
                        <a href="#">link 3</a>
                    </div>
                    <button>Any button</button> */}
                </div>
            </div>
        </header>
    )
}
export default Header;