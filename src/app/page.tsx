import Feed from "../components/Feed"

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col w-[100%] items-center justify-center">
        <h1 className="text-xl text-neutral-600">Hello, Next.js!</h1>
        <Feed />
      </div>
    </>
  )
}