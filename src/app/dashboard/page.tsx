import LatestQuizAdded from "@/components/dashboard/home/LatestQuizAdded";

export default async function DashboardPage() {  
  return (
    <div className="h-full w-full">
        {/* <Profile user={user} /> */}
        <LatestQuizAdded />
    </div>
  );
}
