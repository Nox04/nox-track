import { db } from '@src/services/firebase/firebase';

export interface Collection {
  id: string;
  name?: string;
  imageUrl?: string;
  slug?: string;
  booksCount?: number;
  moviesCount?: number;
  seriesCount?: number;
  hoursCount?: number;
}

export const getAllCollections = async () => {
  const data = await db.collection('collections').limit(20).get();
  return data.docs.reverse().map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
};
