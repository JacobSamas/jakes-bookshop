"use client";

import { useState } from "react";
import BookCard from "@/components/BookCard";
import SearchBar from "@/components/SearchBar";
import FilterPanel from "@/components/FilterPanel";

const books = [
  { slug: "gatsby", title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 15.99, genre: "Classics" },
  { slug: "1984", title: "1984", author: "George Orwell", price: 13.49, genre: "Dystopian" },
  { slug: "mockingbird", title: "To Kill a Mockingbird", author: "Harper Lee", price: 17.99, genre: "Classics" },
  { slug: "catcher", title: "The Catcher in the Rye", author: "J.D. Salinger", price: 14.99, genre: "Classics" },
  { slug: "pride", title: "Pride and Prejudice", author: "Jane Austen", price: 12.99, genre: "Romance" },
  { slug: "mobydick", title: "Moby Dick", author: "Herman Melville", price: 19.99, genre: "Adventure" },
];

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  const handleSearch = (query) => setSearchQuery(query.toLowerCase());
  const handleFilter = (filter) => setActiveFilter(filter);

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery) ||
      book.author.toLowerCase().includes(searchQuery);

    const matchesFilter = activeFilter && activeFilter !== "All" ? book.genre === activeFilter : true;

    return matchesSearch && matchesFilter;
  });

  return (
    <main className="py-16 px-8 container mx-auto">
      <h1 className="text-5xl font-extrabold text-center text-text mb-12">
        Shop Our Collection
      </h1>

      <SearchBar onSearch={handleSearch} />
      <FilterPanel
        onFilter={handleFilter}
        filters={["All", "Classics", "Dystopian", "Romance", "Adventure"]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <BookCard
              key={`${book.slug}-${index}`}
              title={book.title}
              author={book.author}
              price={book.price}
              slug={book.slug}
              image={book.title}
              link={`/shop/${book.slug}`}
            />
          ))
        ) : (
          <p className="text-xl text-gray-600 text-center col-span-full">
            No books found matching your search or filter.
          </p>
        )}
      </div>
    </main>
  );
}
