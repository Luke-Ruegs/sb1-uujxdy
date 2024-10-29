import React from 'react';

interface CareerGoalsProps {
  value: string;
  onChange: (value: string) => void;
}

export const CareerGoals: React.FC<CareerGoalsProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="career-goals" className="block text-sm font-medium text-gray-700">
        Career Goals
      </label>
      <textarea
        id="career-goals"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Describe your career goals and aspirations..."
      />
    </div>
  );
};