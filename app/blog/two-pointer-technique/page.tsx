export default function TwoPointerBlog() {
    return (
      <main className="p-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Mastering Two Pointer Technique in Python
        </h1>
  
        <p className="text-gray-500 mb-6">
          A simple and powerful approach to solve array problems efficiently.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">What is Two Pointer?</h2>
        <p className="text-gray-700">
          The two pointer technique uses two indices to iterate over an array,
          usually from opposite ends or at different speeds, to reduce time complexity.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Example Problem</h2>
        <p className="text-gray-700">
          Given a sorted array, find if there exists a pair that sums to a target.
        </p>
  
        <pre className="bg-gray-100 p-4 rounded mt-4 overflow-x-auto">
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
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Why It Works</h2>
        <p className="text-gray-700">
          Since the array is sorted, we can intelligently move pointers
          instead of checking all pairs, reducing complexity from O(n²) to O(n).
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">When to Use</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Sorted arrays</li>
          <li>Pair sum problems</li>
          <li>Palindrome checks</li>
        </ul>
      </main>
    );
  }