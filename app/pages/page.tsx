// @ts-nocheck

"use client";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const pageName = useSearchParams().get("page");
  const isReady = useRef(false);

  useEffect(() => {

  }, []);

  return (
    <main className="h-full max-w-4xl mx-auto my-global pt-3">
      <div className="w-full mb-5 rounded-lg h-60 shimmer"></div>
    </main>
  );
}
