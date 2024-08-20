import { getProduct } from "@/lib/data_server";
import { Image } from "next/image";

async function page({ params }) {
  const product = await getProduct(params.productId);

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
  } = product[0];

  return (
    <section className="w-full mt-6 ">
      <div className="flex items-start justify-between flex-wrap gap-y-4 ">
        <div className="m-auto">
          <div>
            <img src={image} className="w-full md:w-[450px] md:h-[450px]" />
          </div>
        </div>
        <div className="m-auto space-y-12">
          <h1 className="text-xl text-wrap">{name}</h1>
          <div className="flex items-center gap-x-2">
            <p>برند:</p>
            <span>{category}</span>
          </div>
          <div className="flex items-center justify-between gap-x-6">
            <div className="flex items-center gap-x-2">
              <p>حافظه:</p>
              <span>{storage}</span>
            </div>
            <div className="flex items-center gap-x-2">
              <p>رم:</p>
              <span>{ram}</span>
            </div>
            <div className="flex items-center gap-x-2">
              <p>رزولوشن دوربین سلفی:</p>
              <span>{selfCamera}</span>
            </div>
          </div>
          {/* price */}
          <div className="flex items-center gap-x-2 text-lg ">
            <h4>قیمت:</h4>
            {discount > 0 ? (
              <>
                <div className="flex items-center gap-x-3">
                  <span className="text-2xl flex items-center gap-x-1">
                    {(regularPrice - discount).toLocaleString()}
                    <span className="text-xs">تومان</span>
                  </span>
                  <span className="line-through font-semibold text-red-400">
                    {regularPrice.toLocaleString()}
                  </span>
                </div>
              </>
            ) : (
              <span className="text-xl  ">
                {regularPrice.toLocaleString()}تومان
              </span>
            )}
          </div>
          <div>
            <button className="px-4 py-2 bg-red-600 rounded-md">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-12 mt-8">
        <p className="mb-4">معرفی</p>
        <span className="leading-8">{description}</span>
      </div>
    </section>
  );
}

export default page;
