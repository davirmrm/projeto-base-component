import React, { useEffect } from 'react';
import { useState } from 'react';
import style from './tab.module.scss';

export const Tab = ({ 
  data=[], 
  tabSelect = '', 
  actionTab=()=> null, 
  type='', 
  cy=''
}) => {
  const [tabState, setTabState] = useState([]);
  const [tabStateId, setTabStateId] = useState("");
  useEffect(() => {
    if (data) {
      const selectTab = data.filter(
        (e) => e.id === (tabSelect ? tabSelect : data[0].id)
      );
      if (selectTab.length) {
        setTabState(selectTab[0].content);
        setTabStateId(selectTab[0].id);
      }
    }
  }, [data]);

  return (
    <div 
    className={type === 'box' ? style['box-tab'] : style['custom-tab']}
    data-cy={`${type}Tab${cy}FullContainer`}
    >
      <div 
      className={style["tab-head"]}
      data-cy={`${type}Tab${cy}Header`}
      >
        {data?.map((e) => (
          <div
            key={e.id}
            className={e.id === tabStateId ? style.active : ''}
            onClick={() => [
              setTabStateId(e.id),
              setTabState(e.content),
              actionTab(e),
            ]}
            data-cy={`Tab${e.id}ClickShow${cy}`}
          >
            {e.title}
          </div>
        ))}
      </div>
      <div 
      className={style["tab-content"]}
      data-cy={`${type}Tab${cy}ContentContainer`}
      >{tabState}</div>
    </div>
  );
};
