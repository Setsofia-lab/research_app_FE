import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { useAuth } from './store/useAuth';

export function middleware(request: NextRequest) {
  const authenticated = cookies().get('authenticated')?.value;

  if (request.nextUrl.pathname.startsWith('/home') && !authenticated) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}
