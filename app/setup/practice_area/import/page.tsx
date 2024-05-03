
"use client"
import { updateProgress } from "@/app/lib/actions";
// import { updateProgress } from "@/app/lib/data";
import { useStageStore } from "@/stores/stage";
import { useRouter } from 'next/navigation'

export default  function Page() {      
  const router = useRouter()

  const {replace, stage} = useStageStore();
  
  const handleClickListener = async() => {
    let nextPathName = "/setup/practice_area/import_list"
    console.log('update progress to ', nextPathName)
    await updateProgress('1', nextPathName)      
    replace({"title": "Import List", "index": 2, "subTitle": "import"})
    router.push(nextPathName)
    

  };
    return (
    <main>
        <h1>Current Module:{stage.title}</h1>
          <button onClick={handleClickListener} className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
>
            Click to Move on to the Next Module
        </button>  
    </main>
  );
}