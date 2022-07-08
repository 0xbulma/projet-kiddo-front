/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router';
import ResultsSection from '../../components/shared/resultsbox/ResultsSection';

export default function SearchPage(props) {
  const { params } = useParams();

  return (
    <div className='container mx-auto pt-28 min-h-screen'>
      <div className='flex flex-col justify-center items-center py-12'>
        <h2>Recherche d'activités</h2>
        <p>Mots-clés renseignés : {params}</p>
      </div>

      {params ? (
        <ResultsSection searchInput={params} />
      ) : (
        <p className='text-red-500 col-span-full text-xl'>Erreur lors de la recherche des événements...</p>
      )}
    </div>
  );
}
