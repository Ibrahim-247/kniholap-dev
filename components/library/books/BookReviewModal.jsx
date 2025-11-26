import { Modal, Rate } from 'antd'
import { useState } from 'react'

const BookReviewModal = ({ open, setOpen, book = {} }) => {
    const [rating, setRating] = useState(0)

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
            <div className='w-full flex mt-3 flex-col gap-4 justify-start items-center'>
                <Rate value={rating} onChange={(value) => setRating(value)} />
                <textarea
                    placeholder='Write your review here...'
                    className='w-full border min-h-52 border-gray-300 rounded-md p-3 resize-none focus:outline-none '
                ></textarea>
                <button
                    type='button'
                    className=' bg-primary text-white capitalize rounded-sm py-2 lg:py-3 px-4 cursor-pointer shrink-0 text-sm lg:text-base lg:px-10 '
                    onClick={() => {
                        // handle review submission logic here
                        setOpen(false)
                    }}
                >
                    Submit Review
                </button>
            </div>
        </Modal>
    )
}

export default BookReviewModal