import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">

        {/* Mission Statement */}
        <section className="py-16 px-4 bg-transparent text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-200">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              At FitPulse, we believe that fitness is not just a goal, but a lifelong journey. Our mission is to empower
              individuals to achieve their best selves through innovative workout programs, expert guidance, and a
              supportive community. We're committed to making fitness accessible, enjoyable, and sustainable for everyone.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-200">Meet Our Team</h2>
            <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Jane Doe', role: 'Founder & Head Trainer', image: '/category/yoga.jpg' },
                { name: 'John Smith', role: 'Nutrition Specialist', image: '/category/yoga.jpg' },
                { name: 'Emily Brown', role: 'Yoga Instructor', image: '/category/yoga.jpg'  },
              ].map((member, index) => (
                <div key={index} className="bg-transparent border border-gray-800 rounded-lg shadow-md overflow-hidden">
                  <Image src={member.image} alt={member.name} width={400} height={400} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-gray-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 px-4 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-100">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-200">Personalized Training</h3>
                <p className="text-gray-300 leading-relaxed">
                  We understand that every individual is unique. That's why we offer personalized training programs
                  tailored to your specific goals, fitness level, and preferences. Our expert trainers work closely
                  with you to create a plan that challenges and motivates you.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-200">Holistic Wellness</h3>
                <p className="text-gray-300 leading-relaxed">
                  At FitPulse, we believe in a holistic approach to wellness. Our programs go beyond just physical
                  exercise, incorporating nutrition guidance, stress management techniques, and lifestyle coaching
                  to help you achieve overall well-being.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-200">Cutting-edge Technology</h3>
                <p className="text-gray-300 leading-relaxed">
                  We leverage the latest fitness technology to enhance your experience. From wearable devices that
                  track your progress to virtual reality workouts that make exercise fun and engaging, we're always
                  at the forefront of fitness innovation.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-200">Supportive Community</h3>
                <p className="text-gray-300 leading-relaxed">
                  Join a community of like-minded individuals who share your passion for fitness. Our group classes,
                  online forums, and social events provide opportunities to connect, share experiences, and motivate
                  each other on your fitness journeys.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}