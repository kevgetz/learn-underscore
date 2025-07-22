// Underscore.js Methods - Real World Usage Scenarios
// Complete each task using the appropriate underscore.js method

const underscoreTasks = {
  // COLLECTIONS (Works on both Arrays and Objects)

  task1_logUserNames: function (users) {
    // Task: Given an array of user objects, log each user's name to the console
    // Input: [{name: 'John', age: 25}, {name: 'Jane', age: 30}]
    // Expected output: 'John' and 'Jane' logged to console
    users.forEach(function (user) {
      console.log(user.name);
    });

    // YOUR CODE HERE
  },

  task2_doubleAllPrices: function (products) {
    // Task: Given an array of products, return a new array with all prices doubled
    // Input: [{name: 'Laptop', price: 1000}, {name: 'Mouse', price: 20}]
    // Expected output: [{name: 'Laptop', price: 2000}, {name: 'Mouse', price: 40}]
    // YOUR CODE HERE
  },

  task3_calculateTotalPrice: function (cart) {
    // Task: Calculate the total price of all items in a shopping cart
    // Input: [{item: 'Book', price: 15, quantity: 2}, {item: 'Pen', price: 3, quantity: 5}]
    // Expected output: 45 (15*2 + 3*5)
    // YOUR CODE HERE
  },

  task4_findFirstAdult: function (people) {
    // Task: Find the first person who is 18 or older
    // Input: [{name: 'Tom', age: 16}, {name: 'Sarah', age: 22}, {name: 'Mike', age: 25}]
    // Expected output: {name: 'Sarah', age: 22}
    // YOUR CODE HERE
  },

  task5_getActiveUsers: function (users) {
    // Task: Get all users who are currently active
    // Input: [{name: 'John', active: true}, {name: 'Jane', active: false}, {name: 'Bob', active: true}]
    // Expected output: [{name: 'John', active: true}, {name: 'Bob', active: true}]
    // YOUR CODE HERE
  },

  // ARRAYS

  task6_getFirstThreeItems: function (items) {
    // Task: Get the first 3 items from an array
    // Input: ['apple', 'banana', 'orange', 'grape', 'kiwi']
    // Expected output: ['apple', 'banana', 'orange']
    // YOUR CODE HERE
  },

  task7_getLastTwoScores: function (scores) {
    // Task: Get the last 2 scores from a list of test scores
    // Input: [85, 92, 78, 95, 88, 91]
    // Expected output: [88, 91]
    // YOUR CODE HERE
  },

  task8_findPositionOfError: function (logs) {
    // Task: Find the position of the first 'ERROR' in a log array
    // Input: ['INFO', 'DEBUG', 'ERROR', 'WARNING', 'ERROR']
    // Expected output: 2
    // YOUR CODE HERE
  },

  task9_removeDuplicateTags: function (tags) {
    // Task: Remove duplicate tags from a list
    // Input: ['javascript', 'react', 'javascript', 'node', 'react', 'css']
    // Expected output: ['javascript', 'react', 'node', 'css']
    // YOUR CODE HERE
  },

  task10_flattenNestedCategories: function (categories) {
    // Task: Flatten a nested category structure into a single array
    // Input: ['Electronics', ['Computers', 'Phones'], 'Books', ['Fiction', ['Sci-Fi', 'Fantasy']]]
    // Expected output: ['Electronics', 'Computers', 'Phones', 'Books', 'Fiction', 'Sci-Fi', 'Fantasy']
    // YOUR CODE HERE
  },

  // FUNCTIONS

  task11_createBoundLogger: function (loggerConfig) {
    // Task: Create a logger function that always uses the provided config context
    // Input: {prefix: '[APP]', level: 'INFO'}
    // Expected: Return a bound function that logs with the prefix
    // When called with ('User logged in'), it should log: '[APP] INFO: User logged in'

    function logger(message) {
      console.log(`${this.prefix} ${this.level}: ${message}`);
    }

    // YOUR CODE HERE
  },

  task12_delayedNotification: function (message, delayMs) {
    // Task: Show a notification after a specified delay
    // The function should log the message after delayMs milliseconds
    // YOUR CODE HERE
  },

  task13_throttledScrollHandler: function () {
    // Task: Create a throttled scroll handler that logs 'Scrolling' but only once every 500ms
    // Return the throttled function

    function handleScroll() {
      console.log("Scrolling");
    }

    // YOUR CODE HERE
  },

  task14_debouncedSearch: function () {
    // Task: Create a debounced search function that only executes 300ms after the user stops typing
    // Return the debounced function

    function performSearch(query) {
      console.log("Searching for:", query);
    }

    let timeoutId;

    return function (query) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        performSearch(query);
      }, 300);
    };
  },

  task15_initializeOnce: function () {
    // Task: Create an initialization function that only runs once, even if called multiple times
    // Return the wrapped function

    let initCount = 0;
    function initialize() {
      initCount++;
      console.log("Initialized! Count:", initCount);
      return initCount;
    }

    // YOUR CODE HERE
  },

  // OBJECTS

  task16_extractPropertyNames: function (config) {
    // Task: Extract all property names from a configuration object
    // Input: {host: 'localhost', port: 3000, debug: true}
    // Expected output: ['host', 'port', 'debug']
    // YOUR CODE HERE
  },

  task17_extractPropertyValues: function (stats) {
    // Task: Extract all values from a statistics object
    // Input: {views: 1500, likes: 230, shares: 45}
    // Expected output: [1500, 230, 45]
    // YOUR CODE HERE
  },

  task18_mergeConfigurations: function (defaultConfig, userConfig, envConfig) {
    // Task: Merge multiple configuration objects, with later ones overriding earlier ones
    // Return the merged configuration
    // YOUR CODE HERE
  },

  task19_extractUserCredentials: function (user) {
    // Task: Extract only username and password from a user object
    // Input: {username: 'john_doe', password: 'secret', email: 'john@example.com', age: 25}
    // Expected output: {username: 'john_doe', password: 'secret'}
    // YOUR CODE HERE
  },

  task20_removePrivateData: function (userData) {
    // Task: Remove password and ssn fields from user data
    // Input: {name: 'John', email: 'john@example.com', password: 'secret', ssn: '123-45-6789'}
    // Expected output: {name: 'John', email: 'john@example.com'}
    // YOUR CODE HERE
  },
};

// Export for testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = underscoreTasks;
}
