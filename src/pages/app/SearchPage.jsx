/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router';
import ResultsSection from '../../components/shared/resultsbox/ResultsSection';

export default function SearchPage(props) {
  const { params } = useParams();

  const toto = true;
  const totoError = null;

  console.log('Search params :', params);

  return (
    <div className="container mx-auto pb-10">
      <div className="flex flex-col justify-center items-center py-12">
        <h2>Recherche d'activités</h2>
        <p>Barre de recherche : {params}</p>
      </div>

      {toto ? (
        <ResultsSection searchInput={params} />
      ) : (
        totoError && (
          <p className="text-red-500 col-span-full text-xl">
            Erreur lors de la recherche des événements...
          </p>
        )
      )}
    </div>
  );
}
