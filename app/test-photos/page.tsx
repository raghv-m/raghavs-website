export default function TestPhotosPage() {
  const testImages = [
    "468646440_17936655428944893_7509135090935189598_n.jpg",
    "343992219_177325821532978_5717638195834194623_n.jpg",
    "344551174_251455580748429_1306517930164923290_n.jpg"
  ];

  return (
    <div className="min-h-screen pt-16 p-8">
      <h1 className="text-3xl font-bold mb-8">Photo Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testImages.map((filename, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Image {index + 1}</h3>
            <p className="text-sm text-gray-600 mb-2">Filename: {filename}</p>
            <img
              src={`/assets/${filename}`}
              alt={`Test image ${index + 1}`}
              className="w-full h-48 object-cover rounded"
              onError={(e) => {
                console.error('Image failed to load:', filename);
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/400x300/ff0000/ffffff?text=Failed+to+load+${encodeURIComponent(filename)}`;
              }}
              onLoad={() => {
                console.log('Image loaded successfully:', filename);
              }}
            />
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded">
        <h2 className="font-semibold mb-2">Debug Info:</h2>
        <p>Check the browser console for image load/error messages</p>
        <p>If images fail to load, they will show red placeholders</p>
      </div>
    </div>
  );
} 