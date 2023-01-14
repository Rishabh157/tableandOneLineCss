import { ReactNode } from "react"

export interface ATMTablePropsType {
    headers: {
        headerName: string,
        field: string,
        renderCell?: (row: any) => ReactNode,
        flex?: string
    }[]
    rows: any[]
}
