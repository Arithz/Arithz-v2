import { SubCollection } from "../subcollection/model";

export interface Collection {
  id: string;
  name: string;
  visibility: boolean;
  created_at?: any;
  subcollections: SubCollection[];
}
