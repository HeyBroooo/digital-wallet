import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse bg-gray-700 rounded-lg w-full h-full"></div>
    </div>
  )
});

const SplineBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute top-1/2 left-1/2 lg:left-[70%] transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] md:w-[120%] md:h-[120%] lg:w-full lg:h-full transition-all duration-300 lg:mt-14">
        <Spline
          scene="https://prod.spline.design/NlCNFBkDT7IoH-17/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default SplineBackground;