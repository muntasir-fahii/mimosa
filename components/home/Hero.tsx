import { cn } from '@/lib/utils';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const playFairDisplay = Playfair_Display({ subsets: ['latin'] });

const Hero = () => {
  return (
    <section className='wrapper section-padding h-[calc(100vh-5rem)] '>
      <div className='grid-rows-8 relative grid h-full w-full gap-5'>
        {/* first row */}
        <div className='grid h-[8rem] w-full grid-cols-[30%_auto] gap-20 '>
          <div className='h-full w-full overflow-hidden rounded-[0px_50px_0px_50px]'>
            <Image
              src='https://images.pexels.com/photos/823816/pexels-photo-823816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Photography of a Woman Holding Lights
'
              width={640}
              height={360}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex h-full w-full items-center'>
            <h2 className='headline-1 font-bold uppercase'>Expose New</h2>
          </div>
        </div>

        <hr className='border-gray' />

        {/* second row */}
        <div className='grid h-[8rem] w-full grid-cols-[25%_auto_50%] gap-20'>
          <div className='flex h-full w-full items-center'>
            <h2
              className={cn(
                playFairDisplay.className,
                'headline-1 font-normal lowercase'
              )}
            >
              Realms<span className='text-blue'>.</span>
            </h2>
          </div>
          <div className='h-full w-full overflow-hidden rounded-[50px_0px_50px_50px]'>
            <Image
              src='https://images.pexels.com/photos/839633/pexels-photo-839633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt="Women's Red Lips
"
              width={320}
              height={180}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex h-full w-full items-center'>
            <h2 className='headline-1 font-bold uppercase'>Test your </h2>
          </div>
        </div>

        <hr className='border-gray' />

        {/* third row */}
        <div className='grid h-[8rem] w-full grid-cols-[40%_auto] gap-20'>
          <div className='flex h-full w-full items-center'>
            <h2 className='headline-1 font-bold uppercase'>Goddess</h2>
          </div>
          <div className='h-full w-full overflow-hidden rounded-[0px_50px_0px_50px]'>
            <Image
              src='https://images.pexels.com/photos/3294253/pexels-photo-3294253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Close-Up Photo Of Woman

'
              width={1280}
              height={720}
              className='h-full w-full object-cover'
            />
          </div>
        </div>

        <hr className='border-gray' />

        {/* fourth row */}
        <div className='grid h-[8rem] w-full grid-cols-[35%_auto] gap-20'>
          <div className='h-full w-full overflow-hidden rounded-[0px_50px_0px_50px]'>
            <Image
              src='https://images.pexels.com/photos/8221203/pexels-photo-8221203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Photography of a Woman Holding Lights
'
              width={1280}
              height={720}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex h-full w-full items-center'>
            <h2 className='headline-1 font-bold uppercase'>
              <span
                className={cn(
                  playFairDisplay.className,
                  'font-normal lowercase'
                )}
              >
                with
              </span>{' '}
              M
              <span
                className={cn(
                  playFairDisplay.className,
                  'font-normal lowercase text-orange'
                )}
              >
                i
              </span>
              mosa
              <span className='text-pink'>.</span>
            </h2>
          </div>
        </div>

        <hr className='border-gray' />

        {/* packages button */}
        <Link
          href='/#packages'
          className='eq hover:shadow-violet-50 group absolute bottom-[13%] left-[35%] z-[1] flex h-40 w-40 items-center justify-center overflow-hidden rounded-full  bg-dark/80  text-lg uppercase text-light shadow-2xl shadow-dark/50 backdrop-blur-lg'
        >
          <p className='z-[3]'> Packages </p>

          {/*  filler-1 */}
          <span className='eq absolute bottom-0 left-0 right-0 top-full z-[2] h-1/2 w-full bg-violet group-hover:top-1/2'></span>
          {/*  filler-2 */}
          <span className='eq absolute -top-full bottom-0 left-0 right-0 z-[2] h-1/2 w-full bg-violet group-hover:top-0'></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
