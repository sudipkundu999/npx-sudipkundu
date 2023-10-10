#!/usr/bin/env node

function logDetails() {
  const message = "Hey there! I'm Sudip Kundu, a UI Developer at Flipkart!";
  const twitter = 'https://twitter.com/sudipkundu999';
  const github = 'https://github.com/sudipkundu999';
  const linkedin = 'https://linkedin.com/in/sudip-kundu';
  const portfolio = 'https://sudipkundu.com';
  const colorfulBox = `    \x1b[38;5;51m+--------------------------------------------------------------+
    |   \x1b[38;5;105m${message}\x1b[38;5;51m    |
    +--------------------------------------------------------------+
    | \x1b[38;5;93mPortfolio:\x1b[0m  \x1b[38;5;39m${portfolio}                           \x1b[38;5;51m|
    | \x1b[38;5;93mGithub:\x1b[0m     \x1b[38;5;39m${github}                 \x1b[38;5;51m|
    | \x1b[38;5;93mTwitter:\x1b[0m    \x1b[38;5;39m${twitter}                \x1b[38;5;51m|
    | \x1b[38;5;93mLinkedIn:\x1b[0m   \x1b[38;5;39m${linkedin}              \x1b[38;5;51m|
    +--------------------------------------------------------------+\x1b[0m`;

  console.log(colorfulBox);
}

logDetails();
