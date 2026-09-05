function InlineSvg({ markup, className = "", title, decorative = false }) {
  return (
    <span
      className={`inline-block [&>svg]:block [&>svg]:h-auto [&>svg]:w-full ${className}`}
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : title}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}

export default InlineSvg;
