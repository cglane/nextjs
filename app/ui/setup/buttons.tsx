"use client"
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { updateCaseType } from '@/app/lib/actions';


export function RemoveMapping({ caseTypeId, importNames, importName }: { caseTypeId: string, importNames:string[], importName: string }) {
    importNames = importNames.filter((x)=> x != importName)
    return (
        <div onClick={(e:any) => updateCaseType(caseTypeId, importNames)}>
            <button className="rounded-md border p-2 hover:bg-gray-100">
            <span className="sr-only">Remove</span>
            <TrashIcon className="w-5" />
            </button>
        </div>

    );
  }