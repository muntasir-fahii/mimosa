import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const playFairDisplay = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)] ">
      <div className="w-full h-full grid grid-rows-8 gap-5 relative">
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
            <h2 className="headline-1 uppercase font-bold">Discover New</h2>
          </div>
        </div>

        <hr className="border-gray" />

        {/* second row */}
        <div className="w-full h-[8rem] grid grid-cols-[25%_auto_50%] gap-20">
          <div className="w-full h-full flex items-center">
            <h2
              className={cn(
                playFairDisplay.className,
                "headline-1 lowercase font-normal"
              )}
            >
              Realms<span className="text-blue">.</span>
            </h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[50px_0px_50px_50px]">
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
            <h2 className="headline-1 uppercase font-bold">Test your </h2>
          </div>
        </div>

        <hr className="border-gray" />

        {/* third row */}
        <div className="w-full h-[8rem] grid grid-cols-[40%_auto] gap-20">
          <div className="w-full h-full flex items-center">
            <h2 className="headline-1 uppercase font-bold">Goddess</h2>
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
            <h2 className="headline-1 uppercase font-bold">
              <span
                className={cn(
                  playFairDisplay.className,
                  "lowercase font-normal"
                )}
              >
                with
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

        {/* packages button */}
        <Link
          href="/#packages"
          className="bg-dark/80 backdrop-blur-lg text-light w-40 h-40 rounded-full overflow-hidden flex justify-center items-center text-lg uppercase absolute left-[35%]  bottom-[13%]  z-[1] group shadow-2xl eq shadow-dark/50 hover:shadow-violet-50"
        >
          <p className="z-[3]"> Packages </p>

          {/*  filler-1 */}
          <span className="absolute z-[2] top-full left-0 bottom-0 right-0 w-full h-1/2 bg-violet group-hover:top-1/2 eq"></span>
          {/*  filler-2 */}
          <span className="absolute z-[2] -top-full left-0 bottom-0 right-0 w-full h-1/2 bg-violet group-hover:top-0 eq"></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
