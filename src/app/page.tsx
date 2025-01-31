"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  { src: "/school1.png", alt: "Award Ceremony" },
  { src: "/school2.png", alt: "Sports Day" },
  { src: "/school3.png", alt: "Cultural Event" },
];
const testimonials = [
  {
    name: "Aarav Sharma",
    message:
      "Bright Future School has provided me with the best learning experience!",
  },
  {
    name: "Priya Singh",
    message:
      "The teachers are amazing, and my child loves the school environment.",
  },
  {
    name: "Rohan Mehta",
    message: "This school has helped my child excel academically and socially.",
  },
  {
    name: "Neha Patel",
    message:
      "An excellent school with dedicated teachers and modern facilities!",
  },
];
const AutoCarousel = ({
  items,
  renderItem,
  autoPlay = true,
  interval = 3000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, items.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Carousel className="relative">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className={index === activeIndex ? "block" : "hidden"}
            >
              {renderItem(item)}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          onClick={() =>
            setActiveIndex(
              (prevIndex) => (prevIndex - 1 + items.length) % items.length
            )
          }
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
        />
        <CarouselNext
          onClick={() =>
            setActiveIndex((prevIndex) => (prevIndex + 1) % items.length)
          }
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
        />
      </Carousel>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export function SchoolCarousel() {
  return (
    <AutoCarousel
      items={images}
      renderItem={(image: any) => (
        <Card className="shadow-lg rounded-lg">
          <CardContent className="flex aspect-[16/9] items-center justify-center p-0">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </CardContent>
        </Card>
      )}
    />
  );
}

const TestimonialCarousel = () => {
  return (
    <Carousel className="w-full max-w-3xl mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <Card className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <CardContent>
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.message}"
                </p>
                <h4 className="text-xl font-semibold text-gray-800 text-right">
                  - {testimonial.name}
                </h4>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700" />
    </Carousel>
  );
};

const Home = () => {
  const [isPopupVisible, setPopupVisible] = useState(true);
  const handlePopupClose = () => {
    setPopupVisible(false);
  };
  return (
    <div>
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="rounded-xl p-6 w-full sm:w-2/3 lg:w-1/2 relative shadow-2xl bg-gradient-to-br from-white to-gray-100 h-[98%] overflow-hidden">
            <button
              onClick={handlePopupClose}
              className="absolute top-3 right-3 text-gray-600 text-3xl hover:text-red-500 cursor-pointer z-10"
            >
              &times;
            </button>

            <div className="text-center mb-6">
              <h1
                className="text-3xl font-extrabold text-blue-700 tracking-wide drop-shadow-sm animate-flash"
                style={{ fontFamily: '"Pacifico", cursive' }}
              >
                ADMISSION OPEN FOR
              </h1>
              <h2 className="text-5xl font-extrabold text-yellow-500 drop-shadow-sm mt-1">
                2025
              </h2>
            </div>

            <div className="mb-6 flex justify-center">
              <img
                src="https://t3.ftcdn.net/jpg/06/46/90/30/240_F_646903073_HT2f4DQ3DGVmwdYqRBUthp1hR1PmYNXK.jpg"
                alt="Bright Future School"
                className="w-[70%] h-[18rem] rounded-xl shadow-lg border-4 border-blue-300 transform hover:scale-105 transition duration-300"
              />
            </div>

            <h3
              className="text-2xl font-semibold text-blue-600 mb-4 underline decoration-yellow-400"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              OUR FEATURES
            </h3>
            <ul
              className="list-none text-gray-700 text-lg mb-6 space-y-3"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              <li className="hover:text-blue-600 transition duration-200 flex items-center">
                <span className="mr-2 text-blue-500">&rarr;</span> Certified
                Teachers
              </li>
              <li className="hover:text-blue-600 transition duration-200 flex items-center">
                <span className="mr-2 text-blue-500">&rarr;</span> Comprehensive
                Class Programs
              </li>
              <li className="hover:text-blue-600 transition duration-200 flex items-center">
                <span className="mr-2 text-blue-500">&rarr;</span> Big and Safe
                Play Room
              </li>
              <li className="hover:text-blue-600 transition duration-200 flex items-center">
                <span className="mr-2 text-blue-500">&rarr;</span> Large Green
                Playground
              </li>
            </ul>

            <div className="text-center mt-6">
              <a
                href="#admissions-form"
                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-110"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                REGISTER NOW
              </a>
            </div>
          </div>
        </div>
      )}

      <section className="text-white py-16 bg-gradient-to-r from-blue-500 to-teal-500">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Welcome to{" "}
            <span className="text-yellow-300">Bright Future School</span>
          </h2>
          <p className="text-lg sm:text-xl mb-6">
            Nurturing future leaders with quality education and holistic
            development.
          </p>
          <a
            href="/about"
            className="bg-yellow-300 text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Discover Our Vision
          </a>
        </div>
      </section>

      <section
        id="admissions-form"
        className="py-20 bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-800 text-white relative overflow-hidden"
      >
        {/* Background texture with slight opacity */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

        {/* Form content */}
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <h2 className="text-5xl font-extrabold mb-8 leading-tight text-center">
            Admissions Are Open!
          </h2>
          <p className="text-lg sm:text-xl mb-12 text-gray-200 text-center max-w-3xl mx-auto">
            Experience holistic education and state-of-the-art facilities for
            your child. Secure a bright future today!
          </p>
          <form className="bg-white p-10 rounded-2xl shadow-2xl text-gray-800 max-w-3xl mx-auto transition-transform transform hover:scale-105">
            {/* Input fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="peer p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                />
                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500">
                  Parent's Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="peer p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                />
                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500">
                  Child's Name
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <input
                  type="tel"
                  placeholder=" "
                  className="peer p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                />
                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500">
                  Mobile Number
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder=" "
                  className="peer p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                />
                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500">
                  Email Address
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-gradient-to-l hover:from-indigo-800 hover:to-blue-800 transition duration-300 transform hover:scale-110"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
            Our Gallery
          </h2>
          <SchoolCarousel />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
            About Bright Future School
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            At Bright Future School, we believe in empowering students with a
            strong academic foundation, life skills, and values that prepare
            them for a successful future. With a commitment to excellence, we
            provide a safe and nurturing environment where every student can
            thrive.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "100% Results",
                description: "Consistent academic excellence in board exams.",
              },
              {
                title: "Award-Winning Programs",
                description: "Recognized for innovative teaching methods.",
              },
              {
                title: "Top Sports Team",
                description: "Winners of inter-school championships.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Teachers",
                description:
                  "Highly qualified staff committed to nurturing students.",
                icon: "🎓", // Education Icon
              },
              {
                title: "Holistic Development",
                description:
                  "Focus on academics, sports, and extracurricular activities.",
                icon: "⚽", // Sports Icon
              },
              {
                title: "Modern Facilities",
                description: "Smart classrooms, laboratories, and a library.",
                icon: "🏫", // School Icon
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="text-5xl text-yellow-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      <section className="py-16 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-white">
            What Our Students Say
          </h2>
          <div className="relative">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Join Bright Future School?
          </h2>
          <a
            href="/contact"
            className="bg-yellow-300 text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Enroll Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Bright Future School
            </h3>
            <nav className="flex justify-center space-x-6 mb-4">
              <a href="#about" className="hover:text-white">
                About
              </a>
              <a href="#features" className="hover:text-white">
                Features
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </nav>
            <p className="text-sm">
              © 2024 Bright Future School. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
