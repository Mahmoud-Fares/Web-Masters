import { z } from 'zod';

import { emailValidation, passwordValidation, stringValidation } from '.';

export const editProfileSchema = z
   .object({
      firstName: stringValidation(
         2,
         'First name must be at least 2 characters'
      ),
      lastName: stringValidation(2, 'Last name must be at least 2 characters'),
      email: emailValidation,
      address: stringValidation(5, 'Address must be at least 5 characters'),
      currentPassword: stringValidation().optional(),
      newPassword: stringValidation()
         .optional()
         .transform((val) => (val === '' ? undefined : val))
         .pipe(passwordValidation.optional()),
      confirmPassword: stringValidation().optional(),
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
