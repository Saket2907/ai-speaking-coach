# AI Speaking Coach

A real-time AI speaking coach built with LiveKit, Next.js, and Python. The AI listens to you speak and gives feedback on clarity, pacing, and filler words.

## Architecture

```
User Browser (Next.js)
    │
    ├── Camera + Mic → LiveKit Room (WebRTC)
    │                       │
    └── Video UI             └── Python Agent
                                  ├── Deepgram STT  (speech → text)
                                  ├── OpenAI GPT-4o-mini  (coaching response)
                                  └── OpenAI TTS  (text → voice)
```

- **Frontend** (`/frontend`): Next.js app. Handles token generation, joins the LiveKit room, shows the user's video, and displays agent speaking/listening state.
- **Agent** (`/agent`): Python process using LiveKit Agents framework. Joins the same room, transcribes user speech, generates coaching feedback, and speaks back via TTS.

## Prerequisites

- [LiveKit Cloud](https://cloud.livekit.io) account (free tier)
- [OpenAI](https://platform.openai.com) API key
- [Deepgram](https://deepgram.com) API key (free tier available)
- Node.js 18+ and Python 3.11+

## Local Setup

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd ai-speaking-coach
```

### 2. Frontend

```bash
cd frontend
npm install
cp .env.local.example .env.local
```

Edit `.env.local`:

```
LIVEKIT_API_KEY=your_livekit_api_key
LIVEKIT_API_SECRET=your_livekit_api_secret
NEXT_PUBLIC_LIVEKIT_URL=wss://your-project.livekit.cloud
```

```bash
npm run dev
```

Frontend runs at http://localhost:3000

### 3. Agent

```bash
cd agent
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
```

Edit `.env` with your keys, then run:

```bash
python agent.py dev
```

The agent will connect to LiveKit and wait for a room to join.

## Deployment

### Frontend → Vercel

1. Push the repo to GitHub
2. Import the project in [Vercel](https://vercel.com), set the **root directory** to `frontend`
3. Add environment variables in Vercel dashboard (same as `.env.local`)
4. Deploy

### Agent → Railway

1. Create a new project in [Railway](https://railway.app)
2. Connect your GitHub repo, set the **root directory** to `agent`
3. Railway will detect the Dockerfile automatically
4. Add environment variables in Railway dashboard (same as `agent/.env`)
5. Deploy

## Known Limitations

- No persistent session history — each join starts a fresh conversation
- Agent takes a few seconds to join after the user enters the room
- Deepgram STT works best with a decent microphone and low background noise
- The coaching feedback is conversational, not a structured report
