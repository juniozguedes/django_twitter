import React from 'react';

import { useAuth } from '../../hooks/Auth';

function Timeline() {
  const { userData, signOut } = useAuth();
  const { user } = userData;

  return (
    <>
      <h1>{user.username} timeline</h1>
      <button type="button" onClick={signOut}>
        Logout
      </button>
    </>
  );
}

export default Timeline;
