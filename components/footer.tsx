"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, ArrowUp, Instagram, Youtube, Twitter } from "lucide-react"


import { cn } from "@/lib/utils"

export function Footer() {
    return (
        <div className="w-screen grid grid-cols-2 grid-rows-1 max-md:grid-rows-2 border border-rose-100">
            {/** I want to have one section dedicated to a description, like "Made with ❤ by Sharabh Ojha." That same section should also have a contact us button and a go back to the top button
             * the second section should have the names of the people in our team: Sharabh Ojha, Xhaiden D'Souza, Bernice Zhao, Keith Miquela, Alex Wang, Arhan Nagavelli, Ishaan Akula, and Lauren Fleming
             * The third section should just say (c) 2023 VIVACEmusic
             * The last section should be icons that are links to social media, i.e. instagram and youtube.
            */}
            <div className="px-5 pt-5 col-span-1 max-md:col-span-2">
                <h1 className="text-rose-600 max-sm:text-xl sm:text-2xl mb-2 font-bold z-10">
                    Made with ❤ by Sharabh Ojha.
                </h1>
                <div className="pb-2 pt-8 max-md:pt-2">
                    <Link href="/about" passHref>
                        <Button variant="outline" className="mr-3 text-rose-600 hover:bg-rose-50 hover:text-rose-900 font-semibold"><Mail className="mr-2" />Contact Us</Button>
                    </Link>
                    <Link href="#" passHref>
                        <Button variant="outline" className="mr-1 text-rose-600 hover:bg-rose-50 hover:text-rose-900 font-semibold"><ArrowUp className="mr-2" />Back to the top!</Button>
                    </Link>
                </div>
                <Button variant="outline" className="mr-3 text-rose-600 hover:bg-rose-50 hover:text-rose-900 font-semibold"><Instagram className="" /></Button>
                <Button variant="outline" className="mr-3 text-rose-600 hover:bg-rose-50 hover:text-rose-900 font-semibold"><Youtube className="" /></Button>
                <Button variant="outline" className="mr-3 text-rose-600 hover:bg-rose-50 hover:text-rose-900 font-semibold"><Twitter className="" /></Button>
            </div>
            <div className="px-5 md:pt-5 max-md:pt-1 pb-2 col-span-1 max-md:col-span-2 text-right max-md:text-left">
                <h1 className="text-rose-600 max-sm:text-md sm:text-lg mb-2 font-bold z-10">
                    Pages
                </h1>
                <h3 className="text-rose-600">
                    <Link className="max-md:pr-2 md:pl-2 hover:text-rose-900 hover:underline" href="/" passHref>Home</Link>
                    <Link className="max-md:pr-2 md:pl-2 hover:text-rose-900 hover:underline" href="/about" passHref>About Us</Link>
                    <Link className="max-md:pr-2 md:pl-2 hover:text-rose-900 hover:underline" href="/shows" passHref>Shows</Link>
                </h3>
                <div className="max-md:pt-2 md:pt-4 pb-5">
                    <h1 className="text-rose-600 max-sm:text-md sm:text-lg mb-2 font-bold z-10">
                        Team
                    </h1>
                    <h3 className="text-rose-600">
                        <Link className="max-md:pr-2 md:pl-2 inline-block hover:text-rose-900 hover:underline" href="https://www.youtube.com/@sharabhojha7895" passHref>Sharabh Ojha</Link>
                        <Link className="max-md:pr-2 md:pl-2 inline-block hover:text-rose-900 hover:underline" href="https://www.youtube.com/@xhaidendsouza7380" passHref>Xhaiden D'Souza</Link>
                        <Link className="max-md:pr-2 md:pl-2 inline-block hover:text-rose-900 hover:underline" href="https://www.instagram.com/bernicez21/" passHref>Bernice Zhao</Link>
                        <Link className="max-md:pr-2 md:pl-2 inline-block hover:text-rose-900 hover:underline" href="https://www.instagram.com/keithmiquela/" passHref>Keith Miquela</Link>
                        <Link className="max-md:pr-2 md:pl-2 inline-block hover:text-rose-900 hover:underline" href="https://www.instagram.com/alexwangg_/" passHref>Alex Wang</Link>
                        <Link className="max-md:pr-2 md:pl-2 inline-block hover:text-rose-900 hover:underline" href="https://www.instagram.com/arhannagavelli_/" passHref>Arhan Nagavelli</Link>
                        <Link className="max-md:pr-2 md:pl-2 inline-block hover:text-rose-900 hover:underline" href="https://www.instagram.com/ishy_aku/" passHref>Ishaan Akula</Link>
                        <Link className="max-md:pr-2 md:pl-2 inline-block hover:text-rose-900 hover:underline" href="https://www.instagram.com/laur.enjoy/" passHref>Lauren Fleming</Link>
                    </h3>
                </div>
            </div>
        </div>
    )
}