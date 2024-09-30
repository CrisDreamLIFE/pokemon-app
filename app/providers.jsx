'use client'

import {NextUIProvider} from '@nextui-org/react'
import { ApolloWrapper } from "./ApolloWrapper";

export function Providers({children}) {
  return (
    <ApolloWrapper>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </ApolloWrapper>
    
  )
}