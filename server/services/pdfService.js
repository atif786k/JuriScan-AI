const fs = require("fs");
const path = require("path");
const pdfParser = require("pdf-parse");
const mammoth = require("mammoth");

exports.extractTextFromPDF = async (filePath) => {
  try {
    const extension = path.extname(filePath).toLowerCase();
    if (extension === ".pdf") {
      const dataBuffer = fs.readFileSync(filePath);
      const data = await pdfParser(dataBuffer);
      if (!data || !data.text) {
        console.error("No text found in the PDF file.");
        return null;
      }
      return data.text;
    }
    if (extension === ".docx") {
      const result = await mammoth.extractRawText({ path: filePath });
      if (!result || !result.value) {
        console.error("No text found in the DOCX file.");
        return null;
      }
      return result.value;
    }
  } catch (error) {
    console.error("Error occurred while reading the PDF file: ", error.message);
  }
};
