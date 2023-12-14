"use client"
import React, { useState } from "react"
import Image from 'next/image'
import { Mic } from 'lucide-react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import Carousel from "@/components/carousel"
import { imageObject } from "@/components/carousel"


export default function Home() {

  return (
    <main>
      <div className="flex flex-col items-center justify-start min-h-screen h-128 py-2 bg-no-repeat bg-cover bg-bottom bg-[url('assets/shows_background.svg')]">
        <div className="absolute z-0">
          <Mic size={400} color="#fecdd3" strokeWidth={2.25} className="relative top-16 rotate-12" />
          <Mic size={400} color="#fecdd3" strokeWidth={2.25} className="absolute top-16 rotate-12 blur-md" />
        </div>
        <h1 className="px-5 max-sm:text-4xl sm:text-6xl font-bold mt-10 text-rose-400 text-center z-10">
          Our <span className="my-3 pt-3 pb-4 px-4 bg-gradient-to-r from-rose-400 to-red-500 text-white rounded-3xl shadow-lg shadow-rose-200 inline-block transition ease-in-out delay-100 hover:scale-110 duration-300">Shows</span>
        </h1>
        <h1 className="max-sm:text-md max-md:text-lg md:text-xl font-bold mt-5 text-rose-500 text-center md:mx-48 max-md:mx-20 z-10">
          View highlights from our many performances together. Click on the names below to see photos and videos!
        </h1>
      </div>

      <div className="bg-[#a51537] min-h-fit">
        {/** I want to have a heading for each concert/performance, followed by a carousel of images and videos. Concerts:
         * Candy Cane Carols, December 2021
         * Candy Cane Carols, December 2022
         * CareOne Holmdel, February 2022
         * Classical Music Night, March 2023
         * Coffeehouse 2023, April 2023
         * Hawkswood School, August 2023
         * CareOne Holmdel, August 2023
         */}

        <div className="bg-[#a51537] min-h-fit">
          <div className="grid mx-10 gap-8 grid-cols-2 grid-rows-4 max-md:grid-rows-8">

            <Link href="https://drive.google.com/file/d/1t0unymNvAvM5HR702QdD44-QomRc1cct/view?usp=sharing" target="_blank" rel="noreferrer" passHref>
            <div className="outline-dashed outline-4 outline-rose-600 md:col-span-1 max-md:col-span-2 row-span-1 rounded-xl bg-cover bg-center shadow-lg shadow-rose-800 transition ease-in-out delay-100 hover:scale-105 duration-300">
            <span className="text-rose-500 p-2 max-sm:text-xl sm:text-2xl font-bold text-center z-10 bg-gradient-to-r from-rose-50 to-red-100 min-w-full rounded-xl shadow-lg shadow-rose-800 inline-block">Candy Cane Carols, December 2021</span>
            </div>
            </Link>

            <Link href="https://drive.google.com/file/d/1KCwFIZ4G6JRBQn85YjzljsFlyDuR3ctN/view?usp=sharing" target="_blank" rel="noreferrer" passHref>
            <div className="outline-dashed outline-4 outline-rose-600 md:col-span-1 max-md:col-span-2 row-span-1 rounded-xl bg-cover bg-center shadow-lg shadow-rose-800 transition ease-in-out delay-100 hover:scale-105 duration-300">
            <span className="text-rose-500 p-2 max-sm:text-xl sm:text-2xl font-bold text-center z-10 bg-gradient-to-r from-rose-50 to-red-100 min-w-full rounded-xl shadow-lg shadow-rose-800 inline-block">Candy Cane Carols, December 2022</span>
            </div>
            </Link>

            <Link href="https://drive.google.com/drive/folders/1SsNYveR8-zQKk-ouFxSE6HG_hh9J7GJH?usp=sharing" target="_blank" rel="noreferrer" passHref>
            <div className="outline-dashed outline-4 outline-rose-600 md:col-span-1 max-md:col-span-2 row-span-1 rounded-xl bg-cover bg-center shadow-lg shadow-rose-800 transition ease-in-out delay-100 hover:scale-105 duration-300">
            <span className="text-rose-500 p-2 max-sm:text-xl sm:text-2xl font-bold text-center z-10 bg-gradient-to-r from-rose-50 to-red-100 min-w-full rounded-xl shadow-lg shadow-rose-800 inline-block">CareOne Holmdel, February 2022</span>
            </div>
            </Link>

            <Link href="/about" target="_blank" rel="noreferrer" passHref>
            <div className="outline-dashed outline-4 outline-rose-600 md:col-span-1 max-md:col-span-2 row-span-1 rounded-xl bg-cover bg-center shadow-lg shadow-rose-800 transition ease-in-out delay-100 hover:scale-105 duration-300">
            <span className="text-rose-500 p-2 max-sm:text-xl sm:text-2xl font-bold text-center z-10 bg-gradient-to-r from-rose-50 to-red-100 min-w-full rounded-xl shadow-lg shadow-rose-800 inline-block">Classical Music Night, March 2023</span>
            </div>
            </Link>

            <Link href="https://drive.google.com/file/d/1ts5CFYqS1N2A0dZ1YKan9-7hsyN-yI27/view?usp=sharing" target="_blank" rel="noreferrer" passHref>
            <div className="outline-dashed outline-4 outline-rose-600 md:col-span-1 max-md:col-span-2 row-span-1 rounded-xl bg-cover bg-center shadow-lg shadow-rose-800 transition ease-in-out delay-100 hover:scale-105 duration-300">
            <span className="text-rose-500 p-2 max-sm:text-xl sm:text-2xl font-bold text-center z-10 bg-gradient-to-r from-rose-50 to-red-100 min-w-full rounded-xl shadow-lg shadow-rose-800 inline-block">Coffeehouse 2023, April 2023</span>
            </div>
            </Link>

            <Link href="https://drive.google.com/drive/folders/1nDG9hYGM_ViZx95DBKtC_uZp6z-y07ox?usp=sharing" target="_blank" rel="noreferrer" passHref>
            <div className="outline-dashed outline-4 outline-rose-600 md:col-span-1 max-md:col-span-2 row-span-1 rounded-xl bg-cover bg-center shadow-lg shadow-rose-800 transition ease-in-out delay-100 hover:scale-105 duration-300">
            <span className="text-rose-500 p-2 max-sm:text-xl sm:text-2xl font-bold text-center z-10 bg-gradient-to-r from-rose-50 to-red-100 min-w-full rounded-xl shadow-lg shadow-rose-800 inline-block">Hawkswood School, August 2023</span>
            </div>
            </Link>

            <Link href="https://drive.google.com/drive/folders/1VYk5QWVfIPhg-dtuMX8Xvaoein6CmduB?usp=sharing" target="_blank" rel="noreferrer" passHref>
            <div className="outline-dashed outline-4 outline-rose-600 md:col-span-1 max-md:col-span-2 row-span-1 rounded-xl bg-cover bg-center shadow-lg shadow-rose-800 transition ease-in-out delay-100 hover:scale-105 duration-300">
            <span className="text-rose-500 p-2 max-sm:text-xl sm:text-2xl font-bold text-center z-10 bg-gradient-to-r from-rose-50 to-red-100 min-w-full rounded-xl shadow-lg shadow-rose-800 inline-block">CareOne Holmdel, August 2023</span>
            </div>
            </Link>

            <Link href="/about" passHref>
            <div className="outline-dashed outline-4 outline-rose-600 md:col-span-1 max-md:col-span-2 row-span-1 rounded-xl bg-cover bg-center shadow-lg shadow-rose-800 transition ease-in-out delay-100 hover:scale-105 duration-300">
            <span className="text-rose-500 p-2 max-sm:text-xl sm:text-2xl font-bold text-center z-10 bg-gradient-to-r from-rose-50 to-red-100 min-w-full rounded-xl shadow-lg shadow-rose-800 inline-block">Candy Cane Carols, December 2023</span>
            </div>
            </Link>

          </div>
        </div>

      </div>

      <div className="pt-20 flex flex-col items-center justify-start pb-2 bg-no-repeat bg-cover bg-top bg-[url('assets/shows_background_2.svg')] mb-10">

        <h1 className="text-white max-sm:text-3xl sm:text-4xl font-bold text-center z-10">
          <span className="pt-3 pb-4 px-4 bg-gradient-to-r from-rose-50 to-red-100 text-rose-500 rounded-3xl shadow-lg shadow-rose-800 inline-block transition ease-in-out delay-100 hover:scale-110 duration-300">Want us to perform for you?</span>
        </h1>

        <div className="mx-6">
          <h1 className="w-fit mx-auto my-6 outline-dashed outline-4 outline-rose-600 text-xl p-4 text-center font-semibold text-rose-500 bg-gradient-to-b from-rose-100 to-red-200 rounded-xl shadow-lg shadow-rose-800 transition ease-in-out delay-100 hover:scale-105 duration-300">We are constantly looking for new opportunities to make an impact on our community and give the gift of music to those who need it most. Contact <strong>sharabho@gmail.com</strong> if you would like VIVACE to perform for you!</h1>
        </div>

      </div>

    </main>

  )
}
