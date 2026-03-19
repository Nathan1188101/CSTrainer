import './navbar.css'

function Navbar() {
	return (
		<header className="site-navbar">
			<div className="navbar-brand">
				<span className="brand-dot" aria-hidden="true"></span>
				<span>CS Trainer</span>
			</div>

			<nav className="navbar-links" aria-label="Primary">
				<a href="#" className="navbar-link">
					Home
				</a>
				<a href="#" className="navbar-link">
					Topics
				</a>
				<a href="#" className="navbar-link">
					Progress
				</a>
			</nav>

			<button type="button" className="navbar-signin-btn">
				Sign In
			</button>
		</header>
	)
}

export default Navbar
