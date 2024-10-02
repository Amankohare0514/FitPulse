import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, Twitter, Linkedin } from 'lucide-react'
import trainers from './trainerData'



function TrainersPage() {
    return (
        <div className="min-h-screen bg-transparent text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <section className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4">Meet Our Expert Trainers</h1>
                    <p className="text-xl mb-8">Transform your body and mind with our diverse range of classes</p>
                </section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trainers.map((trainer, index) => (
                        <Card key={index} className="bg-gray-700/10 cursor-pointer backdrop-blur-lg border border-gray-800 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <Image
                                src={trainer.image}
                                alt={trainer.name}
                                width={400}
                                height={400}
                                className="w-full h-64 object-cover"
                            />
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-semibold mb-2 text-gray-100">{trainer.name}</h2>
                                <Badge className="mb-4 bg-blue-500 hover:bg-blue-600 text-gray-200">{trainer.specialty}</Badge>
                                <p className="text-sm mb-4 text-gray-300">{trainer.bio}</p>
                                <div className="flex space-x-4">
                                    <a href={`https://instagram.com/${trainer.instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-300 transition-colors">
                                        <Instagram size={20} />
                                    </a>
                                    <a href={`https://twitter.com/${trainer.twitter}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-300 transition-colors">
                                        <Twitter size={20} />
                                    </a>
                                    <a href={`https://linkedin.com/in/${trainer.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-300 transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrainersPage