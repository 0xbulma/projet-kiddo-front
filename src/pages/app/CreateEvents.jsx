import React, { useState } from 'react'
import useAuthContext from '../../hooks/useAuthContext';

import ModalBackdrop from '../../components/shared/modal/ModalBackdrop';
import ModalRegisterLogin from '../../components/shared/modal/ModalRegisterLogin';

export default function CreateEvents() {
  const { isAuth } = useAuthContext();
  const [isModal, setIsModal] = useState();
  
  return (
    <div className='min-h-screen pt-28'>
      {
        isModal && (
          <ModalBackdrop composant={<ModalRegisterLogin closeModal={() => setIsModal(false)} />} open={isModal} onClose={() => setIsModal(false)} />
        )
      }
      {
        !isAuth ? (
          <div className='flex justify-center items-center'>
            <div className='text-center'>
              <h1 className='text-3xl font-bold'>Vous devez être connectés pour créer un event</h1>
              <div className="flex flex-row justify-between gap-x-2 md:-my-2 md:-mr-2 pt-10">
                <p className='text-lg'>
                  Connectez-vous pour créer un event
                </p>
                <button className='rounded ring-2 ring-sky-400 bg-kiddoSalmon py-2 px-5 hover:scale-125' onClick={() => setIsModal(true)}>
                  Se connecter
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex justify-center items-center'>
            <div className='text-center'>
              <h1 className='text-3xl font-bold'>Create Event</h1>
            </div>
          </div>
        ) 
      }
    </div>
  )
}