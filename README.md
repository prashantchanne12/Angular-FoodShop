
# Food Shop

 
**Objective:**

This is an application which will be used to store the data for different Dishes for a Food shop.

**Requirements:**

Users: Create a static/in-memory user database on client side with 2 different roles:

**Customer:** A user who will be visiting an app to order dishes.

**Manager:** An admin who manages the application, adds/edits dishes, etc.

Create a sign-in/sign-up form page which will be the very first page of the application. User can enter his/her credentials 
- Username
- Password 
- To sign-in to the application. You can store the above data in a static database to maintain authentication at the client site. If the user is valid, then redirect them to further pages in application based on their roles.
<br></br>

**Manager:**

If the authenticated user is a manager, then he/she should be redirected to the dish list page.

1. The Dish List page displays the list of the dishes added. Each item in the list should show the following details of the dish:
- Dish Name
- Category
- Description
- Price
2. There should be an ‘Add new dish’ button at the bottom of the ‘Dish List’ page. On clicking that, the user should be redirected to the Add Dish page.

3. The add dish page would be a form containing the following fields:
- Dish Name 
- Description 
- Category (dropdown with options as Indian, Continental, Italian, Mexican, Chinese)
- Price

4. There should be an ‘Add’ button below the form. On clicking this button, the dish should get added to a list of dishes on a different ‘Dish List’ page.

5. The following validations must happen to avoid saving erroneous data:
  	The Quantity field should be a numeric value greater than 0. 
The Dish Name, Category and the Price field must be mandatory. 
 
6. Besides each row of the add dish table, there should be an ‘Edit’ button. On clicking that, redirect to the form where user can edit the details and can insert the updated dish to the list again.

7. The same validations need to be applied in the edit page as well.

8. Besides the ‘Edit’ button, there should be a ‘Delete’ button. On clicking that, the dish (that row) should get removed from the table.

9. There should also be an ‘Add new dish’ button at the bottom of the ‘Dish List’ page. On clicking that, the user should be redirected to the initial form page.
<br></br>

**Customer:**

If the authenticated user is a customer, then he/she should be redirected to the dish list page.

1. The Dish List page displays the list of the dishes added. Each item in the list should show the following details of the dish:
- Dish Name
- Category
- Description
- Price

2. Besides each row of the add dish table, there should be an ‘Add to cart’ button. Once the user clicks the button, the button gets disappeared, and a numeric input field must appear with a + and – buttons of its left and right of the input field respectively. On clicking the + button, the quantity must be incremented by 1 and on clicking the – button it should get decremented by 1. If the quantity becomes 0, hide the numeric field and both these buttons and the ‘Add to card’ should reappear. The functionality should be like the Add button in Zomato/Swiggy.

3. On the top- right corner of the dish list page, the customer should see the Show Cart button. When the customer clicks on the button, it should get navigate to the cart page where the customer is shown the items that he/she wants to order. Each item in the list should show the following details of the dish:
- Dish Name
- Category
- Description
- Price
- Quantity

4. The bottom right corner of this page should show the total price of whatever the user has added on the cart.  

5. Besides each row of the cart table, the quantity needs to be shown. The user can also increase and decrease the quantity from here. The user can also remove the dish from the cart by clicking the Remove button on the right side of every list item. The total price should be updated in case of any removal or updating of dishes.
<br></br>

Note: You can create some mock data and insert it in the table by default. So, whenever you run the application, the table will always have some data and won’t be empty.
<br></br>

Some nice to have features are:

1. Searching the dish by category on ‘Dish List’ page.

2. Sort the dish by price on the ‘Dish List’ page. 
