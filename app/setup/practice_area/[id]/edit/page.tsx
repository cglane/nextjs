import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }:  { params: { id: string } }) {
    const id = params.id;
  
    return (
    <main>
      <h1>This is the practice area record: {id}</h1>
    </main>
  );
}