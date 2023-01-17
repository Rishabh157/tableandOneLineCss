import React, { useState } from 'react';
import "./Table.css";
import { ATMTablePropsType } from './ATMTablePropType';
// this is for checkbox 
import Checkbox from '@mui/material/Checkbox';
// this is for radio selections 
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

// function getFlex(number: number) {
//     return `flex-[${number}_${number}_0%]`
// }

const checkCss = {
    color: '#EE5924',
    '&.Mui-checked': {
        color: '#EE5924',
    },
}

function ATMTable({ heading, rows, isCheckbox, isAllSelected, isRowSelected = () => false, onRowSelect = () => { }, onSelectAll = () => { } }: ATMTablePropsType) {

    return (
        <div className='h-96 my-40 grid grid-cols-12'>

            <div className='col-span-2'></div>

            <div className='table-parent bg-white col-span-8 p-6'>

                <div className='table-head'>

                    {/* table heading  */}
                    <div className='table-header w-auto flex items-center p-3 rounded'>
                        {isCheckbox ? <Checkbox
                            checked={isAllSelected}
                            onChange={() => { onSelectAll() }}
                            sx={checkCss} /> : null}

                        {heading.map((ele, ind) => {
                            return (
                                <div id='cell' key={ind} className={`${ele.flex} text-orange`}>
                                    {ele.headingData}
                                </div>
                            )
                        })}

                    </div>

                    {rows.map((ele: any, ind) => {
                        return (
                            <div key={ind}
                                className='bg-cb-gray-list flex items-center p-3 rounded border-1 border-b'>
                                {isCheckbox ? <Checkbox
                                    checked={isRowSelected(ele)}
                                    onChange={() => { onRowSelect(ele) }}
                                    sx={checkCss}
                                /> : null}

                                {heading.map((heading, ind) => {
                                    return (
                                        <div key={ind}
                                            className={`${heading.flex}`}>
                                            {heading.renderCell ? heading.renderCell(ele) : ele[heading.field]}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='col-span-2'>
                {/* <button onClick={() => {
                    // console.log('selected items', listArray)
                }}
                    className='p-4 bg-orange text-18 text-white'>Seleceted items
                </button> */}
            </div>
        </div>
    )
}

export default ATMTable;


// import ATMTable from "../../atom/ATMTable/ATMTable";
// import CheckBox from '@mui/icons-material/CheckBox';
// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// const TableHeading = [
//   {
//     headerName: <CheckBox />,
//     field: "checkbox",
//     flex: 'flex-[1_1_0%]',
//     renderCell: (row: any) => { return <div> <CheckBox {...label} sx={{ color: "#ee5816" }} /></div> }
//   },
//   {
//     headerName: "sNo",
//     field: "sNo",
//     flex: 'flex-[1_1_0%]',
//   },
//   {
//     headerName: "userName",
//     field: "userName",
//     flex: 'flex-[2_2_0%]',
//     // renderCell: (row: any) => { return <div>{row.userName}</div> }
//   },
//   {
//     headerName: "gender",
//     field: "produName",
//     flex: 'flex-[3_3_0%]',
//   },
//   {
//     headerName: "mobile",
//     field: "mobile",
//     flex: 'flex-[3_3_0%]',
//   }
// ]

// const rowData = [
//   { sNo: 1, userName: "Jhon", produName: "male", mobile: "Iphone", },
//   { sNo: 2, userName: "Steve", produName: "male", mobile: "Redmi Note 8", },
//   { sNo: 3, userName: "Ankur", produName: "female", mobile: "Iphone", },
//   { sNo: 4, userName: "Martinez", produName: "female", mobile: "Google Pixle", },
//   { sNo: 5, userName: "Di Maria", produName: "male", mobile: "Motorola G", },
// ]


{/* <ATMTable
headers={TableHeading}
rows={rowData}
/> */}