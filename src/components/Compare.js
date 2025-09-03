
import Image from "next/image"
import { Button } from "./ui/button"


function Compare() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 bg-accent-foreground text-card h-screen px-8 md:px-20 mt-12">
      <div className="max-md:hidden absolute -bottom-16 left-20">
          <Image
            src="/group10.png"
            alt="Brand Logo"
            width={100}
            height={100}
            className="object-contain"
          />
      </div>
      <div className="max-md:hidden absolute -top-20 right-10">
          <Image
            src="/group6.png"
            alt="Brand Logo"
            width={70}
            height={70}
            className="object-contain"
          />
      </div>
      <div className="max-w-lg mb-24">
        <h2 className="font-bold text-4xl">Compare Appliances</h2>
        <h1 className="font-bold text-5xl mt-2">Find the Perfect Fit</h1>
        <p className="mt-4 text-lg leading-relaxed">
          Make informed choices by comparing <br />
          features, prices, and ratings of top appliances, <br />
          side-by-side. Discover which model best suits <br />
          your home and budget.
        </p>
        <Button className="mt-6 px-8 py-3 text-white text-lg rounded-md bg-primary">
          Compare Now
        </Button>
      </div>

      <div className="flex-shrink-0">
        <Image
          src="/Frame.png"
          alt="Repairman making a call"
          width={500}
          height={500}
          className="rounded-xl mt-40 shadow-lg object-cover"
        />
      </div>
    </div>
  )
}

export default Compare
