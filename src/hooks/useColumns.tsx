import { useState } from "react";

interface IColumn {
    title: string;
    id: string;
}

export function useColumns() {
    const [columns, setColumns] = useState<IColumn[]>([]);
    const addColumn = () => {
        console.log('oi')
        setColumns((prev) => ([...prev, { title: 'Teste', id: Math.random().toString() }]))
    }
    return {
        columns: columns,
        addColumn
    }
}