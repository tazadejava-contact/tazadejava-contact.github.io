import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen items-center justify-center">
      <div className="relative w-[30%] pb-16">
        <Image
            className="relative rounded-full w-full h-auto"
            src={"/tazadejava-contact.github.io/icon.png"}
            width={0}
            height={0}
            sizes="100vw"
            alt={"Budget Buddy Image"}
            />
      </div>
      <div className="font-bold text-5xl pb-8 text-center">
        Budget Buddy
      </div>
      <div className="itali text-xl pb-8 text-center">
        Thanks for your support!
      </div>
      <div className="text-xl text-center">
        Questions, comments, help? Please email me at tazadejava@gmail.com
      </div>
    </main>
  );
}
