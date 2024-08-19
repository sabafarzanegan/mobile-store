import ProductList from "@/components/ProductList";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";

function page() {
  return (
    <>
      <div className="space-y-12">
        <h1 className="text-xl font-semibold">فروشگاه موبایل و لوازم جانبی </h1>
        <p className="text-base leading-8">
          داشتن یک گوشی کاربردی می‌تواند به تمامی برنامه‌های کاری افراد نظم
          بخشیده و امکان ارتباط با افراد مختلف و بازی و سرگرمی را نیز برای
          کاربران ممکن سازد. به همین خاطر شرکت‌های مختلف تولیدکننده گوشی موبایل
          هر روز مدل‌های پیشرفته‌تری از تلفن همراه را به ‌بازار ارائه می‌کنند،
          تا پاسخگوی نیازهای مخاطبان خود باشند. اما بهترین برند ارائه دهنده گوشی
          موبایل کدام است و کدام برندها در بازار از طرفداران بیشتری برخوردار
          هستند؟
        </p>
        <Suspense fallback={<Spinner />}>
          <ProductList />
        </Suspense>
      </div>
    </>
  );
}

export default page;
