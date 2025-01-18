import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Element name="hero">
        {/* Spline Background Container */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-1/2 left-1/2 lg:left-[70%] transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] md:w-[120%] md:h-[120%] lg:w-full lg:h-full transition-all duration-300 lg:mt-14">
            <Spline
              scene="https://prod.spline.design/NlCNFBkDT7IoH-17/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 max-w-screen-xl pt-20 md:pt-32 lg:pt-60">
          <div className="relative max-w-sm md:max-w-lg lg:max-w-xl">
            {/* Semi-transparent backdrop for better text readability */}
            <div className="absolute inset-0 rounded-lg -m-4"></div>

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
