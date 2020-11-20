import React, { createContext, useReducer, useEffect } from 'react';
import { dataReducer } from '../reducer/dataReducer';


export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [datas, dispatch] = useReducer(dataReducer, [], () => {
    const localData = localStorage.getItem('datas');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('datas', JSON.stringify(datas));
  }, [datas]);
  return (
    <DataContext.Provider value={{ datas, dispatch }}>
      {props.children}
    </DataContext.Provider>
  );
}
 
export default DataContextProvider;