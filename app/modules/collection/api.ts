import { db } from "@utils/index";
import { CollectionReference, collection, doc } from "firebase/firestore";

export class CollectionApi {
  protected collection_name: string;
  public collection: CollectionReference;

  constructor() {
    this.collection_name = "collections";
    this.collection = collection(db, this.collection_name);
  }

  userDoc(id: string) {
    return doc(db, this.collection_name, id);
  }
}

const collectionApi = new CollectionApi();

export { collectionApi };
