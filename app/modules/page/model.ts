export interface Page {
  id: string;
  name: string;
  visibility: "public" | "private";
  content: {};
  created_at?: any;
  updated_at?: any;
}
