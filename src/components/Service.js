import { Button } from "./ui/button"
import Image from "next/image"
import { Card } from "./ui/card"

function Service() {
  const services=[
    {
      id:1,
      name:'Air Conditioner Repair',
      image:'/repair1.png',
    },
    {
      id:2,
      name:'Washing Machine Repair',
      image:'/repair2.png',
    },
    {
      id:3,
      name:'TV Repair',
      image:'/repair3.png',
    },
    {
      id:4,
      name:'Refrigerator Repair',
      image:'/repair4.png',
    },
    {
      id:5,
      name:'Air Conditioner Repair',
      image:'/repair1.png',
    },
    {
      id:6,
      name:'Washing Machine Repair',
      image:'/repair2.png',
    },
    {
      id:7,
      name:'TV Repair',
      image:'/repair3.png',
    },
    {
      id:8,
      name:'Refrigerator Repair',
      image:'/repair4.png',
    },
  ]

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">
        Find a Quick <span className="text-primary">Service or 
        <br/>
        Repair</span> for Your Appliance</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {services.map((service) => (
          <div key={service.id} className="p-2 flex flex-col items-center">
            <div className="px-4 pt-4 bg-slate-100 rounded-md mb-4">
              <Image src={service.image} alt={service.name} width={100} height={100} className="w-32 h-24" /> 
            </div>
            <h2 className="text-sm md:text-medium font-semibold text-center">{service.name}</h2>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="mt-6 px-8 py-3 text-white text-lg rounded-md bg-primary hover:bg-primary/90">
          Browse All Services
        </Button>
      </div>
    </div>
  )
}

export default Service