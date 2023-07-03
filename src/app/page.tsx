import Image from "next/image";

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
          fill
          placeholder="blur"
          blurDataURL="/lowres.webp"
          loading="eager"
          style={{ objectPosition: "bottom", objectFit: "cover" }}
        />
      </div>
      <div className="bg-white rounded-xl p-6 m-12 max-w-md w-full">
        <h1 className="text-2xl mb-3">Nimblefoot Research</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
          quam vulputate dignissim suspendisse in est ante in nibh. Sit amet
          nulla facilisi morbi tempus iaculis urna. Egestas sed sed risus
          pretium. Felis imperdiet proin fermentum leo vel orci. Consequat nisl
          vel pretium lectus quam id leo in. Gravida dictum fusce ut placerat.
          Pellentesque dignissim enim sit amet venenatis. Dolor sit amet
          consectetur adipiscing elit pellentesque habitant morbi. Ipsum
          faucibus vitae aliquet nec ullamcorper sit. Platea dictumst quisque
          sagittis purus sit amet. Scelerisque eu ultrices vitae auctor eu.
        </div>
        <div className="text-gray-400 text-center m-2">✧ ✧ ✧</div>
        <div className="text-center">hihi@nimblefoot.xyz</div>
      </div>
    </main>
  );
}
