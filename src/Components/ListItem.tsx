type ListItemProps = {
    id: string
    title: string
    complete: boolean
}

const ListItem = ({ id, title, complete }: ListItemProps) => {
    return (
        <li>
            <input type="checkbox" name={title} id={id} className="cursor-pointer mr-2 peer" />
            
            <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-400">{title}</label>
        </li>
    )
}

export default ListItem