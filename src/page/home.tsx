import { ReactElement } from "react";

export const HomePage = (): ReactElement => {
    return (
        <article className='flex flex-col p-1 gap-2'>
            <h1 className='border-b-2 text-3xl text-primary font-medium'>Cadastro de Pessoa</h1>
            <section className='flex-grow'>
                <div className='card shadow shadow-neutral'>
                    <div className="card-body p-4">
                        <h2 className="card-title">Dados da Pessoa</h2>
                        <div className='grid grid-cols-5 gap-2'>
                            <div className="form-control">
                                <label className="label label-text">CPF</label>
                                <input type="text" placeholder="Ex.: 159.654.325-88" autoFocus title='Informe aqui o CPF' className="input input-bordered w-full " />
                                <label className="label label-text-alt text-error">É necessário informar o CPF</label>
                            </div>
                            <div className="form-control col-span-4">
                                <label className="label">
                                    <span className="label-text">Nome</span>
                                </label>
                                <input type="text" placeholder="Ex.: José da Silva" title='Informe aqui o nome' className="input input-bordered w-full" />
                                <label className="label">
                                    <span className="label-text-alt text-error">É necessário informar o CPF</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-end items-end w-full gap-1">
                            <button className="btn btn-outline btn-primary">Limpar</button>
                            <button className="btn btn-primary">Confirmar</button>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}