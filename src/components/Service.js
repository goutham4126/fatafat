import { Button } from "./ui/button"
import { Card } from "./ui/card"
import Image from "next/image"

function Service() {
  const services=[
    {
      id:1,
      name:'Washing Machine Repair',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafiXZqya7Qh7F-5pwea-lu52IYnyQyWIpQw&s',
    },
    {
      id:2,
      name:'Refrigerator Repair',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafiXZqya7Qh7F-5pwea-lu52IYnyQyWIpQw&s',
    },
    {
      id:3,
      name:'Air Conditioner Repair',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafiXZqya7Qh7F-5pwea-lu52IYnyQyWIpQw&s',
    },
    {
      id:4,
      name:'Microwave Oven Repair',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafiXZqya7Qh7F-5pwea-lu52IYnyQyWIpQw&s',
    },
    {
      id:5,
      name:'Washing Machine Repair',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafiXZqya7Qh7F-5pwea-lu52IYnyQyWIpQw&s',
    },
    {
      id:6,
      name:'Refrigerator Repair',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafiXZqya7Qh7F-5pwea-lu52IYnyQyWIpQw&s',
    },
    {
      id:7,
      name:'Air Conditioner Repair',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafiXZqya7Qh7F-5pwea-lu52IYnyQyWIpQw&s',
    },
    {
      id:8,
      name:'Microwave Oven Repair',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafiXZqya7Qh7F-5pwea-lu52IYnyQyWIpQw&s',
    },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10">
        Find a Quick <span className="text-primary">Service or 
        <br/>
        Repair</span> for Your Appliance</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {services.map((service) => (
          <div key={service.id} className="p-2 flex flex-col items-center">
            <div className="p-4 shadow-lg bg-white rounded-md mb-4">
              <Image src={service.image} alt={service.name} width={200} height={200} className="mb-4 w-[100%]" /> 
            </div>
            <h2 className="text-medium font-semibold text-center">{service.name}</h2>
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