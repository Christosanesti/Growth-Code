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
    <Card className="group hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/50">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            {image && (
              <AvatarImage src={image} alt={name} />
            )}
            <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription className="text-base mt-1">{role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

