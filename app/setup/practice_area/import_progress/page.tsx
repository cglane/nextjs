
"use client"
import { useStageStore } from "@/stores/stage";
import { useRouter } from 'next/navigation'

export default  function Page() {      
  const router = useRouter()

  const {replace} = useStageStore();
  const handleClickListener = () => {
    replace({"title": "hello", "index": 2})
    router.push("/setup")
  };
    return (
    <main>
          <button onClick={handleClickListener}>
            Import Progress
      </button>  
    </main>
  );
}