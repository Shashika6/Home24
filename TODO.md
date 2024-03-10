1. Improve test coverage and add more test cases for each component.
2. Improve performance by adding pagination or by loading a few items at a time by using the infinite scroll.
3. Improve the UI/UX of the overall system 
    - Improve modal views
    - Improve overall look and feel
    - Show feedback to user on interactions. (Toast notifications)
    - Allow an user to delete one cart item at a time as required. 
    - Show a count to similar items like (x2) in the cart.
    - Add filters to the product list (eg:- price range, color etc.)
4. Improve folder structuring to include features like index files for easy exports
5. Create ENV files to include config related values based on the environment.
6. Add front-end caching like redis for the search as there is a large number of items.
7. Currently the cart items are deleted when the page is refreshed this needs to be cached even when the page is refreshed. (Include something like local storage to store the values of the cart)