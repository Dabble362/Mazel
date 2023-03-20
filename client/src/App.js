import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="flex h-screen bg-sm-background lg:bg-lg-background xl:bg-xl-background bg-cover">
      <section className="xl:flex-1 sm:max-lg:hidden"></section>
      <Hero />
    </div>
  );
}

export default App;
