import { Heart, HomeIcon, Library, PlusSquare, Search, ExternalLink } from "lucide-react";

export function Sidebar() {
  return (
    <aside className='w-72 bg-zinc-950 p-6'>
      <nav className='space-y-5'>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <HomeIcon />
          Home
        </a>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <Search />
          Search
        </a>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <Library />
          Your Library
        </a>

        <div className='space-y-5 pt-6'>
          <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
            <PlusSquare />
            Create Playlist
          </a>
          <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
            <Heart />
            Liked Songs
          </a>
        </div>
      </nav>

      <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Nirvana</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Skrillex</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Pearl Jam</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Matuê</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Gorillaz</a>
      </nav>

      <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
        <a href='https://github.com/kelvin401/spotify-tailwind' target="_blank" className="flex gap-2 items-center justify-center text-sm text-zinc-400 hover:text-zinc-100">
          View on Github
          <ExternalLink size={16} />
        </a>
      </nav>
    </aside>
  )
}