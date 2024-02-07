import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function ConditionalWrapper({ wrapper, children }: {
  wrapper?: ((children: React.ReactNode) => React.ReactNode) | '' | undefined | null | false;
  children: React.ReactNode;
}) {
  return wrapper ? wrapper(children) : children;
};