import React from "react";
import { createRoot, Root } from "react-dom/client";
import ModalContainer from "./ModalContainer";

let root: Root | null = null;

export function createModal(children: React.ReactNode) {
  if (!document.getElementById("modal-root")) createContainer();

  if (root) root.unmount();
  root = createRoot(document.getElementById("modal-root")!);
  root.render(<ModalContainer>{children}</ModalContainer>);
}

function createContainer() {
  const className =
    "max-w-screen w-full h-full max-h-screen fixed z-[100] inset-0 overflow-y-auto pt-16 px-3 bg-[#0e101823] bg-opacity-20 animate-fadeIn backdrop-blur-[0.5px]";
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
  document.getElementById("modal-container")?.classList.remove("animate-scaleIn");
  document.getElementById("modal-container")?.classList.add("animate-scaleOut");
  modalRoot.classList.add("animate-fadeOut");
  setTimeout(() => {
    document.getElementById("modal-container")?.classList.remove("animate-scaleOut");
    modalRoot.classList.remove("animate-fadeOut");
    root?.unmount();
    modalRoot.remove();
  }, 300);
}
