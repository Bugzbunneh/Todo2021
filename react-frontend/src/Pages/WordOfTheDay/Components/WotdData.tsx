import React from 'react';
import { IWordData } from '../Interfaces/IWordOfTheDay';

interface IProps {
  data: IWordData;
}
export const WotdData: React.FC<IProps> = ({ data }) => {
  return (
    <div>
      <p>{data.word}</p>
      <p>{data.results.definition}</p>
    </div>
  );
};
