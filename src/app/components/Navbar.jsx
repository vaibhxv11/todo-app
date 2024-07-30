"use client";

import React from 'react';
import { Button } from '../../components/ui/button'; // Adjust the path if needed
import { Home, List, User } from 'lucide-react';
import Link from 'next/link'; // Assuming you use Next.js, adjust if using a different routing library

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link href="/" className="hover:text-gray-300 ">
            Todo App
          </Link>
        </div>
        <div className="flex space-x-4">
          
          <Button variant="link" className="text-white hover:text-gray-300">
            
              <User className="w-5 h-5 inline mr-2" />
              Profile
            
          </Button>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
