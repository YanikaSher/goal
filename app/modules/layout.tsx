import  PrivateRoute  from "@/components/auth/login/privateRoute";

export default function ModulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivateRoute>
      <section className="flex flex-col ">{children}</section>
    </PrivateRoute>
  );
}
