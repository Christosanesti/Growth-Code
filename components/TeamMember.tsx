"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  initials: string;
  image?: string;
}

export function TeamMember({ name, role, description, initials, image }: TeamMemberProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/50 hover:-translate-y-2 relative overflow-hidden bg-card">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardHeader className="relative z-10">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
            {image && (
              <AvatarImage src={image} alt={name} className="object-cover" />
            )}
            <AvatarFallback className="text-lg font-semibold bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{name}</CardTitle>
            <CardDescription className="text-base mt-1">{role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

