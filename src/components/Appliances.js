"use client"
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Image from "next/image"

function Appliances() {
  const tabs = [
    {
      type: "Appliances",
      value: "appliances",
      products: [
        { image: "/grinder.png", name: "Mixture Grinder" },
        { image: "/toaster.png", name: "Toaster" },
        { image: "/coffee.png", name: "Coffee Machine" },
        { image: "/grinder.png", name: "Mixture Grinder" },
        { image: "/toaster.png", name: "Toaster" },
        { image: "/coffee.png", name: "Coffee Machine" },
      ],
    },
    {
      type: "Brands",
      value: "brands",
      products: [
        { image: "/grinder.png", name: "Mixture Grinder" },
        { image: "/toaster.png", name: "Toaster" },
        { image: "/coffee.png", name: "Coffee Machine" },
        { image: "/grinder.png", name: "Mixture Grinder" },
        { image: "/toaster.png", name: "Toaster" },
        { image: "/coffee.png", name: "Coffee Machine" },
      ],
    },
  ]

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gap-8 py-20">
      <div className="max-md:hidden absolute top-0 left-12">
        <Image
          src="/group1.png"
          alt="Brand Logo"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <div className="max-md:hidden absolute top-16 right-10">
        <Image
          src="/group8.png"
          alt="Brand Logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <div className="max-md:hidden absolute bottom-48 left-0">
        <Image
          src="/group4.png"
          alt="Brand Logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <div className="max-md:hidden absolute bottom-0 left-60">
        <Image
          src="/group9.png"
          alt="Brand Logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <h1 className="text-center text-4xl font-bold">
        Find the <span className="text-primary">Perfect Appliance</span>
        <br /> for Your Home
      </h1>
      <Tabs defaultValue="appliances" className="flex justify-center items-center">
        <TabsList className="flex items-center justify-center mb-6">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="w-48">
              {tab.type}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {tab.products.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-row w-60 gap-4 items-center justify-center p-6 rounded-xl border shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-16 w-16 object-contain mb-4"
                  />
                  <p className="font-medium text-center">{product.name}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <Link
        href="/Appliances"
        className="mt-6 px-8 py-3 text-white text-lg rounded-md bg-primary hover:bg-primary/90"
      >
        Browse All Appliances
      </Link>
    </div>
  )
}

export default Appliances
