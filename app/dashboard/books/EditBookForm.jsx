"use client";

import CommonInputWrapper from "@/components/common/CommonInputWrapper";
import BookAddModal from "@/components/dashboard/add_new_book/BookAddModal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { GrCloudUpload } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";


// Note: genre options
const genreOptions = [
    {
        value: "action",
        label: "Action",
    },
    {
        value: "adventure",
        label: "Adventure",
    },
    {
        value: "comedy",
        label: "Comedy",
    },
    {
        value: "drama",
        label: "Drama",
    }
];

const EditBookForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Note: react hook form
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            terms: true,
        },
    });

    // Note: handle file upload change
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            // Create preview URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Note: handle remove image
    const handleRemoveImage = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
        // Reset file input
        document.getElementById('uploadBook').value = '';
    };

    // Note: handle form submit
    const onSubmit = (data) => {
        const formData = {
            ...data,
            bookCover: selectedFile
        };
        console.log(formData);
    };

    // Note: open modal 
    const showModal = () => {
        setIsModalOpen(true);
    };

    // Note: hide modal
    const handleCancel = () => {
        setIsModalOpen(false);
    }

    // Note: main ui component
    return (
        <div className="w-full flex items-start">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-5"
            >
                {/* upload book image */}
                <div className="w-full flex flex-col items-center justify-center">
                    {/* Upload area */}
                    <label
                        htmlFor="uploadBook"
                        className={`w-full h-full cursor-pointer border-2 border-dashed rounded-lg py-10 lg:py-20 transition-all duration-300 hover:border-[#FFB800] hover:bg-gray-50 ${previewUrl ? 'border-gray-300' : 'border-gray-300 bg-gray-50'
                            }`}
                    >
                        <input
                            type="file"
                            name="uploadBook"
                            id="uploadBook"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                        />

                        {previewUrl ? (
                            // Preview mode
                            <div className="flex flex-col items-center justify-center gap-4">
                                <div className="relative w-32 h-40 mx-auto">
                                    <img
                                        src={previewUrl}
                                        alt="Book cover preview"
                                        className="w-full h-full object-cover rounded-lg shadow-md"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleRemoveImage}
                                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-red-600 transition-colors"
                                    >
                                        <RxCross2 />
                                    </button>
                                </div>
                                <p className="text-green-600 font-medium text-sm">
                                    Image selected! Click to change
                                </p>
                            </div>
                        ) : (
                            // Note: Upload mode
                            <div className="flex flex-col items-center justify-center gap-3">
                                {/* Upload Icon */}
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-300">
                                    <GrCloudUpload className="text-3xl text-gray-500" />
                                </div>

                                {/* size and text */}
                                <div className="text-center">
                                    <p className="text-lg font-medium text-gray-700 mb-1">
                                        Click to upload cover image
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        PNG, JPG, JPEG up to 5MB
                                    </p>
                                </div>
                            </div>
                        )}
                    </label>
                </div>

                {/* book title,  */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <CommonInputWrapper
                        label="Book Title:"
                        register={register}
                        errors={errors}
                        type="text"
                        name="bookTitle"
                        placeholder="Enter book title"
                        register_as="bookTitle"
                        validationRules={{
                            required: "Book title is required"
                        }}
                    />

                    <CommonInputWrapper
                        label="Book Author"
                        name="bookAuthor"
                        register={register}
                        register_as="bookAuthor"
                        placeholder="Author name"
                        errors={errors}
                        validationRules={{
                            required: "Book author is required"
                        }}
                    />

                    <CommonInputWrapper
                        label="Price"
                        name="bookPrice"
                        register={register}
                        register_as="bookPrice"
                        placeholder="Book price"
                        errors={errors}
                        validationRules={{
                            required: "Book price is required"
                        }}
                    />

                    <CommonInputWrapper
                        label="Quantity"
                        name="bookQuantity"
                        register={register}
                        register_as="bookQuantity"
                        placeholder="Book quantity"
                        errors={errors}
                        validationRules={{
                            required: "Book quantity is required"
                        }}
                    />
                </div>

                <CommonInputWrapper label="Description"
                    type="textarea"
                    name="bookDescription"
                    register={register}
                    register_as="bookDescription"
                    placeholder="Enter Description"
                    errors={errors}
                    validationRules={{
                        required: "Description is required"
                    }}
                    wrapperClass="col-span-2" />

                <CommonInputWrapper
                    options={genreOptions}
                    control={control}
                    type="select"
                    label="Category"
                    name="bookCategory"
                    register={register}
                    register_as="bookCategory"
                    placeholder="Select Genre"
                    errors={errors}
                    validationRules={{
                        required: "Category is required"
                    }}
                />

                {/* publish button */}
                <div className="col-span-2 w-full flex items-end justify-end">
                    <button
                        type="submit"
                        onClick={showModal}
                        className="w-full cursor-pointer bg-[#aa4b29] text-xl font-semibold text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg- transition-colors"
                    >
                        Publish
                    </button>
                </div>
            </form>

            <BookAddModal
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
            />
        </div>
    );
};
export default EditBookForm;