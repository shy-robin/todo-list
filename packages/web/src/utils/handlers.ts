import { Store } from "../hooks/useStore";

export const handleItemNext = (store: Store) => {
  const { list, currentItemId } = store.state;
  const { setCurrentItemId } = store;

  const curIndex = list.findIndex((item) => item.id === currentItemId);
  if (curIndex === -1) return;
  setCurrentItemId(list[(curIndex + 1) % list.length].id);
};

export const handleItemPrev = (store: Store) => {
  const { list, currentItemId } = store.state;
  const { setCurrentItemId } = store;

  const curIndex = list.findIndex((item) => item.id === currentItemId);
  if (curIndex === -1) return;
  setCurrentItemId(list[(curIndex - 1 + list.length) % list.length].id);
};

export const handlePagePrev = (store: Store) => {
  const { curPage } = store.state;
  const { setCurPage } = store;

  if (curPage === 1) return;
  setCurPage(curPage - 1);
};

export const handlePageNext = (store: Store) => {
  const { curPage, total, pageSize } = store.state;
  const { setCurPage } = store;

  if (curPage === Math.ceil(total / pageSize)) return;
  setCurPage(curPage + 1);
};

export const handlePageChange = (store: Store, page: number) => {
  const { setCurPage } = store;
  setCurPage(page);
};

export const handleCheckToggle = (store: Store, checkId?: number) => {
  const id = checkId ?? store.state.currentItemId;
  const { checkedItems } = store.state;
  const { setCheckedItems } = store;

  if (checkedItems.some((item) => item === id)) {
    setCheckedItems(checkedItems.filter((item) => item !== id));
  } else {
    setCheckedItems([...checkedItems, id]);
  }
};

export const handleCheckAll = (store: Store) => {
  const { checkedItems, list } = store.state;
  const { setCheckedItems } = store;

  if (checkedItems.length && checkedItems.length === list.length) {
    setCheckedItems([]);
    return;
  }
  setCheckedItems(list.map((item) => item.id));
};

export const handleItemDetailOpen = (store: Store, itemId?: number) => {
  const { setIsItemDetailVisible, setCurrentItemId } = store;
  itemId !== undefined && setCurrentItemId(itemId);
  setIsItemDetailVisible(true);
};

export const handleItemDetailCancel = (store: Store) => {
  const { setIsItemDetailVisible } = store;
  setIsItemDetailVisible(false);
};

export const handleItemDetailSave = (store: Store) => {
  const { setIsItemDetailVisible } = store;
  setIsItemDetailVisible(false);
};
