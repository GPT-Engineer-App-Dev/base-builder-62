import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleGreet = () => {
    if (name) {
      setGreeting(`Hello, ${name}! Welcome to our application.`);
    } else {
      setGreeting('Please enter your name first.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Greeting Application</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4">Say Hello!</h2>
        
        <div className="space-y-4">
          <Input 
            placeholder="Enter your name" 
            className="max-w-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={handleGreet}>Greet Me</Button>
          {greeting && <p className="text-xl mt-4">{greeting}</p>}
        </div>
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 Greeting Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;