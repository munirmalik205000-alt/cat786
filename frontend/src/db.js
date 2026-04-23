import app from "./firebase";
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase(app);

// Example: data save
export const saveData = () => {
  set(ref(db, "test/"), {
    name: "Munir",
    time: Date.now()
  });
};
