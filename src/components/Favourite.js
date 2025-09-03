"use client"

import { Button } from "./ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Star } from "lucide-react"

function Favourite() {
  const tabs = [
    {
      type: "AC",
      value: "ac",
      products: [
        { image: "https://cdn-icons-png.flaticon.com/128/14181/14181343.png", name: "Voltas AC 1.2 Ton", rating: 4.5 },
        { image: "https://cdn-icons-png.flaticon.com/128/14181/14181343.png", name: "Voltas AC 1.2 Ton", rating: 4.5 },
        { image: "https://cdn-icons-png.flaticon.com/128/14181/14181343.png", name: "Voltas AC 1.2 Ton", rating: 4.5 },
        { image: "https://cdn-icons-png.flaticon.com/128/14181/14181343.png", name: "Voltas AC 1.2 Ton", rating: 4.5 },
        { image: "https://cdn-icons-png.flaticon.com/128/14181/14181343.png", name: "Voltas AC 1.2 Ton", rating: 4.5 },
        { image: "https://cdn-icons-png.flaticon.com/128/14181/14181343.png", name: "Voltas AC 1.2 Ton", rating: 4.5 },
      ],
    },
    {
      type: "Washing Machine",
      value: "washing-machine",
      products: [
        { image: "https://cdn-icons-png.flaticon.com/128/14181/14181343.png", name: "LG Washing Machine", rating: 4.2 },
      ],
    },
    {
      type: "Microwave Oven",
      value: "microwave-oven",
      products: [
        { image: "https://cdn-icons-png.flaticon.com/128/14181/14181343.png", name: "LG Microwave Oven", rating: 4.2 },
      ],
    },
    {
      type: "Refrigerator",
      value: "refrigerator",
      products: [
        { image: "https://cdn-icons-png.flaticon.com/128/14181/14181343.png", name: "LG Refrigerator", rating: 4.2 },
      ],
    },
    {
      type: "Television",
      value: "television",
      products: [
        { image: "https://cdn-icons-png.flaticon.com/128/14181/14181343.png", name: "Sony Bravia TV", rating: 4.7 },
      ],
    },
  ]

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 !== 0
    return (
      <div className="flex gap-1 px-2">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
        {halfStar && <Star className="h-4 w-4 text-yellow-400" />}
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 py-20">
      <h1 className="text-center text-4xl font-bold">
        People&apos;s <span className="text-primary">Favourite</span>
        <br /> Appliances
      </h1>

      <Tabs defaultValue="ac" className="flex justify-center items-center">
        <TabsList className="flex justify-center mb-6 w-full">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="px-6">
              {tab.type}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="w-full flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl">
              {tab.products.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 rounded-xl border shadow-sm hover:shadow-md transition"
                >
                  <div className="w-60 h-32 bg-gray-300 rounded-lg flex items-center justify-center mb-4">
                  
                  </div>
                  <p className="font-medium p-2">{product.name}</p>
                  {renderStars(product.rating)}
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Button className="mt-6 px-8 py-3 text-white text-lg rounded-md bg-primary">
        View All
      </Button>
    </div>
  )
}

export default Favourite
