import React from 'react'

export default function Footer() {
    return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Inicio</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Películas</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Suscripción</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">FAQs</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Acerca de</a></li>
            </ul>
            <p className="text-center text-muted">© 2021 Desarrollado por Luisa Huanca, Jesús Fernández y Kevin Luciano</p>
        </footer>
    )
}
