import React from 'react';
import Image from 'next/image';

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen py-10 px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-center">
                <div className="md:w-1/2 md:order-1 flex">
                    <h1 className="text-4xl font-bold text-left md:text-5xl md:text-right md:pl-10 mb-4 md:mb-0">About Us</h1>
                </div>
                <div className="md:w-1/2 md:order-2 md:pl-8">
                    <p className="text-lg text-gray-700 mb-4 mt-9 hidden md:block">
                        We cover a wide range of subjects including technology, lifestyle, health, and more.
                        Thank you for visiting our blog. We hope you enjoy reading our posts as much as we enjoy creating them.
                        If you have any questions or feedback, feel free to reach out to us.
                    </p>
                </div>
                <div>
                    <p className="text-lg text-gray-700 text-center md:hidden">
                        We cover a wide range of subjects including technology, lifestyle, health, and more.
                        Thank you for visiting our blog.
                    </p>
                </div>
            </div>
            <div className="mt-8">
                <Image 
                    src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.png" 
                    alt="About Us" 
                    width={600} 
                    height={400} 
                    className="rounded-lg mb-6 mx-auto"
                />
            </div>
            <div className="flex justify-center items-center mt-8">
                <button className="bg-black rounded-xl p-3 text-white">Read more</button>
            </div>
        </div>
    );
};

export default AboutPage;