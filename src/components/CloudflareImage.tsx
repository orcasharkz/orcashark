type Props = {
  src: string;
  alt: string;
  width: number;
  height?: number;
  quality?: number;
  fit?: "cover" | "contain";
  format?: "auto" | "avif" | "webp" | "jpeg";
  loading?: "eager" | "lazy";
};

export const CloudflareImage = ({
  src,
  alt,
  width,
  height,
  quality,
  fit,
  format,
  loading,
}: Props) => {
  const params = [`w=${width}`];
  if (height) params.push(`h=${height}`);
  if (quality) params.push(`q=${quality}`);
  if (fit) params.push(`fit=${fit}`);
  if (format) params.push(`f=${format}`);
  const paramsString = params.join(",");
  return (
    <img
      src={`https://orcashark.com/cdn-cgi/image/${paramsString}/${src}`}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
    />
  );
};
