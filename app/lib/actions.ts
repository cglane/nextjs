'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import {cookies} from "next/headers";

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce.number().gt(0, { message: 'Please enter an amount greater than $0.' }),
  
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});
 
const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({

    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
    });


  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }    
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  const { customerId, amount, status } = validatedFields.data;

  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  try{
    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
  }catch(error){
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };

  }
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
  
}
export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  const amountInCents = amount * 100;
 
  await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath('/dashboard/invoices');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  // try {
  //   await signIn('credentials', formData);
  // } catch (error) {
  //   if (error instanceof AuthError) {
  //     switch (error.type) {
  //       case 'CredentialsSignin':
  //         return 'Invalid credentials.';
  //       default:
  //         return 'Something went wrong.';
  //     }
  //   }
  //   throw error;
  // }
} 


export async function updateProgress(firm_id: string, current_path:string) {
  await sql`
    UPDATE progress
    SET current_path = ${current_path}
    WHERE firm_id = ${firm_id}
  `;
  // Expire cookie after a day
  const oneDay: number = 24 * 60 * 60 * 1000
  cookies().set('progress', current_path,  { expires: Date.now() - oneDay })

}


const CaseTypeFormSchema = z.object({
  id: z.string(),
  import_names: z.string({
    invalid_type_error: 'Please select an import name.',
  }),
});
 
const CreateCaseType = CaseTypeFormSchema.omit({ id: true});
const UpdateCaseType = CaseTypeFormSchema.omit({ id: true});

export async function updateCaseType(id: string, importNames: string[]) {
  console.log(importNames, 'in action')
  console.log(`${JSON.stringify(importNames)}`, 'jsonified')
  await sql`
  UPDATE case_types
  SET import_names = Array[${JSON.stringify(importNames)}]
  WHERE id = ${id}
 `;
 // i would be lying if i understood this
 // only seems to work sometimes
// won't really work if we are using read replica either
//  revalidatePath("/setup/practice_area/126eed9c-c90c-4ef6-a4a8-fcf7408d3c66/edit/mappings")
}