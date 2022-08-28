import { NextResponse } from "next/server"

export default function middleware(req) {
    let cookie = req.cookies["next-auth.session-token"];
    let sec_cookie = req.cookies["__Secure-next-auth.session-token"];
    const url = req.url

    // if (url != '/login' && !cookie) {

      // const url3 = req.nextUrl.clone()
      // url3.pathname = '/login'
      // return NextResponse.redirect(url3)
    // }

    var reqProtected = (
      req.nextUrl.pathname == '/' ||
      url.includes("/profile") ||
      url.includes("/admin") ||
      url.includes("/user")
    )

    var frontProtected = (
      req.nextUrl.pathname == '/login' ||
      req.nextUrl.pathname == '/reset-password' ||
      req.nextUrl.pathname == '/register' ||
      req.nextUrl.pathname == '/forgot-password'
    )

    if (cookie || sec_cookie) {
      if (frontProtected) {
        const url2 = req.nextUrl.clone()
        url2.pathname = '/'
        return NextResponse.redirect(url2)
      }
    } else {
      if (reqProtected) {
        const url3 = req.nextUrl.clone()
        url3.pathname = '/login'
        return NextResponse.redirect(url3)
      }
    }

    return NextResponse.next()
}
