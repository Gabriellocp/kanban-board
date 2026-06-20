import Logo from './assets/logo.svg?react';
import { Button } from './components/Button';
import { Column } from "./components/Column";
import { useColumns } from './hooks/useColumns';
import { cn } from './utils/cn';

export default function App() {
  const { columns, addColumn } = useColumns();
  return (

    <div className="h-screen bg-gray-900 flex justify-center">
      <div className="flex h-full w-5xl bg-gray-700 flex-col justify-between">
        <header className="h-14 bg-white rounded-b-md px-4 flex items-center justify-between">
          <Logo className='h-30 w-30' />
          {columns.length !== 0 && <Button onClick={addColumn} >
            Nova coluna
          </Button>}
        </header>
        {columns.length === 0 && <div className='flex flex-col items-center gap-4 m-auto'>
          <p className='text-3xl text-center text-white font-bold font-sans'>Ainda não existem colunas para seu Quadro Kanban.
            <br />Crie uma nova e comece a usar!</p>
          <Button onClick={addColumn} >
            Criar a primeira coluna
          </Button>
        </div>}
        {columns.length !== 0 && <div className="flex h-full flex-row gap-4 px-6 py-10  overflow-x-auto scrollbar-none">
          {columns.map((_, idx) => (
            <Column className={cn(idx === 0 && 'rounded-l-md', idx === columns.length - 1 && 'rounded-r-md')} />
          ))}
        </div>}
        <footer className='h-10 bg-white rounded-t-md px-4 flex items-center justify-between'>
          <p className='font-medium text-lg'>Histórico de atividades</p>
        </footer>
      </div>
    </div>
  )
}


