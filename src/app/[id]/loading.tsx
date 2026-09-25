const WorkoutDetailsLoading = () => {
  return (
    <div className="container mx-auto px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
      <div className="grid gap-6 rounded-2xl p-4 shadow-sm md:gap-8 md:p-6 lg:grid-cols-2 lg:gap-10 lg:p-6">
        {/* Image skeleton */}
        <div className="overflow-hidden rounded-2xl">
          <div className="h-64 w-full animate-pulse rounded-2xl bg-base-300 md:h-80 lg:h-100" />
        </div>

        {/* Content skeleton */}
        <div className="animate-pulse">
          {/* Title */}
          <div className="h-7 w-3/4 rounded bg-base-300 md:h-8 lg:h-9" />

          {/* Description */}
          <div className="mt-4 space-y-2">
            <div className="h-4 w-full rounded bg-base-300" />
            <div className="h-4 w-5/6 rounded bg-base-300" />
            <div className="h-4 w-2/3 rounded bg-base-300" />
          </div>

          {/* Muscle groups */}
          <div className="mt-4 flex flex-wrap gap-2">
            <div className="h-8 w-20 rounded-full bg-base-300" />
            <div className="h-8 w-24 rounded-full bg-base-300" />
            <div className="h-8 w-20 rounded-full bg-base-300" />
          </div>

          {/* Workout information */}
          <div className="my-3 space-y-4 rounded-xl bg-base-300/60 p-4 md:my-4 lg:my-5">
            <div className="flex justify-between">
              <div className="h-3 w-20 rounded bg-base-200" />
              <div className="h-3 w-24 rounded bg-base-200" />
            </div>

            <div className="flex justify-between">
              <div className="h-3 w-20 rounded bg-base-200" />
              <div className="h-3 w-20 rounded bg-base-200" />
            </div>

            <div className="flex justify-between">
              <div className="h-3 w-12 rounded bg-base-200" />
              <div className="h-3 w-8 rounded bg-base-200" />
            </div>

            <div className="flex justify-between">
              <div className="h-3 w-12 rounded bg-base-200" />
              <div className="h-3 w-10 rounded bg-base-200" />
            </div>

            <div className="flex justify-between">
              <div className="h-3 w-20 rounded bg-base-200" />
              <div className="h-3 w-16 rounded bg-base-200" />
            </div>

            <div className="flex justify-between">
              <div className="h-3 w-20 rounded bg-base-200" />
              <div className="h-3 w-16 rounded bg-base-200" />
            </div>

            <div className="flex justify-between">
              <div className="h-3 w-16 rounded bg-base-200" />
              <div className="h-3 w-10 rounded bg-base-200" />
            </div>
          </div>

          {/* Instructions */}
          <div className="py-3 md:py-4 lg:py-5">
            <div className="h-5 w-28 rounded bg-base-300 md:h-6 md:w-32" />

            <div className="mt-3 space-y-3">
              <div className="h-4 w-full rounded bg-base-300" />
              <div className="h-4 w-11/12 rounded bg-base-300" />
              <div className="h-4 w-10/12 rounded bg-base-300" />
              <div className="h-4 w-9/12 rounded bg-base-300" />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 md:flex-row md:gap-4">
            <div className="h-11 w-full rounded-xl bg-base-300 md:h-12 md:w-44" />
            <div className="h-11 w-full rounded-xl bg-base-300 md:h-12 md:w-36" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsLoading;