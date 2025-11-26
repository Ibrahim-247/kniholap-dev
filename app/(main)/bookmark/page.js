import BookMarkList from "@/components/bookmark/BookMarkList"
import SimilarYouEnjoyed from "@/components/bookmark/SimilarYouEnjoyed"
import SectionTitle from "@/components/common/SectionTitle"

const BookMark = () => {
    return (
        <div className="container flex flex-col justify-start gap-6 ">
            <SectionTitle text="Bookmark" />
            <p className="xl:text-xl text-lg font-medium">Continue reading your favorite books</p>
            <BookMarkList />
            <SimilarYouEnjoyed />
        </div>
    )
}

export default BookMark