import React from 'react';
import { useDropzone } from 'react-dropzone';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1,
    onDrop: files => {
      if (files[0]) {
        onFileUpload(files[0]);
      }
    }
  });

  return (
    <div 
      {...getRootProps()} 
      className={`p-6 border-2 border-dashed rounded-lg text-center cursor-pointer
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-blue-500">Drop your resume here</p>
      ) : (
        <div>
          <p className="text-gray-600">Drag and drop your resume here, or click to select</p>
          <p className="text-sm text-gray-500 mt-2">Supported formats: PDF, DOCX</p>
        </div>
      )}
    </div>
  );
};