import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { getSession } from '@/auth';
import { fetchProgress } from './app/lib/data';

export async function middleware(request: NextRequest) {
  const session = getSession();

  // if(!session) {
  //     return NextResponse.redirect(new URL('/login', request.url))
  // }
  // This should be a constant
  // if (request.nextUrl.pathname.startsWith('/setup/practice_area')) {
  //   let current_path =  request.cookies.get('progress')?.value || ""

  //   if (!current_path){
  //     // If we don't have a cookie record of our progress, fetch from db
  //     const localProgress = await fetchProgress('1')
  //     request.cookies.set('progress', localProgress.current_path)
  //   }

  //   if ( current_path && current_path != request.nextUrl.pathname){
  //     return NextResponse.redirect(new URL(current_path, request.url))
  //   }

  // }
  return NextResponse.next();
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
