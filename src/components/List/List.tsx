import { Category } from "../Category/Category";
import { LIST } from '../../_LIST/LIST';
import { getCategoryList } from '../../utils/getCategoryList';
import { generateRandomId } from "../../utils/generateRandomId";

export const List = () => {
  const categoryList = getCategoryList(LIST);

  return (
      categoryList.map( item =>
        <Category key={generateRandomId()}>{item}</Category>
      )
  )
}