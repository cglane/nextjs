// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
// import Credentials from 'next-auth/providers/credentials';
// import { z } from 'zod';
// import { sql } from '@vercel/postgres';
// import type { User } from '@/app/lib/definitions';
// import bcrypt from 'bcrypt';
// async function getUser(email: string): Promise<User | undefined> {
//   try {
//     const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
//     return user.rows[0];
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     throw new Error('Failed to fetch user.');
//   }
// }
// export const { auth, signIn, signOut } = NextAuth({
//   ...authConfig,
//   providers: [    Credentials({
//     async authorize(credentials) {
//       const parsedCredentials = z
//         .object({ email: z.string().email(), password: z.string().min(6) })
//         .safeParse(credentials);
//         if (parsedCredentials.success) {
//           const { email, password } = parsedCredentials.data;
//           const user = await getUser(email);
//           if (!user) return null;
//           const passwordsMatch = await bcrypt.compare(password, user.password);
//           if (passwordsMatch) return user;

//         }
//     },
//   }),],

// });

import {cookies} from "next/headers";

// const sessionPassword = process.env.SESSION_PASSWORD as string;
// if(!sessionPassword) throw new Error("SESSION_PASSWORD is not set");

export type User = {
    login: string;
}
export  function getSession() : string {

// export async function getSession() : Promise<User | null> {
    // const encryptedSession = cookies().get('auth_session')?.value;
    const session = cookies().get('auth_session')?.value || ""

    // const session = encryptedSession
    //     ? await unsealData(encryptedSession, {
    //         password: sessionPassword,
    //     }) as string
    //     : null;
    return session
    // return session ? JSON.parse(session) as User : null;
}

export function setSession() {
  console.log('set session')
    // const encryptedSession = await sealData(JSON.stringify(user), {
    //     password: sessionPassword,
    // });

    // cookies().set('auth_session', encryptedSession, {
    //     sameSite: 'strict',
    //     httpOnly: true,
    //     // secure: true, # Uncomment this line when using HTTPS
    // });
}