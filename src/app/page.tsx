import Link from "next/link";

export default function Home() {
  return (
    <main className="w-[84%] flex flex-col items-center justify-enter">

      <header className="w-full flex items-center justify-between my-5">
        <h1 className="text-2xl"><span className="font-bold">Next</span> Todos</h1>
        <Link href='new' className="border rounded p-2 outline-none hover:bg-slate-700 focus:bg-slate-700 capitalize">create todo</Link>
      </header>

      <ul className="w-full my-5">{
        // todos.map(todos => <ListItem key={key} {...todos} />)
      }</ul>

    </main>
  )
}
