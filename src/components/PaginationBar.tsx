import Pagination from "react-bootstrap/Pagination";

type PaginationBarProps = {
  postPerPage: number;
  totalPosts: number;
  currentPage: number;
  paginate: (number: number) => void;
};

const PaginationBar = (props: PaginationBarProps) => {
  const items = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postPerPage); i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={i === props.currentPage}
        onClick={() => props.paginate(i)}
      >
        {i}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default PaginationBar;
