export const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center py-10">
      {Array(8).fill("").map((_, index) => (
        <div key={index} className="w-64 p-4 bg-gray-100 rounded-lg animate-pulse">
          <div className="h-40 bg-gray-300 rounded-md mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};
