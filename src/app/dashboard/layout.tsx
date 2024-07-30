import { PropsWithChildren } from "react";
import AsideAdmin from "./components/aside";
import Header from "./components/header";
import { ThemeProvider } from "@/providers/ThemeProvider";
import QuestionModalProvider from "@/providers/QuestionModalProvider";
import { ConfettiProvider } from "@/providers/ConfettiProvider";

export default function LayoutDashboard({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <QuestionModalProvider />
      <ConfettiProvider />
      <section
        className={`flex overflow-y-auto md:overflow-hidden no-scroll flex-col md:flex-row bg-background_body dark:bg-background h-full md:max-h-screen`}
      >
        <AsideAdmin />

        <section className="flex flex-col pb-3 px-3 w-full">
          <Header />
          <div className="flex w-full gap-3 overflow-hidden">
            <main className="grow bg-white dark:bg-background p-3 overflow-y-auto dark:border rounded-lg overflow-hidden no-scroll pb-10">
              {children}
            </main>
            <aside className="hidden lg:block dark:border min-h-[533px] h-full  max-h-[700px] rounded-lg w-[250px] bg-white dark:bg-background p-3">
              Minhas conquistas 
            </aside>
          </div>
        </section>
      </section>
    </ThemeProvider>
  );
}
