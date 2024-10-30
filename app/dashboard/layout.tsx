import PrimaryLayout from "@/components/layouts/primary-layout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PrimaryLayout>{children}</PrimaryLayout>;
}
