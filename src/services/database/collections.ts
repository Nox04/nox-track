import { db } from '@src/services/firebase/firebase';

export interface Collection {
  id: string;
  name?: string;
}

export const getAllCollections = async () => {
  const data = await db.collection('collections').limit(20).get();
  return data.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
};
