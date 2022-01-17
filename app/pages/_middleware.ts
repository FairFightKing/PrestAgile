import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req, ev) {
  // Redirection possible ici si la personne n'est pas auth
  /**const { pathname } = req.nextUrl
    if (pathname == '/') {
        return NextResponse.redirect('/hello-nextjs')
    }
    return NextResponse.next()
     */
}
