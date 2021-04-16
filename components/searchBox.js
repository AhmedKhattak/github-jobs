import { SearchIcon } from "@heroicons/react/solid";
import PersonSVG from "../assets/person.svg";
export function SearchBox() {
  return (
    <div className="flex mt-8 items-center justify-center relative">
      <div className="relative container max-w-4xl">
        {/* <img
          className="absolute top-2 left-14"
          src="/images/Person.svg"
          width={100}
          height={200}
        /> */}
        <div className="absolute top-[-50px] left-20">
          <PersonSVG width={100} height={200} />
        </div>

        <div className="p-4 border-purple-200 border-2 relative top-24 bg-white rounded-lg  pt-6 shadow-xl">
          <div className="flex  flex-col md-plus:flex-row  flex-wrap md-plus:flex-nowrap items-start ">
            <div className="w-full md-plus:w-3/6  mr-4 order-1 md-plus:order-none">
              <p className="text-gray-900 mb-2 uppercase tracking-wide text-xs">
                What to Search
              </p>
              <input
                placeholder="React, Node, Java ..."
                className=" appearance-none outline-none transition focus:ring  focus:ring-purple-600 h-11 focus:border-purple-200 p-2 border-solid border-purple-200 border-2 w-full	 rounded  "
                type="text"
              />
              <div className=" flex  flex-row   flex-wrap ">
                <label className="mt-4 transition flex items-center">
                  <span className="mr-3 text-gray-900  text-sm">
                    Full Time Only
                  </span>
                  <input
                    className="w-4 h-4 appearance-none transition rounded-sm text-purple-600 focus:ring-3 focus:ring-purple-400"
                    type="checkbox"
                  />
                </label>
              </div>
            </div>

            <div className="w-full  md-plus:w-3/6 mr-1 mb-2 md-plus:mb-0 order-0 md-plus:order-none">
              <p className="text-gray-900 mb-2 uppercase tracking-wide text-xs">
                Where to Search
              </p>
              <input
                placeholder="Location"
                className="outline-none appearance-none transition focus:border-purple-200  border-purple-200  border-2  focus:ring focus:ring-purple-600 h-11 p-2 border-solid  w-full		 rounded  mr-4"
                type="text"
              />
            </div>

            <div className=" w-full md-plus:w-auto rounded md-plus:rounded-none flex md-plus:block justify-center   mt-4 md-plus:mt-0 order-2 md-plus:order-none">
              <p className="text-gray-300  text hidden md-plus:block">&nbsp;</p>
              <button className="h-11 w-full md-plus:w-auto transition  ml-0 md:ml-2  flex items-center  justify-center text-white bg-purple-800 p-3 px-8 hover:bg-purple-600 rounded-md border-none ">
                <span className="mr-2">Search</span>
                <SearchIcon className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
