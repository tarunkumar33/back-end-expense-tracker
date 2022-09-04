//express
const express=require('express');
//controllers
const expenseController=require('../controllers/expense');
//router small app
const router=express.Router();
//routing
router.post('/addExpense',expenseController.addExpense);
router.get('/expenses',expenseController.getAllExpenses);
router.get('/expenses/:expenseId',expenseController.getExpensesById);
router.delete('/deleteExpense/:expenseId',expenseController.deleteExpense);
router.put('/updateExpense/:expenseId',expenseController.updateExpense);

module.exports=router;