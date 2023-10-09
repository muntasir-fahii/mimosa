import { data } from '@/data/gallery';
import SectionTitle from '../shared/SectionTitle';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { galleryType } from '@/types/gallery';

const Gallery = () => {
  return (
    <section className='min-h-screen bg-dark text-light'>
      <div className='wrapper section-padding h-full w-full'>
        <SectionTitle
          title='Explore The Glams of Beuaties'
          subtitle='Gallery'
          color='bg-pink'
        />

        {/* Grid Parent */}
        <div className='gallery-grid-parent h-screen w-full gap-10'>
          {data.map((item: galleryType) => (
            <div
              key={item.id}
              className={cn(
                item.class,
                'eq group h-full w-full overflow-hidden border-[12px] border-pink/20 shadow-2xl hover:border-pink/30'
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                height={item.height}
                width={item.width}
                property=''
                className='eq h-full w-full object-cover brightness-75 grayscale group-hover:brightness-100 group-hover:grayscale-0'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
