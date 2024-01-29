import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import AuthContainer from "@/components/common/auth-container";
import { publicPath } from "@/services";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const isPublicPage = publicPath.includes(pathname);
  if (isPublicPage) {
    return <Component {...pageProps} />
  }
  return (
    <AuthContainer>
      <Component {...pageProps} />
    </AuthContainer>
  );
}
