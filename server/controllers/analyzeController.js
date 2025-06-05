const { getPDFAnalysis } = require("../services/aiService");
const { extractTextFromPDF } = require("../services/pdfService");

module.exports = analyzeController = async (req, res) => {
  try {
    console.log("Uploaded file: ", req.file);
    const filePath = req.file.path;
    const extractedText = await extractTextFromPDF(filePath);
    const analyzedData = await getPDFAnalysis(extractedText);

    fs.unlinkSync(filePath, (error) => {
      if (error) {
        console.error("Error deleting the file: ", error);
      }
    });

    res.status(200).json({
      success: true,
      message: "PDF analysis completed successfully.",
      data: analyzedData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occurred while analyzing the PDF.",
      error: error.message,
    });
  }
};
