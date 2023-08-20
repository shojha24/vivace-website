"use client"
import Image from 'next/image'
import { Lightbulb } from 'lucide-react'
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


export default function Home() {
  return (
    <main>

      <div className="flex flex-col items-center justify-start min-h-screen h-128 py-2 bg-no-repeat bg-cover bg-bottom bg-[url('assets/aboutus_background.svg')]">
        <div className="absolute z-0">
          <Lightbulb size={384} color="#fecdd3" strokeWidth={2.25} className="relative top-4 rotate-45" />
          <Lightbulb size={384} color="#fecdd3" strokeWidth={2.25} className="absolute top-4 rotate-45 blur-md" />
        </div>
        <h1 className="px-5 max-sm:text-4xl sm:text-6xl font-bold mt-10 text-rose-400 text-center z-10">
          About Our <span className="pt-3 pb-4 px-4 bg-gradient-to-r from-rose-400 to-red-500 text-white rounded-3xl shadow-lg shadow-rose-200 inline-block transition ease-in-out delay-100 hover:scale-110 duration-300">Team</span>
        </h1>
        <h1 className="max-md:text-lg md:text-xl font-bold mt-5 text-rose-500 text-center md:mx-48 max-md:mx-20 z-10">
          Who we are, how we started, and what we&apos;ve done.
        </h1>
      </div>
      <div className="bg-[#a51537] min-h-fit">
        <h1 className="text-white max-sm:text-3xl sm:text-4xl font-bold text-center z-10">
          <span className="pt-3 pb-4 px-4 bg-gradient-to-r from-rose-50 to-red-100 text-rose-500 rounded-3xl shadow-lg shadow-rose-800 inline-block transition ease-in-out delay-100 hover:scale-110 duration-300">Who are we?</span>
        </h1>
        <h1 className="outline-dashed outline-4 outline-rose-600 text-xl mx-10 mt-6 mb-24 p-4 text-center font-semibold text-rose-500 bg-gradient-to-b from-rose-100 to-red-200 rounded-xl shadow-lg shadow-rose-800 transition ease-in-out delay-100 hover:scale-105 duration-300">
          We are a group of <strong>high schoolers</strong> from across magnet schools in Monmouth County, NJ. For a lot of us, the schools we attend do not have dedicated music programs, which means that we have no choice but to pursue our interests outside of school. <strong>Sharabh Ojha</strong> founded this group as &quot;TECHappella&quot; in order to share our passion for singing. We started out as an a cappella group performing at our school, but have since focused our efforts towards all forms of music and <strong>community service</strong>, such as performing at retirement homes and special education programs. This website is dedicated to cataloguing our journey performing both as a group and as individuals, paving our own path for artistic expression and growth.
        </h1>
        <h1 className="text-white max-sm:text-3xl sm:text-4xl font-bold text-center z-10">
          <span className="pt-3 pb-4 px-4 bg-gradient-to-r from-rose-50 to-red-100 text-rose-500 rounded-3xl shadow-lg shadow-rose-800 inline-block transition ease-in-out delay-100 hover:scale-110 duration-300">Our Team</span>
        </h1>
          <div className="flex flex-row flex-wrap justify-center mx-6 mt-6 pb-24 gap-6">

            <Card className="max-w-[375px] bg-gradient-to-r from-rose-50 to-red-100 transition ease-in-out delay-100 hover:scale-105 duration-300 rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-rose-700">Sharabh Ojha</CardTitle>
                <CardDescription className="text-rose-800">Founder, Director, Website Developer, and <strong>Tenor/Baritone</strong></CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={require("../assets/sharabh.jpg")} width="350" height="350" alt="IDFK" className="rounded-xl shadow-lg"></Image>
              </CardContent>
              <CardFooter className="flex justify-between">
                <h1 className="text-rose-700">Sharabh is a student at High Technology High School. In his free time, he likes to sing, code, and teach.</h1>
              </CardFooter>
            </Card>
            <Card className="max-w-[375px] bg-gradient-to-r from-rose-50 to-red-100 transition ease-in-out delay-100 hover:scale-105 duration-300 rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-rose-700">Xhaiden D&apos;Souza</CardTitle>
                <CardDescription className="text-rose-800">Arrangement Director, Beatboxing Hopeful, and <strong>Tenor/Alto</strong></CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={require("../assets/sharabh.jpg")} width="350" height="350" alt="IDFK" className="rounded-xl shadow-lg"></Image>
              </CardContent>
              <CardFooter className="flex justify-between">
                <h1 className="text-rose-700">Xhaiden loves ice cream, long walks on the beach, and dogs.</h1>
              </CardFooter>
            </Card>
            <Card className="max-w-[375px] bg-gradient-to-r from-rose-50 to-red-100 transition ease-in-out delay-100 hover:scale-105 duration-300 rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-rose-700">Bernice Zhao</CardTitle>
                <CardDescription className="text-rose-800">Co-Vocal Director and <strong>Alto/Soprano</strong></CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={require("../assets/sharabh.jpg")} width="350" height="350" alt="IDFK" className="rounded-xl shadow-lg"></Image>
              </CardContent>
              <CardFooter className="flex justify-between">
                <h1 className="text-rose-700">Bernice loves ice cream, long walks on the beach, and dogs.</h1>
              </CardFooter>
            </Card>
            <Card className="max-w-[375px] bg-gradient-to-r from-rose-50 to-red-100 transition ease-in-out delay-100 hover:scale-105 duration-300 rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-rose-700">Keith Miquela</CardTitle>
                <CardDescription className="text-rose-800">Co-Vocal Director and <strong>Bass/Baritone</strong></CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={require("../assets/sharabh.jpg")} width="350" height="350" alt="IDFK" className="rounded-xl shadow-lg"></Image>
              </CardContent>
              <CardFooter className="flex justify-between">
                <h1 className="text-rose-700">Keith loves ice cream, long walks on the beach, and dogs.</h1>
              </CardFooter>
            </Card>
            <Card className="max-w-[375px] bg-gradient-to-r from-rose-50 to-red-100 transition ease-in-out delay-100 hover:scale-105 duration-300 rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-rose-700">Arhan Nagavelli</CardTitle>
                <CardDescription className="text-rose-800">Guitarist and <strong>Tenor/Baritone</strong></CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={require("../assets/sharabh.jpg")} width="350" height="350" alt="IDFK" className="rounded-xl shadow-lg"></Image>
              </CardContent>
              <CardFooter className="flex justify-between">
                <h1 className="text-rose-700">Arhan loves ice cream, long walks on the beach, and dogs.</h1>
              </CardFooter>
            </Card>
            <Card className="max-w-[375px] bg-gradient-to-r from-rose-50 to-red-100 transition ease-in-out delay-100 hover:scale-105 duration-300 rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-rose-700">Alex Wang</CardTitle>
                <CardDescription className="text-rose-800"><strong>Baritone</strong></CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={require("../assets/sharabh.jpg")} width="350" height="350" alt="IDFK" className="rounded-xl shadow-lg"></Image>
              </CardContent>
              <CardFooter className="flex justify-between">
                <h1 className="text-rose-700">Alex loves ice cream, long walks on the beach, and dogs.</h1>
              </CardFooter>
            </Card>
            <Card className="max-w-[375px] bg-gradient-to-r from-rose-50 to-red-100 transition ease-in-out delay-100 hover:scale-105 duration-300 rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-rose-700">Ishaan Akula</CardTitle>
                <CardDescription className="text-rose-800"><strong>Tenor/Baritone</strong></CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={require("../assets/sharabh.jpg")} width="350" height="350" alt="IDFK" className="rounded-xl shadow-lg"></Image>
              </CardContent>
              <CardFooter className="flex justify-between">
                <h1 className="text-rose-700">Ishaan loves ice cream, long walks on the beach, and dogs.</h1>
              </CardFooter>
            </Card>
            <Card className="max-w-[375px] bg-gradient-to-r from-rose-50 to-red-100 transition ease-in-out delay-100 hover:scale-105 duration-300 rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-rose-700">Lauren Fleming</CardTitle>
                <CardDescription className="text-rose-800"><strong>Alto</strong></CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={require("../assets/sharabh.jpg")} width="350" height="350" alt="IDFK" className="rounded-xl shadow-lg"></Image>
              </CardContent>
              <CardFooter className="flex justify-between">
                <h1 className="text-rose-700">Lauren loves ice cream, long walks on the beach, and dogs.</h1>
              </CardFooter>
            </Card>
            <Card className="max-w-[375px] bg-gradient-to-r from-rose-50 to-red-100 transition ease-in-out delay-100 hover:scale-105 duration-300 rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-rose-700">Svaramya Ojha</CardTitle>
                <CardDescription className="text-rose-800"><strong>Tenor/Alto</strong></CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={require("../assets/atharav.png")} width="350" height="350" alt="IDFK" className="rounded-xl shadow-lg"></Image>
              </CardContent>
              <CardFooter className="flex justify-between">
                <h1 className="text-rose-700">Svaramya is a student at Marlboro Memorial Middle School. In his free time, he likes to play video games and post on his YouTube channel</h1>
              </CardFooter>
            </Card>
        </div>

      </div>

      <div className="flex flex-col items-center justify-start min-h-fit py-2 bg-no-repeat bg-cover bg-top bg-[url('assets/aboutus_background_2.svg')] mb-10">
      <h1 className="text-white max-sm:text-3xl sm:text-4xl font-bold text-center z-10">
          <span className="pt-3 pb-4 px-4 bg-gradient-to-r from-rose-50 to-red-100 text-rose-500 rounded-3xl shadow-lg shadow-rose-800 inline-block transition ease-in-out delay-100 hover:scale-110 duration-300">Where we&apos;ve been</span>
        </h1>
        <h1 className="w-fit mx-auto my-6 outline-dashed outline-4 outline-rose-600 text-xl p-4 text-center font-semibold text-rose-500 bg-gradient-to-b from-rose-100 to-red-200 rounded-xl shadow-lg shadow-rose-800 transition ease-in-out delay-100 hover:scale-105 duration-300">As a group or ensemble, we&apos;ve performed at:</h1>

        <div className="flex flex-row flex-wrap justify-center mx-6 mt-6 mb-6 gap-6">
          <div className="max-w-[375px] shadow-lg shadow-rose-200">
            <Image src={require("../assets/hths_logo.png")} alt="aeiou" width="300" height="300" className="outline-dashed outline-4 outline-rose-600 rounded-xl shadow-lg transition ease-in-out delay-100 hover:scale-105"></Image>
          </div>
          <div className="max-w-[375px] shadow-lg shadow-rose-200">
            <Image src={require("../assets/hawkswood_logo.png")} alt="aeiou" width="300" height="300" className="outline-dashed outline-4 outline-rose-600 rounded-xl shadow-lg transition ease-in-out delay-100 hover:scale-105"></Image>
          </div>
          <div className="max-w-[375px] shadow-lg shadow-rose-200">
            <Image src={require("../assets/careone_logo.png")} alt="aeiou" width="300" height="300" className="outline-dashed outline-4 outline-rose-600 rounded-xl shadow-lg transition ease-in-out delay-100 hover:scale-105"></Image>
          </div>
        </div>

        <h1 className="w-fit mx-auto my-6 outline-dashed outline-4 outline-rose-600 text-xl p-4 text-center font-semibold text-rose-500 bg-gradient-to-b from-rose-100 to-red-200 rounded-xl shadow-lg shadow-rose-200 transition ease-in-out delay-100 hover:scale-105 duration-300">Individually, we&apos;ve performed at:</h1>

        <div className="flex flex-row flex-wrap justify-center mx-6 mt-6 pb-20 gap-6">
          <div className="max-w-[500px] shadow-lg shadow-rose-200">
            <Image src={require("../assets/stonepony_logo.png")} alt="aeiou" width="300" height="300" className="outline-dashed outline-4 outline-rose-600 rounded-xl shadow-lg transition ease-in-out delay-100 hover:scale-105"></Image>
          </div>
          <div className="max-w-[500px] shadow-lg shadow-rose-200">
            <Image src={require("../assets/bitterend_logo.png")} alt="aeiou" width="300" height="300" className="outline-dashed outline-4 outline-rose-600 rounded-xl shadow-lg transition ease-in-out delay-100 hover:scale-105"></Image>
          </div>
        </div>

      </div>

    </main>

  )
}
