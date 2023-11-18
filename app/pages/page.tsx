"use client";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Editor from "@/editor/editor";
import Image from "next/image";

export default function Page() {
  const pageName = useSearchParams().get("page");
  const isReady = useRef(false);

  return (
    <main className="h-full md:max-w-xl lg:max-w-2xl pt-3 mx-auto xl:max-w-[50rem] my-global">
      <div className="px-global mt-10 md:mt-0 px-5 md:px-[54px]">
        <div className="relative w-full mb-2 rounded-lg md:mb-5 max-h-60 aspect-video shimmer ">
          <Image
            // src="https://placehold.co/1280x720/EEE/31343C"
            src="https://drive.google.com/uc?id=1fJdUhfBKohlqtT8QJhtzlLRsq7BZLGwo"
            alt="cover"
            width={100}
            height={100}
            className="object-center w-auto h-auto m-auto select-none"
          />
        </div>
      </div>

      <Editor />
    </main>
  );
}
