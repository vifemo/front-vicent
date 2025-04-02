import React from 'react'
import './pagination.css'
import { useTranslation } from 'react-i18next'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const { t } = useTranslation()
  return (
    <div className="pagination">
      <button
        className="pagination__button pagination__button--prev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {t('APP.PAGINATION.PREV')}
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`pagination__button ${currentPage === i + 1 ? 'pagination__button--active' : ''}`}
        >
          {i + 1}
        </button>
      ))}

      <button
        className="pagination__button pagination__button--next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {t('APP.PAGINATION.NEXT')}
      </button>
    </div>
  )
}

export default Pagination
