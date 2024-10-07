
const awards = [
  {
    name: "James Peebles",
    category: "javelin",
    team: "Mumbai Indians",
    year: 2019,
  },
  {
    name: "Michel Mayor",
    category: "javelin",
    team: "Gujarat Titans",
    year: 2019,
  },
  {
    name: "Didier Queloz",
    category: "javelin",
    team: "Gujarat Titans",
    year: 2019,
  },
  {
    name: "John B. Goodenough",
    category: "Shooting",
    team: "Chennai Super Kings",
    year: 2019,
  },
  {
    name: "M. Stanley Whittingham",
    category: "Shooting",
    team: "Chennai Super Kings",
    year: 2019,
  },
  {
    name: "Akira Yoshino",
    category: "Shooting",
    team: "Chennai Super Kings",
    year: 2019,
  },
  {
    name: "Arthur Ashkin",
    category: "javelin",
    team: "Pune Warriors",
    year: 2018,
  },
  {
    name: "Gerard Mourou",
    category: "javelin",
    team: "Deccan Chargers",
    year: 2018,
  },
  {
    name: "Donna Strickland",
    category: "javelin",
    team: "Deccan Chargers",
    year: 2018,
  },
  {
    name: "Frances H. Arnold",
    category: "Shooting",
    team: "Kolkata Riders",
    year: 2018,
  },
  {
    name: "George P. Smith",
    category: "Shooting",
    team: "Sunrisers Hyderabad",
    year: 2018,
  },
  {
    name: "Sir Gregory P. Winter",
    category: "Shooting",
    team: "Sunrisers Hyderabad",
    year: 2018,
  },
];

function CalculatePrizes(awards) {

  let prizeDistribution = {};
  let result = [];


  awards.forEach(ele => {
    const { category, year, team, name } = ele

    key = category + "-" + year

    if (!prizeDistribution[key]) {
      prizeDistribution[key] = {
        category: category,
        year: year,
        teams: {}
      }
    }
    if (!prizeDistribution[key].teams[team]) {
      prizeDistribution[key].teams[team] = {
        winners: [],
        winnerCount: 0,
      }
    }
    prizeDistribution[key].teams[team].winners.push(name);
    prizeDistribution[key].teams[team].winnerCount += 1;

  });

  for (let key in prizeDistribution) {

    categoryYearData = prizeDistribution[key];
    category = categoryYearData.category
    year = categoryYearData.year
      
  }

  totalTeams = Object.keys(categoryYearData.teams).length
  sharePerTeam = 1 / totalTeams

  for (let key in categoryYearData.teams) {

    teamData = categoryYearData.teams[key]
    team = categoryYearData.teams
    winners = teamData.winners
    winnersCount = teamData.winnerCount
    sharePerWinner = sharePerTeam / winnersCount

  }

  let winnerArr = []

  winners.forEach(element => {
    console.log(element)
    winnerArr.push([{
      name:  element,
      share: sharePerWinner
    }])
  });

  console.log("Winner", ...winnerArr)

  result.push({
    category: category,
    year: year,
    winners: winnerArr
  })

  // console.log(result)
  // return result
}

CalculatePrizes(awards)
