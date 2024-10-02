'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Clock, Calendar } from 'lucide-react'
import ClassesData from './classesData'


function Clasees() {
  const [hoveredClass, setHoveredClass] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-transparent text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Discover Our Fitness Classes</h1>
          <p className="text-xl mb-8">Transform your body and mind with our diverse range of classes</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ClassesData.map((cls, index) => (
            <motion.div
              key={index}
              className="bg-gray-600/10 backdrop-blur-lg rounded-lg overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredClass(index)}
              onMouseLeave={() => setHoveredClass(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{cls.title}</h3>
                <p className="text-gray-300 mb-4">{cls.description}</p>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Users className="mr-2" size={16} />
                  <span>{cls.instructor}</span>
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Clock className="mr-2" size={16} />
                  <span>{cls.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Calendar className="mr-2" size={16} />
                  <span>{cls.schedule}</span>
                </div>
              </div>
              <div 
                className={`bg-purple-600 p-4 transition-all duration-300 ${
                  hoveredClass === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <button className="w-full text-center font-semibold hover:text-purple-200 transition-colors">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Clasees;