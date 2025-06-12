import { Link } from "react-router-dom";
import { MdFileUpload, MdSecurity, MdSpeed, MdLightbulb } from "react-icons/md";
import { RiArrowRightUpFill } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative z-10 pb-16 bg-white md:pb-20 lg:pb-28 xl:pb-36">
            <main className="mt-10 mx-auto max-w-[1200px] px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-36">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Simplify Legal Documents</span>
                  <span className="block text-[#FA812F]">
                    with AI-Powered Analysis
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Upload your legal documents and get instant insights, risk
                  analysis, and simplified explanations. Save time and
                  understand your legal documents better.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/analyze"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#FA812F] hover:bg-[#e6731f] md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Analyze Document <MdFileUpload className="ml-2 text-xl" />
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#features"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#FA812F] bg-orange-50 hover:bg-orange-100 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Learn More <RiArrowRightUpFill className="ml-2 text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="pb-16 xl:pb-36 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#FA812F] font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to understand legal documents
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our AI-powered platform provides comprehensive analysis and
              insights for your legal documents.
            </p>
          </div>

          <div className="mt-12">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Feature 1 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#FA812F] text-white">
                  <MdSecurity className="h-6 w-6" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Risk Analysis
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Identify potential legal risks and ambiguities in your
                    documents automatically.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#FA812F] text-white">
                  <MdSpeed className="h-6 w-6" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Quick Summaries
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Get concise summaries of complex legal documents in plain
                    language.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#FA812F] text-white">
                  <MdFileUpload className="h-6 w-6" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Key Clauses
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Highlight and explain important clauses and their
                    implications.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#FA812F] text-white">
                  <MdLightbulb className="h-6 w-6" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Improvement Suggestions
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Receive recommendations for improving your legal documents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#FA812F]">
        <div className="max-w-[1200px] mx-auto py-12 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl pb-4">
              <span className="block">Ready to analyze your documents?</span>
              <span className="block text-orange-100">
                Start now and save time.
              </span>
            </h2>
            <h4 className="font-extrabold tracking-tight text-orange-100">
              <span>Powered by LLama3</span>
              <span className="flex items-center">
                <FaRegCopyright className="mr-2" /> 2025 JuriScan. All Rights
                Reserved.{" "}
              </span>
            </h4>
          </div>

          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/analyze"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#FA812F] bg-white hover:bg-orange-50 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
