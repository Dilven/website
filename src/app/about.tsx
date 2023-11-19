import Image from "next/image"
import { RoughNotation } from "react-rough-notation"

export const About = () => {
  return (
    <section id="about" className="flex gap-10">
      <div className="flex justify- flex-col flex-3 gap-3">
        <h1 className="py-3">Hello! I&apos;m <RoughNotation type="underline" color="#81D2C7" show={true}>
          {" Krystian "}
        </RoughNotation>, a passionate software engineer. <span className="animate-waving">👋🏻</span></h1>
        <p>developer who loves building things, whether it&apos;s making the server do its magic or crafting beautiful, user-friendly interfaces.
          I have a special fondness for
          <RoughNotation type="highlight" color="#F84AA7" show={true}>
            {" TypeScript "}
          </RoughNotation>
          because, let&apos;s face it, who doesn&apos;t appreciate a bit of type love in their code?
          And just between us, I can&apos;t remember the last time I tinkered with plain old JavaScript.
        </p>
        <p>Frontend? I&apos;m all about <RoughNotation type="highlight" color="#7CB9E8" show={true}>
          {" React + Next.js "}
        </RoughNotation>for slick user experiences. Backend? <RoughNotation type="highlight" color="#81D2C7" show={true}>
            {" AWS Lambda, SQS, SNS "}
          </RoughNotation> </p>
        <p>Building stuff? <RoughNotation type="highlight" color="#81D2C7" show={true}>
          {" Terraform "}
        </RoughNotation> is my go-to for infrastructure. (Serverless Framework? It&apos;s around, but hey, preferences.)</p>

        <p>

          When I&apos;m not diving into code, I&apos;m a huge football⚽️ enthusiast, though these days, I find myself watching more than playing.
          I&apos;m an huge Arsenal F.C. fan, and I&apos;m hoping this year might finally bring some victories (which might be the perfect opportunity to finally visit London).
          In my free time, I enjoy hitting the gym💪 and engaging in various sports activities.
          I live in Wrocław
        </p>
      </div>
      <Image
        src="/krystian-photo.jpeg"
        width={480}
        height={480}
        className="flex-none shadow-lg rounded max-w-full h-auto align-middle border-none"
        alt="Photo of a happy Krystian"
      />

    </section>
  )
}