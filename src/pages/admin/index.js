import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import Router from 'next/router'

export default function Admin() {
  const { data: session } = useSession();

  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/admin' ){
      Router.push('/admin/infografis')
    }
  });
  return (
    <></>
  );
}
