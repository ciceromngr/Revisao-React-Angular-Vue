import React from 'react';

import { AuthProvider } from './auth';

export const AppProvider = ({ children }) => (
    <AuthProvider>
        {children}
    </AuthProvider>
)