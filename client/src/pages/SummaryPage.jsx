import { useRef, useState } from "react";
import { IoCopy, IoCopyOutline } from "react-icons/io5";
import { MdFileDownload, MdFileDownloadDone } from "react-icons/md";
import ReactMarkdown from "react-markdown";
import jspdf from "jspdf";
import html2canvas from "html2canvas";

const SummaryPage = ({ summary }) => {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const summaryRef = useRef(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  const handleDownload = async () => {
    if (!summaryRef.current) return;

    try {
      const canvas = await html2canvas(summaryRef.current, {
        scale: 2,
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jspdf({
        orientation: "p",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const marginX = 10; // left & right margin
      const marginY = 20; // top & bottom margin

      const usableWidth = pageWidth - 2 * marginX;
      const usableHeight = pageHeight - 2 * marginY;

      const imgProps = {
        width: canvas.width,
        height: canvas.height,
      };

      const aspectRatio = imgProps.height / imgProps.width;
      const renderWidth = usableWidth;
      const renderHeight = usableWidth * aspectRatio;

      // Ensure it doesn't exceed usable height
      const finalHeight = renderHeight > usableHeight ? usableHeight : renderHeight;

      pdf.addImage(imgData, "PNG", marginX, marginY, renderWidth, finalHeight);

      pdf.save("Analyzed_Document.pdf");
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2000);
    } catch (error) {
      console.error("PDF download failed:", error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold text-gray-900">Document Analysis</h3>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleCopy}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            title="Copy to clipboard"
          >
            {copied ? (
              <IoCopy className="text-2xl text-[#FA812F]" />
            ) : (
              <IoCopyOutline className="text-2xl text-gray-600" />
            )}
          </button>
          <button
            onClick={handleDownload}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            title="Download as PDF"
          >
            {downloaded ? (
              <MdFileDownloadDone className="text-2xl text-[#FA812F]" />
            ) : (
              <MdFileDownload className="text-2xl text-gray-600" />
            )}
          </button>
        </div>
      </div>

      <div
        ref={summaryRef}
        className="prose prose-sm sm:prose-base w-full max-w-none leading-relaxed"
      >
        <ReactMarkdown>{summary}</ReactMarkdown>
      </div>
    </div>
  );
};

export default SummaryPage;