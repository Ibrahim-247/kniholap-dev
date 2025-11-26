'use client'
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useOptions } from '@/hooks/options.hook';

const Categories = ({ filters, setFilters }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [navigationReady, setNavigationReady] = useState(false);
    const { categoryList } = useOptions();
    // Wait until refs are rendered
    useEffect(() => {
        setNavigationReady(true);
    }, []);
    // 🔥 Update Subcategory Filter
    const handleCategoryClick = (id) => {
        setFilters((prev) => {
            const isSelected = prev.category_ids?.includes(id);
            return {
                ...prev,
                category_ids: isSelected
                    ? prev.category_ids.filter(item => item !== id) // Remove
                    : [...(prev.category_ids || []), id]           // Add
            };
        });
    };

    console.log(categoryList);

    // main render
    return (
        <div className="w-full flex items-center gap-4">
            <button ref={prevRef} className="shrink-0 size-6 flex justify-center items-center rounded-sm hover:bg-slate-300 bg-gray-300 cursor-pointer">
                <HiChevronLeft size={24} />
            </button>

            {navigationReady && (
                <Swiper
                    slidesPerView={3}
                    spaceBetween={5}
                    freeMode={true}
                    loop={true}
                    grabCursor={true}
                    breakpoints={{
                        640: { slidesPerView: 5, spaceBetween: 8 },
                    }}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    className="w-full"
                >
                    {categoryList?.map((category) => (
                        <SwiperSlide key={category.id} className="w-full line-clamp-1">
                            <button
                                type="button"
                                title={category.title}
                                onClick={() => handleCategoryClick(category.id)}
                                className={`cursor-pointer text-sm xl:text-xl line-clamp-1 text-center w-full flex justify-center items-center
                                ${filters?.category_ids?.includes(category.id) ? 'text-primary' : 'text-black'}
                                font-semibold`}
                            >
                                {category.title || "N/A"}
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            <button ref={nextRef} className="shrink-0 size-6 flex justify-center items-center rounded-sm hover:bg-slate-300 bg-gray-300 cursor-pointer">
                <HiChevronRight size={24} />
            </button>
        </div>
    );
};

export default Categories;
