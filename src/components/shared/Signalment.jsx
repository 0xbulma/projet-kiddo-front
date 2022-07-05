import { useQuery, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { ADD_SIGNALMENT } from '../../graphql/mutation/comments.mutation';
import { GET_SIGNALMENTS_LIST } from '../../graphql/query/extra.query';

function CommentSignalment(props) {
  const { user, comment } = props;

  const [reason, setReason] = useState();
  const [reasonList, setReasonList] = useState([]);

  const { data: reasons } = useQuery(GET_SIGNALMENTS_LIST);

  useEffect(() => {
    if (reasons) {
      setReasonList(reasons.signalments);
    }
  }, [reasons]);

  const [sendSignalment, { data }] = useMutation(ADD_SIGNALMENT);

  useEffect(() => {
    if (reasons) {
      setReasonList(reasons.signalments);
    }
    if (data) {
      console.log('Send signalment : ', data);
    }
  }, [reasons, data]);

  return (
    <>
      <section className='flex flex-col'>
        <h2 className='font-bold text-lg mb-5'>Sigmalement de commentaire</h2>
        <span>Utilisateur concerné : {comment.sender.first_name}</span>
        <p className='select-none bg-gray-300 p-4 rounded-md border-2 shadow-lg my-5'>{comment.content.message}</p>
        <select name='select' id='select' onChange={(e) => setReason(e.currentTarget.value)}>
          {reasonList.map((item, index) => (
            <option key={index} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
        <button
          className='bg-red-500 py-5 px-3 rounded-full mt-5'
          onClick={() =>
            sendSignalment({
              variables: {
                input: {
                  _id: comment._id,
                  signalments: [
                    {
                      signalment: reason,
                      sender: user._id,
                    },
                  ],
                },
              },
            })
          }>
          Envoyer le signalement
        </button>
      </section>
    </>
  );
}

export default CommentSignalment;
