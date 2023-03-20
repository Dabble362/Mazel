import FetchData from "../FetchData"

export function LoginBox(props) {
  return (
    <div className="bg-gradient-to-r from-base-100/75 flex flex-col p-14 md:max-xl:shadow-xl shadow-max-yel-green-500/50">
      <FetchData />
      <h1
        onClick={props.onClick}
        className="my-8 text-8xl font-bold text-dark-slate-gray lg:backdrop-blur-xs">
        {`Mazel ${props.testMessage}`}
      </h1>
      <figcaption className="mb-2 text-dark-slate-gray text-lg font-semibold backdrop-blur-xs">
        A place to find, talk about, and save the recipes you love.
      </figcaption>
      <form
        method="GET"
        name=""
        action="/recipe/searchRecipes"
        className="flex items-end mb-5"
      >
        <div className="form-control w-9/12 max-w-xs">
          <input
            type="text"
            className="bg-white placeholder:text-slate-600 text-slate-600 input input-bordered w-full max-w-xs"
            id="searchBar"
          />
        </div>
        <button
          className="text-key-lime btn rounded-r-lg w-5 bg-forest-green border-none hover:bg-yellow-400"
          type="submit"
          id="searchButton"
        >
          GO
        </button>
      </form>
      <div>
        <a
          className="btn btn-outline btn-success lg:max-xl:bg-[#B5CFC8]"
          href="/login"
        >
          Login
        </a>
        <a
          className="btn btn-outline btn-success lg:max-xl:bg-[#B5CFC8]"
          href="/signup"
        >
          Signup
        </a>
      </div>
    </div>
  )
}
