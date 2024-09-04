Sample Node.js Server with Filtering and Pagination

This project is a basic Node.js server that provides an API for filtering and paginating JSON data. It uses the Express framework and can be easily extended to handle more complex datasets and functionalities.

Features
Filtering: Filter data based on a specific category.
Pagination: Paginate data by specifying the page number and limit per page.

Prerequisites
Node.js: Make sure you have Node.js installed.

Installation
Clone the repository:
git clone https://github.com/your-username/sample-node-server.git

Install dependencies:
npm install
Running the Server

To start the server, use the following command:
node server.js
The server will start running on http://localhost:3002.

API Endpoints
Get Filtered and Paginated Data
Endpoint:

bash
Copy code
GET /data
Query Parameters:

page: (optional) The page number to retrieve (default is 1).
limit: (optional) The number of items per page (default is 3).
category: (optional) Filter items by a specific category.
Example Requests:

Get the first page of data with 3 items per page:

bash
Copy code
http://localhost:3000/data?page=1&limit=3
Get the second page of data with 2 items per page:

bash
Copy code
http://localhost:3000/data?page=2&limit=2
Get data filtered by category A:

bash
Copy code
http://localhost:3000/data?category=A
Response:

The response will be a JSON object containing the paginated and filtered data:

json
Copy code
{
  "page": 1,
  "limit": 3,
  "totalItems": 8,
  "data": [
    { "id": 1, "name": "Item 1", "category": "A", "value": 10 },
    { "id": 2, "name": "Item 2", "category": "B", "value": 20 },
    { "id": 3, "name": "Item 3", "category": "A", "value": 30 }
  ]
}
Project Structure
go
Copy code
sample-node-server/
├── node_modules/
├── server.js
├── package.json
└── README.md
server.js: The main server file where the API is defined.
package.json: Contains project metadata and dependencies.
README.md: Documentation file.