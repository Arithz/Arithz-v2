// @ts-nocheck

"use client";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import EditorJS from "@editorjs/editorjs";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";
import Checklist from "@editorjs/checklist";
import Marker from "@editorjs/marker";
import LinkAutocomplete from "@editorjs/link-autocomplete";
import Undo from "editorjs-undo";
import ColorPlugin from "editorjs-text-color-plugin";
import ToggleBlock from "editorjs-toggle-block";
import DragDrop from "editorjs-drag-drop";

const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "This is my awesome editor!",
        level: 1,
      },
    },
  ],
};

export default function Page() {
  const pageName = useSearchParams().get("page");
  const isReady = useRef(false);

  useEffect(() => {
    if (!isReady.current) {
      new EditorJS({
        autofocus: true,
        holder: "editor",
        placeholder: "Start writing your article...",
        inlineToolbar: true,
        // onReady() {
        //   try {
        //     new DragDrop({ editor: this });
        //     new Undo({ editor: this });
        //   } catch (err: any) {
        //     console.error(err);
        //   }
        // },
        tools: {
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+1",
          },
          header: {
            class: Header,
            inlineToolbar: ["link"],
            config: {
              placeholder: "Header",
            },
            shortcut: "CMD+SHIFT+2",
          },
          toggle: {
            class: ToggleBlock,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+3",
          },
          list: {
            class: List,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+4",
          },
          image: {
            class: SimpleImage,
          },
          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },
          Marker: {
            class: Marker,
            shortcut: "CMD+SHIFT+M",
          },
          link: {
            class: LinkAutocomplete,
          },
          Color: {
            class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
            config: {
              colorCollections: [
                "#EC7878",
                "#9C27B0",
                "#673AB7",
                "#3F51B5",
                "#0070FF",
                "#03A9F4",
                "#00BCD4",
                "#4CAF50",
                "#8BC34A",
                "#CDDC39",
                "#FFF",
              ],
              defaultColor: "#FF1300",
              type: "text",
              customPicker: true, // add a button to allow selecting any colour
            },
          },
        },
        // data: INITIAL_DATA,
      });
      isReady.current = true;
    }
  }, []);

  return (
    <main className="h-full max-w-4xl mx-auto my-global">
      <div className="w-full mb-5 rounded-lg h-60 shimmer"></div>
      <div id="editor" className="whateverNameYouWantHere"></div>
    </main>
  );
}
