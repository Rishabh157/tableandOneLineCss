import { ReactNode } from "react"

export interface ATMTablePropTypes {
    headingRow: {
        headingData: string,
        field: string,
        flex?: string,
        renderCell?: (row: any) => ReactNode,
    }[],
    cellRows: any[],
    isCheckbox?: boolean
}

// for making a tailwind flex class with dyanamic number
// function getFlex(number: number) {
//     return `flex-[${number}_${number}_0%]`
// }
// console.log(getFlex(3))