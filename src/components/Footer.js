"use client"
import { FaScrewdriverWrench } from "react-icons/fa6";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-card-foreground text-card py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div>
                <span className="font-bold"><FaScrewdriverWrench size={28} /></span>
              </div>
              <div>
                <p className="font-bold text-lg">FATAFAT</p>
                <p className="text-xs font-light text-center -mt-1">SERVICE</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-accent">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Terms &amp; conditions</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Customers</h3>
            <ul className="space-y-2 text-sm text-accent">
              <li><a href="#">Brands</a></li>
              <li><a href="#">Appliances</a></li>
              <li><a href="#">Quick Services</a></li>
              <li><a href="#">Compare Appliance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Vendors</h3>
            <ul className="space-y-2 text-sm text-accent">
              <li><a href="#">Register as vendor</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Social</h3>
            <div className="flex space-x-4">
              <a href="#"><Twitter className="h-5 w-5" /></a>
              <a href="#"><Facebook className="h-5 w-5" /></a>
              <a href="#"><Instagram className="h-5 w-5" /></a>
              <a href="#"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-ring" />

        <p className="text-left text-sm text-muted-foreground">
          © Copyright 2025 Fatafat Service
        </p>
      </div>
    </footer>
  )
}

export default Footer
