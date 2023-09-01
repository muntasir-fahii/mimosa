import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import HorizontalTab from '../shared/HorizontalTab';
import { data } from '@/data/paclages';
import PackageItem from './PackageItem';

const Packages = () => {
  return (
    <section className='wrapper section-padding' id='packages'>
      <SectionTitle title='Explore our beauty packages' subtitle='Packages' />

      <HorizontalTab tabs={['Wellness', 'Beauty', 'Events']}>
        {/* skin care */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Wellness')
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        {/* Beauty */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Beauty')
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        {/* skin care */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Events')
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
      </HorizontalTab>
    </section>
  );
};

export default Packages;
