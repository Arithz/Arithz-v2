import { Page } from "../page/model";

export interface PagesOverview {
  id: string;
  name: string;
  visibility: boolean;
}

export interface SubCollection {
  id: string;
  name: string;
  visibility: boolean;
  created_at?: any;
  pages: PagesOverview[];
}
