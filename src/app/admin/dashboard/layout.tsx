import { PropsWithChildren } from "react";
import AsideAdmin from "./components/aside";
import Header from "./components/header";
import { ThemeProvider } from "@/providers/ThemeProvider";
import QuestionModalProvider from "@/providers/QuestionModalProvider";
import { ConfettiProvider } from "@/providers/ConfettiProvider";

export default function LayoutAdminDashboard({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <section
        className={`flex overflow-y-auto md:overflow-hidden no-scroll flex-col md:flex-row bg-background_body dark:bg-background h-full md:max-h-screen`}
      >
        <AsideAdmin />

        <section className="flex flex-col pb-3 px-3 w-full">
          <Header />
          <main className="grow bg-white dark:bg-background p-3 overflow-y-auto dark:border rounded-lg overflow-hidden no-scroll pb-10">
            {children}
          </main>
        </section>

      </section>
    </ThemeProvider>
  );
}
