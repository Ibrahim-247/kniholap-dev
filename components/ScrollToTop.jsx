"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";


const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Detect scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 z-50 flex text-base justify-end items-center gap-4 sm:text-lg capitalize"
                    aria-label="Scroll to top"
                >
                    <span className="sm:size-12 size-10 shrink-0 bg-white flex items-center rounded-full text-foreground justify-center border border-amber-100 shadow-2xl"><FaArrowUp color="#000" /></span>
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
