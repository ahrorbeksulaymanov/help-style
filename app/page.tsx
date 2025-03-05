import GridEditor from "@/components/GridGenerator/GridEditor";
import Intro from "@/components/GridGenerator/Intro";

export default function Home() {
  return (
    <div className="home-page-block">
      <main className="pt-[56px]">
        <Intro />
        <GridEditor />
      </main>
      <div className="pt-14 pb-8">
        <p className="text-center">Made by <a className="underline" target="_blank" href="https://t.me/sulaymanov_a">Ahror</a></p>
      </div>
    </div>
  );
}
