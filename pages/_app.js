import "tailwindcss/tailwind.css";
import Link from "next/link";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  // setup navbar here
  return (
    <>
      {/* <nav class=""></nav> */}

      <div className=" bg-white min-h-screen ">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
