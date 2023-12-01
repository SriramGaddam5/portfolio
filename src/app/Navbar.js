import Link from "next/link";

export default function Navbar() {
  return (
    <div class="flex items-center justify-between px-24 py-8">
      <Link className={`text-cyan-500 font-bold`} href="/">
        Home
      </Link>
      <Link className={`text-white font-bold`} href="/VIST105">
        VIST 105
      </Link>
      <Link className={`text-white font-bold`} href="/ARST115">
        ARTS 115
      </Link>
      <Link className={`text-white font-bold`} href="/Paintings">
        Paintings
      </Link>
      <Link className={`text-white font-bold`} href="/Digital">
        Digital
      </Link>
      <Link className={`text-white font-bold`} href="/Other">
        Other
      </Link>
      <Link className={`text-white font-bold`} href="/Everything">
        Everything
      </Link>
      <Link className={`text-white font-bold`} href="/About">
        About Me
      </Link>
    </div>
  );
}
