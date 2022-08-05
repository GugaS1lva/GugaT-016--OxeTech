function Home() {
    return (
        <main>
            <header>
                <a href="#">
                    <img src="/images/oxeTechMainLogo.png" alt="" />
                </a>

                <nav>
                    <ul>
                        <li>Início</li>
                        <li>Cadastro</li>
                        <li>Login</li>
                        <li>Sobre</li>
                    </ul>
                </nav>
            </header>

            <main class="triangleFrame">
                <img className="triangleImg" src="/images/triangleFrame.png" alt="" />

                <div className="logoList">
                    <ul>
                        <li>
                            <img src="/images/oxeTechLabLogo.png" className="labLogo" alt="" />
                        </li>
                        <li>
                            <img src="/images/oxeTechHat.png" className="HatLogo" alt="" />
                        </li>
                        <li>
                            <img src="/images/oxeTechWorkLogo.png" className="WorkLogo" alt="" />
                        </li>
                        <li>
                            <img src="/images/oxeTechDin.png" className="DinLogo" alt="" />
                        </li>
                    </ul>
                </div>

                <aside className="alagoasContainer">
                    <img src="/images/alagoas.png" className="alagoasLogo" alt="" />
                </aside>
            </main>
        </main>
    )
}

export default Home