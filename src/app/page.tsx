"use client"
import Feed from "@/components/Feed"

export default function Page() {
  return (
    <>
      <h1 className="text-xl text-neutral-600">Hello, Next.js!</h1>
      <div className="flex ">
        <Feed />
      </div>
    </>
  )
}