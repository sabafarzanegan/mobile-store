import { getProducts } from "@/lib/data_server";
import ProductCard from "./ProductCard";

async function ProductList({ filter }) {
  const products = await getProducts();
  if (!products.length) return null;

  let displayedProducts;

  if (filter === "all") displayedProducts = products;
  if (filter === "samsung")
    displayedProducts = products.filter(
      (product) => product.category === "samsung"
    );
  if (filter === "iphone")
    displayedProducts = products.filter(
      (product) => product.category === "iphone"
    );
  if (filter === "xiaomi")
    displayedProducts = products.filter(
      (product) => product.category === "xiaomi"
    );
  if (filter === "honer")
    displayedProducts = products.filter(
      (product) => product.category === "honer"
    );
  if (filter === "motorola")
    displayedProducts = products.filter(
      (product) => product.category === "motorola"
    );

  return (
    <div className="flex items-center justify-between flex-wrap gap-y-8">
      {displayedProducts.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default ProductList;
