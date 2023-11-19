import { sanitizeData } from "@utils/index";
import { CollectionApi } from "./api";
import { Collection } from "./model";
import { query, where, Timestamp, updateDoc, getDoc, getDocs } from "firebase/firestore";

export function collectionFactory() {
  const collectionApi = new CollectionApi();

  async function getCollections(): Promise<Collection[] | void> {
    let data: Collection[] = [];
    try {
      const q = query(collectionApi.collection);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push(doc.data() as Collection);
      });
    } catch (e: any) {
      throw new Error(e);
    }

    return data;
  }

  async function getCollection(id: string): Promise<Collection | void> {
    try {
      const docSnap = await getDoc(collectionApi.userDoc(id));

      if (!docSnap.exists()) return;

      return docSnap.data() as Collection;
    } catch {
      throw new Error("Failed to get user");
    }
  }

  //   async function updateUser(
  //     data: Omit<Collection, "id" | "created At">,
  //     id: string
  //   ): Promise<"success" | void> {
  //     try {
  //       data["updated_at"] = Timestamp.now();
  //       data = sanitizeData(data);

  //       await updateDoc(userAPI.userDoc(id), data);
  //       return "success";
  //     } catch {
  //       throw new Error("Failed to update user");
  //     }
  //   }

  return {
    getCollections,
    getCollection,
    // updateUser,
  };
}
