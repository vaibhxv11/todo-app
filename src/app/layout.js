
import { Inter } from "next/font/google";
import "./globals.css";
import { TaskProvider } from './context/TaskContext'; // Adjust the import path if needed

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TaskProvider>
          {children}
        </TaskProvider>
      </body>
    </html>
  );
}

