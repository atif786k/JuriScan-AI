import { useState } from "react";
import { MdFileUpload } from "react-icons/md";
import FileUpload from "../components/FileUpload";
import SummaryPage from "./SummaryPage";

const AnalyzePage = () => {
  const [showUpload, setShowUpload] = useState(false);
  const [summary, setSummary] = useState("");

  const handleSummaryGenerated = (text) => {
    // console.log("Summary received:", text);
    setSummary(text);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Document Analysis
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload your legal document to get instant analysis, risk assessment,
            and key insights.
          </p>
        </div>

        {/* Upload Section */}
        {!summary && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <MdFileUpload className="text-5xl text-[#FA812F] mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Upload Your Document
                </h2>
                <p className="text-gray-600">
                  Supported formats: PDF, DOCX (Max size: 10MB)
                </p>
              </div>
              <button
                onClick={() => setShowUpload(true)}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#FA812F] hover:bg-[#e6731f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FA812F]"
              >
                <MdFileUpload className="mr-2" />
                Select Document
              </button>
            </div>
          </div>
        )}

        {/* Summary Section */}
        {summary && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Analysis Results
              </h2>
              <button
                onClick={() => setShowUpload(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[#FA812F] bg-orange-50 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FA812F]"
              >
                <MdFileUpload className="mr-2" />
                Analyze Another Document
              </button>
            </div>
            <SummaryPage summary={summary} />
          </div>
        )}

        {/* Upload Modal */}
        {showUpload && (
          <FileUpload
            closeCard={() => setShowUpload(false)}
            onSummaryGenerated={handleSummaryGenerated}
          />
        )}
      </div>
    </div>
  );
};

export default AnalyzePage;
