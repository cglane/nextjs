import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { fetchCaseType } from '@/app/lib/data';
import useTranslation from 'next-translate/useTranslation'

export default async function Page({ params }:  { params: { id: string } }) {
  const { t, lang } = useTranslation('setup')

    const id = params.id;
    const caseType = await fetchCaseType(id)
    /// Temporary
    const integration = "Filevine"
    return (
    <main>
      <h1>{caseType.name}</h1>
      <p>{t('p_description_integration_mapping', {integration:integration})}</p>
      <div>
        <div><h2>{t('h2_mapping_instructions', {integration:integration})}</h2></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div><h2>{t('h2_mapping_instructions_2', {integration:integration})}</h2></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}