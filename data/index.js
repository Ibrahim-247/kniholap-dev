import book_1 from "../public/product_1.png";
import book_2 from "../public/product_2.png";
import book_3 from "../public/product_3.png";
import book_4 from "../public/product_4.png";
import book_5 from "../public/product_5.png";
import book_6 from "../public/product_6.png";
import book_7 from "../public/product_7.png";
import book_8 from "../public/product_8.png";
import book_9 from "../public/product_9.png";
import book_10 from "../public/product_10.png";
import book_11 from "../public/product_11.png";
import book_12 from "../public/product_12.png";
import book_13 from "../public/product_13.png";
import book_14 from "../public/product_14.png";
import book_15 from "../public/product_15.png";
import book_16 from "../public/product_16.png";
import book_17 from "../public/product_17.png";
const bookPdf = "/books/book.pdf";

export const bookImages = [
    book_1,
    book_2,
    book_3,
    book_4,
    book_5,
    book_6,
    book_7,
    book_8,
    book_9,
    book_10,
    book_11,
    book_12,
    book_13,
    book_14,
    book_15,
    book_16,
    book_17
];

export const categories = [
    { id: 1, name: "E-Book", value: "ebook" },
    { id: 2, name: "Physical", value: "physical" },
    { id: 3, name: "Premium", value: "premium" },
];

export const subcategories = [
    { id: 1, name: "Horror" },
    { id: 2, name: "Fictional" },
    { id: 3, name: "Funny" },
    { id: 4, name: "Romance" },
    { id: 5, name: "Mystery" },
    { id: 6, name: "Thriller" },
    { id: 7, name: "Self Help" },
    { id: 8, name: "Biography" },
    { id: 9, name: "History" },
    { id: 10, name: "Novel" },
    { id: 11, name: "Poetry" },
    { id: 12, name: "Biography" },
    { id: 13, name: "History" },
    { id: 14, name: "Novel" },
    { id: 15, name: "Poetry" },
];

export const titles = [
    "Project Hail Mary",
    "The Midnight Library",
    "Where the Crawdads Sing",
    "Atomic Habits",
    "The Alchemist",
    "Educated",
    "The Silent Patient",
    "Circe",
    "Dune",
    "The Song of Achilles",
    "Becoming",
    "The Four Agreements",
    "It Ends With Us",
    "The Hobbit",
    "Sapiens",
    "1984",
    "The Great Gatsby",
    "Think Again",
    "The Power of Now",
    "The Subtle Art of Not Giving a F*ck",
    "Brave New World",
    "Can't Hurt Me",
    "Rich Dad Poor Dad",
    "Deep Work",
    "Man's Search for Meaning",
];

export const authors = [
    "Andy Weir",
    "Matt Haig",
    "Delia Owens",
    "James Clear",
    "Paulo Coelho",
    "Tara Westover",
    "Alex Michaelides",
    "Madeline Miller",
    "Frank Herbert",
    "Madeline Miller",
    "Michelle Obama",
    "Don Miguel Ruiz",
    "Colleen Hoover",
    "J.R.R. Tolkien",
    "Yuval Noah Harari",
    "George Orwell",
    "F. Scott Fitzgerald",
    "Adam Grant",
    "Eckhart Tolle",
    "Mark Manson",
    "Aldous Huxley",
    "David Goggins",
    "Robert T. Kiyosaki",
    "Cal Newport",
    "Viktor E. Frankl",
];

export const books = Array.from({ length: 100 }, (_, i) => {
    const id = i + 1;
    const image = bookImages[i % bookImages.length];

    // ✅ Use deterministic fixed assignment
    const assignedSubcategories = [subcategories[i % subcategories.length]];

    return {
        id,
        title: titles[i],
        author: authors[i],
        cover: image,
        price: 12 + (i % 6) * 2,
        rating: 4.4 + (i % 5) * 0.1,
        images: [image, image, image, image, image, image],
        category: categories[i % categories.length],
        subcategories: assignedSubcategories,
        no_of_reviews: 45000 + i * 123,
        file_path: bookPdf,
        is_complete: false,
        language: 'English',
        published_at: new Date().toISOString(),
        description:
            "The rain hammered against the windows of the quaint bakery, each drop a tiny percussion in the symphony of the storm. Inside, the aroma of warm bread and cinnamon swirled, a comforting contrast to the tempest outside. Alistair kneaded the dough with practiced hands, his mind replaying the events of the previous day. An argument, a misunderstanding, and now, a rift between him and Maria Babulic, his dearest friend.He glanced at the half-finished batch of 'Maria's Marvels'—her favorite cinnamon rolls, a recipe they had perfected together. A sigh escaped his lips, carrying with it a cloud of flour. How could he make amends? Words seemed insufficient, apologies hollow. Perhaps, he mused, the answer lay in the language they both understood best: the language of baking.Alistair decided to create a peace offering, a confection so irresistible that it would melt away any lingering resentment. He added a pinch of cardamom to the dough, a secret ingredient Maria adored, and a swirl of homemade raspberry jam, its vibrant color a promise of sweetness to come. As the oven warmed, he penned a heartfelt note, each word carefully chosen, each sentiment sincere.When the 'Maria's Marvels' emerged, golden and fragrant, Alistair arranged them in a decorative box, the note nestled among them like a whispered promise. He ventured out into the storm, the box held securely in his hands, his heart filled with hope. With each step, he imagined Maria's smile, the warmth of her forgiveness, and the joy of reconciliation. Today, he knew, would be a day of making up, one cinnamon roll at a time.Alistair decided to create a peace offering, a confection so irresistible that it would melt away any lingering resentment. He added a pinch of cardamom to the dough, a secret ingredient Maria adored, and a swirl of homemade raspberry jam, its vibrant color a promise of sweetness to come. As the oven warmed, he penned a heartfelt note, each word carefully chosen, each sentiment sincere.Alistair decided to create a peace offering, a confection so irresistible that it would melt away any lingering resentment. He added a pinch of cardamom to the dough, a secret ingredient Maria adored, and a swirl of homemade raspberry jam, its vibrant color a promise of sweetness to come. As the oven warmed, he penned a heartfelt note, each word carefully chosen, each sentiment sincere.",
        is_bookmark: false,
    };
});
