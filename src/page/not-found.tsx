import { ReactElement } from "react";
import { FaBan, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NotFoundPage = (): ReactElement => {
    return (
        <article className='flex flex-col p-1 gap-2'>
            <h1 className='border-b-2 text-3xl text-primary font-medium'>Página ou Recurso não Encontrado!</h1>
            <section className='flex-grow flex flex-col items-center justify-center justify-items-center gap-6 p-6'>
                <FaBan size="100" className='text-error'/>
                <p className='text-center'>A página ou recurso solicitado não foi encontrado.<br/>Por favor verifique novamente.</p>
                <Link to="/home">
                    <button type='button' className='btn btn-primary gap-1'><FaHome/>Ir para Home Page</button>
                </Link>
            </section>
        </article>
    );
}