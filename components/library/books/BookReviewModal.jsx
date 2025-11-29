"use client";
import useReviews from '@/hooks/review-hooks';
import { Modal, Rate } from 'antd'
import { useState } from 'react'
import { useForm } from 'react-hook-form';

const BookReviewModal = ({ open, setOpen, book = {} }) => {
    const { handleBookReviewMutation } = useReviews();
    const { id } = book || {};
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    // Note: react hook form
    const {
        handleSubmit,
        formState: { errors }
    } = useForm();

    const handleSubmitReview = () => {
        const reviewData = {
            book_id: id,
            rating,
            review
        }
        handleBookReviewMutation.mutate(reviewData, {
            onSuccess: () => {
                setOpen(false);
                setRating(0);
                setReview('');
            }
        });
    };

    // Modal for giving review
    return (
        <Modal
            open={open}
            onCancel={() => setOpen(false)}
            title={`Give Review for "${book.title}" `}
            centered
            footer={null}
            width={650}
        >
            <form
                onSubmit={handleSubmit(handleSubmitReview)}
                className='w-full flex mt-3 flex-col gap-4 justify-start items-center'
            >
                <Rate value={rating} onChange={(value) => setRating(value)} />
                <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder='Write your review here...'
                    className='w-full border min-h-52 border-gray-300 rounded-md p-3 resize-none focus:outline-none '
                ></textarea>
                <button
                    type='button'
                    disabled={handleBookReviewMutation.isPending || !rating || !review.trim()} // Added validation
                    className=' bg-primary text-white capitalize rounded-sm py-2 lg:py-3 px-4 cursor-pointer shrink-0 text-sm lg:text-base lg:px-10 disabled:opacity-50 disabled:cursor-not-allowed'
                    onClick={handleSubmit(handleSubmitReview)}
                >
                    {handleBookReviewMutation.isPending ? "Submitting..." : "Submit Review"}
                </button>
            </form>
        </Modal>
    )
};
export default BookReviewModal;