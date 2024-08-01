import LatestQuizAdded from "@/components/dashboard/home/LatestQuizAdded";
import Profile from "@/components/dashboard/home/Profile";

export default function DashboardPage() {
  return (
    <div className="h-full w-full">
        <Profile />
        <LatestQuizAdded />
    </div>
  );
}
