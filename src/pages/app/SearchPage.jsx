/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router';
import ResultsSection from '../../components/shared/resultsbox/ResultsSection';

export default function SearchPage(props) {
  const { searchParams } = useParams();

  return (
    <div className='container mx-auto pt-28 min-h-screen'>
      <div className='flex flex-col justify-center items-center py-12'>
        <h2>Recherche d'activités</h2>
        {searchParams.get('q')?.length > 0 && <p>Mots-clés renseignés : {searchParams.get('q')}</p>}
        {!searchParams.get('q') && <p>Tous les évènements</p>}
      </div>

      {searchParams ? (
        <ResultsSection searchInput={searchParams} />
      ) : (
        <p className='text-red-500 col-span-full text-xl'>Erreur lors de la recherche des événements...</p>
      )}
    </div>
  );
}
