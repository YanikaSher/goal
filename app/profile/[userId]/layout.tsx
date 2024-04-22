"use client";

import Cookies from "js-cookie";
import { useParams } from "next/navigation";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams<{ userId: string }>();
  Cookies.set("profile_id", params.userId);
  return <div>{children}</div>;
}
