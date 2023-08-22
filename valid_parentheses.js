// Algorithm-->
// 1.initialize empty stack
//  1.1 create object map key and value
// 2.iterate through each character in String
// 3.if opening bracket push into stack
//  3.1 if closing bracket return false
// 4.check if stack is empty
// 5.if closing bracket is first then false because it will not complete sequence at first place.
// 6.


function valid_parenthesis(str)       //given string is s in problem description
{
    const stack=[];    
    //object mapping 
    const all_brackets={'(':')','[':']','{':'}'};   //already given in problem description
    for(const char of str)
    {
        if(all_brackets[char]===undefined)
        {
            stack.push(char);
        }
        else
        {
            if(stack.length===0 || stack[stack.length-1] != all_brackets[char])
            {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length===0;
}
//given cases in problem description
console.log(valid_parenthesis("()"));    // output false
console.log(valid_parenthesis("()[]{}")); // false
console.log(valid_parenthesis("(]"));  //false
//other cases
console.log(valid_parenthesis("]][["));  //true
console.log(valid_parenthesis(")(][}{")); //true
console.log(valid_parenthesis("()[{ ]}")); //false

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false