import bgImage from "../../public/landing2.png";
import Image from "next/image";
import Link from "next/link";
function page() {
  return (
    <main className="mt-24">
      <Image
        src={bgImage}
        className="object-cover object-top opacity-85"
        fill
        placeholder="blur"
        quality={99}
        alt="am mobile image"
      />

      <div className="relative z-10 text-center ">
        <h1 className="text-7xl font-semibold text-primary-50 mb-10 tracking-tight backdrop-blur-md p-2">
          Galexy Ai
        </h1>
        <Link
          href="/store"
          className="bg-accent-500 px-6 py-4 text-primary-800 text-lg font-semibold hover:bg-red-700 bg-red-500 transition-all duration-150 rounded-md">
          فروشگاه
        </Link>
      </div>
    </main>
  );
}

export default page;
