import { FileExclamationPoint } from "lucide-react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)] flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center">
            <FileExclamationPoint
              width={100}
              height={100}
              className="text-red-400"
            />
            <span className="text-red-400 text-xl">Oops!</span> Looks like you
            have lost your way.
          </div>
          <Link
            to={"/"}
            className="p-2 bg-base-200 border shadow rounded-lg hover:cursor-pointer hover:bg-base-100 transition-all ease-out delay-75"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
