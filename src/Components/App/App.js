import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Choose from '../Choose/Choose';
import Options from '../Options/Options';
import Simulator from '../Simulator/Simulator';
import Nav from '../Nav/Nav';

class App extends Component {
  state = {
    "choose": [
      {
        "id": 1,
        "conference": "AFC",
        "divisions": [
          {
            "id": 1,
            "division": "North",
            "teams": [
              {
                "id": 1,
                "name": "Baltimore Ravens",
                "shortName": "ravens"
              },
              {
                "id": 2,
                "name": "Cincinnati Bengals",
                "shortName": "bengals"
              },
              {
                "id": 3,
                "name": "Cleveland Browns",
                "shortName": "browns"
              },
              {
                "id": 4,
                "name": "Pittsburgh Steelers",
                "shortName": "steelers"
              }
            ]
          },
          {
            "id": 2,
            "division": "South",
            "teams": [
              {
                "id": 5,
                "name": "Houston Texans",
                "shortName": "texans"
              },
              {
                "id": 6,
                "name": "Indianapolis Colts",
                "shortName": "colts"
              },
              {
                "id": 7,
                "name": "Jacksonville Jaguars",
                "shortName": "jaguars"
              },
              {
                "id": 8,
                "name": "Tennessee Titans",
                "shortName": "titans"
              }
            ]
          },
          {
            "id": 3,
            "division": "East",
            "teams": [
              {
                "id": 9,
                "name": "Buffalo Bills",
                "shortName": "bills"
              },
              {
                "id": 10,
                "name": "Miami Dolphins",
                "shortName": "dolphins"
              },
              {
                "id": 11,
                "name": "New York Jets",
                "shortName": "jets"
              },
              {
                "id": 12,
                "name": "New England Patriots",
                "shortName": "patriots"
              }
            ]
          },
          {
            "id": 4,
            "division": "West",
            "teams": [
              {
                "id": 13,
                "name": "Denver Broncos",
                "shortName": "broncos"
              },
              {
                "id": 14,
                "name": "Kansas City Chiefs",
                "shortName": "chiefs"
              },
              {
                "id": 15,
                "name": "Las Vegas Raiders",
                "shortName": "raiders"
              },
              {
                "id": 16,
                "name": "Los Angeles Chargers",
                "shortName": "chargers"
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "conference": "NFC",
        "divisions": [
          {
            "id": 1,
            "division": "North",
            "teams": [
              {
                "id": 17,
                "name": "Chicago Bears",
                "shortName": "bears"
              },
              {
                "id": 18,
                "name": "Detroit Lions",
                "shortName": "lions"
              },
              {
                "id": 19,
                "name": "Green Bay Packers",
                "shortName": "packers"
              },
              {
                "id": 20,
                "name": "Minnesota Vikings",
                "shortName": "vikings"
              }
            ]
          },
          {
            "id": 2,
            "division": "South",
            "teams": [
              {
                "id": 21,
                "name": "Atlanta Falcons",
                "shortName": "falcons"
              },
              {
                "id": 22,
                "name": "Carolina Panthers",
                "shortName": "panthers"
              },
              {
                "id": 23,
                "name": "New Orleans Saints",
                "shortName": "saints"
              },
              {
                "id": 24,
                "name": "Tampa Bay Buccaneers",
                "shortName": "buccaneers"
              }
            ]
          },
          {
            "id": 3,
            "division": "East",
            "teams": [
              {
                "id": 25,
                "name": "Dallas Cowboys",
                "shortName": "cowboys"
              },
              {
                "id": 26,
                "name": "New York Giants",
                "shortName": "giants"
              },
              {
                "id": 27,
                "name": "Philadelphia Eagles",
                "shortName": "eagles"
              },
              {
                "id": 28,
                "name": "Washington Redskins",
                "shortName": "redskins"
              }
            ]
          },
          {
            "id": 4,
            "division": "West",
            "teams": [
              {
                "id": 29,
                "name": "Arizona Cardinals",
                "shortName": "cardinals"
              },
              {
                "id": 30,
                "name": "Los Angeles Rams",
                "shortName": "rams"
              },
              {
                "id": 31,
                "name": "San Francisco 49ers",
                "shortName": "49ers"
              },
              {
                "id": 32,
                "name": "Seattle Seahawks",
                "shortName": "seahawks"
              }
            ]
          }
        ]
      }
    ],
    "boards": [
      {
        "id": 1,
        "name": "Walter Football"
      },
      {
        "id": 2,
        "name": "Gil Brandt"
      },
      {
        "id": 3,
        "name": "Scouts, Inc."
      },
      {
        "id": 4,
        "name": "Mel Kiper, Jr."
      },
      {
        "id": 5,
        "name": "NFL Countdown"
      },
      {
        "id": 6,
        "name": "Daniel Jeramiah"
      }
    ],
    "rounds": [
      {
        "id": 1,
        "round": "1",
      },
      {
        "id": 2,
        "round": "2",
      },
      {
        "id": 3,
        "round": "3",
      },
      {
        "id": 4,
        "round": "4",
      },
      {
        "id": 5,
        "round": "5",
      },
      {
        "id": 6,
        "round": "6",
      },
      {
        "id": 7,
        "round": "7",
      }
    ],
    "userSettings": {
      "id": 1,
      "board": null,
      "rounds": null,
      "selectedTeam": "redskins",
      "selectedTeamLong": "Washington Redskins",
      "selectedPlayers": [
        {
          "id": 1,
          "round": "1",
          "pickNumber": "12",
          "overallRank": "15",
          "position": "OT",
          "name": "Walker Little",
          "school": "Stanford",
          "positionRank": "3",
        },
        {
          "id": 2,
          "round": "2",
          "pickNumber": "44",
          "overallRank": "23",
          "position": "Edge",
          "name": "Anfernee Jennings",
          "school": "Alabama",
          "positionRank": "6",
        },
        {
          "id": 3,
          "round": "3",
          "pickNumber": "78",
          "overallRank": "10",
          "position": "CB",
          "name": "Bryce Hall",
          "school": "Virginia",
          "positionRank": "1",
        },
        {
          "id": 4,
          "round": "4",
          "pickNumber": "112",
          "overallRank": "47",
          "position": "TE",
          "name": "Jake Breeland",
          "school": "Oregon",
          "positionRank": "3",
        },
        {
          "id": 5,
          "round": "5",
          "pickNumber": "146",
          "overallRank": "58",
          "position": "RB",
          "name": "Anthony McFarland",
          "school": "Stanford",
          "positionRank": "13",
        },
        {
          "id": 6,
          "round": "6",
          "pickNumber": "180",
          "overallRank": "102",
          "position": "G",
          "name": "Jon Runyan",
          "school": "Michigan",
          "positionRank": "7",
        },
        {
          "id": 7,
          "round": "7",
          "pickNumber": "204",
          "overallRank": "144",
          "position": "WR",
          "name": "K.J. Hill",
          "school": "Ohio State",
          "positionRank": "5",
        }
      ],
    },
    "filterPlayers": [
      {
        "id": 1,
        "position": "All",
        "isFiltering": true,
      },
      {
        "id": 2,
        "position": "QB",
        "isFiltering": false
      },
      {
        "id": 3,
        "position": "RB",
        "isFiltering": false
      },
      {
        "id": 4,
        "position": "WR",
        "isFiltering": false
      },
      {
        "id": 5,
        "pos": "TE",
        "isFiltering": false
      },
      {
        "id": 6,
        "position": "OT",
        "isFiltering": false
      },
      {
        "id": 7,
        "position": "OG",
        "isFiltering": false
      },
      {
        "id": 8,
        "position": "OC",
        "isFiltering": false
      },
      {
        "id": 9,
        "position": "DE",
        "isFiltering": false
      },
      {
        "id": 10,
        "position": "DT",
        "isFiltering": false
      },
      {
        "id": 11,
        "position": "ILB",
        "isFiltering": false
      },
      {
        "id": 12,
        "position": "OLB",
        "isFiltering": false
      },
      {
        "id": 13,
        "position": "S",
        "isFiltering": false
      },
      {
        "id": 14,
        "position": "CB",
        "isFiltering": false
      },
    ],
    "playersTable": [
      {
        "id": 1,
        "table": "players",
        "col": "Pos",
        "class": "table__position",
        "isSorted": false,
      },
      {
        "id": 2,
        "table": "players",
        "col": "Name",
        "class": "table__name",
        "isSorted": false,
      },
      {
        "id": 3,
        "table": "players",
        "col": "School",
        "class": "table__school",
        "isSorted": false,
      },
      {
        "id": 4,
        "table": "players",
        "col": "OR",
        "class": "table__overall-rank",
        "isSorted": true,
      },
      {
        "id": 5,
        "table": "players",
        "col": "PR",
        "class": "table__player-rank",
        "isSorted": false,
      }
    ],
    "userPicksTable": [
      {
        "id": 1,
        "table": "user-picks",
        "col": "Rnd.",
        "class": "table__player-round",
        "isSorted": true,
      },
      {
        "id": 2,
        "table": "user-picks",
        "col": "#",
        "class": "table__player-round-number",
        "isSorted": false,
      },
      {
        "id": 3,
        "table": "user-picks",
        "col": "Pos",
        "class": "table__position",
        "isSorted": false,
      },
      {
        "id": 4,
        "table": "user-picks",
        "col": "Name",
        "class": "table__name",
        "isSorted": false,
      },
      {
        "id": 5,
        "table": "user-picks",
        "col": "School",
        "class": "table__school",
        "isSorted": false,
      },
      {
        "id": 6,
        "table": "user-picks",
        "col": "OR",
        "class": "table__overall-rank",
        "isSorted": false,
      },
      {
        "id": 7,
        "table": "user-picks",
        "col": "PR",
        "class": "table__player-rank",
        "isSorted": false,
      }
    ],
    "picksTable": [
      {
        "id": 1,
        "table": "picks",
        "col": "#",
        "class": "table__player-round-number",
      },
      {
        "id": 2,
        "table": "picks",
        "col": "Pos",
        "class": "table__position",
      },
      {
        "id": 3,
        "table": "picks",
        "col": "Name",
        "class": "table__name",
      }
    ],
    "teams": [
      {
        "id": 1,
        "isSelected": false,
        "onTheClock": false,
        "name": "Baltimore Ravens",
        "shortName": "ravens",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 2,
        "isSelected": false,
        "onTheClock": false,
        "name": "Cincinnati Bengals",
        "shortName": "bengals",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 3,
        "isSelected": false,
        "onTheClock": false,
        "name": "Cleveland Browns",
        "shortName": "browns",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 4,
        "isSelected": false,
        "onTheClock": false,
        "name": "Pittsburgh Steelers",
        "shortName": "steelers",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 5,
        "isSelected": false,
        "onTheClock": false,
        "name": "Houston Texans",
        "shortName": "texans",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 6,
        "isSelected": false,
        "onTheClock": false,
        "name": "Indianapolis Colts",
        "shortName": "colts",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 7,
        "isSelected": false,
        "onTheClock": false,
        "name": "Jacksonville Jaguars",
        "shortName": "jaguars",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 8,
        "isSelected": false,
        "onTheClock": false,
        "name": "Tennessee Titans",
        "shortName": "titans",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 9,
        "isSelected": false,
        "onTheClock": false,
        "name": "Buffalo Bills",
        "shortName": "bills",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 10,
        "isSelected": false,
        "onTheClock": false,
        "name": "Miami Dolphins",
        "shortName": "dolphins",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 11,
        "isSelected": false,
        "onTheClock": false,
        "name": "New York",
        "shortName": "jets",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 12,
        "isSelected": false,
        "onTheClock": false,
        "name": "New England Patriots",
        "shortName": "patriots",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 13,
        "isSelected": false,
        "onTheClock": false,
        "name": "Denver Broncos",
        "shortName": "broncos",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 14,
        "isSelected": false,
        "onTheClock": false,
        "name": "Kansas City Chiefs",
        "shortName": "chiefs",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 15,
        "isSelected": false,
        "onTheClock": false,
        "name": "Las Vegas Raiders",
        "shortName": "raiders",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 16,
        "isSelected": false,
        "onTheClock": false,
        "name": "Los Angeles Chargers",
        "shortName": "chargers",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 17,
        "isSelected": false,
        "onTheClock": false,
        "name": "Chicago Bears",
        "shortName": "bears",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 18,
        "isSelected": false,
        "onTheClock": false,
        "name": "Detroit Lions",
        "shortName": "lions",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 19,
        "isSelected": false,
        "onTheClock": false,
        "name": "Green Bay Packers",
        "shortName": "packers",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 20,
        "isSelected": false,
        "onTheClock": false,
        "name": "Minnestoa Vikings",
        "shortName": "vikings",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 21,
        "isSelected": false,
        "onTheClock": false,
        "name": "Atlanta Falcons",
        "shortName": "falcons",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 22,
        "isSelected": false,
        "onTheClock": false,
        "name": "Carolina Panthers",
        "shortName": "panthers",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 23,
        "isSelected": false,
        "onTheClock": false,
        "name": "New Orleans Saints",
        "shortName": "saints",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 24,
        "isSelected": false,
        "onTheClock": false,
        "name": "Tampa Bay Buccaneers",
        "shortName": "buccaneers",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 25,
        "isSelected": false,
        "onTheClock": false,
        "name": "Dallas Cowboys",
        "shortName": "cowboys",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 26,
        "isSelected": false,
        "onTheClock": false,
        "name": "New York Giants",
        "shortName": "giants",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 27,
        "isSelected": false,
        "onTheClock": false,
        "name": "Philadelphia Eagles",
        "shortName": "eagles",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 28,
        "isSelected": false,
        "onTheClock": false,
        "name": "Washington Redskins",
        "shortName": "redskins",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 29,
        "isSelected": false,
        "onTheClock": false,
        "name": "Arizona Cardinals",
        "shortName": "cardinals",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 30,
        "isSelected": false,
        "onTheClock": false,
        "name": "Los Angeles Rams",
        "shortName": "rams",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 31,
        "isSelected": false,
        "onTheClock": false,
        "name": "San Francisco 49ers",
        "shortName": "49ers",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      },
      {
        "id": 32,
        "isSelected": false,
        "onTheClock": false,
        "name": "Seattle Seahawks",
        "shortName": "seahawks",
        "positionNeeds": [
          {
            "id": 1,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 2,
            "isFilled": false,
            "need": "DT"
          },
          {
            "id": 3,
            "isFilled": false,
            "need": "DE"
          },
          {
            "id": 4,
            "isFilled": false,
            "need": "S"
          },
          {
            "id": 5,
            "isFilled": false,
            "need": "ILB"
          },
          {
            "id": 6,
            "isFilled": false,
            "need": "C"
          },
          {
            "id": 7,
            "isFilled": false,
            "need": null
          },
          {
            "id": 8,
            "isFilled": false,
            "need": null
          },
          {
            "id": 9,
            "isFilled": false,
            "need": null
          },
          {
            "id": 10,
            "isFilled": false,
            "need": null
          }
        ]
      }
    ],
    "players": [
      {
        "id": 1,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "1",
        "position": "QB",
        "name": "Tua Tagovailoa",
        "school": "Alabama",
        "positionRank": "1"
      },
      {
        "id": 2,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "2",
        "position": "Edge",
        "name": "A.J. Epenesa",
        "school": "Iowa",
        "positionRank": "1"
      },
      {
        "id": 3,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "3",
        "position": "DL",
        "name": "Derrick Brown",
        "school": "Auburn",
        "positionRank": "1"
      },
      {
        "id": 4,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "4",
        "position": "WR",
        "name": "Jerry Jeudy",
        "school": "Alabama",
        "positionRank": "1"
      },
      {
        "id": 5,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "5",
        "position": "Edge",
        "name": "Raekwon Davis",
        "school": "Alabama",
        "positionRank": "2"
      },
      {
        "id": 6,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "6",
        "position": "OT",
        "name": "Tristan Wirfs",
        "school": "Iowa",
        "positionRank": "1"
      },
      {
        "id": 7,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "7",
        "position": "OT",
        "name": "Andrew Thomas",
        "school": "Georgia",
        "positionRank": "2"
      },
      {
        "id": 8,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "8",
        "position": "QB",
        "name": "Justin Herbert",
        "school": "Oregon",
        "positionRank": "2"
      },
      {
        "id": 9,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "9",
        "position": "S",
        "name": "Grant Delpit",
        "school": "LSU",
        "positionRank": "1"
      },
      {
        "id": 10,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "10",
        "position": "CB",
        "name": "Bryce Hall",
        "school": "Virginia",
        "positionRank": "1"
      },
      {
        "id": 11,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "11",
        "position": "CB",
        "name": "Kristian Fulton",
        "school": "LSU",
        "positionRank": "2"
      },
      {
        "id": 12,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "12",
        "position": "QB",
        "name": "Jake Fromm",
        "school": "Georgia",
        "positionRank": "3"
      },
      {
        "id": 13,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "13",
        "position": "Edge",
        "name": "Chase Young",
        "school": "Ohio State",
        "positionRank": "3"
      },
      {
        "id": 14,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "14",
        "position": "Edge",
        "name": "Julian Okwara",
        "school": "Notre Dame",
        "positionRank": "4"
      },
      {
        "id": 15,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "15",
        "position": "OT",
        "name": "Walker Little",
        "school": "Stanford",
        "positionRank": "3"
      },
      {
        "id": 16,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "16",
        "position": "WR",
        "name": "Tee Higgins",
        "school": "Clemson",
        "positionRank": "2"
      },
      {
        "id": 17,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "17",
        "position": "CB",
        "name": "A.J. Terrell",
        "school": "Clemson",
        "positionRank": "3"
      },
      {
        "id": 18,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "18",
        "position": "LB",
        "name": "Isaiah Simmons",
        "school": "Clemson",
        "positionRank": "1"
      },
      {
        "id": 19,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "19",
        "position": "Edge",
        "name": "Terrell Lewis",
        "school": "Alabama",
        "positionRank": "5"
      },
      {
        "id": 20,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "20",
        "position": "DL",
        "name": "Javon Kinlaw",
        "school": "South Carolina",
        "positionRank": "2"
      },
      {
        "id": 21,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "21",
        "position": "DL",
        "name": "Rashard Lewis",
        "school": "LSU",
        "positionRank": "3"
      },
      {
        "id": 22,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "22",
        "position": "RB",
        "name": "Jonathan Taylor",
        "school": "Wisconsin",
        "positionRank": "1"
      },
      {
        "id": 23,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "23",
        "position": "Edge",
        "name": "Anfernee Jennings",
        "school": "Alabama",
        "positionRank": "6"
      },
      {
        "id": 24,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "24",
        "position": "OT",
        "name": "Trey Adams",
        "school": "Washington",
        "positionRank": "4"
      },
      {
        "id": 25,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "25",
        "position": "CB",
        "name": "CJ Henderson",
        "school": "Florida",
        "positionRank": "4"
      },
      {
        "id": 26,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "26",
        "position": "G",
        "name": "Ben Bredeson",
        "school": "Michigan",
        "positionRank": "1"
      },
      {
        "id": 27,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "27",
        "position": "Edge",
        "name": "Curtis Weaver",
        "school": "Boise State",
        "positionRank": "7"
      },
      {
        "id": 28,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "28",
        "position": "G",
        "name": "Alex Leatherwood",
        "school": "Alabama",
        "positionRank": "2"
      },
      {
        "id": 29,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "29",
        "position": "OT",
        "name": "Trey Smith",
        "school": "Tennessee",
        "positionRank": "5"
      },
      {
        "id": 30,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "30",
        "position": "LB",
        "name": "Paddy Fisher",
        "school": "Northwestern",
        "positionRank": "2"
      },
      {
        "id": 31,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "31",
        "position": "TE",
        "name": "Albert Okwuegbunam",
        "school": "Missouri",
        "positionRank": "1"
      },
      {
        "id": 32,
        "isSelected": false,
        "shouldSelect": false,
        "overallRank": "32",
        "position": "DL",
        "name": "Lorenzo Neal",
        "school": "Purdue",
        "positionRank": "4"
      },
    ],
    "roundsSimulator": [
      {
        "id": 1,
        "round": "1",
        "roundOne": [
          {
            "id": 1,
            "team": "Miami Dolphins",
            "logo": "dolphins",
            "pickNumber": "1",
            "position": "",
            "name": "",
          },
          {
            "id": 2,
            "team": "New York Jets",
            "logo": "jets",
            "pickNumber": "2",
            "position": "",
            "name": "",
          },
          {
            "id": 3,
            "team": "Jacksonville Jaguars",
            "logo": "jaguars",
            "pickNumber": "3",
            "position": "",
            "name": "",
          },
          {
            "id": 4,
            "team": "Cincinnati Bengals",
            "logo": "bengals",
            "pickNumber": "4",
            "position": "",
            "name": "",
          },
          {
            "id": 5,
            "team": "Washington Redskins",
            "logo": "redskins",
            "pickNumber": "5",
            "position": "",
            "name": "",
          },
          {
            "id": 6,
            "team": "Detroit Lions",
            "logo": "lions",
            "pickNumber": "6",
            "position": "",
            "name": "",
          },
          {
            "id": 7,
            "team": "Indianapolis Colts",
            "logo": "colts",
            "pickNumber": "7",
            "position": "",
            "name": "",
          },
          {
            "id": 8,
            "team": "Baltimore Ravens",
            "logo": "ravens",
            "pickNumber": "8",
            "position": "",
            "name": "",
          },
          {
            "id": 9,
            "team": "Cleveland Browns",
            "logo": "browns",
            "pickNumber": "9",
            "position": "",
            "name": "",
          },
          {
            "id": 10,
            "team": "New York Giants",
            "logo": "giants",
            "pickNumber": "10",
            "position": "",
            "name": "",
          },
          {
            "id": 11,
            "team": "Houston Texans",
            "logo": "texans",
            "pickNumber": "11",
            "position": "",
            "name": "",
          },
          {
            "id": 12,
            "team": "Tampa Bay Buccaneers",
            "logo": "buccaneers",
            "pickNumber": "12",
            "position": "",
            "name": "",
          },
          {
            "id": 13,
            "team": "Arizona Cardinals",
            "logo": "cardinals",
            "pickNumber": "13",
            "position": "",
            "name": "",
          },
          {
            "id": 14,
            "team": "San Francisco 49ers",
            "logo": "sf49ers",
            "pickNumber": "14",
            "position": "",
            "name": "",
          },
          {
            "id": 15,
            "team": "Las Vegas Raiders",
            "logo": "raiders",
            "pickNumber": "15",
            "position": "",
            "name": "",
          },
          {
            "id": 16,
            "team": "Los Angeles Chargers",
            "logo": "chargers",
            "pickNumber": "16",
            "position": "",
            "name": "",
          },
          {
            "id": 17,
            "team": "Chicago Bears",
            "logo": "bears",
            "pickNumber": "17",
            "position": "",
            "name": "",
          },
          {
            "id": 18,
            "team": "Atlanta Falcons",
            "logo": "falcons",
            "pickNumber": "18",
            "position": "",
            "name": "",
          },
          {
            "id": 19,
            "team": "Minnesota Vikings",
            "logo": "vikings",
            "pickNumber": "19",
            "position": "",
            "name": "",
          },
          {
            "id": 20,
            "team": "Buffalo Bills",
            "logo": "bills",
            "pickNumber": "20",
            "position": "",
            "name": "",
          },
          {
            "id": 21,
            "team": "Denver Broncos",
            "logo": "broncos",
            "pickNumber": "21",
            "position": "",
            "name": "",
          },
          {
            "id": 22,
            "team": "Carolina Panthers",
            "logo": "panthers",
            "pickNumber": "22",
            "position": "",
            "name": "",
          },
          {
            "id": 23,
            "team": "Seattle Seahawks",
            "logo": "seahawks",
            "pickNumber": "23",
            "position": "",
            "name": "",
          },
          {
            "id": 24,
            "team": "Philadelphia Eagles",
            "logo": "eagles",
            "pickNumber": "24",
            "position": "",
            "name": "",
          },
          {
            "id": 25,
            "team": "Tennessee Titans",
            "logo": "titans",
            "pickNumber": "25",
            "position": "",
            "name": "",
          },
          {
            "id": 26,
            "team": "Pittsburgh Steelers",
            "logo": "steelers",
            "pickNumber": "26",
            "position": "",
            "name": "",
          },
          {
            "id": 27,
            "team": "Green Bay Packers",
            "logo": "packers",
            "pickNumber": "27",
            "position": "",
            "name": "",
          },
          {
            "id": 28,
            "team": "Los Angeles Rams",
            "logo": "rams",
            "pickNumber": "28",
            "position": "",
            "name": "",
          },
          {
            "id": 29,
            "team": "New England Patriots",
            "logo": "patriots",
            "pickNumber": "29",
            "position": "",
            "name": "",
          },
          {
            "id": 30,
            "team": "New Orleans Saints",
            "logo": "saints",
            "pickNumber": "30",
            "position": "",
            "name": "",
          },
          {
            "id": 31,
            "team": "Dallas Cowboys",
            "logo": "cowboys",
            "pickNumber": "31",
            "position": "",
            "name": "",
          },
          {
            "id": 32,
            "team": "Kansas City Chiefs",
            "logo": "chiefs",
            "pickNumber": "32",
            "position": "",
            "name": "",
          },
        ],
      },
      {
        "id": 1,
        "round": "2",
        "roundTwo": [
          {
            "id": 1,
            "team": "Miami Dolphins",
            "logo": "dolphins",
            "pickNumber": "1",
            "position": "",
            "name": "",
          },
        ],
      }
    ],
  };

  render() {
    const {
      choose, boards, rounds, teams, players,
      userSettings: { selectedTeam, selectedTeamLong, selectedPlayers },
      playersTable, userPicksTable, picksTable, roundsSimulator, filterPlayers
    } = this.state;
    return (
      <Router>
        <div>
          <Nav team={selectedTeam} />
          <Switch>
            <Route
              exact path="/"
              render={() => <Choose teams={choose} teamSelectedText={selectedTeamLong} team={selectedTeam} />}
            />
            <Route
              exact path="/options"
              render={() => <Options boards={boards} team={selectedTeam} rounds={rounds} />}
            />
            <Route
              exact path="/simulator"
              render={() =>
                <Simulator
                  team={selectedTeam}
                  teamSelectedText={selectedTeamLong}
                  teamSelected={{...teams.filter(team => team.shortName === selectedTeam)}}
                  availablePlayers={players}
                  playersTable={playersTable}
                  userPicksTable={userPicksTable}
                  picksTable={picksTable}
                  selectedPlayers={selectedPlayers}
                  roundOne={(roundsSimulator[0].roundOne)}
                  onTheClock={(teams[28].onTheClock)}
                  filterPlayers={filterPlayers}
                />
              }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <Choose />
//       {/* <Options /> */}
//       {/* <Simulator /> */}
//     </div>
//   );
// }

export default App;
