import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const session = request.cookies.get("authjs.session-token")?.value
  const secure = request.cookies.get("__Secure-authjs.session-token")?.value

  if(!session && !secure){
    return NextResponse.redirect(new URL('/auth', request.url))
  }
}

export const config = {
  matcher: '/dashboard/:path*',
}