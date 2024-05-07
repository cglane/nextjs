"use client"

import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react';
import { RemoveMapping, AddMapping } from '@/app/ui/setup/buttons';
import { updateCaseType } from '@/app/lib/actions';
import { AiSpan } from '../widgets';

// TODO change props to interface
export default function MappingForm(props:any) {
    const [importNames, setImportNames] = useState<string[]>(props.importNames);
    const setTheState = (value: string[]) => {
        setImportNames(value)
    }
    const saveAndContinue = () => {
        updateCaseType(props.caseTypeId, importNames)
    }
    // Temporary
    const otherImportNames = ["Bankruptcy", "Worker Compensation"]

    return (
        <div> 
            <div className='grid'>
                    <div className='bg-slate-200 rounded-md border border-gray-200'><span>{props.mappedNameHeader}</span></div>
                    {importNames?.map((importName) => (
                        <div className="flex bg-slate-50 rounded-md border border-gray-200 items-center" key={importName}>
                            <div className='flex w-9/12 font-bold text-xs mx-4'>
                                <div className="w-4 h-4 bg-green-500 rounded-full flex justify-center items-center text-white font-bold mx-3">
                                    ✓
                                </div>
                                {importName}
                            </div>
                            {/* This is how you pull items to the right */}
                            <div className='flex w-6/12 justify-end h-12 items-center'>
                                <AiSpan/>
                                <RemoveMapping callback={setTheState}caseTypeId={props.caseTypeId} importNames={importNames} importName={importName}/>
                                </div>
                            </div>
                    ))}

                    
                </div>
                <div>
                    <div><span>{props.unmappedNameHeader}</span></div>

                    <h1>Add Mappings</h1>
                {otherImportNames.map((importName) => (
                        <div key={importName}>
                            <div>Import Name: {importName}</div>
                            <div><AddMapping callback={setTheState}caseTypeId={props.caseTypeId} importNames={importNames} importName={importName}/></div>
                            </div>
                    ))}

                </div>
                <button onClick={saveAndContinue}>Save and Continue</button>
        </div>

    )
}