function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
  target,
  rel,
}) {
  return (
    <a
      href={href}
      className={`button button-${variant} ${className}`}
      target={target}
      rel={rel}
    >
      <span>{children}</span>
      <span className="button-arrow">↗</span>
    </a>
  );
}

export default Button;