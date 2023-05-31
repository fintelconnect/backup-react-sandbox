# Social Network Aggregator

The goal of this exercise will be to implement a basic social network aggregator.

The three social networks to be aggregated are:

**Twitter**

`https://6470db773de51400f72503e5.mockapi.io/socialnetwork/twitter`

**Facebook**

`https://6470db773de51400f72503e5.mockapi.io/socialnetwork/facebook`

**Instagram**

`https://6470db773de51400f72503e5.mockapi.io/socialnetwork/instagram`

There may be a response delay; You can't guarantee that the API will return immediately.

Also, there's a chance the API will respond with an error. There's no guarantee that this error will be valid JSON.

## Requirements

1. A JSON response should be printed that lists the output from the three social networks in the format:

`{ twitter: [tweets], facebook: [statuses], instagram: [photos] }`

# React Todo List

The goal of this exercise is to create a working todo list with persistent data storage.

To start with, we have a styled todo list that supports adding todos. We also have premade styles for completed todo items. Although there's no working mechanism for "completing" a todo.

## Requirements

1. Clicking on a todo item should toggle the "checked" state.
2. The todo list state should be saved and loaded from local storage.
3. Checked items should sink to the bottom of the list automatically

## Stretch Goals

1. Allow todos to be deleted. When you hover your mouse over a todo, an X should appear on the far right side, clicking the X should remove it from the list.
2. Add hidden timestamps to todos (created_at, completed_at), these will be used for sorting
  - The active todos should be sorted by created_at descending
  - The completed todos should be sorted by completed_at ascending

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
