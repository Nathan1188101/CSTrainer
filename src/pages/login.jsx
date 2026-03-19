import { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/login.css'

function Login() {
  const [email, checkEmail] = useState('')
  const [password, checkPassword] = useState('')

  return (
    <main className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Login</h1>
          <p>Get back in and start training</p>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => checkEmail(e.target.value)}
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
              onChange={(e) => checkPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="login-footer">
          <p>Don't have an account?</p>
          <Link to="/signup" className="login-link">
            Sign up instead
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Login
