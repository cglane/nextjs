import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { updateCaseType } from '@/app/lib/actions';


export function RemoveMapping({ caseTypeId, importName }: { caseTypeId: string, importName:string }) {
    return (
        <div onClick={(e:any) => updateCaseType(caseTypeId, importName)}>
            <button className="rounded-md border p-2 hover:bg-gray-100">
            <span className="sr-only">Remove</span>
            <TrashIcon className="w-5" />
            </button>
        </div>

    );
  }