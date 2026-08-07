import languages from "../../data/languages";

import "./LanguageSelector.css";

function LanguageSelector({
  value,
  onChange,
}) {
  return (
    <select
      className="language-selector"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {languages.map((language) => (
        <option
          key={language.id}
          value={language.monaco}
        >
          {language.label}
        </option>
      ))}
    </select>
  );
}

export default LanguageSelector;