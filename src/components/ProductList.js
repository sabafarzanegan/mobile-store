import { getProducts } from "@/lib/data_server";
import ProductCard from "./ProductCard";

async function ProductList() {
  const products = await getProducts();

  return (
    <div className="flex items-center justify-between flex-wrap gap-y-8">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default ProductList;
