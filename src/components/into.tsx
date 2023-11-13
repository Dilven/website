import Image from "next/image"
import { RoughNotation } from "react-rough-notation"

export const Intro = () => {
  return (
    <section className="flex gap-5">
      <div className="flex-3">
        <h2>Hello! I&apos;m Krystian</h2>
        <p>I love building tools that are user friendly. 
        <RoughNotation type="highlight" color="yellow" show={true}>
          HTML
        </RoughNotation>
        <RoughNotation type="crossed-off" color="red" show={true}>
          {"CSS "}
        </RoughNotation>
        <RoughNotation type="highlight" color="yellow" show={true}>
          React
        </RoughNotation>
        </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        <RoughNotation type="circle" color="red" show={true}>
          Hire me!
        </RoughNotation>      
      </div>
      <Image
        src="/krystian-photo.jpeg"
        width={500}
        height={500}
        className="flex-none shadow-lg rounded max-w-full h-auto align-middle border-none"
        alt="Photo of a happy Krystian"
      />

    </section>
  )
}