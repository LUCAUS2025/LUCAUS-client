import React from 'react';

interface ItemPreviewContentProps {
  id: number;
}

export const ItemPreviewContent: React.FC<ItemPreviewContentProps> = ({ id }) => {
  return <div>아이템 ID: {id}</div>;
};
