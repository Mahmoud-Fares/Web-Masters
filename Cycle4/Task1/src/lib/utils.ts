import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function validateTheEmailAndPhone(value: string) {
   // Basic email regex
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   // Basic phone regex (assumes a simple format)
   const phoneRegex = /^\+?[\d\s-]{10,}$/;

   return emailRegex.test(value) || phoneRegex.test(value);
}
