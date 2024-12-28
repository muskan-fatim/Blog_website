import Link from "next/link";
export default function Footer() {
    return (
      <footer className="bg-black text-gray-300 py-8">
        
        <div className="container mx-auto px-4">
          {/* Footer Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400 text-sm">
                Welcome to Blog Website, your go-to source for insightful articles, updates, and inspiration. We aim to create a community that values knowledge and creativity.
              </p>
            </div>
  
            {/* Navigation Links */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
              <ul>
                <li>
                  <Link
                  href="/" className="text-gray-400 hover:text-white text-sm block mb-2">Home</Link>
                </li>
                <li>
                  <Link
                     href="/about" className="text-gray-400 hover:text-white text-sm block mb-2">About</Link>
                </li>
                <li>
                  <Link
                    href="/contact" className="text-gray-400 hover:text-white text-sm block mb-2">Contact</Link>
                </li>
                <li>
                  <Link href
                  ="/explore"className="text-gray-400 hover:text-white text-sm block mb-2">Blog</Link>
                </li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .592 0 1.324v21.351C0 23.408.593 24 1.325 24h11.495v-9.294H9.69V11.7h3.13V9.087c0-3.1 1.894-4.787 4.659-4.787 1.325 0 2.465.099 2.794.144v3.24h-1.918c-1.504 0-1.795.715-1.795 1.762V11.7h3.587l-.467 3.006h-3.12V24h6.116C23.407 24 24 23.408 24 22.675V1.324C24 .592 23.407 0 22.675 0z" />
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557a9.834 9.834 0 01-2.828.775 4.932 4.932 0 002.165-2.725 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.379 4.482A13.94 13.94 0 011.671 3.15a4.916 4.916 0 001.523 6.573 4.899 4.899 0 01-2.23-.616v.062a4.914 4.914 0 003.946 4.817 4.897 4.897 0 01-2.224.085 4.917 4.917 0 004.6 3.417 9.862 9.862 0 01-6.102 2.104c-.397 0-.787-.023-1.175-.068a13.939 13.939 0 007.548 2.213c9.056 0 14.007-7.507 14.007-14.007 0-.213-.005-.425-.014-.637A10.012 10.012 0 0024 4.557z" />
                  </svg>
                </Link>
                <Link
                  href="https://instagram.com"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.741 0 8.332.012 7.053.072 5.775.133 4.92.312 4.212.63a4.932 4.932 0 00-1.768 1.178A4.932 4.932 0 00.63 4.212C.312 4.92.133 5.775.072 7.053.012 8.332 0 8.741 0 12s.012 3.668.072 4.947c.061 1.278.24 2.134.558 2.842a4.932 4.932 0 001.178 1.768 4.932 4.932 0 001.768 1.178c.708.318 1.564.497 2.842.558C8.332 23.988 8.741 24 12 24s3.668-.012 4.947-.072c1.278-.061 2.134-.24 2.842-.558a4.932 4.932 0 001.768-1.178 4.932 4.932 0 001.178-1.768c.318-.708.497-1.564.558-2.842.061-1.279.072-1.688.072-4.947s-.012-3.668-.072-4.947c-.061-1.278-.24-2.134-.558-2.842a4.932 4.932 0 00-1.178-1.768A4.932 4.932 0 0019.842.63c-.708-.318-1.564-.497-2.842-.558C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zm0 10.162a3.999 3.999 0 100-7.998 3.999 3.999 0 000 7.998zm6.406-11.26a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom Section */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Blog Website. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  