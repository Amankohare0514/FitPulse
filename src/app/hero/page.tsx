import Image from 'next/image'
import Link from 'next/link'

export default function HeroPage() {
  return (
    <div className="min-h-screen bg-transparent mt-14 md:mt-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-5xl md:text-5xl font-extrabold">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Transform Your Body
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Transform Your Life
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-md sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
              Join our fitness community and start your journey to a healthier, stronger you. Expert guidance, personalized workouts, and a supportive environment await!
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link href="/signup" className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-black bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 md:py-2 md:text-lg md:px-8 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  Get Started
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link href="/programs" className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-gray-200 bg-gray-800 hover:bg-gray-700 md:py-2 md:text-lg md:px-8 transition duration-300 ease-in-out">
                  View Classes
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-w-1 aspect-h-1">
              <Image
                src="/heroBg.png"
                alt="Fitness enthusiast working out"
                width={600}
                height={600}
                className="object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-60 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}