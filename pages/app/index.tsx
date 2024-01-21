import { Carousel } from "./../../components/ui/carousel";
import { CarouselContent } from "./../../components/ui/carousel";
import { CarouselItem } from "./../../components/ui/carousel";
import { Card } from "./../../components/ui/card";
import { CardContent } from "./../../components/ui/card";
import { CarouselPrevious } from "./../../components/ui/carousel";
import { CarouselNext } from "./../../components/ui/carousel";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Orbit } from "lucide-react";
import { Rocket } from "lucide-react";
import { Satellite } from "lucide-react";
import { Sparkle } from "lucide-react";
import { StarHalf } from "lucide-react";
import { Sun } from "lucide-react";
// pages/index.js
import { useState, useEffect } from "react";
import Link from "next/link";

const Home = () => {
  const levels = [
    {
      title: "100 WPM",
      button: 100,
      desc: "🌱 Beginner Level: Perfect for absolute beginners to reading. Take it step by step, building a strong foundation for improved reading skills.",
      icon: <StarHalf className="mx-auto h-5 w-5 text-yellow-500" />,
    },
    {
      title: "125 WPM",
      button: 125,
      desc: "🚀 Beginner Level: You're mastering the basics, getting comfortable with sentence structures, and boosting your reading efficiency.",
      icon: <Sparkle className="mx-auto h-5 w-5 text-green-500" />,
    },
    {
      title: "150 WPM",
      button: 150,
      desc: "📚 Steady Progress: Congrats on reaching 150 WPM! You're gaining confidence, absorbing information more easily, and enjoying an immersive reading experience.",
      icon: <Sun className="mx-auto h-5 w-5 text-orange-500" />,
    },
    {
      title: "200 WPM",
      button: 200,
      desc: "🔥 Proficient Reader: You're entering the realm of proficient readers, noticing improved comprehension and tackling more complex texts with ease.",
      icon: <Rocket className="mx-auto h-5 w-5 text-blue-500" />,
    },
    {
      title: "250 WPM",
      button: 250,
      desc: "💪 Impressive Speed: Fantastic job at 250 WPM! Expect heightened ability to grasp concepts swiftly and dive into a broader range of literature.",
      icon: <Orbit className="mx-auto h-5 w-5 text-purple-500" />,
    },
    {
      title: "300 WPM",
      button: 300,
      desc: "🌟 Masterful Reader: Welcome to the 300 WPM level! Your impressive speed allows you to navigate through various genres effortlessly. ",
      icon: <Satellite className="mx-auto h-5 w-5 text-red-500" />,
    },
  ];

  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Rapid Reads</h1>
        </div>
      </nav>
      <div className="container mx-auto flex-grow p-8 text-center">
        <h2 className="text-2xl italic font-semibold">Choose your level!</h2>
        <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3">
          {levels.map((level, index) => (
            <Card
              key={index}
              className="bg-gray-300 dark:bg-black rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-4 flex flex-col items-center justify-center space-y-6">
                {level.icon}
                <h5 className="text-lg font-semibold text-center">
                  {level.title}
                </h5>
                <p className="text-md w-80 text-center">{level.desc}</p>
              </CardContent>
              <Link href={`/app/wpm/${level.button}`}>
                <CardFooter className="flex justify-center">
                  <Button className="w-full justify-center py-2 text-sm bg-pink-500 text-white hover:bg-pink-600 dark:text-gray-200">
                    Select
                  </Button>
                </CardFooter>
              </Link>
            </Card>
          ))}
        </div>
      </div>
      <footer className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <p>© 2024 Rapid Reads</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
