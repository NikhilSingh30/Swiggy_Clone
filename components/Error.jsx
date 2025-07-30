import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col items-center text-red-700 font-bold text-xl mt-5">
            <p>{error.data}</p>
            <p>{error.status}</p>
            <p>{error.statusText}</p>
        </div>
    )
}

export default Error;