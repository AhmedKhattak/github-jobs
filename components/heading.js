export function Heading() {
  return (
    <>
      <p
        style={{
          textShadow: "4px 4px 23px rgba(0, 0, 0, 0.18)",
        }}
        className="text-5xl font-bold pt-9 md-plus:pt-16   text-left lg:text-center text-white"
      >
        Search Jobs on Github all over the World !
      </p>
      <p className="text-purple-200  font-medium  mt-4   text-xl text-left lg:text-center">
        This project uses NextJS, Tailwind CSS and is deployed on Vercel. The
        API is from Github Jobs.
      </p>
    </>
  );
}
