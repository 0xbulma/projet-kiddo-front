/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router';
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
  const { data: comments, refetch } = useQuery(GET_BY_TARGET_ID, {
    variables: { type: commentTarget, id: targetID },
  });

  // Fonction utilisé pour charger à nouveau les commentaires pour les fonctions enfants
  const refetchComments = () => refetch();

  console.log('Comments : ', comments);

  return (
    <div>
      <section className='container mx-auto px-10 max-h-[50rem] overflow-y-auto'>
        <h2 className='font-medium text-4xl mt-5'>{sectionName}</h2>
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
  const navigate = useNavigate();
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
      <article className='flex items-start mt-5'>
        {/* SECTION: Image de profil */}
        <div className='shrink-0 z-10'>
          <img
            src={
              comment.sender.profil_picture !== undefined && comment.sender.profil_picture !== null ? comment.sender.profil_picture : BlankProfilPic
            }
            alt=''
            width='80px'
            className='transition-all hover:scale-105 mr-3 rounded-full'
            onClick={() => navigate(`../user/${comment.sender._id}`)}
          />
        </div>
        {/* FIN SECTION: Image de profil */}
        <article className='bg-kiddoSection grow rounded-lg flex flex-col p-2 shadow-sm shadow-kiddoShadow'>
          {/* SECTION: Nom + Prénom et affichage date */}
          <div className='pt-2 ml-3 flex justify-between'>
            <p className='font-medium'>
              {comment.sender.first_name === null && comment.sender.last_name === null && comment.sender.email}
              {comment.sender.first_name !== null && comment.sender.last_name === null && comment.sender.first_name}
              {comment.sender.first_name === null && comment.sender.last_name !== null && comment.sender.last_name}
              {comment.sender.first_name !== null && comment.sender.last_name !== null && comment.sender.first_name + ' ' + comment.sender.last_name}
            </p>
            <p className='mr-3 font-thin text-sm'>{new Date(comment.created_at).toLocaleString().replace(' ', ' à ')}</p>
          </div>
          {/* FIN SECTION: Nom + Prénom et affichage date */}
          <p className='p-3 break-all overflow-hidden max-h-52'>{comment.content.message}</p>
          <div className='relative pt-2 ml-3 flex justify-end mr-3 pb-2'>
            <p
              className='absolute left-0 font-medium text-kiddoLightGray select-none transition-all cursor-pointer hover:text-kiddoOrange hover:underline'
              onClick={toggleResponding}>
              Répondre
            </p>
            {/* SECTION: Supprimer un message */}
            {canManageComment(user, comment) && (
              <>
                <ReactTooltip effect='solid' place='top' />
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className='mx-2 text-red-600 hover:scale-125 transition-all cursor-pointer  select-none'
                  data-tip='Supprimer ce commentaire'
                  onClick={() => removeComment({ variables: { _id: comment._id } })}
                />
              </>
            )}
            {/* FIN SECTION: Supprimer un message */}
            {/* SECTION: Signaler - Aimer */}
            <ReactTooltip effect='solid' place='top' />
            <FontAwesomeIcon
              icon={faFlag}
              className='mx-2 hover:text-kiddoYellow hover:scale-105 transition-all cursor-pointer  select-none'
              data-tip='Signaler ce commentaire'
              onClick={toggleModal}
            />

            <ReactTooltip effect='solid' place='top' />
            <FontAwesomeIcon
              icon={faHeart}
              className='ml-2  hover:text-red-600 hover:scale-105 transition-all cursor-pointer  select-none'
              data-tip='Aimer ce commentaire'
            />
            {/* FIN SECTION: Répondre - Signaler - Aimer */}
          </div>

          {/* MODAL : Signalement */}
          <ModalBackdrop composant={<CommentSignalment user={user} comment={comment} />} open={modal} onClose={toggleModal} />
        </article>
      </article>

      {/* Option: Masquer les réponses */}
      {comment.child != null && comment.child.length > 0 && !hiddingResponse && (
        <p className='ml-24 mt-2 cursor-pointer text-fuchsia-800 hover:text-fuchsia-700 font-medium transition-all' onClick={toggleHiddingResponse}>
          <span className='mr-2'>▲</span>
          Masquer {comment.child.length > 1 ? 'les ' + comment.child.length + ' réponses' : 'la réponse'}
        </p>
      )}
      {/* Option: Afficher les réponses */}
      {comment.child != null && comment.child.length > 0 && hiddingResponse && (
        <p className='ml-24 mt-2 cursor-pointer text-fuchsia-800 hover:text-fuchsia-700 font-medium transition-all ' onClick={toggleHiddingResponse}>
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
                <img
                  src={
                    comment.sender.profil_picture !== undefined && comment.sender.profil_picture !== null
                      ? comment.sender.profil_picture
                      : BlankProfilPic
                  }
                  alt=''
                  width='60px'
                  className='transition-all hover:scale-105 mr-3 rounded-full'
                  onClick={() => navigate(`../user/${comment.sender._id}`)}
                />
              </div>
              {/* FIN SECTION: Image de profil */}
              <article className='bg-kiddoSection grow rounded-lg flex flex-col p-2 shadow-sm shadow-kiddoShadow'>
                {/* SECTION: Nom + Prénom et affichage date */}
                <div className='pt-2 ml-3 flex justify-between'>
                  <p className='font-medium'>
                    {comment.sender.first_name === null && comment.sender.last_name === null && comment.sender.email}
                    {comment.sender.first_name !== null && comment.sender.last_name === null && comment.sender.first_name}
                    {comment.sender.first_name === null && comment.sender.last_name !== null && comment.sender.last_name}
                    {comment.sender.first_name !== null &&
                      comment.sender.last_name !== null &&
                      comment.sender.first_name + ' ' + comment.sender.last_name}
                  </p>
                  <p className='mr-3 font-thin text-sm'>{new Date(comment.created_at).toLocaleString().replace(' ', ' à ')}</p>
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
                    icon={faFlag}
                    className='mx-2 hover:text-kiddoYellow hover:scale-105 transition-all cursor-pointer  select-none'
                    data-tip='Signaler ce commentaire'
                    onClick={toggleModal}
                  />

                  <ReactTooltip effect='solid' place='top' />
                  <FontAwesomeIcon
                    icon={faHeart}
                    className='ml-2  hover:text-red-600 hover:scale-105 transition-all cursor-pointer  select-none'
                    data-tip='Aimer ce commentaire'
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
        ((parentId === undefined || parentId === null) && ' sticky bottom-0 mt-10 mb-5 pt-5 border-t-2 border-kiddoSection -mx-5 px-10 bg-white z-10')
      }>
      <article className='flex items-center mt-5'>
        {parentId !== undefined && parentId !== null ? (
          <div className='shrink-0 flex items-center'>
            <span className='child-comment-dot z-0 bg-kiddoYellow animate-pulse'></span>
            <img
              src={user.profil_picture !== undefined && user.profil_picture !== undefined ? user.profil_picture : BlankProfilPic}
              alt=''
              width='60px'
              className='rounded-full -mt-4 mr-10'
            />
          </div>
        ) : (
          <img
            src={user.profil_picture !== undefined && user.profil_picture !== undefined ? user.profil_picture : BlankProfilPic}
            alt=''
            width='75px'
            className='rounded-full -mt-4'
          />
        )}
      </article>
      <article className='bg-kiddoSection ml-2 w-full rounded-lg flex flex-col justify-center shadow-sm shadow-kiddoShadow'>
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
          className='ml-4 p-2 rounded-full text-xl kiddoSection shadow-md shadow-kiddoShadow border-2 hover:scale-105 transition-all cursor-pointer select-none'
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
