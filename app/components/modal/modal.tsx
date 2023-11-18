import { createRoot } from "react-dom/client";
import ModalContainer from "./ModalContainer";

export function createModal() {
  createContainer();
  const root = createRoot(document.getElementById("modal-root")!);
  root.render(<ModalContainer />);
}

function createContainer() {
  const className =
    "max-w-screen w-full h-full max-h-screen fixed z-[100] inset-0 overflow-y-auto bg-[#0e1018] bg-opacity-40";
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  modalRoot.className = className;

  initializeKeyboardEvents(modalRoot);
  document.body.appendChild(modalRoot);
}

function initializeKeyboardEvents(modalRoot: HTMLDivElement) {
  modalRoot.addEventListener("click", (e) => {
    if (e.target === modalRoot) {
      removeModal(modalRoot);
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modalRoot) removeModal(modalRoot);
    }
  });
}

function removeModal(modalRoot: HTMLDivElement) {
  modalRoot.remove();
}
