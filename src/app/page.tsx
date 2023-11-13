import { Intro } from "@/components/into";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <article className="flex justify-between">
        <Intro />
      </article>
    </main>
  )
}
