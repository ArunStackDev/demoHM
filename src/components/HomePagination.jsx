import React from "react";

function HomePagination({ totalPages, currentPage, onPageChange }) {
  if (!totalPages || totalPages < 2) return null;

  return (
    <>
      {/* Pagination navigation for gallery pages */}
      <nav className="flex items-center gap-3" aria-label="Pagination">
      {Array.from({ length: totalPages }).map((_, index) => {
        const isActive = index === currentPage;
        return (
          <button
            key={index}
            type="button"
            onClick={() => onPageChange(index)}
            aria-label={`Go to page ${index + 1}`}
            className={`h-9 w-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
              isActive
                ? "bg-[#35B1AA] text-white"
                : "bg-[#CFEFF4] text-[#1B5F6B]"
            }`}
          >
            {index + 1}
          </button>
        );
      })}
      </nav>
    </>
  );
}

export default HomePagination;
