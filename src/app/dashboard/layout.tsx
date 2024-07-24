import { PropsWithChildren } from "react";
import AsideAdmin from "./components/aside";
import Header from "./components/header";

export default function LayoutDashboard({ children}: PropsWithChildren) {
  return (
      <section className={`flex bg-background_body h-full max-h-screen overflow-hidden`}>
        
        <AsideAdmin />
        
        <section className="flex flex-col w-full">
          <Header />
          
          <main className="px-3 overflow-y-auto">
            {children}
          </main>
        
        </section>
      
      </section>
  );
}
