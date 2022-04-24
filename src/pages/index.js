import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid grid-cols-3 gap-8 px-4 py-8 lg:py-14">
          <div className="lg:px-8 col-span-2">
            <h1 className="text-5xl lg:text-6xl font-black tracking-wide text-transparent bg-clip-text loa-gradient-text">
              Sei stanco dei soliti template?
            </h1>
            <h3 className="text-xl lg:text-2xl font-medium tracking-wide opacity-60 py-4">
              La maggior parte dei siti web e delle applicazioni{" "}
              <br className="hidden lg:block" /> mobile nel{" "}
              {new Date().getFullYear().toString()} si assomigliano.
            </h3>
            <h2 className="text-lg font-bold tracking-wide text-slate-600">
              <span className="text-xl text-transparent bg-clip-text font-black loa-gradient-text">
                Loa212
              </span>{" "}
              offre sviluppo di siti web & applicazioni mobile,{" "}
              <br className="hidden lg:block" /> completamente su misura.
            </h2>
            <div className="py-8 w-full text-center lg:text-left">
              <button className="btn loa-gradient-navbar border-transparent hover:border-red-500">
                Scopri di più
              </button>
            </div>
          </div>
          <div className="hidden lg:block relative mx-auto w-[90vw] h-[50vh] lg:h-[80vh] lg:w-[30vw]">
            <Image
              src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              alt="logo crea"
              layout="fill"
              objectFit="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
