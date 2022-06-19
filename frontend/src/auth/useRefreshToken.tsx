import axios from 'axios';
import * as React from 'react';

export interface IuseRefreshTokenProps {
}

export function useRefreshToken(props: IuseRefreshTokenProps) {
  const response = axios.get('http://localhost:3000/job-offers/');

  return (
    <div>

    </div>
  );
}
