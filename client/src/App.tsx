import { Sidebar } from "@/sections/Sidebar";
import { MainContent } from "@/components/MainContent";

export const App = () => {
  return (
    <body className="text-white text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-ui_sans_serif">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="relative box-border caret-transparent flex min-h-[1000px] p-4">
            <Sidebar />
            <MainContent />
          </div>
        </div>
      </div>
    </body>
  );
};
