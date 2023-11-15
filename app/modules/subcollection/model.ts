import { Page } from "../page/model";

export interface SubCollection {
  id: string;
  name: string;
  visibility: "public" | "private";
  created_at?: any;
  updated_at?: any;
  pages: Page[];
}
