import { z } from 'zod';

import { emailValidation, phoneValidation, stringValidation } from '.';

export const contactFormSchema = z.object({
   name: stringValidation(2, 'Name must be at least 2 characters'),
   email: emailValidation,
   phone: phoneValidation,
   message: stringValidation(10, 'Message must be at least 10 characters'),
});
