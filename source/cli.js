// 3rd-party imports

import { h, render } from "ink";
import termImg from "term-img";

// local imports

import PersonalCard from "./personal_card";
import avatarPNG from "./avatar.png";

// CLI

const fallback = () => {
  /* noop */
};

termImg(__dirname + avatarPNG, { fallback });

render(<PersonalCard />);
