"use client"
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { updateCaseType } from '@/app/lib/actions';


export function RemoveMapping({ callback, caseTypeId, importNames, importName }: { callback:(value:string[]) => void, caseTypeId: string, importNames:string[], importName: string }) {
    const reduceAndReuse = () => {
        importNames = importNames.filter((x)=> x != importName)
        console.log(importNames, 'import names in reduce reuse')
        callback(importNames)
        // updateCaseType(caseTypeId, importNames)
    }
    return (
        <div onClick={(e:any) => reduceAndReuse()}>
                {/* TODO: Change to i18n */}
            <span className="text-red-600 text-xs font-bold mx-4">Remove</span>            
        </div>

    );
  }

  export function AddMapping({ callback, caseTypeId, importNames, importName }: {callback:(value:string[]) => void, caseTypeId: string, importNames:string[], importName: string }) {
    const reduceAndReuse = () => {
        if (!importNames?.includes(importName)){
            let newArray = [...importNames]
            newArray.push(importName)
            console.log(newArray, 'new array')
            callback(newArray)
            // updateCaseType(caseTypeId, newArray)
        }else{
            console.log('add mapping called but did nothing')
        }

    }
    return (
        
        <div onClick={(e:any) => reduceAndReuse()}>
            <span className="text-blue-600 text-xs font-bold mx-4">Add</span>
        </div>

    );
  }
// TODO change to i18n
  export function ContinueButton(props:any){
    return (
        <button onClick={props.handleClickListener} className="mt-4 rounded-md cs-bg-dark-blue px-4 py-2 text-sm text-white "
        >
                    Save and Continue
              </button> 
    )
  }