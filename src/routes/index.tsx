import React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native'

import { AuthRoutes } from './auth.routes'

export function Routes() {
  return (
    <NavigationContainer
      theme={{ colors: { background: 'transparent' } as any } as Theme}
    >
      <AuthRoutes />
    </NavigationContainer>
  )
}