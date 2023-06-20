import { Noto_Sans } from "next/font/google";

const noto = Noto_Sans({ subsets: ["latin"], weight: ["500"] });

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="bg-white px-8 py-9 w-96 rounded-xl text-center shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
        <h2 className="pb-5 text-lg leading-[17px]">Upload your image</h2>
        <p className="text-[#828282] text-[10px] leading-[15px] pb-8">
          File should be Jpeg, Png,...
        </p>
        <div className="bg-[#F6F8FB] rounded-xl border-dashed border-[1px] border-[#97BEF4] mb-5 w-80">
          <p className="text-[12px] text-[#BDBDBD] pb-10">
            <img src="image.svg" alt="image" className="mx-auto pt-9 pb-10" />
            Drag & Drop your image here
          </p>
        </div>
        <p className="text-[#BDBDBD] text-[12px] pb-5">Or</p>
        <button
          className={
            `bg-[#2F80ED] rounded-lg px-4 py-2 text-white text-[12px] ` +
            noto.className
          }
        >
          Choose a file
        </button>
      </div>
    </main>
  );
}
