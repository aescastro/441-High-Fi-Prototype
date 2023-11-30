const whitespaceRow = [
  {value: ''},
  {value: ''},
  {value: ''},
  {value: ''},
  {value: ''},
  {value: ''},
  {value: ''},
]

function pushTeamRow(data, val) {
  data.push([
    {value: 'team'.concat(' ', val.toString(10))}, 
    {value: ''}, 
    {value: ''}, 
    {value: ''},
    {value: ''},
    {value: ''},
    {value: ''},
  ]);
}

export function generateSpreadsheetData(teams) {
  //one of group20YearLevel, balance50Yoe, and ___ will be parameter to this function
  var data = new Array();

  //iterate through groups
  for (let i = 0; i < teams.length; i++) { 
    
    //push the team row, to indicate team number, add one because arrays are 0 indexed
    pushTeamRow(data, i + 1);

    //iterate through people
    for (let j = 0; j < teams[i].length; j++) { 

      //add person to spreadsheet as a row
      data.push([
        {value: teams[i][j].name}, 
        {value: teams[i][j].yearLevel}, 
        {value: teams[i][j].yoe}, 
        {value: teams[i][j].skills[0]},
        {value: teams[i][j].skills[1]},
        {value: teams[i][j].skills[2]},
        {value: teams[i][j].skills[3]},
      ]);
    }

    //after team has ended, push whitespace rows to spreadsheet
    //if it wasn't the last team
    if (i < teams.length - 1) {
      for (let k = 0; k < 3; k++) {
        data.push(whitespaceRow);
      }
    }
  }

  return data;
}
