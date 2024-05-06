import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }:  { params: { stage_id: string } }) {
    const id = params.stage_id;
  
    return (
    <main>
      <h1>This is the stage description: {id}</h1>
    </main>
  );
}