
"use client"
import { updateProgress } from "@/app/lib/actions";
import { useStageStore } from "@/stores/stage";
import { useRouter } from 'next/navigation'
import Link from "next/link";
export default  function Page() {      
  const router = useRouter()

  const {replace, stage} = useStageStore();
  
  const handleClickListener = async() => {
    let nextPathName = "/setup/practice_area/import_list"
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
        {/* //Temporary */}
        <Link  href="/setup/practice_area/126eed9c-c90c-4ef6-a4a8-fcf7408d3c66/edit/mappings" className="mt-4 rounded-md bg-green-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
>
            Click to Map PA on Case Type
        </Link>  
    </main>
  );
}