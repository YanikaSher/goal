'use client'

import PrivateRoute from "@/components/auth/login/privateRoute";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivateRoute>
        <section className="flex flex-col gap-4 md:py-10">
        {children}
      </section>
    </PrivateRoute>
  );
}
