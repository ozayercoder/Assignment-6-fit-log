import WorkoutDetailsCard from "@/components/shared/WorkoutDetailsCard";
import { getAllWorkouts } from "@/lib/library";
import { notFound } from "next/navigation";

type AppDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const WorkoutDetailsPage = async ({ params }: AppDetailsPageProps) => {
  const { id } = await params;

  const allWorkouts = await getAllWorkouts();

  const workout = allWorkouts.find(
    (workout: { id: number }) => workout.id === parseInt(id),
  );
  if (!workout) {
    notFound();
  }
  return <WorkoutDetailsCard workout={workout}></WorkoutDetailsCard>;
};

export default WorkoutDetailsPage;
