import { data } from '@/data/products';
import SectionTitle from '../shared/SectionTitle';
import ProductItem from './ProductItem';
import { productItem } from '../../types/productsitem';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';

interface ProductsProps {
  fromProductPage?: boolean;
}

const Products: React.FC<ProductsProps> = ({ fromProductPage }) => {
  return (
    <section className='wrapper section-padding' id='products'>
      <SectionTitle
        subtitle='Products'
        title='Browse our beauty products'
        color='bg-blue'
      />

      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {!fromProductPage &&
          data
            .sort((a: productItem, b: productItem) => a.price - b.price)
            .slice(0, 8)
            .map((item: productItem) => (
              <ProductItem key={item.id} item={item} />
            ))}

        {fromProductPage &&
          data
            .sort((a: productItem, b: productItem) => a.price - b.price)
            .map((item: productItem) => (
              <ProductItem key={item.id} item={item} />
            ))}
      </div>

      {!fromProductPage && (
        <div className='mt-20 flex justify-center'>
          <Link
            href='/products'
            className={buttonVariants({ variant: 'outline' })}
          >
            View all products
          </Link>
        </div>
      )}
    </section>
  );
};

export default Products;
