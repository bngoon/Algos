// function tournamentWinner(competitions, results) {
//     let winner = {};
//     let currentBestTeam = '';
//     winner[currentBestTeam] = 0;

//     for (let i = 0; i < competitions.length; i++) {
//         let [homeTeam, awayTeam] = competitions[i];
//         let currentScore = results[i];

//         // Initialize points if not already in the winner object
//         if (winner[homeTeam] === undefined) {
//             winner[homeTeam] = 0;
//         }
//         if (winner[awayTeam] === undefined) {
//             winner[awayTeam] = 0;
//         }

//         // Update points based on result
//         if (currentScore === 0) {
//             winner[awayTeam] += 3; // Away team wins
//         } else {
//             winner[homeTeam] += 3; // Home team wins (assuming currentScore is 1)
//         }

//         // Update currentBestTeam if needed
//         if (winner[homeTeam] > winner[currentBestTeam]) {
//             currentBestTeam = homeTeam;
//         }
//         if (winner[awayTeam] > winner[currentBestTeam]) {
//             currentBestTeam = awayTeam;
//         }
//     }

//     // Return the team with the highest score
//     return currentBestTeam;

    function tournamentWinner(competitions, results) {
        const scores = {};
        let currentBestTeam = '';
        scores[currentBestTeam] = 0;
      
        for (let i = 0; i < competitions.length; i++) {
          const result = results[i];
          const [homeTeam, awayTeam] = competitions[i];
          const winningTeam = result === 1 ? homeTeam : awayTeam;
      
          if (!(winningTeam in scores)) {
            scores[winningTeam] = 0;
          }
      
          scores[winningTeam] += 3;
      
          if (scores[winningTeam] > scores[currentBestTeam]) {
            currentBestTeam = winningTeam;
          }
        }
      
        return currentBestTeam;
      }
      
      // Example usage:
      const competitions = [
        ['Team A', 'Team B'],
        ['Team B', 'Team C'],
        ['Team C', 'Team A']
      ];
      
      const results = [0, 0, 1]; // Team B won the first two matches, Team C won the third match
      
      console.log(tournamentWinner(competitions, results)); // Output: 'Team B'
      

