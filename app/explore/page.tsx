import Link from "next/link";
import Footer from "../components/footer";
import Image from "next/image";
const SwipeableCards = () => {
  const cards = [
    {
      id: 1,
      title: "Programming Tips",
      description: "Dive into the world of programming.",
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
    {
      id: 6,
      title: "Fitness Goals",
      description: "Get tips and guidance for achieving your fitness aspirations.",
      image: "https://images.squarespace-cdn.com/content/v1/603a73e7e541b709395810f2/7ce535a7-8047-4ec4-99ce-5d3c2eb41d57/Adrien+lunges.JPEG",
      link: "components/6",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-start text-center p-5 items-center min-h-screen bg-gray-100 pt-8">
        <h1 className="text-4xl font-bold text-center pt-20">
          Explore the Topics you Love ❤️
        </h1>
        <p className="pb-10 pt-4">
          This blog brings together styling advice, healthy diet tips, travel adventures, and the latest trends to help you live your best life.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ${
                index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
              }`}
            >
              <Image
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <Link className="text-black" href={card.link}>
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                </Link>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SwipeableCards;
