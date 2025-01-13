import { z } from "zod";

// Define validation schema using Zod
export const schema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address"),
  companyName: z.string().nonempty("Company name is required"),
  country: z.string().nonempty("Country is required"),
  userType: z.string().nonempty("User type is required"),
  supportType: z.string().nonempty("Support type is required"),
});