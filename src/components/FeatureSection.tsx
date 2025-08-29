import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import CountryPartnersSection from "../components/CountryPartnersSection";
import {
  FaSchool,
  FaWifi,
  FaMapMarkedAlt,
  FaUsers,
  FaGlobeAfrica,
  FaNetworkWired,
} from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoTestimonials from "./VideoTestimonials";
import { testimonials } from "./testimonialData";



const AboutGiga: React.FC = () => {
  const milestones = [
    {
      title: "2.1M Schools Mapped",
      description: "We've successfully mapped 2.1 million schools across 140 countries.",
    },
    {
      title: "90k Schools with Real-time Connectivity",
      description: "In 2023, 90,000 schools across 22 countries reported real-time connectivity.",
    },
    {
      title: "6 Countries with Infra Mapping",
      description: "We’ve supported Benin, Botswana, Brazil, Rwanda, Zimbabwe and Namibia.",
    },
    {
      title: "Global Reach",
      description: "Our open data supports ministries, NGOs, and partners worldwide.",
    },
    {
      title: "Innovative Tech",
      description: "We leverage AI, geospatial data, and blockchain for transparency.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      {/* Giga Description Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE - STATS / HIGHLIGHT */}
          <div className="animate-fade-up animate-delay-100">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#277aff] mb-6 leading-snug">
              1 in 3 people lack Internet access
            </h2>
            <p className="text-lg text-gray-700 mb-5 leading-relaxed">
              That includes more than{" "}
              <span className="font-semibold text-[#277aff]">1.3 billion children</span> who have no access at home.
              An estimated{" "}
              <span className="font-semibold text-[#277aff]">half of the world’s schools</span> remain offline.
            </p>
            <p className="text-lg text-gray-700">
              Without Internet access, children miss out on learning and opportunities in today’s digital world.
            </p>
          </div>

          {/* RIGHT SIDE - GIGA MISSION */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-[#277aff] animate-fade-up animate-delay-300">
            <h3 className="text-2xl font-bold text-[#277aff] mb-4">What is Giga?</h3>
            <p className="text-gray-800 text-md leading-relaxed">
              <span className="font-semibold">Giga</span> is a joint initiative by the{" "}
              <span className="text-[#277aff] font-medium">United Nations Children’s Fund (UNICEF)</span> and the{" "}
              <span className="text-[#277aff] font-medium">International Telecommunication Union (ITU)</span>.
              <br />
              <br />
              It aims to <span className="font-semibold text-[#277aff]">connect every school in the world to the Internet</span>,
              giving every young person access to information, opportunity, and choice.
            </p>
          </div>
        </div>
      </section>

      {/* Our Impact Video Section */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* VIDEO CARD */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/bxwEAie-9YU"
              title="Giga Impact Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* TEXT BLOCK */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border-l-4 border-[#277aff] self-start mt-0">
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                One out of three people don’t have access to the Internet – including more than <strong>1.3 billion children</strong> who have no access at home.
              </p>
              <p>
                <strong>Giga</strong> is a partnership between the <span className="text-[#277aff] font-medium">United Nations Children’s Fund (UNICEF)</span> and the <span className="text-[#277aff] font-medium">International Telecommunication Union (ITU)</span> working to connect every school in the world to the Internet and every young person to information, opportunity and choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-[#277aff] mb-6">
            Our Impact
          </h1>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Our open-source connectivity solutions and innovative technologies have helped countries, transformed communities, and changed lives.
          </p>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-blue-50 p-6 rounded-2xl shadow-lg border-l-4 border-[#277aff]">
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                “The internet has helped us learn many things including those that the teachers don’t teach in class...”
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://s41713.pcdn.co/wp-content/uploads/2024/05/Jenny.jpg"
                  alt="Jenny"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Jenny</p>
                  <p className="text-sm text-gray-600">8th Grade Student, Kenya</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-blue-50 p-6 rounded-2xl shadow-lg border-l-4 border-[#277aff]">
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                “The internet has changed the way we teach. We’ve gone a long way from the normal use of textbooks...”
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://s41713.pcdn.co/wp-content/uploads/2024/05/Joseph.jpg"
                  alt="Joseph"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Joseph Waweru</p>
                  <p className="text-sm text-gray-600">Teacher, Kenya</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-blue-50 p-6 rounded-2xl shadow-lg border-l-4 border-[#277aff]">
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                "Life before the internet was really chaotic... Today, teachers come to school to finish admin work because the internet is reliable."
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://s41713.pcdn.co/wp-content/uploads/2024/05/Teacher-Peris-768x507.jpg"
                  alt="Peris Gaturi"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Peris Gaturi</p>
                  <p className="text-sm text-gray-600">Head Teacher, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Progress Section with Carousel */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-[#277aff] mb-6">Our Progress</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Since our establishment in 2019, we have reached the following milestones:
          </p>

          <Slider {...sliderSettings}>
            {milestones.map((item, index) => (
              <div key={index} className="px-4 h-full">
                <div className="relative bg-white border border-[#dbeafe] rounded-2xl shadow-lg p-8 h-72 flex flex-col items-center justify-center animate-glow">
                  {/* Icon */}
                  <div className="text-5xl text-[#277aff] mb-4">
                    {index === 0 && <FaSchool />}
                    {index === 1 && <FaWifi />}
                    {index === 2 && <FaMapMarkedAlt />}
                    {index === 3 && <FaGlobeAfrica />}
                    {index === 4 && <FaNetworkWired />}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#277aff] mb-3">{item.title}</h3>
                  {/* Description */}
                  <p className="text-gray-600 text-base">{item.description}</p>

                  {/* Animated glowing border effect */}
                  <span className="absolute inset-0 rounded-2xl border-2 border-[#277aff] opacity-30 animate-pulse pointer-events-none"></span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="py-24 bg-[#f8fafc]">
  <div className="max-w-7xl mx-auto px-6">
    {/* Heading + Description */}
    <div className="mb-10">
      <h2 className="text-4xl font-extrabold text-[#277aff] mb-4">
        Our Global Footprint
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl">
        Giga's global footprint now reaches more than{" "}
        <span className="font-semibold text-[#277aff]">50 countries</span>, 
        including{" "}
        <span className="font-semibold text-[#277aff]">34 countries</span>{" "}
        provided with advanced connectivity support.
      </p>
    </div>

    {/* Full-Width Image */}
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <img
        src="https://s41713.pcdn.co/wp-content/uploads/2024/05/Global-Footprint-Map-v2-1536x855.jpg"  /* replace with your actual image path */
        alt="Global Footprint Map"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</section>

<section className="py-24 bg-[#f8fafc]">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-[#277aff] mb-12 text-center">
      Giga Around the World
    </h2>

    <div className="grid md:grid-cols-3 gap-10">
      <div>
        <img src="https://s41713.pcdn.co/wp-content/uploads/2024/05/Brazil-1024x683.jpeg" alt="Brazil" className="rounded-2xl shadow-md mb-4 w-full h-56 object-cover" />
        <h3 className="text-xl font-bold text-[#277aff] mb-2">Brazil</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          In Brazil, through coordinated efforts with the Government of Brazil, UNICEF Brazil, Nic.Br and Giga, more than 80k schools have shared live connectivity data with Giga. Data for schools sending daily updates is updated every four hours on Project Connect.
        </p>
      </div>

      <div>
        <img src="https://s41713.pcdn.co/wp-content/uploads/2024/05/Botswana-1024x683.jpg" alt="Botswana" className="rounded-2xl shadow-md mb-4 w-full h-56 object-cover" />
        <h3 className="text-xl font-bold text-[#277aff] mb-2">Botswana</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          In Botswana, Giga supported the Government’s SmartBots initiative to connect 609 schools, benefiting more than 387,000 students and teachers with minimum speeds of 50-100 Mbps.
        </p>
      </div>

      <div>
        <img src="https://s41713.pcdn.co/wp-content/uploads/2024/05/Kazakhstan-1024x683.jpg" alt="Kazakhstan" className="rounded-2xl shadow-md mb-4 w-full h-56 object-cover" />
        <h3 className="text-xl font-bold text-[#277aff] mb-2">Kazakhstan</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          In Kazakhstan, Giga supported a feasibility study and proposed technical solutions to enhance connectivity speeds in schools, piloting the upgrades in 38 schools.
        </p>
      </div>

      <div>
        <img src="https://s41713.pcdn.co/wp-content/uploads/2024/05/Mongolia-1024x683.jpg" alt="Mongolia" className="rounded-2xl shadow-md mb-4 w-full h-56 object-cover" />
        <h3 className="text-xl font-bold text-[#277aff] mb-2">Mongolia</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          In Mongolia, there are a total of 871 schools, some of which are situated at a considerable distance from central school facilities. Giga has provided support to the government by employing an AI model to accurately identify each school building on the map.
        </p>
      </div>

      <div>
        <img src="https://s41713.pcdn.co/wp-content/uploads/2024/05/Sierra-Leone-1024x683.jpg" alt="Sierra Leone" className="rounded-2xl shadow-md mb-4 w-full h-56 object-cover" />
        <h3 className="text-xl font-bold text-[#277aff] mb-2">Sierra Leone</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          In Sierra Leone, Giga and the Government worked together to connect 39 hard-to-reach schools, bringing internet access and digital learning to 8,000 students.
        </p>
      </div>

      <div>
        <img src="https://s41713.pcdn.co/wp-content/uploads/2024/05/Uzbekistan-1024x683.jpg" alt="Uzbekistan" className="rounded-2xl shadow-md mb-4 w-full h-56 object-cover" />
        <h3 className="text-xl font-bold text-[#277aff] mb-2">Uzbekistan</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          In Uzbekistan, mapping and real-time monitoring of internet connectivity are now being integrated into the Educational Management Information System (EMIS), helping the government identify gaps in services and improve the efficiency of resource allocation.
        </p>
      </div>
    </div>
  </div>
</section>
      
      <VideoTestimonials testimonials={testimonials} />
      <img src="https://s41713.pcdn.co/wp-content/uploads/2024/05/Screenshot-2024-05-02-at-11.05.21%E2%80%AFPM.png" alt="A description of the image"></img>
          <CountryPartnersSection />

     

    </>
  );
};

export default AboutGiga;
