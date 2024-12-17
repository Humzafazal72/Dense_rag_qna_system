import Header from "@/components/Header";

export default function LegalsLayout({ children }) {
  return (
    <>
      <Header isLegal={true} />
      {children}
    </>
  );
}
