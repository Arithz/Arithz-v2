"use client";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Editor from "@/editor/editor";

export default function Page() {
  const pageName = useSearchParams().get("page");
  const isReady = useRef(false);

  return (
    <main className="h-full max-w-5xl pt-3 mx-auto my-global">
      <div className="px-[54px]">
        <div className="w-full mb-5 rounded-lg h-60 shimmer "></div>
      </div>

      <Editor />
    </main>
  );
}
