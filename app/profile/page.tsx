"use client";

import React from "react";
import Loading from "@/components/Loading";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import TransactionsList from "@/components/profile/TransactionsList";
import { useProfileLogic } from "./useProfileLogic";

export default function UserProfile() {
  const { profile, loading, error } = useProfileLogic();

  if (loading) return <Loading text="Profil loading" />;
  if (error) return <p className="p-10 text-red-500">Błąd: {error}</p>;
  if (!profile) return <p className="p-10">Brak danych profilu.</p>;

  return (
    <div className="flex gap-x-12 w-full p-10">
      <ProfileSidebar firstName={profile.firstName} email={profile.email} />
      <TransactionsList orders={profile.orders} />
    </div>
  );
}
