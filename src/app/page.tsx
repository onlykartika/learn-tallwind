import Image from "next/image";

export default function Home() {
  return <div>
    <h1 className="bg-red-100 font-bold p-2 text-base">Hello</h1>
    <h2 className="bg-blue-100 font-bold m-2 text-base">Hi</h2>

    <div className="flex min-h-screen space-x-4">
    <div className="w-1/5  bg-green-100">Sidebar</div>
    <div className="w-4/5  bg-yellow-100">Main content</div>
    </div>
  </div>
}
