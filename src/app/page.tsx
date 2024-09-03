"use client";
import Button from "@/components/Button";
import { HomeIcon } from "lucide-react";

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <main className="p-16 flex flex-col lg:flex-row lg:justify-around mx-auto w-9/12 max-h-screen">
        <Button onClick={handleClick} variant="primary" Icon={HomeIcon}>
          Button
        </Button>

        <Button
          onClick={handleClick}
          variant="secondary"
          Icon={HomeIcon}
          className=" lg:my-none"
        >
          Button
        </Button>

        <Button onClick={handleClick} variant="third" Icon={HomeIcon}>
          Button
        </Button>
      </main>
    </>
  );
}
