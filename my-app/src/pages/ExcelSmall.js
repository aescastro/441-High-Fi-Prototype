import { Spreadsheet } from "react-spreadsheet";
import { group20YearLevel } from "../constants/mockData";
import { generateSpreadsheetData } from "../components/CreateSpreadsheet"
  
const ExcelSmall = () => {
  const data = generateSpreadsheetData(group20YearLevel);
  return <Spreadsheet data={data} />;
};

export default ExcelSmall;