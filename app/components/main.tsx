import Link from "next/link";
import Card from "./card";

export default function Main() {
  return(
      <div
        className="h-screen bg-cover bg-center   bg-banner" >  
        <div className="flex flex-col md:flex-row  bg-black bg-opacity-50 text-center justify-center items-center h-full text-white  ">
          <div className="md:w-1/2 p-4">
            <h1 className="text-4xl md:text-5xl   font-bold "> Welcome to Blog Brew</h1>
            <p className="text-lg md:text-xl mb-8 pt-3">Discover amazing content and stay updated with our <br /> latest posts unique blog that leaves a lasting impression..</p>
            <Link
              href={"#blog-topic"} className="bg-gray-800  hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
             Explore Now
            </Link>
          </div>
          
        </div>
      </div>
  )
}
