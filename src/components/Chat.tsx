import Image from 'next/image';
import { Heart, Library, PlusSquare, Search } from "lucide-react";

export function Chat() {
  return (
    <aside className='w-72 bg-zinc-950 p-6'>
      <h3 className='font-semibold text-zinc-200 mb-6 pb-6 border-b border-zinc-800 flex flex-col gap-3'>Chat</h3>
      <nav className='space-y-3'>
        <a href="" className='flex items-center gap-3 p-3 rounded-md text-sm font-semibold text-zinc-200 hover:bg-zinc-900'>
          <Image className='rounded-full object-cover' src='/avatar-1.jpg' width={56} height={56} alt='Foto de perfil do avatar 01' />
          Elon Musk
        </a>
        <a href="" className='flex items-center gap-3 p-3 rounded-md text-sm font-semibold text-zinc-200 hover:bg-zinc-900'>
          <Image className='rounded-full object-cover' src='/avatar-4.jpg' width={56} height={56} alt='Foto de perfil do avatar 01' />
          Tony Stark
        </a>
        <a href="" className='flex items-center gap-3 p-3 rounded-md text-sm font-semibold text-zinc-200 hover:bg-zinc-900'>
          <Image className='rounded-full object-cover' src='/avatar-1.jpg' width={56} height={56} alt='Foto de perfil do avatar 01' />
          Mark Zuckerberg
        </a>
        <a href="" className='flex items-center gap-3 p-3 rounded-md text-sm font-semibold text-zinc-200 hover:bg-zinc-900'>
          <Image className='rounded-full object-cover' src='/avatar-4.jpg' width={56} height={56} alt='Foto de perfil do avatar 01' />
          Steve Jobs
        </a>
      </nav>

    </aside>
  )
}