import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { usePrivy } from "@privy-io/react-auth";

const Editor = () => {
  const { getAccessToken } = usePrivy();
  const [text, setText] = useState("");
  const [selectedSentence, setSelectedSentence] = useState("");
  const [rephrasedSentences, setRephrasedSentences] = useState([]);
  const [correctedSentences, setCorrectedSentences] = useState([]);
  const [spellCheckedText, setSpellCheckedText] = useState("");
  const [grammarCheckedText, setGrammarCheckedText] = useState("");
  const [activeTab, setActiveTab] = useState("editor");

  const handleTextChange = (e) => setText(e.target.value);

  const handleSentenceSelection = () => {
    const selection = window.getSelection().toString();
    if (selection) setSelectedSentence(selection);
  };

  const rephraseSentence = async () => {
    // Check if there's a selected sentence
    if (!selectedSentence) {
      console.error("No sentence selected for rephrasing");
      return;
    }
    
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/analyze`,
        {
          sentence: selectedSentence,
        }
      );
      
      // Check if we received rephrased sentences
      if (response.data && response.data.rephrasedSentences) {
        setRephrasedSentences(response.data.rephrasedSentences);
        setActiveTab("rephrase");
      } else {
        setRephrasedSentences([]);
        console.error("No rephrased sentences received from server");
      }
    } catch (error) {
      console.error("Error rephrasing sentence:", error);
      setRephrasedSentences([]);
      // Optionally show an error message to the user
    }
  };

  const addCorrectedSentence = (sentence) => {
    setCorrectedSentences([...correctedSentences, sentence]);
  };

  const checkSpelling = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/spellcheck`,
        { text }
      );
      setSpellCheckedText(response.data.correctedText);
      setActiveTab("spelling");
    } catch (error) {
      console.error("Error checking spelling:", error);
    }
  };

  const checkGrammar = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/grammarcheck`,
        { text }
      );
      setGrammarCheckedText(response.data.correctedText);
      setActiveTab("grammar");
    } catch (error) {
      console.error("Error checking grammar:", error);
    }
  };

  const clearAll = () => {
    setText("");
    setSelectedSentence("");
    setRephrasedSentences([]);
    setCorrectedSentences([]);
    setSpellCheckedText("");
    setGrammarCheckedText("");
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-200">
      <div className="container mx-auto px-1 md:px-0 py-6 md:py-8" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">GramChecker</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Enhance your writing with our advanced AI tools</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Main Editor Area */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              {/* Toolbar */}
              <div className="bg-primary p-3 md:p-4">
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <button
                    onClick={checkSpelling}
                    className="flex items-center bg-white/20 hover:bg-white/30 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow text-sm md:text-base"
                  >
                    <span className="material-icons-outlined mr-1 md:mr-2 text-base md:text-lg">spellcheck</span>
                    <span>Check Spelling</span>
                  </button>
                  <button
                    onClick={checkGrammar}
                    className="flex items-center bg-white/20 hover:bg-white/30 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow text-sm md:text-base"
                  >
                    <span className="material-icons-outlined mr-1 md:mr-2 text-base md:text-lg">edit_note</span>
                    <span>Check Grammar</span>
                  </button>
                  {!selectedSentence && (
                    <button
                      disabled
                      className="flex items-center bg-gray-400 text-gray-200 px-3 py-2 md:px-4 md:py-2 rounded-lg cursor-not-allowed text-sm md:text-base"
                    >
                      <span className="material-icons-outlined mr-1 md:mr-2 text-base md:text-lg">autorenew</span>
                      <span>Rephrase</span>
                    </button>
                  )}
                  {selectedSentence && (
                    <button
                      onClick={rephraseSentence}
                      className="flex items-center bg-white/20 hover:bg-white/30 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow text-sm md:text-base"
                    >
                      <span className="material-icons-outlined mr-1 md:mr-2 text-base md:text-lg">autorenew</span>
                      <span>Rephrase</span>
                    </button>
                  )}
                  <button
                    onClick={clearAll}
                    className="flex items-center bg-red-500 hover:bg-red-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow text-sm md:text-base"
                  >
                    <span className="material-icons-outlined mr-1 md:mr-2 text-base md:text-lg">delete</span>
                    <span>Clear All</span>
                  </button>
                </div>
              </div>

              {/* Editor */}
              <div className="p-4 md:p-6">
                <textarea
                  value={text}
                  onChange={handleTextChange}
                  onMouseUp={handleSentenceSelection}
                  placeholder="Start typing your text here..."
                  rows={12}
                  className="w-full p-3 md:p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none text-gray-900 dark:text-white bg-white dark:bg-gray-700 text-sm md:text-base"
                />
                {selectedSentence && (
                  <div className="mt-3 md:mt-4 p-3 md:p-4 bg-primary/10 border-l-4 border-primary rounded text-sm md:text-base">
                    <p className="text-primary">
                      <span className="font-semibold">Selected:</span> {selectedSentence}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Results Tabs */}
            <div className="mt-6 md:mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex flex-wrap -mb-px">
                  <TabButton
                    active={activeTab === "editor"}
                    onClick={() => setActiveTab("editor")}
                  >
                    Editor
                  </TabButton>
                  <TabButton
                    active={activeTab === "spelling"}
                    onClick={() => setActiveTab("spelling")}
                  >
                    Spelling Check
                  </TabButton>
                  <TabButton
                    active={activeTab === "grammar"}
                    onClick={() => setActiveTab("grammar")}
                  >
                    Grammar Check
                  </TabButton>
                  <TabButton
                    active={activeTab === "rephrase"}
                    onClick={() => setActiveTab("rephrase")}
                  >
                    Rephrase Suggestions
                  </TabButton>
                </nav>
              </div>

              <div className="p-4 md:p-6">
                {activeTab === "editor" && (
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 md:mb-4">Your Document</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                      Start writing in the editor above. Use the tools to check spelling, grammar, and get rephrasing suggestions.
                    </p>
                  </div>
                )}

                {activeTab === "spelling" && (
                  <ResultSection
                    title="Spell Checked Text"
                    text={spellCheckedText}
                    onAccept={() => addCorrectedSentence(spellCheckedText)}
                    icon="spellcheck"
                  />
                )}

                {activeTab === "grammar" && (
                  <ResultSection
                    title="Grammar Checked Text"
                    text={grammarCheckedText}
                    onAccept={() => addCorrectedSentence(grammarCheckedText)}
                    icon="edit_note"
                  />
                )}

                {activeTab === "rephrase" && (
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 md:mb-4 flex items-center">
                      <span className="material-icons-outlined mr-1 md:mr-2 text-base md:text-lg">autorenew</span>
                      Rephrased Sentences
                    </h3>
                    {rephrasedSentences && rephrasedSentences.length > 0 ? (
                      <div className="space-y-3 md:space-y-4">
                        {rephrasedSentences.map((sentence, index) => (
                          <div
                            key={index}
                            className="p-3 md:p-4 border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 hover:shadow-md bg-white dark:bg-gray-700"
                          >
                            <p className="mb-2 md:mb-3 text-gray-900 dark:text-white text-sm md:text-base">{sentence}</p>
                            <button
                              onClick={() => addCorrectedSentence(sentence)}
                              className="flex items-center text-primary hover:text-primary/80 font-medium transition-all duration-300 text-sm md:text-base"
                            >
                              <span className="material-icons-outlined mr-1 md:mr-2 text-base md:text-lg">check</span>
                              Accept this version
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6 md:py-8">
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                          No rephrased sentences available. Select a sentence in the editor and click "Rephrase" to get suggestions.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 md:p-6 sticky top-4 md:top-8">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 md:mb-4 flex items-center">
                <span className="material-icons-outlined mr-1 md:mr-2 text-base md:text-lg">check</span>
                Approved Corrections
              </h3>
              
              {correctedSentences.length > 0 ? (
                <div className="space-y-2 md:space-y-3 max-h-80 md:max-h-96 overflow-y-auto">
                  {correctedSentences.map((sentence, index) => (
                    <div
                      key={index}
                      className="p-2 md:p-3 bg-primary/10 border border-primary/20 rounded-lg transition-all duration-300 hover:shadow-sm text-sm md:text-base"
                    >
                      <p className="text-primary">{sentence}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 md:py-8">
                  <span className="material-icons-outlined text-2xl md:text-3xl text-gray-400 mb-2 md:mb-3">edit</span>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    Your approved corrections will appear here
                  </p>
                </div>
              )}
              
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-primary mb-2 md:mb-3 text-sm md:text-base">Tips</h4>
                <ul className="text-xs md:text-sm text-gray-600 dark:text-gray-400 space-y-1 md:space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-1 md:mr-2">•</span>
                    <span>Select text to rephrase specific sentences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-1 md:mr-2">•</span>
                    <span>Check spelling and grammar regularly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-1 md:mr-2">•</span>
                    <span>Approve corrections to build your final document</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm font-medium border-b-2 transition-all duration-300 ${
      active
        ? "border-primary text-primary"
        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
    }`}
  >
    {children}
  </button>
);

const ResultSection = ({ title, text, onAccept, icon }) => (
  <div>
    <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 md:mb-4 flex items-center">
      <span className="material-icons-outlined mr-1 md:mr-2 text-base md:text-lg">{icon}</span>
      <span className="ml-1 md:ml-2">{title}</span>
    </h3>
    {text ? (
      <div className="space-y-3 md:space-y-4">
        <div className="p-3 md:p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">
          <p className="text-gray-900 dark:text-white text-sm md:text-base">{text}</p>
        </div>
        <button
          onClick={() => onAccept(text)}
          className="flex items-center bg-primary hover:bg-primary/90 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow text-sm md:text-base"
        >
          <span className="material-icons-outlined mr-1 md:mr-2 text-base md:text-lg">check</span>
          Accept Correction
        </button>
      </div>
    ) : (
      <div className="text-center py-6 md:py-8">
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">No results available yet. Run a check to see results here.</p>
      </div>
    )}
  </div>
);

export default Editor;