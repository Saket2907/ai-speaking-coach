FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Download the Silero VAD model at build time
RUN python -c "from livekit.plugins import silero; silero.VAD.load()"

COPY . .

CMD ["python", "agent.py", "start"]
