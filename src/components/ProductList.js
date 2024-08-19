import { getProduct } from "@/lib/data_server";
import ProductCard from "./ProductCard";

async function ProductList() {
  const products = await getProduct();

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 py-2">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default ProductList;
