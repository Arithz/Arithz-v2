import { BlockNoteEditor } from "@blocknote/core";

class EditorAPI {
  prevStateLength: number = 0;

  loadSaveData(editor: BlockNoteEditor, pageId: string, blockPosition: string) {
    const saveData = localStorage.getItem("saveData-" + pageId);
    if (saveData) {
      const blocks = JSON.parse(saveData);
      editor.insertBlocks(blocks, editor.getTextCursorPosition().block, "before");
      // show alert finish loading data
    }
  }

  saveNewData(editor: BlockNoteEditor, pageId: string) {
    if (this.prevStateLength === editor.topLevelBlocks.length) return;

    this.prevStateLength = editor.topLevelBlocks.length;
    const sanitize = this.sanitizeBlocks(editor.topLevelBlocks);
    localStorage.setItem("saveData-" + pageId, sanitize);
  }

  private sanitizeBlocks(blocks: any[]) {
    console.log("Before", blocks);
    let lastIndex = blocks.length;

    while (lastIndex >= 0) {
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
    console.log(sanitized);

    // Return the JSON string of blocks up to the last non-empty block
    return JSON.stringify(sanitized);
  }
}

export const editorAPI = new EditorAPI();
