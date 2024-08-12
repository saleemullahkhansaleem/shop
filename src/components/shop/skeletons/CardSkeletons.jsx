export default function CardSkeletons() {
  return (
    <div
      role="status"
      class="max-w-sm rounded shadow animate-pulse dark:border-gray-700 overflow-hidden"
    >
      <div class="flex items-center justify-center h-40 bg-gray-300 dark:bg-gray-700"></div>
      <div className="p-2">
        <div class="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-3/4 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6 mb-2"></div>
        <div class="flex items-center gap-1 mt-4">
          <div class="h-3 w-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
          <div class="h-3 w-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
          <div class="h-3 w-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
          <div class="h-3 w-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
          <div class="h-3 w-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
        </div>
      </div>
      <div class="h-8 bg-gray-200 dark:bg-gray-700 w-full"></div>
      <span class="sr-only">Loading...</span>
    </div>
  );
}
