import React, { useState, useCallback } from 'react';
import styles from './SignIn.module.css';

/**
 * PUBLIC_INTERFACE
 * SignIn
 * A reusable Sign In component that replicates the provided Figma-based static screen,
 * adapted to React with accessible, semantic form elements and Ocean Professional theme.
 *
 * Props:
 * - onSubmit: function({ email: string, password: string }) => void
 *   Optional callback invoked when the form is submitted.
 * - onForgotPassword: function() => void
 *   Optional callback invoked when "Forgot Password?" is clicked.
 * - onSocialClick: function(provider: 'google' | 'facebook') => void
 *   Optional callback when a social sign-in tile is clicked.
 * - onNavigateToSignUp: function() => void
 *   Optional callback to navigate to sign up flow.
 */
function SignIn({
  onSubmit,
  onForgotPassword,
  onSocialClick,
  onNavigateToSignUp,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Replace console.log with prop callbacks if provided
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (onSubmit) {
        onSubmit({ email, password });
      } else {
        // Fallback logging for now
        // eslint-disable-next-line no-console
        console.log('Sign In submit', { email, password });
      }
    },
    [onSubmit, email, password]
  );

  const handleForgot = useCallback(() => {
    if (onForgotPassword) onForgotPassword();
    else console.log('Forgot Password clicked');
  }, [onForgotPassword]);

  const handleSocial = useCallback(
    (provider) => {
      if (onSocialClick) onSocialClick(provider);
      else console.log(`${provider} sign-in clicked`);
    },
    [onSocialClick]
  );

  const handleSignUp = useCallback(() => {
    if (onNavigateToSignUp) onNavigateToSignUp();
    else console.log('Navigate to Sign up');
  }, [onNavigateToSignUp]);

  return (
    <section
      className={`${styles.screen} ${styles.card}`}
      role="main"
      aria-label="Sign In screen"
    >
      {/* Faux status bar area (from Figma) kept minimal for spacing fidelity */}
      <div className={styles.statusBar} aria-hidden="true">
        <span className={styles.statusTime}>19:27</span>
        <span className={styles.statusIcons} />
      </div>

      {/* Headings */}
      <header className={styles.headerGroup}>
        <h1 className={styles.hello}>Hello,</h1>
        <p className={styles.welcome}>Welcome Back!</p>
      </header>

      {/* Form */}
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="signin-email">
            Email
          </label>
          <input
            id="signin-email"
            name="email"
            type="email"
            placeholder="Enter Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="signin-password">
            Enter Password
          </label>
          <input
            id="signin-password"
            name="password"
            type="password"
            placeholder="Enter Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>

        <button
          type="button"
          onClick={handleForgot}
          className={styles.forgotLink}
          aria-label="Forgot Password"
        >
          Forgot Password?
        </button>

        <button
          id="btn-sign-in"
          type="submit"
          className={styles.primaryCta}
          aria-label="Sign In"
        >
          <span>Sign In</span>
          <span className={styles.ctaIcon} aria-hidden="true" />
        </button>

        <div className={styles.divider}>
          <span className={styles.line} />
          <span className={styles.dividerText}>Or Sign in With</span>
          <span className={styles.line} />
        </div>

        <div className={styles.socialRow} role="group" aria-label="Social sign in options">
          <button
            type="button"
            className={styles.socialTile}
            onClick={() => handleSocial('google')}
            aria-label="Sign in with Google"
          >
            <span className={`${styles.socialIcon} ${styles.googleIcon}`} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={styles.socialTile}
            onClick={() => handleSocial('facebook')}
            aria-label="Sign in with Facebook"
          >
            <span className={`${styles.socialIcon} ${styles.facebookIcon}`} aria-hidden="true" />
          </button>
        </div>
      </form>

      <footer className={styles.footer}>
        <span className={styles.footerText}>Don’t have an account? </span>
        <button type="button" className={styles.signUpLink} onClick={handleSignUp}>
          Sign up
        </button>
      </footer>

      {/* Home indicator */}
      <div className={styles.homeIndicator} aria-hidden="true" />
    </section>
  );
}

export default SignIn;
