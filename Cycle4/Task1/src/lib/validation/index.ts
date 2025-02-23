import { z } from 'zod';

export const stringValidation = (minLength = 0, message = '') =>
   z.string().min(minLength, message);

export const emailValidation = z
   .string()
   .email('Please enter a valid email address');

export const phoneValidation = z
   .string()
   .min(10, 'Phone number must be at least 10 characters')
   .regex(/^\+?[\d\s-]{10,}$/, 'Please enter a valid phone number');

export const passwordValidation = z
   .string()
   .min(8, 'Password must be at least 8 characters')
   .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
   .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
   .regex(/[0-9]/, 'Password must contain at least one number');
