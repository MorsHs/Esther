const UploadArea = ({ 
  uploading, 
  isDragging, 
  onClick, 
  onDragOver, 
  onDragLeave, 
  onDrop 
}) => {
  return (
    <div
      onClick={onClick}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`
        relative flex flex-col items-center justify-center py-12 px-6
        border-2 border-dashed rounded-xl transition-all duration-200 cursor-pointer
        ${isDragging 
          ? "border-blue-500 bg-blue-50/50" 
          : "border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300"}
      `}
    >
      {uploading ? (
        <div className="flex flex-col items-center">
          <i className="pi pi-spin pi-spinner text-3xl text-blue-600 mb-4" />
          <p className="text-sm font-medium text-slate-600">Processing file...</p>
        </div>
      ) : (
        <>
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-500">
            <i className="pi pi-upload text-xl" />
          </div>
          
          <div className="text-center">
            <p className="text-base font-semibold text-slate-700">
              Click to upload <span className="text-blue-600">or drag and drop</span>
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Excel files (.xlsx, .xls) up to 10MB
            </p>
          </div>

          <button className="mt-6 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
            Select File
          </button>
        </>
      )}
    </div>
  );
};

export default UploadArea;
