// Test Runner for all implementations

// Test Runner for all implementations

const testRunner = {
    results: {
        passed: 0,
        failed: 0,
        total: 0
    },

    // Test cases for underscore methods
    underscoreTests: {
        collections: [
            {
                name: 'Task 1: Log User Names',
                test: () => {
                    const logs = [];
                    const originalLog = console.log;
                    console.log = (msg) => logs.push(msg);
                    
                    underscoreTasks.task1_logUserNames([
                        {name: 'John', age: 25}, 
                        {name: 'Jane', age: 30}
                    ]);
                    
                    console.log = originalLog;
                    return logs.includes('John') && logs.includes('Jane');
                }
            },
            {
                name: 'Task 2: Double All Prices',
                test: () => {
                    const result = underscoreTasks.task2_doubleAllPrices([
                        {name: 'Laptop', price: 1000}, 
                        {name: 'Mouse', price: 20}
                    ]);
                    return result[0].price === 2000 && result[1].price === 40;
                }
            },
            {
                name: 'Task 3: Calculate Total Price',
                test: () => {
                    const total = underscoreTasks.task3_calculateTotalPrice([
                        {item: 'Book', price: 15, quantity: 2}, 
                        {item: 'Pen', price: 3, quantity: 5}
                    ]);
                    return total === 45;
                }
            },
            {
                name: 'Task 4: Find First Adult',
                test: () => {
                    const result = underscoreTasks.task4_findFirstAdult([
                        {name: 'Tom', age: 16}, 
                        {name: 'Sarah', age: 22}, 
                        {name: 'Mike', age: 25}
                    ]);
                    return result.name === 'Sarah' && result.age === 22;
                }
            },
            {
                name: 'Task 5: Get Active Users',
                test: () => {
                    const result = underscoreTasks.task5_getActiveUsers([
                        {name: 'John', active: true}, 
                        {name: 'Jane', active: false}, 
                        {name: 'Bob', active: true}
                    ]);
                    return result.length === 2 && result[0].name === 'John' && result[1].name === 'Bob';
                }
            }
        ],
        arrays: [
            {
                name: 'Task 6: Get First Three Items',
                test: () => {
                    const result = underscoreTasks.task6_getFirstThreeItems(['apple', 'banana', 'orange', 'grape', 'kiwi']);
                    return JSON.stringify(result) === JSON.stringify(['apple', 'banana', 'orange']);
                }
            },
            {
                name: 'Task 7: Get Last Two Scores',
                test: () => {
                    const result = underscoreTasks.task7_getLastTwoScores([85, 92, 78, 95, 88, 91]);
                    return JSON.stringify(result) === JSON.stringify([88, 91]);
                }
            },
            {
                name: 'Task 8: Find Position of Error',
                test: () => {
                    const result = underscoreTasks.task8_findPositionOfError(['INFO', 'DEBUG', 'ERROR', 'WARNING', 'ERROR']);
                    return result === 2;
                }
            },
            {
                name: 'Task 9: Remove Duplicate Tags',
                test: () => {
                    const result = underscoreTasks.task9_removeDuplicateTags(['javascript', 'react', 'javascript', 'node', 'react', 'css']);
                    return JSON.stringify(result) === JSON.stringify(['javascript', 'react', 'node', 'css']);
                }
            },
            {
                name: 'Task 10: Flatten Nested Categories',
                test: () => {
                    const result = underscoreTasks.task10_flattenNestedCategories(['Electronics', ['Computers', 'Phones'], 'Books', ['Fiction', ['Sci-Fi', 'Fantasy']]]);
                    return JSON.stringify(result) === JSON.stringify(['Electronics', 'Computers', 'Phones', 'Books', 'Fiction', 'Sci-Fi', 'Fantasy']);
                }
            }
        ],
        functions: [
            {
                name: 'Task 11: Create Bound Logger',
                test: () => {
                    const logs = [];
                    const originalLog = console.log;
                    console.log = (msg) => logs.push(msg);
                    
                    const boundLogger = underscoreTasks.task11_createBoundLogger({prefix: '[APP]', level: 'INFO'});
                    boundLogger('User logged in');
                    
                    console.log = originalLog;
                    return logs[0] === '[APP] INFO: User logged in';
                }
            },
            {
                name: 'Task 12: Delayed Notification',
                test: (done) => {
                    const logs = [];
                    const originalLog = console.log;
                    console.log = (msg) => logs.push(msg);
                    
                    underscoreTasks.task12_delayedNotification('Hello World', 100);
                    
                    setTimeout(() => {
                        console.log = originalLog;
                        done(logs.includes('Hello World'));
                    }, 150);
                    
                    return false; // Async test
                }
            },
            {
                name: 'Task 13: Throttled Scroll Handler',
                test: (done) => {
                    let logs = [];
                    const originalLog = console.log;
                    console.log = () => logs.push('scroll');
                    
                    const throttled = underscoreTasks.task13_throttledScrollHandler();
                    
                    // Simulate rapid calls
                    throttled();
                    throttled();
                    throttled();
                    
                    setTimeout(() => {
                        console.log = originalLog;
                        done(logs.length === 1);
                    }, 600);
                    
                    return false; // Async test
                }
            },
            {
                name: 'Task 14: Debounced Search',
                test: (done) => {
                    let logs = [];
                    const originalLog = console.log;
                    console.log = (msg) => logs.push(msg);
                    
                    const debounced = underscoreTasks.task14_debouncedSearch();
                    
                    // Simulate rapid typing
                    debounced('a');
                    debounced('ab');
                    debounced('abc');
                    
                    setTimeout(() => {
                        console.log = originalLog;
                        done(logs.length === 1 && logs[0].includes('abc'));
                    }, 400);
                    
                    return false; // Async test
                }
            },
            {
                name: 'Task 15: Initialize Once',
                test: () => {
                    const onceFunc = underscoreTasks.task15_initializeOnce();
                    const result1 = onceFunc();
                    const result2 = onceFunc();
                    const result3 = onceFunc();
                    return result1 === 1 && result2 === 1 && result3 === 1;
                }
            }
        ],
        objects: [
            {
                name: 'Task 16: Extract Property Names',
                test: () => {
                    const result = underscoreTasks.task16_extractPropertyNames({host: 'localhost', port: 3000, debug: true});
                    return JSON.stringify(result.sort()) === JSON.stringify(['debug', 'host', 'port']);
                }
            },
            {
                name: 'Task 17: Extract Property Values',
                test: () => {
                    const result = underscoreTasks.task17_extractPropertyValues({views: 1500, likes: 230, shares: 45});
                    return result.includes(1500) && result.includes(230) && result.includes(45);
                }
            },
            {
                name: 'Task 18: Merge Configurations',
                test: () => {
                    const result = underscoreTasks.task18_mergeConfigurations(
                        {host: 'localhost', port: 3000, debug: false},
                        {port: 8080, ssl: true},
                        {debug: true}
                    );
                    return result.host === 'localhost' && result.port === 8080 && result.ssl === true && result.debug === true;
                }
            },
            {
                name: 'Task 19: Extract User Credentials',
                test: () => {
                    const result = underscoreTasks.task19_extractUserCredentials({
                        username: 'john_doe', 
                        password: 'secret', 
                        email: 'john@example.com', 
                        age: 25
                    });
                    return JSON.stringify(result) === JSON.stringify({username: 'john_doe', password: 'secret'});
                }
            },
            {
                name: 'Task 20: Remove Private Data',
                test: () => {
                    const result = underscoreTasks.task20_removePrivateData({
                        name: 'John', 
                        email: 'john@example.com', 
                        password: 'secret', 
                        ssn: '123-45-6789'
                    });
                    return JSON.stringify(result) === JSON.stringify({name: 'John', email: 'john@example.com'});
                }
            }
        ]
    },

    // Test cases for jQuery exercises
    jQueryTests: [
        {
            name: 'addListItem',
            test: () => {
                const initialCount = $('#dynamic-list li').length;
                jQueryExercises.addListItem();
                const newCount = $('#dynamic-list li').length;
                const lastItem = $('#dynamic-list li').last().text();
                return newCount === initialCount + 1 && lastItem === 'New Item';
            }
        },
        {
            name: 'removeLastItem',
            test: () => {
                const initialCount = $('#dynamic-list li').length;
                jQueryExercises.removeLastItem();
                const newCount = $('#dynamic-list li').length;
                return newCount === initialCount - 1;
            }
        },
        {
            name: 'toggleHighlight',
            test: () => {
                const testElement = $('#dynamic-list li').first();
                const hadClass = testElement.hasClass('highlighted');
                jQueryExercises.toggleHighlight('#dynamic-list li:first');
                const hasClass = testElement.hasClass('highlighted');
                return hadClass !== hasClass;
            }
        }
    ],

    // Test cases for advanced topics
    advancedTests: [
        {
            name: 'argumentsToArray',
            test: () => {
                const result = advancedTopics.argumentsToArray(1, 2, 3, 4);
                return Array.isArray(result) && JSON.stringify(result) === JSON.stringify([1, 2, 3, 4]);
            }
        },
        {
            name: 'createVariadic',
            test: () => {
                const sum = advancedTopics.createVariadic((args) => args.reduce((a, b) => a + b, 0));
                return sum(1, 2, 3, 4) === 10;
            }
        },
        {
            name: 'customReduce',
            test: () => {
                const sum = advancedTopics.customReduce([1, 2, 3, 4], (acc, val) => acc + val, 0);
                return sum === 10;
            }
        },
        {
            name: 'flatMap',
            test: () => {
                const result = advancedTopics.flatMap([1, 2, 3], x => [x, x * 2]);
                return JSON.stringify(result) === JSON.stringify([1, 2, 2, 4, 3, 6]);
            }
        },
        {
            name: 'deepClone',
            test: () => {
                const original = {a: {b: {c: 1}}, d: [1, 2, 3]};
                const clone = advancedTopics.deepClone(original);
                clone.a.b.c = 2;
                clone.d.push(4);
                return original.a.b.c === 1 && original.d.length === 3;
            }
        },
        {
            name: 'compose',
            test: () => {
                const addOne = x => x + 1;
                const double = x => x * 2;
                const composed = advancedTopics.compose(double, addOne);
                return composed(3) === 8; // (3 + 1) * 2
            }
        },
        {
            name: 'memoize',
            test: () => {
                let callCount = 0;
                const expensive = (x) => {
                    callCount++;
                    return x * 2;
                };
                const memoized = advancedTopics.memoize(expensive);
                
                memoized(5);
                memoized(5);
                memoized(5);
                
                return callCount === 1 && memoized(5) === 10;
            }
        },
        {
            name: 'curry',
            test: () => {
                const add = advancedTopics.curry((a, b, c) => a + b + c);
                return add(1)(2)(3) === 6 && add(1, 2)(3) === 6;
            }
        }
    ],

    // Run a single test
    runTest: function(test, category, callback) {
        const testCase = document.createElement('div');
        testCase.className = 'test-case';
        
        const title = document.createElement('h3');
        title.textContent = test.name;
        testCase.appendChild(title);

        try {
            const result = test.test((asyncResult) => {
                // Handle async tests
                if (asyncResult) {
                    this.updateTestResult(testCase, true);
                    this.results.passed++;
                } else {
                    this.updateTestResult(testCase, false, 'Async test failed');
                    this.results.failed++;
                }
                this.results.total++;
                this.updateSummary();
            });

            if (result !== false) { // Not an async test
                if (result) {
                    this.updateTestResult(testCase, true);
                    this.results.passed++;
                } else {
                    this.updateTestResult(testCase, false, 'Test assertion failed');
                    this.results.failed++;
                }
                this.results.total++;
            }
        } catch (error) {
            this.updateTestResult(testCase, false, error.message);
            this.results.failed++;
            this.results.total++;
        }

        document.getElementById(category + '-results').appendChild(testCase);
        
        if (callback) callback();
    },

    updateTestResult: function(testCase, passed, error) {
        testCase.classList.add(passed ? 'pass' : 'fail');
        
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result';
        resultDiv.textContent = passed ? '✓ Passed' : '✗ Failed';
        testCase.appendChild(resultDiv);

        if (error) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error';
            errorDiv.textContent = error;
            testCase.appendChild(errorDiv);
        }
    },

    updateSummary: function() {
        document.getElementById('passed-count').textContent = this.results.passed;
        document.getElementById('failed-count').textContent = this.results.failed;
        document.getElementById('total-count').textContent = this.results.total;
    },

    clearResults: function() {
        document.querySelectorAll('.test-results').forEach(container => {
            container.innerHTML = '';
        });
        this.results = { passed: 0, failed: 0, total: 0 };
        this.updateSummary();
    },

    runAllTests: function() {
        this.clearResults();

        // Run underscore tests
        Object.entries(this.underscoreTests).forEach(([category, tests]) => {
            tests.forEach(test => {
                this.runTest(test, category);
            });
        });

        // Run jQuery tests
        this.jQueryTests.forEach(test => {
            this.runTest(test, 'jquery');
        });

        // Run advanced tests
        this.advancedTests.forEach(test => {
            this.runTest(test, 'advanced');
        });

        this.updateSummary();
    }
};

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Update active button
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Update active content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabName).classList.add('active');
        });
    });

    // Run all tests button
    document.getElementById('run-all-tests').addEventListener('click', function() {
        testRunner.runAllTests();
    });

    // jQuery playground interactions
    $('#animate-box').on('click', function() {
        const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        $(this).css('background-color', randomColor);
    });

    $('#dynamic-list').on('click', 'li', function() {
        $(this).toggleClass('selected');
    });
});