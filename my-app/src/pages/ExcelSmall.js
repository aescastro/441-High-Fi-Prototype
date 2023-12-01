import { Spreadsheet } from "react-spreadsheet";
import React from "react";
import { group20YearLevel } from "../constants/mockData";
import { generateSpreadsheetData } from "../components/CreateSpreadsheet"
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, SortEventArgs } from '@syncfusion/ej2-react-spreadsheet';
  
const ExcelSmall = () => {
  const data = generateSpreadsheetData(group20YearLevel);
  const spreadsheetRef = React.useRef(null);
    const onDataBound = () => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet && spreadsheet.activeSheetIndex === 0 && !spreadsheet.isOpen) {
            spreadsheet.cellFormat({ fontWeight: 'bold' }, 'A1:H1');
            spreadsheet.sort({ containsHeader: true }, 'A1:H11');
        }
    };
    const onSortComplete = (args) => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.selectRange(args.range);
        }
    };
  return (
    <>
      <style type="text/css">
          {`
              .e-ribbon, .e-sheet-tab-panel {
                visibility: hidden;
              }
          `}
      </style>
      <SpreadsheetComponent ref={spreadsheetRef} dataBound={onDataBound} sortComplete={onSortComplete} >
        <SheetsDirective>
            <SheetDirective>
                <RangesDirective>
                    <RangeDirective dataSource={data}></RangeDirective>
                </RangesDirective>
                <ColumnsDirective>
                    <ColumnDirective width={180}></ColumnDirective>
                    <ColumnDirective width={130}></ColumnDirective>
                    <ColumnDirective width={130}></ColumnDirective>
                </ColumnsDirective>
            </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    
    </>
    
  )
};

export default ExcelSmall;