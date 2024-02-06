export function NoteCard() {
  return (
    <button className="rounded-md bg-slate-800 p-5 text-left space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">2 days ago</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quis
        placeat laborum qui distinctio possimus porro quas velit dolore quidem
        dolorem perspiciatis eveniet ut quisquam maiores nostrum facere, itaque
        quo! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quis
        placeat laborum qui distinctio possimus porro quas velit dolore quidem
        dolorem perspiciatis eveniet ut quisquam maiores nostrum facere, itaque
        quo!
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  )
}
