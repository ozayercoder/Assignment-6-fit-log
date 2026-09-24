const WorkoutDetailsLoading = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid gap-10 rounded-2xl p-6 shadow-sm md:grid-cols-2">
        {/* Image skeleton */}
        <div className="overflow-hidden rounded-2xl">
          <div className="h-100 w-full animate-pulse rounded-2xl bg-base-300" />
        </div>

        {/* Content skeleton */}
        <div className="animate-pulse">
          {/* Title */}
          <div className="h-9 w-3/4 rounded bg-base-300" />

          {/* Description */}
          <div className="mt-4 space-y-2">
            <div className="h-4 w-full rounded bg-base-300" />
            <div className="h-4 w-5/6 rounded bg-base-300" />
            <div className="h-4 w-2/3 rounded bg-base-300" />
          </div>

          {/* Muscle groups */}
          <div className="mt-4 flex gap-2">
            <div className="h-8 w-20 rounded-full bg-base-300" />
            <div className="h-8 w-24 rounded-full bg-base-300" />
            <div className="h-8 w-20 rounded-full bg-base-300" />
          </div>

          {/* Workout information */}
          <div className="my-3 space-y-4 rounded-xl bg-base-300/60 p-4">
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
          <div className="py-3">
            <div className="h-6 w-32 rounded bg-base-300" />

            <div className="mt-3 space-y-3">
              <div className="h-4 w-full rounded bg-base-300" />
              <div className="h-4 w-11/12 rounded bg-base-300" />
              <div className="h-4 w-10/12 rounded bg-base-300" />
              <div className="h-4 w-9/12 rounded bg-base-300" />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <div className="h-12 w-44 rounded-xl bg-base-300" />
            <div className="h-12 w-36 rounded-xl bg-base-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsLoading;
