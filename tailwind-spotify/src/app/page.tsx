import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button>
              <ChevronLeft className="w-8 h-8 rounded-full bg-black/40 p-1" />
            </button>
            <button>
              <ChevronRight className="w-8 h-8 rounded-full bg-black/40 p-1" />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Bom dia papai</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors group">
              <Image src="/album.jpg" width={104} height={104}  alt="Capa do Album" />
              <strong>Amianto</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 opacity-0 transition-all duration-500 ease-in group-hover:opacity-100">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors group">
              <Image src="/album.jpg" width={104} height={104}  alt="Capa do Album" />
              <strong>Amianto</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 opacity-0 transition-all duration-500 ease-in group-hover:opacity-100">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors group">
              <Image src="/album.jpg" width={104} height={104}  alt="Capa do Album" />
              <strong>Amianto</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 opacity-0 transition-all duration-500 ease-in group-hover:opacity-100">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors group">
              <Image src="/album.jpg" width={104} height={104}  alt="Capa do Album" />
              <strong>Amianto</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 opacity-0 transition-all duration-500 ease-in group-hover:opacity-100">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors group">
              <Image src="/album.jpg" width={104} height={104}  alt="Capa do Album" />
              <strong>Amianto</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 opacity-0 transition-all duration-500 ease-in group-hover:opacity-100">
                <Play />
              </button>
            </a>
            <a href="" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors group">
              <Image src="/album.jpg" width={104} height={104}  alt="Capa do Album" />
              <strong>Amianto</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 opacity-0 transition-all duration-500 ease-in group-hover:opacity-100">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Feito para Rodriguin do Grau</h2>

          <div className='grid grid-cols-8 gap-4 mt-6'>
              <a href='#' className='bg-white/5 p-3 rounded-md overflow-hidden flex flex-col gap-2 hover:bg-white/10 transition-colors'>
                <Image src="/album.jpg" className='w-full' width={104} height={104} alt="Capa do álbum"/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-md overflow-hidden flex flex-col gap-2 hover:bg-white/10 transition-colors'>
                <Image src="/album.jpg" className='w-full' width={104} height={104} alt="Capa do álbum"/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-md overflow-hidden flex flex-col gap-2 hover:bg-white/10 transition-colors'>
                <Image src="/album.jpg" className='w-full' width={104} height={104} alt="Capa do álbum"/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-md overflow-hidden flex flex-col gap-2 hover:bg-white/10 transition-colors'>
                <Image src="/album.jpg" className='w-full' width={104} height={104} alt="Capa do álbum"/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-md overflow-hidden flex flex-col gap-2 hover:bg-white/10 transition-colors'>
                <Image src="/album.jpg" className='w-full' width={104} height={104} alt="Capa do álbum"/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
              </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
