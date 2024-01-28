const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const API_KEY = process.env.REACT_APP_RIOT_API_KEY;

router.get("/account/:region/:username/:tag", (req, res) => {
  const { region, username, tag } = req.params;
  console.log(`Getting User`);
  fetch(
    `https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${username}/${tag}?api_key=${API_KEY}`
  )
    .then((result) => {
      result.text().then((text) => {
        return res.json(text);
      });
    })
    .catch((err) => {
      return res
        .status(404)
        .json({ userNotFound: "No user found in that region" });
    });
});

router.get("/summoner/:region/:puuid", (req, res) => {
  const { region, puuid } = req.params;
  console.log(`Getting Summoner`);
  fetch(
    `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${API_KEY}`
  )
    .then((result) => {
      result.text().then((text) => {
        return res.json(text);
      });
    })
    .catch((err) => {
      return res
        .status(404)
        .json({ userNotFound: "No user found in that region" });
    });
});

router.get("/mastery/:region/:puuid", (req, res) => {
  const { region, puuid } = req.params;
  console.log(`Getting Mastery`);
  fetch(
    `https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}?api_key=${API_KEY}`
  )
    .then((result) => {
      result.text().then((text) => {
        return res.json(text);
      });
    })
    .catch((err) => {
      return res
        .status(404)
        .json({ userNotFound: "No user found in that region" });
    });
});

router.get("/score/:region/:puuid", (req, res) => {
  const { region, puuid } = req.params;

  console.log(`Getting Mastery Score`);
  fetch(
    `https://${region}.api.riotgames.com/lol/champion-mastery/v4/scores/by-puuid/${puuid}?api_key=${API_KEY}`
  )
    .then((result) => {
      result.text().then((text) => {
        return res.json(text);
      });
    })
    .catch((err) => {
      return res
        .status(404)
        .json({ userNotFound: "No user found in that region" });
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
        .json({ userNotFound: "No user found in that region" });
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
        .json({ userNotFound: "No user found in that region" });
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
