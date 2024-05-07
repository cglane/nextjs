import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { fetchCaseType } from '@/app/lib/data';
import useTranslation from 'next-translate/useTranslation'
import { RemoveMapping, AddMapping } from '@/app/ui/setup/buttons';
import MappingForm from '@/app/ui/setup/mapping_form';
export default async function Page({ params }:  { params: { id: string } }) {
  const { t, lang } = useTranslation('setup')

    const id = params.id;
    let importNames: string[] = []
    const caseType = await fetchCaseType(id)
    /// Temporary
    const integration = "Filevine"
    const otherImportNames = ["Bankruptcy", "Worker Compensation"]
    // Annoyingly vercel postgres has bad support for list of strings
    importNames = JSON.parse(caseType.import_names)
    
    return (
    <main>
      <h1>{caseType.name}</h1>
      <p>{t('p_description_integration_mapping', {integration:integration})}</p>
      <MappingForm caseTypeId={caseType.id} importNames={importNames}/>
      {/* <div><h2>{t('h2_mapping_instructions', {integration:integration})}</h2></div> */}

      {/* <div>
        
           {importNames?.map((importName) => (
              <div key={importName}>
                <div>Import Name: {importName}</div>
                <div><RemoveMapping caseTypeId={id} importNames={importNames} importName={importName}/></div>
                </div>
          ))}

        
      </div>
      <div>
      {otherImportNames.map((importName) => (
              <div key={importName}>
                <div>Import Name: {importName}</div>
                <div><AddMapping caseTypeId={id} importNames={importNames} importName={importName}/></div>
                </div>
          ))}

      </div> */}

    </main>
  );
}