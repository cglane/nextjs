
"use client"
import { useStageStore } from "@/stores/stage";
import { useRouter } from 'next/navigation'

export default  function Page() {      
  const router = useRouter()

  const {replace, stage} = useStageStore();
  
  const handleClickListener = () => {
    replace({"title": "Something Else", "index": 2})
    router.push("/setup/practice_area")
  };
    return (
    <main>
        <h1>Current Module:{stage.title}</h1>
          <button onClick={handleClickListener}>
            Click to Move on to the Next Module
      </button>  
    </main>
  );
}