import Image from 'next/image';
import { Home as HomeIcon, AlertCircleIcon, Search, Library, PlusSquare, Heart, ChevronLeft, ChevronRight, Play, Repeat, SkipForward, Shuffle, SkipBack, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>

        <Sidebar />

        <main className='flex-1 p-6'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronLeft />
              </button>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronRight />
              </button>
            </div>

            <div className='flex items-center justify-center '>
              <span className='flex items-center gap-4 p-2 text-xs rounded-full text-zinc-900 font-semibold border-solid border-1 bg-yellow-300'>
                <AlertCircleIcon />
                Ambiente de desenvolvimento
              </span>
            </div>
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

          <h2 className='font-semibold text-2xl mt-10'>Made for Kelvin Carvalho</h2>

          <div className='grid grid-cols-5 gap-4 mt-4'>
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

      <Footer />

    </div>
  )
}
