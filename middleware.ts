
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { getSession } from "@/auth";
import { fetchProgress } from './app/lib/data';

export async function middleware(request: NextRequest) {

    const session = getSession();
    
    // if(!session) {
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }
    // This should be a constant
    if (request.nextUrl.pathname.startsWith('/setup/practice_area')) {
      const localProgress = await fetchProgress('1')
      console.log('path saved in db', localProgress.current_path)
      console.log('path that we are currently on',request.nextUrl.pathname)
      if (localProgress.current_path != request.nextUrl.pathname){
        return NextResponse.redirect(new URL(localProgress.current_path, request.url))
      }
      
    
    }
    return NextResponse.next();
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};