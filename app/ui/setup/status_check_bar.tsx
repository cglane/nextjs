'use client';

export default function StatusCheckBar(props: any) {
  return (
    <div className="flex items-center">
      {props.stages.map((stage: number) => {
        if (stage < props.currentIndex) {
          return (
            <div
              key={stage}
              className="mx-3 flex h-2 w-2 items-center justify-center rounded-full bg-green-500 font-bold text-white"
            >
              ✓
            </div>
          );
        } else if (stage == props.currentIndex) {
          return (
            <div
              key={stage}
              className="mx-3 flex h-2 w-2 items-center justify-center rounded-full border-2 border-blue-300 bg-blue-400"
            ></div>
          );
        } else {
          return (
            <div
              key={stage}
              className="mx-3 h-2 w-2 rounded-full bg-gray-300"
            ></div>
          );
        }
      })}
    </div>
  );
}
