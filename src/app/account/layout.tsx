"use client";

import { auth, db } from "@/libs/db";
import Sidebar from "./(components)/sidebar";
import { Loader } from "./(components)/loader";
import { useEffect, useState } from "react";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { type UserAccount } from "@/server/resource/account";
import { type UserAccountType } from "./@signin/login";

type AccountLayoutProps = {
  dashboard: React.ReactNode;
  signin: React.ReactNode;
};

const AccountLayout = ({ dashboard, signin }: AccountLayoutProps) => {
  const [accountType, setAccountType] = useState<UserAccountType>();
  const [user] = useAuthState(auth);
  const docRef = doc(db, `bdls/${user?.uid}`);
  const [snapshot, loading] = useDocumentOnce(docRef);

  useEffect(() => {
    if (snapshot?.exists) {
      const profile = snapshot.data() as UserAccount;
      setAccountType(profile?.accountType);
    }
  }, [snapshot]);

  if (loading) return <Loader />;

  if (user) {
    return <Sidebar accountType={accountType}>{dashboard}</Sidebar>;
  } else {
    return signin;
  }
};

export default AccountLayout;
