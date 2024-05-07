"use client"

import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react';
import { RemoveMapping, AddMapping } from '@/app/ui/setup/buttons';


export default function MappingForm(props:any) {
    const [importNames, setImportNames] = useState<string[]>(props.importNames);
    const [likes, setLikes] = useState(0);
    const setTheState = (value: string[]) => {
        setImportNames(value)
    }
    // Temporary
    const otherImportNames = ["Bankruptcy", "Worker Compensation"]
    function handleClick() {
        setLikes(likes + 1);
      }
    return (
        <div> 
            <div>
            <   button onClick={handleClick}>Likes ({likes})</button>

                    {importNames?.map((importName) => (
                        <div key={importName}>
                            <div>Import Name: {importName}</div>
                            <div><RemoveMapping callback={setTheState}caseTypeId={props.caseTypeId} importNames={importNames} importName={importName}/></div>
                            </div>
                    ))}

                    
                </div>
                <div>
                    <h1>Add Mappings</h1>
                {otherImportNames.map((importName) => (
                        <div key={importName}>
                            <div>Import Name: {importName}</div>
                            <div><AddMapping callback={setTheState}caseTypeId={props.caseTypeId} importNames={importNames} importName={importName}/></div>
                            </div>
                    ))}

                </div>

        </div>

    )
}