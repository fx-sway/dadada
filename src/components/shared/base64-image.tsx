import Image from "next/image";
import useBase64URL from "@/hooks/use-base64-url";

interface Properties {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function Base64Image({
  src,
  alt,
  width,
  height,
}: Readonly<Properties>) {
  const imageURL = useBase64URL("jpg", src);

  return <Image src={imageURL} alt={alt} width={width} height={height} />;
}
