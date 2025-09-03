"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star } from "lucide-react"
import { TiHome } from "react-icons/ti";
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const categories = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
]

const products = new Array(9).fill(null).map((_, i) => ({
  id: i,
  name: "Voltas AC 1.2 Ton",
  rating: 4.5,
  tonnage: "1.5 Ton",
  warranty: "4 Yr Warranty",
}))

export default function page() {
  const [selectedSort, setSelectedSort] = useState("Best Match")
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)
  return (
    <>
    <div className="p-3 border-b mx-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/"><TiHome size={16}/></Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {segments.map((segment, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/")
            const isLast = index === segments.length - 1
            return (
              <div key={href} className="flex items-center">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="text-primary">
                      {segment.replace(/-/g, " ")}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={href} className="">
                        {segment.replace(/-/g, " ")}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            )
          })}
      </BreadcrumbList>
    </Breadcrumb>
    </div>
    <div className="flex gap-6 p-6">
      <aside className="w-64 border-r pr-4">
        <h2 className="font-semibold mb-4">Filters</h2>
        {categories.map((cat) => (
          <div key={cat.id} className="mb-6">
            <div className="font-medium mb-2">{cat.name}</div>
            <Input placeholder="Search" className="mb-2" />
            <div className="flex flex-col gap-2">
              {new Array(4).fill("type 1").map((t, idx) => (
                <label key={idx} className="flex items-center gap-2">
                  <Checkbox id={`${cat.id}-${idx}`} />
                  <span>{t}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </aside>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-muted-foreground">
            1-9 over 7,000 results found
          </span>
          <div className="flex items-center gap-2">
            <span className="text-sm">Sort by:</span>
            <Tabs value={selectedSort} onValueChange={setSelectedSort}>
              <TabsList>
                <TabsTrigger value="Best Match">Best Match</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {products.map((p) => (
            <Link href={`/Appliances/${segments[1]}/${p.name}`} key={p.id} className="text-inherit no-underline">
              <Card className="p-2">
                <div className="bg-gray-100 h-32 rounded mb-2" />
                <CardHeader className="p-0">
                  <CardTitle className="text-sm font-medium">{p.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium text-black">{p.rating}</span>
                  </div>
                  <div className="flex gap-2 mb-1">
                    <p>{p.tonnage} |</p>
                    <p>{p.warranty}</p>
                  </div>
                  <label className="flex items-center gap-2 text-sm">
                    <Checkbox id={`compare-${p.id}`} />
                    Add to Compare
                  </label>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
