import { Dispatch, SetStateAction } from 'react';

export interface CheckTypes {
  prevCheck?: boolean;
  nextCheck?: boolean;
}
export interface NextPageProps {
  setNextPageCheck: Dispatch<SetStateAction<boolean>>;
}
