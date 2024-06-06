import PrivateRoute from "@/components/auth/login/privateRoute";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivateRoute>
      <section className="flex flex-col gap-4 md:py-3 w-full">{children}</section>
    </PrivateRoute>
  );
}
