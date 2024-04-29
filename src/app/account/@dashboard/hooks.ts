import { AuthContext, type ProfileProps } from "@/app/(context)/context";
import { useContext, useEffect, useState } from "react";
import { type UserAccountType } from "../@signin/login";

export const useConnect = () => {
  const profile = useContext(AuthContext)?.profile as ProfileProps;
  const userId = profile?.userId;

  const [userCode, setUserCode] = useState<string | null>(null);
  const [group, setGroup] = useState<string | null>(null);
  const [linkedId, setLinkedId] = useState<string | null>(null);
  const [accountType, setAccountType] = useState<UserAccountType>();

  useEffect(() => {
    if (group) {
      setLinkedId(group);
    }
  }, [group]);

  useEffect(() => {
    if (userId) {
      setUserCode(userId.slice(-5) ?? "");
    }
  }, [userId]);

  useEffect(() => {
    if (profile) {
      console.log(profile.userId);
      setAccountType(profile.accountType);
    }
  }, [profile]);

  return { userCode, setGroup, linkedId, accountType };
};
