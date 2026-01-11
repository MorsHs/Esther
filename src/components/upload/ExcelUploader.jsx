import { useRef } from "react";
import { Toast } from "primereact/toast";
import { useFileUpload } from "../../hooks/useFileUpload";
import UploadArea from "./UploadArea";

const ExcelUploader = () => {
  const toast = useRef(null);
  const {
    fileInputRef,
    isDragging,
    uploading,
    handleAreaClick,
    handleFileChange,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  } = useFileUpload();

  const onUploadSuccess = (file) => {
    toast.current.show({ 
      severity: "success", 
      summary: "Upload Successful", 
      detail: `${file.name} has been uploaded and is ready for processing`,
      life: 4000
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Toast ref={toast} position="bottom-right" />
      
      <input 
        type="file"
        ref={fileInputRef}
        onChange={(e) => handleFileChange(e, onUploadSuccess)}
        accept=".xlsx, .xls"
        className="hidden"
      />

      <UploadArea
        uploading={uploading}
        isDragging={isDragging}
        onClick={handleAreaClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={(e) => handleDrop(e, onUploadSuccess)}
      />
    </div>
  );
};

export default ExcelUploader;