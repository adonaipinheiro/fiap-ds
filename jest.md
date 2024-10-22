# Jest

Vitest is a replacer for the Jest testing library, especially for projects(in our case, React) created with Vite. Previously, React applications created with Facebook’s create-react-app build tool came with a test environment using React Testing Library(RTL) and Jest already set up.

As of March 2023, support for the create-react-app build tool was dropped, and the React team recommends the use of **Vite** or Parcel as an alternative for creating React apps if you don’t want to go with any of the frameworks recommended(NextJs, Remix, Gatsby, Expo).

We will look at setting up a testing environment using Vitest and React Testing Library for React projects created with Vite.

Before we proceed, I assume you have a React app created using the Vite build tool. If not, you can spin up one using the command below inside of your command line and follow the prompts:

```bash
npm create vite@latest
```

# **Install Vitest**

First, we have to install **Vitest** as a dev dependency. Vitest is a popular alternative to Jest, especially for React apps created with the Vite build tool.

Vitest is a replacement for Jest because it is fast, more modern, and has gained lots of traction nowadays. It offers compatibility with most of the Jest API and ecosystem libraries, so in most projects, it should be a drop-in replacement for Jest.

```
yarn add -D vitest
```

After installing vitest, we will have to **add a script** to our `package.json` file to run our test.

```
{
  "scripts": {
    "test": "vitest"
  }
}
```

# **Install Jsdom**

Next, we install the `jsdom` library. Jsdom is a library that partially implements the web browser API. It emulates enough of a subset of a web browser to be useful for testing and scraping real-world web applications.

We need the Jsdom library to enable HTML in Vitest to help us test our React components using the React Testing Library. Below is the command to install jsdom:

```
yarn add -D jsdom
```

After installing jsdom, we have to include jsdom in the Vite configuration file, which you can find at the root of your React project `vite.config.js`

```
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
  }
})
```

# **Install React Testing Library**

React Testing Library is a testing library that enables you to test components without touching the implementation details but instead empowers you to write tests in a way an end user interacts with an application.

**Clarifying the difference between Vitest and React Testing Library**

Before installing React Testing Library, I want to clarify the difference between Vitest and React Testing Library and why we need both. Initially, I was confused about why we needed two testing libraries in a single project.

> To make things clear, understand that Vitest is not an alternative to React Testing Library. They both compliment each other.

To clarify further, you can write and run a test at this stage without installing React Testing Library yet! Let me quickly show you.

1. Create a test file somewhere in your project with the suffix text, e.g. *App.test.jsx,* and give it the following code snippet:

```
import { describe, it, expect } from 'vitest'

describe('A truthy statement', () => {
  it('should be equal to 2', () => {
    expect(1+1).toEqual(2)
  })
})
```

As you can see, Vitest comes with **test suites**(_describe_), **test cases**(_it_)*,* and **assertions**(_expect().toEqual_) just like **Jest(** if you’re already familiar with the Jest API).

2. Run the test above using the command `npm run test` . Remember we set up a test script at the beginning under the **install vitest** section? Everything in your command line should turn green, indicating that the test passed successfully.

**To re-emphasize**, Vitest provides you with *test suites*, *test cases*, *assertions,* and a *test runner* to help you unit-test your code. But to take your test further and test your React components in a way an end user interacts with them, then we need to **get React Testing Library installed at this stage with the command below**:

```
yarn add -D @testing-library/jest-dom @testing-library/react @testing-library/user-event @testing-library/dom
```

# **Add a Test Setup file in the Vite configuration file**

1. Add a test setup file in `tests/setup.js` in the root of your project or the `src` directory of your project(anyhow you prefer) and give it the following implementation:

```
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
})
```

2. Lastly, include this setup test file in the `vite.config.js` file and make all imports from Vitest global so that we don’t manually import(e.g. expect, describe, it) in each test file.

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
    // hey! 👋 over here
    globals: true,
    setupFiles: './tests/setup.js', // assuming the test folder is in the root of our project
  }
})
```

# **Render React Components in Vitest**

We will create an `App.test.jsx`file and import an imaginary App component(_you can create one quickly, a simple react component_) and display the component Jsx inside of our command line. After, use Vitest test runner to run the test script `npm run test` .

```
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)

    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})
```

From the above code, we’ve seen how Vitest combines with the React Testing Library. As stated earlier, both libraries complement each other. Vitest provides us with test suites, test cases, and test runners, among other things while React Testing Library empowers us to test our React components in a way a user interacts with our application.

# **References:**

I put this blog up with the help of the following resources I came across online and re-wrote it in a way I understand perfectly for my future self or anyone on the web.

- https://www.robinwieruch.de/vitest-react-testing-library/
- https://vitest.dev/guide/comparisons.html
- https://vitejs.dev/guide/
