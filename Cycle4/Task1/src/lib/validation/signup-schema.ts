import { z } from 'zod';

import {
   emailValidation,
   passwordValidation,
   phoneValidation,
   stringValidation,
} from '.';

export const signupSchema = z.object({
   name: stringValidation(2, 'Name must be at least 2 characters'),
   emailOrPhone: z.union([emailValidation, phoneValidation]),
   password: passwordValidation,
});
