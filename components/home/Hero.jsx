"use client";
import { books } from "@/data";
import Marquee from "react-fast-marquee";
import "swiper/css";
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import StarRating from "../common/StarRating";
import Image from "next/image";

const Hero = ({ topRatedBooks = [] }) => {
    return (
        <section className="w-full flex flex-col items-center font-secondary justify-start">
            {/* hero section top */}
            <div className="container flex flex-col items-center font-secondary justify-start">
                <h1 className="lg:text-5xl text-2xl 2xs:text-3xl sm:text-4xl font-bold text-center capitalize">Your <span className="text-primary">One-Stop</span> Book Marketplace & <span className="text-primary">Digital Library</span></h1>
                <p className="sm:text-lg text-base text-center mt-3 sm:mt-6">Trade physical books, read premium eBooks, and connect with readers worldwide.</p>
            </div>
            {/* hero section bottom */}
            {/* swiper */}
            {
                topRatedBooks?.length > 0 && (
                    <div className="relative w-full mt-6 sm:mt-20">
                        <Swiper
                            modules={[Autoplay, EffectCoverflow]}
                            loop={true}
                            centeredSlides={true}
                            className="w-full sm:!px-0 !px-3"
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            loopAdditionalSlides={true}
                            effect="coverflow"
                            coverflowEffect={{
                                rotate: 10,
                                stretch: 0,
                                depth: 100,
                                modifier: 3,
                                slideShadows: false,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 40
                                },
                                1536: {
                                    slidesPerView: 5,
                                    spaceBetween: 60
                                }
                            }}
                        >
                            {topRatedBooks?.map((book, index) => (
                                <SwiperSlide key={index}>
                                    <div className="group relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden">
                                        <Image
                                            src={book.cover_image || "/placeholder.jpg"}
                                            alt={`${book.title || "Unknown"} cover image`}
                                            width={300}
                                            height={400}
                                            className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                                            priority
                                        />
                                        <div className="z-20 right-3 top-3 absolute">
                                            <StarRating className="text-primary" rating={Number(book.rating || 0)} />
                                        </div>
                                        {/* Overlay Info */}
                                        <div className="absolute inset-0  bg-black/50  transition-opacity duration-500 flex justify-center items-center">
                                            <div className="p-4 text-white w-full flex flex-col  justify-center items-center">
                                                <h3 className="sm:text-2xl text-xl font-semibold text-center">{book.title || "Unknown"}</h3>
                                                <p className="text-lg opacity-80 text-center">{book.author_name || "Unknown"}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )
            }
            {/* marquee */}
            <div className="relative w-full mt-20 hidden">
                <Marquee
                    speed={50}
                    pauseOnHover
                    gradient={true}
                    gradientColor="#f5f5f9"
                    direction="left"
                >
                    {books.map((book, index) => (
                        <div
                            key={index}
                            className="flex mx-2 size-64 items-center rounded-xl justify-center shrink-0 book-3d"
                        >
                            <Image
                                src={book.cover}
                                alt={`${book.title}`}
                                className="w-full rounded-xl h-full object-cover"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}

export default Hero