import { db } from "@/libs/db";
import type {
  AutoDataSchema,
  GetAllAutoSchema,
  GetOneAutoSchema,
} from "@/server/resource/autos";
import { onError } from "@/utils/toast";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

export const getOneAuto = async ({ userId, docId }: GetOneAutoSchema) => {
  const userRef = doc(db, "bdls", userId);
  const autosRef = collection(userRef, "autos");

  const snapshot = await getDoc(doc(autosRef, docId));

  if (snapshot.exists()) {
    const data = snapshot.data();
    return data;
  } else {
    return { doc: docId, exist: false };
  }
};

export const getAllAuto = async (params: GetAllAutoSchema) => {
  const userRef = doc(db, "bdls", params.userId);
  const autosRef = collection(userRef, "autos");

  return getDocs(autosRef)
    .then((snapshot) => {
      const docs = snapshot.docs.map((doc) => {
        const id = doc.id;
        const data = doc.data() as AutoDataSchema;
        return { id, ...data };
      });
      return docs;
    })
    .catch((err: Error) => {
      // console.log(err);
      onError(err.message);
      return [];
    });
};

export const getAutoUpdate = async (
  params: GetAllAutoSchema,
  callback: (docs: AutoDataSchema[]) => void,
) => {
  const userRef = doc(db, "bdls", params.userId);
  const autosRef = collection(userRef, "autos");

  return onSnapshot(autosRef, (snapshot) => {
    const docs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as AutoDataSchema),
    }));
    callback(docs);
  });
};
