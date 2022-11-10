import React from 'react'
import SearchInput from 'src/Components/SearchInput'
import SearchSuggestion from 'src/Components/SearchSuggestion'

type Props = {}

const HomePage = (props: Props) => {

  //   useEffect(() => {
  //   const test = async () => {
  //     const data = await API.getKeyword('류마티스')
  //     console.log(data);
  //   }
  //   test()
  // }, [])

  return (
    <div>
      <p>국내 모든 임상시험 검색하고 온라인으로 참여하기</p>
      <SearchInput />
      {/* <SearchedKeyword /> */}
      <SearchSuggestion />
    </div>
  )
}

export default HomePage
