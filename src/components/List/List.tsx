import { Category } from "../Category/Category";
import { LIST } from '../../_LIST/LIST';
import { getCategoryList } from '../../utils/getCategoryList';
import { generateRandomId } from "../../utils/generateRandomId";
import type { Dispatch, SetStateAction } from "react";
import type { setterProps } from "../../context/cardContext";

type Props = {
  setter: Dispatch<SetStateAction<Array<setterProps>>>
}

export const List = ({setter}: Props) => {
  const categoryList = getCategoryList(LIST);

  return (
      categoryList.map( item =>
        <Category key={generateRandomId()} setter={setter}>{item}</Category>
      )
  )
}