import { collections } from '@wix/stores';
import { products } from '@wix/stores';
import { OAuthStrategy, createClient } from "@wix/sdk";
import { cookies } from 'next/headers';

export const wixClientServer = async () => {
  let refreshToken;
  try {
    const cookieStore = cookies();
    refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
  } catch (e) {
    // Handle error, e.g., log it or set a default value for refreshToken
    console.error("Error parsing refreshToken:", e);
    refreshToken = {};
  }

  const wixClient = createClient({
    modules: {
      products,
      collections,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });
  return wixClient;
}