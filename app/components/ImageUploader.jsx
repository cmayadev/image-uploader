"use client";
import { useEffect, useState, useRef  } from 'react';
import { Noto_Sans } from "next/font/google";
import Loading from './Loading';
import Uploaded from './Uploaded';

const noto = Noto_Sans({ subsets: ["latin"], weight: ["500"] });

const ImageUploader = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleDrop = (e) => {
            e.preventDefault();
            const file = e.dataTransfer.files[0];
            // Handle the dropped file
        };
    
        const handleDragOver = (e) => {
            e.preventDefault();
        };
    
        const element = document.getElementById('image-uploader');
    
        element.addEventListener('drop', handleDrop);
        element.addEventListener('dragover', handleDragOver);
    
        return () => {
            element.removeEventListener('drop', handleDrop);
            element.removeEventListener('dragover', handleDragOver);
            };
        }, []);

        const fileInputRef = useRef(null);

        const handleFileSelect = (e) => {
            const file = e.target.files[0];
            setLoading(true);
        // Aquí puedes hacer lo que necesites con el archivo (por ejemplo, cargarlo)
    };

    return ( 
        <div id="image-uploader" className={`bg-white px-8 py-9 w-[400px] rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] ${loading ? 'text-center' : '' }`}>
            {
                loading ? <Uploaded image="uploaded.jpg" />
                : <>
                    <h2 className="pb-5 text-lg leading-[17px]">Upload your image</h2>
                    <p className="text-[#828282] text-[10px] leading-[15px] pb-8">File should be Jpeg, Png,...</p>
                    <div className="bg-[#F6F8FB] rounded-xl border-dashed border-[1px] border-[#97BEF4] mb-5 w-80 cursor-pointer"
                        onClick={(e) => fileInputRef.current.click()}
                    >
                        <p className="text-[12px] text-[#BDBDBD] pb-10">
                            <img src="image.svg" alt="image" className="mx-auto pt-9 pb-10" />
                            Drag & Drop your image here
                        </p>
                    </div>
                    <p className="text-[#BDBDBD] text-[12px] pb-5">Or</p>
                    <button className={`bg-[#2F80ED] rounded-lg px-4 py-2 text-white text-[12px] ` + noto.className } onClick={(e) => fileInputRef.current.click()} >Choose a file</button>
                    <input  type="file" className='hidden' ref={fileInputRef} onChange={(e) => handleFileSelect(e)} />
                </>

            }
        </div>
    );
}

export default ImageUploader;