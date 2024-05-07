"use client"

import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react';
import { RemoveMapping, AddMapping } from '@/app/ui/setup/buttons';
import { updateCaseType } from '@/app/lib/actions';

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
            <div>
                    <div><span>{props.mappedNameHeader}</span></div>
                    {importNames?.map((importName) => (
                        <div key={importName}>
                            <div>Import Name: {importName}</div>
                            <div><RemoveMapping callback={setTheState}caseTypeId={props.caseTypeId} importNames={importNames} importName={importName}/></div>
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