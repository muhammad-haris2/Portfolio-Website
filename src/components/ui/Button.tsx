import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

type Variant = "primary" | "outline" | "text" | "dark";

type Shared = { variant?: Variant; children: ReactNode; className?: string };
type AsButton = Shared & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type AsAnchor = Shared & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type Props = AsButton | AsAnchor;

export function Button({ variant = "primary", children, className, ...props }: Props) {
  const classes = cn("button", `button--${variant}`, className);
  if ("href" in props && props.href) return <a className={classes} {...props}>{children}</a>;
  return <button className={classes} {...(props as AsButton)}>{children}</button>;
}
