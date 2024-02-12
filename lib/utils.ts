import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function ConditionalWrapper({ wrapper, fallbackWrapper, children }: {
  wrapper?: ((children: React.ReactNode) => React.ReactNode) | '' | undefined | null | false;
  fallbackWrapper?: ((children: React.ReactNode) => React.ReactNode) | '' | undefined | null | false;
  children: React.ReactNode;
}) {
  if (wrapper) {
    return wrapper(children)
  } else {
    return fallbackWrapper ? fallbackWrapper(children) : children;
  }
};