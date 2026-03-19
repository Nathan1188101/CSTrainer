import { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/signup.css'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <main className="signup-page">
      <div className="signup-container">
        <div className="signup-header">
          <h1>Create your account</h1>
          <p>Start training CS fundamentals today</p>
        </div>

        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Sign up
          </button>
        </form>

        <div className="signup-footer">
          <p>Already have an account?</p>
          <Link to="/login" className="signup-link">
            Log in instead
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Signup
