"use client";

import { auth, db } from "@@libs/db";
import { type User } from "firebase/auth";
import { type DocumentData, doc } from "firebase/firestore";
import { createContext, useState, type ReactNode, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  useDocumentData,
  useDocumentOnce,
} from "react-firebase-hooks/firestore";

type ProfileDocumentData = DocumentData | undefined;

export type AuthType = {
  user: User | null | undefined;
  profile: ProfileDocumentData;
  loading: boolean;
  configs: Record<string, string | number | boolean>[];
};

export const AuthContext = createContext<AuthType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, loading] = useAuthState(auth);
  const [userId, setUserId] = useState<UID>();
  const [profile, setProfile] = useState<ProfileDocumentData>();

  const userRef = doc(db, `bdls/${user?.uid}`);
  const [snapshot] = useDocumentOnce(userRef);

  useEffect(() => {
    if (user?.uid) {
      setUserId(user.uid);
      if (snapshot?.exists) {
        setProfile(snapshot.data());
      }
    }
  }, [user?.uid, snapshot]);

  return (
    <AuthContext.Provider value={{ user, profile, loading, configs: [] }}>
      {children}
    </AuthContext.Provider>
  );
};

export type UID = string | undefined;
export type SN = string | null;
export type Address = {
  lineOne: SN;
  lineTwo: SN;
  city: SN;
  state: SN;
  country: SN;
};
export interface ProfileProps {
  userId: UID;
  email: string;
  accountType: "AFFILIATE" | "PERSONAL";
  displayName?: SN;
  firstName?: SN;
  lastName?: SN;
  completeName?: SN;
  address: Address;
  credentials: Record<string, string | number | boolean | null>[];
  isVerified: boolean;
  isComplete: boolean;
  isPremium: boolean;
  createdAt: number;
  updatedAt: number;
}
