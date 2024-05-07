
import { notFound } from 'next/navigation';

export default async function Page({ params }:  { params: { stage_id: string } }) {
    const id = params.stage_id;
  
    return (
    <main>
      <h1>This is the stage description: {id}</h1>
    </main>
  );
}