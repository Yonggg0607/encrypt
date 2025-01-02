function greetBasedOnTime() {
    const d = new Date();
    let hour = d.getHours(); 
    let greeting;
    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
    console.log(greeting);
}
greetBasedOnTime();
