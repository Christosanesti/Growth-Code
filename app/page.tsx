"use client";

import { TeamMember } from "@/components/TeamMember";
import Scene3D from "@/components/Scene3D";
import { Button } from "@/components/ui/button";
import { Code2, Rocket, TrendingUp, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    description: "Visionary leader with 10+ years of experience in digital transformation and business growth strategies.",
    initials: "AJ",
    // Option 1: Use local images from public/images/team/
    image: "/images/team/alex-johnson.jpg",
    // Option 2: Use placeholder service (uncomment to use)
    // image: "https://ui-avatars.com/api/?name=Alex+Johnson&size=200&background=6366f1&color=fff",
  },
  {
    name: "Sarah Chen",
    role: "CTO & Lead Developer",
    description: "Full-stack expert specializing in modern web technologies, mobile apps, and scalable software architecture.",
    initials: "SC",
    image: "/images/team/sarah-chen.jpg",
    // image: "https://ui-avatars.com/api/?name=Sarah+Chen&size=200&background=6366f1&color=fff",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Marketing",
    description: "Growth marketing specialist who turns digital products into profitable businesses through data-driven strategies.",
    initials: "MR",
    image: "/images/team/michael-rodriguez.jpg",
    // image: "https://ui-avatars.com/api/?name=Michael+Rodriguez&size=200&background=6366f1&color=fff",
  },
  {
    name: "Emily Watson",
    role: "Creative Director",
    description: "Design expert focused on creating beautiful, user-centric digital experiences that convert visitors into customers.",
    initials: "EW",
    image: "/images/team/emily-watson.jpg",
    // image: "https://ui-avatars.com/api/?name=Emily+Watson&size=200&background=6366f1&color=fff",
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    description: "Frontend and backend wizard passionate about building high-performance applications with cutting-edge technologies.",
    initials: "DK",
    image: "/images/team/david-kim.jpg",
    // image: "https://ui-avatars.com/api/?name=David+Kim&size=200&background=6366f1&color=fff",
  },
  {
    name: "Lisa Anderson",
    role: "Marketing Strategist",
    description: "Digital marketing guru specializing in SEO, content marketing, and conversion optimization for sustainable growth.",
    initials: "LA",
    image: "/images/team/lisa-anderson.jpg",
    // image: "https://ui-avatars.com/api/?name=Lisa+Anderson&size=200&background=6366f1&color=fff",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  Growth
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Code
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                  We build digital presence and market it till it profits.
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Specialized in building digital presence (web, app, software) and then
                marketing it until it becomes profitable. We turn your ideas into
                successful digital products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Scene3D />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to profit, we handle every aspect of your digital journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-card border-2 hover:border-primary/50 transition-colors relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Code2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Build</h3>
                <p className="text-muted-foreground">
                  We create stunning websites, mobile apps, and software solutions
                  using the latest technologies and best practices.
                </p>
              </div>
            </div>
            <div className="p-8 rounded-lg bg-card border-2 hover:border-primary/50 transition-colors relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Launch</h3>
                <p className="text-muted-foreground">
                  We ensure your digital product is ready for the market with
                  thorough testing, optimization, and deployment strategies.
                </p>
              </div>
            </div>
            <div className="p-8 rounded-lg bg-card border-2 hover:border-primary/50 transition-colors relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Grow</h3>
                <p className="text-muted-foreground">
                  We market your product strategically until it becomes profitable,
                  using data-driven approaches and proven growth tactics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The talented individuals behind GrowthCode&apos;s success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Grow Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let&apos;s work together to build and market your digital product until it
            becomes profitable.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Start Your Project
          </Button>
        </div>
      </section>
    </main>
  );
}

