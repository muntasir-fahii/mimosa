import Products from '@/components/products/Products';
import FooterMini from '@/components/shared/footer/FooterMini';
import Navbar from '@/components/shared/navbar/Navbar';

const Productspage = () => {
  return (
    <>
      <Navbar />
      <Products fromProductPage />
      <FooterMini />
    </>
  );
};

export default Productspage;
