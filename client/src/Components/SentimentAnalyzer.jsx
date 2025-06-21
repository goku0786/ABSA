import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";

const SentimentAnalyzer = () => {
  const [text, setText] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    setLoading(true);
    setError("");
    setResults(null);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        text,
      });
      setResults(response.data.results);
    } catch (err) {
      setError("An error occurred while fetching sentiment analysis.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" min-h-screen p-10 md:px-5 flex items-center justify-center ">
      <div className=" md:flex justify-center  gap-10 min-h-[80vh] w-full  px-20 md:px-0">
        <div className=" backdrop-blur-[5px] shadow-lg opacity-[95%] rounded-lg p-8 md:w-1/2 max-w-lg mb-5 md:mb-0 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Aspect-Based Sentiment Analyzer
          </h1>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter you review ...."
            className=" bg-gray-800 text-white border-none text-lg w-full h-[60%] rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={handleAnalyze}
            className="ml-auto mr-auto w-1/2 bg-red-700 text-white py-3 px-1 rounded-md mt-4 hover:bg-red-600 focus:ring-2 focus:ring-white"
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>
          {error && (
            <div className="text-gray-900 font-bold text-md bg-white p-2 rounded-lg text-center mt-4">{error}</div>
          )}
        </div>
        <div className="backdrop-blur-[5px] shadow-lg opacity-95 rounded-lg p-8 md:w-1/2 max-w-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Results:</h2>
          {results && (
            <div className="mt-6">
              <ul className="mt-2 space-y-2">
                {Object.entries(results).map(([aspect, sentiment]) => (
                  <Card aspect={aspect} sentiment={sentiment}/>
                  
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalyzer;
