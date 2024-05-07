
// "use client"
// import { useStageStore } from "@/stores/stage";
// import { useRouter } from 'next/navigation'
// import { updateProgress } from "@/app/lib/actions";
// export default  function Page() {      
//   const router = useRouter()

//   const {replace, stage} = useStageStore();
  
//   const handleClickListener = async () => {
//     let nextPathName = "/setup/practice_area"
//     await updateProgress('1', nextPathName)
//     replace({"title": "Something Else", "index": 1, "subTitle": "Something"})
//     router.push(nextPathName)
//   };
//     return (
//     <main>
//         <h1>Current Module:{stage.title}</h1>
//           <button onClick={handleClickListener}         className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
// >
//             Click to Move on to the Next Module
//       </button>  
//     </main>
//   );
// }

import useTranslation from 'next-translate/useTranslation'
import LandingView from '@/app/ui/setup/practice_area/landing_view';
import { MainWrapper } from '@/app/ui/setup/basic_elements';
// Page functions as for gathering data from api/db and doing server side rendering
export default  function Page() {     
  const { t, lang } = useTranslation('progress')
  // Temp 
  const nextPathName = "/setup/practice_area"
  const lastPathName = "/setup/practice_area/import_list"
    return (
      <MainWrapper>
        <LandingView lastPathName = {lastPathName} 
                      nextPathName = {nextPathName}
                      header = {"Progress"} 
                      description={"Import Progress Description Placeholder"} 
                      buttonBack={t('button_back')} 
                      buttonNext="Next" />
      </MainWrapper>

  );
}