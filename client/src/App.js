import { LoginBox } from "./components/LoginBox";

function App() {
  return (
    <div className="flex h-screen bg-sm-background lg:bg-lg-background xl:bg-xl-background bg-cover">
      <section className="xl:flex-1 sm:max-lg:hidden"></section>
      <section className="flex flex-1 justify-center items-center h-screen">
        <LoginBox
          onClick={() => {console.log("Something was clicked...")}}
          testMessage="foo!"
        />
      </section>
    </div>
  );
}

export default App;
