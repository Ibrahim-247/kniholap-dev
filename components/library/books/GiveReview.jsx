'use client'

import BookReviewModal from "./BookReviewModal"
import { useState } from "react";

const GiveReview = ({ book = {} }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button type='button' className=' bg-primary text-white capitalize rounded-sm py-2 lg:py-3 px-2 cursor-pointer shrink-0 text-sm lg:text-base lg:px-10 ' onClick={() => setOpen(true)}>
                Give Review
            </button>
            <BookReviewModal open={open} setOpen={setOpen} book={book} />
        </>
    )
}

export default GiveReview