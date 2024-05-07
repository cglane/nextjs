"use client"

import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react';
import { RemoveMapping, AddMapping } from '@/app/ui/setup/buttons';
import { updateCaseType } from '@/app/lib/actions';
import { AiSpan } from '../../widgets';
import BottomNavigation from '../bottom_navigation';
import { useRouter } from 'next/navigation'
import {MainDescription, MainHeader} from '../basic_elements';

// TODO change props to interface
export default function MappingForm(props:any) {
    const router = useRouter()

    const [importNames, setImportNames] = useState<string[]>(props.importNames);
    const setTheState = (value: string[]) => {
        setImportNames(value)
    }
    const saveAndContinue = () => {
        updateCaseType(props.caseTypeId, importNames)
    }

    // Temporary
    const otherImportNames = ["Bankruptcy", "Worker Compensation"]
    const goBackClickListener = () => {
        router.push('/setup/practice_area/import')

    }
    return (
        <div> 
            <div className='p-12'>
                <MainHeader>{props.caseTypeName}</MainHeader>
                <MainDescription>{props.description}</MainDescription>
            <br></br>
            <div className='grid rounded-md border border-gray-200'>
                    <div className='bg-slate-200  border border-gray-200 text-xs p-2 h-8'><span>{props.mappedNameHeader}</span></div>
                    {importNames?.map((importName) => (
                        <div className="flex bg-slate-50 border border-gray-200 items-center" key={importName}>
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
                <br></br>
                <div className='grid rounded-md border border-gray-200'>
                <div className='bg-slate-200  border border-gray-200 text-xs p-2 h-8'>
                    <span>{props.unmappedNameHeader}
                    </span>
                </div>

                    
                {otherImportNames.map((importName) => (
                        <div className="flex bg-slate-50 border border-gray-200 items-center" key={importName}>
                            <div className='flex w-9/12 font-bold text-xs mx-4'>
                                {importName}
                            </div>
                            <div className='flex w-6/12 justify-end h-12 items-center'>
                                <AddMapping callback={setTheState}caseTypeId={props.caseTypeId} importNames={importNames} importName={importName}/>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
           
                <BottomNavigation buttonBack="Back" buttonNext="Save and Continue" handleClickListener={saveAndContinue} goBackClickListener={goBackClickListener}/>                
        </div>

    )
}