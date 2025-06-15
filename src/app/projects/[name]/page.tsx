import Icon from "@/components/Icon";
import { Badge } from "@/components/ui/badge";
import data2 from "@/data/personal_projects.json";
import data1 from "@/data/student_projects.json";
import { Project, projectSchema } from "@/lib/schemas";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageParams = Promise<{ name: string }>;

export default async function ProjectPage({ params }: { params: PageParams }) {
  const { name } = await params;
  if (!name) {
    throw notFound();
  }

  const projectName = decodeURIComponent(name);
  const studentProjects = projectSchema.parse(data1).projects;
  const personalProjects = projectSchema.parse(data2).projects;

  const studentProject = await getProjectByName(projectName, studentProjects);
  let project = studentProject;

  if (project == null) {
    const personalProject = await getProjectByName(
      projectName,
      personalProjects
    );
    if (personalProject == null) {
      throw notFound;
    } else {
      project = personalProject;
    }
  }

  return (
    <div>
      {project.image && (
        <Image
          src={project.image}
          alt={project.name}
          width={500}
          height={500}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      )}
      <h1 className="text-5xl font-extrabold mt-6">{project.name}</h1>
      {project.content.map((texte, index) => (
        <p key={index} className="text-lg mt-4">
          {texte}
        </p>
      ))}

      {project.tags.length > 0 && (
        <h1 className="text-4xl font-bold mt-6">Stack technique</h1>
      )}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge
            key={tag.name}
            className="p-1 text-sm flex items-center gap-1"
            variant="secondary"
          >
            {tag.image && (
              <Image src={tag.image} alt={tag.name} width={20} height={20} />
            )}
            <p>{tag.name}</p>
          </Badge>
        ))}
      </div>

      <div className="flex flex-row flex-wrap items-start gap-1 mt-6 mb-8 w-fit">
        {project.links.map((link, index) => (
          <Link href={link.href} key={index} target="_blank">
            <Badge key={index} className="flex gap-2 px-3 py-2 text-[10px]">
              <Icon name={link.icon} className="size-4" />
              <p className="text-sm">{link.name}</p>
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
}

async function getProjectByName(
  name: string,
  projects: Project[]
): Promise<Project | null> {
  return (
    projects.find((p) => p.name.toLowerCase() == name.toLowerCase()) || null
  );
}
