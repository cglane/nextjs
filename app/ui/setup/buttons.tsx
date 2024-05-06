"use client"
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { updateCaseType } from '@/app/lib/actions';


export function RemoveMapping({ caseTypeId, importNames, importName }: { caseTypeId: string, importNames:string[], importName: string }) {
    const reduceAndReuse = () => {
        importNames = importNames.filter((x)=> x != importName)
        updateCaseType(caseTypeId, importNames)
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

  export function AddMapping({ caseTypeId, importNames, importName }: { caseTypeId: string, importNames:string[], importName: string }) {
    const reduceAndReuse = () => {
        let newArray = importNames
        newArray.push(importName)
        updateCaseType(caseTypeId, newArray)
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