"use client";
import styles from "./style.module.css";
import { useState, useRef } from "react";
import { addDocument } from "@/actions/authenticatedActions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const UploadDocumentPrompt = ({ username }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const objectUrl = URL.createObjectURL(file);

      const formData = new FormData();
      formData.append("document", file);
      formData.append("username", username);

      try {
        setIsLoading(true);
        const result = await addDocument(formData);

        if (result.success) {
          toast.success("Document Uploaded Successfully");
          router.push(`/home/${result.fileName}`);
        } else {
          console.error(result.error);
          toast.error(result.error);
        }
      } catch (error) {
        console.error("Upload failed", error);
        toast.error("Upload failed");
      } finally {
        setIsLoading(false);
        return () => URL.revokeObjectURL(objectUrl);
      }
    }
  };

  const handleUploadClick = (e) => {
    e.preventDefault();
    if (!isLoading) {
      fileInputRef.current?.click();
    }
  };

  return (
    <div className="w-full flex items-center justify-center px-5">
      <div className="max-w-[768px] w-full">
        <form
          className="flex gap-[10px] py-2 border-[#898A96] border rounded-xl px-4 sm:pl-6 sm:pr-3 bg-lightDark"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={fileInputRef}
            type="file"
            name="document"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          <input
            type="text"
            value={username}
            name="username"
            className="hidden"
          />
          <textarea
            disabled={true}
            rows={1}
            className={`${styles.scrollbar} flex-1 text-sm leading-[22px] p-0 pt-[3px] sm:pt-1.5 sm:text-base focus:outline-none resize-none`}
            placeholder="Upload a document..."
          />
          <button
            onClick={handleUploadClick}
            disabled={isLoading}
            className={`bg-[#25262D] hover:bg-orange flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded border-none active:scale-90 transition duration-100 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <UploadDocumentSVG className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadDocumentPrompt;

const LoadingSpinner = () => (
  <svg
    className="animate-spin w-5 h-5 sm:w-6 sm:h-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="white"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="white"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const UploadDocumentSVG = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 7C9 4.23858 11.2386 2 14 2C16.7614 2 19 4.23858 19 7V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V7C17 5.34315 15.6569 4 14 4C12.3431 4 11 5.34315 11 7V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15V7Z"
      fill="white"
    />
  </svg>
);
