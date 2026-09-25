import PlanContent from "@/components/myplanpage/PlanContent";

const PlanPage = () => {
  return (
    <div className="container mx-auto my-5 py-5 flex flex-col gap-6">
      <div>
        <h2 className="font-bold text-3xl">MY PLAN</h2>
        <p className="text-[#8A92A0] text-sm py-2">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <PlanContent />
    </div>
  );
};

export default PlanPage;
