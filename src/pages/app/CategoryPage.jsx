/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import ResultsSection from '../../components/shared/resultsbox/ResultsSection';
import { GET_CATEGORY_BY_NAME } from '../../graphql/query/extra.query';

export default function CategoryPage(props) {
  let navigate = useNavigate();
  const { category } = useParams();

  // GraphQl Request
  const [getCategoryData, { error: categoryDataError, data: categoryData }] = useLazyQuery(GET_CATEGORY_BY_NAME);

  // Auto scroll to top page for avoid mi screen bug with navigate/link
  useEffect(() => {
    if (!categoryData) window.scroll(0, 0);
  }, [categoryData]);

  useEffect(() => {
    // Fetch category data from GQL Request
    getCategoryData({ variables: { name: category } });

    // Redirect 404 if no category is found
    if (categoryData?.category === null) navigate('/404');
  }, [categoryData, category, navigate]);

  return (
    <div className='container mx-auto pt-24 min-h-screen'>
      <div className='flex flex-col justify-center items-center py-12'>
        <h2>Activités {category}</h2>
        <p>Se depenser en s’amuser, rien de mieux pour lier le plaisir et la santé en famille </p>
      </div>

      {categoryData ? (
        <ResultsSection key={categoryData.category._id} categoryId={categoryData.category._id} categoryName={categoryData.category.name} />
      ) : (
        categoryDataError && <p className='text-red-500 col-span-full text-xl'>Erreur lors du chargement des événements...</p>
      )}
    </div>
  );
}
