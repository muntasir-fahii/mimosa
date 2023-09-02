import Image from 'next/image';

const CommunityGathered = () => {
  return (
    <section className='section-padding-2 min-h-screen bg-dark'>
      <div className='wrapper relative flex h-full w-full items-center justify-center'>
        {/* blocks */}
        <div className='relative grid h-[1000px] w-[1000px] grid-cols-10'>
          {Array.from({ length: 100 }).map((_, index) => (
            /* outer block */
            <div key={index} className='group z-[4] h-full w-full'>
              {/* inner block */}
              <div className='eq invisible h-full w-full bg-blue opacity-50 group-hover:visible group-hover:opacity-100'></div>
            </div>
          ))}

          {/* overlay */}
          <div className='absolute bottom-0 left-0 right-0 top-0 z-[2] h-full w-full bg-orange/20'></div>

          {/* image */}
          <div className='absolute bottom-0 left-0 right-0 top-0 z-[1] h-full w-full overflow-hidden'>
            <Image
              src='https://images.pexels.com/photos/1463924/pexels-photo-1463924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Graceful Woman with her Arms Raised Underwater'
              width={1000}
              height={1000}
              priority
              className='h-full w-full object-cover'
            />
          </div>
        </div>

        {/* upper left text */}
        <div className='absolute left-0 top-[10%] z-[3] w-[50%] text-5xl font-semibold uppercase text-light'>
          {`Join now to grab the`}{' '}
          <span className='text-blue'>{`"Mimosa Beauty Pass"`}</span>{' '}
          {`for all services at once!`}
        </div>

        {/* bottom right text */}
        <div className='absolute bottom-[10%] right-0 z-[3] w-[50%] text-right text-5xl font-semibold uppercase text-light'>
          {`3-month subscription,`} <span className='text-blue'>$300</span>.{' '}
          {`Limited time – join us today!`}
        </div>
      </div>
    </section>
  );
};

export default CommunityGathered;
