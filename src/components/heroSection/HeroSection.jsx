import React from "react";
import { useGlobalContext } from "../../hooks/useGlobalContext";

function HeroSection() {
  const { mode } = useGlobalContext();
  return (
    <section
      style={{ background: mode === "dark" ? "rgb(30, 41, 59)" : "#f0e6e1" }}
    >
      {/* Hero Section  */}
      <div>
        {/* Main Content  */}
        <main className="flex flex-col md:flex-row md:gap-10 justify-center md:justify-around items-center py-10">
          {/* left here section content here  */}
          <div>
            <h1 className="text-5xl text-center md:text-left font-semibold">
              <span className="block">
                Create <span>Great</span>
              </span>
              <span className="">
                Content <span>faster</span>
              </span>
            </h1>
            <p className="mt-5 text-center md:text-left text-xl">
              Overcome writer's blog and publish faster with Communer
            </p>

            <div className="flex items-center gap-10 justify-center md:justify-start my-[2rem]">
              <button className="bg-orange-600 text-white py-2 px-6">
                Get Started
              </button>
              <button className="bg-orange-900 text-white py-2 px-6">
                Learn More
              </button>
            </div>
          </div>
          {/* Right here section content here  */}

          <div className="md:flex md:relative">
            <div>
              <img src="images/hero-1.jpg" className="w-[23rem]" alt="hero1" />
            </div>
            <div>
              <img
                src="images/hero-2.jpg"
                className="hidden md:block md:absolute top-[20rem] left-[8rem]"
                alt="hero2"
              />
            </div>
            <div>
              <img
                src="images/hero-3.jpg"
                className="hidden md:block md:absolute top-[-2rem] left-[20rem]"
                alt="hero3"
              />
            </div>
            <div>
              <img
                src="images/hero-4.jpg"
                className="w-[23rem] mt-5"
                alt="hero4"
              />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default HeroSection;
