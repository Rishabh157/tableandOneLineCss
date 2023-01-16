import React from 'react'
import "./Table.css";
import { ATMTablePropTypes } from './ATMTablePropType';
import Checkbox from '@mui/material/Checkbox';

function ATMTable({ headingRow, cellRows, isCheckbox }: ATMTablePropTypes) {

    const checkCss = {
        color: '#EE5924',
        '&.Mui-checked': {
            color: '#EE5924',
        },
    }

    return (
        <div className='container mt-5 '>

            <div className='table-header flex items-center p-3 rounded'>
                {isCheckbox ? <Checkbox sx={checkCss} /> : null}
                {
                    headingRow.map((ele, ind) => {
                        return (
                            <div id='cell' key={ind} className={`${ele.flex}`}>
                                {ele.headingData}
                            </div>
                        )
                    })
                }
            </div>

            {/* table body  */}
            {
                cellRows.map((ele, ind) => {
                    return (
                        <div key={ind}
                            className='table-body flex items-center p-3 rounded border-1 border-b'>
                            {isCheckbox ? <Checkbox sx={checkCss} /> : null}

                            {
                                headingRow.map((heading, ind) => {
                                    return (
                                        <div key={ind}
                                            className={`${heading.flex}`}>
                                            {heading.renderCell ? heading.renderCell(ele) : ele[heading.field]}
                                            {/* {ele[heading.field]} */}
                                        </div>
                                    )
                                })
                            }

                        </div>
                    )
                })
            }
        </div>
    )
}

export default ATMTable