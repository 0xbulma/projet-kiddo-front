import ReactPaginate from 'react-paginate';
import './paginationComp.css';

export default function PaginationComp({
  totalItem,
  itemsPerPage,
  onPageClick,
  page,
}) {
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
      pageClassName='pagination__page'
      pageLinkClassName='pagination__link'
      previousClassName='pagination__prevnext'
      previousLinkClassName='pagination__prevnext-link'
      nextClassName='pagination__prevnext'
      nextLinkClassName='pagination__prevnext-link'
      activeClassName='pagination__active'
      forcePage={page - 1}
      // eslint-disable-next-line no-unused-vars
      hrefBuilder={(page, pageCount, selected) =>
        page >= 1 && page <= pageCount ? `/page/${page}` : '#'
      }
      hrefAllControls
      onClick={clickEvent => {
        if (clickEvent.nextSelectedPage !== undefined) {
          console.log('page', page);
          console.log('nextselect', clickEvent.nextSelectedPage);
          onPageClick(clickEvent.nextSelectedPage + 1);
        }
      }}
    />
  );
}
