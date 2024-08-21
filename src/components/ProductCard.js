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

    category,
    count,
  } = product;
  return (
    //
    <div className="flex border-primary-800 border w-full">
      <div className="">
        <Image
          width={200}
          height={200}
          src={image}
          alt={` ${name}`}
          className="object-cover  border-r border-primary-800 h-full "
        />
      </div>

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <p className="text-lg text-primary-200">
              حافظه: <span className="font-bold">{storage}</span>
            </p>
            <p className="text-lg text-primary-200">
              رم: <span className="font-bold">{ram}</span>
            </p>
            <p className="text-lg text-primary-200">
              سلفی: <span className="font-bold">{selfCamera}</span>
            </p>
            <p className="text-lg text-primary-200">
              مدل: <span className="font-bold">{category}</span>
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">
                  {(regularPrice - discount).toLocaleString()}تومان
                </span>
                <span className="line-through text-red-400 font-semibold text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl font-[350]">
                {regularPrice.toLocaleString()}تومان
              </span>
            )}
            {/* <span className="text-primary-200">/ night</span> */}
          </p>
        </div>
        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/store/${id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-red-500 transition-all hover:text-primary-900">
            &rarr; مشاهده و خرید
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
