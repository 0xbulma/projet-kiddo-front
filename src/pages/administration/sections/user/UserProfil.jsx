import { useState } from 'react';
import { useQuery } from '@apollo/client';

import * as gqlQueryRequest from '../../../../graphql/query/users.query';

export default function UserProfil(userId) {
  const [user, setUser] = useState();

  /*const [getUser, { variables: 'toto'} = useQuery(gqlQueryRequest.GET_BY_ID, {
    onCompleted: (data) => console.log(data),
    onError: (err) => console.log(JSON.stringify(err, null, 4)),
  });*/

  return (
    <div>
      <h3>GetUserById : {user}</h3>
    </div>
  );
}
