import { redirect } from "next/navigation";
import { auth } from "../utils/auth";

export default async function DashboardRoute() {
  const session = await auth();

  if(!session?.user) redirect("/")
  return (
    <div>
      <h1>Hello from the Dashboard Route</h1>
    </div>
  );
}
