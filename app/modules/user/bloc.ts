import { sanitizeData } from "@utils/index";
import { UserApi } from "./api";
import { User } from "./model";
import { Timestamp, updateDoc, getDoc } from "firebase/firestore";

export function userFactory() {
  const userAPI = new UserApi();

  async function getUser(id: string): Promise<User | void> {
    try {
      const docSnap = await getDoc(userAPI.userDoc(id));

      if (!docSnap.exists()) return;

      return docSnap.data() as User;
    } catch {
      throw new Error("Failed to get user");
    }
  }

  async function updateUser(
    data: Omit<User, "id" | "created At">,
    id: string
  ): Promise<"success" | void> {
    try {
      data["updated_at"] = Timestamp.now();
      data = sanitizeData(data);

      await updateDoc(userAPI.userDoc(id), data);
      return "success";
    } catch {
      throw new Error("Failed to update user");
    }
  }

  return {
    getUser,
    updateUser,
  };
}
