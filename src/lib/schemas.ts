import dynamicIconImports from "lucide-react/dynamicIconImports";
import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .min(2, { message: "Must be at least 2 characters." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email("Invalid email."),
  message: z.string().min(1, { message: "Message is required." }),
});

const iconLink = z.object({
  name: z.string(),
  href: z.string(),
  icon: z.custom<keyof typeof dynamicIconImports>(),
});
export type IconLink = z.infer<typeof iconLink>;

const tag = z.object({
  name: z.string(),
  image: z.string().optional(),
});

const project = z.object({
  name: z.string(),
  description: z.string(),
  content: z.array(z.string()),
  href: z.string().url().optional(),
  image: z.string().optional(),
  tags: z.array(tag),
  links: z.array(iconLink),
});
export const projectSchema = z.object({ projects: z.array(project) });
export type Project = z.infer<typeof project>;

const experience = z.object({
  name: z.string(),
  href: z.string(),
  title: z.string(),
  logo: z.string(),
  start: z.string(),
  end: z.string().optional(),
  description: z.array(z.string()).optional(),
  links: z.array(iconLink).optional(),
});
export type Experience = z.infer<typeof experience>;

const skill = z.object({
  name: z.string(),
  image: z.string(),
  description: z.string().optional(),
});

export type Skill = z.infer<typeof skill>;

export const careerSchema = z.object({ career: z.array(experience) });
export const educationSchema = z.object({ education: z.array(experience) });
export const socialSchema = z.object({ socials: z.array(iconLink) });
export const skillSchema = z.object({ skills: z.array(skill) });
