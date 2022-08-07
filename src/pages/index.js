import React, { useState } from 'react';
import {useRouter} from 'next/router'
import { useSession } from "next-auth/react";
import axios from 'axios';

export default function Home() {
  const { data: session } = useSession();

  const router = useRouter()

  if (session) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${session.user.accessToken}`
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
