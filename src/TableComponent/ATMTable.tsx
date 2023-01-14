import React from 'react'
import { ATMTablePropsType } from './ATMTablePropType';

function getFlex(number: number) {
    return `flex-[${number}_${number}_0%]`
}

console.log(getFlex(3))

function ATMTable({ rows, headers }: ATMTablePropsType) {

    return (
        <div className='h-96 my-40 justify-center grid grid-cols-12'>

            <div className='col-span-2'></div>  {/* delete it */}

            <div className='table-parent bg-white col-span-8 p-6'>

                <div className='table-head'>

                    {/* table heading  */}
                    <div className='table-head-row flex bg-cb-table-heading py-3 px-4 rounded-lg'>
                        {headers.map((ele, ind) => {

                            // let flex = getFlex(ele.flex || 1)

                            return (
                                <div key={ele.headerName}
                                    className={`text-orange font-bold capitalize ${ele.flex}`}
                                >
                                    {ele.headerName}
                                </div>
                            )
                        })}
                    </div>

                    {/* table body  */}
                    <div className='bg-cb-gray-list'>
                        {/* table row  */}
                        {
                            rows.map((row) => {

                                return (
                                    <div className='table-data-row flex px-4 my-3 border-b border-slate-500'>
                                        {
                                            headers.map((header) => {
                                                // let flex = getFlex(header.flex || 1)
                                                return (
                                                    <div className={`${header.flex}`}>
                                                        {header.renderCell ? header.renderCell(row) : row[header.field]}
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='col-span-2'></div>  {/* delete it */}
        </div>
    )
}

export default ATMTable