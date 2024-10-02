'use client';

import { Dumbbell, Running, Yoga, LucideIcon } from "lucide-react";
import Image from "next/image";

// Define the type for each category item
type Category = {
  name: string;
  icon: LucideIcon;
  description: string;
  image: string;
};

// Define the array of categories with proper typing
export const categories: Category[] = [
  {
    name: "Strength",
    icon: Dumbbell,
    description: "Build muscle and increase your strength",
    image: "/heroBg.png",
  },
  {
    name: "Cardio",
    icon: Running,
    description: "Improve your endurance and heart health",
    image: "/heroBg.png",
  },
  {
    name: "Yoga",
    icon: Yoga,
    description: "Enhance flexibility and find inner peace",
    image: "/heroBg.png",
  },
];


function Categories() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Discover Your Fitness Journey</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative overflow-hidden rounded-lg shadow-lg group flex-1"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={600}
              height={400}
              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <category.icon className="w-12 h-12 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
              <p className="text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Categories