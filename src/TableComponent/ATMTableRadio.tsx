import React from "react";
import ATMTable from "./ATMTable";
import Radio from '@mui/material/Radio';

// dummy data for table heading
// const headings = [
//   {
//     headingData : "primary",
//     field : "primary",
//     flex: "flex-[1_1_0%]",
//     renderCell:(row:any)=> <Radio name='rowRadioButton' sx={checkCss} onChange={() => onRowSelect(ele)} checked={isRowSelected(ele)} />
//   },
//   {
//     headingData: "sNo",
//     field: "id",
//     flex: 'flex-[2_2_0%]',
//   },
//   {
//     headingData: "firstname",
//     field: "firstname",
//     flex: 'flex-[2_2_0%]',
//   },
//   {
//     headingData: "lastname",
//     field: "lastName",
//     flex: 'flex-[2_2_0%]',
//   },
//   {
//     headingData: "age",
//     field: "age",
//     flex: 'flex-[2_2_0%]',
//   },
//   {
//     headingData: "powers",
//     field: "power",
//     flex: 'flex-[3_3_0%]',
//     // renderCell: (row: any) => <div className="bg-slate-500 hover:cursor-pointer">{row.power}</div>
//   },

// ]

const TableIndex = () => {

    const [selectedRows, setSelectedRows] = React.useState<any[]>([])    // this state for CheckBox Data
    const [radioSelectRow, setradioSelectRow] = React.useState<any>({})  // this state for RadioButton Data

    // console.log("from CheckBoxSelectedRows", selectedRows)               // watch the checkbox data
    // console.log("from CheckBoxSelectedRows", radioSelectRow)             // watch the radiobutton data

    const checkCss = {                                                   // style for RadioButton CBO UI 
        color: '#EE5924',
        '&.Mui-checked': {
            color: '#EE5924',
        },
    }

    const headings = [
        // if we want to send the radio button we have to define it in the heading 
        {
            heading: "primary",
            field: "primary",
            flex: "flex-[1_1_0%]",
            renderCell: (row: any) => <Radio name='rowRadioButton' sx={checkCss} onChange={() => setradioSelectRow(row)} checked={radioSelectRow.id === row.id} />
        },
        {
            heading: "sNo",
            field: "id",
            flex: 'flex-[1_1_0%]',
        },
        {
            heading: "firstname",
            field: "firstname",
            flex: 'flex-[2_2_0%]',
        },
        {
            heading: "lastname",
            field: "lastName",
            flex: 'flex-[2_2_0%]',
        },
        {
            heading: "age",
            field: "age",
            flex: 'flex-[2_2_0%]',
        },
        {
            heading: "powers",
            field: "power",
            flex: 'flex-[3_3_0%]',
            // renderCell: (row: any) => <div className="bg-slate-500 hover:cursor-pointer">{row.power}</div> // if we want to add a additional perform in the rows
        },

    ]

    const rows = [
        { id: 0, firstname: "Steve", lastName: "Roger", age: 107, power: "Super Human Serum" },
        { id: 1, firstname: "Tony", lastName: "Stark", age: 35, power: "Iron Man Suit" },
        { id: 2, firstname: "Thor", lastName: "Odin", age: 1700, power: "God Of Thunder" },
        { id: 3, firstname: "Client", lastName: "Bartin", age: 32, power: "Master in Archry" },
        { id: 4, firstname: "Bruce", lastName: "Banner", age: 45, power: "Gama Rays" },
        { id: 5, firstname: "Natasha", lastName: "Romenoff", age: 26, power: "Fighter" },
    ]

    return (
        <>
            <ATMTable
                heading={headings}
                rows={rows}
                isCheckbox={false}
                isAllSelected={rows.length === selectedRows.length}

                onRowSelect={(row) => {
                    // for readiorow select //
                    setradioSelectRow(row)
                    // for readiorow select //

                    // for checkbox row select //
                    let isAvilable = selectedRows.findIndex((ele: any) => {
                        return ele.id === row.id
                    })
                    if (isAvilable > -1) {
                        const filtered = selectedRows.filter((ele: any) => {
                            return ele.id !== row.id
                        })
                        setSelectedRows(filtered)
                        console.log('from filterd data')
                    } else {
                        setSelectedRows((prev: any[]) => ([...prev, row]))
                    }
                    // for checkbox row select //
                }}
                // isRowSelected={(row: any) => radioSelectRow.id === row.id}
                isRowSelected={(row: any) => selectedRows.findIndex((selectrow) => selectrow.id === row.id) > -1}

                onSelectAll={() => {
                    if (rows.length !== selectedRows.length) {
                        setSelectedRows(rows)
                    } else {
                        setSelectedRows([])
                    }
                }}
            />

        </>
    );
};

export default TableIndex;
