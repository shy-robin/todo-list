import { useEffect } from "react";
import { Store } from "../hooks/useStore";
import {
  handleItemNext,
  handleItemPrev,
  handlePageNext,
  handlePagePrev,
  handleCheckAll,
  handleCheckToggle,
  handleItemDetailOpen,
  handleItemDetailCancel,
  handleItemDetailSave,
} from "../utils/handlers";

const useKeymap = (store: Store) => {
  useEffect(() => {
    const { isItemDetailVisible } = store.state;
    const handleKeyup = (e: KeyboardEvent) => {
      if (isItemDetailVisible) {
        switch (e.key) {
          case "Enter":
            handleItemDetailSave(store);
            break;
          case "Escape":
            handleItemDetailCancel(store);
            break;
          default:
            break;
        }
      } else {
        switch (e.key) {
          case "j":
            handleItemNext(store);
            break;
          case "k":
            handleItemPrev(store);
            break;
          case "h":
            handlePagePrev(store);
            break;
          case "l":
            handlePageNext(store);
            break;
          case " ":
            handleCheckToggle(store);
            break;
          case "a":
            handleCheckAll(store);
            break;
          case "Enter":
            handleItemDetailOpen(store);
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener("keyup", handleKeyup);

    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [store]);
};

export default useKeymap;
