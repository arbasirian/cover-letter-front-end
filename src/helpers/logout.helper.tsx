import React from 'react';
import { CookiesHelper } from 'helpers';

const handleLogout = () => {
  const cookies = new CookiesHelper();
  cookies.removeAll();

  // Todo Handle Empty Store
};

export default handleLogout;
