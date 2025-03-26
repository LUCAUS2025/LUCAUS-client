import React from 'react';
import { StaticBottomSheet } from './StaticBottomSheet';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

interface PortalBottomSheetProps<T> {
  contentComponent: React.ComponentType<T>;
  componentProps: T;
  onClose: () => void;
}

export const PortalBottomSheet = <T extends object>({
  contentComponent,
  componentProps,
  onClose,
}: PortalBottomSheetProps<T>) => {
  const portalRoot = document.getElementById('portal-root');
  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={() => onClose} />
      <ModalWrapper>
        <ContentWrapper>
          <StaticBottomSheet
            size={'middle'}
            ContentComponent={contentComponent}
            componentProps={componentProps}
            isBottomSheetHeader={true}
            overlapFooter={true}
          />
        </ContentWrapper>
      </ModalWrapper>
    </>,
    portalRoot,
  );
};

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

const ModalWrapper = styled.div`
  //position: fixed;
  //bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #fafafa;
  padding: 20px;
  max-width: 600px;
  //max-height: 90vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  overflow-y: auto;
  max-height: 70vh;
  -webkit-overflow-scrolling: touch;
`;
