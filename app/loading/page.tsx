// app/my-page/page.tsx

"use client";
import React, { useEffect, useState } from 'react';

interface Data {
  title: string;
  description: string;
}

const MyPage: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data with a delay to show loading effect
    const fetchData = async () => {
      try {
        // Mocking the fetch call here. Replace with actual fetch if you have an API
        const res = await fetch('/api/data'); // Use a local API route if you have it
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false); // End loading screen
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-gray-800">
        <h1 className="text-2xl font-bold text-white">Loading...</h1>
        <div className="relative w-full mt-4">
          <div className="loading-line" />
        </div>
        <style jsx>{`
          .loading-line {
            position: absolute;
            top: 50%;
            left: 0;
            height: 8px;
            background: #ffffff;
            animation: loadingAnimation 2s linear infinite;
            width: 100%;
          }
          @keyframes loadingAnimation {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    );
  }

  // Render the main content once data is loaded
  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
    </div>
  );
};

export default MyPage;
