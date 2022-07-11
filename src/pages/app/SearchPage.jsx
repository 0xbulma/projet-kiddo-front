/* eslint-disable react-hooks/exhaustive-deps */
import { useSearchParams } from 'react-router-dom';
import ResultsSection from '../../components/shared/resultsbox/ResultsSection';

export default function SearchPage(props) {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();


  return (
    <div className='container mx-auto pt-28 min-h-screen'>
      <div className='flex flex-col justify-center items-center py-12'>
        <h2>Recherche d'activités</h2>
         <p>Mots-clés renseignés : {searchParams.get('q')}</p>
      </div>

      <ResultsSection searchInput={searchParams.get('q')} />
    </div>
  );
}
