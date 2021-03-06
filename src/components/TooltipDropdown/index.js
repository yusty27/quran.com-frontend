import React, { PropTypes } from 'react';
import Menu, { MenuItem } from 'quran-components/lib/Menu';
import Radio from 'quran-components/lib/Radio';
import Icon from 'quran-components/lib/Icon';
import LocaleFormattedMessage from 'components/LocaleFormattedMessage';

const TooltipDropdown = ({ tooltip, onOptionChange }) => {
  const handleOptionChange = type => onOptionChange({
    tooltip: type
  });

  const list = ['translation', 'transliteration'].map(type => (
    <MenuItem key={type}>
      <Radio
        id={type}
        name="type"
        checked={type === tooltip}
        handleChange={() => handleOptionChange(type)}
      >
        <LocaleFormattedMessage id={`setting.tooltip.${type}`} defaultMessage={type.toUpperCase()} />
      </Radio>
    </MenuItem>
  ));

  return (
    <MenuItem
      icon={<Icon type="globe" />}
      menu={
        <Menu>
          {list}
        </Menu>
      }
    >
      <LocaleFormattedMessage id="setting.tooltip.title" defaultMessage="Tooltip Content" />
    </MenuItem>
  );
};

TooltipDropdown.propTypes = {
  onOptionChange: PropTypes.func,
  tooltip: PropTypes.string.isRequired,
};

export default TooltipDropdown;
