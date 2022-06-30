/* eslint-disable react-hooks/exhaustive-deps */
import { useLazyQuery, useQuery, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { GET_BY_EMAIL } from '../../graphql/query/users.query';
import { GET_BY_TARGET_ID } from '../../graphql/query/comments.query';
import CustomInput from '../administration/CustomInput';
import useToggle from '../../hooks/useToggle';

//Import asset
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faHeart, faFlag } from '@fortawesome/free-regular-svg-icons';
import BlankProfilPic from '../../assets/admin/blank_profil_pic.png';
import * as CommentsMutation from '../../graphql/mutation/comments.mutation';

export default function CommentSection(isEventComment, targetID) {
  const [email, setEmail] = useState();
  const [getUser, { called, loading, error, data }] = useLazyQuery(GET_BY_EMAIL);

  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  const { loading: loading1, error: error1, data: data1 } = useQuery(GET_BY_TARGET_ID, { variables: { type: 1, id: '62bdabddfc13ae63860012a2' } });

  if (!loading1 && data1 !== undefined && comments.length === 0) {
    if (data1.getByTargetId.length > 0) {
      console.log('SetComments : ', data1);
      setComments(data1.getByTargetId);
    }
  }

  // Comments > Trier par date
  // Map > Si le commentaire à un parent ne pas l'afficher
  // Map > Si le commentaire n'a pas de parent, on l'affiche
  // Dans ce commentaire afficher les enfants

  return (
    <div>
      {/* TEMP LOAD USER */}
      <div className='admin-section'>
        <span className='admin-section__title'>Charger un utilisateur : tfrid0@aol.com</span>
        <div className='flex justify-center align-middle content-center items-center'>
          <CustomInput label='Email' customWidth={'w-[20rem]'} setState={setEmail} />
          <button
            className='bg-green-500 py-2 px-3 rounded-md mt-8 hover:bg-green-400 transition-all'
            onClick={() => getUser({ variables: { email: email } })}>
            Charger
          </button>
        </div>
      </div>
      {/* END TEMP LOAD USER */}

      {data !== undefined &&
        comments.map((comment, index) => {
          return <Comment key={index} user={data.getUserByEmail} addComment={addComment} comment={comment} />;
        })}

      {!called && <p>Veuillez charger un utilisateur</p>}
      {called && loading && <p>Chargement de l'utilisateur...</p>}
      {data !== undefined && <WriteComment user={data.getUserByEmail} addComment={addComment} />}
      {error !== undefined && <p>Erreur lors du chargement de l'utilisateur</p>}
    </div>
  );
}

function Comment({ user, addComment, comment }) {
  const commentId = comment._id;
  console.log('CommentID : ', comment._id);
  const sender = comment.sender;
  const content = comment.content;

  const [isResponding, toggleResponding] = useToggle(false);

  return (
    <section className='flex flex-col mt-5'>
      <article className='flex items-center mt-5'>
        <div className='shrink-0'>
          <img src={BlankProfilPic} alt='' width='60px' className='transition-all hover:scale-105 mr-3' />
        </div>
        <article className='bg-gray-300 grow rounded-lg flex flex-col '>
          <div className='pt-2 ml-3 flex justify-between'>
            <p className='font-bold'>
              {sender.first_name} {sender.last_name} {'Parent : ' + JSON.stringify(comment.parent)} {' | Child : ' + JSON.stringify(comment.child)}
            </p>
            <p className='mr-3 font-thin'>{new Date(comment.created_at).toLocaleDateString('fr')}</p>
          </div>
          <p className='p-3 break-all overflow-hidden max-h-52'>{content.message}</p>
          <div className='pt-2 ml-3 flex justify-end mr-3 pb-2'>
            <p
              className='font-bold mr-2 -mt-1 bg-gray-200 px-2 rounded-full select-none hover:text-gray-200 hover:bg-gray-700 transition-all cursor-pointer'
              onClick={toggleResponding}>
              Répondre
            </p>
            <ReactTooltip effect='solid' />
            <FontAwesomeIcon
              icon={faHeart}
              className='mr-2 hover:text-red-600 hover:scale-125 transition-all cursor-pointer'
              data-tip='Aimer ce commentaire'
            />
            <ReactTooltip effect='solid' />
            <FontAwesomeIcon
              icon={faFlag}
              className='mr-2 hover:text-gray-800 hover:scale-125 transition-all cursor-pointer'
              data-tip='Signaler ce commentaire'
            />
          </div>
        </article>
      </article>

      {isResponding && <WriteComment user={user} addComment={addComment} parentId={commentId} />}
    </section>
  );
}

function WriteComment({ user, addComment, parentId }) {
  const [areaValue, setAreaValue] = useState();
  const [icon] = useState(faPaperPlane); //setIcon

  console.log('ParentId: ', parentId);
  const finalParentId = parentId !== undefined ? parentId : undefined;

  const requestVariables = {
    input: {
      parent: finalParentId,
      target_event: '62bdabddfc13ae63860012a2',
      sender: user._id,
      content: {
        message: areaValue,
      },
    },
  };

  const [createComment, { called, loading, data }] = useMutation(CommentsMutation.CREATE_COMMENT);

  useEffect(() => {
    if (called && !loading && data !== undefined) {
      console.log('Data found : ', data);
      addComment(data.createComment);
    }
  }, [data]);

  return (
    <section className='flex mx-5 mt-5'>
      <article className=''>
        <img src={BlankProfilPic} alt='' width='75px' className='transition-all hover:scale-105' />
      </article>
      <article className='bg-gray-300 ml-2 w-full rounded-lg flex flex-col justify-center'>
        <textarea
          name='message'
          id='message'
          placeholder='Laisser un commentaire'
          className='p-4 bg-transparent rounded-b-lg overflow-hidden border-0 focus:ring-0'
          onChange={(e) => setAreaValue(e.currentTarget.value)}
        />
      </article>
      <article className='self-center'>
        <FontAwesomeIcon
          icon={icon}
          className='ml-4 p-2 rounded-full text-xl bg-gray-300 border-gray-400 border-2 hover:scale-105 transition-all cursor-pointer'
          onClick={() => createComment({ variables: requestVariables })}
        />
      </article>
    </section>
  );
}
