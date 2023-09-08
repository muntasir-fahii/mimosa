import { productItem } from '@/types/productsitem';

interface ProducDetailsSectionProps {
  product: productItem;
}

const ProducDetailsSection: React.FC<ProducDetailsSectionProps> = ({
  product,
}) => {
  return (
    <section className='wrapper section-padding'>ProducDetailsSection</section>
  );
};

export default ProducDetailsSection;
