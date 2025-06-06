import styled from 'styled-components';

interface ThumbnailProps {
  artistImages: string[];
  instagram?: string[];
}

export const Thumbnail = ({ artistImages, instagram }: ThumbnailProps) => {
  return (
    <Card>
      {artistImages.map((src, idx) => (
        <CardImage
          key={idx}
          src={src}
          alt={`썸네일 이미지 ${idx + 1}`}
          style={idx === 0 ? { marginLeft: 16 } : {}}
          onClick={() => {
            const link = instagram?.[idx];
            if (link) {
              window.open(link, '_blank');
            }
          }}
        />
      ))}
      <Margin />
    </Card>
  );
};

export const Card = styled.div`
  display: flex;
  gap: 1rem;
  overflow-y: auto;
  padding: 0 0 1rem 0;
  margin: 0 -16px 0 -16px;
`;

export const CardImage = styled.img`
  min-width: 76%;
  max-width: 76%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

export const Margin = styled.div`
  margin-left: 1rem;
`;
