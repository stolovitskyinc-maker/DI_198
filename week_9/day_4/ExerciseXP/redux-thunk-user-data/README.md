# Redux Thunk User Data Demo

A small React + Redux Toolkit app that fetches a user from a mock API
(JSONPlaceholder) using a hand-written Redux Thunk, and displays the
result — with loading and error states.

## Project structure

```
redux-thunk-user-data/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx                     # ReactDOM root + Redux <Provider>
│   ├── App.jsx                      # Renders <UserData />
│   ├── store.js                     # configureStore (thunk included by default)
│   ├── components/
│   │   └── UserData.jsx             # useSelector/useDispatch, renders user info
│   └── features/user/
│       ├── userSlice.js             # slice + fetchUser thunk action creator
│       └── userSlice.test.js        # tests for success/failure/network-error paths
```

## Setup

```bash
npm install
```

## Run the dev server

```bash
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Run the tests

```bash
npm test
```

This runs the Vitest suite in `src/features/user/userSlice.test.js`, which
mocks `fetch` to verify:
- the success path (data gets stored, loading/error reset correctly)
- a failed HTTP response (e.g. 404) sets `error`
- a network failure (rejected fetch) also sets `error`

## Build for production

```bash
npm run build
npm run preview
```

## How it works

1. **Store** (`store.js`) — `configureStore` from Redux Toolkit, which
   includes `redux-thunk` in its default middleware automatically.
2. **Slice** (`userSlice.js`) — plain reducers `fetchUserStart`,
   `fetchUserSuccess`, `fetchUserFailure`, plus a `fetchUser(userId)`
   thunk that calls `fetch()` against
   `https://jsonplaceholder.typicode.com/users/:id` and dispatches the
   right action depending on outcome.
3. **Component** (`UserData.jsx`) — dispatches `fetchUser` on mount (and
   whenever the user ID changes), reads `{ data, loading, error }` from
   the store via `useSelector`, and renders accordingly. A "Simulate
   Error" button fetches user id `9999`, which 404s against the API, to
   exercise the error path live in the browser.
