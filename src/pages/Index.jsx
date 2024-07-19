import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">My Interactive Application</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4">Hello Hello!</h2>
        <p className="mb-4">This is an interactive bare-bones application. Let's count together!</p>
        
        <div className="space-y-4">
          <p className="text-xl">Count: {count}</p>
          <Button onClick={() => setCount(count + 1)}>Increment</Button>
          <Button onClick={() => setCount(count - 1)} variant="outline">Decrement</Button>
          <Input placeholder="Enter some text" className="max-w-md" />
        </div>
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 My Interactive Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;