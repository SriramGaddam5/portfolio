import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    // Your code here, e.g., fetching data
  }, []);
  const router = useRouter();
  const { id } = router.query; // This captures the parameter

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={`text-6xl font-semibold`}>About Me</h1>
      <p>
        I like to create video games in Unity and have experience with Java, C#,
        React, Python, and HTML/CSS. Aside from coding, I like to paint and play
        the guitar.{id}
      </p>
    </div>
  );
}
