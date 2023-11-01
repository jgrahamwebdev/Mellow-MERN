
const HomeController = require("../controllers/home.controller");  

module.exports = (app) => {

    // Get ALL Expenses
    app.get("/api/listings", HomeController.findAllListings)

    // CREATE Expense
    app.post("/api/listing", HomeController.createListing)
    
    //READ post
    // app.get("/posts/:id", PostController.getOnePost)
    
    //UPDATE post
    // app.put("/posts/:id", PostController.updatePost)
    
    //DELETE Expense
    // app.delete('/api/expense/:id', FinanceController.deleteAnExpense);
}