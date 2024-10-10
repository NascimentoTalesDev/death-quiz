import React, { useState } from "react";
import Image from "next/image";
import { UploadCloud } from "lucide-react";
import { cn } from "@/lib/utils"
import toast from "react-hot-toast";
import Spinner from "./Spinner";
import { deleteImage, upload } from "@/app/admin/dashboard/quizzes/new-quiz/actions";
import { Button } from "./ui/button";

interface UploadFilesProps {
    onUploadComplete: (ev: string) => void
}

const UploadFiles = ({ onUploadComplete }: UploadFilesProps) => {
    const [isUploading, setIsUploading] = useState(false)
    const [image, setImage] = useState(null)

    async function uploadImages(ev: React.ChangeEvent<HTMLInputElement>) {
        try {
            setIsUploading(true)
            if (ev.target.files) {
                const formData = new FormData();
                formData.append('file', ev.target.files[0]);
            
                const response = await upload(formData)
            
                setImage(response.link)
            
                onUploadComplete(response.link)
            }
            
        } catch (error) {
            toast.error("An unexpected error occurred");
        }
        setIsUploading(false)
    }

    async function deleteImg(file: string) {
        try {
            const res = await deleteImage(file)
            if(res.deleted){
                setImage(null);
                onUploadComplete('')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={cn("h-full w-full flex justify-center items-center")}>
            {image ? (
                <div className="relative h-full w-full">
                    <Image alt="Upload" fill src={image} />
                    <Button type="button" variant={"destructive"} onClick={() => deleteImg(image)} className="absolute overflow-hidden font-bold text-lg top-1 right-1 w-8 h-8">
                        X
                    </Button>
                </div>
            ) : (

                <>
                    {isUploading ? (
                        <div className="flex items-center justify-center h-28 w-28" >
                            <Spinner />
                        </div>
                    ) : (
                        <label className="cursor-pointer h-full w-full">
                            <div className="h-full w-full flex flex-col items-center justify-center bg-slate-300 text-slate-400">
                                <div>
                                    <UploadCloud />
                                </div>
                                <div>
                                    Upload
                                </div>
                            </div>
                            <input onChange={uploadImages} type="file" className="hidden"></input>
                        </label>
                    )}
                </>
            )}
        </div>
    );
}

export default UploadFiles;