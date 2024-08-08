import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { Habit } from "../components/context/types";

const firebaseConfig = {
  apiKey: "AIzaSyBRDPLR7DcVuA2vswv0RsWH1nYIIJ_Z00o",
  authDomain: "habittracker-cf985.firebaseapp.com",
  projectId: "habittracker-cf985",
  storageBucket: "habittracker-cf985.appspot.com",
  messagingSenderId: "605015987531",
  appId: "1:605015987531:web:a74ae05be8c827075544ce",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addHabitToFirestore = async (habit: Habit) => {
  const habitRef = doc(db, "habits", habit.id);
  await setDoc(habitRef, habit);
  return habit;
};

export const getHabitsFromFirestore = async () => {
  const querySnapshot = await getDocs(collection(db, "habits"));
  const habits: Habit[] = [];
  querySnapshot.forEach((doc) => {
    habits.push({ id: doc.id, ...doc.data() } as Habit);
  });
  return habits;
};

export const deleteHabitFromFirestore = async (id: string) => {
  await deleteDoc(doc(db, "habits", id));
};

export const updateHabitInFirestore = async (habit: Habit) => {
  try {
    const habitRef = doc(db, "habits", habit.id);
    console.log(habitRef);
    await updateDoc(habitRef, { presentCount: habit.presentCount });
  } catch (error) {
    console.error("Error updating habit: ", error);
    throw error;
  }
};
