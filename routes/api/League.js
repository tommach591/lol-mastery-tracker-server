const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const API_KEY = process.env.REACT_APP_RIOT_API_KEY;

router.get("/summoner/:region/:summonerName", (req, res) => {
  const { region, summonerName } = req.params;

  console.log(`Getting Summoner`);
  fetch(
    `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`
  )
    .then((result) => {
      result.text().then((text) => {
        return res.json(text);
      });
    })
    .catch((err) => {
      return res
        .status(404)
        .json({ summonerNotFound: "No summoner found in that region" });
    });
});

router.get("/mastery/:region/:summonerID", (req, res) => {
  const { region, summonerID } = req.params;

  console.log(`Getting Mastery`);
  fetch(
    `https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerID}?api_key=${API_KEY}`
  )
    .then((result) => {
      result.text().then((text) => {
        return res.json(text);
      });
    })
    .catch((err) => {
      return res
        .status(404)
        .json({ summonerNotFound: "No summoner found in that region" });
    });
});

router.get("/score/:region/:summonerID", (req, res) => {
  const { region, summonerID } = req.params;

  console.log(`Getting Mastery Score`);
  fetch(
    `https://${region}.api.riotgames.com/lol/champion-mastery/v4/scores/by-summoner/${summonerID}?api_key=${API_KEY}`
  )
    .then((result) => {
      result.text().then((text) => {
        return res.json(text);
      });
    })
    .catch((err) => {
      return res
        .status(404)
        .json({ summonerNotFound: "No summoner found in that region" });
    });
});

router.get("/mission/:region", (req, res) => {
  const { region } = req.params;

  console.log(`Getting Mission`);
  fetch(
    `https://${region}.api.riotgames.com/lol/challenges/v1/challenges/401104/config?api_key=${API_KEY}`
  )
    .then((result) => {
      result.text().then((text) => {
        return res.json(text);
      });
    })
    .catch((err) => {
      return res
        .status(404)
        .json({ summonerNotFound: "No summoner found in that region" });
    });
});

router.get("/challenges/:region/:puuid", (req, res) => {
  const { region, puuid } = req.params;

  console.log(`Getting Challenges`);
  fetch(
    `https://${region}.api.riotgames.com/lol/challenges/v1/player-data/${puuid}?api_key=${API_KEY}`
  )
    .then((result) => {
      result.text().then((text) => {
        return res.json(text);
      });
    })
    .catch((err) => {
      return res
        .status(404)
        .json({ summonerNotFound: "No summoner found in that region" });
    });
});

router.get("/rotations/:region", (req, res) => {
  const { region } = req.params;
  console.log(`Getting Champion Rotations`);
  fetch(
    `https://${region}.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API_KEY}`
  )
    .then((result) => {
      result.text().then((text) => {
        return res.json(text);
      });
    })
    .catch((err) => {
      return res.status(404).json({ rotationNotFound: "No champion rotation" });
    });
});

module.exports = router;
