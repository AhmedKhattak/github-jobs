import { GlobeIcon } from "@heroicons/react/solid";
export function JobCard({ handleOpen }) {
  return (
    <div
      onClick={handleOpen}
      className="bg-white  group   mb-5 cursor-pointer   shadow-sm hover:shadow border-[1px]  border-gray-300 flex  justify-between p-4 rounded"
    >
      <div>
        <p className="text-xl text-gray-800 font-normal mr-1 mb-1 group-hover:underline">
          Humbly Confident Senior Full Stack Developer
        </p>
        <p className="text-gray-400 ">
          You Need A Budget (YNAB) –{" "}
          <span className="text-green-600 font-semibold">Full Time</span>
        </p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-right text-xs text-gray-500 p-1 mb-4 flex">
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
