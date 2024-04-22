const z = require("zod");

const registerSchema = z.object({
  firstname: z
    .string({ required_error: "First-name is required" })
    .trim()
    .min(3, { message: "First-name must be atleast 3 charactres" })
    .max(200, { message: "First-name must be less than 200 characters" }),
  lastname: z
    .string({ required_message: "Last-name required" })
    .trim()
    .min(3, { message: "Last-name must less that 3 characters" })
    .max(200, { message: "Last-name must be less that 200 words" }),
  username: z
    .string({ required_message: "username required" })
    .trim()
    .min(3, { message: "username must be less than 3 characters" })
    .max(200, { message: "username must be less that 200 words" }),
  contact: z
    .string({ required_message: "contact Number required" })
    .min(10, { message: "contact number must contain atlreast 10 characters." })
    .max(30, { message: "contact number must be less than 30 words" }),
  email: z
    .string({ required_error: "Enter email" })
    .trim()
    .email({ message: "Must be an email or contain '@' " }),
  password: z
    .string({ required_error: "please enter Password" })
    .trim()
    .min(3, { message: "Password contain at least 3 characters" })
    .max(200, { message: "Password must be less than 200 characters" }),
});

module.exports = registerSchema;
