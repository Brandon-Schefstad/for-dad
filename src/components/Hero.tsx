import Image from "next/image";
import bird from "../../public/images/bird-hero.png";
const Hero = () => {
  return (
    <section className="hero relative col-span-7 mb-4 grid grid-cols-7 gap-[1.25rem] ">
      <Image
        src={bird}
        alt={
          "Black and white, bird on a tree branch. The bird is colored blue."
        }
        className="relative -z-0 col-span-7 col-start-1"
      />
      <section className="glass absolute w-1/2 p-12">
        <h1 className="">TAS Photography</h1>
        <p className="">
          Capturing <span className="text-blue-900">memories</span> for over 20
          years
        </p>
      </section>
    </section>
  );
};

export default Hero;
