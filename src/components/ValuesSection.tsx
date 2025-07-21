
import React from 'react';
import ValueCard from './ValueCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Value {
  icon: string;
  title: string;
  desc: string;
}

interface ValuesSectionProps {
  values: Value[];
}

const ValuesSection: React.FC<ValuesSectionProps> = ({ values }) => {
  return (
    <div className="values-swiper-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 }
        }}
      >
        {values.map((val, idx) => (
          <SwiperSlide key={idx}>
            <ValueCard icon={val.icon} title={val.title} desc={val.desc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ValuesSection;
