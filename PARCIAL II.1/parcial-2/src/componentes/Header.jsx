export default function Header() {
    return (
        <header className="header">
            <div className="header-brand">
                <div className="vhs-rec-indicator">
                    <span className="rec-dot"></span>
                    <span className="rec-text">REC [00:84]</span>
                    <span className="vhs-mode">HI-FI STEREO</span>
                </div>
                <h1 className="header-title">IndiePlay - Catálogo</h1>
            </div>
            <div className="header-controls">
                <button type="button" className="login-btn">
                    <span className="btn-bracket">[</span>
                    Iniciar Sesión
                    <span className="btn-bracket">]</span>
                </button>
            </div>
        </header>
    );
}
