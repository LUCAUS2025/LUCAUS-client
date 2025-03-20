import React from 'react';
import { Thumbnail } from '../../../components/home/thumbnail';
import { LineUp } from '../../../components/stage/lineUp';

export const Stage = () => {
  return (
    <>
      <h2>청룡가요제</h2>
      <div>숨겨진 보컬 천재들의 뜨거운 강연을 만나보세요.</div>
      <Thumbnail />

      <h2>무대 기획전</h2>
      <div>축제 기획단에서 야심차게 준비했다!</div>

      <h2>본무대 라인업</h2>
      <div>이곳에서만 볼 수 있는 특별한 무대! 함께 즐겨요.</div>
      <LineUp />

      <h2>아티스트 라인업</h2>
      <div>올해 축제를 빛낼 아티스트를 지금 바로 확인해보세요.</div>
      <LineUp />
    </>
  );
};
