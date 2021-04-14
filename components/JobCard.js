import { GlobeIcon } from "@heroicons/react/solid";
export function JobCard({ handleOpen }) {
  return (
    <div
      onClick={handleOpen}
      className="bg-white  group rounded   mb-5 cursor-pointer   border-[1.7px]   border-gray-200 flex  justify-between p-4 pt-6 pb-6"
    >
      <div>
        <p className="text-lg text-gray-800 font-medium  mr-1 mb-1 group-hover:underline">
          Humbly Confident Senior Full Stack Developer
        </p>
        <p className="text-gray-400 ">
          You Need A Budget (YNAB) –{" "}
          <span className="text-green-600 font-semibold">Full Time</span>
        </p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-right text-xs text-white mb-4 bg-blue-600 rounded p-1  flex">
          <span className="mr-1">
            <GlobeIcon className="h-4 w-4 " />
          </span>
          Remote
        </p>
        <p className="text-right text-xs text-gray-500">about 22 hours ago</p>
      </div>
    </div>
  );
}
