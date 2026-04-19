export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10">

      {/* HERO SECTION */}
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-2">
          Vishal Cherupally
        </h1>

        <p className="text-md text-gray-500 mb-2">
          Data Engineer & Problem Solver
        </p>

        <p className="text-lg text-gray-600 mb-6">
          Python | Data Structures | Databricks | System Design <br />
          Building scalable data solutions
        </p>

        {/* NAVIGATION BUTTONS */}
        <div className="flex gap-4 justify-center flex-wrap">
          
          <a
            href="/projects"
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            Projects
          </a>

          <a
            href="/blog"
            className="px-4 py-2 border border-black rounded hover:bg-gray-100 transition"
          >
            Blog
          </a>

          <a
            href="/study"
            className="px-4 py-2 border border-black rounded hover:bg-gray-100 transition"
          >
            Study
          </a>

        </div>
      </section>

    </main>
  );
}