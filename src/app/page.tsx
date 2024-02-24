import Image from "next/image";

export default function Home() {
  return (
  <div className="Parent">
    <div>Header</div>
    <div className="flex flex-col md:flex-row">
    <div className="md:w-32 bg-blue-100">Main Content</div>
    <div className="w-full bg-yellow-100">Sidebar</div>
    </div>
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-wrap w-full">
        <div className="w-32 grow">01</div>
        <div className="w-32 grow">02</div>
        <div className="w-32 grow">03</div>
        <div className="w-32 grow">04</div>
        <div className="w-32 grow">05</div>
      </div>
      <div className="flex justify-center">
        <div>Sidebar</div>
        <div>Main content</div>
      </div>
      <div className="flex justify-end">
        <div>Sidebar</div>
        <div>Main content</div>
      </div>
      <div className="flex justify-between">
        <div className="bg-red-100">Sidebar</div>
        <div className="bg-green-100">Main content</div>
      </div>
    </div>
  </div>
  )
}
