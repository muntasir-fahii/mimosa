import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import HorizontalTab from '../ui/HorizontalTab';
import { data } from '@/data/paclages';
import PackageItem from '../home/PackageItem';
import { packageItem } from '@/types/packageItem';

const Allpackages = () => {
  return (
    <section className='wrapper section-padding min-h-screen'>
      <SectionTitle title='Explore our beauty packages' subtitle='Packages' />

      <HorizontalTab tabs={['Wellness', 'Beauty', 'Events']}>
        {/* skin care */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {data
            .filter((item: packageItem) => item.masterCategory === 'Wellness')
            .sort((a: packageItem, b: packageItem) => a.price - b.price)

            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        {/* Beauty */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {data
            .filter((item: packageItem) => item.masterCategory === 'Beauty')
            .sort((a: packageItem, b: packageItem) => a.price - b.price)

            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        {/* skin care */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {data
            .filter((item: packageItem) => item.masterCategory === 'Events')
            .sort((a: packageItem, b: packageItem) => a.price - b.price)

            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
      </HorizontalTab>
    </section>
  );
};

export default Allpackages;
