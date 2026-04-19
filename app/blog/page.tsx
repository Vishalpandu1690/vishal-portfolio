export default function Blog() {
    return (
      <main className="p-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
  
        <ul className="space-y-4">
          <li>
            <a
              href="/blog/two-pointer-technique"
              className="text-blue-600 underline"
            >
              Mastering Two Pointer Technique in Python
            </a>
          </li>
  
          <li>
            <a
              href="/blog/sliding-window-technique"
              className="text-blue-600 underline"
            >
              Mastering Sliding Window Technique in Python
            </a>
          </li>
        </ul>
      </main>
    );
  }