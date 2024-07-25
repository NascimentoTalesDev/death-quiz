import { PropsWithChildren } from "react";
import AsideAdmin from "./components/aside";
import Header from "./components/header";
import { ThemeProvider } from "@/providers/ThemeProvider";

export default function LayoutDashboard({ children }: PropsWithChildren) {
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

        <section className="flex flex-col pb-3 w-full">
          <Header />
          <div className="flex w-full overflow-hidden">
            <main className="px-3 grow overflow-y-auto overflow-hidden no-scroll pb-10">
              {children}
            </main>
            <aside className="hidden lg:block border min-h-[533px] h-full  max-h-[700px] rounded-lg w-[250px] bg-white dark:bg-background px-3 pt-5">
              Minhas conquistas 
            </aside>
          </div>
        </section>
      </section>
    </ThemeProvider>
  );
}
