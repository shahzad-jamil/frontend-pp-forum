import { z } from "zod";


export const PasswordSchema = z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[0-9]/, "Password requires a number")
    .regex(/[a-z]/, "Password requires a lowercase letter")
    .regex(/[A-Z]/, "Password requires an uppercase letter")
    .regex(/[^\w]/, "Password requires a symbol")
    .nonempty("Password is required")