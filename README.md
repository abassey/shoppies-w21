# The Shoppies: Movie awards for Entrepreneurs (My Take)

Task
-
A web app that a user can search up movies to nominate for an award, view their nominated list and remove nominations if necessary. Users can onlu have up to 5 nominations.

Full Challenge can be found [here.](https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/preview?pru=AAABdHlQRnE*WQl0v68vsF_nPbygOim7ww#heading=h.31w9woubunro)

Below I am going to go through my thought process on how I chose to break down and approach this task. 🙂


Identified Basic Workflow
-

| Key        | Entity        |
| ---------- |:-------------:|
| m   | movie |
| n   | nomination |
| r   | result (from search)|
| u   | user |

- u opens website
- searches for m
- r generated
  - if exists, display r to u
  - if not, display 'no matching results'
- u nominates r
  - if n == yes, action not available

Identified Actions
-
The order mentioned is also the order of functionality I chose, to know what to implement next. (I hope this sentence makes sense 😂)
- search from m -> search
- view all n -> print
- add to n -> insert
- remove from n -> delete

Technical Requirements (From Challenge)
- 
- display banner when n == 5
- only movies should be displayed
- search results must contain at least
  - title
  - year of release
- API key -> [OMDB's API (free)](http://www.omdbapi.com/)

Tech Stack Consideration
-
| Technology       | Used?        |
| ---------- |:-------------:|
| JSON | ❌ |
| node.js | ❌ |
| express.js | ❌ |
| HTML | ❌ |
| CSS | ✅ |
| Bootstrap | ✅ |
| React.js | ✅ |
| graphQL | ❌ |

Change Log
- First Commit Look


Missing Functionality:
1. Toggling the Nominate button between enabled and disabled at the right times
2. Checking to see if a returned movie has already been nominated and removing thre ability to double nominate


Resources
-
#### Code References and Helpers
- [Simple React todo list](https://medium.com/@aghh1504/1-simple-react-todo-list-52186b62976b)
- [React with simple api](https://medium.com/@aghh1504/3-react-with-simple-api-7e32248aeea5)
- [React Bootstrap](https://react-bootstrap.netlify.app/components/)
- [Intro to React.js](https://medium.com/the-codelog/intro-to-react-js-a37696fd99af)
- [Simple and flexible toast notifications for react](https://reactjsexample.com/simple-and-flexible-toast-notifications-for-react/)
- [Building an Awesome Todo List App in React](https://www.kirupa.com/react/simple_todo_app_react.htm)
- [Markdown Guide](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#headers)
- [The best way to bind event handlers in React](https://www.freecodecamp.org/news/the-best-way-to-bind-event-handlers-in-react-282db2cf1530/)

#### Debugging and Troubleshooting

- [Failed to compile due to colorette dependency](https://github.com/facebook/create-react-app/issues/9273)
- [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [React.js Offical Tutorial](https://reactjs.org/tutorial/tutorial.html)
