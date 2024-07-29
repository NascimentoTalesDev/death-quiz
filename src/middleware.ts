import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const session = request.cookies.get("authjs.session-token")?.value
  const secure = request.cookies.get("__Secure-authjs.session-token")?.value
  const death = request.cookies.get("death-quiz")?.value

  if(!session && !secure && !death){
    return NextResponse.redirect(new URL('/auth', request.url))
  }
}

export const config = {
  matcher: '/dashboard/:path*',
}