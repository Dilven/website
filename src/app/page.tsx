import { About } from "@/app/about";
import { Projects } from "./projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <article className="flex flex-col gap-y-20">
        <About />
        <Projects />
      </article>
    </main>
  )
}
