import { BlockNoteEditor, uploadToTmpFilesDotOrg_DEV_ONLY } from "@blocknote/core";
import { editorAPI } from "./api";

const config = {
  editable: true,
  onEditorReady(editor: BlockNoteEditor) {
    const blockPosition = editor.topLevelBlocks[0].id;
    const pageId = window.location.search.split("=")[1];
    editorAPI.initialize(pageId, editor, blockPosition);
  },
  onEditorContentChange: (editor: BlockNoteEditor) => {
    editorAPI.saveNewData(editor);
  },
  uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,
};

export default config;
