# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Express.js applications where a route handler doesn't send a response, leading to unexpected behavior.  The issue is particularly noticeable when using promises or asynchronous operations within the handler.

## Bug
The `bug.js` file contains an Express.js server with a route handler that lacks a `res.send()` or similar function to send a response to the client. This omission results in a hanging request and potential errors depending on how the server and client interact.

## Solution
The `bugSolution.js` file presents the corrected version.  It includes `res.send()` to provide a response to the client, resolving the issue.

## How to Reproduce
1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.  Observe the server starts but doesn't respond to requests.
4. Run `node bugSolution.js`. Now the server correctly handles requests.