import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err)
  return (
    <div className="">
      <h1>Oops!!!</h1>
      <h1>Something went wrong</h1>
      <h2>{err.status}: Not found</h2>
    </div>
  );
};

export default Error;
