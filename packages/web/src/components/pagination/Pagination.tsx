import { useMemo, useState } from "react";
import styled from "styled-components";

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
`;

const PageDirection = styled.div<{ isDisabled?: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ddd;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isDisabled ? "rgba(255,255,255,0.3)" : ""};
  pointer-events: ${(props) => (props.isDisabled ? "none" : "")};
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const PageInfo = styled.div`
  margin: 0 10px;
`;

interface PaginationProps {
  total: number;
  pageSize: number;
  curPage: number;
  onPrev: (curPage: number, pageSize: number) => void;
  onNext: (curPage: number, pageSize: number) => void;
  style?: { [key: string]: unknown };
}

const Pagination = (props: PaginationProps) => {
  const { total, pageSize, curPage, onPrev, onNext, style } = props;
  const totalPage = useMemo(() => {
    return Math.ceil(total / pageSize);
  }, [total, pageSize]);
  const prevPageLabel = "<";
  const nextPageLabel = ">";

  return (
    <StyledPagination style={style}>
      <PageDirection
        onClick={() => onPrev(curPage - 1, pageSize)}
        isDisabled={curPage === 1}
      >
        {prevPageLabel}
      </PageDirection>
      <PageInfo>
        {curPage}/{totalPage}
      </PageInfo>
      <PageDirection
        onClick={() => onNext(curPage + 1, pageSize)}
        isDisabled={curPage === totalPage}
      >
        {nextPageLabel}
      </PageDirection>
    </StyledPagination>
  );
};

export default Pagination;
