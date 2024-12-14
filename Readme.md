# Frontend Assignment

## Overview

This project is a frontend application designed to fetch and display details of highly-rated Kickstarter projects using AJAX calls. The application showcases the ability to create a responsive and user-friendly interface while adhering to best practices in web development.

The assignment is hosted on vercel - https://frontend-assignment-omega-sepia.vercel.app/

## Features

- **Data Fetching:** Utilizes the Kickstarter API to retrieve project details.
- **Dynamic Table:** Displays project information in a structured table format, including:
  - S.No.
  - Percentage funded
  - Amount pledged
- **Pagination:** Implements pagination to navigate through project records, with a maximum of 5 records displayed per page.
- **Responsive Design:** The UI is designed to be aesthetically pleasing and functional across various devices.
- **Accessibility:** The application includes features to enhance accessibility for all users.
- **Animation:** There is an initial animation of rotating the blocks on initial render.

## Technologies Used

- **Frontend:** React (with hooks)
- **Styling:** Raw CSS
- **State Management:** React's built-in state management
- **Data Fetching:** Axios for making API calls
- **Testing:** Jest for unit testing

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd frontend-assignment
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Usage

- Upon loading, the application fetches project data from the provided API.
- Users can view the project details in a table format.
- Pagination controls allow users to navigate through multiple pages of project data.
- The selected page is preserved on refresh.
- Initial loading animations.

## Testing

To run the unit tests, use the following command:

```bash
npm test
```
