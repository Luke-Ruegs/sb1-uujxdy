import React, { useState } from 'react';
import { FileUpload } from './components/FileUpload';
import { CareerGoals } from './components/CareerGoals';
import { Analysis } from './components/Analysis';
import { analyzeCareerGoals } from './services/openai';

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [careerGoals, setCareerGoals] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !careerGoals.trim()) {
      alert('Please upload a resume and enter your career goals');
      return;
    }

    setIsSubmitting(true);
    try {
      const aiAnalysis = await analyzeCareerGoals(careerGoals);
      setAnalysis(aiAnalysis);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while analyzing your career goals');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Resume Upload & Career Goals
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Resume
              </label>
              <FileUpload onFileUpload={setFile} />
              {file && (
                <p className="mt-2 text-sm text-green-600">
                  Selected file: {file.name}
                </p>
              )}
            </div>

            <CareerGoals 
              value={careerGoals}
              onChange={setCareerGoals}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                ${isSubmitting 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                }`}
            >
              {isSubmitting ? 'Analyzing...' : 'Submit'}
            </button>
          </form>

          <Analysis analysis={analysis} isLoading={isSubmitting} />
        </div>
      </div>
    </div>
  );
}

export default App;