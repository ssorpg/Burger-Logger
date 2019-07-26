# The Burger Logger

Burgers taste great! But walking to a restaurant to order one can sometimes take too much time, effort, and money. Burger Logger is here to save the day! Eat virtual burgers from the comfort of your own home.

[![A video of The Burger Logger being used by the developer.](https://img.youtube.com/vi/ND4lxZeycQY/0.jpg)](https://www.youtube.com/watch?v=ND4lxZeycQY)

<br>

<h2>Online Instructions</h2>

Visit https://secure-depths-86726.herokuapp.com/ and eat as many burgers as you want with a preset Burger Logger!

<br>

<h2>Offline Instructions</h2>

1. Clone the repository to your computer.
2. In the 'config' folder, create a 'keys.js' file with the following format:

>// MYSQL KEY

>const mySQL = {

>    username: 'yourusername',

>    password: 'yourpassword'

>};

>// EXPORTS

>module.exports = {

>    mySQL: mySQL

>};

3. Run the 'schema.sql' and 'seeds.sql' files either in MySQL Workbench, or in your MySQL terminal.
4. Visit http://localhost:8080/ and start eating burgers!