import { MockWordData } from 'Api/Mocks/WordOfTheDayData';
import React from 'react';
import { WotdData } from './Components/WotdData';

export const WordOfTheDayPage: React.FC = () => {
  React.useEffect(() => {
    (async () => {
      console.log('Here is the word data: ');
    })();
  }, []);

  return (
    <div>
      <h1>Word of the day!</h1>
      <WotdData data={MockWordData} />
      <button>Generate new word...</button>
    </div>
  );
};
