import './styles/Header.css'

const Header = () =>{
    return(
        <div className="Header">
            <div className="title">
                <h1>Klz Blog</h1>
            </div>
            
            <div>

            <div className="RightNav">
                <div className='Lupa'>
                        <p>#</p>
                    </div>
                    <input placeholder="Buscador" />
                </div>

                    <div className="Burguer">
                        <p> About me </p>
                        <p> Portfolio </p>
                        <p> More </p>
                    </div>
            </div>

        </div>
    )
}

export default Header