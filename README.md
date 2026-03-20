# KollyMaja 🎬

Tamil Movie Ranking Game — Rank it. Reveal it. Roast it.

---

## Deploy to Render (Free) — Step by Step

### Step 1 — Create a GitHub repository

1. Go to **github.com** → Sign in (or create a free account)
2. Click the **+** button → **New repository**
3. Name it: `kollymaja`
4. Set it to **Public**
5. Click **Create repository**

### Step 2 — Upload these files to GitHub

In your new repo, click **Add file → Upload files** and upload:
- `index.html`
- `server.js`
- `package.json`

Then click **Commit changes**.

### Step 3 — Deploy on Render

1. Go to **render.com** → Sign in with GitHub (free account)
2. Click **New +** → **Web Service**
3. Click **Connect** next to your `kollymaja` repo
4. Fill in these settings:
   - **Name**: `kollymaja` (or any name you like)
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Instance Type**: `Free`
5. Click **Create Web Service**

### Step 4 — Share the link!

Render will give you a URL like:
`https://kollymaja.onrender.com`

Share that link with your friends — they can open it on any phone or computer and play!

---

## Notes
- The free Render tier **spins down after 15 minutes of inactivity** — the first load may take ~30 seconds to wake up
- To keep it always awake, upgrade to Render's paid tier ($7/month) or use a free ping service like **UptimeRobot**
- The game runs entirely in the browser — no database needed

---

## Play Locally (without deploying)

Just open `index.html` directly in any browser — no server needed for local play!
