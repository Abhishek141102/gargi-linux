import React from "react";

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
}

const fallbackImage = `${(import.meta as ImportMeta & { env: { BASE_URL: string } }).env.BASE_URL}assets/blog-placeholder.svg`;

export const BlogImage: React.FC<BlogImageProps> = ({
  src,
  alt,
  className,
  loading,
}) => (
  <img
    src={src}
    alt={alt}
    className={className}
    loading={loading}
    onError={(event) => {
      const image = event.currentTarget;
      if (image.src.endsWith("/blog-placeholder.svg")) {
        image.style.visibility = "hidden";
        return;
      }
      image.src = fallbackImage;
    }}
  />
);

