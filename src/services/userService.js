import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const createUserProfile = async (user, appName,username) => {
  await setDoc(doc(db, "apps", appName, "users", user.uid), {
    uid: user.uid,
    email: user.email,
    username: username,
    app: appName,
    createdAt: new Date()
  });
};