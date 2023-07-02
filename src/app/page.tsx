import Link from "next/link";

export default function Home() {
  return (
    <main>
    
      <header className="flex justify-between bg-yellow-50">
        <h1><span>Next</span> Todos</h1>
        <Link href='new'>New</Link>
      </header>
      
      <ul>{
      // todos.map(todos => <ListItem key={key} {...todos} />)
      }</ul>
    
    </main>
  )
}
