function atmMachine() {
    const amount = Number(document.querySelectorAll("input")[0].value);
    const preferredNote = Number(document.querySelectorAll("input")[1].value);
    const availableNotes = [500, 100, 50, 20, 10, 5, 1];
    const maxNotes = 200;
  
    // Validate amount
    if (amount < 100 || amount > 100000) {
      alert("Amount should be between 100 and 100000");
      return;
    }
  
    // Validate preferred note
    if (!availableNotes.includes(preferredNote)) {
      alert("Preferred note should be 500, 100, 50, 20, 10, 5, or 1");
      return;
    }
  
    let remainingAmount = amount;
    let noteDistribution = {};
  
    // Function to calculate note distribution
    function calculateNotes(noteValue) {
      let noteCount = Math.floor(remainingAmount / noteValue);  // 113
      noteCount = noteCount > maxNotes ? maxNotes : noteCount;
      noteDistribution[noteValue] = noteCount;
      remainingAmount -= noteCount * noteValue;
    }
  
    // Calculate preferred note distribution first
    calculateNotes(preferredNote);
  
    // Calculate remaining note distribution
    for (let note of availableNotes) {
      if (note !== preferredNote) {
        calculateNotes(note);
      }
    }
  
    // Display the distribution
    for (let [note, count] of Object.entries(noteDistribution)) {
      if (count > 0) {
        console.log(`Currency Note ${note} : ${count}`);
      }
    }
  }
  