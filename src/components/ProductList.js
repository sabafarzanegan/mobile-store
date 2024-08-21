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
  if (filter === "Xiaomi")
    displayedProducts = products.filter(
      (product) => product.category === "Xiaomi"
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
    <div className="flex items-center justify-center gap-x-4 gap-y-4 flex-wrap py-6">
      {displayedProducts.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default ProductList;
