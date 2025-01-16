import { requireUser } from "../utils/hooks";

export default async function DashboardRoute() {
  await requireUser();
  return (
    <div>
      <h1>Hello from the Dashboard Route</h1>
    </div>
  );
}
