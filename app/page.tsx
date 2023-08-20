"use client"
import Image from 'next/image'
import { Music2 } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main>

      <div className="flex flex-col items-center justify-start min-h-screen h-128 py-2 bg-no-repeat bg-cover bg-bottom bg-[url('assets/landingpage_background.svg')]">
        <div className="absolute z-0">
          <Music2 size={384} color="#fecdd3" strokeWidth={2.25} className="relative top-4 rotate-12" />
          <Music2 size={384} color="#fecdd3" strokeWidth={2.25} className="absolute top-4 rotate-12 blur-md" />
        </div>
        <h1 className="px-5 max-sm:text-4xl sm:text-6xl font-bold mt-10 text-rose-400 text-center z-10">
          An outlet for our<span className="ml-4 pt-3 pb-4 px-4 bg-gradient-to-r from-rose-400 to-red-500 text-white rounded-3xl shadow-lg shadow-rose-200 inline-block transition ease-in-out delay-100 hover:scale-110 duration-300">passion.</span>
        </h1>
        <h1 className="max-md:text-lg md:text-xl font-bold mt-5 text-rose-500 text-center md:mx-48 max-md:mx-20 z-10">
          VIVACE is a high-school musician/a cappella collective based in Lincroft, NJ. We make lives better through music.
        </h1>
      </div>

      <div className="bg-[#a51537] min-h-fit">
        <div className="grid mx-10 gap-8 grid-cols-3 grid-rows-3 max-md:grid-rows-6">

          <div className="outline-dashed outline-4 outline-rose-600 md:col-span-2 max-md:col-span-3 row-span-1 rounded-xl bg-[url('assets/jinglebellrock.png')] bg-cover bg-center shadow-lg shadow-rose-800 transition ease-in-out delay-100 hover:scale-105 duration-300">
            <h1 className="text-transparent p-32">H</h1>
          </div>

          <div className="outline-dashed outline-4 outline-rose-600 md:col-span-1 max-md:col-span-3 md:row-span-2 max-md:row-span-1 bg-[url('assets/me_at_stone_pony.png')] bg-cover bg-center rounded-xl shadow-lg shadow-rose-800 transition ease-in-out delay-100 hover:scale-105 duration-300">
          </div>

          <div className="md:col-span-1 max-md:col-span-3 row-span-1 bg-[url('assets/guitar.svg')] bg-contain bg-center rounded-xl shadow-lg shadow-rose-800 transition ease-in-out delay-100 hover:scale-105 duration-300">
          </div>

          <div className="outline-dashed outline-4 outline-rose-600 md:col-span-1 max-md:col-span-3 md:row-span-2 max-md:row-span-1 bg-[url('assets/sharabh.jpg')] bg-cover bg-center rounded-xl shadow-lg shadow-rose-800 transition ease-in-out delay-100 hover:scale-105 duration-300">
          </div>

          <div className="outline-dashed outline-4 outline-rose-600 md:col-span-1 max-md:col-span-3 row-span-1 bg-[url('assets/sharabh.jpg')] bg-cover bg-center rounded-xl shadow-lg shadow-rose-800 transition ease-in-out delay-100 hover:scale-105 duration-300">
          </div>

          <div className="md:col-span-1 max-md:col-span-3 row-span-1 bg-[url('assets/piano.svg')] bg-contain bg-center rounded-xl shadow-lg shadow-rose-800 transition ease-in-out delay-100 hover:scale-105 duration-300">
          </div>



        </div>
      </div>

      <div className="flex flex-col items-center justify-start min-h-fit py-2 bg-no-repeat bg-cover bg-top bg-[url('assets/landingpage_background_2.svg')] mb-10">
        <h1 className="mt-16 text-white max-sm:text-3xl sm:text-4xl font-bold text-center z-10">
          <span className="pt-3 pb-4 px-4 bg-gradient-to-r from-rose-50 to-red-100 text-rose-500 rounded-3xl shadow-lg shadow-rose-800 inline-block transition ease-in-out delay-100 hover:scale-110 duration-300">Want to learn more?</span>
        </h1>
        <div className="flex flex-row flex-wrap mx-auto gap-8">
          <Link className="mx-auto" href="/about" passHref>
            <div className="mx-auto bg-[url('assets/OIP.jpg')] bg-cover brightness-75 grayscale hover:brightness-100 hover:grayscale-0 rounded-xl shadow-lg shadow-rose-50 transition ease-in-out delay-100 hover:scale-105 duration-300 text-white hover:text-rose-50">
              <h1 className="text-3xl mx-10 my-8 p-20 text-center font-semibold grayscale-0">
                <span className="pt-1 px-2 pb-2 rounded-lg bg-gradient-to-r from-rose-800 to-red-900">About Us</span>
              </h1>
            </div>
          </Link>
          <Link className="mx-auto" href="/shows" passHref>
            <div className="mx-auto bg-[url('assets/R.jpg')] bg-cover brightness-75 grayscale hover:brightness-100 hover:grayscale-0 rounded-xl shadow-lg shadow-rose-50 transition ease-in-out delay-100 hover:scale-105 duration-300 text-white hover:text-rose-50">
              <h1 className="text-3xl mx-10 my-8 p-20 text-center font-semibold grayscale-0">
                <span className="pt-1 px-2 pb-2 rounded-lg bg-gradient-to-r from-rose-800 to-red-900">Shows</span>
              </h1>
            </div>
          </Link>
        </div>
      </div>

    </main>

  )
}
