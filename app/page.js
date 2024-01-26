import Link from "next/link";
import Image from "next/image";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { UserButton } from "@clerk/nextjs";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Remote from "@/components/Remote";

export default function Home() {
  return (
    <div>
      <div className="h-56 flex flex-row items-center">
        <Image src="/img/logonobg.png" width={200} height={200} />
        <h1 className="text-primary pt-8 text-6xl ">O MOÇO DA QUÍMICA</h1>
      </div>
      <Hero />
      <Remote />
      <Carousel />
      <About />
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
