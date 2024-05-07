import {paSetupFlow} from "@/app/lib/settings/pa_setup_flow"


export const getLastPath = (currentPath: string) => {
  let currentIndex:number = paSetupFlow.findIndex((value:string)=> value == currentPath)
  let nextIndex = currentIndex - 1;
  return paSetupFlow[nextIndex]

}
export const getNextPath = (currentPath: string) => {
  let currentIndex:number = paSetupFlow.findIndex((value:string)=> value == currentPath)
  let nextIndex = currentIndex + 1;
  console.log(currentIndex, nextIndex)
  if( nextIndex> paSetupFlow.length - 1){
    return paSetupFlow[0]
  }else {
    return paSetupFlow[nextIndex]
  }
}

