import { useEffect, useRef, useState } from "react";
import { IoCopy, IoCopyOutline } from "react-icons/io5";
import {
  MdFileDownload,
  MdFileDownloadDone,
  MdFileUpload,
} from "react-icons/md";
import { RiArrowRightUpFill } from "react-icons/ri";
import FileUpload from "../components/fileUpload";
import ReactMarkdown from "react-markdown";
import jspdf from "jspdf";
import html2canvas from "html2canvas";

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const summaryRef = useRef(null);
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current && window.VANTA && window.VANTA.DOTS) {
      vantaEffect.current = window.VANTA.DOTS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 500.0,
        minWidth: 500.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0xffffff,
        spacing: 22.0,
        showLines: false,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

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
      const finalHeight =
        renderHeight > usableHeight ? usableHeight : renderHeight;

      pdf.addImage(imgData, "PNG", marginX, marginY, renderWidth, finalHeight);

      pdf.save("Analyzed_Document.pdf");
      setDownloaded(true);
      // setTimeout(() => setDownloaded(false), 5000);
    } catch (error) {
      console.error("PDF download failed:", error.message);
    }
  };

  return (
    <div
      ref={vantaRef}
      className={`bg-white text-gray-900 min-h-screen flex flex-col ${
        !summary ? "justify-center" : ""
      }`}
    >
      {/* Main */}
      <main
        className={`flex flex-col justify-center items-center text-center ${
          !summary ? "mt-0" : "mt-52"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold mb-6 max-w-5xl">
          JuriScan: <span className="text-[#FA812F]">AI-Powered </span> Legal
          Contract Analyzer
        </h2>
        <p className="text-lg lg:text-[20px] lg:leading-6 tracking-wide text-gray-700 max-w-2xl mb-6">
          Powered by LangChain and Ollama, JuriScan is generative AI that scan,
          summarize, analyze, provides suggestions for legal contracts, and much
          more — all in seconds.
        </p>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowPopup(true)}
            className="button flex items-center"
          >
            Document <MdFileUpload className="ml-1 text-2xl" />
          </button>
          <button className="button flex items-center">
            Signup <RiArrowRightUpFill className="ml-1 text-2xl" />
          </button>
        </div>
      </main>

      {summary && (
        <div className="card">
          <div className="bg">
            <div className="pb-10 flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Summary</h3>
              <div className="flex items-center space-x-4">
                <button onClick={handleCopy} className="">
                  {copied ? (
                    <IoCopy className="text-2xl transition-all duration-300" />
                  ) : (
                    <IoCopyOutline className="text-2xl transition-all duration-300" />
                  )}
                </button>
                <button onClick={handleDownload} className="">
                  {downloaded ? (
                    <MdFileDownloadDone className="text-2xl text-green-600 transition-all duration-300" />
                  ) : (
                    <MdFileDownload className="text-2xl transition-all duration-300" />
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
          <div className="blob"></div>
          <div className="blob2"></div>
        </div>
      )}

      {showPopup && (
        <FileUpload
          closeCard={() => setShowPopup(false)}
          onSummaryGenerated={(text) => setSummary(text)}
        />
      )}
    </div>
  );
};

export default LandingPage;
