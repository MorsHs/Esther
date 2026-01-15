import { useState, useRef } from "react"
import { handleUpload } from "../services/uploadService.js"

export const useFileUpload = () => {
    const fileInputRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [error, setError] = useState(null)

    const handleAreaClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = async (e, onSuccess) => {
        const file = e.target.files?.[0]
        if (!file) return

        await processUpload(file, onSuccess)
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = () => {
        setIsDragging(false)
    }

    const handleDrop = async (e, onSuccess) => {
        e.preventDefault()
        setIsDragging(false)

        const file = e.dataTransfer.files?.[0]
        if (!file) return

        await processUpload(file, onSuccess)
    }

    const processUpload = async (file, onSuccess) => {
        setUploading(true)
        setError(null)

        try {
            const result = await handleUpload(file)

            if (!result.success) {
                setError(result.error)
                return
            }

            // Notify UI of success (entity is already stored)
            onSuccess?.(result.entity)

            // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError("Unexpected upload error")
        } finally {
            setUploading(false)
        }
    }

    return {
        fileInputRef,
        isDragging,
        uploading,
        error,
        handleAreaClick,
        handleFileChange,
        handleDragOver,
        handleDragLeave,
        handleDrop
    }
}
