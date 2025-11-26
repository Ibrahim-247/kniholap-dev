'use client'

import UserProvider from '@/providers/UserProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GoogleOAuthProvider } from '@react-oauth/google';
import OptionProvider from '@/providers/OptionsProvider';

export default function Providers({ children, serverUserData = null, serverAccessToken = null }) {
    const queryClient = new QueryClient()
    const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    // main render
    return (
        <QueryClientProvider client={queryClient}>
            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                <UserProvider
                    serverUserData={serverUserData} serverAccessToken={serverAccessToken}>
                    <OptionProvider>
                        {children}
                    </OptionProvider>
                </UserProvider>
            </GoogleOAuthProvider>
        </QueryClientProvider>
    )
}
