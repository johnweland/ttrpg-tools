export default function Page() {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/35 animate-pulse" />
        <div className="aspect-video rounded-xl bg-muted/35 animate-pulse" />
        <div className="aspect-video rounded-xl bg-muted/35 animate-pulse" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/35 md:min-h-min animate-pulse" />
    </>
  );
}
