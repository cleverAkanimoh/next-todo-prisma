import Link from "next/link"

async function createTodo(data: FormData) {
    'use server';
    console.log(data);
    
}

const page = () => {
    return (
        <main className="w-[84%] flex flex-col items-center">
            <header className="w-full flex items-center my-5">
                <h1 className="text-2xl"><span className="font-bold">Create</span> Todos</h1>
            </header>
            
            <form action={createTodo} className="w-full my-5">
                <input
                    type="text"
                    placeholder="enter todo..."
                    className="bg-transparent border border-slate-500 focus-within:border-slate-400 w-full h-12 rounded my-2 px-2"
                />

                <div
                    className="w-full flex items-cnter gap-1 justify-end"
                >
                    <Link className="border rounded p-2 outline-none hover:bg-slate-700 focus:bg-slate-700 capitalize" href='..'>cancel</Link>
                    <button type="submit" className="border rounded p-2 outline-none hover:bg-slate-700 focus:bg-slate-700 capitalize">create</button>
                </div>
            </form>
        </main>
    )
}

export default page