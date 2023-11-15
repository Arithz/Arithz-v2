import { SubCollection } from "../subcollection/model";

export interface Collection {
  id: string;
  name: string;
  visibility: "public" | "private";
  created_at?: any;
  subcollections: SubCollection[];
}
