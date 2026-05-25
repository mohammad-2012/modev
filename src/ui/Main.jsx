// export default function Main({ children }) {
//   return <main className="flex-1 pt-30 px-48 bg-primary">{children}</main>;
// }

export default function Main({ children }) {
  return (
    <main className="flex-1 pt-28 md:pt-32 lg:pt-36 px-4 md:px-8 lg:px-48 bg-primary">
      {children}
    </main>
  );
}
