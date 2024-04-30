// import useTranslation from 'next-translate/useTranslation'
"use client"
// import { useStageStore } from "@/stores/stage";

  export default function StatusCheckBar() {
    return (
      <div className="flex items-center">
        <div className="w-4 h-4 bg-green-500 rounded-full flex justify-center items-center text-white font-bold m-1">
            ✓
          </div>

        {/* Current Step */}
        <div className="w-4 h-4 bg-blue-500 rounded-full flex justify-center items-center m-1">
        </div>

        {/* Future Steps */}
        <div className="w-4 h-4 bg-gray-300 rounded-full m-1"></div>
  
        {/* Another future step (add another line before if needed) */}
        <div className="w-4 h-4 bg-gray-300 rounded-full m-1"></div>
      </div>
    );
  };
  
