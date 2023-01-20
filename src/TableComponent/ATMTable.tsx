import React, { useState } from 'react';
import { ATMTablePropsType } from './ATMTablePropType';
// this is for checkbox 
import Checkbox from '@mui/material/Checkbox';

const checkCss = {
    color: '#EE5924',
    '&.Mui-checked': {
        color: '#EE5924',
    },
}


function ATMTable({
    heading,
    rows,
    isCheckbox,
    isAllSelected,
    isRowSelected = () => false,
    onRowSelect = () => { },
    onSelectAll = () => { },
}: ATMTablePropsType) {

    const [value, setValue] = React.useState();
    // console.log("from radio value", value);

    const handleChange = (ele: any) => {
        setValue(ele);
    };

    console.log("from ATM Table Value State", value)

    return (
        <div className='h-96 my-40 grid grid-cols-12'>

            <div className='col-span-2'></div>

            <div className='table-parent bg-white col-span-8 p-6'>

                <div className='table-head'>

                    {/* table heading  */}
                    <div className='bg-cb-table-heading w-auto flex items-center p-3 rounded'>
                        {isCheckbox ? <Checkbox
                            checked={isAllSelected}
                            onChange={() => { onSelectAll() }}
                            sx={checkCss} /> : null}



                        {heading.map((ele, ind) => {
                            return (
                                <div id='cell' key={ind} className={`${ele.flex} text-orange`}>
                                    {ele.heading}
                                </div>
                            )
                        })}

                    </div>

                    {rows.map((ele: any, ind) => {
                        return (
                            <div key={ind}
                                className='bg-cb-gray-list flex items-center p-3 rounded border-1 border-b'>
                                {/* {isCheckbox ? <Checkbox
                                    checked={isRowSelected(ele)}
                                    onChange={() => { onRowSelect(ele) }}
                                    sx={checkCss}
                                /> : null} */}

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
