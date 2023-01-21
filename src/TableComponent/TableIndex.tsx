import React from "react";
import ATMTable from "../../atom/ATMTable/ATMTable";
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
        // {
        //     heading: "primary",
        //     field: "primary",
        //     flex: "flex-[1_1_0%]",
        //     extraClasses: "min-w-[100px]",
        //     renderCell: (row: any) => <Radio name='rowRadioButton' sx={checkCss} onChange={() => setradioSelectRow(row)} checked={radioSelectRow.id === row.id} />
        // },
        {
            heading: "sNo",
            field: "id",
            // flex: 'flex-[1_1_0%]',
            extraClasses: "min-w-[100px] text-center",
        },
        {
            heading: "firstname",
            field: "firstname",
            // flex: 'flex-[2_2_0%]',
            extraClasses: "min-w-[100px] text-center",
        },
        {
            heading: "lastname",
            field: "lastName",
            // flex: 'flex-[2_2_0%]',
            extraClasses: "min-w-[100px] text-center",
        },
        {
            heading: "age",
            field: "age",
            // flex: 'flex-[2_2_0%]',
            extraClasses: "min-w-[100px] text-center",
        },
        {
            heading: "powers",
            field: "power",
            // flex: 'flex-[3_3_0%]',
            extraClasses: "min-w-[200px] text-center",
            // renderCell: (row: any) => <div className="bg-slate-500 hover:cursor-pointer">{row.power}</div> // if we want to add a additional perform in the rows
        },
        {
            heading: "powers",
            field: "power",
            // flex: 'flex-[3_3_0%]',
            extraClasses: "min-w-[200px] text-center",
            // renderCell: (row: any) => <div className="bg-slate-500 hover:cursor-pointer">{row.power}</div> // if we want to add a additional perform in the rows
        },
        {
            heading: "powers",
            field: "power",
            // flex: 'flex-[3_3_0%]',
            extraClasses: "min-w-[200px] text-center",
            // renderCell: (row: any) => <div className="bg-slate-500 hover:cursor-pointer">{row.power}</div> // if we want to add a additional perform in the rows
        },
        {
            heading: "powers",
            field: "power",
            // flex: 'flex-[3_3_0%]',
            extraClasses: "min-w-[200px] text-center",
            // renderCell: (row: any) => <div className="bg-slate-500 hover:cursor-pointer">{row.power}</div> // if we want to add a additional perform in the rows
        },
        {
            heading: "powers",
            field: "power",
            // flex: 'flex-[3_3_0%]',
            extraClasses: "min-w-[200px] text-center",
            // renderCell: (row: any) => <div className="bg-slate-500 hover:cursor-pointer">{row.power}</div> // if we want to add a additional perform in the rows
        },

        {
            heading: "powers",
            field: "power",
            // flex: 'flex-[3_3_0%]',
            extraClasses: "min-w-[200px] text-center",
            // renderCell: (row: any) => <div className="bg-slate-500 hover:cursor-pointer">{row.power}</div> // if we want to add a additional perform in the rows
        },
        {
            heading: "powers",
            field: "power",
            // flex: 'flex-[3_3_0%]',
            extraClasses: "min-w-[200px] text-center",
            // renderCell: (row: any) => <div className="bg-slate-500 hover:cursor-pointer">{row.power}</div> // if we want to add a additional perform in the rows
        },
        {
            heading: "powers",
            field: "power",
            // flex: 'flex-[3_3_0%]',
            extraClasses: "min-w-[200px] text-center",
            // renderCell: (row: any) => <div className="bg-slate-500 hover:cursor-pointer">{row.power}</div> // if we want to add a additional perform in the rows
        },

        {
            heading: "powers",
            field: "power",
            // flex: 'flex-[3_3_0%]',
            extraClasses: "min-w-[200px] text-center",
            // renderCell: (row: any) => <div className="bg-slate-500 hover:cursor-pointer">{row.power}</div> // if we want to add a additional perform in the rows
        },

    ]

    const rows = [
        { id: 0, firstname: "Steve", lastName: "Roger", age: 107, power: "Super Human Serum" },
        { id: 1, firstname: "Tony", lastName: "Stark", age: 35, power: "Iron Man Suit" },
        { id: 2, firstname: "Thor", lastName: "Odin", age: 1700, power: "God Of Thunder" },
        { id: 3, firstname: "Client", lastName: "Bartin", age: 32, power: "Master in Archry" },
    ]

    return (
        <>


            <div className="my-40 flex justify-center">
            <div className="w-[800px]">

                <ATMTable
                    heading={headings}
                    rows={rows}

                    isCheckbox={true}
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

            </div>

            </div>
        </>
    );
};

export default TableIndex;


// w-[800px] overflow-auto  // need to define it in the parent

// w-[600px] overflow-auto // after customize scroll
