import Image from "next/image";
import person from "../../public/FakihAmriAbdullah.png";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="w-full flex-grow">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid grid-cols-12 gap-8 px-4 py-4 lg:py-14">
          <div className="lg:px-8 col-span-7">
            <h1 className="text-5xl lg:text-6xl drop-shadow-md dark:text-slate-200  font-black py-4 tracking-wide text-transparent bg-clip-text loa-gradient-text">
              Sei stanco dei soliti siti tutti uguali?
            </h1>
            <h3 className="text-lg lg:text-2xl font-medium tracking-wide opacity-60 py-4 dark:text-slate-100 dark:opacity-80">
              La maggior parte dei siti web e delle applicazioni{" "}
              <br className="hidden lg:block" /> mobile nel{" "}
              {new Date().getFullYear().toString()} si assomigliano.
            </h3>
            <h2 className="text-xs lg:text-lg font-bold tracking-wide text-slate-600 dark:text-slate-300">
              <span className="text-base lg:text-xl text-transparent bg-clip-text font-black loa-gradient-text">
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
          <div className="hidden lg:block relative mx-auto w-32 h-64 lg:w-[35vw] lg:h-[70vh] col-span-5">
            <Image
              src={person}
              alt="person using laptop"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="lg:hidden relative mx-auto w-[90vw] h-[50vh] col-span-5">
            <Image
              src={person}
              alt="person using laptop"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
