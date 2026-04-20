import Link from "next/link";

export default function TwoPointerBlog() {
  return (
    <main className="px-6 py-16 sm:px-10">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/blog/category/python-coding"
          className="text-sm font-medium text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
        >
          Python Coding
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Mastering Two Pointer Technique in Python
        </h1>

        <p className="mt-4 text-base leading-7 text-[var(--muted)]">
          A simple and powerful approach to solve array problems efficiently.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">
          What is Two Pointer?
        </h2>
        <p className="mt-3 leading-7 text-[var(--muted)]">
          The two pointer technique uses two indices to iterate over an array,
          usually from opposite ends or at different speeds, to reduce time
          complexity.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">
          Example Problem
        </h2>
        <p className="mt-3 leading-7 text-[var(--muted)]">
          Given a sorted array, find if there exists a pair that sums to a
          target.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-4 text-sm">
  {`def two_sum(arr, target):
      left, right = 0, len(arr) - 1
  
      while left < right:
          curr = arr[left] + arr[right]
  
          if curr == target:
              return True
          elif curr < target:
              left += 1
          else:
              right -= 1
  
      return False`}
        </pre>

        <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">
          Why It Works
        </h2>
        <p className="mt-3 leading-7 text-[var(--muted)]">
          Since the array is sorted, we can intelligently move pointers
          instead of checking all pairs, reducing complexity from O(n²) to O(n).
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">
          When to Use
        </h2>
        <ul className="mt-3 list-disc pl-6 leading-7 text-[var(--muted)]">
          <li>Sorted arrays</li>
          <li>Pair sum problems</li>
          <li>Palindrome checks</li>
        </ul>
      </article>
    </main>
  );
}
