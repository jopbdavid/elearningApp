import Link from "next/link";
import Image from "next/image";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { UserButton } from "@clerk/nextjs";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Remote from "@/components/Remote";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <div>
      <div className="flex flex-row items-center p-6">
        <Image src="/img/icon2.png" width={100} height={100} />
        <h1 className="text-accent text-3xl md:text-5xl tracking-[0.25em] font-bold p-2 md:p-6">
          <span className="text-5xl md:text-7xl text-primary">J</span>OÃO{" "}
          <span className="text-5xl md:text-7xl text-primary">D</span>AVID
        </h1>
        <p className="text-center -mb-16 md:-mb-24 text-xl md:text-2xl tracking-[0.1em] italic">
          Tutor, mentor, curioso
        </p>
      </div>

      <Hero />
      <About />
      {/* <div className="border-b-2 w-1/2 mx-auto border-black"></div> */}
      <Grid />

      <Contacts />
      <div className="py-12 text-center">
        {/* <Link href="/news" className="btn btn-primary w-80">
          Regista-te aqui!
        </Link> */}
      </div>
      <Footer />
    </div>
  );
}
