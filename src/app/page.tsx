import Image from 'next/image';
import { Home as HomeIcon, Search, Library, PlusSquare, Heart, ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
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
        </aside>
        <main className='flex-1 p-6'>
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt='capa do album do Skrillex' />
              <strong>Bangarang</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt='capa do album do Skrillex' />
              <strong>Bangarang</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt='capa do album do Skrillex' />
              <strong>Bangarang</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt='capa do album do Skrillex' />
              <strong>Bangarang</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt='capa do album do Skrillex' />
              <strong>Bangarang</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt='capa do album do Skrillex' />
              <strong>Bangarang</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Sony Moore</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/album.jpg' className='w-full' width={120} height={120} alt='capa do album do Skrillex' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-xs text-zinc-500'>Twenty One Pilots, MGK, Charlie Brow JR. and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/album.jpg' className='w-full' width={120} height={120} alt='capa do album do Skrillex' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-xs text-zinc-500'>Twenty One Pilots, MGK, Charlie Brow JR. and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/album.jpg' className='w-full' width={120} height={120} alt='capa do album do Skrillex' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-xs text-zinc-500'>Twenty One Pilots, MGK, Charlie Brow JR. and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/album.jpg' className='w-full' width={120} height={120} alt='capa do album do Skrillex' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-xs text-zinc-500'>Twenty One Pilots, MGK, Charlie Brow JR. and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/album.jpg' className='w-full' width={120} height={120} alt='capa do album do Skrillex' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-xs text-zinc-500'>Twenty One Pilots, MGK, Charlie Brow JR. and more</span>
            </a>
          </div>
        </main>
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-bettween'>
        <div className='flex items-center gap-2'>
          <Image src='/album.jpg' className='w-full' width={56} height={56} alt='capa do album do Skrillex' />
          <div className='flex items-flex flex-col gap-3'>
            <strong className='font-normal'>Bangarang</strong>
            <span className='text-xs text-zinc-400'>Skrillex</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
