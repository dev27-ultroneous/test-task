import CircularLoader from "../circular-loader";

export default function Loader() {
  return (
      <div className="min-h-screen flex justify-center items-center">
          <CircularLoader
          open={true}
          aria-hidden="true"
          className="inline w-8 h-8 mr-2 animate-spin fill-white text-gray-400"
      /></div>
  )
}
