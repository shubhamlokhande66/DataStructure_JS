/**
 * @problem : To check parentheses must appear in a balanced manner
 * 
 * @author : Shubham Lokhande
 * 
 */

const BalancingParentheses = require("../FunctionalProgram/MatchMain");
const prompt = require('prompt-sync')();
let exp = prompt("Enter the expression: ");
BalancingParentheses.BalParentheses(exp);