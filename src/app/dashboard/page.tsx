import LatestQuizAdded from "@/components/dashboard/home/LatestQuizAdded";
import Profile from "@/components/dashboard/home/Profile";
import { useCurrentUser } from "@/hooks/use-current-user";
import { findUserById } from "./actions";

export default async function DashboardPage() {
  const current = await useCurrentUser()
  const user = await findUserById(current?.id)
  
  return (
    <div className="h-full w-full">
        <Profile user={user} />
        <LatestQuizAdded />
    </div>
  );
}
