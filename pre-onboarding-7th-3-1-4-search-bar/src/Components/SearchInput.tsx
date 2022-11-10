import React from 'react';
import { useRecoilState } from 'recoil';
import { keywordState } from 'src/lib/state';
import { makeBoldMatchedString } from "src/lib/util";

function SearchInput() {
  const [keyword, setKeyword] = useRecoilState(keywordState);

  const changeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  // console.log(makeBoldMatchedString("낭", "낭 랑낭랑낭"));


  return (
    <div>
      <form className="SearchInput">
        <input className="SearchInput__input" type="text" 
        placeholder="질환명을 입력해 주세요." 
        onChange={changeKeyword} 
        // onKeyUp={}  
        autoFocus 
        />
      </form>
    </div>
  )
}

export default SearchInput
