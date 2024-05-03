
"use client"
import { useStageStore } from "@/stores/stage";
import { useRouter } from 'next/navigation'
// import { updateProgress } from "@/app/lib/data";
import { updateProgress } from "@/app/lib/actions";
export default  function Page() {      
  const router = useRouter()

  const {replace, stage} = useStageStore();
  
  const handleClickListener = () => {
    let nextPathName = "/setup/practice_area/import_progress"
    updateProgress('1', nextPathName).then(()=> {
      replace({"title": "Import Progress", "index": 3, "subTitle": "Subtitle"})
      router.push(nextPathName)
    }      
    )


  };
    return (
    <main>
        <h1>Current Module:{stage.title}</h1>
          <button onClick={handleClickListener}         className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
>
            Click to Move on to the Next Module
      </button>  
      <button onClick={()=> router.push("/setup/practice_area/126eed9c-c90c-4ef6-a4a8-fcf7408d3c66/edit")}>
              Click to Go to a PA
            </button>
    </main>
  );
}