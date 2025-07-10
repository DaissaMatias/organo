import './Rodape.css'

const Rodape = () =>{
    return(
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://facebook.com' target='_blank'>
                            <img src='/imagens/fb.png' alt='logo do Facebook'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://x.com' target='_blank'>
                            <img src='/imagens/x.png' alt='logo do X'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://instagram.com' target='_blank'>
                            <img src='/imagens/ig.png' alt='logo do Instagram'/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/imagens/logo.png' alt='logo Organo'/>
            </section>
            <section>
                <p>Desenvolvido por Alura</p>
            </section>
        </footer>
    )
}

export default Rodape