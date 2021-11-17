import styled from 'styled-components';

export default function Clouds() {

  const color = '#5c5b8a';
  return (
    <>
      <SVG>
        <svg
          width="317"
          height="122"
          viewBox="0 0 317 122"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8">
            <rect x="108" width="206" height="30" rx="15" fill={color} />
            <rect y="46" width="317" height="30" rx="15" fill={color} />
            <rect
              x="50"
              y="92"
              width="220"
              height="30"
              rx="15"
              fill={color}
            />
            <path
              d="M141 30C146.818 35.0105 147.788 38.5508 141 46H220C217.327 41.2835 212.183 38.2182 220 30H141Z"
              fill={color}
            />
            <path
              d="M197 76C200.314 81.0105 200.867 84.5508 197 92H242C240.477 87.2835 237.547 84.2182 242 76H197Z"
              fill={color}
            />
          </g>
        </svg>
      </SVG>

      <Cloud>

      </Cloud>
    </>
  );
}

const SVG = styled.div`
  /* width: 200px;
  height: 200px; */
`;

const Cloud = styled.div`

`;

const middleSpace = styled.div`
  width: 400px;
  height: 100px;
  background: salmon;
  background: radial-gradient(
      circle 20px at -20% 50%,
      transparent 60px,
      transparent 99px,
      salmon 100px
    ),
    radial-gradient(
      circle 20px at 100% 50%,
      transparent,
      transparent 99px,
      salmon 100px
    );
  background-size: 200px 100px, 200px 100px;
  background-position: 0 0, 100% 0;
  background-repeat: no-repeat;
  margin: 10px;
`;