import { FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore, onSnapshot } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";

export const PRICE_IDS = {
  yearly: "price_1UaMF5ERd4JhUK4pRqi0RxA1",
  monthly: "price_1UaMEdERd4JhUK4p6Imzr8ar",
};

const YEARLY_TRIAL_DAYS = 7;

export const getCheckoutUrl = async (app: FirebaseApp, priceId: string): Promise<string> => {
  const auth = getAuth(app);
  const userId = auth.currentUser?.uid;
  if (!userId) throw new Error("User is not authenticated");

  const db = getFirestore(app);
  const checkoutSessionRef = collection(db, "customers", userId, "checkout_sessions");

  const isYearly = priceId === PRICE_IDS.yearly;

  const docRef = await addDoc(checkoutSessionRef, {
    price: priceId,
    // The yearly plan starts with a free trial; the monthly plan is charged straight away
    ...(isYearly && { trial_period_days: YEARLY_TRIAL_DAYS }),
    // After paying, go straight to For You; if they cancel, come back to this page
    success_url: `${window.location.origin}/for-you`,
    cancel_url: window.location.href,
  });

  return new Promise<string>((resolve, reject) => {
    const unsubscribe = onSnapshot(docRef, (snap) => {
      const { error, url } = snap.data() as {
        error?: { message: string };
        url?: string;
      };
      if (error) {
        unsubscribe();
        reject(new Error(`An error occurred: ${error.message}`));
      }
      if (url) {
        unsubscribe();
        resolve(url);
      }
    });
  });
};

export const getPortalUrl = async (app: FirebaseApp): Promise<string> => {
  const auth = getAuth(app);
  if (!auth.currentUser) throw new Error("User is not authenticated");

  const functions = getFunctions(app, "us-central1");
  const createPortalLink = httpsCallable<{ returnUrl: string }, { url: string }>(
    functions,
    "ext-firestore-stripe-payments-createPortalLink"
  );
  const { data } = await createPortalLink({ returnUrl: window.location.origin });

  if (!data.url) throw new Error("No url returned");
  return data.url;
};
