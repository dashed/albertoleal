// 3rd-party imports

const { h, Text, Color, Bold } = require("ink");
const SelectInput = require("ink-select-input");
const leftPad = require("left-pad");
const opn = require("opn");

// personal card

const open = url => opn(url, { wait: false });

let items = [
  {
    label: "GitHub",
    secondary_label: "github.com/dashed",
    url: "https://github.com/dashed"
  },
  {
    label: "Website",
    secondary_label: "albertoleal.ca",
    url: "https://albertoleal.ca"
  },
  {
    label: "Twitter",
    secondary_label: "@dasheddashed",
    url: "https://twitter.com/dasheddashed"
  },
  {
    label: "Email",
    secondary_label: "mailforalberto@gmail.com",
    url: "mailto:mailforalberto@gmail.com"
  },
  {
    label: "Quit",
    action() {
      process.exit();
    }
  }
];

const handleSelect = item => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const Item = ({ isSelected, label, secondary_label }) => {
  label = leftPad(label, 8);

  let itemText = secondary_label ? `${label} \u2014 ${secondary_label}` : label;

  if (isSelected) {
    return (
      <Color blue={isSelected}>
        <Bold>{itemText}</Bold>
      </Color>
    );
  }

  return <Color blue={isSelected}>{itemText}</Color>;
};

const PersonalCard = () => {
  return (
    <div>
      <br />
      <div>
        <Text>Hi! My name is Alberto Leal.</Text>
        <br />
        <br />
        <Text>
          I am a passionate software developer, and I love to break and build
          ████████, <br />
          but most of the time I just concatenate strings for $.
        </Text>
      </div>
      <br />
      <SelectInput itemComponent={Item} items={items} onSelect={handleSelect} />
    </div>
  );
};

module.exports = PersonalCard;
