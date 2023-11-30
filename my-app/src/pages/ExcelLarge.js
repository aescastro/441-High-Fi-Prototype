import { Spreadsheet } from "react-spreadsheet";
import { balance50Yoe } from "../constants/mockData";
import { generateSpreadsheetData } from "../components/CreateSpreadsheet"

  const ExcelLarge = () => {
    const data = generateSpreadsheetData(balance50Yoe);
    return <Spreadsheet data={data} />;
  };
  
  export default ExcelLarge;