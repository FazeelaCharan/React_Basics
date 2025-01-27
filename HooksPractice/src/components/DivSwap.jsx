import React, { useState } from "react";
import Button from "./Button"; // Import custom Button
import { ChevronLeft, ChevronRight } from "lucide-react";

const DivSwap = () => {
  const [divs, setDivs] = useState(["A", "B", "C"]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track which two divs to swap

  const moveRight = () => {
    setDivs((prevDivs) => {
      const newDivs = [...prevDivs];

      // Swap two adjacent divs (currentIndex with currentIndex + 1)
      if (currentIndex < newDivs.length - 1) {
        const temp = newDivs[currentIndex];
        newDivs[currentIndex] = newDivs[currentIndex + 1];
        newDivs[currentIndex + 1] = temp;
      }

      // Move to the next pair of divs (loop back to start when at the end)
      const nextIndex = (currentIndex + 1) % (newDivs.length - 1);
      setCurrentIndex(nextIndex);
      return newDivs;
    });
  };

  const moveLeft = () => {
    setDivs((prevDivs) => {
      const newDivs = [...prevDivs];

      // Swap two adjacent divs (currentIndex with currentIndex + 1)
      if (currentIndex > 0) {
        const temp = newDivs[currentIndex];
        newDivs[currentIndex] = newDivs[currentIndex - 1];
        newDivs[currentIndex - 1] = temp;
      }

      // Move to the previous pair of divs (loop back to end when at the start)
      const prevIndex =
        (currentIndex - 1 + newDivs.length - 1) % (newDivs.length - 1);
      setCurrentIndex(prevIndex);
      return newDivs;
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center space-x-4">
        {/* Left Button */}
        <Button onClick={moveLeft} className="text-xl">
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Divs */}
        <div className="flex space-x-4">
          {divs.map((div, index) => (
            <div
              key={index}
              className="w-20 h-20 flex items-center justify-center bg-white border-2 border-gray-300 rounded-lg shadow-md text-2xl font-bold transition-all duration-300 ease-in-out"
            >
              {div}
            </div>
          ))}
        </div>

        {/* Right Button */}
        <Button onClick={moveRight} className="text-xl">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default DivSwap;
