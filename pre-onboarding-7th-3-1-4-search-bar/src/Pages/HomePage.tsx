import React, {useEffect} from 'react'
import API from 'src/lib/api'

type Props = {}

const HomePage = (props: Props) => {

    useEffect(() => {
    const test = async () => {
      const data = await API.getKeyword('류마티스')
      console.log(data);
    }
    test()
  }, [])

  return (
    <div>
      <p>국내 모든 임상시험 검색하고 온라인으로 참여하기</p>
      <form className="SearchInput">
        <input className="SearchInput__input" type="text" placeholder="질환명을 입력해 주세요." autoFocus />
      </form>
    </div>
  )
}

export default HomePage
