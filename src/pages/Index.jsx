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
        <p className="text-2xl mb-2">{currentGreeting.greeting}</p>
        <p className="text-gray-500 mb-4">({currentGreeting.language})</p>
        <Button onClick={changeGreeting}>Say "Hello" in another language</Button>
      </div>

      <footer className="mt-8 text-gray-500">
        <p>Click the button to cycle through greetings in different languages.</p>
      </footer>
    </div>
  );
};

export default Index;