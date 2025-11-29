"use client";
import SectionTitle from "../common/SectionTitle";
// Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import BookCard from "../BookCard";
const TopSelling = ({ topSellingBooks }) => {
    // Note: main render
    return (
        <section id="top-selling" className="container flex flex-col gap-6 lg:gap-12 justify-start items-center">
            <SectionTitle text="Top Selling Books" />
            {/* Swiper slider */}
            <div className="w-full">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={32}
                    slidesPerView={3.3}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 16
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 16
                        },
                        1024: {
                            slidesPerView: 2.3,
                            spaceBetween: 24
                        },
                        1280: {
                            slidesPerView: 3.3,
                            spaceBetween: 24
                        },
                    }}
                >
                    {topSellingBooks?.map((book, idx) => (
                        <SwiperSlide className="w-full" key={idx}>
                            <BookCard book={book} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
export default TopSelling;