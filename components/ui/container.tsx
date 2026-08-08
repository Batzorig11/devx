export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col items-start justify-start bg-background font-sans pt-10 px-20 space-y-10">
      {children}
    </div>
  );
}
