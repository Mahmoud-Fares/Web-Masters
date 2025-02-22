import { z } from 'zod';

import { validateTheEmailAndPhone } from '@/lib/utils';

const passwordSchema = z
   .string()
   .min(8, 'Password must be at least 8 characters')
   .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
   .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
   .regex(/[0-9]/, 'Password must contain at least one number');

const emailOrPhone = z
   .string()
   .min(1, 'Email or phone number is required')
   .refine((value) => validateTheEmailAndPhone(value), {
      message: 'Please enter a valid email or phone number',
   });

export const signupSchema = z.object({
   name: z.string().min(2, 'Name must be at least 2 characters'),
   emailOrPhone: emailOrPhone,
   password: passwordSchema,
});

export const loginSchema = z.object({
   emailOrPhone: emailOrPhone,
   password: passwordSchema,
});

export const editProfileSchema = z
   .object({
      firstName: z.string().min(2, 'First name must be at least 2 characters'),
      lastName: z.string().min(2, 'Last name must be at least 2 characters'),
      email: z.string().email('Invalid email address'),
      address: z.string().min(5, 'Address must be at least 5 characters'),
      currentPassword: z.string().optional(),
      newPassword: z
         .string()
         .optional()
         .transform((val) => (val === '' ? undefined : val)) // to handle no password change
         .pipe(passwordSchema.optional()),

      confirmPassword: z.string().optional(),
   })

   .refine((data) => !(data.newPassword && !data.currentPassword), {
      message: 'Current password is required when changing password',
      path: ['currentPassword'],
   })

   .refine(
      (data) => !data.newPassword || data.newPassword === data.confirmPassword,
      {
         message: 'Passwords do not match',
         path: ['confirmPassword'],
      }
   )
   .refine(
      (data) => !data.newPassword || data.newPassword !== data.currentPassword,
      {
         message: 'New password is the same as the current password',
         path: ['newPassword'],
      }
   );
