"use client";
import Button from "@/components/Button";
import { Shield } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="grid  grid-rows-4 gap-4 p-4">
        <Button width={200} variant="first"  icon={Shield} onClick={() => console.log("First!")}>
         Button
        </Button>
        <Button width={200} variant="second" icon={Shield}  onClick={() => console.log("Second!")}>
           Button
        </Button>
        <Button width={200} variant="third"  icon={Shield} onClick={() => console.log("Third!")}>
           Button
        </Button>
      </div>
    </>
  );
}
