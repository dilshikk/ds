import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { toast } from "sonner";
import { Send, CheckCircle2 } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(20, "Please describe your project (min 20 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactDetails = [
  { label: "Telegram", value: "@ds_creative", href: "#" },
  { label: "Email", value: "hello@dscreative.studio", href: "#" },
  { label: "Instagram", value: "@dscreative", href: "#" },
  { label: "LinkedIn", value: "DS Creative", href: "#" },
];

const projectTypes = [
  "Website",
  "E-Commerce",
  "Mobile App",
  "Branding",
  "SEO",
  "SMM",
  "Automation",
  "Other",
];

const budgetRanges = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
];

function InputField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="font-sans text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p className="font-sans text-xs text-destructive">{error}</p>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const submitContact = useMutation(api.contact.submit);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitContact({
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        projectType: data.projectType,
        budget: data.budget,
        message: data.message,
      });
      setSubmitted(true);
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-28 pb-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-accent"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="font-display font-bold uppercase leading-none tracking-tight text-foreground"
            style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
          >
            HAVE AN IDEA?
            <br />
            <span className="text-accent">{"LET'S BUILD IT."}</span>
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="font-sans text-base leading-relaxed text-muted-foreground mb-12 max-w-sm">
              Tell us about your project and we'll get back to you within 24 hours with our initial
              thoughts and a proposed next step.
            </p>

            <div className="space-y-0 border-t border-border">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between border-b border-border py-5 hover:border-accent transition-colors duration-300"
                >
                  <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="font-display text-sm font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {item.value}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <CheckCircle2 className="h-12 w-12 text-accent mb-6" />
                <h2 className="font-display text-3xl font-bold uppercase text-foreground mb-4">
                  Message Sent
                </h2>
                <p className="font-sans text-muted-foreground max-w-xs">
                  Thank you. We'll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-sans text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-300 underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputField label="Name *" error={errors.name?.message}>
                    <input
                      {...register("name")}
                      placeholder="John Smith"
                      className="w-full border border-border/80 bg-card px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none transition-colors duration-200"
                    />
                  </InputField>
                  <InputField label="Company" error={errors.company?.message}>
                    <input
                      {...register("company")}
                      placeholder="Acme Corp"
                      className="w-full border border-border/80 bg-card px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none transition-colors duration-200"
                    />
                  </InputField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputField label="Email *" error={errors.email?.message}>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="john@example.com"
                      className="w-full border border-border/80 bg-card px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none transition-colors duration-200"
                    />
                  </InputField>
                  <InputField label="Phone" error={errors.phone?.message}>
                    <input
                      {...register("phone")}
                      placeholder="+1 555 000 0000"
                      className="w-full border border-border/80 bg-card px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none transition-colors duration-200"
                    />
                  </InputField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputField label="Project Type *" error={errors.projectType?.message}>
                    <select
                      {...register("projectType")}
                      defaultValue=""
                      className="w-full border border-border/80 bg-card px-4 py-3 font-sans text-sm text-foreground focus:border-accent focus:outline-none transition-colors duration-200 appearance-none"
                    >
                      <option value="" disabled>Select type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-card">
                          {type}
                        </option>
                      ))}
                    </select>
                  </InputField>
                  <InputField label="Budget *" error={errors.budget?.message}>
                    <select
                      {...register("budget")}
                      defaultValue=""
                      className="w-full border border-border/80 bg-card px-4 py-3 font-sans text-sm text-foreground focus:border-accent focus:outline-none transition-colors duration-200 appearance-none"
                    >
                      <option value="" disabled>Select budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-card">
                          {range}
                        </option>
                      ))}
                    </select>
                  </InputField>
                </div>

                <InputField label="Message *" error={errors.message?.message}>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell us about your project — what you're building, what you need, and when you want to start."
                    className="w-full border border-border/80 bg-card px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none transition-colors duration-200 resize-none"
                  />
                </InputField>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center gap-3 border border-border bg-card px-8 py-4 font-sans text-sm uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
