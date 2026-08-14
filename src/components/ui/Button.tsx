import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

interface SharedProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "accent-gradient text-white shadow-lg shadow-accent-glow hover:opacity-90 hover:shadow-xl hover:shadow-accent-glow",
  secondary:
    "glass text-text-primary hover:border-border-hover hover:bg-white/5",
  ghost: "text-text-secondary hover:text-text-primary hover:bg-white/5",
  outline:
    "border border-border text-text-primary hover:border-accent hover:text-accent-light",
};

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsAnchor = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:cursor-not-allowed";

  const combined = cn(baseStyles, variantStyles[variant], className);

  if ("href" in props && props.href) {
    return (
      <a className={combined} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combined} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
