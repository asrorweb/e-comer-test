"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProductType } from "@/interfaces/product.type";
import ProductBlog from "./product-blog";

interface DemoSliderProps {
  data: ProductType[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <div className="py-10">
      <Swiper
        navigation
        slidesPerView={3}
        pagination={{ type: "bullets", clickable: true }}
        autoplay={true}
        loop={true}
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
      >
        {data.map((el) => (
          <SwiperSlide key={el.id}>
            <ProductBlog product={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DemoSlider;
