import Link from "next/link";

function Logo() {
  return (
    <div className="z-10">
      <Link href="/">
        <h1 className="font-bold text-3xl text-red-600">Mobile store</h1>
      </Link>
    </div>
  );
}

export default Logo;
