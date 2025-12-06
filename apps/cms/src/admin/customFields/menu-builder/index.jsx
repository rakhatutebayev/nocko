import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  TextInput,
  Select,
  Option,
  Typography,
  Flex,
  IconButton,
  Stack,
  Alert,
} from '@strapi/design-system';
import { Plus, Trash, Pencil, Drag } from '@strapi/icons';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';

const MenuBuilder = ({ name, value, onChange, attribute }) => {
  const { modifiedData, initialData } = useCMEditViewDataManager();
  const [items, setItems] = useState(value || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    label: '',
    url: '',
    linkType: 'custom',
    linkedContent: null,
    parent: null,
    order: 0,
  });
  const [error, setError] = useState('');

  // Get all available content for linking
  const getAvailableContent = async (type) => {
    // This would fetch from Strapi API
    return [];
  };

  const handleAdd = () => {
    setEditingIndex(null);
    setFormData({
      label: '',
      url: '',
      linkType: 'custom',
      linkedContent: null,
      parent: null,
      order: items.length,
    });
    setError('');
    setIsModalOpen(true);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(items[index]);
    setError('');
    setIsModalOpen(true);
  };

  const handleDelete = (index) => {
    const item = items[index];
    
    // Check if item has submenu or is linked
    if (item.submenu && item.submenu.length > 0) {
      setError('Нельзя удалить пункт меню с подменю. Сначала удалите все подменю.');
      return;
    }

    // Check if this is a parent item
    const hasChildren = items.some((i, idx) => idx !== index && i.parent === index);
    if (hasChildren) {
      setError('Нельзя удалить пункт меню, у которого есть дочерние элементы.');
      return;
    }

    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    onChange({ target: { name, value: newItems } });
    setError('');
  };

  const handleSave = () => {
    if (!formData.label.trim()) {
      setError('Название меню обязательно');
      return;
    }

    // Validate two-level structure
    if (formData.parent !== null) {
      const parent = items[formData.parent];
      if (parent && parent.parent !== null) {
        setError('Меню ограничено двумя уровнями. Нельзя добавить третий уровень.');
        return;
      }
    }

    const newItem = {
      ...formData,
      id: editingIndex !== null ? items[editingIndex].id : Date.now(),
      submenu: formData.parent === null ? (items[editingIndex]?.submenu || []) : [],
    };

    let newItems;
    if (editingIndex !== null) {
      newItems = items.map((item, index) => 
        index === editingIndex ? newItem : item
      );
    } else {
      newItems = [...items, newItem];
    }

    // Sort by order
    newItems.sort((a, b) => (a.order || 0) - (b.order || 0));

    setItems(newItems);
    onChange({ target: { name, value: newItems } });
    setIsModalOpen(false);
    setError('');
  };

  const getTopLevelItems = () => {
    return items.filter((item, index) => item.parent === null || item.parent === undefined);
  };

  const getSubmenuItems = (parentIndex) => {
    return items.filter((item, index) => item.parent === parentIndex);
  };

  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" marginBottom={4}>
        <Typography variant="omega" fontWeight="semiBold">
          Управление меню
        </Typography>
        <Button onClick={handleAdd} startIcon={<Plus />} size="S">
          Добавить пункт меню
        </Button>
      </Flex>

      {error && (
        <Alert closeLabel="Close" title="Ошибка" variant="danger" marginBottom={4}>
          {error}
        </Alert>
      )}

      <Stack spacing={2}>
        {getTopLevelItems().map((item, topIndex) => {
          const actualIndex = items.findIndex((i, idx) => 
            idx === topIndex || (i.parent === null && items.indexOf(i) === topIndex)
          );
          const submenuItems = getSubmenuItems(actualIndex);

          return (
            <Box
              key={item.id || actualIndex}
              padding={4}
              background="neutral0"
              borderColor="neutral200"
              hasRadius
              shadow="tableShadow"
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Flex alignItems="center" gap={2}>
                  <Drag />
                  <Typography variant="omega" fontWeight="semiBold">
                    {item.label}
                  </Typography>
                  {item.url && (
                    <Typography variant="pi" textColor="neutral600">
                      ({item.url})
                    </Typography>
                  )}
                  {submenuItems.length > 0 && (
                    <Typography variant="pi" textColor="primary600">
                      [{submenuItems.length} подменю]
                    </Typography>
                  )}
                </Flex>
                <Flex gap={2}>
                  <IconButton
                    onClick={() => handleEdit(actualIndex)}
                    label="Редактировать"
                    icon={<Pencil />}
                  />
                  <IconButton
                    onClick={() => handleDelete(actualIndex)}
                    label="Удалить"
                    icon={<Trash />}
                    variant="danger"
                  />
                </Flex>
              </Flex>

              {submenuItems.length > 0 && (
                <Box marginTop={3} paddingLeft={4} borderLeft="2px solid" borderColor="primary200">
                  <Stack spacing={2}>
                    {submenuItems.map((subItem, subIndex) => {
                      const subActualIndex = items.findIndex((i, idx) => 
                        i.parent === actualIndex && items.indexOf(i) === subIndex
                      );
                      return (
                        <Flex
                          key={subItem.id || subActualIndex}
                          justifyContent="space-between"
                          alignItems="center"
                          padding={2}
                          background="neutral100"
                          hasRadius
                        >
                          <Flex alignItems="center" gap={2}>
                            <Typography variant="pi">└─ {subItem.label}</Typography>
                            {subItem.url && (
                              <Typography variant="pi" textColor="neutral600">
                                ({subItem.url})
                              </Typography>
                            )}
                          </Flex>
                          <Flex gap={2}>
                            <IconButton
                              onClick={() => handleEdit(subActualIndex)}
                              label="Редактировать"
                              icon={<Pencil />}
                              size="S"
                            />
                            <IconButton
                              onClick={() => handleDelete(subActualIndex)}
                              label="Удалить"
                              icon={<Trash />}
                              variant="danger"
                              size="S"
                            />
                          </Flex>
                        </Flex>
                      );
                    })}
                  </Stack>
                  <Button
                    onClick={() => {
                      setFormData({
                        label: '',
                        url: '',
                        linkType: 'custom',
                        linkedContent: null,
                        parent: actualIndex,
                        order: submenuItems.length,
                      });
                      setEditingIndex(null);
                      setIsModalOpen(true);
                    }}
                    startIcon={<Plus />}
                    size="S"
                    variant="secondary"
                    marginTop={2}
                  >
                    Добавить подменю
                  </Button>
                </Box>
              )}

              {submenuItems.length === 0 && (
                <Button
                  onClick={() => {
                    setFormData({
                      label: '',
                      url: '',
                      linkType: 'custom',
                      linkedContent: null,
                      parent: actualIndex,
                      order: 0,
                    });
                    setEditingIndex(null);
                    setIsModalOpen(true);
                  }}
                  startIcon={<Plus />}
                  size="S"
                  variant="secondary"
                  marginTop={2}
                >
                  Добавить подменю
                </Button>
              )}
            </Box>
          );
        })}
      </Stack>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalHeader>
          <Typography fontWeight="bold" textColor="neutral800" as="h2">
            {editingIndex !== null ? 'Редактировать пункт меню' : 'Добавить пункт меню'}
          </Typography>
        </ModalHeader>
        <ModalBody>
          <Stack spacing={4}>
            <TextInput
              label="Название меню"
              name="label"
              value={formData.label}
              onChange={(e) => setFormData({ ...formData, label: e.target.value })}
              required
            />

            <Select
              label="Тип ссылки"
              name="linkType"
              value={formData.linkType}
              onChange={(value) => setFormData({ ...formData, linkType: value })}
            >
              <Option value="custom">Произвольная ссылка</Option>
              <Option value="page">Страница</Option>
              <Option value="service">Услуга</Option>
              <Option value="case-study">Кейс</Option>
              <Option value="article">Статья</Option>
              <Option value="industry">Индустрия</Option>
            </Select>

            {formData.linkType === 'custom' ? (
              <TextInput
                label="URL"
                name="url"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                placeholder="# или /path"
              />
            ) : (
              <Select
                label="Выберите контент"
                name="linkedContent"
                value={formData.linkedContent}
                onChange={(value) => setFormData({ ...formData, linkedContent: value })}
                placeholder="Выберите..."
              >
                {/* This would be populated from API */}
              </Select>
            )}

            {formData.parent === null && (
              <Select
                label="Родительское меню (опционально)"
                name="parent"
                value={formData.parent}
                onChange={(value) => setFormData({ ...formData, parent: value === '' ? null : parseInt(value) })}
                placeholder="Нет (главное меню)"
              >
                <Option value="">Нет (главное меню)</Option>
                {getTopLevelItems().map((item, index) => {
                  const actualIndex = items.findIndex((i, idx) => 
                    idx === index || (i.parent === null && items.indexOf(i) === index)
                  );
                  return (
                    <Option key={actualIndex} value={actualIndex}>
                      {item.label}
                    </Option>
                  );
                })}
              </Select>
            )}

            <TextInput
              label="Порядок отображения"
              name="order"
              type="number"
              value={formData.order}
              onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
            />
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsModalOpen(false)} variant="tertiary">
            Отмена
          </Button>
          <Button onClick={handleSave} variant="default">
            Сохранить
          </Button>
        </ModalFooter>
      </Modal>
    </Box>
  );
};

export default MenuBuilder;




