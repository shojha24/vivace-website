"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Users2, Mic } from "lucide-react"


import { cn } from "@/lib/utils"

export function Navbar() {
    return (
        <div className="outline outline-rose-100 p-3 flex flex-row flex-wrap justify-between z-10">
            <Link href="/" legacyBehavior passHref>
                <div id="Logo" className="flex cursor-pointer hover:brightness-90 justify-start pl-3">
                    <Image src={require("../app/assets/vivace_logo.svg")} width="25" height="30" alt="IDFK"></Image>
                    <h1 className="text-rose-600 text-4xl mx-2 flex max-md:hidden">|</h1>
                    <Image src={require("../app/assets/vivace_text.svg")} width="150" height="35" alt="IDFK" className="flex max-md:hidden"></Image>
                </div>
            </Link>
            <div id="Buttons" className="flex">
                <Link href="/about" passHref>
                    <Button variant="ghost" className="ml-2 mr-1 text-rose-600 hover:bg-rose-50 hover:text-rose-900 font-semibold"><Users2 className="mr-2" />About Us</Button>
                </Link>
                <Link href="/shows" passHref>
                    <Button variant="ghost" className="mr-2 ml-1 text-rose-600 hover:bg-rose-50 hover:text-rose-900 font-semibold"><Mic className="mr-2" />Shows</Button>
                </Link>
            </div>
        </div>
    )
}
