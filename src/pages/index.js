import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid grid-cols-3 px-4 py-8">
          <h1 className="col-span-2 text-3xl font-medium tracking-wide text-slate-700">
            Coming soon
          </h1>
          <div className="hidden lg:block relative mx-auto h-[80vh] w-[30vw]">
            <Image
              src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              alt="logo crea"
              layout="fill"
              objectFit="scale-down"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
