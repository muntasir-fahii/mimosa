import ProducDetailsSection from '@/components/product-detaiils/ProducDetailsSection';
import FooterMini from '@/components/shared/footer/FooterMini';
import Navbar from '@/components/shared/navbar/Navbar';
import { data } from '@/data/products';
import { productItem } from '@/types/productsitem';

const ProductsDetailsPage = ({ params }: { params: { id: string } }) => {
  const product = data.find((item: productItem) => item.id === +params.id);

  if (!product) {
    return null;
  }

  return (
    <>
      <Navbar />
      <ProducDetailsSection product={product} />
      <FooterMini />
    </>
  );
};

export default ProductsDetailsPage;
