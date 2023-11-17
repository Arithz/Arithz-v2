import { BlockNoteEditor } from "@blocknote/core";

class EditorAPI {
  prevState: any[] = [];
  pageId: string = "";

  setPageId(pageId: string) {
    this.pageId = pageId;
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
    if (this.prevState === editor.topLevelBlocks) return;

    this.prevState = editor.topLevelBlocks;
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
}

export const editorAPI = new EditorAPI();
