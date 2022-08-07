import React, { useState } from 'react';
import {useRouter} from 'next/router'
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  const router = useRouter()

  if (session) {
    if (session.user.acquiredUser.role === 1) {
      router.push({
        pathname: "/user"
      })
    } else {
      router.push({
        pathname: "/admin"
      })
    }
  }


  return (<></>);
}
