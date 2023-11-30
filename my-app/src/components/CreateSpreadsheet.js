const titleRow = [
  {value: 'Name'},
  {value: 'Year Level'},
  {value: 'Years of Experience'},
  {value: 'Skill 1'},
  {value: 'Skill 2'},
  {value: 'Skill 3'},
  {value: 'Skill 4'},
  {value: ''},
  {value: ''},
  {value: ''},
  {value: ''},
  {value: ''},
  {value: ''},
  {value: ''},
  {value: ''},
  {value: ''},
  {value: ''},
]


export function generateSpreadsheetData(teams) {
  //one of group20YearLevel, balance50Yoe, and ___ will be parameter to this function
  var data = new Array();

  //iterate through groups
  for (let i = 0; i < teams.length; i++) { 

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
  }

  var randomedData = data.map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  randomedData.unshift(titleRow)
  
  // add space below
  for (let i = 0; i < data.length; i++){
    randomedData.push([{value: ''}])
  }

  return randomedData
}
