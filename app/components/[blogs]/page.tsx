'use client'
import { usePathname } from 'next/navigation';
import { Blog1, Blog2, Blog3, Blog4, Blog5 , Blog6  } from '../blogs';

export default function DynamicBlog() {
  const id = usePathname();
  console.log(id)
  const renderBlog = () => {
    switch (id) {
      case '/components/1':
        return <Blog1 />;
      case '/components/2':
        return <Blog2 />;
      case '/components/3':
        return <Blog3 />;
      case '/components/4':
        return <Blog4 />;
      case '/components/5':
        return <Blog5 />;
        case '/components/6':
        return <Blog6 />;
      default:
        return <p>Blog not found</p>;
    }
  };

  return (
    <div className="min-h-screen py-10 px-4">
      {renderBlog()}
    </div>
  );
}