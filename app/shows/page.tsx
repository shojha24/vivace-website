import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={150}
        height={150}
      />
      <h1 className="text-6xl font-bold mt-10">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </div>

  )
}
