import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)] ">
      <div className="w-full h-full grid grid-rows-8 gap-5 bg-red">
        {/* first row */}
        <div className="w-full h-[8rem] grid grid-cols-[30%_auto] gap-20 ">
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/799420/pexels-photo-799420.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Photography of a Woman Holding Lights
"
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="text-8xl uppercase font-semibold">
              lorem ipsum ipsum
            </h2>
          </div>
        </div>
        <hr className="border-gray" />
        {/* second row */}
        <div className="w-full h-[8rem] grid grid-cols-[25%_auto_50%] gap-20">
          <div className="w-full h-full flex items-center">
            <h2 className="text-8xl uppercase font-semibold">lorem</h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/799420/pexels-photo-799420.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Photography of a Woman Holding Lights
"
              width={320}
              height={180}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="text-8xl uppercase font-semibold">lorems lorem</h2>
          </div>
        </div>
        <hr className="border-gray" />
        {/* third row */}
        <div className="w-full h-[8rem] grid grid-cols-[40%_auto] gap-20">
          <div className="w-full h-full flex items-center">
            <h2 className="text-8xl uppercase font-semibold">lorems los</h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/799420/pexels-photo-799420.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Photography of a Woman Holding Lights
"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <hr className="border-gray" />
        {/* fourth row */}
        <div className="w-full h-[8rem] grid grid-cols-[35%_auto] gap-20">
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/799420/pexels-photo-799420.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Photography of a Woman Holding Lights
"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="text-8xl uppercase font-semibold">lorems los la</h2>
          </div>
        </div>
        <hr className="border-gray" />
      </div>
    </section>
  );
};

export default Hero;
