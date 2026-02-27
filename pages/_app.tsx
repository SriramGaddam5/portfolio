import type { AppProps } from "next/app";
import { Provider } from "@/components/ui/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider forcedTheme="dark" attribute="class" disableTransitionOnChange>
      <Component {...pageProps} />
    </Provider>
  );
}
