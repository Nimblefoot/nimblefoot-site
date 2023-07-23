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
      <div className="bg-white rounded-xl p-6 m-12">
        <h1 className="text-3xl mb-4">Nimblefoot Research</h1>
        <div className="whitespace-nowrap text-lg">
          <div>
            hihi. we are a small and mighty research and software group.
          </div>
          <div>we specialize in:</div>
          <ul>
            <li>- building defi, with great agility</li>
            <li>- deploying medium/low-capacity trading opportunities</li>
            <li>- friendship and love</li>
          </ul>
          <div>
            our primary interest is Solana due to its exciting ecosystem and
            architecture.
          </div>
        </div>

        <div className="text-gray-400 text-center m-3 text-lg">✧ ✧ ✧</div>
        <div>
          what should we stick our noses into next? let us know:{" "}
          <b>hihi@nimblefoot.xyz</b>
        </div>

        <div></div>
      </div>
    </main>
  );
}
