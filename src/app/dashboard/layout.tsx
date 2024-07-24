import { PropsWithChildren } from "react";
import AsideAdmin from "./componensts/aside";
import Header from "./componensts/header";

export default function LayoutDashboard({ children}: PropsWithChildren) {
  return (
      <section className={`flex bg-background_body`}>
        <AsideAdmin />
        <section className="w-full px-3">
          <Header />
          <main>
            {children}
          </main>
        </section>
      </section>
  );
}
