"use client";

import Scene3D from "@/components/Scene3D";
import { TeamMember } from "@/components/TeamMember";
import { Button } from "@/components/ui/button";
import { Code2, Rocket, TrendingUp, Users, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Michelle Rodriguez",
    role: "Marketing Specialist",
    description:
      "Marketing & communication strategist managing content, campaigns, SEO, and performance to drive sustainable growth.",
    initials: "MR",
    image: "/images/team/michelle-rodriguez.jpg",
  },
  {
    name: "Nawid",
    role: "Software Engineer",
    description:
      "Full-stack engineer specialized in modern languages and frameworks, building robust, scalable digital products.",
    initials: "N",
    image: "/images/team/nawid.jpg",
  },
];

const techStack = [
  "JavaScript / TypeScript",
  "Rust",
  "C / C++",
  "C#",
  "Java",
  "Python",
  "Go",
  "Next.js",
  "React",
  "Django",
  "Express.js",
  "Spring Boot",
  ".NET",
];

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/10">
      {/* Hero */}
      <section className="relative overflow-hidden pt-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-8 z-10"
            >
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div className="space-y-4" variants={itemVariants}>
                  <p className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary uppercase tracking-[0.2em]">
                    Digital Presence & Growth
                  </p>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                    Growth
                    <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                      Code
                    </span>
                  </h1>
                </motion.div>
                <motion.p
                  className="text-xl lg:text-2xl text-muted-foreground max-w-2xl font-medium"
                  variants={itemVariants}
                >
                  We build digital presence and market it until it profits.
                </motion.p>
                <motion.p
                  className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl"
                  variants={itemVariants}
                >
                  From web, app, and software development to full-funnel marketing,
                  GrowthCode turns ideas into profitable digital products for small
                  businesses, startups, and enterprises.
                </motion.p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="text-lg px-8 py-6 shadow-lg hover:shadow-xl">
                    Start a Project
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="text-lg px-8 py-6 border-2 hover:bg-primary/5"
                  >
                    View Capabilities
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="h-[380px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-primary/20 bg-gradient-to-br from-primary/10 to-transparent"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
            >
              <Scene3D />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14 lg:mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 mb-6 shadow-lg">
              <Terminal className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Technology Expertise
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in most major languages and frameworks to build
              enterprise-grade digital products.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div
              className="p-6 lg:p-7 rounded-2xl bg-card border border-primary/15"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                Languages
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Deep experience across systems and application programming.
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.slice(0, 7).map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-primary/5 text-xs font-medium text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="p-6 lg:p-7 rounded-2xl bg-card border border-primary/15"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary" />
                Web & Backend
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Modern stacks for fast, secure, and scalable products.
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.slice(7).map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-primary/5 text-xs font-medium text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="p-6 lg:p-7 rounded-2xl bg-card border border-primary/15 flex flex-col justify-between"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                For Every Stage
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                From idea to enterprise rollout, we design and ship digital
                products that match your business stage.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• MVPs and PoCs for startups</li>
                <li>• Robust platforms for small businesses</li>
                <li>• Enterprise integrations & tooling</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14 lg:mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 mb-6 shadow-lg">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A tight, senior duo covering both marketing and engineering, end to end.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {teamMembers.map((member) => (
              <motion.div key={member.name} variants={itemVariants}>
                <TeamMember {...member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to grow your digital presence?
            </h2>
            <p className="text-lg lg:text-xl opacity-95">
              Let&apos;s build something that not only looks great, but also makes
              money.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-10 py-6 shadow-2xl hover:shadow-3xl font-semibold"
              >
                Start Your Project
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

