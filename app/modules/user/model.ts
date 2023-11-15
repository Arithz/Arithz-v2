export interface User {
  email: string;
  name: string;
  settings: {
    darkMode: "auto" | "on" | "off";
  };
  created_at?: any;
  updated_at?: any;
}
