import ExcelUploader from "../../components/upload/ExcelUploader";

const UploadFile = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Upload Excel File</h1>
      <ExcelUploader />
    </div>
  );
};

export default UploadFile;
