import Image, { type StaticImageData } from "next/image";
interface ImageContainerProps {
  src: StaticImageData;
  alt: string;
  classList: string;
  before?: string;
  after?: string;
}
const ImageContainer = ({
  src,
  alt,
  classList,
  before,
  after,
}: ImageContainerProps) => {
  let textBGClass;
  if (after && after.length > 1) {
    textBGClass =
      " after:absolute after:inset-1 after:mt-20 after:z-[20] after:w-[80%] after:m-auto after:bg-black after:bg-opacity-80 after:content-[attr(after)] after:text-white after:grid after:place-items-center after:hover:bg-opacity-50 after:hover:place-items-center after:hover:mt-8 after:hover:text-red-200 after:text-xl after:md:text-2xl after:lg:text-3xl after:xl:text-5xl after:h-16 after:hover:h-12 after:font-extralight";
  }

  return (
    <div
    // before={before}

    // className={
    //   classList +
    //   textBGClass +
    //   " " +
    //   ` bg:h-full bg:h-full bg:w-full before:hover:text- relative before:absolute before:inset-0 before:z-[10] before:grid before:place-items-center before:bg-black before:bg-opacity-10  before:text-3xl before:text-white  before:content-[attr(before)]  before:hover:place-items-start  before:hover:bg-opacity-0 before:hover:text-red-200 `
    // }
    >
      <Image src={src} alt={alt} />
    </div>
  );
};

export default ImageContainer;
