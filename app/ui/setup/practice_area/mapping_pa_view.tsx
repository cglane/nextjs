'use client';

import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import { RemoveMapping, AddMapping } from '@/app/ui/setup/buttons';
import { updateCaseType } from '@/app/lib/actions';
import { AiSpan } from '../../widgets';
import BottomNavigation from '../bottom_navigation';
import { useRouter } from 'next/navigation';
import { MainDescription, MainHeader } from '../basic_elements';

// TODO change props to interface
export default function MappingForm(props: any) {
  const router = useRouter();

  const [importNames, setImportNames] = useState<string[]>(props.importNames);
  const setTheState = (value: string[]) => {
    setImportNames(value);
  };
  const saveAndContinue = () => {
    updateCaseType(props.caseTypeId, importNames);
  };

  // Temporary
  const otherImportNames = ['Bankruptcy', 'Worker Compensation'];
  const goBackClickListener = () => {
    router.push('/setup/practice_area/import');
  };
  return (
    <div>
      <div className="p-12">
        <MainHeader>{props.caseTypeName}</MainHeader>
        <MainDescription>{props.description}</MainDescription>
        <br></br>
        <div className="grid rounded-md border border-gray-200">
          <div className="border  border-gray-200 bg-slate-200 p-2 text-xs md:h-8">
            <span>{props.mappedNameHeader}</span>
          </div>
          {importNames?.map((importName) => (
            <div
              className="flex items-center border border-gray-200 bg-slate-50"
              key={importName}
            >
              <div className="mx-4 flex w-9/12 text-xs font-bold">
                <div className="mx-3 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 font-bold text-white">
                  ✓
                </div>
                {importName}
              </div>
              {/* This is how you pull items to the right */}
              <div className="flex h-12 w-6/12 items-center justify-end">
                <AiSpan />
                <RemoveMapping
                  callback={setTheState}
                  caseTypeId={props.caseTypeId}
                  importNames={importNames}
                  importName={importName}
                />
              </div>
            </div>
          ))}
        </div>
        <br></br>
        <div className="grid rounded-md border border-gray-200">
          <div className="border  border-gray-200 bg-slate-200 p-2 text-xs md:h-8">
            <span>{props.unmappedNameHeader}</span>
          </div>

          {otherImportNames.map((importName) => (
            <div
              className="flex items-center border border-gray-200 bg-slate-50"
              key={importName}
            >
              <div className="mx-4 flex w-9/12 text-xs font-bold">
                {importName}
              </div>
              <div className="flex h-12 w-6/12 items-center justify-end">
                <AddMapping
                  callback={setTheState}
                  caseTypeId={props.caseTypeId}
                  importNames={importNames}
                  importName={importName}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation
        buttonBack="Back"
        buttonNext="Save and Continue"
        handleClickListener={saveAndContinue}
        goBackClickListener={goBackClickListener}
      />
    </div>
  );
}
