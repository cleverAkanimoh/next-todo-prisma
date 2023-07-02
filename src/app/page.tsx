import Link from "next/link";

export default function Home() {
  return (
    <main>
    
      <header className="">
        <h1><span>Next</span> Todos</h1>
        <Link href='new'>New</Link>
      </header>
      
      <ul></ul>
    
    </main>
  )
}
