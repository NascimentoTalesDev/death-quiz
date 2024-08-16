import LatestQuizAdded from "@/components/dashboard/home/LatestQuizAdded";
import Profile from "@/components/dashboard/home/Profile";
import { useCurrentUser } from "@/hooks/use-current-user";
import { findUserById } from "./actions";

export default async function DashboardPage() {
  
  return (
    <div className="h-full w-full">
        <LatestQuizAdded />
    </div>
  );
}
