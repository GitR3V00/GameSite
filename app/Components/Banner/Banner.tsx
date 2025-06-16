"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Slide {
  id: number;
  img: string;
  title: string;
  subtitle: string;
}

interface BannerProps {
  slides: Slide[];
}

const Banner: React.FC<BannerProps> = ({ slides }) => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={true}
      ssr={true}
      slidesToSlide={1}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={false}
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {slides.map((slide) => (
        <div key={slide.id} className="relative w-full h-[1325px]">
          <Image
            src={slide.img}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl font-medium drop-shadow-sm">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
