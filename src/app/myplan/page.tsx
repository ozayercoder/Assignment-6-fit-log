import PlanContent from "@/components/myplanpage/PlanContent";

const PlanPage = () => {
  return (
    <div className="container mx-auto flex flex-col gap-5 px-4 py-5 md:gap-6 md:px-6 md:py-7 lg:px-8 lg:py-10">
      <div>
        <h2 className="text-2xl font-bold md:text-3xl">MY PLAN</h2>

        <p className="py-2 text-sm text-[#8A92A0] md:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <PlanContent />
    </div>
  );
};

export default PlanPage;