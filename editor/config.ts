import { BlockNoteEditor, uploadToTmpFilesDotOrg_DEV_ONLY } from "@blocknote/core";
import { editorAPI } from "./api";

const config = {
  onEditorReady(editor: BlockNoteEditor) {
    const blockPosition = editor.topLevelBlocks[0].id;
    const pageId = window.location.search.split("=")[1];
    console.log(pageId);
    editorAPI.loadSaveData(editor, pageId, blockPosition);
  },
  onEditorContentChange: (editor: BlockNoteEditor) => {
    const pageId = window.location.search.split("=")[1];
    editorAPI.saveNewData(editor, pageId);
  },
  uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,
};

export default config;
