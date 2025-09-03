"use client"

import { BsQuestionCircle } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { Input } from "./ui/input";
import { GoSearch } from "react-icons/go";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Header() {
  return (
    <div className="flex justify-between items-center w-full px-16 py-2 border-b">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo"  width={100} height={80} />
      </div>
      <div className="flex items-center">
        <div>
         <Select >
            <SelectTrigger className="flex items-center justify-between gap-2 w-60 border rounded-md">
              <div className="flex items-center gap-2">
                <CiLocationOn size={18} />
                <SelectValue placeholder="Hyderabad" />
              </div>
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="hyd">Hyderabad</SelectItem>
              <SelectItem value="blr">Bangalore</SelectItem>
              <SelectItem value="mum">Mumbai</SelectItem>
              <SelectItem value="del">Delhi</SelectItem>
            </SelectContent>
          </Select>

        </div>
        <div className="flex items-center border border-gray-300 rounded-md ml-4 px-2 w-80">
          <GoSearch size={16} className="text-gray-500" />
          <Input
            type="search"
            placeholder="Search"
            className="border-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus:border-transparent text-sm"
          />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <BsQuestionCircle size={20} className="cursor-pointer text-gray-700" />
        <FaRegCircleUser size={20} className="cursor-pointer text-gray-700" />
        <FiMenu size={22} className="cursor-pointer text-gray-700" />
      </div>
    </div>
  )
}

export default Header;







