# PeachyBank
GreenStreet Task

Plan

1. Create a class for Transactions - id, to account, from account, date, state, ammount
2. Write CRUD functionality - for creating a transaction, getting the transaction and updating state
3. Create the dynamic list
4. Create a form to add submissions to dynamic list
5. Test and create test data
6. Add sorting requirements
7. Use that data to write in-depth view by id
8. Add JWT
9. Create a login page
10. Pass access token to front-end,

Design Decisions
Decided to use Python because I am used to it and it was recommended in the instructions.
Decided to choose JS instead of TypeScript because - from my point of view it's more common in a work situation it would be easier to find someone who can cover for me if I need to be off, also I know there are changes planned for TypeScript concerning GO and TS is new for me so decided to play it safe. Another really selfish reason is that if you don't hire me I will continue this and make it better and add it to my portfolio. :D
Used Vite for recreating a client.

Implementation

All was well until point 5. Started experiencing CORS errors. I also had some minor issues such as a typo that caused the db to have issues and mismatched endpoints.
Fixed the minor coding errors but CORS continued to cause trouble. Tried fixing it by adding a proxy to the vite.config but I spent a lot of time on it and it didn't work. I was kind of tired so I might have made an error and that's why it didn't work will try that again. I did something which I hate, which was to continue and leave it not working as I was pressed for time.
