import React from 'react';

import NavBar from '../../components/administration/Navbar';

export default function AdminLayout({ composant }) {
  console.log(composant);
  return (
    <>
      <NavBar />
      {composant}
    </>
  );
}
