'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';


export const Blog1 = () => {
    
interface Comment {
    id: number;
    body: string;
    postId: number;
    user: {
      id: number;
      username: string;
  }
  }
  
  
  const fetchComments = async (): Promise<Comment[]> => {
    const response = await fetch('https://dummyjson.com/comments');
    const data = await response.json();
    return data.comments;
  };
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, []);
  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName('input');
    const textAreaElements = document.getElementsByTagName('textarea');
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();
      
      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ''; // Clear input
        textAreaElements[0].value = ''; // Clear textarea
  

      } else {
        alert('Please enter both a name and a comment.');
      }
    }
  };
  return (
    <div className="blog-container">
      <Image 
        src="https://bernardmarr.com/img/These%2025%20Technology%20Trends%20Will%20Define%20The%20Next%20Decade.png" 
        alt="Technology Trends" 
        width={900} 
        height={400} 
        className="rounded-lg mb-6 mx-auto"
      />
      <h1>Technology Trends</h1>
      <p>The world of technology is constantly evolving, bringing innovations that reshape the way we live and work. Staying informed about the latest advancements can open up opportunities for personal and professional growth. From groundbreaking AI-powered tools to health tech gadgets, the future is all about making our lives more efficient and interconnected. Technology is not just about convenience; it’s about empowering individuals to achieve more and businesses to operate smarter. Embracing these trends can position you to be a part of the ongoing technological revolution.</p>
      <ul>
        <li className='text-gray-600'><b className='text-lg text-gray-700'>AI-Powered Tools:</b> From virtual assistants to creative apps, AI is simplifying daily tasks and enhancing productivity in remarkable ways.</li>
        <br/>
        <li className='text-gray-600'><b className='text-lg text-gray-700'>Smart Home Devices:</b> Gadgets like smart thermostats and voice-activated assistants are transforming how we interact with our homes. These devices not only offer convenience but also contribute to energy efficiency and sustainability.</li>
        <br/>
        <li className='text-gray-600'><b className='text-lg text-gray-700'>Health Tech:</b> Wearable devices like fitness trackers and smartwatches are revolutionizing how we monitor and manage our well-being. They provide real-time data and insights that help individuals take proactive steps towards better health.</li>
        <br/>
        <li className='text-gray-600'><b className='text-gray-700'>Pro Tip:</b> Spend a few minutes each day exploring tech news or experimenting with new apps to seamlessly integrate technology into your lifestyle.</li>
      </ul>
      <p>By embracing these trends, individuals and organizations can stay ahead of the curve. From enhancing productivity to improving quality of life, technology holds the key to a brighter and more connected future.</p>
      <p><b>Conclusion:</b> Stay curious and adaptable as technology continues to evolve. Being proactive in learning and integrating new tools can set you apart in this ever-changing digital era.</p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Comments</h2>
        {comments.length > 0 ? (
  comments.slice(0, 4).map((comment, index) => (
    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md my-4">
      <p className="text-gray-800">
        <b>{comment.user.username}</b>: {comment.body}
      </p>
    </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}

  <div className="mt-4">
          <h3 className="text-lg font-bold">Add a Comment</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            placeholder="Write your comment here..."
            className="border border-gray-300 p-2 rounded-md w-full"
            rows={2}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export const Blog2 = () => {
    
interface Comment {
    id: number;
    body: string;
    postId: number;
    user: {
      id: number;
      username: string;
  }
  }
  
  
  const fetchComments = async (): Promise<Comment[]> => {
    const response = await fetch('https://dummyjson.com/comments');
    const data = await response.json();
    return data.comments;
  };
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, []);
  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName('input');
    const textAreaElements = document.getElementsByTagName('textarea');
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();
      
      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ''; // Clear input
        textAreaElements[0].value = ''; // Clear textarea
        const userDataElement = document.getElementById('userdata');
        if (userDataElement) {
          userDataElement.innerHTML = '<b>' + username + '</b>: ' + userComment;
        }

      } else {
        alert('Please enter both a name and a comment.');
      }
    }
  };
  return (
    <div className="blog-container">
      <Image 
        src="https://www.fcifashion.com/wp-content/uploads/2017/05/Fashion_Styling_img_01.jpg" 
        alt="Styling Tips" 
        width={900} 
        height={400} 
        className="rounded-lg mb-6 mx-auto"
      />
      <h1>Styling Tips for Every Occasion</h1>
      <p>Looking good isn’t just about following trends; it’s about expressing your personality and feeling comfortable in your own skin. Whether you’re dressing for work, a casual outing, or a special event, thoughtful styling can make all the difference. A few smart choices can help you leave a lasting impression while staying true to yourself. Developing your own unique style can also boost your confidence and make you stand out. Remember, the key is to wear what makes you feel both comfortable and empowered.</p>
      <ul>
        <li className='text-gray-600'><b className='text-lg text-gray-700'>Casual Elegance:</b> Pair well-fitted jeans with a crisp shirt or blouse for a look that strikes the perfect balance between relaxed and refined. This combination works for various settings and ensures you look effortlessly chic.</li>
        <br/>
        <li className='text-gray-600'><b className='text-lg text-gray-700'>Accessorize Wisely:</b> Simple accessories like a watch, scarf, or statement necklace can instantly elevate your outfit. Choosing the right accessories can add a touch of sophistication without overwhelming your look.</li>
        <br/>
        <li className='text-gray-600'><b className='text-lg text-gray-700'>Home Aesthetics:</b> Add personal touches to your space with plants, art, or cozy lighting to create a welcoming atmosphere that reflects your style. A beautifully styled home can be an extension of your personal style.</li>
        <br/>
        <li className='text-gray-600'><b className='text-gray-700'>Pro Tip:</b> Choose outfits that align with your personality and make you feel confident and at ease, no matter the occasion.</li>
      </ul>
      <p>In addition to clothing and accessories, grooming and posture also play a significant role in completing your look. Being mindful of these details can enhance your overall appearance and presence.</p>
      <p><b>Conclusion:</b> Style is a form of self-expression. Embrace what makes you unique and let your wardrobe reflect your individuality while keeping comfort a priority.</p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Comments</h2>
        {comments.length > 0 ? (
  comments.slice(0, 4).map((comment, index) => (
    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md my-4">
      <p className="text-gray-800">
        <b>{comment.user.username}</b>: {comment.body}
      </p>
    </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}

  <div className="mt-4">
          <h3 className="text-lg font-bold">Add a Comment</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            placeholder="Write your comment here..."
            className="border border-gray-300 p-2 rounded-md w-full"
            rows={2}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export const Blog3 = () => {
    
interface Comment {
    id: number;
    body: string;
    postId: number;
    user: {
      id: number;
      username: string;
  }
  }
  const [comments, setComments] = useState<Comment[]>([]);
  
  
  const fetchComments = async (): Promise<Comment[]> => {
    const response = await fetch('https://dummyjson.com/comments');
    const data = await response.json();
    return data.comments;
  };

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, []);
  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName('input');
    const textAreaElements = document.getElementsByTagName('textarea');
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();
      
      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ''; // Clear input
        textAreaElements[0].value = ''; // Clear textarea
       

      } else {
        alert('Please enter both a name and a comment.');
      }
    }
  };

  return (
    <div className="blog-container">
      <Image 
        src="https://cfpen.org/wp-content/uploads/2019/05/Eat_Healthy_Blog_15May19-1200x800.jpg" 
        alt="Healthy Diet" 
        width={900} 
        height={400} 
        className="rounded-lg mb-6 mx-auto"
      />
      <h1>Healthy Diet for a Balanced Life</h1>
      <p>Maintaining a healthy diet is crucial for sustaining energy and supporting overall well-being. A balanced approach to nutrition can enhance both your physical and mental health, helping you perform at your best in every aspect of life. Incorporating a variety of wholesome foods into your meals ensures you get the nutrients you need to thrive. By making mindful food choices, you can enjoy delicious meals while keeping your health goals on track. Healthy eating is not about strict limitations but about embracing nutritious options that fuel your body.</p>
      <ul>
        <li className='text-gray-600'><b className='text-lg text-gray-700'>Snack Smart:</b> Opt for fruits, nuts, or yogurt instead of sugary snacks to curb cravings and provide sustained energy. Healthy snacking can keep your metabolism active and prevent overeating during meals.</li>
        <br/>
        <li className='text-gray-600'><b className='text-lg text-gray-700'>Stay Hydrated:</b> Drink plenty of water throughout the day to stay refreshed, and consider adding herbal teas for added health benefits. Proper hydration is essential for maintaining energy levels and overall health.</li>
        <br/>
        <li className='text-gray-600'><b className='text-lg text-gray-700'>Balanced Meals:</b> Include proteins, vegetables, and whole grains in your diet to keep your body nourished and energized throughout the day. Balanced meals promote long-term health and vitality.</li>
        <br/>
        <li className='text-gray-600'><b className='text-gray-700'>Pro Tip:</b> Plan your meals in advance to avoid unhealthy last-minute choices and save time while ensuring nutritious options are always available.</li>
      </ul>
      <p>Developing a consistent meal routine can help you maintain energy levels throughout the day. Paying attention to portion sizes and eating mindfully are also critical aspects of a healthy diet.</p>
      <p><b>Conclusion:</b> A healthy diet is the foundation of a balanced life. By making thoughtful food choices, you can enjoy both short-term and long-term health benefits.</p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Comments</h2>
        {comments.length > 0 ? (
  comments.slice(0, 4).map((comment, index) => (
    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md my-4">
      <p className="text-gray-800">
        <b>{comment.user.username}</b>: {comment.body}
      </p>
    </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}

        <div className="mt-4">
          <h3 className="text-lg font-bold">Add a Comment</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            placeholder="Write your comment here..."
            className="border border-gray-300 p-2 rounded-md w-full"
            rows={2}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export const Blog4 = () => {
    
interface Comment {
    id: number;
    body: string;
    postId: number;
    user: {
      id: number;
      username: string;
  }
  }
  const [comments, setComments] = useState<Comment[]>([]);
  
  
  const fetchComments = async (): Promise<Comment[]> => {
    const response = await fetch('https://dummyjson.com/comments');
    const data = await response.json();
    return data.comments;
  };

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, []);
  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName('input');
    const textAreaElements = document.getElementsByTagName('textarea');
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();
      
      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ''; // Clear input
        textAreaElements[0].value = ''; // Clear textarea
      

      } else {
        alert('Please enter both a name and a comment.');
      }
    }
  };
   
  return (
    <div className="blog-container">
      <Image 
        src="https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg" 
        alt="Travel Adventures" 
        width={900} 
        height={400} 
        className="rounded-lg mb-6 mx-auto"
      />
      <h1>Travel Adventures for Everyone</h1>
      <p>Traveling is a wonderful way to break away from routine, experience new cultures, and create memories that last a lifetime. Whether you’re drawn to serene beaches, bustling cities, or tranquil nature spots, exploring different destinations can bring fresh perspectives and inspire personal growth. Take time to immerse yourself in the journey as much as the destination. Traveling not only refreshes your mind but also broadens your horizons, fostering a deeper appreciation for the world’s diversity.</p>
      <ul>
        <li className='text-gray-600'><b className='text-lg text-gray-700'>Beach Retreats:</b> Relax by the ocean, enjoy water activities, and bask in the tranquility of sandy shores. Beach vacations are perfect for unwinding and reconnecting with nature.</li>
        <br/>
        <li className='text-gray-600'><b className='text-lg text-gray-700'>Cultural Cities:</b> Discover art, history, and local cuisines in vibrant urban centers that offer a mix of modern and traditional experiences. Exploring cultural hubs can provide a deeper understanding of different lifestyles.</li>
        <br/>
        <li className='text-gray-600'><b className='text-lg text-gray-700'>Nature Escapes:</b> Reconnect with the outdoors by visiting mountains, forests, or national parks for a rejuvenating experience. Nature trips can be a great way to unplug and recharge your spirit.</li>
        <br/>
        <li className='text-gray-600'><b className='text-gray-700'>Pro Tip:</b> Travel light, plan ahead, and stay open to unexpected adventures to make the most of your trips.</li>
      </ul>
      <p>Engaging with locals and trying authentic experiences can make your travel adventures more enriching. Keep an open mind Travel is an opportunity to enrich your soul
           and expand your worldview. </p>
           <p><b>Conclusion:</b>  you create memories that stay with you forever. Let curiosity guide your adventures, and savor every moment of your explorations.</p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Comments</h2>
        {comments.length > 0 ? (
  comments.slice(0, 4).map((comment, index) => (
    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md my-4">
      <p className="text-gray-800">
        <b>{comment.user.username}</b>: {comment.body}
      </p>
    </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}

  <div className="mt-4">
          <h3 className="text-lg font-bold">Add a Comment</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            placeholder="Write your comment here..."
            className="border border-gray-300 p-2 rounded-md w-full"
            rows={2}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export const Blog5 = () => {
    
interface Comment {
    id: number;
    body: string;
    postId: number;
    user: {
      id: number;
      username: string;
  }
  }
  
  
  const fetchComments = async (): Promise<Comment[]> => {
    const response = await fetch('https://dummyjson.com/comments');
    const data = await response.json();
    return data.comments;
  };
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, []);
  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName('input');
    const textAreaElements = document.getElementsByTagName('textarea');
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();
      
      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ''; // Clear input
        textAreaElements[0].value = ''; // Clear textarea
        const userDataElement = document.getElementById('userdata');
       
      } else {
        alert('Please enter both a name and a comment.');
      }
    }
  };
   
  return (
    <div className="blog-container">
      <Image 
        src="https://cdn.educba.com/academy/wp-content/uploads/2019/06/What-is-a-Programming-Language.jpg" 
        alt="Programming Tips" 
        width={900} 
        height={400} 
        className="rounded-lg mb-6 mx-auto"
      />
      <h1>Programming Tips for Beginners</h1>
      <p>Starting your programming journey is both exciting and challenging. It’s a skill that requires patience, curiosity, and consistent practice. As you dive into the world of coding, remember to focus on building a strong foundation while exploring the vast possibilities programming offers. From web development to data science, the opportunities are endless. Programming allows you to turn ideas into reality and solve real-world problems through technology. By cultivating a growth mindset, you can overcome challenges and thrive in this dynamic field.</p>
      <ul>
        <li className='text-gray-600'><b className='text-lg text-gray-700'>Choose a Language:</b> Begin with a beginner-friendly language like Python or JavaScript to build confidence and understanding of programming fundamentals. Starting with an approachable language helps simplify complex concepts and ensures a smoother learning curve.</li>
        <br/>
        <li className='text-gray-600'><b className='text-lg text-gray-700'>Practice Regularly:</b> Dedicate time each day to coding. Small, consistent efforts yield significant improvements over time. Regular practice helps solidify your understanding and makes coding second nature.</li>
        <br/>
        <li className='text-gray-600'><b className='text-lg text-gray-700'>Use Online Resources:</b> Take advantage of free tutorials, coding challenges, and forums to enhance your learning experience and connect with fellow coders. Engaging with a community of learners and professionals can provide motivation and valuable insights.</li>
        <br/>
        <li className='text-gray-600'><b className='text-gray-700'>Pro Tip:</b> Build small projects like a to-do app or a personal portfolio to apply what you’ve learned and showcase your skills effectively.</li>
      </ul>
      <p>Don’t shy away from experimenting and making mistakes as they are essential parts of the learning process. The more you code, the more confident and proficient you become in tackling programming challenges.</p>
      <p><b>Conclusion:</b> Programming is a journey of continuous learning. Embrace the process, celebrate small wins, and stay curious to unlock endless possibilities in this ever-evolving field.</p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Comments</h2>
        {comments.length > 0 ? (
  comments.slice(0, 4).map((comment, index) => (
    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md my-4">
      <p className="text-gray-800">
        <b>{comment.user.username}</b>: {comment.body}
      </p>
    </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}

        <div className="mt-4">
          <h3 className="text-lg font-bold">Add a Comment</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            placeholder="Write your comment here..."
            className="border border-gray-300 p-2 rounded-md w-full"
            rows={2}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};
export const Blog6 = () => {
  interface Comment {
    id: number;
    body: string;
    postId: number;
    user: {
      id: number;
      username: string;
    };
  }

  const fetchComments = async (): Promise<Comment[]> => {
    const response = await fetch('https://dummyjson.com/comments');
    const data = await response.json();
    return data.comments;
  };

  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchComments().then(setComments).catch(console.error);
  }, []);

  const handleAddComment = () => {
    const inputElements = document.getElementsByTagName('input');
    const textAreaElements = document.getElementsByTagName('textarea');
    if (inputElements.length > 0 && textAreaElements.length > 0) {
      const username = inputElements[0].value.trim();
      const userComment = textAreaElements[0].value.trim();

      if (username && userComment) {
        const newComment = {
          id: comments.length + 1,
          body: userComment,
          postId: 1,
          user: {
            id: comments.length + 1,
            username: username,
          },
        };
        setComments([newComment, ...comments]);
        inputElements[0].value = ''; // Clear input
        textAreaElements[0].value = ''; // Clear textarea
      } else {
        alert('Please enter both a name and a comment.');
      }
    }
  };

  return (
    <div className="blog-container">
      <Image
        src="https://images.squarespace-cdn.com/content/v1/603a73e7e541b709395810f2/7ce535a7-8047-4ec4-99ce-5d3c2eb41d57/Adrien+lunges.JPEG"
        alt="Fitness Tips"
        width={900}
        height={200}
        className="rounded-lg mb-6 mx-auto"
      />
      <h1>Fitness Tips for a Healthier Life</h1>
      <p>
        Staying fit and active is one of the most rewarding investments you can make for your body and mind. A healthy lifestyle not only improves your physical well-being but also boosts your mental clarity and confidence. Whether you are starting your fitness journey or looking to level up, consistency and mindfulness are key to success.
      </p>
      <ul>
        <li className="text-gray-600">
          <b className="text-lg text-gray-700">Set Realistic Goals:</b> Begin with achievable fitness goals to stay motivated and track your progress. Starting small and gradually increasing intensity helps you avoid burnout and injuries.
        </li>
        <br />
        <li className="text-gray-600">
          <b className="text-lg text-gray-700">Mix Up Your Workouts:</b> Incorporate a variety of exercises, including strength training, cardio, and flexibility routines, to keep your body challenged and engaged. A diverse workout plan prevents monotony and targets different muscle groups effectively.
        </li>
        <br />
        <li className="text-gray-600">
          <b className="text-lg text-gray-700">Stay Hydrated and Eat Right:</b> Drink plenty of water throughout the day, especially during workouts, to maintain energy and endurance. Pair this with a balanced diet rich in nutrients to fuel your fitness journey.
        </li>
        <br />
        <li className="text-gray-600">
          <b className="text-gray-700">Pro Tip:</b> Prioritize rest and recovery. Quality sleep and rest days are essential for muscle repair, growth, and overall performance improvement.
        </li>
      </ul>
      <p>
        Remember, fitness is not a destination but a lifelong journey. Celebrate your progress, no matter how small, and stay committed to your goals. With patience and perseverance, you’ll discover the joy of a healthier and more active lifestyle.
      </p>
      <p>
        <b>Conclusion:</b> Embrace fitness as a way of life. Consistency, determination, and a positive mindset will empower you to achieve your goals and live your best, healthiest life.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Comments</h2>
        {comments.length > 0 ? (
          comments.slice(0, 4).map((comment, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md my-4">
              <p className="text-gray-800">
                <b>{comment.user.username}</b>: {comment.body}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}

        <div className="mt-4">
          <h3 className="text-lg font-bold">Add a Comment</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md w-full mb-2"
          />
          <textarea
            placeholder="Write your comment here..."
            className="border border-gray-300 p-2 rounded-md w-full"
            rows={2}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-md mt-2"
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
};
