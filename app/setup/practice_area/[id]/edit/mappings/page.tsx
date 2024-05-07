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
    <main className='md:m-5 rounded-md border border-gray-200 h-screen p-10'>
      <h1 className='text-lg text-sky-950 font-bold text-base'>{caseType.name}</h1>
      <p className='text-sm leading-4 p-1'>{t('p_description_integration_mapping', {integration:integration})}</p>
      <MappingForm caseTypeId={caseType.id} importNames={importNames} mappedNameHeader={t('h2_mapping_instructions', {integration:integration})} unmappedNameHeader={t('h2_mapping_instructions_2', {integration:integration})}/>
    </main>
  );
}