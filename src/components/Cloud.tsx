import styled from 'styled-components';
import { theme } from '../theme/GlobalStyles';
import Anime from "react-anime";

export default function Clouds() {

  const color = '#5c5b8a';
  return (
    <Cloud>
      <SVG
        width="350"
        height="205"
        viewBox="0 0 350 205"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 15C0 6.71573 6.71573 0 15 0H335C343.284 0 350 6.71573 350 15C350 23.2843 343.284 30 335 30H263.5C255.492 30 249 36.492 249 44.5002V44.5002C249 52.5085 255.492 59.0005 263.5 59.0005H289C297.284 59.0005 304 65.7162 304 74.0005C304 82.2848 297.284 89.0005 289 89.0005H183C175.268 89.0005 169 95.2684 169 103V103C169 110.732 175.268 117 183 117H267C275.284 117 282 123.716 282 132C282 140.284 275.284 147 267 147H227C219.268 147 213 153.268 213 161V163C213 169.627 218.373 175 225 175V175C233.284 175 240 181.716 240 190C240 198.284 233.284 205 225 205H45C36.7157 205 30 198.284 30 190C30 181.716 36.7157 175 45 175H139C146.732 175 153 168.732 153 161V161C153 153.268 146.732 147 139 147H97C88.7157 147 82 140.284 82 132C82 123.716 88.7157 117 97 117H100C107.732 117 114 110.732 114 103V103C114 95.2684 107.732 89.0005 100 89.0005H48.9998C40.7155 89.0005 33.9998 82.2848 33.9998 74.0005C33.9998 65.7162 40.7155 59.0005 48.9998 59.0005H174.5C182.508 59.0005 189 52.5085 189 44.5002V44.5002C189 36.492 182.508 30 174.499 30H15C6.71574 30 0 23.2843 0 15ZM42 133C42 124.716 48.7157 118 57 118C65.2843 118 72 124.716 72 133C72 141.284 65.2843 148 57 148C48.7157 148 42 141.284 42 133ZM17 118C8.71573 118 2 124.716 2 133C2 141.284 8.71573 148 17 148C25.2843 148 32 141.284 32 133C32 124.716 25.2843 118 17 118ZM266 175C257.716 175 251 181.716 251 190C251 198.284 257.716 205 266 205C274.284 205 281 198.284 281 190C281 181.716 274.284 175 266 175ZM291 190C291 181.716 297.716 175 306 175C314.284 175 321 181.716 321 190C321 198.284 314.284 205 306 205C297.716 205 291 198.284 291 190Z"
          fill="#2B2745"
        />
      </SVG>

      <SVG
        width="383"
        height="206"
        viewBox="0 0 383 206"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 15C0 6.71573 6.71573 0 15 0H335C343.284 0 350 6.71573 350 15C350 23.2843 343.284 30 335 30H294C285.716 30 279 36.7157 279 45V45C279 53.2843 285.716 60 294 60H368C376.284 60 383 66.7157 383 75C383 83.2843 376.284 90 368 90H313C305.268 90 299 96.268 299 104V104C299 111.732 305.268 118 313 118H333C341.284 118 348 124.716 348 133C348 141.284 341.284 148 333 148H228C220.268 148 214 154.268 214 162V162C214 169.732 220.268 176 228 176H248C256.284 176 263 182.716 263 191C263 199.284 256.284 206 248 206H108C99.7157 206 93 199.284 93 191C93 182.716 99.7157 176 108 176H140C147.732 176 154 169.732 154 162V162C154 154.268 147.732 148 140 148H113C104.716 148 98 141.284 98 133C98 124.716 104.716 118 113 118H235C242.732 118 249 111.732 249 104V104C249 96.268 242.732 90 235 90H168C159.716 90 153 83.2843 153 75C153 66.7157 159.716 60 168 60H194C202.284 60 209 53.2843 209 45V45C209 36.7157 202.284 30 194 30H15C6.71574 30 0 23.2843 0 15ZM288 176C279.716 176 273 182.716 273 191C273 199.285 279.716 206 288 206C296.284 206 303 199.285 303 191C303 182.716 296.284 176 288 176ZM313 191C313 182.716 319.716 176 328 176C336.284 176 343 182.716 343 191C343 199.285 336.284 206 328 206C319.716 206 313 199.285 313 191ZM128 60C119.716 60 113 66.7157 113 75C113 83.2843 119.716 90 128 90C136.284 90 143 83.2843 143 75C143 66.7157 136.284 60 128 60ZM73 75C73 66.7157 79.7157 60 88 60C96.2843 60 103 66.7157 103 75C103 83.2843 96.2843 90 88 90C79.7157 90 73 83.2843 73 75Z"
          fill="#E6F1FF"
          fillOpacity=".8"
        />
      </SVG>
    </Cloud>
  );
}

const Cloud = styled.div`
  max-width: 400px;
  width: 100%;
  position: relative;
`;

const SVG = styled.svg`
  position: absolute;
  :last-child {
    top: 20px;
    left: 50px;
  }
`;