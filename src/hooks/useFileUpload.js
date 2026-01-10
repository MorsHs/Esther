import { useState, useRef } from "react";

export const useFileUpload = () => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleAreaClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e, onSuccess) => {
    const file = e.target.files?.[0];
    if (file) {
      processUpload(file, onSuccess);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e, onSuccess) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processUpload(file, onSuccess);
    }
  };

  const processUpload = (file, onSuccess) => {
    setUploading(true);
    
    // Simulate API Upload
    setTimeout(() => {
      setUploading(false);
      onSuccess?.(file);
    }, 2000);
  };

  return {
    fileInputRef,
    isDragging,
    uploading,
    handleAreaClick,
    handleFileChange,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
};
