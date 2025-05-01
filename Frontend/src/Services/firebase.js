import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const subscribeFeeders = (userId, callback) => {
  const feedersRef = ref(db, `feeders/${userId}`);
  return onValue(feedersRef, snapshot => callback(snapshot.val()));
};

