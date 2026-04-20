import Link from "next/link";

export default function SlidingWindowBlog() {
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
          Mastering Sliding Window Technique in Python
        </h1>

        <p className="mt-4 text-base leading-7 text-[var(--muted)]">
          A powerful pattern to optimize problems involving subarrays and
          substrings.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">
          What is Sliding Window?
        </h2>
        <p className="mt-3 leading-7 text-[var(--muted)]">
          Sliding window is a technique where we maintain a window (subarray)
          and move it step-by-step instead of recomputing values repeatedly.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">
          Why Use It?
        </h2>
        <ul className="mt-3 list-disc pl-6 leading-7 text-[var(--muted)]">
          <li>Reduces time complexity</li>
          <li>Avoids nested loops</li>
          <li>Efficient for contiguous subarrays</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">
          Fixed Window Example
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-4 text-sm">
  {`def max_sum_subarray(arr, k):
      window_sum = sum(arr[:k])
      max_sum = window_sum
  
      for i in range(k, len(arr)):
          window_sum += arr[i]
          window_sum -= arr[i - k]
          max_sum = max(max_sum, window_sum)
  
      return max_sum`}
        </pre>

        <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">
          Variable Window Example
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-4 text-sm">
  {`def longest_substring(s):
      seen = set()
      left = 0
      max_len = 0
  
      for right in range(len(s)):
          while s[right] in seen:
              seen.remove(s[left])
              left += 1
  
          seen.add(s[right])
          max_len = max(max_len, right - left + 1)
  
      return max_len`}
        </pre>

        <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">
          Common Patterns
        </h2>
        <ul className="mt-3 list-disc pl-6 leading-7 text-[var(--muted)]">
          <li>Fixed window size (k)</li>
          <li>Variable window size</li>
          <li>Substring problems</li>
          <li>Maximum / minimum window</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-[var(--foreground)]">
          When to Use
        </h2>
        <ul className="mt-3 list-disc pl-6 leading-7 text-[var(--muted)]">
          <li>Contiguous subarrays</li>
          <li>Strings and substrings</li>
          <li>Optimization problems</li>
        </ul>
      </article>
    </main>
  );
}
