import React, { useEffect } from 'react';
import { useQuery} from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// import custom components
import { GET_CATEGORY_BY_NAME } from '../../graphql/query/extra.query';
import ResultsSection from '../../components/shared/resultssection/ResultsSection';

//import CSS
import './categoryPage.css';

function CategoryPage(props) {
  let navigate = useNavigate();
  const { category } = useParams();

  // Queries
  const {
    // loading: loading2,
    // error: error2,
    data: data2,
  } = useQuery(GET_CATEGORY_BY_NAME, { variables: { name: category } });

  useEffect(() => {
    if (data2?.category === null) {
      navigate('/404');
    }
  }, [data2, navigate]);

  return (
    <div className='container mx-auto'>
      <div className='category'>
        <h1 className='category__title'>Activités sportives</h1>
        <p className='category__subtitle'>
          Se depenser en s’amuser, rien de mieux pour lier le plaisir et la santé en famille{' '}
        </p>
      </div>

      {data2 && <ResultsSection category={data2} />}
    </div>
  );
}

export default CategoryPage;
