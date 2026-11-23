import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

/** The frame every inner page shares: headers, the page's sections, footer, call / WhatsApp buttons. */
export default function PageShell({ children }) {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7fbff] pb-20 text-[#071225]">
      <MobileHeader />
      <DesktopHeader />
      {children}
      <Footer />
      <FloatingButtons />
    </main>
  );
}
