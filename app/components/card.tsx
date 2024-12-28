'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const SwipeableCards = () => {
  const cards = [
    {
      id: 1,
      title: "Programming Tips  ",
      description: "Dive into the world of programming .",
      image: "https://cdn.educba.com/academy/wp-content/uploads/2019/06/What-is-a-Programming-Language.jpg",
      link: "components/5",
    },
    {
      id: 2,
      title: "Styling Tips",
      description: "Discover the latest trends in fashion, design, and personal styling.",
      image: "https://www.fcifashion.com/wp-content/uploads/2017/05/Fashion_Styling_img_01.jpg",
      link: "components/2",
    },
    {
      id: 3,
      title: "Healthy Diet",
      description: "Learn about nutritious meals and tips for maintaining a healthy lifestyle.",
      image: "https://cfpen.org/wp-content/uploads/2019/05/Eat_Healthy_Blog_15May19-1200x800.jpg",
      link: "components/3",
    },
    {
      id: 4,
      title: "Travel Adventures",
      description: "Explore breathtaking destinations and travel tips to make your trips unforgettable.",
      image: "https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg",
      link: "components/4",
    },
    {
      id: 5,
      title: "Technology Trends",
      description: "Stay updated on the latest trends and innovations in technology.",
      image: "https://bernardmarr.com/img/These%2025%20Technology%20Trends%20Will%20Define%20The%20Next%20Decade.png",
      link: "/components/1",
    },
  ];

  return (
    <div className="flex flex-col justify-start text-center p-5 items-center min-h-screen bg-gray-100 pt-8">
      <h1 className="text-4xl font-bold text-center pt-20">
      Welcome to the Ultimate Lifestyle Blog
      </h1>
      <p className="pb-10 pt-4 ">
        This blog brings together styling advice, healthy diet tips, travel adventures, and the latest trends to help you live your best life.</p>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, el: '.custom-pagination' }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        speed={500} // Adjust the speed for smoother transitions
        className="w-full px-4"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
               <Link className="text-black" href={card.link}><h2 className="text-xl font-semibold">{card.title}</h2></Link>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-4"></div>
      <footer className="mt-8">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default SwipeableCards;
