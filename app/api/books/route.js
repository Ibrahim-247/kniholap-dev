import { books } from "@/data";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    // Get query params safely (convert null/undefined to empty string)
    const rawSearch = searchParams.get("search");
    const rawCategoryId = searchParams.get("category_id");
    const rawSubcategoryIds = searchParams.get("subcategory_ids");

    const currentPage = parseInt(searchParams.get("current_page") || "1");
    const perPage = parseInt(searchParams.get("per_page") || "10");
    const search = rawSearch ? rawSearch.toLowerCase() : "";
    const categoryId = rawCategoryId ? parseInt(rawCategoryId) : null;
    const subcategoryIds = rawSubcategoryIds
        ? rawSubcategoryIds.split(",").map(id => parseInt(id))
        : [];

    // 🔍 Start filtering
    let filteredBooks = [...books];

    // ✅ Search Filter (Ignore if empty)
    if (search) {
        filteredBooks = filteredBooks.filter(
            book =>
                book.title.toLowerCase().includes(search) ||
                book.author.toLowerCase().includes(search)
        );
    }

    // ✅ Category Filter (Ignore if null)
    if (categoryId) {
        filteredBooks = filteredBooks.filter(
            book => book.category.id === categoryId
        );
    }

    // ✅ Subcategory Filter (Ignore if empty)
    if (subcategoryIds.length > 0) {
        filteredBooks = filteredBooks.filter(book =>
            book.subcategories.some(sub => subcategoryIds.includes(sub.id))
        );
    }

    // 📄 Pagination
    const totalItems = filteredBooks.length;
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedBooks = filteredBooks.slice(startIndex, endIndex);
    const lastPage = Math.ceil(totalItems / perPage);

    // ✅ Final Response
    return NextResponse.json({
        success: true,
        message: "Books fetched successfully",
        code: 200,
        data: {
            books: paginatedBooks,
            pagination: {
                current_page: currentPage,
                total_items: totalItems,
                per_page: perPage,
                last_page: lastPage,
            },
        },
    });
}
