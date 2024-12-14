import { render, screen } from "@testing-library/react";
import Table from "../../components/table/Table";

describe("Table Component", () => {
  const mockColumns = [
    { key: "s.no", header: "S.No" },
    { key: "amt.pledged", header: "Amount Pledged" },
    { key: "percentage.funded", header: "Percentage Funded" },
  ];

  const mockData = [
    {
      "s.no": 0,
      "amt.pledged": 15823,
      blurb:
        "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
      by: "Museum of Science Fiction",
      country: "US",
      currency: "usd",
      "end.time": "2016-11-01T23:59:00-04:00",
      location: "Washington, DC",
      "percentage.funded": 186,
      "num.backers": "219382",
      state: "DC",
      title: "Catalysts, Explorers & Secret Keepers: Women of SF",
      type: "Town",
      url: "/projects/1608905146/catalysts-explorers-and-secret-keepers-women-of-sf?ref=discovery",
    },
    {
      "s.no": 1,
      "amt.pledged": 6859,
      blurb:
        "A unique handmade picture book for kids & art lovers about a nervous monster who finds his courage with the help of a brave little girl",
      by: "Tyrone Wells & Broken Eagle, LLC",
      country: "US",
      currency: "usd",
      "end.time": "2016-11-25T01:13:33-05:00",
      location: "Portland, OR",
      "percentage.funded": 8,
      "num.backers": "154926",
      state: "OR",
      title: "The Whatamagump (a hand-crafted story picture book)",
      type: "Town",
      url: "/projects/thewhatamagump/the-whatamagump-a-hand-crafted-story-picture-book?ref=discovery",
    },
    {
      "s.no": 2,
      "amt.pledged": 17906,
      blurb:
        "A horror comedy about a repairman who was in the wrong place at the wrong time thanks to mad scientists and monsters.",
      by: "Tessa Stone",
      country: "US",
      currency: "usd",
      "end.time": "2016-11-23T23:00:00-05:00",
      location: "Los Angeles, CA",
      "percentage.funded": 102,
      "num.backers": "105857",
      state: "CA",
      title: "Not Drunk Enough Volume 1!",
      type: "Town",
      url: "/projects/1890925998/not-drunk-enough-volume-1?ref=discovery",
    },
  ];

  it("should render the table with correct headers", () => {
    render(<Table columns={mockColumns} data={mockData} loading={false} />);

    expect(screen.getByText("S.No")).toBeInTheDocument();
    expect(screen.getByText("Amount Pledged")).toBeInTheDocument();
    expect(screen.getByText("Percentage Funded")).toBeInTheDocument();
  });

  it("should render the correct number of rows", () => {
    render(<Table columns={mockColumns} data={mockData} loading={false} />);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(mockData.length + 1); // +1 for the header row
  });

  it("should render the correct data in the table", () => {
    render(<Table columns={mockColumns} data={mockData} loading={false} />);

    mockData.forEach((item) => {
      expect(screen.getByText(item["s.no"])).toBeInTheDocument();
      expect(screen.getByText(item["amt.pledged"])).toBeInTheDocument();
      expect(screen.getByText(item["percentage.funded"])).toBeInTheDocument();
    });
  });

  it("should not render any rows if no data is provided", () => {
    render(<Table data={[]} columns={[]} loading={false} />);
    expect(screen.getByText("No data")).toBeInTheDocument();
  });
});
