import "tailwindcss/tailwind.css";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Github Jobs - NextJs"
        description="Search Jobs on Github all over the World !. This project uses NextJS, Tailwind CSS and is deployed on Vercel. The API is from Github Jobs."
        canonical="https://github-jobs-ahmedkhattak.vercel.app/"
        openGraph={{
          url: "https://github-jobs-ahmedkhattak.vercel.app/",
          title: "Github Jobs",
          type: "content",
          description:
            "Search Jobs on Github all over the World !. This project uses NextJS, Tailwind CSS and is deployed on Vercel. The API is from Github Jobs.",
          images: [
            {
              url: `https://github-jobs-ahmedkhattak.vercel.app/site-img.png`,
              width: 800,
              height: 600,
              alt: "Github jobs site image",
            },
          ],
          site_name: "Github Jobs",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className=" bg-[#F9FAFB] min-h-screen ">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
