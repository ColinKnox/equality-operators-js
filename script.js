const numNeighbors = Number(
  prompt("How many neighbor states does your state have?")
);

if (numNeighbors === 1) {
  console.log("Only 1 neighbor? You must be fun at parties.");
} else if (numNeighbors > 1) {
  console.log("That's great! The more, the merrier!");
} else {
  console.log(
    "Wooow, nobody? I think you're fibbing. You have to at least have 1 neighbor."
  );
}
