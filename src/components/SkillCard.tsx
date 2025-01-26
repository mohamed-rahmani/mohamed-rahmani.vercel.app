import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Skill } from "@/lib/schemas";
import Image from "next/image";
import Markdown from "react-markdown";

interface Props {
  skill: Skill;
}

export function SkillCard({ skill }: Props) {
  const { name, image, description } = skill;

  return (
    <Card className="flex flex-row items-center gap-4 p-4">
      {image && (
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="h-16 w-16 flex-shrink-0 object-cover object-center rounded-lg"
        />
      )}
      <CardContent className="p-0 flex flex-col justify-center items-start">
        <CardTitle className="text-base font-bold text-primary mb-2">
          {name}
        </CardTitle>
        <Markdown className="prose max-w-full text-xs text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>
      </CardContent>
    </Card>
  );
}
