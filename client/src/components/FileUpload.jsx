import { useState } from "react";
import { MdFileUpload } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const FileUpload = ({ closeCard, onSummaryGenerated }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Check file type
      const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
      ];

      if (!allowedTypes.includes(selectedFile.type)) {
        setError("Please upload a PDF or DOCX file");
        return;
      }

      // Check file size (10MB limit)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError("File size should be less than 10MB");
        return;
      }

      setFile(selectedFile);
      setError("");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const response = await fetch("http://localhost:5000/api/analyze-pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to analyze document");
      }

      const data = await response.json();
      if (data.success) {
        onSummaryGenerated(data.data);
        closeCard();
      } else {
        setError(data.message || "Failed to analyze document");
      }
    } catch (err) {
      setError(err.message || "Failed to analyze document");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto my-auto transform -translate-y-0">
        <button
          onClick={closeCard}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <IoClose className="text-2xl" />
        </button>

        <h2 className="text-2xl font-semibold mb-4">Upload Document</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select a PDF or DOCX file
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <MdFileUpload className="text-3xl text-[#FA812F] mb-2" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">PDF or DOCX (MAX. 10MB)</p>
              </div>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.docx"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        {file && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700">
              Selected file: <span className="font-medium">{file.name}</span>
            </p>
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={loading || !file}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            loading || !file
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#FA812F] hover:bg-[#e6731f]"
          }`}
        >
          {loading ? "Analyzing..." : "Analyze Document"}
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
