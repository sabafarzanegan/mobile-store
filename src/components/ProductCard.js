import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  const {
    id,
    name,
    storage,
    ram,
    regularPrice,
    discount,
    image,
    description,
    selfCamera,
    backCamera,
    category,
    count,
  } = product;
  return (
    <Link href={`/store/${id}`} className="max-w-[600px] md:max-w-[540px]">
      <div className="flex items-start justify-between md:justify-center gap-x-6  rounded-lg ">
        {/* img div */}
        <div className="">
          <Image
            className="object-cover w-[80%] h-[80%] rounded-lg overflow-hidden"
            width={300}
            height={300}
            src={image}
          />
        </div>
        {/* info product */}
        <div className="space-y-4 md:space-y-8 text-base">
          <h3 className="text-base  md:text-lg text-wrap">{name}</h3>
          <div className="flex items-center gap-x-6 text-base md:text-lg">
            <div className="flex items-center gap-x-2">
              <p>حافظه:</p>
              <span>{storage}</span>
              گیگابایت
            </div>
            <div className="flex items-center gap-x-2">
              <p>رم:</p>
              <span>{ram}</span>
              گیگ
            </div>
          </div>
          <div className="flex items-center gap-x-2 text-base md:text-lg">
            <p>دسته:</p>
            <span>{category}</span>
          </div>

          {discount > 0 ? (
            <>
              <div className="flex items-center gap-x-3">
                <span className="text-lg md:text-2xl flex items-center gap-x-1">
                  {(regularPrice - discount).toLocaleString()}
                  <span className="text-xs">تومان</span>
                </span>
                <span className="line-through font-semibold text-red-400">
                  {regularPrice.toLocaleString()}
                </span>
              </div>
            </>
          ) : (
            <span className="text-base md:text-2xl mt-2 ">
              {regularPrice.toLocaleString()}
              <span className="text-sm ">تومان</span>
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
