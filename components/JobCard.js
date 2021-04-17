import { GlobeIcon } from "@heroicons/react/solid";
export function JobCard({ handleOpen, index }) {
  const style = () => {
    if (index === 0) {
      return `bg-white  group  shadow-md  rounded-tl-md rounded-tr-md  border  cursor-pointer   border-[1.7px]   border-gray-200 flex  justify-between p-4 pt-6 pb-6`;
    } else if (index === 9) {
      return `bg-white  group  shadow-md mb-5  rounded-bl-md rounded-br-md  border  cursor-pointer   border-[1.7px]   border-gray-200 flex  justify-between p-4 pt-6 pb-6`;
    } else {
      return `bg-white  group  shadow-md  border  cursor-pointer   border-[1.7px]   border-gray-200 flex  justify-between p-4 pt-6 pb-6`;
    }
  };
  return (
    <div onClick={handleOpen} className={style()}>
      <div>
        <p className="text-lg text-purple-900 font-medium  mr-1 mb-1 group-hover:underline">
          Humbly Confident Senior Full Stack Developer
        </p>
        <p className="text-gray-400 ">
          You Need A Budget (YNAB) –{" "}
          <span className="text-green-600 font-semibold">Full Time</span>
        </p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-right text-xs text-gray-500 mb-4 rounded p-1  flex">
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
