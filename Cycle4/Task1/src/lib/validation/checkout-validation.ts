import { z } from 'zod';

import {
   emailValidation,
   phoneValidation,
   stringValidation,
} from '../validation';

export const checkoutSchema = z.object({
   firstName: stringValidation(2, 'First name must be at least 2 characters'),
   companyName: stringValidation().optional(),
   streetAddress: stringValidation(
      5,
      'Street address must be at least 5 characters'
   ),
   apartment: stringValidation().optional(),
   townCity: stringValidation(2, 'Town/City must be at least 2 characters'),
   phoneNumber: phoneValidation,
   emailAddress: emailValidation,
   saveInformation: z.boolean().default(false),
   paymentMethod: z.enum(['bank', 'cash']).default('bank'),
});
