import { ProjectCard } from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import data2 from "@/data/personal_projects.json";
import data1 from "@/data/student_projects.json";
import { projectSchema } from "@/lib/schemas";

export default async function ProjectPage() {
  const student_projects = projectSchema.parse(data1).projects;
  const personal_projects = projectSchema.parse(data2).projects;
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="text-5xl">Mes projects</h1>
      <Tabs defaultValue="student">
        <TabsList className="mb-2 grid w-full grid-cols-2">
          <TabsTrigger value="student">Universitaire</TabsTrigger>
          <TabsTrigger value="personal">Personnel</TabsTrigger>
        </TabsList>
        <TabsContent value="student">
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {student_projects.map((project, id) => (
              <ProjectCard key={id} project={project} />
            ))}
          </section>
        </TabsContent>
        <TabsContent value="personal">
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {personal_projects.map((project, id) => (
              <ProjectCard key={id} project={project} />
            ))}
          </section>
        </TabsContent>
      </Tabs>
    </article>
  );
}
