type GoodsType = {
  img: string,
  name: string,
  price: number,
  rate: number,
  category: string,
};

export const getCategoryList = (arr: GoodsType[]) => {

  return arr.reduce((unicArr: Array<string>, item) => {

    if (!unicArr.includes(item.category)) {
      unicArr.push(item.category)
    }
    return unicArr
  }, [])
}