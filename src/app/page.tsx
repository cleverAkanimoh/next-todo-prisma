import ListItem from "@/Components/ListItem";
import { prisma } from "@/db";
import Link from "next/link";

export default async function Home() {
  const todos = await prisma.todo.findMany()
  // await prisma.todo.create({ data: { title: 'clever', complete: false } })

  return (
    <main className="w-[84%] flex flex-col items-center justify-enter">

      <header className="w-full flex items-center justify-between my-5">
        <h1 className="text-2xl"><span className="font-bold">Next</span> Todos</h1>

        <Link href='new' className="border rounded p-2 outline-none hover:bg-slate-700 focus-within:bg-slate-700 capitalize">create todo</Link>
      </header>

      <ul className="w-full my-5">
        {
          todos.map((todo:any) => <ListItem key={todo.id} {...todo} />)
        }
      </ul>

    </main>
  )
}
