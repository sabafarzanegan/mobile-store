import Image from "next/image";
function ProductCard({ product }) {
  return (
    <div className="flex items-center justify-center gap-x-6 ">
      {/* img div */}
      <div>
        <Image
          width={200}
          height={200}
          src={product.image}
          className="object-cover"
        />
      </div>
      {/* info product */}
      <div className="space-y-4 text-base">
        <h3 className="text-lg">{product.name}</h3>
        <div className="flex items-center gap-x-6">
          <div className="flex items-center gap-x-2">
            <p>حافظه:</p>
            <span>{product.storage}</span>
            گیگابایت
          </div>
          <div className="flex items-center gap-x-2">
            <p>رم:</p>
            <span>{product.ram}</span>
            گیگ
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <p>دسته:</p>
          <span>{product.category}</span>
        </div>

        {product.discount > 0 ? (
          <>
            <div className="flex items-center gap-x-3">
              <span className="text-2xl flex items-center gap-x-1">
                {(product.regularPrice - product.discount).toLocaleString()}
                <span className="text-xs">تومان</span>
              </span>
              <span className="line-through font-semibold text-red-400">
                {product.regularPrice.toLocaleString()}
              </span>
            </div>
          </>
        ) : (
          <span className="text-xl ">
            {product.regularPrice.toLocaleString()}
          </span>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
