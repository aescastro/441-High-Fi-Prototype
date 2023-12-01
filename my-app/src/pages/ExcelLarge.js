import { Spreadsheet } from "react-spreadsheet";
import React from "react";
import { balance50Yoe } from "../constants/mockData";
import { generateSpreadsheetData } from "../components/CreateSpreadsheet"
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, SortEventArgs } from '@syncfusion/ej2-react-spreadsheet';
  
const ExcelLarge = () => {
  const data = generateSpreadsheetData(balance50Yoe);
  const spreadsheetRef = React.useRef(null);
  const headers = [{
        index: 0, // Need to specify the index for the first row collection, the specified rows will be inserted in this index.
        cells: [{ value: 'Name' }, { value: 'Year Level' }, { value: 'YOE' }, { value: 'Skill 1' }, { value: 'Skill 2' },
        { value: 'Skill 3' }, {value: 'Skill 4'}]
    }];

    const onDataBound = () => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet && spreadsheet.activeSheetIndex === 0 && !spreadsheet.isOpen) {
			//spreadsheet.insertRow(headers)
			spreadsheet.cellFormat({ fontWeight: 'bold' }, 'A1:J1');
            spreadsheet.sort({ containsHeader: true }, 'A1:J11');
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
			  body {
				height: 100vh;
			  }
			  #root{
				height: 100%;  
			  }
              .e-ribbon, .e-sheet-tab-panel {
                visibility: hidden;
              }
			  .e-sheet-panel {
				  height: 100%;
			  }
          `}
      </style>
      <SpreadsheetComponent ref={spreadsheetRef} dataBound={onDataBound} sortComplete={onSortComplete} >
        <SheetsDirective>
            <SheetDirective>
                <RangesDirective>
					 <RangeDirective></RangeDirective>
                     <RangeDirective dataSource={data} ></RangeDirective>
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

export default ExcelLarge;