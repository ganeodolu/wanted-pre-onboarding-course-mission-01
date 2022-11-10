import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import API from 'src/lib/api';
import { keywordState } from 'src/lib/state';
import SuggestItem from './SuggestItem';

interface Item {
  "sickCd": string,
  "sickNm": string
}

function SearchSuggestion() {
  const keyword = useRecoilValue(keywordState);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [suggestList, setSuggestList] = useState<Item[]>([])

  useEffect(() => {
    const fetch = async () => {
      if (keyword === "") return
      const data = await API.getKeyword(keyword)
      console.log(data);
      setSuggestList(data)
    }
    fetch()
  }, [keyword])

  return (
    <div className="Suggestion">
      <ul>
        {suggestList.slice(0, 8).map((item: Item, idx: number) => {
          if(selectedIndex === idx) {
            return (
              <li className="Suggestion__item--selected" key={item.sickCd}>
                <SuggestItem item={item} key={item.sickCd} />
              </li>
            )
          } else {
            return (
              <li key={item.sickCd}>
                <SuggestItem item={item} key={item.sickCd} />
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default SearchSuggestion
