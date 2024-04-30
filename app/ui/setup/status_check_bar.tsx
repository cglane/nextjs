// import useTranslation from 'next-translate/useTranslation'
"use client"
// import { useStageStore } from "@/stores/stage";

  export default function StatusCheckBar() {
    return (
      <div className="flex items-center">
        <div className="w-3 h-3 bg-green-500 rounded-full flex justify-center items-center text-white font-bold mx-3">
            ✓
          </div>

        {/* Current Step */}
        <div className="w-3 h-3 bg-blue-500 rounded-full flex justify-center items-center mx-3">
        </div>

        {/* Future Steps */}
        {/* <div className="w-2 h-4 bg-gray-300 rounded-full mx-3"></div> */}
  
        {/* Another future step (add another line before if needed) */}
        {/* <div className="w-2 h-4 bg-gray-300 rounded-full mx-3"></div> */}
      </div>
    );
  };
  
