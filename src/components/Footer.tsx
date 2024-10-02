import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube, Dumbbell, Heart, Running } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Dumbbell className="mr-2" />
              FitPulse
            </h2>
            <p className="text-sm">Empowering your fitness journey with cutting-edge workouts and expert guidance.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white"><Facebook /></Link>
              <Link href="#" className="hover:text-white"><Instagram /></Link>
              <Link href="#" className="hover:text-white"><Twitter /></Link>
              <Link href="#" className="hover:text-white"><Youtube /></Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Home</Link></li>
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">Classes</Link></li>
              <li><Link href="#" className="hover:text-white">Trainers</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Personal Training</Link></li>
              <li><Link href="#" className="hover:text-white">Group Classes</Link></li>
              <li><Link href="#" className="hover:text-white">Nutrition Planning</Link></li>
              <li><Link href="#" className="hover:text-white">Fitness Assessment</Link></li>
              <li><Link href="#" className="hover:text-white">Online Coaching</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-sm mb-4">Stay up to date with our latest news and products.</p>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 FitPulse. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="text-sm hover:text-white">Privacy Policy</Link>
            <Link href="#" className="text-sm hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center space-x-4 text-sm">
          <span className="flex items-center"><Heart className="mr-1" /> Stay Healthy</span>
          <span className="flex items-center"><Running className="mr-1" /> Stay Active</span>
          <span className="flex items-center"><Dumbbell className="mr-1" /> Stay Strong</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer