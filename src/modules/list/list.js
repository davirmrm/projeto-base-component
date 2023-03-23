import React, { useEffect, useState } from 'react';
import style from './list.module.scss';

export const List = ({
  header=[],
  data=[],
  listCustom = () => null,
  noData = 'Sem informação',
  cy=''
}) => {
  const [listState, setListState] = useState([]);

  useEffect(()=>{
    setListState(data)
  }, [data])
  
  return (
    <div className={style["box-scrool"]}>
      <table className={style["list-box"]} data-cy={`Table${cy}`}>
        <thead>
          <tr data-cy={`Table${cy}Header`}>
            {header?.map((head) => {
              return (
                <td className={style[head.className]} key={head.column} data-cy={`Table${cy}HeaderColumn[${head.column}]`}>
                  {head.text}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            listState?.map((container, i) => {
              listCustom(container, i, data);
              return (
                <tr key={container.id ? container.id : i} data-cy={`Table${cy}Row[${i}]`}>
                  {header.map((head) => {
                    return (
                      <td
                        className={style[head.className]}
                        key={`${container.id ? container.id : i}-${
                          head.column
                        }`}
                        data-cy={`Table${cy}Row[${i}]Column[${head.column}]`}
                      >
                        {container[head.column]
                          ? container[head.column]
                          : ''}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={header?.length} className={style["text-center"]} data-cy={`Table${cy}NoData`}>
                {noData}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
