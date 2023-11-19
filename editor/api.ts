import { BlockNoteEditor } from "@blocknote/core";

class EditorAPI {
  pageId: string = "";

  initialize(pageId: string, editor: BlockNoteEditor, blockPosition: string) {
    this.pageId = pageId;
    this.initializeKeyboardShortcuts(editor);
    this.loadSaveData(editor, blockPosition);
  }

  autofocus(editor: BlockNoteEditor) {
    const block = editor.getTextCursorPosition().block as any;
    const userViewport = window.scrollY;
    const blockPosition = document
      .querySelector(`[data-id="${block.id}"]`)
      ?.getBoundingClientRect().top;
    if (blockPosition) {
      window.scrollTo({
        top: userViewport + blockPosition - window.innerHeight / 2,
        behavior: "smooth",
      });
    }
  }

  loadSaveData(editor: BlockNoteEditor, blockPosition: string) {
    const saveData = localStorage.getItem("saveData-" + this.pageId);
    if (saveData) {
      const blocks = JSON.parse(saveData);
      editor.insertBlocks(blocks, editor.getTextCursorPosition().block, "before");
      // show alert finish loading data
    }
  }

  saveNewData(editor: BlockNoteEditor) {
    const sanitize = this.sanitizeBlocks(editor.topLevelBlocks);
    localStorage.setItem("saveData-" + this.pageId, sanitize);
  }

  private sanitizeBlocks(blocks: any[]) {
    let lastIndex = blocks.length;

    while (lastIndex >= 0) {
      if (!blocks[lastIndex - 1]) break;
      if (blocks[lastIndex - 1].type === "image") break;
      if (blocks[lastIndex - 1].content.length > 0) {
        break;
      }
      lastIndex--;
    }

    // If all blocks are empty, return an empty string
    if (lastIndex < 0) {
      return "";
    }

    const sanitized = blocks.slice(0, lastIndex);

    // Return the JSON string of blocks up to the last non-empty block
    return JSON.stringify(sanitized);
  }

  // keyboard shortcuts
  // delete texts from block
  initializeKeyboardShortcuts(editor: BlockNoteEditor) {
    document.addEventListener("keydown", (e) => {
      // Alt + s - move block down
      if (e.altKey && e.key === "s") {
        e.preventDefault();
        this.moveBlock(editor, "down");
      }
      // Alt + w - move block up
      if (e.altKey && e.key === "w") {
        e.preventDefault();
        this.moveBlock(editor, "up");
      }

      // Ctrl + b - bold
      if (e.ctrlKey && e.key === "b") {
        e.preventDefault();
        this.toggleTextStyle(editor, "bold");
      }

      // Ctrl + i - italic
      if (e.ctrlKey && e.key === "i") {
        e.preventDefault();
        this.toggleTextStyle(editor, "italic");
      }

      // Ctrl + Shift + Backspace - delete texts from block
      if (e.ctrlKey && e.shiftKey && e.key === "Backspace") {
        e.preventDefault();
        this.deleteFullTextFromBlock(editor);
      }
    });
  }

  private deleteFullTextFromBlock(editor: BlockNoteEditor) {
    const block = editor.getTextCursorPosition().block as any;
    let newBlock = block;
    if (block.content.length > 0) {
      newBlock.content[0].text = "";
    }
    editor.updateBlock(block.id, newBlock);
  }

  private moveBlock(editor: BlockNoteEditor, direction: "up" | "down") {
    const block = editor.getTextCursorPosition().block as any;
    const blockPosition = editor.topLevelBlocks.findIndex((b) => b.id === block.id);
    if (blockPosition === 0) return;
    const newBlockPosition = blockPosition + (direction === "up" ? -1 : 1);
    const newBlock = editor.topLevelBlocks[newBlockPosition];
    editor.updateBlock(block.id, newBlock);
    editor.updateBlock(newBlock.id, block);
    editor.setTextCursorPosition(newBlock.id, "end");
  }

  private toggleTextStyle(editor: BlockNoteEditor, style: string) {
    const block = editor.getTextCursorPosition().block as any;
    if (block.content.length === 0) return;
    // check if the text is already bold or not and toggle it
    const isStyleAlreadyApplied = block.content[0].styles[style];
    if (isStyleAlreadyApplied) {
      delete block.content[0].styles[style];
    } else {
      block.content[0].styles[style] = true;
    }
    editor.updateBlock(block.id, block);
  }
}

export const editorAPI = new EditorAPI();
