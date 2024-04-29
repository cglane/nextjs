
"use client"
import { useStageStore } from "@/stores/stage";
import { useRouter } from 'next/navigation'

export default  function Page() {      
  const router = useRouter()

  const {replace} = useStageStore();
  const handleClickListener = () => {
    replace({"title": "import", "index": 2})
    router.push("/setup/practice_area/import_list")
  };
    return (
    <main>
          <button onClick={handleClickListener}>
            Import
      </button>  
    </main>
  );
}