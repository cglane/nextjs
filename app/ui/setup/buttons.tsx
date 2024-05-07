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
            <button className="rounded-md border p-2 hover:bg-gray-100">
            <span className="sr-only">Remove</span>
            <TrashIcon className="w-5" />
            </button>
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
            <button className="rounded-md border p-2 hover:bg-gray-100">
            <span className="sr-only">Remove</span>
            <TrashIcon className="w-5" />
            </button>
        </div>

    );
  }