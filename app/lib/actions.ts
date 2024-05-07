'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { cookies } from 'next/headers';

export async function updateProgress(firm_id: string, current_path: string) {
  await sql`
    UPDATE progress
    SET current_path = ${current_path}
    WHERE firm_id = ${firm_id}
  `;
  // Expire cookie after a day
  const oneDay: number = 24 * 60 * 60 * 1000;
  cookies().set('progress', current_path, { expires: Date.now() - oneDay });
}

export async function updateCaseType(id: string, importNames: string[]) {
  await sql`
  UPDATE case_types
  SET import_names = Array[${JSON.stringify(importNames)}]
  WHERE id = ${id}
 `;
  // i would be lying if i understood this
  // only seems to work sometimes
  // won't really work if we are using read replica either
  // Temporary
  revalidatePath(
    '/setup/practice_area/126eed9c-c90c-4ef6-a4a8-fcf7408d3c66/edit/mappings',
  );
}
