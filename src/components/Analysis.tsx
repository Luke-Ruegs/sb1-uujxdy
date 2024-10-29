import React from 'react';

interface AnalysisProps {
  analysis: string | null;
  isLoading: boolean;
}

export const Analysis: React.FC<AnalysisProps> = ({ analysis, isLoading }) => {
  if (isLoading) {
    return (
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-gray-600">Analyzing your career goals...</p>
      </div>
    );
  }

  if (!analysis) {
    return null;
  }

  return (
    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
      <h2 className="text-lg font-semibold text-blue-900 mb-2">Analysis</h2>
      <p className="text-blue-800 whitespace-pre-wrap">{analysis}</p>
    </div>
  );
};