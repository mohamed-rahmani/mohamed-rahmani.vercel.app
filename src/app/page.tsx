import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import LinkWithIcon from "@/components/LinkWithIcon";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, FileDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MOHAMED_BIRTH_YEAR = 2005;
const LIMIT = 2;

export default async function Home() {
  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-lg w-48 h-48 object-cover"
          src="/mohamed.jpeg"
          alt="Photo de Mohamed"
          width={175}
          height={175}
          priority
        />
        <div className="flex flex-col">
          <h1 className="text-5xl">Mohamed RAHMANI</h1>
          <p className="mt-4 font-light">
            Développeur full stack 💻 de{" "}
            {new Date().getFullYear() - MOHAMED_BIRTH_YEAR}
            ans
          </p>
          <p className="mt-2 font-light">
            Je cherche activement un stage de 14 à 15 semaine pour mars 2025
          </p>
          <section className="mt-8 flex items-center gap-8">
            <Link href="/CV_Mohamed_RAHMANI.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">CV</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Skills />

      <Experience />

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="text-2xl sm:text-3xl">Mes projects ✨</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="voir plus"
          />
        </div>
        <FeaturedProjects limit={LIMIT} />
      </section>
    </article>
  );
}
