import React from 'react';
import ATMTable from './ATMTable';

const headings = [
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
        renderCell: (row: any) => <div>{row.power}</div>
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

function Index() {
    const [selectedRows, setSelectedRows] = React.useState<any[]>([
        // { id: 0, firstname: "Steve", lastName: "Roger", age: 107, power: "Super Human Serum" },
        // { id: 1, firstname: "Tony", lastName: "Stark", age: 35, power: "Iron Man Suit" },
        // { id: 2, firstname: "Thor", lastName: "Odin", age: 1700, power: "God Of Thunder" },
        // { id: 3, firstname: "Client", lastName: "Bartin", age: 32, power: "Master in Archry" },
        // { id: 4, firstname: "Bruce", lastName: "Banner", age: 45, power: "Gama Rays" },
        // { id: 5, firstname: "Natasha", lastName: "Romenoff", age: 26, power: "Fighter" },
    ])
    console.log("from selectedRows", selectedRows)
    return (
        <div>
            <ATMTable
                heading={headings}
                rows={rows}
                isCheckbox={true}
                isAllSelected={rows.length === selectedRows.length}


                onRowSelect={(row) => {

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
    )
}

export default Index;
