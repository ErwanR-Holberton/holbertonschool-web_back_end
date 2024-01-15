# ES6 Basics

<p><img src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240114%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240114T233043Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c33e65a6b6bb75fbb58eecf180a2da4667e4c389409e33f20f58a6a0836ca078" alt="" loading="lazy" style=""></p>

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="/rltoken/Q20cy-_XFufANSBCW0hvog" title="ECMAScript 6 - ECMAScript 2015" target="_blank">ECMAScript 6 - ECMAScript 2015</a></li>
<li><a href="/rltoken/OHkTGVz-DLmzmrpDuWDYBw" title="Statements and declarations" target="_blank">Statements and declarations</a></li>
<li><a href="/rltoken/5FxmFLP2qwTEo0puWUVHsQ" title="Arrow functions" target="_blank">Arrow functions</a></li>
<li><a href="/rltoken/qZm6g37BqHVD9G96MLsnsg" title="Default parameters" target="_blank">Default parameters</a></li>
<li><a href="/rltoken/qD9tUS00akyWTDU7MKUAuA" title="Rest parameter" target="_blank">Rest parameter</a></li>
<li><a href="/rltoken/3bZ3Ro8W3n35UkOhAmXmgQ" title="Javascript ES6 — Iterables and Iterators" target="_blank">Javascript ES6 — Iterables and Iterators</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/GT7hK6Qly9Rrureewp_arA" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>What ES6 is</li>
<li>New features introduced in ES6</li>
<li>The difference between a constant and a variable</li>
<li>Block-scoped variables</li>
<li>Arrow functions and function parameters default to them</li>
<li>Rest and spread function parameters</li>
<li>String templating in ES6</li>
<li>Object creation and their properties in ES6</li>
<li>Iterators and for-of loops</li>
</ul>

<h2>Requirements</h2>

<h3>General</h3>

<ul>
<li>All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x</li>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should use the <code>js</code> extension</li>
<li>Your code will be tested using the <a href="/rltoken/k18kRmC2WpcC_85dA44gBA" title="Jest Testing Framework" target="_blank">Jest Testing Framework</a></li>
<li>Your code will be analyzed using the linter <a href="/rltoken/awTYlxNaMZw7HShPeC9D5w" title="ESLint" target="_blank">ESLint</a> along with specific rules that we’ll provide</li>
<li>All of your functions must be exported</li>
</ul>

<h2>Setup</h2>

<h3>Install NodeJS 12.11.x</h3>

<p>(in your home directory): </p>

<pre><code>curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
</code></pre>

<pre><code>$ nodejs -v
v12.11.1
$ npm -v
6.11.3
</code></pre>

<h3>Install Jest, Babel, and ESLint</h3>

<p>in your project directory: </p>

<ul>
<li>Install Jest using: <code>npm install --save-dev jest</code></li>
<li>Install Babel using: <code>npm install --save-dev babel-jest @babel/core @babel/preset-env</code></li>
<li>Install ESLint using: <code>npm install --save-dev eslint</code></li>
</ul>

<h2>Configuration files</h2>

<h3><code>package.json</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
{
"scripts": {
"lint": "./node_modules/.bin/eslint",
"check-lint": "lint [0-9]*.js",
"dev": "npx babel-node",
"test": "jest",
"full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
},
"devDependencies": {
"@babel/core": "^7.6.0",
"@babel/node": "^7.8.0",
"@babel/preset-env": "^7.6.0",
"eslint": "^6.4.0",
"eslint-config-airbnb-base": "^14.0.0",
"eslint-plugin-import": "^2.18.2",
"eslint-plugin-jest": "^22.17.0",
"jest": "^24.9.0"
}
}
</code>
</pre>
</details>

<h3><code>babel.config.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
module.exports = {
presets: [
[
'@babel/preset-env',
{
targets: {
node: 'current',
},
},
],
],
};
</code>
</pre>
</details>

<h3><code>.eslintrc.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre><code>
module.exports = {
env: {
browser: false,
es6: true,
jest: true,
},
extends: [
'airbnb-base',
'plugin:jest/all',
],
globals: {
Atomics: 'readonly',
SharedArrayBuffer: 'readonly',
},
parserOptions: {
ecmaVersion: 2018,
sourceType: 'module',
},
plugins: ['jest'],
rules: {
'no-console': 'off',
'no-shadow': 'off',
'no-restricted-syntax': [
'error',
'LabeledStatement',
'WithStatement',
],
},
overrides:[
{
files: ['*.js'],
excludedFiles: 'babel.config.js',
}
]
};
</code>
</pre>
</details>

<h3>Finally…</h3>

<p>Don’t forget to run <code>npm install</code> from the terminal of your project folder to install all necessary project dependencies.</p>


<details>
<summary>Click to see: Tasks</summary>

<h3 class="panel-title">
0. Const or let?
</h3>

