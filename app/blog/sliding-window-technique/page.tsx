export default function SlidingWindowBlog() {
    return (
      <main className="p-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Mastering Sliding Window Technique in Python
        </h1>
  
        <p className="text-gray-500 mb-6">
          A powerful pattern to optimize problems involving subarrays and substrings.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">What is Sliding Window?</h2>
        <p className="text-gray-700">
          Sliding window is a technique where we maintain a window (subarray)
          and move it step-by-step instead of recomputing values repeatedly.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Why Use It?</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Reduces time complexity</li>
          <li>Avoids nested loops</li>
          <li>Efficient for contiguous subarrays</li>
        </ul>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Fixed Window Example</h2>
  
        <pre className="bg-gray-100 p-4 rounded mt-4 overflow-x-auto">
  {`def max_sum_subarray(arr, k):
      window_sum = sum(arr[:k])
      max_sum = window_sum
  
      for i in range(k, len(arr)):
          window_sum += arr[i]
          window_sum -= arr[i - k]
          max_sum = max(max_sum, window_sum)
  
      return max_sum`}
        </pre>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Variable Window Example</h2>
  
        <pre className="bg-gray-100 p-4 rounded mt-4 overflow-x-auto">
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
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Common Patterns</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Fixed window size (k)</li>
          <li>Variable window size</li>
          <li>Substring problems</li>
          <li>Maximum / minimum window</li>
        </ul>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">When to Use</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Contiguous subarrays</li>
          <li>Strings and substrings</li>
          <li>Optimization problems</li>
        </ul>
      </main>
    );
  }