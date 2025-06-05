# 🧾 JuriScan – AI Legal Document Analyzer

Legal documents are often **lengthy**, filled with **complex jargon**, and **time-consuming** to read and understand — especially for individuals without a legal background. Whether it's contracts, offer letters, agreements, or policies, navigating through dense legal language can be frustrating and overwhelming.

**JuriScan** solves this problem by using AI to automatically **analyze legal documents** and provide a clean, simplified **summary** along with insights into:
- Ambiguities or potential legal risks
- Key clauses and their implications
- Missing or risky legal elements
- Suggestions for improvement or negotiation

Built with the **MERN stack**, JuriScan integrates **LangChain** and **Meta LLaMA 3** (via Ollama) for powerful document comprehension, and presents the results in a **clean, easy-to-understand format** using React and Tailwind CSS typography.

---

## 🚀 Features

- ✅ Upload legal documents (PDFs)
- ✅ AI-based document analysis using LangChain + Ollama (LLM) + Meta: llama3
- ✅ Secure file handling and validation
- ✅ RESTful API (Express.js + Node.js)
- ✅ Clean, minimal UI with TailwindCSS
- ✅ Frontend hosted on [Vercel](https://juri-scan-ai.vercel.app/)
- ✅ Backend deployed on **Railway**

---

## 🧑‍💻 Tech Stack

| Layer     | Technology                                                                 |
|-----------|-----------------------------------------------------------------------------|
| Frontend  | React.js, TailwindCSS, Vite                                                 |
| Backend   | Node.js, Express.js, Multer (for uploads)                                   |
| AI Engine | LangChain, Ollama (for local LLM processing), Open Router, Meta: llama3                                |
| Database  | MongoDB Atlas (cloud-hosted NoSQL database) ( No Database )                                 |
| Deployment| Vercel (Frontend), Railway.app (Backend), GitHub CI                         |

---

## 📁 Project Structure

```bash
JuriScan-AI/
├── client/           # Frontend React app
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── server/           # Backend Express app
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   ├── server.js
│   └── .env
└── README.md
````

---

## 🛠️ Installation & Running Locally

1. **Clone the repo**

```bash
git clone https://github.com/your-username/JuriScan.git
cd JuriScan
```

2. **Install client dependencies**

```bash
cd client
npm install
npm run dev
```

3. **Install server dependencies**

```bash
cd ../server
npm install
node server.js
```

Make sure Ollama is running locally and has a model (like `llama3` or `mistral`) pulled.

---

## 📦 API Endpoint

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| POST   | `/api/analyze-pdf` | Uploads & analyzes a PDF |

Body: `multipart/form-data` with key: `pdf`

---

## 🤝 Contribution

Contributions are welcome! Feel free to open issues, submit PRs or ideas.

---

## 📬 Contact

Created with ❤️ by [Mohammad Atif](https://github.com/atif786k)
📧 Email: [email](mailto:matif91201@gmail.com)
