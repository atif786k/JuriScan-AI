import React, { useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { RiCloseLargeLine } from "react-icons/ri";

const FileUpload = ({ closeCard, onSummaryGenerated }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      alert("Please upload a document first.");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("pdf", selectedFile);
    try {
      const response = await fetch("http://localhost:5000/api/analyze-pdf", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        onSummaryGenerated(data.data);
        closeCard();
      } else {
        console.error("Failed to analyze PDF");
      }
    } catch (error) {
      console.error("Server error occurred: ", error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-100 rounded-lg shadow-lg p-8 w-full max-w-xl relative space-y-6">
        <RiCloseLargeLine
          onClick={closeCard}
          className="absolute right-8 top-8 text-xl cursor-pointer"
        />
        <h2 className="text-2xl font-bold text-center">FILE UPLOAD</h2>

        <div className="border-2 border-dashed border-gray-400 rounded-lg p-10 text-center">
          <input
            type="file"
            accept=".pdf, .docx"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="hidden"
          />
          <IoCloudUploadOutline className="w-14 h-14 mx-auto mb-4" />
          <p className="font-medium">Drag & Drop your file(s) here</p>
          <p className="text-gray-500">or</p>
          <button
            onClick={handleBrowseClick}
            className="mt-2 px-4 py-2 bg-black text-white rounded"
          >
            Browse files
          </button>
        </div>
        {selectedFile && (
          <p className="text-md text-gray-700 font-medium">
            Selected File:{" "}
            <span className="text-black">{selectedFile.name}</span>
          </p>
        )}
        {loading && (
          <p className="text-green-600 text-[18px] leading-[18px]">
            Hold on tight. It might take few of your seconds 😉
          </p>
        )}
        <button
          onClick={handleAnalyze}
          disabled={!selectedFile}
          className={`w-full rounded flex justify-center transition ${
            selectedFile
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          } ${loading ? "py-0" : "py-3"}`}
        >
          {loading ? (
            <img
              src="/loading-spinner.gif"
              width="90px"
              alt="Analyzing document"
            />
          ) : (
            "Analyze"
          )}
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
