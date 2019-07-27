# The Burger Logger

Burgers taste great! But walking to a restaurant to order one can sometimes take too much time, effort, and money. Burger Logger is here to save the day! Eat virtual burgers from the comfort of your own home.

[![A video of The Burger Logger being used by the developer.](https://img.youtube.com/vi/ND4lxZeycQY/0.jpg)](https://www.youtube.com/watch?v=ND4lxZeycQY)

<br>

<h2>Instructions</h2>

<h3>Online</h3>

Visit https://secure-depths-86726.herokuapp.com/ and eat as many burgers as you want with a preset Burger Logger!

<br>

<h3>Offline</h3>

1. Clone the repository to your computer.
2. Install the required npm packages with:

> npm i

3. In the 'config' folder, rename the 'exampleKeys.js' file to 'keys.js' and replace 'yourusername' and 'yourpassword' with your MySQL username and password respectively.
4. Run the 'schema.sql' and 'seeds.sql' files either in MySQL Workbench, or in your MySQL terminal.
5. Visit http://localhost:8080/ and start eating burgers!

<br>

<h2>API</h2>

> /api/burgers

Returns a list of all the burgers as json objects.

> /api/burgers/someid

Returns a specific burger with the given id as a json object.

<br>

<h2>Dependencies</h2>

Here is a list of dependencies for this project:

* Node.js
* MySQL
* Express
* Express-Handlebars
* MySQL2
* jQuery
* Bootstrap & Bootstrap JS