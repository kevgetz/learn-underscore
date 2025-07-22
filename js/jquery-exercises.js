// jQuery Exercises to deepen your knowledge

const jQueryExercises = {
    // DOM Manipulation
    
    addListItem: function() {
        // Task: Add a new list item to #dynamic-list with text "New Item"
        // The new item should have the same styling as existing items
        // Hint: Use jQuery's append() or appendTo() method
        
        // YOUR CODE HERE
    },

    removeLastItem: function() {
        // Task: Remove the last item from #dynamic-list
        // Hint: Use jQuery's last() and remove() methods
        
        // YOUR CODE HERE
    },

    toggleHighlight: function(selector) {
        // Task: Toggle a 'highlighted' class on all elements matching the selector
        // Create the CSS class with background-color: yellow
        // Hint: Use jQuery's toggleClass() method
        
        // YOUR CODE HERE
    },

    // Events

    setupClickHandler: function() {
        // Task: Set up a click handler on #animate-box that:
        // 1. Changes the background color to random color
        // 2. Animates the box to a random position
        // 3. Shows an alert with the new position
        // Hint: Use jQuery's on() or click() method
        
        // YOUR CODE HERE
    },

    setupInputHandler: function() {
        // Task: Set up an input handler on #input-test that:
        // 1. Counts the number of characters typed
        // 2. Updates a counter display (create a new element for this)
        // 3. Changes input border color based on length (red < 5, yellow 5-10, green > 10)
        // Hint: Use jQuery's on('input') event
        
        // YOUR CODE HERE
    },

    // Ajax (Simulated)

    loadData: function(url) {
        // Task: Simulate an AJAX call using jQuery's Deferred object
        // 1. Return a promise that resolves after 1 second
        // 2. Resolve with mock data: { users: [{name: 'John'}, {name: 'Jane'}] }
        // 3. Handle success and error cases
        // Hint: Use $.Deferred() and setTimeout
        
        // YOUR CODE HERE
    },

    // Animations

    createAnimation: function() {
        // Task: Create a complex animation sequence on #animate-box:
        // 1. Fade out to 50% opacity
        // 2. Slide to the right by 200px
        // 3. Rotate 360 degrees (use CSS transform)
        // 4. Fade back to 100% opacity
        // Hint: Use jQuery's animate() method with callbacks or promise chains
        
        // YOUR CODE HERE
    },

    // Traversal

    findRelatives: function(element) {
        // Task: Given an element, find and return an object containing:
        // - parent: the parent element
        // - siblings: all sibling elements
        // - children: all direct children
        // - nextSibling: the next sibling element
        // Hint: Use jQuery's parent(), siblings(), children(), next() methods
        
        // YOUR CODE HERE
    },

    // Utilities

    processFormData: function(formSelector) {
        // Task: Create a function that:
        // 1. Collects all form input values
        // 2. Validates that no fields are empty
        // 3. Returns an object with field names as keys and values
        // 4. Shows error messages for empty fields
        // Hint: Use jQuery's serializeArray() or each() with val()
        
        // YOUR CODE HERE
    },

    // Advanced - Event Delegation

    setupDynamicHandlers: function() {
        // Task: Set up event delegation for dynamically added list items
        // 1. When clicking on any list item (current or future), toggle a 'selected' class
        // 2. When double-clicking, remove the item with a fade-out animation
        // 3. Keep track of selected items in an array
        // Hint: Use jQuery's on() method with delegation syntax
        
        // YOUR CODE HERE
    }
};

// Initialize jQuery exercises when document is ready
$(document).ready(function() {
    // Add any initialization code here
    console.log('jQuery exercises loaded and ready!');
});