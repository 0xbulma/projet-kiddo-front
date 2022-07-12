import ReactPaginate from 'react-paginate';
import './paginationComp.css';

export default function PaginationComp({ totalItem, itemsPerPage, onPageClick, page }) {
  const pageCount = Math.ceil(totalItem / itemsPerPage);

  return (
    <ReactPaginate
      previousLabel='<'
      nextLabel='>'
      breakLabel='...'
      breakClassName='pagination__break'
      breakLinkClassName='pagination__break-link'
      pageCount={pageCount}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      containerClassName='pagination__container'
      pageClassName='pagination__pages'
      pageLinkClassName='pagination__page__hovered'
      activeClassName='pagination__page__selected'
      previousClassName='pagination__prev'
      previousLinkClassName='pagination__prev__hovered'
      nextClassName='pagination__next'
      nextLinkClassName='pagination__next__hovered'
      forcePage={page - 1}
      hrefBuilder={(page, pageCount) => (page >= 1 && page <= pageCount ? `/page/${page}` : '#')}
      hrefAllControls
      onClick={(clickEvent) => {
        if (clickEvent.nextSelectedPage !== undefined) {
          onPageClick(clickEvent.nextSelectedPage + 1);
        }
      }}
    />
  );
}
