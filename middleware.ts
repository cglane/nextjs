// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
 
// export default NextAuth(authConfig).auth;
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { getSession } from "@/auth";

export async function middleware(request: NextRequest) {

    const session = await getSession();
    if(!session) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next();
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};