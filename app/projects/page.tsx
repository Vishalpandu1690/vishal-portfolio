export default function Projects() {
    return (
      <main className="p-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
  
        <div className="space-y-6">
  
          <div className="p-4 border rounded">
            <h2 className="text-xl font-semibold">
              Hive to Unity Catalog Migration
            </h2>
            <p className="text-gray-600">
              Automated migration using Python and LibCST to update large codebases.
            </p>
          </div>
  
          <div className="p-4 border rounded">
            <h2 className="text-xl font-semibold">
              S3 Access Log Optimization
            </h2>
            <p className="text-gray-600">
              Optimized PySpark jobs to reduce runtime and cost.
            </p>
          </div>
  
        </div>
      </main>
    );
  }