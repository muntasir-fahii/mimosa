import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playFairDisplay = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)] ">
      <div className="w-full h-full grid grid-rows-8 gap-5 ">
        {/* first row */}
        <div className="w-full h-[8rem] grid grid-cols-[30%_auto] gap-20 ">
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/823816/pexels-photo-823816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Photography of a Woman Holding Lights
"
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="text-8xl uppercase font-bold">Discover New</h2>
          </div>
        </div>
        <hr className="border-gray" />
        {/* second row */}
        <div className="w-full h-[8rem] grid grid-cols-[25%_auto_50%] gap-20">
          <div className="w-full h-full flex items-center">
            <h2
              className={cn(
                playFairDisplay.className,
                "text-8xl lowercase font-normal"
              )}
            >
              Realms<span className="text-blue">.</span>
            </h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/839633/pexels-photo-839633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Women's Red Lips
"
              width={320}
              height={180}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="text-8xl uppercase font-bold">Explore Your</h2>
          </div>
        </div>
        <hr className="border-gray" />
        {/* third row */}
        <div className="w-full h-[8rem] grid grid-cols-[40%_auto] gap-20">
          <div className="w-full h-full flex items-center">
            <h2 className="text-8xl uppercase font-bold">Goddess</h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/3294253/pexels-photo-3294253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Close-Up Photo Of Woman

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
              src="https://images.pexels.com/photos/8221203/pexels-photo-8221203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Photography of a Woman Holding Lights
"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="text-8xl uppercase font-bold">
              <span
                className={cn(
                  playFairDisplay.className,
                  "lowercase font-normal"
                )}
              >
                within
              </span>{" "}
              M
              <span
                className={cn(
                  playFairDisplay.className,
                  "text-orange font-normal lowercase"
                )}
              >
                i
              </span>
              mosa
              <span className="text-pink">.</span>
            </h2>
          </div>
        </div>
        <hr className="border-gray" />
      </div>
    </section>
  );
};

export default Hero;
