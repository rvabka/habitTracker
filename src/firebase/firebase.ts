import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
  getDoc,
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

export const updateCountInFirestore = async (habit: Habit) => {
  try {
    const habitRef = doc(db, "habits", habit.id);
    await updateDoc(habitRef, { data: habit.data });
  } catch (error) {
    console.error("Error updating habit: ", error);
    throw error;
  }
};

export const updateDoneStatus = async (habitId: string, targetDate: string) => {
  try {
    const habitRef = doc(db, "habits", habitId);

    const habitDoc = await getDoc(habitRef);
    if (!habitDoc.exists()) {
      throw new Error("Habit not found");
    }

    const habitData = habitDoc.data();
    const updatedData = habitData.data.map(
      (entry: { day: string; done: number }) =>
        entry.day === targetDate && entry.done === 0
          ? { ...entry, done: 1 }
          : entry,
    );
    await updateDoc(habitRef, {
      data: updatedData,
    });
  } catch (error) {
    console.error("Error updating done status: ", error);
    throw error;
  }
};

// Funkcja dodająca nowy dzień do każdego dokumentu
export const addNewDayIfNecessary = async () => {
  try {
    // Pobranie wszystkich dokumentów z kolekcji "habits"
    const habitsSnapshot = await getDocs(collection(db, "habits"));

    const today = new Date();
    const currentDate = today.toISOString().split("T")[0]; // Format YYYY-MM-DD

    // Iteracja przez wszystkie dokumenty
    for (const habitDoc of habitsSnapshot.docs) {
      const habitRef = doc(db, "habits", habitDoc.id);
      const habitData = habitDoc.data();

      // Dodanie nowego dnia do tablicy data, jeśli jeszcze go tam nie ma
      const updatedData = habitData.data.map(
        (day: { day: string; done: number }) =>
          day.day === currentDate ? day : { ...day },
      );

      if (
        !updatedData.some((day: { day: string }) => day.day === currentDate)
      ) {
        updatedData.push({ day: currentDate, done: 0, presentCount: 0 });
      }

      // Zaktualizowanie dokumentu w Firestore
      await updateDoc(habitRef, {
        data: updatedData,
      });
    }
  } catch (error) {
    console.error("Error adding new day: ", error);
  }
};

addNewDayIfNecessary();
