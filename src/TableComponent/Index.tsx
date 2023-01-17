import React from "react";
import ATMTable from "./ATMTable";
import Radio from '@mui/material/Radio';


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

const rows = [
    { id: 0, firstname: "Steve", lastName: "Roger", age: 107, power: "Super Human Serum" },
    { id: 1, firstname: "Tony", lastName: "Stark", age: 35, power: "Iron Man Suit" },
    { id: 2, firstname: "Thor", lastName: "Odin", age: 1700, power: "God Of Thunder" },
    { id: 3, firstname: "Client", lastName: "Bartin", age: 32, power: "Master in Archry" },
    { id: 4, firstname: "Bruce", lastName: "Banner", age: 45, power: "Gama Rays" },
    { id: 5, firstname: "Natasha", lastName: "Romenoff", age: 26, power: "Fighter" },
]

const Index = () => {
    
    const [selectedRows, setSelectedRows] = React.useState<any[]>([])
    const [radioSelect, setradioSelect] = React.useState<any>({})
    console.log("from selectedRows", radioSelect)

    const checkCss = {
        color: '#EE5924',
        '&.Mui-checked': {
            color: '#EE5924',
        },
    }

    const headings = [
        {
            headingData: "primary",
            field: "primary",
            flex: "flex-[1_1_0%]",
            renderCell: (row: any) => <Radio name='rowRadioButton' sx={checkCss} onChange={() => setradioSelect(row)} checked={radioSelect.id === row.id} />
        },
        {
            headingData: "sNo",
            field: "id",
            flex: 'flex-[2_2_0%]',
        },
        {
            headingData: "firstname",
            field: "firstname",
            flex: 'flex-[2_2_0%]',
        },
        {
            headingData: "lastname",
            field: "lastName",
            flex: 'flex-[2_2_0%]',
        },
        {
            headingData: "age",
            field: "age",
            flex: 'flex-[2_2_0%]',
        },
        {
            headingData: "powers",
            field: "power",
            flex: 'flex-[3_3_0%]',
            // renderCell: (row: any) => <div className="bg-slate-500 hover:cursor-pointer">{row.power}</div>
        },

    ]

    return (
        <>
            <ATMTable
                heading={headings}
                rows={rows}
                isCheckbox={true}
                isAllSelected={rows.length === selectedRows.length}


                onRowSelect={(row) => {

                    // setradioSelect(row)

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

                }}

                isRowSelected={(row: any) => radioSelect.id === row.id}
                // isRowSelected={(row: any) => selectedRows.findIndex((selectrow) => selectrow.id === row.id) > -1}

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

export default Index;
