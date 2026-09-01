import LeftSidebar from "@/components/ui/layout/LeftSidebar";
import Navbar from "@/components/ui/layout/Navbar";

export default async function CoreGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex max-w-[1200px] gap-8 px-4 pb-16 pt-2">
        <LeftSidebar />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </>
  );
}
