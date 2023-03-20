import FetchData from "./FetchData";

function App() {
  return (
    <div class="flex">
      <section class="xl:flex-1 sm:max-lg:hidden"></section>
      <section class="flex flex-1 justify-center items-center h-screen">
        <div class="bg-gradient-to-r from-base-100/75 flex flex-col p-14 md:max-xl:shadow-xl shadow-max-yel-green-500/50">
          <FetchData />
          <h1 class="my-8 text-8xl font-bold text-dark-slate-gray lg:backdrop-blur-xs">
            Mazel
          </h1>
          <figcaption class="mb-2 text-dark-slate-gray text-lg font-semibold backdrop-blur-xs">
            A place to find, talk about, and save the recipes you love.
          </figcaption>
          <form
            method="GET"
            name=""
            action="/recipe/searchRecipes"
            class="flex items-end mb-5"
          >
            <div class="form-control w-9/12 max-w-xs">
              <label class="label">
                <span class="label-text text-dark-slate-gray text-lg font-semibold">
                  What are you looking for?
                </span>
              </label>
              <input
                type="text"
                class="bg-white placeholder:text-slate-600 text-slate-600 input input-bordered w-full max-w-xs"
                id="searchBar"
              />
            </div>
            <button
              class="text-key-lime btn rounded-r-lg w-5 bg-forest-green border-none hover:bg-yellow-400"
              type="submit"
              id="searchButton"
            >
              GO
            </button>
          </form>
          <div>
            <a
              class="btn btn-outline btn-success lg:max-xl:bg-[#B5CFC8]"
              href="/login"
            >
              Login
            </a>
            <a
              class="btn btn-outline btn-success lg:max-xl:bg-[#B5CFC8]"
              href="/signup"
            >
              Signup
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
