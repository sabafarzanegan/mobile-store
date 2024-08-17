import Image from "next/image";
import landing from "../../public/landing.jpg";

function Hero() {
  return (
    <div className="">
      <Image
        className="object-cover object-top"
        fill
        placeholder="blur"
        quality={80}
        alt="a mobile image for event"
        src={landing}
      />
    </div>
  );
}

export default Hero;
