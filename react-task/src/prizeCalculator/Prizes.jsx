import { useEffect } from "react";

const Prizes = () => {
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

  // const data = () => {
  //   let sortedArr = awards.sort((a, b) => Number(a.year - b.year));
  //   calculatePrize(sortedArr);
  // };

  // function calculatePrize(data) {
  //   const arr = data.reduce((acc, el) => {
  //     acc[el.category] = acc[el.category] || [];
  //     acc[el.category][el.year] = acc[el.category][el.year] || [];
  //     acc[el.category][el.year].push(el);
  //     return acc;
  //   }, {});

  //   Object.keys(arr).forEach((category) => {
  //     Object.keys(arr[category]).forEach((year) => {
  //       const teams = {};
  //       arr[category][year].forEach((winner) => {
  //         if (!teams[winner.team]) {
  //           teams[winner.teams] = [];
  //         }
  //         teams[winner.team].push(winner.name);
  //       });
  //       console.log("CATEGORY", teams);
  //       const teamCount = Object.keys(teams).length;
  //       const prizePerTeam = 1 / teamCount;

  //       const winners = [];
  //       Object.keys(teams).forEach(team=>{
  //         const teamMember = teams[team];
  //         console.log("TEAM", teamMember)

  //         const prizePerWinner = prizePerTeam / teamMember.length;
           
           
  //       })

  //     });
  //   });
  // }


// const 
// 


  return <div>Prizes</div>;
};

export default Prizes;
