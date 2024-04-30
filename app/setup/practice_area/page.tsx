
"use client"
import { useStageStore } from "@/stores/stage";
import { useRouter } from 'next/navigation'
import useTranslation from 'next-translate/useTranslation'

export default  function Page() {      
  const router = useRouter()
  const { t, lang } = useTranslation('progress')

  const {replace} = useStageStore();
  const handleClickListener = () => {
    replace({"title": "PA Import", "index": 2, "subTitle": "hello title"})
    router.push("/setup/practice_area/import")
  };
    return (
    <main>
          <button onClick={handleClickListener}>
            Initial View
      </button>  
      <h1>
      </h1>
    </main>
  );
}