Modify</p>

<ul>
<li>function <code>taskFirst</code> to instantiate variables using <code>const</code></li>
<li>function <code>taskNext</code> to instantiate variables using <code>let</code></li>
</ul>

<pre><code>export function taskFirst() {
var task = 'I prefer const when I can.';
return task;
}

export function getLast() {
return ' is okay';
}

export function taskNext() {
var combination = 'But sometimes let';
combination += getLast();

return combination;
}
</code></pre>

<p>Execution example:</p>

<pre><code>bob@dylan:~$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

bob@dylan:~$
bob@dylan:~$ npm run dev 0-main.js
I prefer const when I can. But sometimes let is okay
bob@dylan:~$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
<li>Directory: <code>ES6_basic</code></li>
<li>File: <code>0-constants.js</code></li>
</ul>
</div>

<h3 class="panel-title">
1. Block Scope
</h3>

Given what you’ve read about <code>var</code> and hoisting, modify the variables inside the function <code>taskBlock</code> so that the variables aren’t overwritten inside the conditional block.</p>

<pre><code>export default function taskBlock(trueOrFalse) {
var task = false;
var task2 = true;

if (trueOrFalse) {
var task = true;
var task2 = false;
}

return [task, task2];
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 1-main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));
bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js
[ false, true ]
[ false, true ]
bob@dylan:~$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
<li>Directory: <code>ES6_basic</code></li>
<li>File: <code>1-block-scoped.js</code></li>
</ul>
</div>

<h3 class="panel-title">
2. Arrow functions
</h3>

Rewrite the following standard function to use ES6’s arrow syntax of the function <code>add</code> (it will be an anonymous function after)</p>

