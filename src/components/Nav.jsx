function Nav() {
  return (
    <nav>
      <div class="logo-wrap">
        <svg class="ford-oval" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
          <ellipse
            cx="50"
            cy="30"
            rx="48"
            ry="28"
            fill="#003da5"
            stroke="#1a5bc4"
            stroke-width="2"
          />
          <text
            x="50"
            y="37"
            text-anchor="middle"
            font-family="Georgia, serif"
            font-size="22"
            font-weight="bold"
            font-style="italic"
            fill="white"
            letter-spacing="1"
          >
            Ford
          </text>
        </svg>
        <div class="logo-text">
          <span>Sołtysiak</span>
          <span>Serwis samochodowy</span>
        </div>
      </div>
      <div class="nav-badge">Specjalizacja Ford · Od 2014 r.</div>
    </nav>
  );
}

export default Nav;
