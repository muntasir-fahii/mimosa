import { data } from '@/data/paclages';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/Button';
import { packageItem } from '@/types/packageItem';
import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import HorizontalTab from '../ui/HorizontalTab';
import PackageItem from './PackageItem';
import Link from 'next/link';

interface PackagesProps {
  fromPackagePage?: boolean;
}

const Packages: React.FC<PackagesProps> = ({ fromPackagePage }) => {
  return (
    <section className='wrapper section-padding' id='packages'>
      <SectionTitle title='Explore our beauty packages' subtitle='Packages' />

      {/* packages */}
      <HorizontalTab tabs={['Wellness', 'Beauty', 'Events']}>
        {/* skin care */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {!fromPackagePage &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Wellness')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .slice(0, 4)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
          {fromPackagePage &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Wellness')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
        </div>
        {/* Beauty */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {!fromPackagePage &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Beauty')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .slice(0, 4)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
          {fromPackagePage &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Beauty')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
        </div>
        {/* skin care */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {!fromPackagePage &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Events')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .slice(0, 4)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
          {fromPackagePage &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Events')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)

              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
        </div>
      </HorizontalTab>

      {!fromPackagePage && (
        <div className='flex justify-center'>
          <Link
            href='/packages'
            className={cn(buttonVariants({ variant: 'outline' }), 'mt-20')}
          >
            View all packages
          </Link>
        </div>
      )}
    </section>
  );
};

export default Packages;
