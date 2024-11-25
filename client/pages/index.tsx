import React, { useState } from "react";

const Index = () => {
  const [sentence, setSentence] = useState<string>("");
  const [wordCount, setWordCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    setError(null); // Reset errors
    setWordCount(null); // Reset word count

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/count-words`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sentence }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch word count.");
      }

      const data = await response.json();
      // console.log("response: ", data);
      setWordCount(data.word_count); // Set the word count
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-8 font-sans">
      <h1 className="text-2xl font-bold mb-4">Word Count App</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          placeholder="Enter your sentence here..."
          rows={4}
          className="w-full p-4 mb-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Count Words
        </button>
      </form>

      {error && <p className="text-red-600">{error}</p>}

      {wordCount !== null && (
        <p className="text-lg ">
          <span className="font-bold">Word Count:</span> {wordCount}
        </p>
      )}
    </div>
  );
};

export default Index;
