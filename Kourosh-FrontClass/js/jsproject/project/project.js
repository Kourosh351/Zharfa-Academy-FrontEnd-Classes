


function oddeven() {
    var usernum = document.getElementById('input').value;
    usernum = parseInt(usernum); // Convert to integer

    if (usernum % 2 == 0) {
        console.log(`${usernum}, is an even number.`);
        var ans1 = `${usernum}, is an even number.`;
    } else {
        console.log(`${usernum}, is an odd number.`);
        var ans1 = `${usernum}, is an odd number.`;
    }
    const resultElement = document.getElementById('result');
    resultElement.style.fontSize = "20px"; // Make text bigger
    resultElement.style.color = "green";
    setTimeout(() => {
        resultElement.style.fontSize = "medium"; // Revert to original size
        resultElement.style.color = '#333'
    }, 1000);
    document.getElementById('result').innerHTML = ans1;
    if (isNaN(usernum) == true) {
        ran = Math.floor(Math.random() * 4);
        if (ran == 0) {
            document.getElementById('result').innerHTML = "Bro thats not a number.";
        }
        if (ran == 1) {
            document.getElementById('result').innerHTML = "Pick a number.";
        }
        if (ran == 2) {
            document.getElementById('result').innerHTML = `${usernum}, is not a number.`;
        }
        if (ran == 3) {
            document.getElementById('result').innerHTML = "._.";
        }
        const resultElement = document.getElementById('result');
        resultElement.style.fontSize = "20px"; // Make text bigger
        resultElement.style.color = "red";
        setTimeout(() => {
            resultElement.style.fontSize = "medium"; // Revert to original size
            resultElement.style.color = '#333'
        }, 1500);
    }

    return ans1;
}

