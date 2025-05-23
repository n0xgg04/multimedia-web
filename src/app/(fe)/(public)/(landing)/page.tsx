import FirstPage from "./components/FirstPage";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageFour from "./components/PageFour";

export default function Home() {
  return (
    <>
      <FirstPage className="h-screen snap-start" />
      <PageTwo className="h-screen snap-start" />
      <PageThree className="h-screen snap-start" />
      <PageFour className="h-screen snap-start" />
    </>
  );
}
