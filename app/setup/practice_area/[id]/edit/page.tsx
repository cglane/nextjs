
import { notFound } from 'next/navigation';
import { fetchCaseType } from '@/app/lib/data';
export default async function Page({ params }:  { params: { id: string } }) {
    const id = params.id;
    const caseType = await fetchCaseType(id)
    return (
    <main>
      <h1>This is the practice area record: {id}</h1>
      <h1>From DB - Case Type Name: {caseType.name}</h1>
    </main>
  );
}