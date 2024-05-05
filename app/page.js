import Image from "next/image";
import QueryComponent from './components/QueryComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-auto w-full p-24">
      Main Page
      <QueryComponent />
    </main>
  );
}
