import { db } from "../firebase/firebase";
import { doc, updateDoc, arrayUnion, getDoc, setDoc } from "firebase/firestore";

export const addToCartFirestore = async (userId, product, appName = "Velora") => {
  // Logic: /carts (collection) / appName (doc) / userItems (sub-collection) / userId (doc)
  // This equals 4 segments: carts/Velora/userItems/UID
  const cartRef = doc(db, "carts", appName, "userItems", userId);
  const cartSnap = await getDoc(cartRef);

  if (cartSnap.exists()) {
    await updateDoc(cartRef, {
      items: arrayUnion(product)
    });
  } else {
    await setDoc(cartRef, {
      items: [product]
    });
  }
};

export const getCartFirestore = async (userId, appName = "Velora") => {
  const cartRef = doc(db, "carts", appName, "userItems", userId);
  const cartSnap = await getDoc(cartRef);
  return cartSnap.exists() ? cartSnap.data().items : [];
};