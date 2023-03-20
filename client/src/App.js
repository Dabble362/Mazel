import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="flex h-screen bg-sm-background lg:bg-lg-background xl:bg-xl-background bg-cover">
      <section className="xl:flex-1 sm:max-lg:hidden"></section>
      <section className="flex flex-1 justify-center items-center h-screen">
        <div className="bg-gradient-to-r from-base-100/75 flex flex-col p-14 md:max-xl:shadow-xl shadow-max-yel-green-500/50">
          <Hero />
        </div>
      </section>
    </div>
  );
}

export default App;
