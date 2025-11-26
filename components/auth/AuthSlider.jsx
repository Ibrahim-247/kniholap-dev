"use client"
import "swiper/css";
import "swiper/css/pagination"; // <-- Import pagination styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { bookImages } from "@/data";
import Image from "next/image";

const AuthSlider = () => {

    // main render
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop={true}
            className="w-full h-full rounded-2xl"
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }} // <-- enable pagination
        >
            {bookImages.map((book, idx) => (
                <SwiperSlide className="w-full relative  h-full overflow-hidden" key={idx}>
                    <div className="w-full h-full overflow-hidden">
                        <Image
                            src={book.src}
                            alt={"book"}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover hover:scale-120 transition-all ease-in-out duration-500"
                        />
                    </div>
                    <div className="absolute flex justify-center items-center flex-col gap-5 w-full h-full  p-6 inset-0 text-white z-10" >
                        <p className="xl:text-5xl text-4xl font-semibold text-center">Together, We Make a Difference</p>
                        <p className="text-base text-center">Join families, schools, and local heroes in creating a cleaner, greener world — one refill at a time.</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default AuthSlider;
