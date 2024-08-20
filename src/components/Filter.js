"use client";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function Filter() {
  const searchparams = useSearchParams();
  // console.log(searchparams);
  const router = useRouter();
  // console.log(router);
  const pathname = usePathname();

  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchparams);
    params.set("category", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  const activeFilter = searchparams.get("category") ?? "all";
  console.log(activeFilter);

  return (
    <div className="border border-primary-800 flex items-center ">
      <button
        className={`px-5 py-2 hover:bg-gray-700 ${
          activeFilter === "all" ? "bg-gray-700" : ""
        } `}
        onClick={() => handleFilter("all")}>
        همه
      </button>
      <button
        onClick={() => handleFilter("samsung")}
        className={`px-5 py-2 hover:bg-gray-700 ${
          activeFilter === "samsung" ? "bg-gray-700" : ""
        } `}>
        سامسونگ
      </button>
      <button
        onClick={() => handleFilter("iphone")}
        className={`px-5 py-2 hover:bg-gray-700 ${
          activeFilter === "iphone" ? "bg-gray-700" : ""
        } `}>
        آیفون
      </button>
      <button
        onClick={() => handleFilter("honer")}
        className={`px-5 py-2 hover:bg-gray-700 ${
          activeFilter === "honer" ? "bg-gray-700" : ""
        } `}>
        آنر
      </button>
      <button
        onClick={() => handleFilter("motorola")}
        className={`px-5 py-2 hover:bg-gray-700 ${
          activeFilter === "motorola" ? "bg-gray-700" : ""
        } `}>
        موتورلا
      </button>
      {/* <button
        onClick={() => handleFilter("Xiaomi")}
        className="px-5 py-2 hover:bg-primary-700">
        شیائومی
      </button> */}
    </div>
  );
}

export default Filter;
