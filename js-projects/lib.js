const bookdtls = {
    Name: "HPO",
    author: "JKR",
    price: 50.70,
    
    // Define an arrow function as a method of the object
    hello: function() {
        console.log(`hi ${this.author}`);
    }
};

console.log(bookdtls);
bookdtls.hello(); // Call the method directly from the object