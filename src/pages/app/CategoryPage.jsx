import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// import custom components
import { GET_CATEGORY_BY_NAME } from '../../graphql/query/extra.query';
import ResultsSection from '../../components/shared/resultsbox/ResultsSection';

//import CSS
import './categoryPage.css';

function CategoryPage(props) {
  let navigate = useNavigate();
  const { category } = useParams();

  const [dataCatId, setDataCatId] = useState();
  const [dataCatName, setDataCatName] = useState();

  // GraphQl Request
  const [getCategoryData, { data: categoryData }] = useLazyQuery(GET_CATEGORY_BY_NAME);

  useEffect(() => {
    getCategoryData({ variables: { name: category } });
    if (categoryData?.category === null) {
      navigate('/404');
    }
  }, [categoryData, navigate, category, getCategoryData]);

  useEffect(() => {
    if (categoryData) {
      setDataCatId((d) => categoryData.category._id);
      setDataCatName((d) => categoryData.category.name);
    }
  }, [categoryData, dataCatId]);

  return (
    <div className='container mx-auto pb-10'>
      <div className='category'>
        <h1 className='category__title'>Activités {category}</h1>
        <p className='category__subtitle'>Se depenser en s’amuser, rien de mieux pour lier le plaisir et la santé en famille </p>
      </div>

      <ResultsSection key={dataCatId} categoryId={dataCatId} categoryName={dataCatName} />
    </div>
  );
}

export default CategoryPage;
