import { render, screen } from "@testing-library/react";
import Pagination from "../../components/pagination/Pagination";

describe("Pagination", () => {
  const defaultProps = {
    loading: false,
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 1,
    onPageChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should not render when loading is true", () => {
    render(<Pagination {...defaultProps} loading={true} />);
    expect(screen.queryByLabelText("Pagination")).not.toBeInTheDocument();
  });

  //   it("should not render when there is only one page", () => {
  //     render(<Pagination {...defaultProps} totalItems={10} itemsPerPage={10} />);
  //     expect(screen.queryByLabelText("Pagination")).not.toBeInTheDocument();
  //   });

  //   it("should render all pages when total pages are less than or equal to 7", () => {
  //     render(<Pagination {...defaultProps} totalItems={50} itemsPerPage={10} />);
  //     expect(screen.getAllByRole("button")).toHaveLength(7); // 5 numbered buttons + prev + next
  //   });

  //   it("should render correct pagination structure when current page is near start", () => {
  //     render(<Pagination {...defaultProps} currentPage={2} />);
  //     expect(screen.getByText("1")).toBeInTheDocument();
  //     expect(screen.getByText("2")).toBeInTheDocument();
  //     expect(screen.getByText("3")).toBeInTheDocument();
  //     expect(screen.getByText("4")).toBeInTheDocument();
  //     expect(screen.getByText("5")).toBeInTheDocument();
  //     expect(screen.getByText("...")).toBeInTheDocument();
  //     expect(screen.getByText("10")).toBeInTheDocument();
  //   });

  //   it("should render correct pagination structure when current page is in middle", () => {
  //     render(<Pagination {...defaultProps} currentPage={5} />);
  //     expect(screen.getByText("1")).toBeInTheDocument();
  //     expect(screen.getAllByText("...")).toHaveLength(2);
  //     expect(screen.getByText("4")).toBeInTheDocument();
  //     expect(screen.getByText("5")).toBeInTheDocument();
  //     expect(screen.getByText("6")).toBeInTheDocument();
  //     expect(screen.getByText("10")).toBeInTheDocument();
  //   });

  //   it("should render correct pagination structure when current page is near end", () => {
  //     render(<Pagination {...defaultProps} currentPage={9} />);
  //     expect(screen.getByText("1")).toBeInTheDocument();
  //     expect(screen.getByText("...")).toBeInTheDocument();
  //     expect(screen.getByText("6")).toBeInTheDocument();
  //     expect(screen.getByText("7")).toBeInTheDocument();
  //     expect(screen.getByText("8")).toBeInTheDocument();
  //     expect(screen.getByText("9")).toBeInTheDocument();
  //     expect(screen.getByText("10")).toBeInTheDocument();
  //   });

  //   it("should call onPageChange with correct page number when a page button is clicked", () => {
  //     render(<Pagination {...defaultProps} />);
  //     fireEvent.click(screen.getByText("3"));
  //     expect(defaultProps.onPageChange).toHaveBeenCalledWith(3);
  //   });

  //   it("should handle previous button click correctly", () => {
  //     render(<Pagination {...defaultProps} currentPage={3} />);
  //     fireEvent.click(screen.getByLabelText("Go to previous page"));
  //     expect(defaultProps.onPageChange).toHaveBeenCalledWith(2);
  //   });

  //   it("should handle next button click correctly", () => {
  //     render(<Pagination {...defaultProps} currentPage={3} />);
  //     fireEvent.click(screen.getByLabelText("Go to next page"));
  //     expect(defaultProps.onPageChange).toHaveBeenCalledWith(4);
  //   });

  //   it("should disable previous button on first page", () => {
  //     render(<Pagination {...defaultProps} currentPage={1} />);
  //     expect(screen.getByLabelText("Go to previous page")).toBeDisabled();
  //   });

  //   it("should disable next button on last page", () => {
  //     render(<Pagination {...defaultProps} currentPage={10} />);
  //     expect(screen.getByLabelText("Go to next page")).toBeDisabled();
  //   });

  //   it("should highlight current page button", () => {
  //     render(<Pagination {...defaultProps} currentPage={3} />);
  //     const currentPageButton = screen.getByText("3");
  //     expect(currentPageButton).toHaveClass("active");
  //   });
});
