import Accordion from "../general/Accordion";
import { useState, useEffect } from "react";
import { collectionFactory } from "@/app/modules";
import { Collection } from "@modules/collection";
import { PagesOverview, SubCollection } from "@modules/subcollection";
import { cache } from "@utils/index";
import { openSearchModal } from "@utils/keyboard";

const Subcollection = (props: { subcollections: SubCollection[] }) => {
  return (
    <ol className="relative border-s border-gray-200 ml-2.5 mt-1 text-xs">
      {/* {[...Array(3)].map((_, i) => {
        return (
          <li className="ms-3" key={i}>
            <p className="px-3 py-1 rounded w-fit  hover:bg-cs-white-hover transition mb-1 text-[0.85rem] cursor-pointer font-normal leading-none text-cs-black3 hover:text-cs-black">
              February 2022
            </p>
          </li>
        );
      })} */}
      {props.subcollections.map((subcollection: SubCollection) => {
        return (
          <li
            className="ms-3 w-fit"
            key={subcollection.id}
            onClick={() => openSearchModal(subcollection.pages, subcollection.name)}
          >
            <p className="px-3 py-1 mb-1 text-[0.95rem] font-normal leading-none transition rounded cursor-pointer w-fit hover:bg-cs-white-hover text-cs-black3 hover:text-cs-black">
              {subcollection.name}
            </p>
          </li>
        );
      })}
    </ol>
  );
};

function Colletions() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    (async () => {
      await fetchCollections();
    })();
  }, []);

  async function fetchCollections() {
    let collectionDoc: Collection[] = [];

    const cacheCollection = await cache.get("collections");
    if (cacheCollection) {
      console.log("taking collections cache");
      collectionDoc = cacheCollection;
    } else {
      console.log("no cache");
      const collectionsSnapshot = await collectionFactory().getCollections();

      if (!collectionsSnapshot) return console.log("no collections");
      collectionsSnapshot.forEach((collection: Collection) => {
        collectionDoc.push(collection);
      });

      // set cache for all pages in all collections
      const allPages = () => {
        let pages: any = [];
        collectionDoc.forEach((collection) => {
          collection.subcollections.forEach((subcollection) => {
            subcollection.pages.forEach((page: PagesOverview) => {
              const newpage: PagesOverview extends { subcollection: string }
                ? PagesOverview
                : PagesOverview & { subcollection: string } = {
                ...page,
                subcollection: subcollection.name,
              };
              pages.push(newpage);
            });
          });
        });
        return pages;
      };

      await cache.set("collections", collectionDoc);
      await cache.set("pages", allPages());
    }
    setCollections(collectionDoc as any);
  }

  return (
    <div className="px-4 !mt-1 space-y-2">
      {/* {[...Array(6)].map((_, i) => {
        return (
          <Accordion key={i} header={<Header />}>
            <Subcollection />
          </Accordion>
        );
      })} */}
      {collections.map((collection: any) => {
        return (
          <Accordion key={collection.name} header={collection.name}>
            <Subcollection subcollections={collection.subcollections} />
          </Accordion>
        );
      })}
    </div>
  );
}

export default Colletions;
