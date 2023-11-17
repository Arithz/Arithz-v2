"use client";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Editor from "@/editor/editor";
import Image from "next/image";

export default function Page() {
  const pageName = useSearchParams().get("page");
  const isReady = useRef(false);

  return (
    <main className="h-full max-w-2xl pt-3 mx-auto xl:max-w-3xl 3xl:max-w-4xl my-global">
      <div className="px-[54px]">
        <div className="relative w-full mb-2 rounded-lg md:mb-5 max-h-60 aspect-video shimmer ">
          <Image
            // src="https://placehold.co/1280x720/EEE/31343C"
            src="https://drive.google.com/uc?id=1fJdUhfBKohlqtT8QJhtzlLRsq7BZLGwo"
            alt="cover"
            width={100}
            height={100}
            className="object-center w-auto h-auto m-auto"
          />
        </div>
      </div>

      <Editor />
    </main>
  );
}
