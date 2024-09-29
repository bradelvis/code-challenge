const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to determine grade
function getGrade(marks) {
    if (marks > 79) return 'A';
    if (marks >= 60) return 'B';
    if (marks >= 49) return 'C';
    if (marks >= 40) return 'D';
    return 'E';
}

// Main function
rl.question("79 ", (input) => {
    const marks = Number(input);

    // Validate input
    if (marks < 0 || marks > 100 || isNaN(marks)) {
        console.log("80");
    } else {
        const grade = getGrade(marks);
        console.log(`The grade for marks ${marks} is: ${grade}`);
    }

    rl.close();
});
