import Image from "next/legacy/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div /** background */
        className="-z-50 w-full h-full fixed" //averaged color of bg image
        style={{ backgroundColor: "#47565a" }}
      >
        <Image
          src="/output2.webp"
          alt=""
          layout="fill"
          placeholder="blur"
          blurDataURL="/lowres.webp"
          priority
          objectFit="cover"
          objectPosition="bottom"
          style={{ objectPosition: "bottom", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-xl p-8 m-12">
        <h1 className="text-3xl mb-4">Nimblefoot Research</h1>
        <div className="whitespace-nowrap text-xl">
          <div>
            we are a small and friendly research, trading and software group.
          </div>
          <div>we specialize in:</div>
          <ul>
            <li>- building defi, with great agility</li>
            <li>- deploying medium/low-capacity trading opportunities</li>
            <li>- staying nimble and adapting fast</li>
          </ul>
          <div>
            our primary interest is Solana due to its exciting ecosystem and
            architecture. Fastest chain is best chain.
          </div>
        </div>

        <div className="text-gray-400 text-center m-4 text-xl">✧ ✧ ✧</div>
          <div>
            what should we stick our noses into next? let us know:{" "}
            <b>hihi@nimblefoot.xyz</b>
          </div>

        <div></div>
      </div>
    </main>
  );
}