<pre><code>export default function getNeighborhoodsList() {
this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

const self = this;
this.addNeighborhood = function add(newNeighborhood) {
self.sanFranciscoNeighborhoods.push(newNeighborhood);
return self.sanFranciscoNeighborhoods;
};
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js
[ 'SOMA', 'Union Square', 'Noe Valley' ]
bob@dylan:~$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
<li>Directory: <code>ES6_basic</code></li>
<li>File: <code>2-arrow.js</code></li>
</ul>
</div>

<h3 class="panel-title">
3. Parameter defaults
</h3>

Condense the internals of the following function to 1 line - without changing the name of each function/variable. </p>

<p><em>Hint:</em> The key here to define default parameter values for the function parameters.</p>

<pre><code>export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
if (expansion1989 === undefined) {
expansion1989 = 89;
}

if (expansion2019 === undefined) {
expansion2019 = 19;
}
return initialNumber + expansion1989 + expansion2019;
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js
142
56
41
bob@dylan:~$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
<li>Directory: <code>ES6_basic</code></li>
<li>File: <code>3-default-parameter.js</code></li>
</ul>
</div>

<h3 class="panel-title">
4. Rest parameter syntax for functions
</h3>

Modify the following function to return the number of arguments passed to it using the rest parameter syntax</p>

<pre><code>export default function returnHowManyArguments() {

}
</code></pre>

<p>Example:</p>

<pre><code>> returnHowManyArguments("Hello", "Holberton", 2020);
3
>
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 4-main.js
import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js
1
4
bob@dylan:~$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
<li>Directory: <code>ES6_basic</code></li>
<li>File: <code>4-rest-parameter.js</code></li>
</ul>
</div>

<h3 class="panel-title">
5. The wonders of spread syntax
</h3>

Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.</p>

<pre><code>export default function concatArrays(array1, array2, string) {
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 5-main.js
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js
[
'a', 'b', 'c',
'd', 'H', 'e',
'l', 'l', 'o'
]
bob@dylan:~$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
<li>Directory: <code>ES6_basic</code></li>
<li>File: <code> 5-spread-operator.js</code></li>
</ul>
</div>

<h3 class="panel-title">
6. Take advantage of template literals
</h3>

Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.</p>

<pre><code>export default function getSanFranciscoDescription() {
const year = 2017;
const budget = {
income: '$119,868',
gdp: '$154.2 billion',
capita: '$178,479',
};

return 'As of ' + year + ', it was the seventh-highest income county in the United States'
/ ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
/ ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 6-main.js
import getSanFranciscoDescription from './6-string-interpolation.js';

console.log(getSanFranciscoDescription());

bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
bob@dylan:~$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
<li>Directory: <code>ES6_basic</code></li>
<li>File: <code>6-string-interpolation.js</code></li>
</ul>
</div>

<h3 class="panel-title">
7. Object property value shorthand syntax
</h3>

Notice how the keys and the variable names are the same?</p>

<p>Modify the following function’s <code>budget</code> object to simply use the keyname instead.</p>

<pre><code>export default function getBudgetObject(income, gdp, capita) {
const budget = {
income: income,
gdp: gdp,
capita: capita,
};

return budget;
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 7-main.js
import getBudgetObject from './7-getBudgetObject.js';

console.log(getBudgetObject(400, 700, 900));

bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js
{ income: 400, gdp: 700, capita: 900 }
bob@dylan:~$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
<li>Directory: <code>ES6_basic</code></li>
<li>File: <code>7-getBudgetObject.js</code></li>
</ul>
</div>

<h3 class="panel-title">
8. No need to create empty objects before adding in properties
</h3>

Rewrite the <code>getBudgetForCurrentYear</code> function to use ES6 computed property names on the <code>budget</code> object</p>

<pre><code>function getCurrentYear() {
const date = new Date();
return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
const budget = {};

budget[`income-${getCurrentYear()}`] = income;
budget[`gdp-${getCurrentYear()}`] = gdp;
budget[`capita-${getCurrentYear()}`] = capita;

return budget;
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 8-main.js
import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

console.log(getBudgetForCurrentYear(2100, 5200, 1090));

bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js
{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
bob@dylan:~$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
<li>Directory: <code>ES6_basic</code></li>
<li>File: <code>8-getBudgetCurrentYear.js</code></li>
</ul>
</div>

<h3 class="panel-title">
9. ES6 method properties
</h3>

Rewrite <code>getFullBudgetObject</code> to use ES6 method properties in the <code>fullBudget</code> object</p>

<pre><code>import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
const budget = getBudgetObject(income, gdp, capita);
const fullBudget = {
...budget,
getIncomeInDollars: function (income) {
return `$${income}`;
},
getIncomeInEuros: function (income) {
return `${income} euros`;
},
};

return fullBudget;
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 9-main.js
import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));

bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js
$20
20 euros
bob@dylan:~$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
<li>Directory: <code>ES6_basic</code></li>
<li>File: <code>9-getFullBudget.js</code></li>
</ul>
</div>

<h3 class="panel-title">
10. For...of Loops
</h3>

Rewrite the function <code>appendToEachArrayValue</code> to use ES6’s <code>for...of</code> operator. And don’t forget that <code>var</code> is not ES6-friendly.</p>

<pre><code>export default function appendToEachArrayValue(array, appendString) {
for (var idx in array) {
var value = array[idx];
array[idx] = appendString + value;
}

return array;
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 10-main.js
import appendToEachArrayValue from './10-loops.js';

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

bob@dylan:~$
bob@dylan:~$ npm run dev 10-main.js
[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
bob@dylan:~$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
<li>Directory: <code>ES6_basic</code></li>
<li>File: <code>10-loops.js</code></li>
</ul>
</div>

<h3 class="panel-title">
11. Iterator
</h3>

Write a function named <code>createEmployeesObject</code> that will receive two arguments:</p>

<ul>
<li><code>departmentName</code> (String)</li>
<li><code>employees</code> (Array of Strings)</li>
</ul>

<pre><code>export default function createEmployeesObject(departmentName, employees) {

}
</code></pre>

<p>The function should return an object with the following format:</p>

<pre><code>{
$departmentName: [
$employees,
],
}
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 11-main.js
import createEmployeesObject from './11-createEmployeesObject.js';

console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

bob@dylan:~$
bob@dylan:~$ npm run dev 11-main.js
{ Software: [ 'Bob', 'Sylvie' ] }
bob@dylan:~$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
<li>Directory: <code>ES6_basic</code></li>
<li>File: <code>11-createEmployeesObject.js</code></li>
</ul>
</div>

<h3 class="panel-title">
12. Let's create a report object
</h3>

Write a function named <code>createReportObject</code> whose parameter, <code>employeesList</code>, is the return value of the previous function <code>createEmployeesObject</code>.</p>

<pre><code>export default function createReportObject(employeesList) {

}
</code></pre>

<p><code>createReportObject</code> should return an object containing the key <code>allEmployees</code> and a method property called <code>getNumberOfDepartments</code>. </p>

<p><code>allEmployees</code> is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.</p>

<p>The method property receives <code>employeesList</code> and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.</p>

<pre><code>{
allEmployees: {
engineering: [
'John Doe',
'Guillaume Salva',
],
},
};
</code></pre>

<p>Execution:</p>

<pre><code>bob@dylan:~$ cat 12-main.js
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
...createEmployeesObject('engineering', ['Bob', 'Jane']),
...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));

bob@dylan:~$
bob@dylan:~$ npm run dev 12-main.js
{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
2
bob@dylan:~$
</code></pre>

</div>

<div class="list-group">
<!-- Task URLs -->

<!-- Technical information -->
<div class="list-group-item">
<p><strong>Repo:</strong></p>
<ul>
<li>GitHub repository: <code>holbertonschool-web_back_end</code></li>
<li>Directory: <code>ES6_basic</code></li>
<li>File: <code>12-createReportObject.js</code></li>
</ul>
</div>

</details>
