import styled from 'styled-components';

export default function Cloud() {

  return (
    <SVG>
      <svg
        width="317"
        height="122"
        viewBox="0 0 317 122"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.8">
          <rect x="108" width="206" height="30" rx="15" fill="#E6F1FF" />
          <rect y="46" width="317" height="30" rx="15" fill="#E6F1FF" />
          <rect x="50" y="92" width="220" height="30" rx="15" fill="#E6F1FF" />
          <path
            d="M141 30C146.818 35.0105 147.788 38.5508 141 46H220C217.327 41.2835 212.183 38.2182 220 30H141Z"
            fill="#E6F1FF"
          />
          <path
            d="M197 76C200.314 81.0105 200.867 84.5508 197 92H242C240.477 87.2835 237.547 84.2182 242 76H197Z"
            fill="#E6F1FF"
          />
        </g>
      </svg>
    </SVG>
  );
}

const SVG = styled.div`
  /* width: 200px;
  height: 200px; */
`;