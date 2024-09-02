"use client";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <div className="grid  grid-cols-4 gap-4 p-4">
        <Button variant="first" onClick={() => console.log("First!")}>
          I am first button
        </Button>
        <Button variant="second" onClick={() => console.log("Second!")}>
          I am second button
        </Button>
        <Button variant="third" onClick={() => console.log("Third!")}>
          I am third button
        </Button>
      </div>
    </>
  );
}
