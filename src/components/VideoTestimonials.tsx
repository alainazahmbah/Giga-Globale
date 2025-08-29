import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  video: string;
  quote: string;
  name: string;
  title: string;
}

interface Props {
  testimonials: Testimonial[];
}

// Custom Arrows
const NextArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 transform -translate-y-1/2 z-50 cursor-pointer text-[#277aff] text-3xl"
    onClick={onClick}
  >
    &#10095;
  </div>
);

const PrevArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 transform -translate-y-1/2 z-50 cursor-pointer text-[#277aff] text-3xl"
    onClick={onClick}
  >
    &#10094;
  </div>
);

const VideoTestimonials: React.FC<Props> = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="py-24 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-[#277aff] text-center">
  Giga Voices
</h2>
<p className="text-center mt-4 text-gray-700">
 
</p>
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="px-4 md:px-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8 bg-blue-50 p-6 rounded-2xl shadow-lg">
                <div className="md:w-1/2 w-full h-64 md:h-80">
                  <iframe
                    className="w-full h-full rounded-xl shadow-md"
                    src={item.video}
                    title={item.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="md:w-1/2 w-full text-left">
                  <motion.p
                    className="text-gray-700 text-lg mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    {item.quote}
                  </motion.p>
                  <motion.p
                    className="font-semibold text-[#277aff]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {item.name}
                  </motion.p>
                  <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {item.title}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default VideoTestimonials;
