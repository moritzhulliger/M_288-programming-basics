// Helper function to simulate random outcomes
function rollDice(sides = 20) {
    return Math.floor(Math.random() * sides) + 1;
  }
  
  // Function to wake up in the morning
  function wakeUp() {
    const wakeUpRoll = rollDice(6);
    return wakeUpRoll === 6 ? "Leaped out of bed heroically!" : "Hit snooze... again.";
  }
  
  // Function to prepare breakfast
  function prepareBreakfast() {
    const breakfastOptions = ["Mystic Oats", "Dragon Eggs", "Potion of Coffee", "Leftover Pizza"];
    const choice = breakfastOptions[rollDice(breakfastOptions.length) - 1];
    return `Breakfast: ${choice}`;
  }
  
  // Function for a workout montage
  function workout() {
    const reps = rollDice(10);
    return `Did ${reps} epic push-ups while epic music played in the background!`;
  }
  
  // Function to fight a monster
  function fightMonster() {
    const attackRoll = rollDice();
    if (attackRoll > 15) return "Vanquished the monster with a single blow!";
    if (attackRoll > 5) return "Barely survived after a fierce battle.";
    return "Tripped over own sword. Monster laughed and walked away.";
  }
  
  // Adventurer's daily log
  function adventurerDailyLog() {
    console.log("🌞 Adventurer's Daily Routine 🌞");
    console.log(wakeUp());
    console.log(prepareBreakfast());
    console.log(workout());
    console.log(fightMonster());
    console.log("🏆 End of Day - Another legend written!");
  }
  
  // Run the demo
  adventurerDailyLog();
  