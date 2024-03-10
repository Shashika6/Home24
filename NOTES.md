Demo :- 

https://github.com/Shashika6/Home24/assets/32934169/7b0edcde-20d4-4fd4-b177-61eb8f19e77e

### 1. Folder Structuring

- Code has been structured to improve key areas like maintanability and reusability. (Structure shown below)

```
src/
  ├── components
  ├── constants
  ├── context
  ├── hooks
  ├── pages
  ├── routes
  ├── services
  ├── styles
  ├── types
  └── utils
```

### 2. Improving code 

- Creating re-usable react components
- Create a re-usable hook that accepts a data query function and returns the data from the api
- The state has been stored using a useContext hook as the application is not that complex as of yet. This will be
advantagous because the state has to be passed down to several components and updated from multiple components as well.
- Adding text to a localization file so that they can be reused or support multiple languages in the future.
- Adding delay when the search is changed to avoid large filtering being executed alot.
- Adding unit tests where applicable
- Used typescript to increase code quailty which results in improvements of team collaboration and maintainability.


### 3. Improving UI/UX

- Improving UI of cards to fit in the images properly along with proper constant alignment of the button
- Including alerts to the user so that they are given proper clarity on their actions
- Improving responsiveness by checking the screen size and making the website more responsive. (Showing and hiding categories)
- Adding a basic theme color palette 

### 4. Implementing search and cart functionality

- Implementing a seach of the products available and on selection allowing the user to add to cart if required
- Implementing a cart functionality with basic features like showing the amount of items/ viewing the added items/total and clearing the cart

Note :- No changes were made in the server repo
