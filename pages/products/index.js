import Products from '../../src/components/products';
import { getProductPageStaticProps } from '../../src/reusable-static-props';

const ProductsPage = ({ products, pageInfo }) => (
    <Products paginationInfo={pageInfo} products={products} />
);
export const getStaticProps = getProductPageStaticProps;
export default ProductsPage;
