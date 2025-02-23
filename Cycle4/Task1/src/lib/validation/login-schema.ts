import { z } from 'zod';

import { emailValidation, passwordValidation, phoneValidation } from '.';

export const loginSchema = z.object({
   emailOrPhone: z.union([emailValidation, phoneValidation]),
   password: passwordValidation,
});
