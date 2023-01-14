import React from 'react';
import ATMTable from './ATMTable';

const rowData = [
    { sNo: 1, userName: "Goutham", produName: "Iphone" },
    { sNo: 2, userName: "Goutham", produName: "Iphone" },
    { sNo: 3, userName: "Goutham", produName: "Iphone" },
    { sNo: 4, userName: "Goutham", produName: "Iphone" },
]

const TableHeading = [
    {
        headerName: "name",
        field: "userName",
        flex: 'flex-[2_2_0%]'
    },
    {
        headerName: "age",
        field: "produName",
        flex: 'flex-[2_2_0%]',
        renderCell: (row: any) => { return <div> {row.produName}</div> }
    },
    {
        headerName: "gender",
        field: "sNo",
        flex: 'flex-[3_3_0%]',
    }
]

function Index() {
    return (
        <div>
            <ATMTable
                headers={TableHeading}
                rows={rowData}
            />
        </div>
    )
}

export default Index;