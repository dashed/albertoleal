#!/usr/bin/env node

// node.js imports

const path = require("path");

// 3rd-party imports

const importJsx = require("import-jsx");
const { h, render } = require("ink");
const meow = require("meow");
const termImg = require("term-img");

// local imports

const personal_card = importJsx("./personal_card");

// CLI

meow(`
    Usage
      $ npx albertoleal
`);

const pathToAvatar = path.join(__dirname, "avatar.png");
const fallback = () => {
  /* noop */
};

termImg(pathToAvatar, { fallback });

render(h(personal_card));
