'use client';
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { books } from "@/data";
import BookCard from "../BookCard";
const BookMarkList = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            freeMode={true}
            grabCursor={true}
            breakpoints={{
                640: {
                    slidesPerView: 1.1, // ✅ Use colon here
                },
                1024: {
                    slidesPerView: 1.1, // ✅ Use colon here
                },
                1280: {
                    slidesPerView: 1.2, // ✅ Use colon here
                }
            }}
            className="w-full lg:mb-10 !px-1"
            autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
            {books.map((book, idx) => (
                <SwiperSlide className="w-full" key={idx}>
                    <BookCard layout="bookmark" book={book} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default BookMarkList