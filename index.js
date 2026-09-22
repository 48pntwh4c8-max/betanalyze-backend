const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/fixtures', (req, res) => {
  const fixtures = [
    { id: '1', league: 'Ligue 1', homeTeam: 'PSG', awayTeam: 'OM', sportType: 'football', startTime: new Date().toISOString() },
    { id: '2', league: 'ATP', homeTeam: 'Djokovic', awayTeam: 'Alcaraz', sportType: 'tennis', startTime: new Date().toISOString() }
  ];
  res.json(fixtures);
});

app.get('/api/odds/:fixtureId', (req, res) => {
  res.json({
    bookmakers: [{
      name: 'Betclic',
      markets: [{
        name: 'Résultat',
        outcomes: [
          { name: 'Victoire 1', odds: 1.85 },
          { name: 'Nul', odds: 3.50 },
          { name: 'Victoire 2', odds: 4.20 }
        ]
      }]
    }]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
