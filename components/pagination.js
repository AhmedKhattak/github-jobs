import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
export function Pagination() {
  return (
    <div className="flex space-x-4">
      <span className="p-2 h-10 w-10 cursor-pointer text-center  bg-gray-200 rounded text-gray-600 hover:bg-gray-300     font-medium">
        <ChevronLeftIcon className="h-6 w-6" />
      </span>
      <span className="p-2 h-10 w-10 cursor-pointer text-center bg-gray-200 rounded text-gray-600  hover:bg-gray-300  font-medium">
        1
      </span>
      <span className="p-2 h-10 w-10 cursor-pointer text-center bg-gray-200 rounded text-gray-600   hover:bg-gray-300   font-medium">
        2
      </span>
      <span className="p-2 h-10 w-10 cursor-pointer text-center  bg-gray-200 rounded text-gray-600 hover:bg-gray-300  font-medium">
        3
      </span>
      {/* on small screens just show 3 buttons */}
      {/* <span className="p-2 h-10 w-10 cursor-pointer text-center  bg-gray-600 rounded text-white   font-medium">
        4
      </span>
      <span className="p-2 h-10 w-10 cursor-pointer text-center  bg-gray-200 rounded text-gray-600 hover:bg-gray-300    font-medium">
        5
      </span> */}
      <span className="p-2 h-10 w-10 cursor-pointer text-center  bg-gray-200 rounded text-gray-600 hover:bg-gray-300   font-medium">
        <ChevronRightIcon className="h-6 w-6" />
      </span>
    </div>
  );
}
