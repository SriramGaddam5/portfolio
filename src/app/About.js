import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={`text-6xl font-semibold`}>About Me</h1>
      <p>
        I like to create video games in Unity and have experience with Java, C#,
        React, Python, and HTML/CSS. Aside from coding, I like to paint and play
        the guitar.
      </p>
    </main>
  );
}
