export function MainHeader({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-base text-lg font-bold text-sky-950">{children}</h1>
  );
}

export function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-6/6 rounded-md border border-gray-200 bg-white  md:m-5">
      {children}
    </main>
  );
}

export function MainDescription({ children }: { children: React.ReactNode }) {
  return <p className="p-1 text-xs leading-4">{children}</p>;
}
