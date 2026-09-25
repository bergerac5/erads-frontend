import {z} from "zod";

export const emergencySchema = z.object({
    type: z.enum(["FIRE", "MEDICAL", "POLICE", "NATURAL_DISASTER", "OTHER"], {
        message: "Emergency Required Type",
    }),
    priority: z.enum(["LOW", "MEDIUM", "HIGH"], {
        message: "Emergency Required Priority",
    }),
    discription: z.string().min(10,"Emergency Description must be at least 10 characters long").max(200,"Emergency Description must be at most 200 characters long"),
    latitude: z
    .number()
    .min(-90, "Latitude must be >= -90")
    .max(90, "Latitude must be <= 90")
    .nullable()
    .optional(),
  longitude: z
    .number()
    .min(-180, "Longitude must be >= -180")
    .max(180, "Longitude must be <= 180")
    .nullable()
    .optional(),
});

export const trackSchema = z.object({
  accessCode: z
    .string()
    .length(8, "Access code must be 8 characters"),
});