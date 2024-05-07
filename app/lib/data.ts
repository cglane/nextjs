import { sql } from '@vercel/postgres';
import {

  Progress,
  CaseType,
  CaseStatus,
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { getSession, setSession } from '@/auth';

// Need to use 127.0.0.1 vs localhost node 18

async function makeRequest(path: String): Promise<any> {
  // Base Method for making requests to Server
  let authToken = getSession();
  let url: string = `${process.env.API_BASE_URL}/${path}`;
  const response = await fetch(url, {
    method: 'GET',
    // TODO: Set ChildType and ChildID headers

    headers: {
      Authorization: `Bearer ${authToken}`,
      ChildType: 'attorney',
      ChildId: '86244',
    },
  });
  // TODO: Handle errors better
  if (response.status == 401) {
    console.log('Bad Error: Should redirect to Login');
    // return redirect("/login")
  } else {
    const data = await response.json();
    return data;
  }
}
export async function fetchProgress(firmId: string) {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  try {
    noStore();
    // Don't do this in production :)
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const data =
      await sql<Progress>`SELECT * FROM progress where firm_id=${firmId}`;
    console.log(data, 'data');
    return data.rows[0] as Progress;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch progress data.');
  }
}

export async function fetchCaseType(id: string) {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  try {
    noStore();
    const data = await sql<CaseType>`SELECT * FROM case_types where id=${id}`;
    return data.rows[0] as CaseType;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Case Type data.');
  }
}

export async function fetchCaseStatus(id: string) {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  try {
    noStore();

    const data =
      await sql<CaseStatus>`SELECT * FROM case_statuses where id=${id}`;
    return data.rows[0] as CaseStatus;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Case Status data.');
  }
}
