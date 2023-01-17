import { ReactNode } from "react"

export interface ATMTablePropsType {
    heading: {
        headingData: string,
        field: string,
        flex?: string,
        renderCell?: (row: any) => ReactNode,
    }[]
    rows: any[],
    isCheckbox?: boolean,
    onRowSelect?: (row: any) => void,
    onSelectAll?: () => void,
    isAllSelected?: boolean,
    isRowSelected?: (row: any) => boolean,
}
