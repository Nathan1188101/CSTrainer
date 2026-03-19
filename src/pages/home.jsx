import './css/home.css'
import Navbar from '../components/navbar/navbar.jsx'

function Home() {
    return (
        <main className="home-page">
            <Navbar />
            <section className="home-hero">
                <p className="home-eyebrow">CS Trainer</p>
                <h1>Train CS instincts every day.</h1>
                <p className="home-subtitle">
                    Bite-sized quizzes, practical concepts, and consistent progress in a
                    clean, focused learning space.
                </p>
                <div className="home-actions">
                    <button type="button" className="home-primary-btn">
                        Start Training
                    </button>
                    <button type="button" className="home-secondary-btn">
                        View Topics
                    </button>
                </div>
            </section>

            <section className="home-highlights">
                <article className="highlight-card">
                    <h2>Quick Sessions</h2>
                    <p>5-minute quiz rounds designed for daily momentum.</p>
                </article>
                <article className="highlight-card">
                    <h2>Core CS Topics</h2>
                    <p>Data structures, algorithms, complexity, and problem solving.</p>
                </article>
                <article className="highlight-card">
                    <h2>Progress Focused</h2>
                    <p>Track wins over time and build confidence one challenge at a time.</p>
                </article>
            </section>

            <section className="home-topic-grid" aria-label="Core learning topics">
                <h2 className="topic-grid-title">Popular Topics</h2>
                <div className="topic-grid-cards">
                    <article className="topic-card">
                        <div className="topic-card-container">
                            <h3>Algorithms</h3>
                            <span className="difficulty-tag difficulty-medium">Medium</span>                            
                        </div>

                    </article>
                    <article className="topic-card">
                        <div className="topic-card-container">
                            <h3>Data Structures</h3>
                            <span className="difficulty-tag difficulty-medium">Medium</span>
                        </div>
                    </article>
                    <article className="topic-card">
                        <div className="topic-card-container"> 
                            <h3>Time Complexity</h3>
                            <span className="difficulty-tag difficulty-hard">Hard</span>                            
                        </div>
                    </article>
                    <article className="topic-card">
                        <div className="topic-card-container">
                            <h3>Operating Systems</h3>
                            <span className="difficulty-tag difficulty-easy">Easy</span>                            
                        </div>
                    </article>
                    <article className="topic-card">
                        <div className="topic-card-container">
                            <h3>Networking</h3>
                            <span className="difficulty-tag difficulty-easy">Easy</span>                            
                        </div>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Home