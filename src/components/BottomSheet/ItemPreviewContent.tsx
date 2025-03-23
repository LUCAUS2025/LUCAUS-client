import React from 'react';
import { CommonItem } from '../../data/boothFood';

interface ItemPreviewContentProps {
  item: CommonItem;
  onClose: () => void;
}

export const ItemPreviewContent: React.FC<ItemPreviewContentProps> = ({ item, onClose }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      {item.description && <p>{item.description}</p>}
      <p>키워드: {item.keywords.join(', ')}</p>
      <button onClick={onClose}>닫기</button>
    </div>
  );
};
