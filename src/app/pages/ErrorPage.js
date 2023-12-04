import Error from "next/error";

function ErrorPage() {
  return <Error statusCode={404} />;
}

export default ErrorPage;
