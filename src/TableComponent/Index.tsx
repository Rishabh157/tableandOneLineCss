import React from 'react';
import ATMTable from './ATMTable';

const TableHeadingData = [
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
        // renderCell: (row: any) => <div>HELLO Render Cell</div>
    },

]

const TableRowCells = [
    { id: 0, firstname: "Steve", lastName: "Roger", age: 107, power: "Super Human Serum" },
    { id: 1, firstname: "Tony", lastName: "Stark", age: 35, power: "Iron Man Suit" },
    { id: 2, firstname: "Thor", lastName: "Odin", age: 1700, power: "God Of Thunder" },
    { id: 3, firstname: "Clieent", lastName: "Bartin", age: 32, power: "Master in Archry" },
    { id: 4, firstname: "Bruce", lastName: "Banner", age: 45, power: "Gama Rays" },
    { id: 5, firstname: "Natasha", lastName: "Romenoff", age: 26, power: "Fighter" },
]

function Index() {
    return (
        <div>
            <ATMTable
                headingRow={TableHeadingData}
                cellRows={TableRowCells}
                isCheckbox={true}
            />
        </div>
    )
}

export default Index;
