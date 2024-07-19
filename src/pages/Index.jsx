import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const greetings = [
    { language: 'English', greeting: 'Hello' },
    { language: 'Spanish', greeting: 'Hola' },
    { language: 'French', greeting: 'Bonjour' },
    { language: 'German', greeting: 'Hallo' },
    { language: 'Italian', greeting: 'Ciao' },
  ];

  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

  const changeGreeting = () => {
    const currentIndex = greetings.indexOf(currentGreeting);
    const nextIndex = (currentIndex + 1) % greetings.length;
    setCurrentGreeting(greetings[nextIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Multilingual Greeter</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <p className="text-2xl mb-4">{currentGreeting.greeting}</p>
        <p className="text-gray-600 mb-6">This is how you say "Hello" in {currentGreeting.language}</p>
        <Button onClick={changeGreeting}>
          Say "Hello" in another language
        </Button>
      </div>
    </div>
  );
};

export default Index;