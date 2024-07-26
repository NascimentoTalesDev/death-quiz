import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const session = request.cookies.get("authjs.session-token")?.value
  const csrf = request.cookies.get("authjs.csrf-token")?.value
  const secure = request.cookies.get("__Secure-authjs.session-token")?.value

  if(!session && !csrf && !secure){
    return NextResponse.redirect(new URL('/auth', request.url))
  }
}

export const config = {
  matcher: '/dashboard/:path*',
}