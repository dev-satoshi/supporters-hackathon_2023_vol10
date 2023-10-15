"use client";
import {
  MagnifyingGlassCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

type SearchFormProps = {
  className: string;
};

function getCategories() {
  fetch("http://localhost:3000/api/categories");
}

export default function SearchForm({ className }: SearchFormProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <form className={className}>
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassCircleIcon className="w-6 h-6 text-white" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="イベントを検索"
          required
        />
        {!isFilterOpen && (
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        )}
      </div>
      {!isFilterOpen && (
        <button
          type="button"
          className="flex items-center mt-2 mx-auto text-blue-500 hover:text-blue-600"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <ChevronDownIcon className="w-6 h-6" />
        </button>
      )}
      {isFilterOpen && (
        <div className="flex flex-col items-center justify-center">
          <div>hello</div>

          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>

          <button type="button" onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <ChevronUpIcon className="w-6 h-6" />
          </button>
        </div>
      )}
    </form>
  );
}
