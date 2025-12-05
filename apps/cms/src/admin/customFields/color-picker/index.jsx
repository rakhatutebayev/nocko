import React from 'react';
import { Select, Option } from '@strapi/design-system/Select';
import { Box } from '@strapi/design-system/Box';
import { Flex } from '@strapi/design-system/Flex';

const COLOR_OPTIONS = [
  { value: '#3474ff', label: 'Синий', color: '#3474ff' },
  { value: '#00aeff', label: 'Голубой', color: '#00aeff' },
  { value: '#583bec', label: 'Фиолетовый', color: '#583bec' },
  { value: '#11c979', label: 'Зеленый', color: '#11c979' },
  { value: '#ffcc2a', label: 'Желтый', color: '#ffcc2a' },
  { value: '#ec5050', label: 'Красный', color: '#ec5050' },
];

const ColorPicker = ({ name, onChange, value, error, description, required }) => {
  const handleChange = (newValue) => {
    onChange({ target: { name, value: newValue } });
  };

  const selectedOption = COLOR_OPTIONS.find(opt => opt.value === value);

  return (
    <div>
      <Select
        name={name}
        label="Цвет границы"
        hint={description}
        error={error}
        required={required}
        value={value || COLOR_OPTIONS[0].value}
        onChange={handleChange}
      >
        {COLOR_OPTIONS.map((option) => (
          <Option key={option.value} value={option.value}>
            <Flex alignItems="center" gap={2}>
              <Box
                width="20px"
                height="20px"
                borderRadius="4px"
                backgroundColor={option.color}
                border="1px solid"
                borderColor="neutral300"
                flexShrink={0}
              />
              <span>{option.label} ({option.value})</span>
            </Flex>
          </Option>
        ))}
      </Select>
      {selectedOption && (
        <Box marginTop={2}>
          <Flex alignItems="center" gap={2}>
            <Box
              width="40px"
              height="40px"
              borderRadius="4px"
              backgroundColor={selectedOption.color}
              border="2px solid"
              borderColor="neutral300"
            />
            <span>Выбранный цвет: {selectedOption.label} ({selectedOption.value})</span>
          </Flex>
        </Box>
      )}
    </div>
  );
};

export default ColorPicker;

