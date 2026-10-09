// Componente reutilizable que recibe la información del juego por props
export function GameCard({ title, developer, image }) {
    return (
        <article className="game-card">
            <div className="card-top-accent"></div>
            <div className="game-card-img-wrapper">
                <img src={image} alt={title} className="game-card-img" />
                <span className="card-cartridge-tag">CART-ROM</span>
            </div>
            <div className="game-card-info">
                <div className="game-card-meta">
                    <span className="dev-tag">STUDIO //</span>
                    <span className="game-card-dev">{developer}</span>
                </div>
                <h3 className="game-card-title">{title}</h3>
                <button type="button" className="game-card-btn">
                    <span className="btn-play-icon">▶</span>
                    <span>Ver Detalles</span>
                </button>
            </div>
        </article>
    );
}

// Componente que renderiza las 6 instancias con datos hardcodeados
export default function GameList() {
    return (
        <main className="games-container">
            <div className="catalog-header-bar">
                <div className="catalog-title-wrapper">
                    <span className="catalog-bullet">■</span>
                    <h2 className="catalog-heading">CATÁLOGO DE VIDEOJUEGOS</h2>
                </div>
                <div className="catalog-meta-info">
                    <span className="status-label">SYS_STATUS:</span>
                    <span className="status-val">READY</span>
                    <span className="status-blinker"></span>
                </div>
            </div>

            <div className="games-grid">
                <GameCard
                    title="Hollow Knight"
                    developer="Team Cherry"
                    image="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/3c3489495136b26b34f8a9543c7f5645b99d388c/header.jpg?t=1776125684"
                />
                <GameCard
                    title="Celeste"
                    developer="Maddy Makes Games"
                    image="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg?t=1714089525"
                />
                <GameCard
                    title="Stardew Valley"
                    developer="ConcernedApe"
                    image="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg?t=1786554168"
                />
                <GameCard
                    title="Left 4 Dead 2"
                    developer="Valve"
                    image="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/500/header.jpg?t=1745368560"
                />
                <GameCard
                    title="Five Nights at Freddy's"
                    developer="Terror"
                    image="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/319510/header.jpg?t=1666889251"
                />
                <GameCard
                    title="Garry's Mod"
                    developer="Facepunch Studios"
                    image="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/header.jpg?t=1776868682"
                />
            </div>
        </main>
    );
}
