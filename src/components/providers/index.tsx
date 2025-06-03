import React from "react";

// Providers
import { ThemeProvider } from "./components/theme.provider";
import ReduxProvider from "./components/redux.provider";

// NxtIntl
import {
  Locale,
  NextIntlClientProvider,
  useLocale,
  useMessages,
  useNow,
  useTimeZone,
} from "next-intl";
import TankStack from "./components/tank-stack";

export default function Providers({ children }: { children: React.ReactNode }) {
  // Translation
  const messages = useMessages();
  const locale = useLocale() as Locale;
  const timezone = useTimeZone();
  const now = useNow();

  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TankStack>
          <NextIntlClientProvider
            messages={messages}
            locale={locale}
            timeZone={timezone}
            now={now}
          >
            <ReduxProvider>{children}</ReduxProvider>
          </NextIntlClientProvider>
        </TankStack>
      </ThemeProvider>
    </>
  );
}
