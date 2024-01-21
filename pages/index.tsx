import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { ImageOff } from "lucide-react";
import { MousePointer } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import { BookOpenCheckIcon } from "lucide-react";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { NavigationMenuContent } from "@/components/ui/navigation-menu";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { NavigationMenuList } from "@/components/ui/navigation-menu";
import { NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import WordByWordDisplay from "@/components/intro-text";
import { Menu } from "lucide-react";
import { Avatar } from "./../components/ui/avatar";
import { AvatarImage } from "./../components/ui/avatar";
import { AvatarFallback } from "./../components/ui/avatar";
import { BadgeInfoIcon } from "lucide-react";
import Tutorial from "@/components/tutorial";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    // Check URL search params for 'dark' mode
    const searchParams = new URLSearchParams(window.location.search);

    // Set the background color to #040710
    document.body.style.backgroundColor = "#040710";

    // Set background to black if 'dark' is within URL search params
    if (searchParams.has("dark")) {
      document.body.classList.add("dark");
    }

    return () => {
      // Reset the background color when component unmounts
      document.body.style.backgroundColor = "";

      if (searchParams.has("dark")) {
        document.body.classList.remove("dark");
      }
    };
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="bg-gray-900 dark:bg-black w-full h-full">
        {/* Content of the component */}
        <div className="dark:bg-black text-white">
          <header className="shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
              <div className="flex">
                <BookOpenCheckIcon color="white" />
                <p className="pl-2">Rapid Reads</p>
              </div>
              <div className="hidden md:block"></div>
              <div className="flex">
                <p className="p-3">Home</p>
                <p className="p-3">FAQ</p>
                <p className="p-3">About</p>
              </div>
            </nav>
          </header>
          <div className="px-6 py-24 text-center">
            <div className="mx-auto max-w-2xl">
              <div className="mt-12 flex items-center justify-center mb-4">
                <BookOpenCheckIcon color="#FFFFFF" size="150px" />
              </div>
              <WordByWordDisplay />
              <p className="mt-4 text-md text-gray-50">
                Empower newcomers to reading with our revolutionary app designed
                to enhance reading speed and efficiency. Dive into the world of
                swift comprehension as our user-friendly interface and expertly
                crafted exercises guide you, reducing time consumption and
                unlocking the joy of faster, more enjoyable reading. Elevate
                your reading journey effortlessly with us!
              </p>
              <Button className="border-2 mt-8 rounded px-8 py-3 text-sm font-medium leading-5 shadow-lg transition duration-150 ease-in-out hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 dark:bg-pink-700 dark:hover:bg-pink-600 dark:focus:ring-offset-black">
                <Link href="/app">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
