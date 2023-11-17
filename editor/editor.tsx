import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote, ReactSlashMenuItem } from "@blocknote/react";
import "@blocknote/core/style.css";
import config from "./config";

export default function Editor() {
  // Gets the previously stored editor contents.

  // Creates a new editor instance.
  const editor: BlockNoteEditor = useBlockNote(config);

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} theme={"light"} />;
}
