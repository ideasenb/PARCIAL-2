export default function SideBar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <span className="sidebar-tag">DECK CONTROL</span>
                <span className="sidebar-status-led"></span>
            </div>
            <nav className="sidebar-nav">
                <ul className="sidebar-menu">
                    <li className="sidebar-item">
                        <button type="button" className="sidebar-btn active">
                            <span className="btn-icon">►</span>
                            <span className="btn-text">Explorar</span>
                        </button>
                    </li>
                    <li className="sidebar-item">
                        <button type="button" className="sidebar-btn">
                            <span className="btn-icon">✦</span>
                            <span className="btn-text">Géneros</span>
                        </button>
                    </li>
                    <li className="sidebar-item">
                        <button type="button" className="sidebar-btn">
                            <span className="btn-icon">★</span>
                            <span className="btn-text">Mis Favoritos</span>
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="sidebar-footer">
                <div className="tape-counter-box">
                    <span className="tape-label">INDEX</span>
                    <span className="tape-digits">1984</span>
                </div>
                <div className="cassette-decor">
                    <span className="spool">◎</span>
                    <span className="tape-bridge"></span>
                    <span className="spool">◎</span>
                </div>
            </div>
        </aside>
    );
}
