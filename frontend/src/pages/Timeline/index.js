import React from 'react';

import Menu from '../../components/Menu'

/* import { useAuth } from '../../hooks/Auth';
 */
function Timeline() {
/*   const { userData, signOut } = useAuth();
  const { user } = userData; */

  return (
    <>
      <Menu/>
      <button type="button">
        Logout
      </button>
    </>
  );
}

export default Timeline;
