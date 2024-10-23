import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from './features/ThunkSlice';

export default function ReduxThunk() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  const record = useSelector((state) => state.apiKey);
console.log(record);

  return (
    <div>
      {record.loading && <p>Loading...</p>}
      {record.data &&
        record.data.map((e, i) => {
          return (
            <ul key={i}>
              <li>{e.title}</li>
              <li>{e.price}</li>
            </ul>
          );
        })}
    </div>
  );
}
