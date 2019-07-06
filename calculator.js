

    //Function to get elements easier and quicker
    let el = function (element) {
        if(element.charAt(0) === "#")
            return document.querySelector(element);
        
        return document.querySelectorAll(element);
    }

    //Getting all elements
    let viewer = el("#viewer"),
        currentNumber = "",
        oldNum = "",
        ops = el(".button"),
        nums = el(".num"),
        results = 0,
        operator = "",
        viewNumbers = "",        /// da mi sacuva stare brojeve za viewer ONLY ESTETIKA BATO hehehe
        equal = el("#equals");

    //Function to get the first number
    let setNum = function () {
        if(results != 0) {
            results = 0;
            viewNumbers = "";
            currentNumber = this.getAttribute('data-num');
            viewer.innerHTML = currentNumber;
        }
        else {
            currentNumber += this.getAttribute("data-num");;
        }

        viewer.innerHTML = viewNumbers + currentNumber;
    }

    //Gets the operator and clears currentNumber so it can get second one
    let moveNum = function () {
        oldNum = currentNumber;
        currentNumber = "";
        operator = this.getAttribute("data-ops");
        viewNumbers = oldNum + operator;

        viewer.innerHTML = viewNumbers;
    }
    
    //When = (equal) is clicked, show the result
    let displayResults = function () {
        currentNumber = parseFloat(currentNumber);
        oldNum = parseFloat(oldNum);

        switch(operator) {
            case "+":
            results = currentNumber + oldNum;
            break;

            case "-":
            results = oldNum - currentNumber;
            break;

            case "*":
            results = oldNum * currentNumber;
            break;

            case "/":
            results = oldNum / currentNumber;
            break;
        }

        viewer.innerHTML = results;
    }

    //When C button is clicked, reset everything
    let clearAll = function () {
        currentNumber = "";
        results = 0;
        oldNum = "";
        operator = "";
        viewNumbers = "";
        viewer.innerHTML = 0;
    }

    //Get all numbers from div class "num"
    for(let i = 0, l = nums.length; l > i; i++) {
        nums[i].onclick = setNum;
    }

    //Get all operators from div class "button"
    for(let i = 0, l = ops.length; l > i; i++) {
        ops[i].onclick = moveNum;
    }

    //Set the equal button to the displayResults function
    equal.onclick = displayResults;


    el("#C").onclick = clearAll;

