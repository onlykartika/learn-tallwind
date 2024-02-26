import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen text-white Parent bg-slate-900">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-lg bg-sky-500">First Color</div>
          <div className="p-6 rounded-lg row-span-2 bg-sky-500">First Color</div>
          <div className="col-span-2 p-6 rounded-lg bg-sky-500">First Color</div>
          <div className="p-6 rounded-lg bg-sky-500">First Color</div>
        </div>
        <div className="m-12"></div>
        <div className="grid grid-flow-col grid-rows-2 gap-4">
          <div className="p-6 rounded-lg bg-sky-500">1</div>
          <div className="p-6 rounded-lg bg-sky-500">2</div>
          <div className="p-6 rounded-lg bg-sky-500">3</div>
          <div className="p-6 rounded-lg bg-sky-500">4</div>
          <div className="p-6 rounded-lg bg-sky-500">5</div>
          <div className="p-6 rounded-lg bg-sky-500">6</div>
        </div>
        <div className="m-12"></div>
        <div className="grid grid-flow-row grid-cols-3 grid-rows-3 gap-4">
          <div className="col-span-2 p-6 rounded-lg bg-sky-500">1</div>
          <div className="p-6 rounded-lg bg-sky-500">2</div>
          <div className="p-6 rounded-lg bg-sky-500">3</div>
          <div className="p-6 rounded-lg bg-sky-500">4</div>
          <div className="p-6 rounded-lg bg-sky-500">5</div>
          <div className="p-6 rounded-lg bg-sky-500">6</div>
        </div>
      </div>
    </div>
  )
}
