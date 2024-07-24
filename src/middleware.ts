import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const session = request.cookies.get("authjs.session-token")?.value
  const csrf = request.cookies.get("authjs.csrf-token")?.value

  if(!session && !csrf){
    return NextResponse.redirect(new URL('/auth', request.url))
  }
}

export const config = {
  matcher: '/dashboard/:path*',
}