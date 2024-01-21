import { Carousel } from "@/components/ui/carousel";
import { CarouselContent } from "@/components/ui/carousel";
import { CarouselItem } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CarouselPrevious } from "@/components/ui/carousel";
import { CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Orbit } from "lucide-react";
import { Rocket } from "lucide-react";
import { Satellite } from "lucide-react";
import { Sparkle } from "lucide-react";
import { StarHalf } from "lucide-react";
import { Sun } from "lucide-react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

const sentencesByWpm = {
  100: [
    "You are now reading 100 words per minute",
    "‎",
    "We want beginners like you to be able to read faster",
    "🎉",
  ],
  125: [
    "Impressive! You're reading at 125 words per minute",
    "‎",
    "Keep up the good work and challenge yourself",
    "🚀",
  ],
  150: [
    "Fantastic! Your speed is at 150 words per minute",
    "‎",
    "You're getting faster with every word. Well done!",
    "🌟",
  ],
  200: [
    "Incredible! You're zooming through at 200 words per minute",
    "‎",
    "Feel the speed, embrace the words. You're a reading rocket!",
    "🚀✨",
  ],
  250: [
    "Unbelievable! You're hitting 250 words per minute",
    "‎",
    "Your reading speed is reaching new heights. Keep it up!",
    "🌠",
  ],
  300: [
    "Mind-blowing! You're conquering 300 words per minute",
    "‎",
    "At this pace, you're practically a reading superhero. Bravo!",
    "💫📖",
  ],
};

const Home = () => {
  const router = useRouter();
  const wpm = router.query.wpm;

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const sentencesForWpm = sentencesByWpm[wpm] || [];
  const currentSentence = sentencesForWpm[currentSentenceIndex];
  const currentWord = currentSentence?.split(" ")[currentWordIndex];

  const wpmIntervals = {
    100: 600,
    125: 480,
    150: 400,
    200: 300,
    250: 240,
    300: 200,
  };

  useEffect(() => {
    // Check if wpm is defined before proceeding
    if (!wpm) return;

    const interval = setInterval(() => {
      // Move to the next word
      if (currentWordIndex < currentSentence.split(" ").length - 1) {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      } else {
        // Move to the next sentence
        if (currentSentenceIndex < sentencesForWpm.length - 1) {
          setCurrentSentenceIndex(
            (prevIndex) => (prevIndex + 1) % sentencesForWpm.length,
          );
          setCurrentWordIndex(0);
        } else {
          // All sentences have been displayed, show 🎉 and stop the loop
          clearInterval(interval);
        }
      }
    }, wpmIntervals[wpm]); // Change word every specified milliseconds

    return () => clearInterval(interval);
  }, [currentWordIndex, currentSentenceIndex, wpm]);

  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col">
      <nav className="mb-24 bg-gray-800 p-4">
        <div className="container mx-auto">
          <Link href="/">
            <h1 className="text-2xl font-bold">Rapid Reads</h1>
          </Link>
        </div>
      </nav>
      <div className="mt-20 mb-20 container mx-auto flex-grow p-8 text-center">
        <h1 className="text-9xl">{currentWord}</h1>
        <Link href="/app">
          <Button className="mt-20 w-80 justify-center py-2 text-sm bg-pink-500 text-white hover:bg-pink-600 dark:text-gray-200">
            Back to level selector
          </Button>
        </Link>
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
