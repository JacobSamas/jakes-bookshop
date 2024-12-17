import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return(
    <div>
      <Hero />
      <div className="container mx-auto py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Books</h2>
        
      </div>
    </div>
  )

}
