import React from 'react';

import NavBar from '../../components/administration/Navbar';

export default function AdminLayout({ composant }) {
  return (
    <>
      <NavBar />
      {composant}
    </>
  );
}
