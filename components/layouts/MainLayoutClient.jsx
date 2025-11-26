"use client"
import { ReactLenis } from "lenis/react";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
const MainLayoutClient = ({ children }) => {
    // main render
    return (
        <ReactLenis root>
            <Header />
            <main className="w-full pt-5 sm:pt-10 xl:pt-20 pb-10 xs:pb-20 sm:pb-32">
                {children}
            </main>
            <Footer />
            <ScrollToTop />
        </ReactLenis>
    )
}

export default MainLayoutClient