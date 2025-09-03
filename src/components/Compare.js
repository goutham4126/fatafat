import Image from "next/image"
import { Button } from "./ui/button"

function Compare() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between gap-10 bg-accent-foreground text-card min-h-screen px-6 sm:px-10 md:px-20 py-12 md:py-0 mt-12">
      <div className="hidden md:block absolute -bottom-16 left-20">
        <Image
          src="/group10.png"
          alt="Decoration"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <div className="hidden md:block absolute -top-20 right-10">
        <Image
          src="/group6.png"
          alt="Decoration"
          width={70}
          height={70}
          className="object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="font-bold text-3xl sm:text-4xl">Compare Appliances</h2>
        <h1 className="font-bold text-4xl sm:text-5xl mt-2">Find the Perfect Fit</h1>
        <p className="mt-4 text-base sm:text-lg leading-relaxed">
          Make informed choices by comparing <br className="hidden sm:block" />
          features, prices, and ratings of top appliances, <br className="hidden sm:block" />
          side-by-side. Discover which model best suits <br className="hidden sm:block" />
          your home and budget.
        </p>
        <Button className="mt-6 px-6 sm:px-8 py-3 text-card text-base sm:text-lg rounded-md bg-primary">
          Compare Now
        </Button>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/Frame.png"
          alt="Repairman making a call"
          width={500}
          height={500}
          className="rounded-xl shadow-lg object-cover max-w-xs sm:max-w-sm md:max-w-md mt-8 md:mt-40"
        />
      </div>
    </section>
  )
}

export default Compare;