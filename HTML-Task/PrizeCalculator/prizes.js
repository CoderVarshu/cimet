// const awards = [
//   {
//     name: "James Peebles",
//     category: "javelin",
//     team: "Mumbai Indians",
//     year: 2019,
//   },
//   {
//     name: "Michel Mayor",
//     category: "javelin",
//     team: "Gujarat Titans",
//     year: 2019,
//   },
//   {
//     name: "Didier Queloz",
//     category: "javelin",
//     team: "Gujarat Titans",
//     year: 2019,
//   },
//   {
//     name: "John B. Goodenough",
//     category: "Shooting",
//     team: "Chennai Super Kings",
//     year: 2019,
//   },
//   {
//     name: "M. Stanley Whittingham",
//     category: "Shooting",
//     team: "Chennai Super Kings",
//     year: 2019,
//   },
//   {
//     name: "Akira Yoshino",
//     category: "Shooting",
//     team: "Chennai Super Kings",
//     year: 2019,
//   },
//   {
//     name: "Arthur Ashkin",
//     category: "javelin",
//     team: "Pune Warriors",
//     year: 2018,
//   },
//   {
//     name: "Gerard Mourou",
//     category: "javelin",
//     team: "Deccan Chargers",
//     year: 2018,
//   },
//   {
//     name: "Donna Strickland",
//     category: "javelin",
//     team: "Deccan Chargers",
//     year: 2018,
//   },
//   {
//     name: "Frances H. Arnold",
//     category: "Shooting",
//     team: "Kolkata Riders",
//     year: 2018,
//   },
//   {
//     name: "George P. Smith",
//     category: "Shooting",
//     team: "Sunrisers Hyderabad",
//     year: 2018,
//   },
//   {
//     name: "Sir Gregory P. Winter",
//     category: "Shooting",
//     team: "Sunrisers Hyderabad",
//     year: 2018,
//   },
// ];


const testCase1 = [
  { name: "Alice", category: "swimming", team: "Aqua Stars", year: 2022 },
  { name: "Bob", category: "swimming", team: "Aqua Stars", year: 2022 },
  { name: "Charlie", category: "swimming", team: "Water Wizards", year: 2022 },
  { name: "David", category: "running", team: "Speed Demons", year: 2022 },
  { name: "Eve", category: "running", team: "Swift Feet", year: 2022 },
  { name: "Frank", category: "swimming", team: "Aqua Stars", year: 2023 },
  { name: "Grace", category: "swimming", team: "Water Wizards", year: 2023 },
  { name: "Henry", category: "running", team: "Speed Demons", year: 2023 },
];

const testCase2 = [
  { name: "John", category: "chess", team: "Mind Masters", year: 2024 },
  { name: "Jane", category: "chess", team: "Mind Masters", year: 2024 },
  { name: "Jack", category: "chess", team: "Brain Busters", year: 2024 },
  { name: "Jill", category: "chess", team: "Thinkers United", year: 2024 },
  { name: "Jim", category: "chess", team: "Thinkers United", year: 2024 },
];

const testCase3 = [
  { name: "Alex", category: "archery", team: "Arrow Aces", year: 2025 },
  { name: "Beth", category: "archery", team: "Arrow Aces", year: 2025 },
  { name: "Carl", category: "fencing", team: "Sword Stars", year: 2025 },
  { name: "Dana", category: "fencing", team: "Sword Stars", year: 2025 },
  { name: "Erik", category: "fencing", team: "Sword Stars", year: 2025 },
];

const testCase4 = [];

const testCase5 = [
  { name: "Solo Winner", category: "solo", team: "One Person Show", year: 2026 },
];

function CalculatePrizes(award) {
  const awards = award.sort((a, b) => a.year - b.year);

  let prizeDistribution = {};
  let result = [];

  awards.forEach((ele) => {
    const { category, year, team, name } = ele;

    key = category + "-" + year;

    if (!prizeDistribution[key]) {
      prizeDistribution[key] = {
        category: category,
        year: year,
        teams: {},
      };
    }
    if (!prizeDistribution[key].teams[team]) {
      prizeDistribution[key].teams[team] = {
        winners: [],
        winnerCount: 0,
      };
    }
    prizeDistribution[key].teams[team].winners.push(name);
    prizeDistribution[key].teams[team].winnerCount += 1;
  });

  for (let categoryYearKey in prizeDistribution) {
    const categoryYearData = prizeDistribution[categoryYearKey];
    const { category, year, teams } = categoryYearData;

    let totalTeams = Object.keys(teams).length;
    let sharePerTeam = 1 / totalTeams;
    let winnerArr = [];

    for (let teamKey in teams) {
      const teamData = teams[teamKey];
      const { winners, winnerCount } = teamData;
      const sharePerWinner = sharePerTeam / winnerCount;

      winners.forEach((element) => {
        winnerArr.push({
          name: element,
          share: parseFloat(sharePerWinner.toFixed(2)),
        });
      });
    }
    result.push({
      category: category,
      year: year,
      winners: winnerArr,
    });
  }
  return JSON.stringify(result, null, 2);
}

console.log((CalculatePrizes(testCase5)));
