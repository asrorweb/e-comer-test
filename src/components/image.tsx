"use client";

import Image from "next/image";
import { FC, useState } from "react";

interface Props {
  fill?: boolean;
  width?: number;
  height?: number;
  src: string;
  alt: string;
  className?: string;
}

const OptimazeImage: FC<Props> = ({ width, height, src, alt, fill, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
          }} ${className}`}
          onLoad={() => setIsLoading(false)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
          }} ${className}`}
          onLoad={() => setIsLoading(false)}
        />
      )}
    </>
  );
};

export default OptimazeImage;
