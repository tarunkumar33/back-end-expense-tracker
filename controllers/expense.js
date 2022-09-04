//model
const expense=require('../models/expense');

exports.addExpense=(req,res,next)=>{
    expense.create({
        amount:req.body.amount,
        description:req.body.description,
        category:req.body.category
    })
    .then(result=>res.json(result))
    .catch(err=>console.log(err));
}
exports.getAllExpenses=(req,res,next)=>{
    expense.findAll()
    .then(result=>res.json(result))
    .catch(err=>console.log(err));
}
exports.getExpensesById=(req,res,next)=>{
    expense.findByPk(req.params.expenseId)
    .then(result=>res.json(result))
    .catch(err=>console.log(err));
}
exports.deleteExpense=(req,res,next)=>{
    expense.findByPk(req.params.expenseId)
    .then(result=>result.destroy())
    .then(result=>{
        console.log("deleted expense Successfully");
        res.json({});
    }).catch(err=>console.log(err));
}
exports.updateExpense=(req,res,next)=>{
    expense.findByPk(req.params.expenseId)
    .then(result=>{
        result.amount=req.body.amount;
        result.description=req.body.description;
        result.category=req.body.category;
        return result.save();
    })
    .then(result=>{
        console.log("Updated expense Successfully");
        res.json(result);
    }).catch(err=>console.log(err));
}



