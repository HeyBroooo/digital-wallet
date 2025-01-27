// components/Hero/Hero.jsx
'use client';
import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";
import SplineBackground from "./SplineBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Element name="hero">
        {/* Spline Background */}
        <SplineBackground />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 max-w-screen-xl pt-20 md:pt-32 lg:pt-60">
          <div className="relative max-w-sm md:max-w-lg lg:max-w-xl">
            {/* Semi-transparent backdrop */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-lg -m-4"></div>

            {/* Content */}
            <div className="relative p-4">
              <div className="caption small-2 uppercase text-p3">
                Powering Financial Freedom
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-p4 uppercase">
                DigitWallet
              </h1>

              <p className="text-base md:text-lg mb-8 md:mb-10 lg:mb-14 max-w-md">
                DigitWallet provides an all-in-one solution for you to manage, exchange, and grow your assets effortlessly.
              </p>

              <LinkScroll
                to="features"
                offset={-100}
                spy
                smooth
                className="inline-block"
              >
                <Button icon="/images/zap.svg">Try it now</Button>
              </LinkScroll>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;