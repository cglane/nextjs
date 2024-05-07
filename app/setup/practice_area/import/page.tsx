
// "use client"
// import { updateProgress } from "@/app/lib/actions";
// import { useStageStore } from "@/stores/stage";
// import { useRouter } from 'next/navigation'
// import Link from "next/link";
// export default  function Page() {      
//   const router = useRouter()

//   const {replace, stage} = useStageStore();
  
//   const handleClickListener = async() => {
//     let nextPathName = "/setup/practice_area/import_list"
//     await updateProgress('1', nextPathName)      
//     replace({"title": "Import List", "index": 2, "subTitle": "import"})
//     router.push(nextPathName)
    

//   };
//     return (
//     <main>
//         <h1>Current Module:{stage.title}</h1>
//           <button onClick={handleClickListener} className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
// >
//             Click to Move on to the Next Module
//         </button>  
//         {/* //Temporary */}
//         <Link  href="/setup/practice_area/126eed9c-c90c-4ef6-a4a8-fcf7408d3c66/edit/mappings" className="mt-4 rounded-md bg-green-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
// >
//             Click to Map PA on Case Type
//         </Link>  
//     </main>
//   );
// }

import useTranslation from 'next-translate/useTranslation'
import LandingView from '@/app/ui/setup/practice_area/landing_view';
import { MainWrapper } from '@/app/ui/setup/basic_elements';
import Link from 'next/link';
// Page functions as for gathering data from api/db and doing server side rendering
export default  function Page() {     
  const { t, lang } = useTranslation('progress')
  // Temp 
  const nextPathName = "/setup/practice_area/import_list"
  const lastPathName = "/setup/practice_area"
    return (
      <MainWrapper>
        <LandingView lastPathName = {lastPathName} 
                      nextPathName = {nextPathName}
                      header = {"Import"} 
                      description={"Import Description Placeholder"} 
                      buttonBack={t('button_back')} 
                      buttonNext="Next" />


        <br></br>
        <h1>TEMPORARY</h1>
        <br></br>
        <Link className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400" href="/setup/practice_area/126eed9c-c90c-4ef6-a4a8-fcf7408d3c66/edit/mappings">
          Click to Go to a PA
        </Link>
      </MainWrapper>

  );
}