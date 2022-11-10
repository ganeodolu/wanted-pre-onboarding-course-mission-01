import { useRecoilValue } from "recoil";
import { keywordState } from "src/lib/state";
import { makeBoldMatchedString } from "src/lib/util";

interface Props {
  item: {
    sickCd: string;
    sickNm: string;
  };
}

const SuggestItem = ({ item }: Props) => {
  const keyword = useRecoilValue(keywordState);
  const { sickNm } = item;

  const result = makeBoldMatchedString(keyword, sickNm);

  return <span dangerouslySetInnerHTML={{ __html: result }} />;
};

export default SuggestItem;
