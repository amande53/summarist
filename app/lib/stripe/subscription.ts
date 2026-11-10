import { collection, getFirestore, onSnapshot, query, where } from "firebase/firestore";
import { app } from "../firebase/firebase";

// Watches the user's Stripe subscriptions in Firestore and reports whether
// one is currently active (or in its free trial). Returns a function that stops watching.
export function listenToSubscription(userId: string, onChange: (isSubscribed: boolean) => void) {
  const db = getFirestore(app);
  const activeSubscriptions = query(
    collection(db, "customers", userId, "subscriptions"),
    where("status", "in", ["trialing", "active"])
  );

  return onSnapshot(
    activeSubscriptions,
    (snapshot) => onChange(!snapshot.empty),
    (error) => {
      console.error(error);
      onChange(false);
    }
  );
}
