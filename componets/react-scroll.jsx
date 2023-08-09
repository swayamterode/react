import React from "react";
import { Link, Element } from "react-scroll";

const SmoothScrollDemo = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full py-4 bg-gray-900 text-white text-center">
        {/* Navigation Link for Section 1 */}
        <Link
          activeClass="active"
          to="section1"          // Target section's name to scroll to
          spy={true}             // Enable spy behavior to highlight the current active link
          smooth={true}          // Enable smooth scrolling
          offset={-70}           // Offset from the top to adjust the scroll position
          duration={500}         // Duration of the scroll animation
          className="cursor-pointer p-2 mx-4 hover:text-gray-400"
        >
          Section 1
        </Link>
        {/* Navigation Link for Section 2 */}
        <Link
          activeClass="active"
          to="section2"          // Target section's name to scroll to
          spy={true}             // Enable spy behavior to highlight the current active link
          smooth={true}          // Enable smooth scrolling
          offset={-56}           // Offset from the top to adjust the scroll position
          duration={500}         // Duration of the scroll animation
          className="cursor-pointer p-2 mx-4 hover:text-gray-400"
        >
          Section 2
        </Link>
      </nav>
      
      {/* Main Content */}
      <div className="justify-center items-center">
        {/* Section 1 */}
        <Element name="section1" className="h-screen w-screen bg-blue-500">
          <h1 className="text-white text-4xl pt-20">Section 1</h1>
        </Element>
        
        {/* Section 2 */}
        <Element name="section2" className="h-screen w-screen bg-green-500">
          <h1 className="text-white text-4xl">Section 2</h1>
        </Element>
      </div>
    </div>
  );
};

export default SmoothScrollDemo;
