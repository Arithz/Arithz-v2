import { createModal } from "@components/modal/modal";
import PageSearch from "@components/general/PageSearch";
import Form from "@components/general/Form";
import CommandPalette from "@components/general/CommandPalette";
import React from "react";
import { PagesOverview } from "@modules/subcollection";
import { cache } from "@utils/index";

export function initializeKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "k") {
      // open command palette
      e.preventDefault();
      openCommandPalette();
    } else if (e.altKey && e.key === "n") {
      // create new collection
      e.preventDefault();
      openNewCollection();
    } else if (e.ctrlKey && e.key === "o") {
      // open page
      e.preventDefault();
      openSearchModal();
    }
  });
}

export function openCommandPalette() {
  createModal(React.createElement(CommandPalette));
}

export function openNewCollection() {
  createModal(React.createElement(Form));
}

export async function openSearchModal(fetchpages?: PagesOverview[], subcollection?: string) {
  let props: any = null;
  const pages = fetchpages || (await cache.get("pages"));
  props = { pages, subcollection };

  createModal(React.createElement(PageSearch, props));
}
