/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';

import { useEffect, useState } from 'react';
import useToggle from '../../hooks/useToggle';
import { Link } from 'react-router-dom';

import ReactTooltip from 'react-tooltip';
// import CustomInput from '../administration/CustomInput';

import * as CommentsMutation from '../../graphql/mutation/comments.mutation';
import { GET_BY_EMAIL } from '../../graphql/query/users.query';
import { GET_BY_TARGET_ID } from '../../graphql/query/comments.query';

import useAuthContext from '../../hooks/useAuthContext';

import ModalBackdrop from './modal/ModalBackdrop';

//Import asset
import BlankProfilPic from '../../assets/admin/blank_profil_pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faHeart, faFlag, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import CommentSignalment from './Signalment';

//commentTarget = 0 > user | 1 > event | 2 > article
//targetId = userId ou eventId ou articleID
//sectionName = Texte affiché dans l'entête de la section
export default function CommentSection({ commentTarget, targetID, sectionName }) {
  const { email } = useAuthContext();
  const [getActiveUser, { loading, error, data: activeUser }] = useLazyQuery(GET_BY_EMAIL);

  useEffect(() => {
    if (!activeUser) {
      getActiveUser({ variables: { email } });
    }
  }, [email]);

  // Chargement des commentaires depuis Mongo
  const { data: comments, refetch } = useQuery(GET_BY_TARGET_ID, { variables: { type: commentTarget, id: targetID } });

  // Fonction utilisé pour charger à nouveau les commentaires pour les fonctions enfants
  const refetchComments = () => refetch();

  return (
    <div>
      <section className='container mx-auto px-10 max-h-[50rem] overflow-y-auto'>
        <h2 className='font-bold text-2xl mt-5'>{sectionName}</h2>
        {activeUser &&
          comments &&
          comments.getByTargetId.map((comment, index) => {
            return (
              comment.parent === null && (
                <Comment
                  key={index}
                  user={activeUser.getUserByEmail}
                  comment={comment}
                  commentTarget={commentTarget}
                  targetID={targetID}
                  refetchComments={refetchComments}
                />
              )
            );
          })}

        {/* SECTION TEMPORAIRE: Chargement utilisateur */}
        {loading && <p>Chargement de l'utilisateur...</p>}
        {activeUser !== undefined && (
          <WriteComment user={activeUser.getUserByEmail} commentTarget={commentTarget} targetID={targetID} refetchComments={refetchComments} />
        )}
        {error !== undefined && <p>Erreur lors du chargement de l'utilisateur</p>}
      </section>
    </div>
  );
}

function Comment({ user, comment, refetchComments, commentTarget, targetID }) {
  const [hiddingResponse, toggleHiddingResponse] = useToggle(false);
  const [isResponding, toggleResponding] = useToggle(false);

  const [removeComment, { called, data }] = useMutation(CommentsMutation.REMOVE_COMMENT);

  const [modal, toggleModal] = useToggle(false);

  useEffect(() => {
    if (called && data) {
      refetchComments();
    }
  }, [data]);

  return (
    <section className='flex flex-col mt-5'>
      <article className='flex items-center mt-5'>
        {/* SECTION: Image de profil */}
        <div className='shrink-0 z-10'>
          <Link to={'../user/' + comment.sender._id}>
            <img
              src={
                comment.sender.profil_picture !== undefined && comment.sender.profil_picture.thumbnail !== null
                  ? comment.sender.profil_picture.thumbnail
                  : BlankProfilPic
              }
              alt=''
              width='60px'
              className='transition-all hover:scale-105 mr-3 rounded-full'
            />
          </Link>
        </div>
        {/* FIN SECTION: Image de profil */}
        <article className='bg-gray-300 grow rounded-lg flex flex-col '>
          {/* SECTION: Nom + Prénom et affichage date */}
          <div className='pt-2 ml-3 flex justify-between'>
            <p className='font-bold'>
              {comment.sender.first_name} {comment.sender.last_name}
            </p>
            <p className='mr-3 font-thin'>{new Date(comment.created_at).toLocaleString().replace(' ', ' à ')}</p>
          </div>
          {/* FIN SECTION: Nom + Prénom et affichage date */}
          <p className='p-3 break-all overflow-hidden max-h-52'>{comment.content.message}</p>
          <div className='pt-2 ml-3 flex justify-end mr-3 pb-2'>
            {/* SECTION: Supprimer un message */}
            {canManageComment(user, comment) && (
              <>
                <ReactTooltip effect='solid' place='top' />
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className='mr-2 text-red-600 hover:scale-125 transition-all cursor-pointer  select-none'
                  data-tip='Supprimer ce commentaire'
                  onClick={() => removeComment({ variables: { _id: comment._id } })}
                />
              </>
            )}
            {/* FIN SECTION: Supprimer un message */}
            {/* SECTION: Répondre - Signaler - Aimer */}
            <p
              className='font-bold mr-2 -mt-1 bg-gray-200 px-2 rounded-full select-none hover:text-gray-200 hover:bg-gray-700 transition-all cursor-pointer'
              onClick={toggleResponding}>
              Répondre
            </p>

            <ReactTooltip effect='solid' place='top' />
            <FontAwesomeIcon
              icon={faFlag}
              className='mr-3 hover:text-gray-800 hover:scale-125 transition-all cursor-pointer  select-none'
              data-tip='Signaler ce commentaire'
              onClick={toggleModal}
            />

            <ReactTooltip effect='solid' place='top' />
            <FontAwesomeIcon
              icon={faHeart}
              className='mr-1  hover:text-red-600 hover:scale-125 transition-all cursor-pointer  select-none'
              data-tip='Aimer ce commentaire'
            />
            <span className='-mt-1'>0</span>
            {/* FIN SECTION: Répondre - Signaler - Aimer */}
          </div>

          {/* MODAL : Signalement */}
          <ModalBackdrop composant={<CommentSignalment user={user} comment={comment} />} open={modal} onClose={toggleModal} />
        </article>
      </article>

      {/* Option: Masquer les réponses */}
      {comment.child != null && comment.child.length > 0 && !hiddingResponse && (
        <p className='ml-24 mt-2 cursor-pointer hover:text-fuchsia-600 transition-all' onClick={toggleHiddingResponse}>
          <span className='mr-2'>▲</span>
          Masquer {comment.child.length > 1 ? 'les ' + comment.child.length + ' réponses' : 'la réponse'}
        </p>
      )}
      {/* Option: Afficher les réponses */}
      {comment.child != null && comment.child.length > 0 && hiddingResponse && (
        <p className='ml-24 mt-2 cursor-pointer hover:text-fuchsia-400 transition-all' onClick={toggleHiddingResponse}>
          <span className='mr-2'>▼</span>
          Afficher {comment.child.length > 1 ? 'les ' + comment.child.length + ' réponses' : 'la réponse'}
        </p>
      )}

      {/* SECTION: Afficher les réponses*/}
      {comment.child != null &&
        !hiddingResponse &&
        comment.child.map((comment, index) => {
          return (
            <article key={index} className='flex items-center mt-5 ml-5'>
              <div className='shrink-0 flex items-center'>
                {/* SECTION: Image de profil */}
                <span className='child-comment-dot z-0'></span>
                <Link to={'../user/' + comment.sender._id}>
                  <img
                    src={
                      comment.sender.profil_picture !== undefined && comment.sender.profil_picture.thumbnail !== null
                        ? comment.sender.profil_picture.thumbnail
                        : BlankProfilPic
                    }
                    alt=''
                    width='60px'
                    className='transition-all hover:scale-105 mr-3 rounded-full'
                  />
                </Link>
              </div>
              {/* FIN SECTION: Image de profil */}
              <article className='bg-gray-300 grow rounded-lg flex flex-col '>
                {/* SECTION: Nom + Prénom et affichage date */}
                <div className='pt-2 ml-3 flex justify-between'>
                  <p className='font-bold'>
                    {comment.sender.first_name} {comment.sender.last_name}
                  </p>
                  <p className='mr-3 font-thin'>{new Date(comment.created_at).toLocaleDateString('fr')}</p>
                </div>
                {/* FIN SECTION: Nom + Prénom et affichage date */}
                <p className='p-3 break-all overflow-hidden max-h-52'>{comment.content.message}</p>
                <div className='pt-2 ml-3 flex justify-end mr-3 pb-2'>
                  {/* SECTION: Suppression message */}
                  {canManageComment(user, comment) && (
                    <>
                      <ReactTooltip effect='solid' place='top' />
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className='mr-2 text-red-600 hover:scale-125 transition-all cursor-pointer select-none'
                        data-tip='Supprimer ce commentaire'
                        onClick={() => removeComment({ variables: { _id: comment._id } })}
                      />
                    </>
                  )}
                  {/* FIN SECTION: Suppression message */}
                  {/* SECTION: Répondre - Signaler - Aimer */}
                  <ReactTooltip effect='solid' place='top' />
                  <FontAwesomeIcon
                    icon={faHeart}
                    className='mr-2 hover:text-red-600 hover:scale-125 transition-all cursor-pointer  select-none'
                    data-tip='Aimer ce commentaire'
                  />

                  <ReactTooltip effect='solid' place='top' />
                  <FontAwesomeIcon
                    icon={faFlag}
                    className='mr-2 hover:text-gray-800 hover:scale-125 transition-all cursor-pointer  select-none'
                    data-tip='Signaler ce commentaire'
                    onClick={toggleModal}
                  />
                  {/* FIN SECTION: Répondre - Signaler - Aimer */}
                </div>
              </article>
            </article>
          );
        })}

      {isResponding && (
        <WriteComment
          user={user}
          parent={comment._id}
          commentTarget={commentTarget}
          targetID={targetID}
          refetchComments={refetchComments}
          toggleResponding={toggleResponding}
        />
      )}
    </section>
  );
}

function WriteComment({ user, parent, commentTarget, targetID, refetchComments, toggleResponding }) {
  const [areaValue, setAreaValue] = useState();
  const [icon] = useState(faPaperPlane);

  //Forcer le undefined pour un enregistrement.
  const parentId = parent !== undefined && parent !== null ? parent : undefined;

  const getTargetKey = () => {
    switch (commentTarget) {
      case 0:
        return 'target_user';
      case 1:
        return 'target_event';
      case 2:
        return 'target_article';
      default:
        return '';
    }
  };

  const requestVariables = {
    input: {
      parent: parentId,
      [getTargetKey()]: targetID,
      sender: user._id,
      content: {
        message: areaValue,
      },
    },
  };

  const [createComment, { called, data }] = useMutation(CommentsMutation.CREATE_COMMENT);

  useEffect(() => {
    if (called && data) {
      if (toggleResponding !== undefined) toggleResponding();
      refetchComments();
      setAreaValue('');
    }
  }, [data]);

  return (
    <section
      className={
        'flex mx-5 mt-5 ' +
        ((parentId === undefined || parentId === null) && ' sticky bottom-0 mt-10 mb-5 pt-5 border-t-2 border-gray-500 -mx-5 px-10 bg-white z-10')
      }>
      <article className='flex items-center mt-5'>
        {parentId !== undefined && parentId !== null ? (
          <div className='shrink-0 flex items-center'>
            <span className='child-comment-dot z-0 bg-gray-500 animate-pulse'></span>
            <img
              src={user.profil_picture !== undefined && user.profil_picture.thumbnail !== undefined ? user.profil_picture.thumbnail : BlankProfilPic}
              alt=''
              width='60px'
              className='rounded-full -mt-4 mr-4'
            />
          </div>
        ) : (
          <img
            src={user.profil_picture !== undefined && user.profil_picture.thumbnail !== undefined ? user.profil_picture.thumbnail : BlankProfilPic}
            alt=''
            width='75px'
            className='rounded-full -mt-4'
          />
        )}
      </article>
      <article className='bg-gray-300 ml-2 w-full rounded-lg flex flex-col justify-center'>
        <textarea
          name='message'
          id='message'
          placeholder='Laisser un commentaire'
          className='p-4 bg-transparent rounded-b-lg overflow-hidden border-0 focus:ring-0'
          value={areaValue}
          onChange={(e) => setAreaValue(e.currentTarget.value)}
        />
      </article>
      <article className='self-center'>
        <FontAwesomeIcon
          icon={icon}
          className='ml-4 p-2 rounded-full text-xl bg-gray-300 border-gray-400 border-2 hover:scale-105 transition-all cursor-pointer select-none'
          onClick={() => createComment({ variables: requestVariables })}
        />
      </article>
    </section>
  );
}

function canManageComment(activeUser, comment) {
  if (activeUser._id !== undefined && comment.sender._id !== undefined) {
    if (activeUser._id === comment.sender._id) return true;
    else return activeUser.rank === 'MODERATOR' || activeUser.rank === 'ADMINISTRATOR';
  }

  return false;
}
