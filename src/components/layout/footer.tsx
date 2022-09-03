import { memo, ReactElement } from "react";
import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaRegCopyright } from 'react-icons/fa';
export const Footer = memo((): ReactElement => {
    return (
        <footer className='grid grid-cols-3 h-10 bg-primary-focus text-primary-content p-2'>
            <div className='text-start items-center'>Versão: <strong>1.0</strong></div>
            <div className='text-2xl flex items-center justify-center gap-2'>
                <FaHtml5 />
                <FaCss3Alt />
                <FaJs />
                <FaReact />
            </div>
            <div className='flex items-center justify-end gap-1'>
                <span>Todos os direitos reservados</span>
                <FaRegCopyright/>
            </div>
        </footer>
    );
});