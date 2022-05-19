import * as React from 'react';
import { render } from '@testing-library/react';
import RadioWidget from "./radioWidget";

import fetchMock from "fetch-mock";



//Test for to render the acces to the component and data.


describe('<RadioWidget />', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  
  test('Verify if radios are retrieved from loaction', async () => {
    const radios = [
        {radioName: 'Putin FM'},
        {name: 'Dribbble FM'},
        {name: 'Doge FM'},
        {name: 'Ballads FM'},
        {name: 'Maximum FM'}
    ];
    fetchMock.mock('http://localhost:3000/radios', {
        body: radios,
        status: 200
    });

    
   });

   
  
  it('shows initial messages', () => {
    const {container} = render(<RadioWidget/>);
    expect(container.innerHTML).toMatch("Loading");
  });

  
});