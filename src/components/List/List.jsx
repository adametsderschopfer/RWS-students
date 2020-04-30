import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";

const List = () => {
  // eslint-disable-next-line no-unused-vars

  const [lessons11b] = useState([
    {
      name: "Алгебра",
      link: "algebra",
      img: (
        <svg
          width="172"
          height="172"
          viewBox="0 0 172 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M96.75 118.25H32.25C29.2803 118.25 26.875 115.845 26.875 112.875V26.875C26.875 23.9053 29.2803 21.5 32.25 21.5H96.75C99.7197 21.5 102.125 23.9053 102.125 26.875V112.875C102.125 115.845 99.7197 118.25 96.75 118.25Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M91.375 118.25H26.875C23.9053 118.25 21.5 115.845 21.5 112.875V26.875C21.5 23.9053 23.9053 21.5 26.875 21.5H91.375C94.3447 21.5 96.75 23.9053 96.75 26.875V112.875C96.75 115.845 94.3447 118.25 91.375 118.25Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M86 32.25H32.25V107.5H86V32.25Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M77.9375 107.5H120.938V86H77.9375C76.4527 86 75.25 87.2027 75.25 88.6875V104.812C75.25 106.297 76.4527 107.5 77.9375 107.5Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M56.4375 129H99.4375V107.5H56.4375C54.9527 107.5 53.75 108.703 53.75 110.188V126.312C53.75 127.797 54.9527 129 56.4375 129Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M67.1875 150.5H110.188V129H67.1875C65.7027 129 64.5 130.203 64.5 131.688V147.812C64.5 149.297 65.7027 150.5 67.1875 150.5Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M75.25 147.812V131.688C75.25 130.203 76.4527 129 77.9375 129H72.5625C71.0777 129 69.875 130.203 69.875 131.688V147.812C69.875 149.297 71.0777 150.5 72.5625 150.5H77.9375C76.4527 150.5 75.25 149.297 75.25 147.812Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M147.812 88.6875V104.812H150.5V107.5H120.938C119.453 107.5 118.25 106.297 118.25 104.812V88.6875C118.25 87.2027 119.453 86 120.938 86H150.5V88.6875H147.812Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M137.062 110.188V126.312H139.75V129H99.4375C97.9527 129 96.75 127.797 96.75 126.312V110.188C96.75 108.703 97.9527 107.5 99.4375 107.5H139.75V110.188H137.062Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M147.812 131.688V147.812H150.5V150.5H110.188C108.703 150.5 107.5 149.297 107.5 147.812V131.688C107.5 130.203 108.703 129 110.188 129H150.5V131.688H147.812Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M102.125 43H91.375C88.4053 43 86 45.4053 86 48.375V64.5H102.125V43Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M102.125 64.5H86V80.625C86 83.5947 88.4053 86 91.375 86H102.125V64.5Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M118.25 64.5V43H102.125C99.1553 43 96.75 45.4053 96.75 48.375V64.5H118.25Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M118.25 64.5H139.75V48.375C139.75 45.4053 137.345 43 134.375 43H118.25V64.5Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M118.25 64.5V86H102.125C99.1553 86 96.75 83.5947 96.75 80.625V64.5H118.25Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M118.25 64.5H139.75V80.625C139.75 83.5947 137.345 86 134.375 86H118.25V64.5Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M147.812 88.6875H120.938V104.812H147.812V88.6875Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M137.062 110.188H99.4375V126.312H137.062V110.188Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M147.812 131.688H110.188V147.812H147.812V131.688Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M59.125 37.625V102.125"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.625 80.625H80.625"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M80.625 37.625C80.625 61.3758 70.997 80.625 59.125 80.625C47.253 80.625 37.625 61.3758 37.625 37.625"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M56.4375 40.3125L59.125 37.625L61.8125 40.3125"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M77.9375 77.9375L80.625 80.625L77.9375 83.3125"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M59.125 83.3125C60.6093 83.3125 61.8125 82.1093 61.8125 80.625C61.8125 79.1407 60.6093 77.9375 59.125 77.9375C57.6407 77.9375 56.4375 79.1407 56.4375 80.625C56.4375 82.1093 57.6407 83.3125 59.125 83.3125Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M48.375 92.7188C49.1171 92.7188 49.7188 92.1171 49.7188 91.375C49.7188 90.6329 49.1171 90.0312 48.375 90.0312C47.6329 90.0312 47.0312 90.6329 47.0312 91.375C47.0312 92.1171 47.6329 92.7188 48.375 92.7188Z"
            fill="#D9E6F7"
          />
          <path
            d="M41.1994 92.8733L40.682 94.7344H38.9822L41.1994 87.4849H43.3494L45.6001 94.7344H43.8331L43.2755 92.8733H41.1994ZM43.0403 91.6505L42.5901 90.1119C42.4625 89.6819 42.3348 89.1444 42.2273 88.7144H42.2072C42.0997 89.1444 41.9922 89.6953 41.8712 90.1119L41.4412 91.6505H43.0403Z"
            fill="#D9E6F7"
          />
          <path
            d="M59.125 28.2188C59.8671 28.2188 60.4688 27.6171 60.4688 26.875C60.4688 26.1329 59.8671 25.5312 59.125 25.5312C58.3829 25.5312 57.7812 26.1329 57.7812 26.875C57.7812 27.6171 58.3829 28.2188 59.125 28.2188Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M75.25 114.219C77.4739 114.219 79.2812 116.026 79.2812 118.25C79.2812 120.474 77.4739 122.281 75.25 122.281C73.0261 122.281 71.2188 120.474 71.2188 118.25C71.2188 116.026 73.0261 114.219 75.25 114.219ZM75.25 112.875C72.2803 112.875 69.875 115.28 69.875 118.25C69.875 121.22 72.2803 123.625 75.25 123.625C78.2197 123.625 80.625 121.22 80.625 118.25C80.625 115.28 78.2197 112.875 75.25 112.875Z"
            fill="#D9E6F7"
          />
          <path
            d="M86 116.906C86.7391 116.906 87.3438 117.511 87.3438 118.25C87.3438 118.989 86.7391 119.594 86 119.594C85.2609 119.594 84.6562 118.989 84.6562 118.25C84.6562 117.511 85.2609 116.906 86 116.906ZM86 115.562C84.5152 115.562 83.3125 116.765 83.3125 118.25C83.3125 119.735 84.5152 120.938 86 120.938C87.4848 120.938 88.6875 119.735 88.6875 118.25C88.6875 116.765 87.4848 115.562 86 115.562Z"
            fill="#D9E6F7"
          />
          <path
            d="M64.5 116.906C65.2391 116.906 65.8438 117.511 65.8438 118.25C65.8438 118.989 65.2391 119.594 64.5 119.594C63.7609 119.594 63.1562 118.989 63.1562 118.25C63.1562 117.511 63.7609 116.906 64.5 116.906ZM64.5 115.562C63.0152 115.562 61.8125 116.765 61.8125 118.25C61.8125 119.735 63.0152 120.938 64.5 120.938C65.9848 120.938 67.1875 119.735 67.1875 118.25C67.1875 116.765 65.9848 115.562 64.5 115.562Z"
            fill="#D9E6F7"
          />
          <path
            d="M96.75 96.75L91.375 102.125H80.625V91.375H96.75V96.75Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M91.375 102.125V96.75H96.75"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M107.5 48.375V59.125"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M102.125 53.75H112.875"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M129 75.25L130.901 77.1514"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M125.197 79.0528L132.803 71.4472"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M103.697 71.4472L111.303 79.0528"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M103.697 79.0528L111.303 71.4472"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M123.625 53.75H134.375"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M120.938 91.375H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M120.938 94.0625H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M120.938 96.75H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M120.938 99.4375H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M120.938 102.125H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M110.745 134.153H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M110.745 137.062H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M110.745 139.75H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M110.745 142.438H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M110.745 145.125H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M99.9951 123.625H137.062"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M99.9951 120.938H137.062"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M99.9951 118.25H137.062"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M99.9951 115.562H137.062"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M99.9951 112.875H137.062"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M131.688 96.75H126.312V115.562H131.688V96.75Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M102.125 147.812V131.688C102.125 130.203 103.328 129 104.812 129H99.4375C97.9527 129 96.75 130.203 96.75 131.688V147.812C96.75 149.297 97.9527 150.5 99.4375 150.5H104.812C103.328 150.5 102.125 149.297 102.125 147.812Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      name: "Геометрия",
      link: "geometry",
      img: (
        <svg
          width="226"
          height="226"
          viewBox="0 0 226 226"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M130.215 193.336H141.691L113 55.6172H101.523L130.215 193.336Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M72.832 193.336H61.3555L90.0469 55.6172H101.523L72.832 193.336Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M124.477 193.336H135.953L107.262 55.6172H95.7852L124.477 193.336Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M67.0938 193.336H55.6172L84.3086 55.6172H95.7852L67.0938 193.336Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M147.43 147.43H55.6172C52.4468 147.43 49.8789 144.862 49.8789 141.691V84.3086C49.8789 81.1382 52.4468 78.5703 55.6172 78.5703H147.43C150.6 78.5703 153.168 81.1382 153.168 84.3086V141.691C153.168 144.862 150.6 147.43 147.43 147.43Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M141.691 147.43H49.8789C46.7085 147.43 44.1406 144.862 44.1406 141.691V84.3086C44.1406 81.1382 46.7085 78.5703 49.8789 78.5703H141.691C144.862 78.5703 147.43 81.1382 147.43 84.3086V141.691C147.43 144.862 144.862 147.43 141.691 147.43Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M141.691 84.3086H49.8789V141.691H141.691V84.3086Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M61.3555 95.7852V130.215L130.215 95.7852H61.3555Z"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M173.252 176.121H90.0469V193.336H173.252C178.008 193.336 181.859 189.484 181.859 184.729C181.859 179.973 178.008 176.121 173.252 176.121Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M113 158.906H164.645L181.859 167.514L164.645 176.121H113V158.906Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M75.7012 187.598H58.4863C56.9011 187.598 55.6172 188.882 55.6172 190.467C55.6172 192.052 56.9011 193.336 58.4863 193.336H75.7012C77.2864 193.336 78.5703 192.052 78.5703 190.467C78.5703 188.882 77.2864 187.598 75.7012 187.598Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M69.9629 187.598H52.748C51.1628 187.598 49.8789 188.882 49.8789 190.467C49.8789 192.052 51.1628 193.336 52.748 193.336H69.9629C71.5481 193.336 72.832 192.052 72.832 190.467C72.832 188.882 71.5481 187.598 69.9629 187.598Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M157.637 151.303L139.124 114.284L144.259 111.716L162.772 148.742L164.645 158.906L157.637 151.303Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M125.746 151.303L144.259 114.284L139.124 111.716L120.61 148.742L118.738 158.906L125.746 151.303Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M146.827 115.568L128.314 152.573L118.05 147.451L136.556 110.432L146.827 115.568Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M165.333 147.458L155.069 152.587L136.556 115.568L146.827 110.432L165.333 147.458Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M141.691 124.477C148.03 124.477 153.168 119.338 153.168 113C153.168 106.662 148.03 101.523 141.691 101.523C135.353 101.523 130.215 106.662 130.215 113C130.215 119.338 135.353 124.477 141.691 124.477Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M144.561 87.1777H138.822V98.6543H144.561V87.1777Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M141.691 118.738C144.861 118.738 147.43 116.169 147.43 113C147.43 109.831 144.861 107.262 141.691 107.262C138.522 107.262 135.953 109.831 135.953 113C135.953 116.169 138.522 118.738 141.691 118.738Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M165.541 122.877C161.661 132.23 152.429 138.822 141.692 138.822C130.954 138.822 121.722 132.23 117.842 122.877L123.135 120.682C126.155 127.955 133.335 133.084 141.692 133.084C150.048 133.084 157.228 127.955 160.248 120.682L165.541 122.877Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M101.523 158.906H95.7852C92.6148 158.906 90.0469 161.474 90.0469 164.645V170.383C90.0469 173.553 92.6148 176.121 95.7852 176.121H101.523V158.906Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M113 158.906H101.523V176.121H113V158.906Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M181.859 167.514L164.645 158.906V176.121L181.859 167.514Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M173.252 171.817L181.859 167.514L173.252 163.21V171.817Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M173.252 187.598C174.837 187.598 176.121 186.313 176.121 184.729C176.121 183.144 174.837 181.859 173.252 181.859C171.667 181.859 170.383 183.144 170.383 184.729C170.383 186.313 171.667 187.598 173.252 187.598Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M104.393 64.2246H87.1777C85.5925 64.2246 84.3086 65.5085 84.3086 67.0938C84.3086 68.679 85.5925 69.9629 87.1777 69.9629H104.393C105.978 69.9629 107.262 68.679 107.262 67.0938C107.262 65.5085 105.978 64.2246 104.393 64.2246Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M95.7852 190.467V193.336"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M101.523 190.467V193.336"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M107.262 190.467V193.336"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M113 190.467V193.336"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M118.738 190.467V193.336"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M124.477 190.467V193.336"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M130.215 190.467V193.336"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M135.953 190.467V193.336"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M141.691 190.467V193.336"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M147.43 190.467V193.336"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M153.168 190.467V193.336"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M158.906 190.467V193.336"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M164.645 190.467V193.336"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M104.393 67.811C104.789 67.811 105.11 67.4899 105.11 67.0938C105.11 66.6976 104.789 66.3765 104.393 66.3765C103.996 66.3765 103.675 66.6976 103.675 67.0938C103.675 67.4899 103.996 67.811 104.393 67.811Z"
            fill="black"
          />
          <path
            d="M87.1777 67.811C87.5739 67.811 87.895 67.4899 87.895 67.0938C87.895 66.6976 87.5739 66.3765 87.1777 66.3765C86.7816 66.3765 86.4604 66.6976 86.4604 67.0938C86.4604 67.4899 86.7816 67.811 87.1777 67.811Z"
            fill="black"
          />
          <path
            d="M87.3123 111.964C88.9818 104.894 84.6034 97.8084 77.5328 96.1389C70.4622 94.4693 63.3769 98.8477 61.7073 105.918C60.0378 112.989 64.4162 120.074 71.4868 121.744C78.5574 123.413 85.6427 119.035 87.3123 111.964Z"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M61.3555 97.2197C62.1478 97.2197 62.79 96.5774 62.79 95.7852C62.79 94.9929 62.1478 94.3506 61.3555 94.3506C60.5632 94.3506 59.9209 94.9929 59.9209 95.7852C59.9209 96.5774 60.5632 97.2197 61.3555 97.2197Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M61.3555 131.649C62.1478 131.649 62.79 131.007 62.79 130.215C62.79 129.423 62.1478 128.78 61.3555 128.78C60.5632 128.78 59.9209 129.423 59.9209 130.215C59.9209 131.007 60.5632 131.649 61.3555 131.649Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M130.215 97.2197C131.007 97.2197 131.649 96.5774 131.649 95.7852C131.649 94.9929 131.007 94.3506 130.215 94.3506C129.423 94.3506 128.78 94.9929 128.78 95.7852C128.78 96.5774 129.423 97.2197 130.215 97.2197Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M63.5503 108.94H73.413"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M74.5105 106.745V96.8826"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M141.691 110.131V115.869"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M138.822 113H144.561"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M87.1777 130.215H110.131"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M87.1777 127.346H110.131"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M87.1777 124.477H110.131"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M75.7012 135.953H64.2246C62.6394 135.953 61.3555 137.237 61.3555 138.822C61.3555 140.407 62.6394 141.691 64.2246 141.691H75.7012C77.2864 141.691 78.5703 140.407 78.5703 138.822C78.5703 137.237 77.2864 135.953 75.7012 135.953Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M85.7432 138.822H82.874C82.085 138.822 81.4395 139.468 81.4395 140.257C81.4395 141.046 82.085 141.691 82.874 141.691H85.7432C86.5322 141.691 87.1777 141.046 87.1777 140.257C87.1777 139.468 86.5322 138.822 85.7432 138.822Z"
            fill="white"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M104.393 158.906V176.121"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M107.262 158.906V176.121"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M110.131 158.906V176.121"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M113 164.645H164.645"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M113 170.383H164.645"
            stroke="#D9E6F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      name: "Қазақ тілі",
      link: "kaz",
      img: (
        <svg
          width="185"
          height="190"
          viewBox="0 0 185 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7895 73.6394C16.7895 67.4401 21.7779 62.413 27.9341 62.413C34.0903 62.413 39.0787 67.4401 39.0787 73.6394H16.7895ZM56.025 73.6394H52.7752H56.025ZM27.4043 76.3781H11.1743H27.4043ZM16.7895 73.6394H0.55957H16.7895ZM52.7752 73.6394C52.7752 69.829 49.7083 66.7443 45.9288 66.7443C42.1493 66.7443 39.0824 69.829 39.0824 73.6394"
            fill="white"
          />
          <path
            d="M52.7752 73.6394C52.7752 69.829 49.7083 66.7443 45.9288 66.7443C42.1493 66.7443 39.0824 69.829 39.0824 73.6394M16.7895 73.6394C16.7895 67.4401 21.7779 62.413 27.9341 62.413C34.0903 62.413 39.0787 67.4401 39.0787 73.6394H16.7895ZM56.025 73.6394H52.7752H56.025ZM27.4043 76.3781H11.1743H27.4043ZM16.7895 73.6394H0.55957H16.7895Z"
            stroke="#D9E6F7"
            strokeWidth="3"
            strokeMiterlimit="2.6131"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M151.763 100.583C151.763 96.1145 155.36 92.4902 159.8 92.4902C164.236 92.4902 167.833 96.1145 167.833 100.583H151.763ZM141.894 100.583H132.089H141.894ZM175.612 102.556H160.18H175.612ZM172.071 100.583H167.833H172.071ZM151.763 100.583C151.763 97.8373 149.554 95.6121 146.827 95.6121C144.103 95.6121 141.891 97.8373 141.891 100.583"
            fill="white"
          />
          <path
            d="M151.763 100.583C151.763 97.8373 149.554 95.6121 146.827 95.6121C144.103 95.6121 141.891 97.8373 141.891 100.583M151.763 100.583C151.763 96.1145 155.36 92.4902 159.8 92.4902C164.236 92.4902 167.833 96.1145 167.833 100.583H151.763ZM141.894 100.583H132.089H141.894ZM175.612 102.556H160.18H175.612ZM172.071 100.583H167.833H172.071Z"
            stroke="#D9E6F7"
            strokeWidth="3"
            strokeMiterlimit="2.6131"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M152.349 28.8934C152.174 28.8934 152.006 28.8115 151.901 28.6701C150.748 27.1259 148.196 26.7278 146.092 27.7622C145.816 27.8999 145.48 27.7845 145.342 27.5092C145.204 27.2338 145.32 26.8989 145.596 26.7612C147.842 25.6561 150.536 25.9314 152.159 27.3231C153.17 25.3249 155.207 24.4505 158.371 24.6477C158.68 24.6663 158.912 24.9342 158.893 25.2393C158.874 25.5482 158.621 25.7789 158.3 25.7603C154.326 25.5073 153.3 27.2078 152.882 28.5064C152.819 28.7036 152.647 28.8525 152.442 28.886C152.409 28.8934 152.379 28.8934 152.349 28.8934Z"
            fill="#D9E6F7"
          />
          <path
            d="M172.534 40.7598C172.358 40.7598 172.19 40.6779 172.086 40.5365C171.179 39.3235 169.168 39.0146 167.504 39.8295C167.228 39.9672 166.892 39.8519 166.754 39.5765C166.616 39.3011 166.732 38.9662 167.008 38.8286C168.821 37.9355 170.989 38.1327 172.347 39.2156C173.209 37.6527 174.918 36.9457 177.421 37.102C177.731 37.1206 177.966 37.3885 177.944 37.6937C177.925 38.0025 177.66 38.2332 177.35 38.2146C174.194 38.0137 173.392 39.3495 173.063 40.3691C173 40.5663 172.828 40.7151 172.623 40.7486C172.593 40.7561 172.563 40.7598 172.534 40.7598Z"
            fill="#D9E6F7"
          />
          <path
            d="M129.03 22.5751C128.854 22.5751 128.686 22.4932 128.582 22.3518C127.429 20.8076 124.877 20.4094 122.773 21.4439C122.497 21.5816 122.161 21.4662 122.023 21.1908C121.885 20.9155 122 20.5806 122.276 20.4429C124.523 19.3378 127.216 19.6131 128.839 21.0048C129.85 19.0066 131.884 18.1321 135.051 18.3294C135.361 18.348 135.592 18.6159 135.574 18.921C135.555 19.2299 135.301 19.4606 134.981 19.442C131.007 19.1889 129.981 20.8894 129.563 22.1881C129.5 22.3853 129.328 22.5341 129.123 22.5676C129.089 22.5751 129.059 22.5751 129.03 22.5751Z"
            fill="#D9E6F7"
          />
          <path
            d="M180.622 65.7354C180.492 65.7354 180.369 65.6759 180.29 65.568C179.749 64.8424 178.541 64.66 177.533 65.1512C177.328 65.2517 177.078 65.1661 176.977 64.9614C176.877 64.7568 176.962 64.5075 177.168 64.407C178.309 63.8488 179.63 63.953 180.492 64.6079C181.052 63.6665 182.115 63.2386 183.663 63.3316C183.891 63.3465 184.066 63.54 184.051 63.7707C184.036 63.9977 183.85 64.1726 183.611 64.1577C181.727 64.0423 181.234 64.7865 181.018 65.4489C180.969 65.5977 180.843 65.7056 180.69 65.728C180.664 65.7317 180.641 65.7354 180.622 65.7354Z"
            fill="#D9E6F7"
          />
          <path
            d="M74.3554 189.955C74.3218 189.955 74.2882 189.952 74.2509 189.944C73.9673 189.892 73.7733 189.635 73.7957 189.349L80.9145 103.873L76.6798 84.4043C76.6425 84.2406 76.6835 84.0657 76.7917 83.9355C76.8962 83.8053 77.0566 83.7271 77.2282 83.7271H79.3325C79.6012 83.7271 79.8325 83.9169 79.881 84.1811L83.5747 103.731C83.5822 103.772 83.5859 103.817 83.5822 103.858L81.1757 157.925L79.9743 172.306C79.9705 172.344 79.9631 172.381 79.9519 172.418L74.8852 189.546C74.818 189.795 74.5979 189.955 74.3554 189.955ZM77.9222 84.8471L82.0263 103.72C82.0375 103.776 82.0413 103.828 82.0375 103.884L75.3627 184.005L78.8662 172.161L80.0638 157.858L82.4666 103.877L78.8736 84.8434H77.9222V84.8471Z"
            fill="#D9E6F7"
          />
          <path
            d="M78.0043 189.955C77.9707 189.955 77.9334 189.952 77.8998 189.944C77.6162 189.892 77.4222 189.635 77.4446 189.349L84.5634 103.873L80.3735 84.4043C80.3399 84.2406 80.3809 84.0657 80.4854 83.9355C80.5899 83.8053 80.7503 83.7271 80.9219 83.7271H85.1716C85.291 83.7271 85.4029 83.7643 85.4924 83.8276C85.5857 83.7606 85.6976 83.7271 85.8133 83.7271H88.6041C88.8951 83.7271 89.1376 83.9504 89.1638 84.2406L90.7084 103.791C90.7084 103.813 90.7121 103.836 90.7084 103.858L87.746 170.081C87.746 170.118 87.7385 170.159 87.7273 170.197L82.7016 189.531C82.6307 189.81 82.3547 189.989 82.0674 189.94C81.7801 189.892 81.5786 189.635 81.601 189.349L82.627 175.812L78.5341 189.55C78.4669 189.795 78.2468 189.955 78.0043 189.955ZM81.6159 84.8471L85.679 103.724C85.6902 103.776 85.6939 103.832 85.6902 103.888L79.0117 184.065L83.0524 170.513C83.1344 170.241 83.4105 170.074 83.6904 170.122C83.9702 170.174 84.1679 170.427 84.1455 170.714L83.1979 183.217L86.6379 169.981L89.5966 103.85L88.093 84.8471H86.4625L89.119 103.761C89.1265 103.802 89.1265 103.839 89.1227 103.88L84.4851 165.821C84.4627 166.126 84.194 166.356 83.8918 166.338C83.5859 166.319 83.3508 166.063 83.3658 165.757L86.1118 103.85L84.653 84.8471H81.6159ZM86.317 91.8576L87.2348 103.798C87.2348 103.821 87.2386 103.843 87.2348 103.865L86.1193 129.012L88.0034 103.858L86.317 91.8576Z"
            fill="#D9E6F7"
          />
          <path
            d="M105.957 189.955C105.715 189.955 105.491 189.795 105.42 189.557L100.309 172.429C100.297 172.392 100.29 172.355 100.286 172.318L99.0847 157.958L96.6782 103.869C96.6745 103.824 96.6782 103.784 96.6857 103.743L100.379 84.1922C100.428 83.9281 100.659 83.7383 100.928 83.7383H103.032C103.2 83.7383 103.36 83.8164 103.469 83.9467C103.573 84.0769 103.614 84.2518 103.581 84.4155L99.3496 103.884L106.513 189.356C106.536 189.643 106.342 189.9 106.058 189.952C106.024 189.952 105.991 189.955 105.957 189.955ZM101.398 172.165L104.946 184.057L98.2266 103.888C98.2229 103.832 98.2266 103.776 98.2378 103.724L102.342 84.8509H101.398L97.805 103.884L100.208 157.887L101.398 172.165Z"
            fill="#D9E6F7"
          />
          <path
            d="M102.264 189.955C102.021 189.955 101.797 189.795 101.726 189.557L96.1449 170.829C96.1337 170.788 96.1262 170.751 96.1225 170.71L95.7792 165.821L93.0332 103.865C93.0332 103.843 93.0332 103.821 93.0332 103.798L94.5368 84.248C94.5592 83.9578 94.8017 83.7308 95.0965 83.7308H99.3909C99.5588 83.7308 99.7192 83.8089 99.8274 83.9392C99.9319 84.0694 99.9729 84.2443 99.9393 84.408L95.7046 103.877L102.827 189.353C102.85 189.639 102.656 189.896 102.372 189.948C102.331 189.952 102.297 189.955 102.264 189.955ZM97.2343 170.569L101.256 184.065L94.5741 103.888C94.5704 103.832 94.5741 103.776 94.5853 103.724L98.6894 84.8508H95.6076L94.1488 103.854L96.8948 165.761L97.2343 170.569Z"
            fill="#D9E6F7"
          />
          <path
            d="M98.0963 189.955C97.8463 189.955 97.6187 189.788 97.5553 189.539L92.5333 170.204C92.5221 170.167 92.5184 170.126 92.5147 170.089L89.5933 103.865C89.5933 103.843 89.5933 103.821 89.5933 103.798L91.0969 84.248C91.1193 83.9578 91.3618 83.7308 91.6565 83.7308H94.4473C94.6078 83.7308 94.7645 83.8015 94.8689 83.9243C94.9771 84.0471 95.0219 84.2071 94.9995 84.3671L92.2609 103.858L98.6559 189.356C98.6783 189.643 98.4731 189.9 98.1896 189.948C98.1597 189.952 98.1299 189.955 98.0963 189.955ZM93.6302 169.981L97.0777 183.243L91.1416 103.884C91.1379 103.843 91.1416 103.806 91.1454 103.765L93.8056 84.8508H92.1751L90.7126 103.854L93.6302 169.981Z"
            fill="#D9E6F7"
          />
          <path
            d="M103.081 84.8472H77.1876C76.8779 84.8472 76.6279 84.5978 76.6279 84.289V76.6348C76.6279 76.326 76.8779 76.0767 77.1876 76.0767H103.081C103.391 76.0767 103.641 76.326 103.641 76.6348V84.289C103.641 84.5978 103.387 84.8472 103.081 84.8472ZM77.7472 83.7308H102.521V77.193H77.7472V83.7308Z"
            fill="#D9E6F7"
          />
          <path
            d="M79.1275 77.193C79.1238 77.193 79.1238 77.193 79.1201 77.193H77.1874C76.9747 77.193 76.777 77.0702 76.6837 76.8804L57.704 37.9955C57.5772 37.7351 57.6704 37.4225 57.9167 37.2736C58.1629 37.1248 58.4838 37.1881 58.6554 37.4188L74.1989 58.3533C74.2362 58.4054 74.266 58.465 74.2847 58.5245L79.6275 76.3929C79.6648 76.4674 79.6835 76.5492 79.6835 76.6348C79.6872 76.9436 79.4372 77.193 79.1275 77.193ZM77.5344 76.0766H78.3664L73.24 58.9375L61.3567 42.9333L77.5344 76.0766Z"
            fill="#D9E6F7"
          />
          <path
            d="M84.321 77.193C84.3173 77.193 84.3173 77.193 84.3136 77.193H82.5115C82.2988 77.193 82.1011 77.0702 82.0078 76.8804L62.9423 37.9955C62.8154 37.7351 62.9087 37.4225 63.155 37.2736C63.4012 37.1248 63.7221 37.1881 63.8937 37.4188L79.3924 58.3533C79.4297 58.4054 79.4595 58.465 79.4782 58.5245L84.821 76.3929C84.8583 76.4674 84.877 76.5492 84.877 76.6348C84.8807 76.9436 84.6307 77.193 84.321 77.193ZM82.8622 76.0766H83.5636L78.4372 58.9375L66.6547 43.0227L82.8622 76.0766Z"
            fill="#D9E6F7"
          />
          <path
            d="M89.5183 77.193C89.5146 77.193 89.5146 77.193 89.5109 77.193H87.7088C87.4961 77.193 87.2984 77.0702 87.2051 76.8804L68.1396 37.9955C68.0127 37.7351 68.106 37.4225 68.3522 37.2736C68.5985 37.1248 68.9193 37.1881 69.091 37.4188L84.5934 58.3533C84.6307 58.4054 84.6605 58.465 84.6792 58.5245L90.022 76.3929C90.0593 76.4674 90.078 76.5492 90.078 76.6348C90.078 76.9436 89.828 77.193 89.5183 77.193ZM88.0558 76.0766H88.7572L83.6345 58.9375L71.8482 43.0189L88.0558 76.0766Z"
            fill="#D9E6F7"
          />
          <path
            d="M90.97 77.1929H89.5112C89.2612 77.1929 89.0448 77.0292 88.974 76.7911L83.6498 58.7961C83.6311 58.7329 83.6237 58.6696 83.6274 58.6026L84.9146 37.6234C84.9333 37.3481 85.1497 37.1248 85.4258 37.1025C85.7018 37.0801 85.9556 37.2625 86.019 37.5304L90.9589 58.5505C90.9663 58.5877 90.9738 58.625 90.9738 58.6622L91.5334 76.6125C91.5372 76.765 91.4812 76.9101 91.3767 77.018C91.2685 77.1297 91.123 77.1929 90.97 77.1929ZM89.9291 76.0766H90.3955L89.8582 58.7589L85.8026 41.497L84.7542 58.5803L89.9291 76.0766Z"
            fill="#D9E6F7"
          />
          <path
            d="M102.95 77.193H101.189C101.01 77.193 100.846 77.1074 100.738 76.966C100.633 76.8246 100.599 76.6385 100.652 76.4711L106.491 57.5682C106.509 57.505 106.539 57.4491 106.577 57.397L121.605 37.4151C121.777 37.1844 122.101 37.1248 122.344 37.2737C122.59 37.4225 122.68 37.7351 122.553 37.9955L103.443 76.8804C103.357 77.0702 103.163 77.193 102.95 77.193ZM101.946 76.0767H102.599L118.941 42.8254L107.535 57.9924L101.946 76.0767Z"
            fill="#D9E6F7"
          />
          <path
            d="M97.7564 77.1929H95.9543C95.7789 77.1929 95.611 77.1111 95.5066 76.9697C95.4021 76.8283 95.3685 76.646 95.4208 76.4748L100.79 58.5245C100.808 58.4612 100.838 58.4054 100.876 58.3533L116.378 37.4188C116.55 37.1881 116.87 37.1211 117.12 37.2736C117.367 37.4225 117.46 37.7351 117.333 37.9955L98.2675 76.8804C98.1631 77.0702 97.9691 77.1929 97.7564 77.1929ZM96.7005 76.0766H97.4019L113.61 43.0189L101.823 58.9375L96.7005 76.0766Z"
            fill="#D9E6F7"
          />
          <path
            d="M92.5591 77.193H90.757C90.5817 77.193 90.4138 77.1111 90.3093 76.9697C90.2048 76.8283 90.1713 76.646 90.2235 76.4748L95.5887 58.5245C95.6074 58.4612 95.6372 58.4054 95.6745 58.3533L111.218 37.4188C111.39 37.1881 111.71 37.1248 111.957 37.2736C112.203 37.4225 112.296 37.7351 112.169 37.9955L93.0591 76.8804C92.9658 77.0702 92.7718 77.193 92.5591 77.193ZM91.507 76.0766H92.2084L108.461 43.0041L96.6297 58.9375L91.507 76.0766Z"
            fill="#D9E6F7"
          />
          <path
            d="M90.7569 77.193H89.2981C89.1451 77.193 89.0034 77.1334 88.8952 77.0218C88.7907 76.9139 88.7347 76.7688 88.7385 76.6162L89.2981 58.6659C89.2981 58.6287 89.3056 58.5915 89.313 58.5543L94.2492 37.5341C94.3126 37.2662 94.5626 37.0839 94.8424 37.1062C95.1185 37.1285 95.3386 37.3518 95.3536 37.6272L96.6408 58.6064C96.6445 58.6696 96.637 58.7366 96.6184 58.7999L91.2942 76.7948C91.2233 77.0293 91.0032 77.193 90.7569 77.193ZM89.8727 76.0767H90.3353L95.514 58.5766L94.4656 41.4933L90.41 58.7552L89.8727 76.0767Z"
            fill="#D9E6F7"
          />
          <path
            d="M88.4366 28.8343C88.306 28.8343 88.1754 28.7897 88.0747 28.7041C87.9478 28.5962 87.877 28.4436 87.877 28.2762V27.4985C87.877 26.4082 88.7276 25.5561 89.8096 25.5561H90.4551C91.4961 25.5561 92.343 26.4268 92.343 27.4985V28.2762C92.343 28.4399 92.2721 28.5925 92.1453 28.7004C92.0221 28.8083 91.8542 28.8529 91.6938 28.8269C91.164 28.745 90.6305 28.7041 90.0633 28.7041C89.5298 28.7041 89 28.745 88.5262 28.8269C88.5 28.8306 88.4665 28.8343 88.4366 28.8343ZM90.0671 27.5878C90.4663 27.5878 90.8469 27.6064 91.2237 27.6436V27.4985C91.2237 27.0371 90.8842 26.6724 90.4551 26.6724H89.8096C89.347 26.6724 88.9963 27.0259 88.9963 27.4985V27.6399C89.3432 27.6064 89.7014 27.5878 90.0671 27.5878Z"
            fill="#D9E6F7"
          />
          <path
            d="M91.0557 26.8026C90.9699 26.8026 90.8841 26.784 90.802 26.7431C90.7162 26.6984 90.5856 26.6724 90.455 26.6724H89.8095C89.6752 26.6724 89.5484 26.6984 89.4626 26.7431C89.2835 26.8324 89.0671 26.8212 88.8992 26.7096C88.7313 26.598 88.638 26.4045 88.6529 26.2035L89.5111 14.9586C89.5334 14.6683 89.776 14.4413 90.0707 14.4413H90.1565C90.4475 14.4413 90.6901 14.6646 90.7162 14.9548L91.6191 26.1998C91.634 26.4008 91.5407 26.5943 91.3728 26.7059C91.2758 26.7691 91.1676 26.8026 91.0557 26.8026ZM89.8245 25.5561H90.4401L90.1229 21.6229L89.8245 25.5561Z"
            fill="#D9E6F7"
          />
          <path
            d="M90.0667 55.0044C89.8392 55.0044 89.5817 55.0044 89.3131 54.9486C89.1004 54.9039 88.9288 54.7402 88.8803 54.5281L85.7985 41.4338L85.0896 52.835C85.0784 53.0322 84.9627 53.2071 84.7836 53.2964C84.6083 53.3857 84.3956 53.3746 84.2277 53.2704C80.4407 50.8517 78.0864 46.26 78.0864 41.2961C78.0864 33.7386 83.4628 27.5878 90.0667 27.5878C96.6744 27.5878 102.047 33.7349 102.047 41.2961C102.047 46.2041 99.745 50.755 96.0401 53.1811C95.8722 53.289 95.6595 53.3039 95.4842 53.2146C95.3051 53.1253 95.1894 52.9504 95.1745 52.7494L94.4656 41.43L91.3838 54.5281C91.3316 54.7476 91.1562 54.9151 90.9323 54.9523C90.6301 55.0044 90.3466 55.0044 90.0667 55.0044ZM89.8802 53.8844C90.0481 53.8881 90.2272 53.8881 90.3913 53.8806L94.2492 37.4895C94.3127 37.2215 94.5589 37.0355 94.8425 37.0615C95.1185 37.0839 95.3387 37.3071 95.3536 37.5825L96.2341 51.6666C99.1555 49.341 100.931 45.4599 100.931 41.2961C100.931 34.3526 96.0588 28.7041 90.0705 28.7041C84.0822 28.7041 79.2095 34.3526 79.2095 41.2961C79.2095 45.5232 81.0377 49.4452 84.0374 51.7671L84.9179 37.5825C84.9366 37.3071 85.153 37.0839 85.4291 37.0615C85.7089 37.0392 85.9589 37.2215 86.0223 37.4895L89.8802 53.8844Z"
            fill="#D9E6F7"
          />
          <path
            d="M77.1873 77.193C76.8851 77.193 76.6352 76.9511 76.6277 76.6497L76.4598 69.8923L69.688 62.4353C69.5873 62.3237 69.535 62.1748 69.5462 62.0223L70.0387 54.7662L63.9012 50.4908C63.6475 50.3159 63.584 49.9661 63.7631 49.7131C63.9385 49.4601 64.2892 49.4005 64.5429 49.5754L70.9416 54.0295C71.102 54.1411 71.1916 54.3309 71.1804 54.5244L70.6804 61.8586L77.4336 69.2932C77.5231 69.3937 77.5754 69.5202 77.5791 69.6541L77.7507 76.6199C77.7582 76.9288 77.5157 77.1855 77.206 77.193C77.1948 77.193 77.1911 77.193 77.1873 77.193Z"
            fill="#D9E6F7"
          />
          <path
            d="M102.95 77.193C102.939 77.193 102.928 77.193 102.92 77.193C102.61 77.1744 102.375 76.9139 102.39 76.605L102.778 69.6393C102.786 69.5127 102.834 69.3937 102.92 69.3006L109.546 61.866L108.923 54.5356C108.905 54.3346 108.998 54.1411 109.166 54.0295L115.695 49.5754C115.949 49.4005 116.3 49.4675 116.471 49.7205C116.647 49.9736 116.579 50.3233 116.326 50.4982L110.069 54.77L110.684 62.0148C110.699 62.1674 110.647 62.32 110.546 62.4316L103.89 69.8997L103.513 76.6683C103.491 76.9623 103.245 77.193 102.95 77.193Z"
            fill="#D9E6F7"
          />
          <path
            d="M82.5114 77.193C82.2129 77.193 81.9629 76.9548 81.9517 76.6571L81.7017 69.896L74.9672 62.4353C74.8665 62.3237 74.8143 62.1786 74.8255 62.0297L75.2396 54.7142L67.5649 47.2795C67.3447 47.0637 67.3373 46.7102 67.5537 46.4907C67.7701 46.2711 68.1245 46.2637 68.3447 46.4795L76.2022 54.0927C76.3179 54.2044 76.3813 54.3644 76.3701 54.5244L75.9522 61.8623L82.6681 69.3006C82.7576 69.3974 82.8061 69.5239 82.8098 69.6541L83.0673 76.6199C83.0785 76.9288 82.836 77.1855 82.53 77.1967C82.5263 77.193 82.5188 77.193 82.5114 77.193Z"
            fill="#D9E6F7"
          />
          <path
            d="M97.7563 77.1483C97.7489 77.1483 97.7414 77.1483 97.7339 77.1483C97.4243 77.1371 97.1855 76.8767 97.1967 76.5716L97.4541 69.6504C97.4578 69.5202 97.5101 69.3937 97.5959 69.2969L104.312 61.8586L103.894 54.5207C103.886 54.3607 103.946 54.2044 104.062 54.089L112.005 46.3455C112.225 46.1297 112.58 46.1334 112.796 46.353C113.012 46.5725 113.009 46.926 112.789 47.1418L105.028 54.7067L105.446 62.0223C105.453 62.1711 105.401 62.3162 105.304 62.4279L98.5697 69.8886L98.3197 76.6088C98.301 76.9139 98.0548 77.1483 97.7563 77.1483Z"
            fill="#D9E6F7"
          />
          <path
            d="M87.7089 77.1929C87.4104 77.1929 87.1604 76.9585 87.1492 76.6571L86.8992 70.0225L80.161 62.4316C80.064 62.32 80.0118 62.1785 80.023 62.0297L80.4408 54.7179L72.7698 47.3688C72.546 47.1567 72.5385 46.8032 72.7549 46.58C72.9676 46.3567 73.322 46.3492 73.5459 46.5651L81.4034 54.0927C81.5228 54.2044 81.5825 54.3644 81.5751 54.5281L81.1572 61.8697L87.8768 69.4383C87.9626 69.535 88.0111 69.6578 88.0185 69.7881L88.276 76.6236C88.2872 76.9325 88.0484 77.1892 87.7387 77.2041C87.7201 77.1929 87.7126 77.1929 87.7089 77.1929Z"
            fill="#D9E6F7"
          />
          <path
            d="M92.7307 76.8469C92.727 76.8469 92.7233 76.8469 92.7195 76.8469C92.4098 76.8394 92.1636 76.5864 92.1711 76.2776L92.3017 69.6578C92.3054 69.5239 92.3539 69.3974 92.4434 69.2969L99.1145 61.8585L98.6966 54.5207C98.6892 54.3569 98.7489 54.1969 98.8683 54.0853L106.685 46.6469C106.909 46.4348 107.263 46.4423 107.476 46.6655C107.688 46.8888 107.681 47.2423 107.457 47.4544L99.8271 54.7179L100.241 62.0297C100.249 62.1786 100.2 62.3237 100.099 62.4316L93.4098 69.8885L93.2829 76.2999C93.2829 76.6013 93.0367 76.8469 92.7307 76.8469Z"
            fill="#D9E6F7"
          />
          <path
            d="M115.788 55.0453H64.4757C64.166 55.0453 63.916 54.796 63.916 54.4872C63.916 54.1783 64.166 53.929 64.4757 53.929H115.788C116.098 53.929 116.348 54.1783 116.348 54.4872C116.348 54.796 116.098 55.0453 115.788 55.0453Z"
            fill="#D9E6F7"
          />
          <path
            d="M73.367 44.7083C73.3558 44.7083 73.3483 44.7083 73.3371 44.7083C73.0274 44.6934 72.7924 44.4292 72.8073 44.1241C73.2476 35.5954 79.941 28.5255 88.3806 27.6808C88.6828 27.651 88.9627 27.8743 88.9925 28.1794C89.0223 28.4845 88.7985 28.7599 88.4925 28.7897C80.5977 29.5822 74.3333 36.1983 73.9229 44.1799C73.908 44.4776 73.6617 44.7083 73.367 44.7083Z"
            fill="#D9E6F7"
          />
          <path
            d="M90.1119 28.7041H89.7686C89.459 28.7041 89.209 28.4548 89.209 28.1459C89.209 27.8371 89.459 27.5878 89.7686 27.5878H90.1119C90.4216 27.5878 90.6716 27.8371 90.6716 28.1459C90.6716 28.4548 90.4216 28.7041 90.1119 28.7041Z"
            fill="#D9E6F7"
          />
          <path
            d="M106.901 44.2766C106.614 44.2766 106.368 44.0534 106.346 43.7631C105.722 35.8448 99.5737 29.545 91.7348 28.7897C91.4289 28.7599 91.2013 28.4883 91.2311 28.1794C91.261 27.8706 91.5334 27.651 91.843 27.6771C100.227 28.4845 106.797 35.2122 107.461 43.6738C107.487 43.9827 107.256 44.2506 106.946 44.2729C106.931 44.2766 106.916 44.2766 106.901 44.2766Z"
            fill="#D9E6F7"
          />
          <path
            d="M112.614 62.6139H67.6099C67.3003 62.6139 67.0503 62.3646 67.0503 62.0557C67.0503 61.7469 67.3003 61.4976 67.6099 61.4976H112.61C112.92 61.4976 113.169 61.7469 113.169 62.0557C113.169 62.3646 112.92 62.6139 112.614 62.6139Z"
            fill="#D9E6F7"
          />
          <path
            d="M73.5794 44.8385C73.542 44.8385 73.5047 44.8348 73.4674 44.8274C73.1652 44.7678 72.9675 44.4739 73.0309 44.1687C74.527 36.7676 81.7279 31.3944 90.1526 31.3944C98.5026 31.3944 105.689 36.749 107.233 44.1241C107.297 44.4255 107.103 44.7232 106.8 44.7864C106.502 44.8497 106.203 44.6562 106.14 44.3548C104.7 37.4932 97.9765 32.5144 90.1563 32.5144C82.2614 32.5144 75.5232 37.5118 74.1315 44.3957C74.0756 44.6562 73.8405 44.8385 73.5794 44.8385Z"
            fill="#D9E6F7"
          />
          <path
            d="M74.8256 46.6544C74.7174 46.6544 74.6055 46.6209 74.5085 46.5539C74.2548 46.379 74.1914 46.033 74.3667 45.7762C77.2284 41.6347 83.4256 38.9593 90.1564 38.9593C91.5294 38.9593 92.9062 39.0746 94.3687 39.3128C94.6747 39.3611 94.8799 39.6477 94.8314 39.9528C94.7829 40.2579 94.4956 40.4626 94.1896 40.4142C92.7868 40.1872 91.466 40.0756 90.1564 40.0756C83.7838 40.0756 77.9485 42.5612 75.2883 46.4088C75.1763 46.5688 75.0047 46.6544 74.8256 46.6544Z"
            fill="#D9E6F7"
          />
          <path
            d="M105.443 46.6544C105.267 46.6544 105.092 46.5725 104.984 46.4162C103.025 43.6031 99.3163 41.4635 94.8092 40.5482C94.507 40.4849 94.3093 40.1909 94.3727 39.8895C94.4361 39.5881 94.7309 39.3946 95.0331 39.4542C99.8163 40.4254 103.779 42.7324 105.902 45.7799C106.077 46.033 106.013 46.379 105.76 46.5576C105.663 46.6209 105.551 46.6544 105.443 46.6544Z"
            fill="#D9E6F7"
          />
          <path
            d="M77.4 49.9438C77.1985 49.9438 77.0045 49.8359 76.9037 49.6461C76.7582 49.3745 76.8664 49.0359 77.1388 48.8907C79.1759 47.8191 81.8212 47.0228 84.7911 46.5837C85.1008 46.539 85.3806 46.7474 85.4254 47.0525C85.4702 47.3577 85.2612 47.6405 84.9553 47.6851C82.1085 48.1056 79.5864 48.8647 77.6611 49.8768C77.5791 49.9215 77.4895 49.9438 77.4 49.9438Z"
            fill="#D9E6F7"
          />
          <path
            d="M92.6451 47.3911C92.6339 47.3911 92.6264 47.3911 92.6153 47.3911C91.8877 47.3539 90.9811 47.3056 90.1528 47.3056C89.2797 47.3056 88.3768 47.3539 87.6493 47.3911C87.3433 47.4097 87.0784 47.1716 87.0598 46.8628C87.0448 46.5539 87.2799 46.2934 87.5896 46.2748C88.3283 46.2376 89.2499 46.1892 90.1528 46.1892C91.0109 46.1892 91.9325 46.2376 92.675 46.2748C92.9846 46.2897 93.2197 46.5539 93.2048 46.8628C93.1898 47.1604 92.9399 47.3911 92.6451 47.3911Z"
            fill="#D9E6F7"
          />
          <path
            d="M102.864 49.9438C102.775 49.9438 102.685 49.9215 102.603 49.8805C100.678 48.8684 98.1593 48.113 95.3126 47.6888C95.0066 47.6442 94.7977 47.3577 94.8425 47.0563C94.8872 46.7511 95.1708 46.5428 95.4767 46.5874C98.4466 47.0265 101.092 47.8265 103.125 48.8945C103.398 49.0396 103.502 49.3745 103.36 49.6498C103.26 49.8359 103.066 49.9438 102.864 49.9438Z"
            fill="#D9E6F7"
          />
          <path
            d="M109.047 70.2272H71.2179C70.9082 70.2272 70.6582 69.9779 70.6582 69.669C70.6582 69.3602 70.9082 69.1108 71.2179 69.1108H109.047C109.356 69.1108 109.606 69.3602 109.606 69.669C109.606 69.9779 109.356 70.2272 109.047 70.2272Z"
            fill="#D9E6F7"
          />
          <path
            d="M111.584 190H66.7965C66.4868 190 66.2368 189.751 66.2368 189.442C66.2368 189.133 66.4868 188.884 66.7965 188.884H111.584C111.893 188.884 112.143 189.133 112.143 189.442C112.143 189.751 111.89 190 111.584 190Z"
            fill="#D9E6F7"
          />
          <path
            d="M90.026 189.78C89.7163 189.78 89.4663 189.531 89.4663 189.222V84.289C89.4663 83.9801 89.7163 83.7308 90.026 83.7308C90.3356 83.7308 90.5856 83.9801 90.5856 84.289V189.222C90.5856 189.531 90.3356 189.78 90.026 189.78Z"
            fill="#D9E6F7"
          />
          <path
            d="M98.0142 79.7456H77.1876C76.8779 79.7456 76.6279 79.4963 76.6279 79.1874C76.6279 78.8786 76.8779 78.6293 77.1876 78.6293H98.0142C98.3238 78.6293 98.5738 78.8786 98.5738 79.1874C98.5738 79.4963 98.3201 79.7456 98.0142 79.7456Z"
            fill="#D9E6F7"
          />
        </svg>
      )
    },
    {
      name: "Қазақ әдебиет",
      link: "kazlit",
      img: (
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M137.314 0.195465C117.55 7.22728 85.291 27.3636 80.5228 83.1182C80.5228 83.1227 80.5228 83.1318 80.5183 83.1364C80.1864 87.45 79.9683 93.7864 79.9683 98.9091C79.9683 99.85 80.7319 100.618 81.6774 100.618C82.6228 100.618 83.3864 99.85 83.3864 98.9091C83.3864 94.2546 83.5728 88.5864 83.8546 84.4091C86.8137 83 94.9319 78.4727 96.991 70.2955C99.6137 59.8 106.982 54.5182 114.786 48.9227C126.605 40.45 140 30.8455 140 1.59546C140 0.545465 139.091 -0.427263 137.314 0.195465ZM112.796 46.15C104.468 52.1182 96.6046 57.7591 93.6819 69.4637C92.2865 75 87.3683 78.5864 84.2137 80.3818C89.5955 29.7909 118.718 10.9636 136.55 4.12728C135.827 29.6409 124.123 38.0273 112.796 46.15Z"
              fill="#D9E6F7"
            />
            <path
              d="M74.6909 98.8045C69.7591 100.091 65.5955 101.714 62.3091 103.627C61.4955 104.1 61.2364 105.136 61.6955 105.964C62.1182 106.718 63.1955 107.064 64.0318 106.577C67.0455 104.818 70.9228 103.318 75.5546 102.114C76.4637 101.873 77.0137 100.941 76.7773 100.032C76.5364 99.1091 75.6091 98.5864 74.6909 98.8045Z"
              fill="#D9E6F7"
            />
            <path
              d="M76.841 86.3727C76.6092 85.4636 75.6728 84.9182 74.7638 85.1455C70.0547 86.3545 65.8728 87.9727 62.3365 89.9545C61.5138 90.4136 61.2501 91.4364 61.6819 92.2773C62.1501 93.1954 63.291 93.3273 64.0047 92.9318C67.2956 91.1136 71.1956 89.5909 75.6138 88.4545C76.5274 88.2182 77.0774 87.2864 76.841 86.3727Z"
              fill="#D9E6F7"
            />
            <path
              d="M78.2865 72.3409C78.0774 71.4273 77.1774 70.8318 76.232 71.0727C70.7911 72.3545 66.1092 74.1136 62.3183 76.3C61.5001 76.7727 61.2047 77.8227 61.6956 78.6364C62.2092 79.4909 63.2229 79.7273 64.0274 79.2636C67.532 77.25 71.9001 75.6045 77.0229 74.3954C77.9365 74.1818 78.5047 73.2591 78.2865 72.3409Z"
              fill="#D9E6F7"
            />
            <path
              d="M81.3047 58.05C81.1138 57.1318 80.1911 56.5545 79.2911 56.7182C72.4229 58.1182 66.7183 60.1136 62.3183 62.6455C61.5001 63.1182 61.232 64.1545 61.691 64.9773C62.241 65.9636 63.4092 65.9591 64.0274 65.6045C68.1229 63.2318 73.4729 61.3909 79.9729 60.0636C80.8956 59.8773 81.4911 58.9682 81.3047 58.05Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 62.6455C42.3863 58.0591 30.6363 55.4046 15.4363 54.7682C14.4363 54.7227 13.6999 55.4636 13.659 56.4C13.6226 57.3455 14.3545 58.1409 15.2954 58.1818C33.5363 58.9409 43.5136 62.6546 48.6636 65.6046C49.5908 66.1364 50.5999 65.6773 50.9954 64.9773C51.459 64.1546 51.1772 63.1182 50.3636 62.6455Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 76.3045C42.3863 71.7182 30.6363 69.0636 15.4363 68.4273C14.4363 68.3818 13.6999 69.1227 13.659 70.0591C13.6226 71.0046 14.3545 71.8 15.2954 71.8409C33.5363 72.6 43.5136 76.3136 48.6636 79.2636C49.5908 79.7955 50.5999 79.3364 50.9954 78.6364C51.459 77.8136 51.1772 76.7773 50.3636 76.3045Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 89.9636C42.3863 85.3773 30.6363 82.7227 15.4363 82.0864C14.4363 82.0409 13.6999 82.7818 13.659 83.7182C13.6226 84.6636 14.3545 85.4591 15.2954 85.5C33.5363 86.2591 43.5136 89.9727 48.6636 92.9227C49.5908 93.4545 50.5999 92.9955 50.9954 92.2955C51.459 91.4727 51.1772 90.4364 50.3636 89.9636Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 103.623C42.3863 99.0364 30.6363 96.3818 15.4363 95.7455C14.4363 95.7 13.6999 96.4409 13.659 97.3773C13.6226 98.3227 14.3545 99.1182 15.2954 99.1591C33.5363 99.9182 43.5136 103.632 48.6636 106.582C49.5908 107.114 50.5999 106.655 50.9954 105.955C51.459 105.132 51.1772 104.095 50.3636 103.623Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 117.282C42.3863 112.695 30.6363 110.041 15.4363 109.405C14.4363 109.359 13.6999 110.1 13.659 111.036C13.6226 111.982 14.3545 112.777 15.2954 112.818C33.5363 113.577 43.5136 117.291 48.6636 120.241C49.5908 120.773 50.5999 120.314 50.9954 119.614C51.459 118.791 51.1772 117.755 50.3636 117.282Z"
              fill="#D9E6F7"
            />
            <path
              d="M86.3045 43.6682C86.1727 42.7273 85.2591 42.0545 84.3727 42.2227C66.6454 44.7682 59.1773 50.4636 56.3455 53.5318C52.6364 49.5 40.9591 40.9727 8.53636 40.9727C7.59091 40.9727 6.82727 41.7409 6.82727 42.6818V47.8045H1.70909C0.763636 47.8045 0 48.5727 0 49.5136V138.295C0 139.236 0.763636 140.005 1.70909 140.005H110.977C111.923 140.005 112.686 139.236 112.686 138.295V58.3227C112.686 57.3818 111.923 56.6136 110.977 56.6136C110.032 56.6136 109.268 57.3818 109.268 58.3227V136.586H65.1864C71.7864 134.923 83.6 133.173 104.145 133.173C105.091 133.173 105.855 132.405 105.855 131.464V66.1045C105.855 65.1636 105.091 64.3954 104.145 64.3954C103.2 64.3954 102.436 65.1636 102.436 66.1045V129.764C74.6409 129.891 62.8136 133.177 58.0455 135.327V56.8364C59.1045 55.3273 64.95 48.4591 84.8545 45.6C85.7909 45.4636 86.4409 44.6045 86.3045 43.6682ZM3.41364 136.586V51.2227H6.82727V131.468C6.82727 132.409 7.59091 133.177 8.53636 133.177C29.0818 133.177 40.9045 134.927 47.5 136.591H3.41364V136.586ZM54.6364 135.323C49.8682 133.177 38.0455 129.886 10.2455 129.759V44.3954C44.5682 44.7273 53.3455 55 54.6364 56.8273V135.323Z"
              fill="#D9E6F7"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="140" height="140" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      name: "Русский язык",
      link: "rus",
      img: (
        <svg
          width="87"
          height="165"
          viewBox="0 0 87 165"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M39.329 64.8895C38.9371 64.8895 38.6292 64.5811 38.6292 64.1885V57.5144C38.6012 57.1499 38.4892 54.8785 40.3367 53.4483C41.9043 52.2425 42.968 50.9806 42.968 48.8494C42.968 48.4568 43.2759 48.1483 43.6678 48.1483C44.0597 48.1483 44.3676 48.4568 44.3676 48.8494C44.3676 51.7377 42.7721 53.3642 41.2045 54.57C39.8609 55.6076 40.0288 57.3181 40.0288 57.4023C40.0288 57.4303 40.0288 57.4583 40.0288 57.4864V64.1885C40.0288 64.5811 39.7209 64.8895 39.329 64.8895Z"
              fill="#D9E6F7"
            />
            <path
              d="M48.0069 64.8895C47.615 64.8895 47.3071 64.5811 47.3071 64.1885V57.4864C47.3071 57.4583 47.3071 57.4303 47.3071 57.4023C47.3071 57.3462 47.475 55.6076 46.1314 54.57C44.5638 53.3642 42.9683 51.7377 42.9683 48.8494C42.9683 48.4568 43.2762 48.1483 43.6681 48.1483C44.06 48.1483 44.3679 48.4568 44.3679 48.8494C44.3679 51.0086 45.4316 52.2425 46.9992 53.4483C48.8466 54.8785 48.7347 57.1218 48.7067 57.5144V64.1885C48.7067 64.5811 48.3988 64.8895 48.0069 64.8895Z"
              fill="#D9E6F7"
            />
            <path
              d="M39.3013 64.8895C38.9094 64.8895 38.6015 64.5811 38.6015 64.1885V57.4864C38.6015 57.4583 38.6015 57.4303 38.6015 57.4023C38.6015 57.3462 38.7695 55.6076 37.4258 54.57C36.81 54.0933 36.1942 53.5605 35.6623 52.8875V64.1885C35.6623 64.5811 35.3544 64.8895 34.9625 64.8895C34.5706 64.8895 34.2627 64.5811 34.2627 64.1885V48.8494C34.2627 48.4568 34.5706 48.1483 34.9625 48.1483C35.3544 48.1483 35.6623 48.4568 35.6623 48.8494C35.6623 51.0086 36.726 52.2425 38.2936 53.4483C40.1411 54.8785 40.0291 57.1218 40.0011 57.5144V64.1885C40.0011 64.5811 39.6932 64.8895 39.3013 64.8895Z"
              fill="#D9E6F7"
            />
            <path
              d="M35.7459 52.5229C35.6899 52.5229 35.6619 52.5229 35.606 52.5229C35.2141 52.4388 34.9901 52.0743 35.0461 51.7097L42.9959 9.53434C43.0799 9.14175 43.4438 8.91741 43.8077 8.97349C44.1996 9.05762 44.4235 9.42217 44.3675 9.78672L36.4457 51.9621C36.3897 52.2706 36.0818 52.5229 35.7459 52.5229Z"
              fill="#D9E6F7"
            />
            <path
              d="M41.0645 45.7928C41.0365 45.7928 41.0365 45.7928 41.0085 45.7928C40.6166 45.7648 40.3367 45.4283 40.3647 45.0357L41.1205 34.7723C41.1485 34.3797 41.4844 34.0993 41.8763 34.1273C42.2682 34.1553 42.5481 34.4918 42.5201 34.8844L41.7643 45.1479C41.7363 45.5124 41.4284 45.7928 41.0645 45.7928Z"
              fill="#D9E6F7"
            />
            <path
              d="M51.5898 52.5229C51.2539 52.5229 50.9739 52.2986 50.89 51.9621L42.9961 9.78671C42.9122 9.39412 43.1641 9.02957 43.556 8.97349C43.9479 8.88936 44.3118 9.14174 44.3678 9.53433L52.2896 51.7097C52.3735 52.1023 52.1216 52.4669 51.7297 52.5229C51.6737 52.5229 51.6457 52.5229 51.5898 52.5229Z"
              fill="#D9E6F7"
            />
            <path
              d="M46.271 45.7648C45.9071 45.7648 45.5992 45.4844 45.5712 45.1198L44.8154 34.8844C44.7874 34.4918 45.0673 34.1553 45.4592 34.1273C45.8511 34.0993 46.187 34.3797 46.215 34.7723L46.9708 45.0077C46.9988 45.4002 46.7189 45.7367 46.327 45.7648C46.327 45.7648 46.299 45.7648 46.271 45.7648Z"
              fill="#D9E6F7"
            />
            <path
              d="M43.668 81.7429C40.085 81.7429 37.1738 78.8265 37.1738 75.2371C37.1738 71.6477 40.085 68.7313 43.668 68.7313C47.2511 68.7313 50.1622 71.6477 50.1622 75.2371C50.1622 78.8265 47.2511 81.7429 43.668 81.7429ZM43.668 70.1614C40.8688 70.1614 38.5734 72.4609 38.5734 75.2651C38.5734 78.0693 40.8688 80.3688 43.668 80.3688C46.4673 80.3688 48.7626 78.0693 48.7626 75.2651C48.7626 72.4609 46.4953 70.1614 43.668 70.1614Z"
              fill="#D9E6F7"
            />
            <path
              d="M43.6681 165H24.2135C23.8216 165 23.5137 164.692 23.5137 164.299V102.606C23.5137 102.214 23.8216 101.905 24.2135 101.905H35.8863C36.2782 101.905 36.5861 102.214 36.5861 102.606C36.5861 102.999 36.2782 103.307 35.8863 103.307H24.9133V163.598H43.6681C44.06 163.598 44.3679 163.906 44.3679 164.299C44.3679 164.692 44.06 165 43.6681 165Z"
              fill="#D9E6F7"
            />
            <path
              d="M43.6679 120.217H35.858C35.4661 120.217 35.1582 119.908 35.1582 119.516V102.634C35.1582 102.606 35.1582 102.578 35.1582 102.55C35.1862 102.382 35.6621 98.6803 38.3493 96.9978C40.5607 95.6237 42.968 92.6232 42.968 89.3143C42.968 88.9217 43.276 88.6132 43.6679 88.6132C44.0597 88.6132 44.3677 88.9217 44.3677 89.3143C44.3677 93.156 41.6244 96.6052 39.1051 98.1756C37.1177 99.4094 36.6138 102.298 36.5858 102.662V118.787H43.6958C44.0877 118.787 44.3957 119.095 44.3957 119.488C44.3957 119.88 44.0597 120.217 43.6679 120.217Z"
              fill="#D9E6F7"
            />
            <path
              d="M24.2135 103.307C23.8216 103.307 23.5137 102.999 23.5137 102.606V96.7735C23.5137 96.5772 23.5976 96.3809 23.7376 96.2407L23.9056 96.1004L25.837 82.6683C25.893 82.2757 26.2569 82.0233 26.6208 82.0794C27.0127 82.1355 27.2646 82.5 27.2086 82.8646L25.2492 96.5491C25.2212 96.7174 25.1372 96.8576 25.0253 96.9698L24.9133 97.0819V102.606C24.9133 102.999 24.6054 103.307 24.2135 103.307Z"
              fill="#D9E6F7"
            />
            <path
              d="M28.8599 97.4745C28.692 97.4745 28.524 97.4184 28.384 97.3062L28.0201 96.9697C27.9082 96.8576 27.8242 96.7174 27.7962 96.5491L25.8367 82.8645C25.7808 82.472 26.0607 82.1355 26.4246 82.0794C26.8165 82.0233 27.1524 82.3037 27.2084 82.6683L29.1398 96.1004L29.3078 96.2406C29.5877 96.493 29.6157 96.9417 29.3638 97.2221C29.2518 97.3904 29.0559 97.4745 28.8599 97.4745Z"
              fill="#D9E6F7"
            />
            <path
              d="M47.2791 12.4788C47.1392 12.4788 46.9992 12.4227 46.8592 12.3385L43.6681 10.0391L40.505 12.3385C40.2531 12.5068 39.9172 12.5068 39.6932 12.3385C39.4413 12.1703 39.3573 11.8338 39.4413 11.5534L40.645 7.79572L37.4538 5.46822C37.2019 5.29997 37.1179 4.96346 37.2019 4.68304C37.2859 4.40262 37.5658 4.20632 37.8737 4.20632H41.7926L42.9963 0.448674C43.1083 0.196295 43.3882 0 43.6681 0C43.976 0 44.228 0.196295 44.3399 0.476717L45.5436 4.23436H49.4625C49.7704 4.23436 50.0224 4.43066 50.1343 4.71108C50.2183 4.9915 50.1343 5.32801 49.8824 5.49626L46.6913 7.82376L47.895 11.5814C47.9789 11.8618 47.8949 12.1983 47.643 12.3666C47.559 12.4227 47.4191 12.4788 47.2791 12.4788ZM43.6681 8.46873C43.8081 8.46873 43.948 8.52481 44.088 8.60894L45.9355 9.95496L45.2357 7.76767C45.1517 7.48725 45.2357 7.15075 45.4876 6.98249L47.3351 5.63647H45.0397C44.7318 5.63647 44.4799 5.44018 44.3679 5.15976L43.6681 2.97247L42.9683 5.15976C42.8843 5.44018 42.6044 5.63647 42.2965 5.63647H40.0291L41.8766 6.98249C42.1285 7.15075 42.2125 7.48725 42.1285 7.76767L41.4287 9.92692L43.2762 8.5809C43.3882 8.49677 43.5282 8.46873 43.6681 8.46873Z"
              fill="#D9E6F7"
            />
            <path
              d="M46.4113 75.9662H43.6681C43.2762 75.9662 42.9683 75.6577 42.9683 75.2651V70.8344C42.9683 70.4419 43.2762 70.1334 43.6681 70.1334C44.06 70.1334 44.3679 70.4419 44.3679 70.8344V74.564H46.4113C46.8032 74.564 47.1111 74.8725 47.1111 75.2651C47.1111 75.6297 46.8032 75.9662 46.4113 75.9662Z"
              fill="#D9E6F7"
            />
            <path
              d="M28.86 103.307C28.4681 103.307 28.1602 102.999 28.1602 102.606V96.7734C28.1602 96.7454 28.1602 96.6893 28.1602 96.6613C28.1881 96.4369 28.5241 94.5301 29.8957 93.7729C30.6795 93.3243 31.3233 91.5576 31.3233 89.9031C31.3233 89.5105 31.6312 89.2021 32.0231 89.2021C32.415 89.2021 32.7229 89.5105 32.7229 89.9031C32.7229 91.838 31.9951 94.1936 30.5675 94.9787C29.9517 95.3153 29.6437 96.3809 29.5598 96.8015V102.578C29.5598 102.999 29.2519 103.307 28.86 103.307Z"
              fill="#D9E6F7"
            />
            <path
              d="M35.1862 97.4745C34.8503 97.4745 34.5424 97.2221 34.4864 96.8856C34.4304 96.4931 34.1225 95.3714 33.4786 95.0068C32.051 94.2216 31.3232 91.8381 31.3232 89.9312C31.3232 89.5386 31.6312 89.2301 32.023 89.2301C32.4149 89.2301 32.7229 89.5386 32.7229 89.9312C32.7229 91.5857 33.3947 93.3523 34.1505 93.801C35.4941 94.5581 35.83 96.465 35.886 96.6893C35.942 97.0819 35.69 97.4184 35.2981 97.5026C35.2702 97.4745 35.2422 97.4745 35.1862 97.4745Z"
              fill="#D9E6F7"
            />
            <path
              d="M35.1861 103.307C34.7942 103.307 34.4863 102.999 34.4863 102.606V96.7734C34.4863 96.7454 34.4863 96.6893 34.4863 96.6613C34.5143 96.4369 34.8502 94.5301 36.1939 93.7729C36.9776 93.3243 37.6215 91.5576 37.6215 89.9031C37.6215 89.5105 37.9294 89.2021 38.3213 89.2021C38.7132 89.2021 39.0211 89.5105 39.0211 89.9031C39.0211 91.838 38.2933 94.1936 36.8657 94.9787C36.2498 95.3153 35.9419 96.3809 35.858 96.8015V102.578C35.8859 102.999 35.578 103.307 35.1861 103.307Z"
              fill="#D9E6F7"
            />
            <path
              d="M41.1208 96.2126C40.8689 96.2126 40.6169 96.0724 40.505 95.82C40.309 95.4274 40.0851 95.147 39.8331 95.0068C38.4055 94.2216 37.6777 91.8381 37.6777 89.9312C37.6777 89.5386 37.9856 89.2301 38.3775 89.2301C38.7694 89.2301 39.0773 89.5386 39.0773 89.9312C39.0773 91.5857 39.7492 93.3523 40.505 93.801C41.0088 94.0814 41.4287 94.5581 41.7646 95.2311C41.9326 95.5677 41.7926 95.9883 41.4287 96.1565C41.3447 96.1846 41.2328 96.2126 41.1208 96.2126Z"
              fill="#D9E6F7"
            />
            <path
              d="M43.6679 161.607H36.8658C36.4739 161.607 36.166 161.298 36.166 160.906V148.063C36.166 147.894 36.194 144.024 38.6293 141.557C39.917 140.267 41.5965 139.622 43.64 139.622C44.0318 139.622 44.3398 139.93 44.3398 140.323C44.3398 140.716 44.0318 141.024 43.64 141.024C41.9884 141.024 40.6168 141.529 39.6091 142.538C37.5656 144.585 37.5376 148.006 37.5376 148.063V160.205H43.64C44.0318 160.205 44.3398 160.513 44.3398 160.906C44.3398 161.298 44.0598 161.607 43.6679 161.607Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.4702 161.607H43.6681C43.2762 161.607 42.9683 161.298 42.9683 160.906C42.9683 160.513 43.2762 160.205 43.6681 160.205H49.7704V148.063C49.7704 147.782 49.6864 141.024 43.6681 141.024C43.2762 141.024 42.9683 140.716 42.9683 140.323C42.9683 139.93 43.2762 139.622 43.6681 139.622C45.7115 139.622 47.391 140.267 48.6787 141.557C51.142 144.024 51.142 147.894 51.142 148.063V160.906C51.17 161.298 50.8621 161.607 50.4702 161.607Z"
              fill="#D9E6F7"
            />
            <path
              d="M45.5991 129.667V135.416H41.7922V129.667H45.5991ZM45.5991 128.265H41.7922C41.0084 128.265 40.3926 128.882 40.3926 129.667V135.416C40.3926 136.201 41.0084 136.818 41.7922 136.818H45.5991C46.3829 136.818 46.9988 136.201 46.9988 135.416V129.667C46.9988 128.91 46.3549 128.265 45.5991 128.265Z"
              fill="#D9E6F7"
            />
            <path
              d="M43.6681 124.535H24.2135C23.8216 124.535 23.5137 124.227 23.5137 123.834C23.5137 123.442 23.8216 123.133 24.2135 123.133H43.6681C44.06 123.133 44.3679 123.442 44.3679 123.834C44.3679 124.227 44.06 124.535 43.6681 124.535Z"
              fill="#D9E6F7"
            />
            <path
              d="M43.6681 106.644C43.2762 106.644 42.9683 106.336 42.9683 105.943V102.634C42.9683 102.242 43.2762 101.933 43.6681 101.933C44.06 101.933 44.3679 102.242 44.3679 102.634V105.943C44.3679 106.336 44.06 106.644 43.6681 106.644Z"
              fill="#D9E6F7"
            />
            <path
              d="M22.5338 136.341C22.1419 136.341 21.834 136.032 21.834 135.64V130.508C21.834 130.256 21.9739 130.031 22.1979 129.891C22.4218 129.779 22.6738 129.779 22.8977 129.891C23.2336 130.116 24.9131 131.181 24.9131 132.443C24.9131 132.836 24.6052 133.144 24.2133 133.144C23.8214 133.144 23.5135 132.836 23.5135 132.443C23.5135 132.331 23.4016 132.163 23.2336 131.966V135.64C23.2336 136.004 22.8977 136.341 22.5338 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M15.5914 136.341C15.1995 136.341 14.8916 136.033 14.8916 135.64V130.508C14.8916 130.256 15.0316 130.032 15.2555 129.891C15.4794 129.779 15.7314 129.779 15.9553 129.891C16.2912 130.088 17.9987 131.181 17.9987 132.443C17.9987 132.836 17.6908 133.144 17.2989 133.144C16.907 133.144 16.5991 132.836 16.5991 132.443C16.5991 132.331 16.4872 132.163 16.3192 131.966V135.64C16.2912 136.005 15.9833 136.341 15.5914 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M18.9785 136.341C18.5866 136.341 18.2787 136.032 18.2787 135.64V131.966C18.1107 132.163 17.9987 132.331 17.9987 132.443C17.9987 132.836 17.6908 133.144 17.2989 133.144C16.907 133.144 16.5991 132.836 16.5991 132.443C16.5991 131.181 18.2787 130.088 18.6426 129.891C18.8665 129.751 19.1184 129.751 19.3424 129.891C19.5663 130.003 19.7063 130.256 19.7063 130.508V135.64C19.6783 136.004 19.3704 136.341 18.9785 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M8.64951 136.341C8.25762 136.341 7.94971 136.033 7.94971 135.64V130.508C7.94971 130.256 8.08967 130.032 8.31361 129.891C8.53755 129.779 8.78948 129.779 9.01341 129.891C9.34932 130.088 11.0568 131.181 11.0568 132.443C11.0568 132.836 10.7489 133.144 10.357 133.144C9.96515 133.144 9.65724 132.836 9.65724 132.443C9.65724 132.331 9.54527 132.163 9.37731 131.966V135.64C9.34932 136.005 9.04141 136.341 8.64951 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M12.0366 136.341C11.6447 136.341 11.3368 136.032 11.3368 135.64V131.966C11.1688 132.163 11.0568 132.331 11.0568 132.443C11.0568 132.836 10.7489 133.144 10.357 133.144C9.96514 133.144 9.65723 132.836 9.65723 132.443C9.65723 131.181 11.3368 130.088 11.7007 129.891C11.9246 129.751 12.1765 129.751 12.4005 129.891C12.6244 130.003 12.7644 130.256 12.7644 130.508V135.64C12.7364 136.004 12.4285 136.341 12.0366 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M24.2132 136.341H1.73545C1.34356 136.341 1.03564 136.033 1.03564 135.64V130.508C1.03564 130.256 1.17561 130.032 1.39954 129.891C1.62348 129.779 1.87541 129.779 2.09935 129.891C2.43526 130.088 4.14279 131.181 4.14279 132.443C4.14279 132.836 3.83487 133.144 3.44298 133.144C3.05109 133.144 2.74317 132.836 2.74317 132.443C2.74317 132.331 2.6312 132.163 2.46325 131.966V134.939H24.2412C24.6331 134.939 24.941 135.247 24.941 135.64C24.941 136.033 24.6051 136.341 24.2132 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M5.12251 136.341C4.73062 136.341 4.4227 136.032 4.4227 135.64V131.966C4.25475 132.163 4.14278 132.331 4.14278 132.443C4.14278 132.836 3.83486 133.144 3.44297 133.144C3.05108 133.144 2.74316 132.836 2.74316 132.443C2.74316 131.181 4.4227 130.088 4.7866 129.891C5.01054 129.751 5.26247 129.751 5.48641 129.891C5.71035 130.003 5.85031 130.256 5.85031 130.508V135.64C5.82231 136.004 5.48641 136.341 5.12251 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M27.9922 165H1.73545C1.34356 165 1.03564 164.692 1.03564 164.299V135.64C1.03564 135.247 1.34356 134.939 1.73545 134.939C2.12734 134.939 2.43526 135.247 2.43526 135.64V163.626H27.9922C28.3841 163.626 28.692 163.934 28.692 164.327C28.692 164.692 28.3841 165 27.9922 165Z"
              fill="#D9E6F7"
            />
            <path
              d="M24.2132 160.317H1.73545C1.34356 160.317 1.03564 160.008 1.03564 159.616C1.03564 159.223 1.34356 158.915 1.73545 158.915H24.2132C24.6051 158.915 24.9131 159.223 24.9131 159.616C24.9131 160.008 24.6051 160.317 24.2132 160.317Z"
              fill="#D9E6F7"
            />
            <path
              d="M48.0069 64.8895C47.615 64.8895 47.3071 64.5811 47.3071 64.1885V57.4864C47.3071 57.4583 47.3071 57.4303 47.3071 57.4023C47.3071 57.3462 47.475 55.6076 46.1314 54.57C44.5638 53.3642 42.9683 51.7377 42.9683 48.8494C42.9683 48.4568 43.2762 48.1483 43.6681 48.1483C44.06 48.1483 44.3679 48.4568 44.3679 48.8494C44.3679 51.0086 45.4316 52.2425 46.9992 53.4483C48.8466 54.8785 48.7347 57.1218 48.7067 57.5144V64.1885C48.7067 64.5811 48.3988 64.8895 48.0069 64.8895Z"
              fill="#D9E6F7"
            />
            <path
              d="M52.3734 64.8895C51.9815 64.8895 51.6736 64.5811 51.6736 64.1885V52.8875C51.1417 53.5324 50.5259 54.0933 49.9101 54.57C48.5384 55.6076 48.7344 57.3742 48.7344 57.4023C48.7344 57.4303 48.7344 57.4583 48.7344 57.4864V64.1885C48.7344 64.5811 48.4265 64.8895 48.0346 64.8895C47.6427 64.8895 47.3348 64.5811 47.3348 64.1885V57.5144C47.3068 57.1499 47.1948 54.8785 49.0423 53.4483C50.6099 52.2425 51.6736 50.9806 51.6736 48.8494C51.6736 48.4568 51.9815 48.1483 52.3734 48.1483C52.7653 48.1483 53.0732 48.4568 53.0732 48.8494V64.1885C53.0732 64.5811 52.7653 64.8895 52.3734 64.8895Z"
              fill="#D9E6F7"
            />
            <path
              d="M63.1507 165H43.6681C43.2762 165 42.9683 164.692 42.9683 164.299C42.9683 163.906 43.2762 163.598 43.6681 163.598H62.4229V103.307H51.4499C51.058 103.307 50.7501 102.999 50.7501 102.606C50.7501 102.214 51.058 101.905 51.4499 101.905H63.1227C63.5146 101.905 63.8225 102.214 63.8225 102.606V164.299C63.8505 164.692 63.5426 165 63.1507 165Z"
              fill="#D9E6F7"
            />
            <path
              d="M51.4779 120.217H43.6681C43.2762 120.217 42.9683 119.908 42.9683 119.516C42.9683 119.123 43.2762 118.815 43.6681 118.815H50.7781V102.69C50.7221 102.326 50.2463 99.4375 48.2588 98.2036C45.7115 96.6332 42.9963 93.1841 42.9963 89.3423C42.9963 88.9497 43.3042 88.6412 43.6961 88.6412C44.088 88.6412 44.3959 88.9497 44.3959 89.3423C44.3959 92.6513 46.7752 95.6518 48.9866 97.0258C51.6739 98.7084 52.1497 102.41 52.1777 102.578C52.1777 102.606 52.1777 102.634 52.1777 102.662V119.544C52.1777 119.88 51.8698 120.217 51.4779 120.217Z"
              fill="#D9E6F7"
            />
            <path
              d="M63.1504 103.307C62.7585 103.307 62.4506 102.999 62.4506 102.606V97.0819L62.3107 96.9697C62.1987 96.8576 62.1147 96.7174 62.0867 96.5491L60.1273 82.8645C60.0713 82.472 60.3512 82.1355 60.7151 82.0794C61.107 82.0233 61.4429 82.3037 61.4989 82.6683L63.4304 96.1004L63.5983 96.2406C63.7383 96.3809 63.8223 96.5771 63.8223 96.7734V102.606C63.8502 102.999 63.5423 103.307 63.1504 103.307Z"
              fill="#D9E6F7"
            />
            <path
              d="M58.5039 97.4745C58.3079 97.4745 58.112 97.3904 57.972 97.2502C57.7201 96.9698 57.7481 96.5211 58.028 96.2687L58.196 96.1285L60.1274 82.6963C60.1834 82.3037 60.5473 82.0513 60.9112 82.1074C61.3031 82.1635 61.555 82.528 61.499 82.8926L59.5396 96.5772C59.5116 96.7454 59.4276 96.8856 59.3156 96.9978L58.9517 97.3343C58.8398 97.4184 58.6718 97.4745 58.5039 97.4745Z"
              fill="#D9E6F7"
            />
            <path
              d="M58.5036 103.307C58.1117 103.307 57.8038 102.999 57.8038 102.606V96.8296C57.7198 96.4089 57.4119 95.3433 56.796 95.0068C55.3684 94.2216 54.6406 91.8381 54.6406 89.9312C54.6406 89.5386 54.9485 89.2301 55.3404 89.2301C55.7323 89.2301 56.0402 89.5386 56.0402 89.9312C56.0402 91.5857 56.7121 93.3523 57.4678 93.801C58.8115 94.5581 59.1474 96.465 59.1754 96.6893C59.1754 96.7174 59.1754 96.7735 59.1754 96.8015V102.634C59.2034 102.999 58.8954 103.307 58.5036 103.307Z"
              fill="#D9E6F7"
            />
            <path
              d="M52.1495 97.4745C52.1215 97.4745 52.0655 97.4745 52.0375 97.4745C51.6456 97.4184 51.3937 97.0539 51.4497 96.6613C51.4777 96.4369 51.8136 94.5301 53.1572 93.7729C53.941 93.3243 54.5848 91.5576 54.5848 89.9031C54.5848 89.5105 54.8927 89.2021 55.2846 89.2021C55.6765 89.2021 55.9844 89.5105 55.9844 89.9031C55.9844 91.838 55.2566 94.1936 53.829 94.9787C53.1852 95.3433 52.8773 96.493 52.8213 96.8576C52.7933 97.2221 52.5134 97.4745 52.1495 97.4745Z"
              fill="#D9E6F7"
            />
            <path
              d="M52.1496 103.307C51.7577 103.307 51.4497 102.999 51.4497 102.606V96.8296C51.3658 96.4089 51.0579 95.3433 50.442 95.0068C49.0144 94.2216 48.2866 91.8381 48.2866 89.9312C48.2866 89.5386 48.5945 89.2301 48.9864 89.2301C49.3783 89.2301 49.6862 89.5386 49.6862 89.9312C49.6862 91.5857 50.3581 93.3523 51.1138 93.801C52.4575 94.5581 52.7934 96.465 52.8214 96.6893C52.8214 96.7174 52.8214 96.7735 52.8214 96.8015V102.634C52.8494 102.999 52.5414 103.307 52.1496 103.307Z"
              fill="#D9E6F7"
            />
            <path
              d="M46.2154 96.2126C46.1034 96.2126 46.0194 96.1846 45.9075 96.1285C45.5716 95.9602 45.4036 95.5396 45.5996 95.2031C45.9355 94.5301 46.3553 94.0534 46.8592 93.7729C47.643 93.3243 48.2868 91.5576 48.2868 89.9031C48.2868 89.5105 48.5947 89.2021 48.9866 89.2021C49.3785 89.2021 49.6864 89.5105 49.6864 89.9031C49.6864 91.838 48.9586 94.1936 47.531 94.9787C47.2791 95.119 47.0552 95.3994 46.8592 95.792C46.7472 96.0724 46.4953 96.2126 46.2154 96.2126Z"
              fill="#D9E6F7"
            />
            <path
              d="M63.1507 124.535H43.6681C43.2762 124.535 42.9683 124.227 42.9683 123.834C42.9683 123.442 43.2762 123.133 43.6681 123.133H63.1227C63.5146 123.133 63.8225 123.442 63.8225 123.834C63.8225 124.227 63.5426 124.535 63.1507 124.535Z"
              fill="#D9E6F7"
            />
            <path
              d="M64.83 136.341C64.4381 136.341 64.1302 136.032 64.1302 135.64V131.966C63.9623 132.163 63.8503 132.331 63.8503 132.443C63.8503 132.836 63.5424 133.144 63.1505 133.144C62.7586 133.144 62.4507 132.836 62.4507 132.443C62.4507 131.181 64.1302 130.088 64.4941 129.891C64.7181 129.751 64.97 129.751 65.1939 129.891C65.4179 130.003 65.5578 130.256 65.5578 130.508V135.64C65.5298 136.004 65.2219 136.341 64.83 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M71.7719 136.341C71.38 136.341 71.0721 136.032 71.0721 135.64V131.966C70.9042 132.163 70.7922 132.331 70.7922 132.443C70.7922 132.836 70.4843 133.144 70.0924 133.144C69.7005 133.144 69.3926 132.836 69.3926 132.443C69.3926 131.181 71.0721 130.088 71.436 129.891C71.6599 129.751 71.9119 129.751 72.1358 129.891C72.3598 130.003 72.4997 130.256 72.4997 130.508V135.64C72.4717 136.004 72.1638 136.341 71.7719 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M68.3849 136.341C67.993 136.341 67.6851 136.033 67.6851 135.64V130.508C67.6851 130.256 67.825 130.032 68.049 129.891C68.2729 129.779 68.5248 129.779 68.7488 129.891C69.0847 130.088 70.7922 131.181 70.7922 132.443C70.7922 132.836 70.4843 133.144 70.0924 133.144C69.7005 133.144 69.3926 132.836 69.3926 132.443C69.3926 132.331 69.2806 132.163 69.1127 131.966V135.64C69.0847 136.005 68.7768 136.341 68.3849 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M78.7143 136.341C78.3224 136.341 78.0145 136.032 78.0145 135.64V131.966C77.8465 132.163 77.7346 132.331 77.7346 132.443C77.7346 132.836 77.4267 133.144 77.0348 133.144C76.6429 133.144 76.335 132.836 76.335 132.443C76.335 131.181 78.0145 130.088 78.3784 129.891C78.6023 129.751 78.8543 129.751 79.0782 129.891C79.3021 130.003 79.4421 130.256 79.4421 130.508V135.64C79.4141 136.004 79.0782 136.341 78.7143 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M75.3272 136.341C74.9354 136.341 74.6274 136.033 74.6274 135.64V130.508C74.6274 130.256 74.7674 130.032 74.9913 129.891C75.2153 129.779 75.4672 129.779 75.6912 129.891C76.0271 130.088 77.7346 131.181 77.7346 132.443C77.7346 132.836 77.4267 133.144 77.0348 133.144C76.6429 133.144 76.335 132.836 76.335 132.443C76.335 132.331 76.223 132.163 76.055 131.966V135.64C76.0271 136.005 75.6911 136.341 75.3272 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M85.6283 136.341H63.1505C62.7586 136.341 62.4507 136.032 62.4507 135.64C62.4507 135.247 62.7586 134.939 63.1505 134.939H84.9285V131.966C84.7605 132.163 84.6486 132.331 84.6486 132.443C84.6486 132.836 84.3406 133.144 83.9488 133.144C83.5569 133.144 83.2489 132.836 83.2489 132.443C83.2489 131.181 84.9285 130.088 85.2924 129.891C85.5163 129.751 85.7682 129.751 85.9922 129.891C86.2161 130.003 86.3561 130.256 86.3561 130.508V135.64C86.3281 136.004 86.0202 136.341 85.6283 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M82.2413 136.341C81.8494 136.341 81.5415 136.032 81.5415 135.64V130.508C81.5415 130.256 81.6815 130.031 81.9054 129.891C82.1293 129.779 82.3813 129.779 82.6052 129.891C82.9411 130.088 84.6487 131.181 84.6487 132.443C84.6487 132.836 84.3407 133.144 83.9489 133.144C83.557 133.144 83.249 132.836 83.249 132.443C83.249 132.331 83.1371 132.163 82.9691 131.966V135.64C82.9411 136.004 82.6332 136.341 82.2413 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M85.6284 165H59.3717C58.9798 165 58.6719 164.692 58.6719 164.299C58.6719 163.906 58.9798 163.598 59.3717 163.598H84.9286V135.612C84.9286 135.219 85.2366 134.911 85.6284 134.911C86.0203 134.911 86.3283 135.219 86.3283 135.612V164.299C86.3283 164.692 86.0203 165 85.6284 165Z"
              fill="#D9E6F7"
            />
            <path
              d="M85.6283 160.317H63.1505C62.7586 160.317 62.4507 160.008 62.4507 159.616C62.4507 159.223 62.7586 158.915 63.1505 158.915H85.6283C86.0202 158.915 86.3281 159.223 86.3281 159.616C86.3281 160.008 86.0202 160.317 85.6283 160.317Z"
              fill="#D9E6F7"
            />
            <path
              d="M52.9052 86.1735H34.4303C34.0384 86.1735 33.7305 85.865 33.7305 85.4725C33.7305 85.0799 34.0384 84.7714 34.4303 84.7714H52.9052C53.2971 84.7714 53.605 85.0799 53.605 85.4725C53.605 85.865 53.2971 86.1735 52.9052 86.1735Z"
              fill="#D9E6F7"
            />
            <path
              d="M34.4303 95.6518C34.0384 95.6518 33.7305 95.3433 33.7305 94.9507V64.1885C33.7305 63.7959 34.0384 63.4874 34.4303 63.4874H43.6677C44.0596 63.4874 44.3675 63.7959 44.3675 64.1885C44.3675 64.5811 44.0596 64.8895 43.6677 64.8895H35.1301V94.9227C35.1301 95.3153 34.8222 95.6518 34.4303 95.6518Z"
              fill="#D9E6F7"
            />
            <path
              d="M52.9055 95.6518C52.5136 95.6518 52.2057 95.3433 52.2057 94.9507V64.8895H43.6681C43.2762 64.8895 42.9683 64.5811 42.9683 64.1885C42.9683 63.7959 43.2762 63.4874 43.6681 63.4874H52.9055C53.2974 63.4874 53.6053 63.7959 53.6053 64.1885V94.9227C53.6053 95.3153 53.2974 95.6518 52.9055 95.6518Z"
              fill="#D9E6F7"
            />
            <path
              d="M9.29318 49.4103C9.26519 49.4103 9.2372 49.4103 9.2372 49.4103C8.92928 49.3822 8.67735 49.1579 8.62137 48.8494L8.08951 46.1013L5.51422 45.0357C5.2343 44.9235 5.06635 44.6151 5.09434 44.3066C5.12233 43.9981 5.34627 43.7457 5.65418 43.6897L8.39743 43.1569L9.46113 40.577C9.5731 40.2966 9.88102 40.1283 10.1889 40.1564C10.4968 40.1844 10.7488 40.4087 10.8048 40.7172L11.3366 43.4653L13.9119 44.5309C14.1918 44.6431 14.3598 44.9516 14.3318 45.26C14.3038 45.5685 14.0799 45.8209 13.7719 45.877L11.0287 46.4098L9.96499 48.9896C9.82503 49.242 9.5731 49.4103 9.29318 49.4103ZM8.20148 44.6431L8.95727 44.9516C9.18121 45.0357 9.32117 45.232 9.37716 45.4563L9.54511 46.2695L9.85303 45.5124C9.937 45.2881 10.1329 45.1479 10.3569 45.0918L11.1687 44.9235L10.4129 44.6151C10.1889 44.5309 10.049 44.3346 9.99299 44.1103L9.82503 43.2971L9.51712 44.0542C9.43314 44.2786 9.2372 44.4188 9.01326 44.4748L8.20148 44.6431Z"
              fill="#D9E6F7"
            />
            <path
              d="M6.27021 68.535C6.24222 68.535 6.21423 68.535 6.21423 68.535C5.90631 68.507 5.65438 68.2826 5.5984 67.9742L4.73063 63.4033L0.447817 61.6366C0.167894 61.5245 -5.94277e-05 61.216 0.0279328 60.9075C0.0559251 60.5991 0.279863 60.3467 0.587778 60.2906L5.15052 59.4213L6.91403 55.1309C7.026 54.8504 7.33392 54.6822 7.64183 54.7102C7.94975 54.7383 8.20168 54.9626 8.25766 55.2711L9.12542 59.8419L13.4082 61.6086C13.6882 61.7208 13.8561 62.0292 13.8281 62.3377C13.8001 62.6461 13.5762 62.8985 13.2683 62.9546L8.67754 63.8239L6.91403 68.1144C6.83006 68.3667 6.55013 68.535 6.27021 68.535ZM3.13508 61.244L5.5984 62.2536C5.82233 62.3377 5.9623 62.534 6.01828 62.7583L6.52214 65.3662L7.52986 62.8985C7.61384 62.6742 7.80978 62.534 8.03372 62.4779L10.637 61.9731L8.17368 60.9636C7.94975 60.8795 7.80978 60.6832 7.7538 60.4589L7.27793 57.8509L6.27021 60.3186C6.18623 60.543 5.99029 60.6832 5.76635 60.7393L3.13508 61.244Z"
              fill="#D9E6F7"
            />
            <path
              d="M13.7441 33.0897C13.6881 33.0897 13.6041 33.0897 13.5481 33.0897C13.0443 33.0336 12.5684 32.7813 12.2605 32.3887C11.9246 31.9961 11.7846 31.4913 11.8406 30.9866C11.9526 29.921 12.8763 29.1638 13.94 29.276C15.0037 29.3882 15.7595 30.3136 15.6476 31.3792C15.5916 31.8839 15.3396 32.3606 14.9478 32.6691C14.6118 32.9495 14.192 33.0897 13.7441 33.0897ZM13.2402 31.1268C13.2402 31.267 13.2682 31.4072 13.3522 31.5194C13.4362 31.6315 13.5761 31.6876 13.6881 31.7157C13.8281 31.7437 13.968 31.6876 14.08 31.6035C14.192 31.5194 14.2479 31.3792 14.2759 31.267C14.3039 31.1548 14.22 30.9585 14.136 30.8464C14.052 30.7342 13.912 30.6781 13.8001 30.6501C13.5201 30.622 13.2682 30.8464 13.2402 31.1268Z"
              fill="#D9E6F7"
            />
            <path
              d="M18.8949 24.4247C18.8389 24.4247 18.7549 24.4247 18.6989 24.4247C17.6352 24.3126 16.8794 23.3872 16.9634 22.3216C17.0194 21.8168 17.2713 21.3681 17.6632 21.0316C18.0551 20.6951 18.559 20.5549 19.0628 20.611C19.5947 20.6671 20.0425 20.8914 20.3785 21.312C20.7144 21.7046 20.8543 22.2094 20.7983 22.7141C20.6864 23.6956 19.8466 24.4247 18.8949 24.4247ZM18.363 22.4618C18.335 22.7422 18.531 22.9946 18.8109 23.0226C19.0908 23.0507 19.3427 22.8544 19.3707 22.5459C19.3707 22.4057 19.3427 22.2655 19.2588 22.1813C19.2028 22.0692 19.0628 22.0131 18.9229 22.0131C18.7829 22.0131 18.6429 22.0411 18.531 22.1253C18.447 22.2094 18.391 22.3216 18.363 22.4618Z"
              fill="#D9E6F7"
            />
            <path
              d="M26.5088 17.3581C26.4528 17.3581 26.4248 17.3581 26.3689 17.3581C26.0329 17.302 25.697 17.1338 25.4731 16.8534C25.2492 16.601 25.1652 16.2364 25.1932 15.8999C25.2772 15.1708 25.921 14.638 26.6488 14.7222C27.3486 14.7782 27.8804 15.4232 27.8244 16.1523C27.7405 16.8253 27.1806 17.3581 26.5088 17.3581ZM26.5088 15.956C26.4808 15.956 26.4248 15.984 26.4248 16.0401C26.4248 16.0401 26.4248 16.0682 26.4528 16.0962C26.4808 16.1243 26.5088 16.1243 26.5088 16.1243C26.5088 16.1243 26.5368 16.1243 26.5648 16.0962C26.5928 16.0682 26.5928 16.0401 26.5928 16.0401C26.5928 16.0401 26.5928 16.0121 26.5648 15.984C26.5368 15.956 26.5088 15.956 26.5088 15.956Z"
              fill="#D9E6F7"
            />
            <path
              d="M29.7277 36.1463C28.9999 36.1463 28.4121 35.5575 28.4121 34.8284C28.4121 34.0993 28.9999 33.5104 29.7277 33.5104C30.4555 33.5104 31.0434 34.0993 31.0434 34.8284C31.0434 35.5575 30.4555 36.1463 29.7277 36.1463ZM29.7277 34.7442C29.6718 34.7442 29.6438 34.7723 29.6438 34.8284C29.6438 34.8844 29.6718 34.9125 29.7277 34.9125C29.7837 34.9125 29.8117 34.8844 29.8117 34.8284C29.8117 34.7723 29.7837 34.7442 29.7277 34.7442Z"
              fill="#D9E6F7"
            />
            <path
              d="M26.6486 45.0077C25.9208 45.0077 25.333 44.4188 25.333 43.6897C25.333 42.9606 25.9208 42.3717 26.6486 42.3717C27.3764 42.3717 27.9643 42.9606 27.9643 43.6897C27.9643 44.4188 27.3764 45.0077 26.6486 45.0077ZM26.6486 43.6056C26.5927 43.6056 26.5647 43.6336 26.5647 43.6897C26.5647 43.7458 26.5927 43.7738 26.6486 43.7738C26.7046 43.7738 26.7326 43.7458 26.7326 43.6897C26.7326 43.6336 26.6766 43.6056 26.6486 43.6056Z"
              fill="#D9E6F7"
            />
            <path
              d="M83.6129 43.4093C83.3889 43.4093 83.165 43.2971 83.025 43.1008L81.5135 40.7453L78.7142 40.7172C78.4063 40.7172 78.1264 40.5209 78.0424 40.2125C77.9584 39.904 78.0704 39.5955 78.3503 39.4273L80.7017 37.913L80.7297 35.1088C80.7297 34.8003 80.9256 34.5199 81.2335 34.4358C81.5414 34.3516 81.8494 34.4638 82.0173 34.7442L83.5289 37.0998L86.3281 37.1278C86.636 37.1278 86.916 37.3241 86.9999 37.6326C87.0839 37.941 86.9719 38.2495 86.72 38.4178L84.3687 39.932L84.3407 42.7362C84.3407 43.0447 84.1447 43.3251 83.8368 43.4093C83.7528 43.4093 83.6689 43.4093 83.6129 43.4093ZM81.0936 39.3431H81.9053C82.1293 39.3431 82.3532 39.4553 82.4932 39.6516L82.9411 40.3527V39.5394C82.9411 39.3151 83.053 39.0908 83.249 38.9506L83.9488 38.5019H83.137C82.9131 38.5019 82.6891 38.3897 82.5492 38.1934L82.1013 37.4924V38.3056C82.1013 38.5299 81.9893 38.7543 81.7934 38.8945L81.0936 39.3431Z"
              fill="#D9E6F7"
            />
            <path
              d="M76.0828 28.1824C75.2431 28.1824 74.4873 27.6496 74.2353 26.8083C73.9554 25.7988 74.5153 24.7332 75.551 24.4247C76.5587 24.1443 77.6224 24.7051 77.9303 25.7427C78.2102 26.7522 77.6504 27.8178 76.6147 28.1263C76.4187 28.1824 76.2508 28.1824 76.0828 28.1824ZM76.0828 25.7707C76.0268 25.7707 75.9988 25.7707 75.9429 25.7988C75.6629 25.8829 75.523 26.1633 75.579 26.4437C75.6629 26.7242 75.9429 26.8644 76.2228 26.8083C76.5027 26.7242 76.6427 26.4437 76.5867 26.1633C76.5027 25.9109 76.3068 25.7707 76.0828 25.7707Z"
              fill="#D9E6F7"
            />
            <path
              d="M69.4486 20.611C68.6088 20.611 67.853 20.0501 67.6011 19.2369C67.3211 18.2274 67.881 17.1618 68.9167 16.8533C69.4206 16.7131 69.9244 16.7692 70.3723 17.0216C70.8202 17.274 71.1561 17.6666 71.296 18.1713C71.576 19.1808 71.0161 20.2464 69.9804 20.5549C69.8125 20.5829 69.6165 20.611 69.4486 20.611ZM69.4486 18.1713C69.3926 18.1713 69.3646 18.1713 69.3086 18.1994C69.0287 18.2835 68.8887 18.5639 68.9447 18.8443C69.0287 19.1248 69.3086 19.265 69.5885 19.2089C69.8684 19.1248 70.0084 18.8443 69.9524 18.5639C69.9244 18.4237 69.8125 18.3115 69.7005 18.2554C69.6165 18.1994 69.5325 18.1713 69.4486 18.1713Z"
              fill="#D9E6F7"
            />
            <path
              d="M60.7711 15.0025C60.5472 15.0025 60.3232 14.9464 60.1273 14.8343C59.8194 14.666 59.5954 14.3856 59.4835 14.0491C59.2875 13.348 59.6794 12.6189 60.3792 12.4226C61.079 12.2264 61.8068 12.6189 62.0028 13.32C62.2547 14.0211 61.8628 14.7501 61.163 14.9464C61.0231 15.0025 60.9111 15.0025 60.7711 15.0025ZM60.8551 13.6565L60.6871 13.7126C60.6871 13.7687 60.7431 13.7687 60.7991 13.7687C60.7991 13.7687 60.8271 13.7687 60.8551 13.7406C60.8831 13.7126 60.8551 13.6845 60.8551 13.6565ZM60.7991 13.6004C60.7711 13.6004 60.7711 13.6004 60.7991 13.6004C60.7431 13.6285 60.7151 13.6565 60.7151 13.7126L60.8831 13.6565C60.8831 13.6565 60.8831 13.6285 60.8551 13.6004C60.7991 13.6004 60.7991 13.6004 60.7991 13.6004Z"
              fill="#D9E6F7"
            />
            <path
              d="M64.466 41.1098C64.298 41.1098 64.1581 41.0818 63.9901 41.0537C62.9544 40.8013 62.3386 39.7357 62.5905 38.7262C62.8424 37.6887 63.9061 37.0717 64.9138 37.3241C65.4177 37.4363 65.8376 37.7728 66.0895 38.1934C66.3414 38.6421 66.4254 39.1468 66.3135 39.6516C66.2015 40.1564 65.8656 40.577 65.4457 40.8294C65.1378 40.9976 64.8019 41.1098 64.466 41.1098ZM64.466 38.6701C64.242 38.6701 64.0181 38.8384 63.9621 39.0627C63.9061 39.3431 64.0741 39.6236 64.326 39.6796C64.466 39.7077 64.6059 39.6796 64.7179 39.6236C64.8299 39.5394 64.9138 39.4273 64.9418 39.3151C64.9698 39.1749 64.9418 39.0347 64.8859 38.9225C64.8019 38.8103 64.6899 38.7262 64.5779 38.6982C64.5499 38.6701 64.522 38.6701 64.466 38.6701Z"
              fill="#D9E6F7"
            />
            <path
              d="M59.5116 31.7998C59.3996 31.7998 59.2877 31.7998 59.1757 31.7718C58.4759 31.6035 58.028 30.8744 58.2239 30.1734C58.3079 29.8369 58.5319 29.5564 58.8398 29.3601C59.1477 29.1919 59.4836 29.1358 59.8475 29.2199C60.1834 29.3041 60.4633 29.5284 60.6593 29.8369C60.8272 30.1453 60.8832 30.4818 60.7992 30.8464C60.7153 31.1829 60.4913 31.4633 60.1834 31.6596C59.9595 31.7437 59.7355 31.7998 59.5116 31.7998ZM59.4276 30.4538C59.4276 30.4538 59.4276 30.4818 59.4276 30.5099C59.4556 30.5379 59.4836 30.5379 59.4836 30.5379C59.5116 30.5379 59.5676 30.5099 59.5676 30.4818C59.5676 30.4257 59.5396 30.3977 59.5116 30.3977C59.5116 30.3977 59.4836 30.3977 59.4556 30.3977C59.4276 30.4257 59.4276 30.4538 59.4276 30.4538Z"
              fill="#D9E6F7"
            />
            <path
              d="M10.7212 142.118H7.75401C7.36211 142.118 7.0542 141.809 7.0542 141.417C7.0542 141.024 7.36211 140.715 7.75401 140.715H10.7212C11.1131 140.715 11.421 141.024 11.421 141.417C11.421 141.809 11.1131 142.118 10.7212 142.118Z"
              fill="#D9E6F7"
            />
            <path
              d="M13.4643 145.399H11.8688C11.4769 145.399 11.1689 145.09 11.1689 144.698C11.1689 144.305 11.4769 143.996 11.8688 143.996H13.4363C13.8282 143.996 14.1361 144.305 14.1361 144.698C14.1361 145.09 13.8282 145.399 13.4643 145.399Z"
              fill="#D9E6F7"
            />
            <path
              d="M7.44609 155.886H5.87852C5.48663 155.886 5.17871 155.578 5.17871 155.185C5.17871 154.793 5.48663 154.484 5.87852 154.484H7.44609C7.83798 154.484 8.14589 154.793 8.14589 155.185C8.14589 155.578 7.83798 155.886 7.44609 155.886Z"
              fill="#D9E6F7"
            />
            <path
              d="M69.1687 143.996H67.6012C67.2093 143.996 66.9014 143.688 66.9014 143.295C66.9014 142.903 67.2093 142.594 67.6012 142.594H69.1687C69.5606 142.594 69.8685 142.903 69.8685 143.295C69.8685 143.688 69.5606 143.996 69.1687 143.996Z"
              fill="#D9E6F7"
            />
            <path
              d="M80.45 150.39H78.8824C78.4905 150.39 78.1826 150.082 78.1826 149.689C78.1826 149.296 78.4905 148.988 78.8824 148.988H80.45C80.8419 148.988 81.1498 149.296 81.1498 149.689C81.1498 150.082 80.8139 150.39 80.45 150.39Z"
              fill="#D9E6F7"
            />
            <path
              d="M78.1263 153.222H76.5587C76.1668 153.222 75.8589 152.914 75.8589 152.521C75.8589 152.129 76.1668 151.82 76.5587 151.82H78.1263C78.5181 151.82 78.8261 152.129 78.8261 152.521C78.8261 152.914 78.5181 153.222 78.1263 153.222Z"
              fill="#D9E6F7"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="87" height="165" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      name: "Русская литература",
      link: "ruslit",
      img: (
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M137.314 0.195465C117.55 7.22728 85.291 27.3636 80.5228 83.1182C80.5228 83.1227 80.5228 83.1318 80.5183 83.1364C80.1864 87.45 79.9683 93.7864 79.9683 98.9091C79.9683 99.85 80.7319 100.618 81.6774 100.618C82.6228 100.618 83.3864 99.85 83.3864 98.9091C83.3864 94.2546 83.5728 88.5864 83.8546 84.4091C86.8137 83 94.9319 78.4727 96.991 70.2955C99.6137 59.8 106.982 54.5182 114.786 48.9227C126.605 40.45 140 30.8455 140 1.59546C140 0.545465 139.091 -0.427263 137.314 0.195465ZM112.796 46.15C104.468 52.1182 96.6046 57.7591 93.6819 69.4637C92.2865 75 87.3683 78.5864 84.2137 80.3818C89.5955 29.7909 118.718 10.9636 136.55 4.12728C135.827 29.6409 124.123 38.0273 112.796 46.15Z"
              fill="#D9E6F7"
            />
            <path
              d="M74.6909 98.8045C69.7591 100.091 65.5955 101.714 62.3091 103.627C61.4955 104.1 61.2364 105.136 61.6955 105.964C62.1182 106.718 63.1955 107.064 64.0318 106.577C67.0455 104.818 70.9228 103.318 75.5546 102.114C76.4637 101.873 77.0137 100.941 76.7773 100.032C76.5364 99.1091 75.6091 98.5864 74.6909 98.8045Z"
              fill="#D9E6F7"
            />
            <path
              d="M76.841 86.3727C76.6092 85.4636 75.6728 84.9182 74.7638 85.1455C70.0547 86.3545 65.8728 87.9727 62.3365 89.9545C61.5138 90.4136 61.2501 91.4364 61.6819 92.2773C62.1501 93.1954 63.291 93.3273 64.0047 92.9318C67.2956 91.1136 71.1956 89.5909 75.6138 88.4545C76.5274 88.2182 77.0774 87.2864 76.841 86.3727Z"
              fill="#D9E6F7"
            />
            <path
              d="M78.2865 72.3409C78.0774 71.4273 77.1774 70.8318 76.232 71.0727C70.7911 72.3545 66.1092 74.1136 62.3183 76.3C61.5001 76.7727 61.2047 77.8227 61.6956 78.6364C62.2092 79.4909 63.2229 79.7273 64.0274 79.2636C67.532 77.25 71.9001 75.6045 77.0229 74.3954C77.9365 74.1818 78.5047 73.2591 78.2865 72.3409Z"
              fill="#D9E6F7"
            />
            <path
              d="M81.3047 58.05C81.1138 57.1318 80.1911 56.5545 79.2911 56.7182C72.4229 58.1182 66.7183 60.1136 62.3183 62.6455C61.5001 63.1182 61.232 64.1545 61.691 64.9773C62.241 65.9636 63.4092 65.9591 64.0274 65.6045C68.1229 63.2318 73.4729 61.3909 79.9729 60.0636C80.8956 59.8773 81.4911 58.9682 81.3047 58.05Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 62.6455C42.3863 58.0591 30.6363 55.4046 15.4363 54.7682C14.4363 54.7227 13.6999 55.4636 13.659 56.4C13.6226 57.3455 14.3545 58.1409 15.2954 58.1818C33.5363 58.9409 43.5136 62.6546 48.6636 65.6046C49.5908 66.1364 50.5999 65.6773 50.9954 64.9773C51.459 64.1546 51.1772 63.1182 50.3636 62.6455Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 76.3045C42.3863 71.7182 30.6363 69.0636 15.4363 68.4273C14.4363 68.3818 13.6999 69.1227 13.659 70.0591C13.6226 71.0046 14.3545 71.8 15.2954 71.8409C33.5363 72.6 43.5136 76.3136 48.6636 79.2636C49.5908 79.7955 50.5999 79.3364 50.9954 78.6364C51.459 77.8136 51.1772 76.7773 50.3636 76.3045Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 89.9636C42.3863 85.3773 30.6363 82.7227 15.4363 82.0864C14.4363 82.0409 13.6999 82.7818 13.659 83.7182C13.6226 84.6636 14.3545 85.4591 15.2954 85.5C33.5363 86.2591 43.5136 89.9727 48.6636 92.9227C49.5908 93.4545 50.5999 92.9955 50.9954 92.2955C51.459 91.4727 51.1772 90.4364 50.3636 89.9636Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 103.623C42.3863 99.0364 30.6363 96.3818 15.4363 95.7455C14.4363 95.7 13.6999 96.4409 13.659 97.3773C13.6226 98.3227 14.3545 99.1182 15.2954 99.1591C33.5363 99.9182 43.5136 103.632 48.6636 106.582C49.5908 107.114 50.5999 106.655 50.9954 105.955C51.459 105.132 51.1772 104.095 50.3636 103.623Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 117.282C42.3863 112.695 30.6363 110.041 15.4363 109.405C14.4363 109.359 13.6999 110.1 13.659 111.036C13.6226 111.982 14.3545 112.777 15.2954 112.818C33.5363 113.577 43.5136 117.291 48.6636 120.241C49.5908 120.773 50.5999 120.314 50.9954 119.614C51.459 118.791 51.1772 117.755 50.3636 117.282Z"
              fill="#D9E6F7"
            />
            <path
              d="M86.3045 43.6682C86.1727 42.7273 85.2591 42.0545 84.3727 42.2227C66.6454 44.7682 59.1773 50.4636 56.3455 53.5318C52.6364 49.5 40.9591 40.9727 8.53636 40.9727C7.59091 40.9727 6.82727 41.7409 6.82727 42.6818V47.8045H1.70909C0.763636 47.8045 0 48.5727 0 49.5136V138.295C0 139.236 0.763636 140.005 1.70909 140.005H110.977C111.923 140.005 112.686 139.236 112.686 138.295V58.3227C112.686 57.3818 111.923 56.6136 110.977 56.6136C110.032 56.6136 109.268 57.3818 109.268 58.3227V136.586H65.1864C71.7864 134.923 83.6 133.173 104.145 133.173C105.091 133.173 105.855 132.405 105.855 131.464V66.1045C105.855 65.1636 105.091 64.3954 104.145 64.3954C103.2 64.3954 102.436 65.1636 102.436 66.1045V129.764C74.6409 129.891 62.8136 133.177 58.0455 135.327V56.8364C59.1045 55.3273 64.95 48.4591 84.8545 45.6C85.7909 45.4636 86.4409 44.6045 86.3045 43.6682ZM3.41364 136.586V51.2227H6.82727V131.468C6.82727 132.409 7.59091 133.177 8.53636 133.177C29.0818 133.177 40.9045 134.927 47.5 136.591H3.41364V136.586ZM54.6364 135.323C49.8682 133.177 38.0455 129.886 10.2455 129.759V44.3954C44.5682 44.7273 53.3455 55 54.6364 56.8273V135.323Z"
              fill="#D9E6F7"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="140" height="140" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      name: "География",
      link: "geography",
      img: (
        <svg
          width="121"
          height="122"
          viewBox="0 0 121 122"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M111.675 62.9405C111.93 63.7892 112.176 64.596 112.431 65.4447C112.241 65.5892 112.046 65.7338 111.856 65.8737C110.728 65.841 110.89 65.5053 109.563 65.8737C108.184 66.2561 108.579 66.1255 107.952 65.3001C107.933 65.2675 107.91 65.2302 107.892 65.1975C109.15 64.4327 110.417 63.7053 111.675 62.9405ZM111.665 62.8985C110.375 63.584 109.085 64.2695 107.799 64.955C107.525 64.6193 107.39 64.0317 107.673 63.7333C107.613 63.6633 107.557 63.5887 107.502 63.5187C107.984 63.0384 110.333 61.6628 111.006 61.5322C111.043 61.4436 111.08 61.355 111.122 61.2711C111.354 61.5835 111.856 62.4788 111.665 62.8985ZM105.51 55.7171C107.047 55.2042 107.683 54.7891 109.057 54.1036C110.324 53.4694 111.494 53.0124 112.649 52.4575C113.559 52.0238 118.869 48.7316 119.31 48.8342C119.449 49.6502 119.589 50.4663 119.728 51.2824C118.335 52.3922 113.081 53.9451 112.617 54.999C114.993 53.8705 117.375 52.7373 119.751 51.6088C119.756 52.3083 119.765 53.0078 119.77 53.7073C118.558 54.6679 115.184 55.9083 113.698 56.9995C112.273 58.0441 108.481 59.4151 107.683 60.5996C111.693 58.4032 115.704 56.2114 119.714 54.0197C119.747 54.0523 119.779 54.0897 119.812 54.1223C119.83 54.5746 119.853 55.0223 119.872 55.4746C118.586 56.3933 116.112 56.5612 114.956 57.6011C113.726 58.7156 110.988 59.1353 111.076 60.954C111.094 60.9819 111.108 61.0146 111.127 61.0426C109.98 61.7001 108.834 62.3623 107.687 63.0198C107.673 62.9871 107.362 60.954 107.358 60.87C107.265 59.3218 106.736 60.0073 106.04 59.3778C105.863 58.142 105.691 56.9436 105.51 55.7171ZM34.0142 34.3688C34.4645 34.0377 35.4485 33.0211 35.8616 33.3102C35.7781 33.3475 35.6945 33.3848 35.611 33.4175C35.6713 33.4874 35.727 33.5574 35.7827 33.6273C35.2675 34.1636 34.6083 34.6952 34.0142 34.3688ZM82.3437 31.7294C82.5665 30.461 82.4133 31.0672 81.5453 30.6382C80.5195 30.1299 82.2323 30.0086 82.4179 30.004C83.5319 29.976 84.14 29.9107 85.3515 29.99C86.7858 30.0832 87.2082 29.7661 88.4753 29.8874C89.8075 30.0179 90.657 29.0853 91.4971 29.1226C91.3439 29.2905 91.1954 29.463 91.0422 29.6309C90.9819 29.9107 90.9215 30.1952 90.8612 30.4749C89.4548 30.6522 89.5569 31.0066 89.102 32.0325C88.0808 31.7993 88.0854 30.6148 87.171 30.9459C86.5212 31.7014 87.3149 32.8252 87.9276 33.4081C88.9581 34.3874 88.1319 35.4133 88.6935 36.9196C88.5589 37.0968 88.4243 37.274 88.2897 37.4512C88.4429 37.3952 88.6007 37.3439 88.7539 37.288C88.7817 37.5165 88.8096 37.7496 88.8374 37.9781C88.1829 39.2512 87.482 37.8942 86.874 37.5304C86.2009 37.6564 86.3077 38.5843 85.0637 37.1714C84.4371 36.4626 84.3814 36.0335 83.894 35.3107C83.2999 34.4294 83.6387 34.1822 82.896 33.4874C82.3947 33.0164 81.5174 33.0351 80.9465 32.3542C80.9326 32.3123 80.914 32.2703 80.9001 32.233C81.3875 32.0651 81.8656 31.8972 82.3437 31.7294ZM65.0022 29.2485C65.3736 29.2765 65.536 27.7376 66.9053 27.3179C67.286 27.635 67.6666 27.9521 68.0472 28.2739C68.024 28.2459 68.0054 28.2133 67.9822 28.1853C66.4597 28.9874 64.9373 29.7894 63.4148 30.5915C63.4008 30.2138 63.5262 30.2884 63.4844 29.9247C63.4566 29.6635 63.4287 29.4024 63.4008 29.1366C63.9346 29.1739 64.4684 29.2112 65.0022 29.2485ZM92.7504 26.348C92.7272 26.3946 92.6993 26.4412 92.6761 26.4925C93.2656 26.9449 93.8551 27.3972 94.4446 27.8495C93.7019 28.2273 92.9546 28.605 92.2119 28.9827C91.8638 28.6703 91.8916 28.3625 91.0747 28.563C90.6477 28.6703 90.1232 28.8801 89.8214 29.034C89.3294 29.2858 88.0112 29.4117 87.5749 29.104C89.3016 28.1853 91.0283 27.2666 92.7504 26.348ZM40.3548 27.5418C40.9628 27.4112 41.3156 26.7677 41.8401 26.4506C42.0722 26.3107 43.0005 26.5951 43.2837 27.0381C42.8102 27.2247 40.7632 27.9894 40.3548 27.5418ZM25.9284 27.7096C26.0769 27.705 26.2301 27.705 26.3786 27.7003C27.2188 27.0988 28.0543 26.4925 28.8944 25.891C28.9826 25.9236 29.0661 25.9609 29.1543 25.9936C29.1683 26.0542 29.1868 26.1195 29.2008 26.1801C29.4328 26.2081 29.6696 26.2407 29.9017 26.2734C28.6066 27.2013 27.3116 28.1293 26.0165 29.0527C25.9933 28.605 25.9608 28.1573 25.9284 27.7096ZM25.9284 27.7096C25.7195 27.3785 25.9562 26.8889 25.9701 26.5298C25.9887 26.0635 26.3786 26.0962 26.6525 25.9003C27.1352 25.9329 27.6179 25.9609 28.1007 25.9936C27.3766 26.5625 26.6525 27.1361 25.9284 27.7096ZM82.3669 22.1464C81.0904 24.7345 78.9738 22.7013 79.2941 25.4386C77.999 26.0868 76.704 26.7397 75.409 27.3879C75.395 27.3552 75.3857 27.3273 75.3765 27.2946C75.0051 26.7956 74.6384 26.3013 74.2671 25.8024C76.9639 24.5853 79.6654 23.3682 82.3669 22.1464ZM105.501 55.6891C104.814 55.5213 104.127 55.3534 103.44 55.1855C103.542 54.7798 104.926 54.542 105.441 54.1876C106.091 53.7399 106.866 53.0124 107.284 52.7933C108.37 52.2197 110.356 51.0539 111.303 50.4197C110.83 50.0979 107.785 52.1591 107.181 52.5694C106.685 52.9052 105.9 53.4881 105.288 53.9404C104.471 54.542 103.575 54.3741 103.046 55.1296C101.574 54.099 102.786 53.5067 102.182 52.3503C102.201 52.3969 102.219 52.4435 102.238 52.4902C102.814 52.257 103.389 52.0285 103.965 51.7953C103.937 51.7207 103.909 51.6508 103.881 51.5762C103.343 51.8 102.809 52.0192 102.271 52.243C101.644 50.7694 101.783 51.0072 100.251 50.3964C99.388 50.0513 98.3715 49.9813 97.6149 49.6316C97.8887 48.7782 102.66 47.1927 102.916 46.1808C101.013 47.2627 99.1095 48.3445 97.2064 49.4264C95.4797 48.1906 95.4704 49.2585 94.8113 48.8855C94.7927 48.8435 94.7695 48.8062 94.7463 48.7642C99.6479 46.1108 104.55 43.4574 109.451 40.8041C108.69 40.6035 104.763 43.173 103.802 43.6673C102.127 44.53 99.3416 45.7471 97.8702 46.6984C96.9325 47.3046 95.9949 47.8875 95.0202 48.4331C94.2775 48.8482 93.7483 49.93 92.4672 49.0953C91.8545 48.6989 90.8333 47.0342 89.659 47.7943C89.1205 48.1393 89.2505 48.573 88.5171 48.0974C88.2711 47.9342 87.4727 47.2673 87.2917 47.0295C87.2592 46.9735 87.2314 46.9222 87.1989 46.8663C89.9793 45.2481 92.7596 43.63 95.5447 42.0118C95.0341 41.7274 88.2293 46.0129 87.2267 46.6191C87.2546 46.5818 87.2824 46.5399 87.3103 46.5025C86.5723 45.9709 85.8296 45.4393 85.0915 44.9077C85.0915 44.8611 85.0915 44.8144 85.0915 44.7678C86.2148 44.1289 87.3381 43.4947 88.4568 42.8559C88.4382 42.8186 88.4196 42.7813 88.4011 42.7486C87.2082 43.3502 86.0153 43.9517 84.8223 44.558C84.5717 44.3108 84.3164 44.0637 84.0657 43.8165C84.7109 43.173 85.8435 42.716 85.2865 41.373C84.5067 39.4937 83.2627 39.7408 83.1188 39.5356C83.8476 39.1346 84.5717 38.7336 85.3004 38.3325C84.1446 37.6097 82.4875 41.746 78.7556 39.2512C78.7324 39.2046 78.7092 39.1626 78.6906 39.116C79.5308 38.6963 80.3756 38.2766 81.2157 37.8569C81.1879 37.7916 81.1554 37.731 81.1229 37.6657C80.227 38.104 79.3265 38.5424 78.4307 38.9807C78.4539 39.0367 78.4818 39.088 78.505 39.1439C77.3956 38.6077 74.0582 37.3532 73.7286 36.4626C73.7101 36.4253 73.6869 36.3833 73.6683 36.346C75.8592 35.1615 78.0454 33.9817 80.2363 32.7972C79.2987 32.6947 74.4342 35.6185 73.3805 36.2387C72.7028 35.3574 71.9323 35.9449 71.2407 35.847C70.9251 35.8004 70.4284 35.6325 70.0849 35.5299C69.5465 35.362 69.2633 35.5299 68.9245 35.46C73.0324 33.3522 77.1357 31.2397 81.2389 29.1319C81.2204 29.0946 81.2018 29.062 81.1879 29.0247C80.6309 28.8475 73.2784 33.0724 71.9184 33.66C70.9436 34.0843 68.0658 35.7864 67.2952 35.5812C66.1487 35.2734 63.8604 37.0595 62.751 35.8097C63.5772 35.3807 64.4035 34.947 65.2297 34.518C64.6077 34.5506 63.2105 35.2688 62.5886 35.5486C62.4911 35.5905 60.0542 35.917 59.9799 35.9076C59.9706 35.889 60.3791 33.5574 60.6065 33.3522C61.5906 32.4755 61.9294 31.1604 62.3333 30.8667C62.8578 30.9599 62.2451 31.3563 63.1966 30.918C63.5865 30.7361 63.8604 30.6895 64.2921 30.447C64.979 30.0646 65.7728 29.4257 66.4829 29.1552C67.0353 28.9407 68.2607 28.3765 68.8177 28.521C69.2076 28.6236 69.4351 28.9967 69.8482 29.0666C70.3263 29.1459 70.758 28.9547 71.2639 29.104C71.2314 29.1879 61.7484 33.2496 60.7365 34.5366C61.1032 34.7045 67.1467 31.1138 68.2746 30.7687C68.9848 30.5496 71.2036 29.533 71.9462 29.1646C73.0602 28.6096 75.3625 29.1133 76.1284 28.7962C76.639 28.2226 75.6318 28.2459 75.655 27.5464C76.2491 27.1034 77.8737 26.5578 78.5885 26.1941C79.4751 25.7371 80.9511 25.6065 80.7794 26.8842C79.113 27.7096 77.4513 28.535 75.7849 29.3604C75.8174 29.4257 75.8453 29.4863 75.8778 29.5516C77.5488 28.7402 79.2198 27.9288 80.8908 27.1174C81.3596 27.3972 81.095 27.7703 82.2926 27.7609C82.8542 27.7563 83.6062 28.2226 84.1168 27.9615C84.9152 27.5511 86.317 26.6931 87.12 26.1987C87.677 25.8583 93.4652 22.4868 93.4884 22.4868C93.9804 23.6479 92.8478 23.5034 92.4626 24.2215C92.0123 25.0749 92.4951 25.392 92.5508 26.0589C92.133 26.5998 86.4516 29.5516 85.8621 29.5143C84.8316 29.449 78.8252 28.6843 81.5314 31.1978C81.3875 31.3516 79.8093 31.6594 80.7237 32.8346C81.3132 33.5947 82.2694 33.5294 82.8635 34.0377C82.7614 34.1403 82.6547 34.2475 82.5525 34.3501C83.2766 34.3501 83.0446 35.1802 83.8615 36.0196C83.8336 36.0988 83.8058 36.1781 83.7733 36.2574C83.3927 36.4532 81.8099 37.0874 82.0884 37.4885C82.6964 37.1434 83.3045 36.803 83.9126 36.4579C84.5717 36.9149 85.4304 39.1626 86.7254 38.2952C87.431 38.5983 88.0158 39.2978 88.8328 38.9201C89.7286 38.5051 89.2552 37.6657 89.2227 36.9755C90.1139 36.4486 91.0051 35.9216 91.8916 35.3993C91.8684 35.3574 91.8452 35.3107 91.8174 35.2688C90.9262 35.7444 90.0303 36.2247 89.1391 36.7004C89.0927 36.6631 89.0463 36.6258 88.9952 36.5838C88.9488 35.9776 88.907 35.3714 88.8606 34.7651C88.8142 34.7185 88.7724 34.6719 88.726 34.6252C90.0814 33.7625 91.4321 32.9045 92.7875 32.0418C91.5528 32.7226 90.3227 33.4081 89.0881 34.089C88.5728 33.5667 87.1896 32.2097 87.4681 31.5522C88.0901 31.6454 88.5867 32.8998 89.4594 32.6154C89.6404 32.1537 89.8261 31.6921 90.0071 31.2304C90.2903 31.2071 90.578 31.1791 90.8612 31.1558C91.6317 30.4749 91.6921 29.4537 92.639 29.006C93.1217 28.7822 94.7324 27.8822 95.0851 27.9941C96.0321 28.3019 97.406 27.9381 97.7216 26.9122C98.209 25.3267 97.3456 25.35 96.408 24.8184C96.6308 24.3055 103.955 20.5469 104.735 20.2997C105.329 20.8174 105.924 21.335 106.518 21.8526C106.49 21.8713 106.467 21.8899 106.439 21.9039C105.371 22.4448 104.308 22.9858 103.241 23.5267C103.264 23.578 103.292 23.6293 103.315 23.6806C104.434 23.1723 105.557 22.6687 106.675 22.1604C106.708 22.2023 106.74 22.249 106.778 22.2909C107.59 23.3868 108.402 24.4827 109.21 25.5832C107.492 26.264 94.0268 33.5294 93.8969 34.2149C94.1568 34.4107 97.2296 32.247 97.7309 31.9579C99.0352 31.2024 100.353 30.5309 101.653 29.7755C103.241 28.8521 107.673 26.4086 109.224 25.8583C109.256 25.835 109.289 25.8164 109.321 25.793C109.683 26.3806 110.05 26.9682 110.412 27.5558C107.789 28.9221 105.167 30.2931 102.54 31.6594C102.572 31.7247 102.605 31.79 102.637 31.8553C105.306 30.4983 107.975 29.1459 110.644 27.7889C111.067 28.521 111.494 29.2485 111.916 29.9806C111.285 30.3957 108.476 31.5708 108.425 32.1397C109.651 31.5009 110.876 30.862 112.102 30.2231C112.505 30.8853 112.909 31.5522 113.318 32.2143C113.021 32.4289 112.724 32.6387 112.431 32.8532C112.459 32.8998 112.487 32.9511 112.515 32.9978C112.821 32.8532 113.127 32.7086 113.434 32.5641C113.889 33.3522 114.339 34.1356 114.794 34.9237C112.849 35.9496 110.909 36.9755 108.964 38.0014C108.996 38.0667 109.029 38.132 109.061 38.1973C111.011 37.218 112.956 36.2434 114.905 35.2641C115.184 35.8517 115.458 36.4393 115.736 37.0315C113.903 38.0387 112.074 39.046 110.24 40.0533C110.273 40.1139 110.305 40.1745 110.338 40.2351C112.162 39.2512 113.986 38.2719 115.806 37.288C116.01 37.8429 116.214 38.3932 116.418 38.9434C114.798 40.5569 105.069 44.5486 104.638 45.5979C108.606 43.5227 112.57 41.4476 116.539 39.3724C116.572 39.3678 116.604 39.3678 116.637 39.3631C117.008 40.6781 117.379 41.9978 117.751 43.3129C117.783 43.3642 117.816 43.4108 117.848 43.4621C113.592 45.8917 109.335 48.3212 105.079 50.7508C105.111 50.8067 105.139 50.8627 105.172 50.9186C109.433 48.5311 113.698 46.1435 117.959 43.7512C118.168 44.4927 118.382 45.2341 118.591 45.9756C117.31 46.8663 113.805 48.0881 112.793 49.6316C114.668 48.4751 116.544 47.3186 118.419 46.1575C118.442 46.1948 118.461 46.2321 118.484 46.2647C119.547 48.4704 119.296 48.5217 117.203 49.5803C115.991 50.1912 114.385 51.2917 113.243 51.7627C112.543 52.0565 105.589 55.5399 105.501 55.6891ZM97.4988 25.9936C96.9325 28.8288 93.1403 27.234 92.7643 25.2428C92.5136 23.9044 94.0268 24.7112 94.05 22.7619C94.0547 22.3003 94.7649 21.9272 95.1316 21.722C95.9949 21.2324 96.032 21.363 96.8072 21.6241C97.6195 23.8298 96.1156 23.7692 94.9877 24.5759C95.048 24.7298 95.1037 24.879 95.164 25.0329C96.111 25.0936 96.8211 25.5179 97.4988 25.9936ZM79.6979 25.2568C79.3498 24.4547 80.849 24.1283 81.4849 23.8858C82.5804 23.4661 82.8403 21.9692 83.5551 21.5029C85.6114 20.1505 89.3433 22.1044 88.9442 22.8412C88.3732 23.8904 88.0065 23.3495 86.7626 23.3355C85.1333 23.3169 85.2865 24.2448 84.9941 25.378C84.7759 26.2221 84.2653 27.677 83.1745 27.3785C80.0507 26.5158 82.2926 27.2899 80.4638 25.5832C80.4916 25.4386 80.5241 25.2894 80.552 25.1449C80.2688 25.1822 79.981 25.2195 79.6979 25.2568ZM31.2663 17.8562C31.2802 17.9588 31.2942 18.0614 31.3081 18.1686C30.9089 18.4111 30.5097 18.6536 30.1059 18.9008C29.9249 18.6816 30.0455 18.4158 30.2776 18.1593C30.2591 18.0707 30.2359 17.9774 30.2126 17.8888C30.5654 17.8795 30.9135 17.8702 31.2663 17.8562ZM37.8018 15.4873C37.8297 15.5152 37.8622 15.5432 37.89 15.5759C38.0943 15.7764 38.3031 15.9769 38.5074 16.1774C36.2608 17.637 34.0142 19.0966 31.7676 20.5562C31.7815 20.5935 31.7955 20.6355 31.8094 20.6728C31.5959 20.393 31.387 20.1085 31.1735 19.8241C33.3829 18.3785 35.5924 16.9329 37.8018 15.4873ZM85.8992 20.435C87.4217 19.3018 90.578 18.3085 92.5415 17.0728C93.8597 16.2427 97.2435 14.2935 98.7428 14.2562C99.3184 14.8018 99.8893 15.352 100.465 15.8976C99.9821 16.1914 95.8185 18.2106 95.8882 18.6163C95.9578 18.6163 99.0631 16.9982 99.3277 16.8443C100.901 15.9163 100.883 16.1121 102.247 17.7489C100.521 18.6396 98.7939 19.5303 97.0718 20.4256C97.0996 20.4863 97.1321 20.5422 97.16 20.6028C97.2389 20.6448 100.567 18.9008 100.971 18.6956C103.412 17.4505 102.916 18.3785 104.536 20.0526C102.071 21.3163 99.6062 22.5801 97.1461 23.8485C97.6056 22.9811 97.5824 21.3023 96.6819 20.6961C94.5978 20.8174 87.4217 26.3013 84.8363 27.2387C85.0266 26.5811 85.3886 26.0402 85.5371 25.2055C85.6996 24.2961 85.4814 24.1003 86.6233 23.9044C87.3706 23.7785 88.2804 24.2122 88.9024 23.965C89.478 23.7319 89.7054 22.7806 89.5058 22.2117C89.3016 22.0251 88.1783 21.2417 87.8302 21.0272C87.0086 20.5282 86.1823 20.5749 85.8992 20.435ZM37.0452 14.1163C37.2077 14.522 37.3702 14.9277 37.5373 15.3334C35.3464 16.7836 33.1601 18.2339 30.9692 19.6842C30.9785 19.7262 30.9878 19.7681 31.0017 19.8148C30.765 19.5769 30.5329 19.3391 30.2962 19.1013C30.8903 18.5417 31.6144 18.0847 32.3432 18.0334C34.0653 17.9075 33.4804 17.2779 33.5825 16.3127C34.7337 15.5805 35.8895 14.8484 37.0452 14.1163ZM73.0649 24.921C75.1351 23.8625 77.4467 22.6593 79.4565 21.5075C81.7542 20.1878 83.7362 19.437 85.9828 18.3039C87.1246 17.7256 87.8487 16.9515 88.8977 16.4292C89.7611 16.0049 91.1165 15.2354 91.9056 14.6898C92.9453 13.9717 94.1707 13.4914 95.3265 13.0064C95.9114 12.7593 96.4173 12.209 97.0068 12.7639C97.406 13.137 98.2276 13.622 98.39 13.9577C97.4756 14.0883 93.0846 16.35 92.1655 16.9748C90.397 18.1733 88.0158 19.092 86.0431 20.0946C84.6831 20.7894 83.9218 20.2438 82.7985 21.4749C82.52 21.7826 80.3059 22.8226 79.7907 23.0604C79.1919 23.3355 74.1139 25.6205 73.9654 25.6438C73.6637 25.4107 73.3666 25.1635 73.0649 24.921ZM27.1816 13.7665C27.2048 13.7992 27.2327 13.8318 27.2559 13.8644C27.3209 14.0183 26.62 15.1375 26.5364 15.4826C26.3786 16.1121 25.933 16.6391 25.376 16.6391C25.4781 16.4013 25.5849 16.1588 25.6916 15.9209C25.9284 15.7297 26.1697 15.5386 26.4065 15.3474C26.3879 15.3194 26.374 15.2914 26.3554 15.2681C26.0444 15.4639 25.738 15.6551 25.427 15.851C25.4317 15.9209 25.441 15.9909 25.4456 16.0608C25.311 16.1541 25.1718 16.252 25.0371 16.3453C25.1161 16.4386 25.195 16.5365 25.2739 16.6298C25.2553 16.6577 25.2321 16.6857 25.2135 16.7137C25.0232 16.5785 24.8376 16.4479 24.6472 16.3127C24.9257 15.8883 25.1114 15.1375 25.8355 14.9976C25.8819 14.8997 25.9237 14.8064 25.9701 14.7085C26.374 14.3961 26.7778 14.079 27.1816 13.7665ZM32.9698 15.6272C33.5965 14.9696 35.9544 13.0903 36.8178 13.1277C36.8549 13.3375 36.8874 13.552 36.9246 13.7619C35.7641 14.5453 34.5991 15.324 33.434 16.1075C33.2808 15.9443 33.123 15.7857 32.9698 15.6272ZM36.2979 11.8173C36.3304 11.8219 36.3629 11.8266 36.4 11.8313C36.5022 12.0738 36.5996 12.3162 36.7018 12.5634C35.3928 13.5194 34.0885 14.4753 32.7795 15.4313C32.5474 15.2914 32.3153 15.1515 32.0833 15.0069C33.4897 13.9437 34.8961 12.8805 36.2979 11.8173ZM28.3281 11.794C28.3885 12.6147 27.1909 13.6173 26.5271 13.7992C26.0212 14.2888 25.5152 14.7784 25.0047 15.2681C24.8979 15.0069 24.7865 14.7505 24.6797 14.4893C24.7308 14.3634 24.7819 14.2375 24.8329 14.1069C25.998 13.3375 27.163 12.5634 28.3281 11.794ZM30.8811 14.6665C31.5587 13.9484 34.9379 11.3416 35.8245 11.1131C35.9405 11.253 36.0519 11.3929 36.168 11.5328C35.6063 11.9945 35.04 12.4561 34.4784 12.9178C33.5825 13.6033 32.682 14.2841 31.7815 14.9696C31.4845 14.867 31.1828 14.7691 30.8811 14.6665ZM30.3287 13.5473C30.5793 13.0251 32.2271 11.5608 32.8027 11.2204C33.6104 10.7447 34.794 9.50897 35.6574 10.6235C34.0096 11.8686 32.3618 13.1137 30.714 14.3588C30.5886 14.0883 30.4587 13.8178 30.3287 13.5473ZM31.2477 12.0131C31.6098 11.5002 31.5077 11.0805 31.9811 10.6701C32.3664 10.339 32.5706 10.2877 33.0673 9.7468C33.3783 9.82607 33.6893 9.90535 34.0003 9.98462C33.9956 10.0266 33.9956 10.0686 33.991 10.1059C33.0766 10.7447 32.1622 11.3789 31.2477 12.0131ZM24.0345 12.6147C24.1877 13.1183 24.2481 16.4712 24.3363 16.5598C26.2347 18.4344 26.6803 15.907 27.2744 14.993C27.6783 14.3727 27.98 13.8644 28.342 13.2116C28.9826 12.0598 28.7505 12.1344 29.1218 11.2577C29.6139 10.0779 31.9579 9.19653 30.8764 11.6261C30.6258 12.1903 29.6696 13.1416 29.8135 13.7012C30.1337 14.9696 30.1709 15.0069 31.3313 15.3147C33.1508 15.7997 34.1581 17.679 31.4566 17.4225C30.7697 17.3572 30.0502 17.0774 29.7392 17.7909C29.3493 18.6956 29.2518 18.9474 30.0409 19.6049C30.8161 20.2484 32.3942 22.0671 32.9652 22.9158C33.9167 24.3241 31.4613 25.6438 30.3658 25.7651C29.5582 25.8537 26.671 24.7252 25.7009 25.9563C25.1485 26.6604 25.6406 28.7635 24.9861 30.4097C24.3548 32.0045 24.8236 33.8931 26.3183 34.7138C28.1424 35.7164 27.177 37.2786 29.7485 36.5185C30.895 36.1781 33.1555 35.0356 33.7589 34.9843C34.2834 34.9423 35.3139 34.9517 35.6899 34.6019C36.1355 34.1869 36.8456 33.3289 36.3165 32.732C35.3324 31.6268 34.2184 31.1371 34.5619 29.4397C35.8152 29.1413 36.4279 30.1578 38.0943 30.1625C40.1737 30.1672 38.8973 28.3065 38.9994 27.7889C39.4821 27.5744 39.5332 28.2599 40.2619 28.2599C40.7029 28.2599 40.9211 28.1433 41.4874 28.0967C42.2393 28.0361 43.5483 27.7843 43.8361 27.1034C43.8685 27.0614 43.8964 27.0195 43.9289 26.9775C43.4183 26.5811 42.9077 26.1894 42.3925 25.793C42.36 25.835 42.3321 25.877 42.2996 25.9143C42.1929 24.8744 44.6484 24.1936 44.7969 26.8096C44.8619 27.9475 45.1821 30.1066 46.5932 30.2558C47.3777 30.3397 47.7769 29.7801 48.6124 30.4143C49.1647 30.8294 49.5454 31.375 49.2297 32.0931C48.6077 33.4874 46.8671 31.8506 46.2497 33.9211C45.6138 36.0569 48.2457 35.8563 49.0719 36.1968C50.9796 36.9848 50.4876 34.7558 50.8497 33.604C51.6991 30.8667 52.3072 32.5781 53.7925 32.9138C56.1227 33.4408 53.5604 34.5273 56.1784 36.1595C57.7287 37.1247 58.9123 35.7631 58.9634 34.3128C59.0191 32.8579 57.9144 31.5661 59.8221 31.2724C61.702 30.9879 60.2816 29.0014 61.0104 28.0594C61.4745 27.4578 61.948 27.3972 62.1894 26.4879C62.375 25.7977 62.2358 25.434 62.6767 24.7998C63.308 23.8904 65.0626 22.9391 66.158 23.4195C66.9796 23.7785 67.5923 25.1635 68.8084 25.2055C70.4887 25.2661 69.8296 23.0604 72.6332 25.2474C74.7823 26.9262 73.9793 26.3433 75.5157 28.3765C74.1093 28.3485 73.051 28.4884 71.7095 28.5444C69.319 28.647 69.9781 28.4091 68.0518 27.621C67.4299 27.3692 66.3437 25.919 65.3596 27.7563C64.3199 29.6962 62.9088 27.719 62.9088 29.2112C62.9088 31.2071 62.2915 29.2392 61.2471 31.6827C60.458 33.5294 59.9985 32.1677 59.7293 34.4061C59.5668 35.7631 58.592 36.5045 61.1032 36.3646C62.997 36.2574 62.6814 36.7144 64.3756 36.8916C65.2807 36.9848 65.7403 36.0848 67.7084 36.262C69.0777 36.3833 68.9291 35.7677 70.7533 36.2854C72.6425 36.8216 71.8534 35.5905 73.7611 37.3999C74.4945 38.0947 75.7153 38.5051 76.639 38.8641C78.5514 39.6056 80.2224 41.2937 82.3761 40.5149C83.7083 40.0346 84.1539 40.1932 84.827 41.5455C85.4768 42.8559 83.9497 43.0191 83.4855 43.9517C84.075 44.4927 84.386 45.001 84.8873 45.5093C85.4118 46.0409 86.2334 46.1155 86.5955 46.7124C86.925 47.258 88.285 49.4544 89.1205 48.8855C91.3486 47.3606 90.6477 48.7829 92.2073 49.6642C93.3816 50.3311 94.4678 49.3098 95.786 49.4217C96.2224 49.459 98.1208 50.4057 99.2255 50.6388C100.962 51.0072 101.458 51.2637 101.709 53.0544C101.881 54.2762 101.616 55.7451 103.343 55.899C104.814 56.0296 105.297 55.7917 105.367 57.7363C105.496 61.2384 106.174 59.0933 106.689 60.6042C107.214 62.1384 106.875 62.8193 106.949 64.153C107 65.1229 107.581 66.797 108.783 66.5965C109.488 66.4799 109.855 66.0789 110.663 66.2328C111.452 66.382 111.846 66.5918 112.561 65.9996C113.698 65.0576 111.132 60.7674 112.654 59.5457C112.751 59.4664 116.047 57.3213 116.084 57.3073C116.655 57.0881 119.491 56.0482 119.9 55.9689C120.749 59.9514 120.596 66.6478 119.853 70.6675C118.79 76.4033 117.43 79.8588 115.342 85.2122C113.568 89.7589 110.305 94.6413 107.279 98.4418C105.315 100.909 103.505 102.266 101.217 104.304C99.0584 106.225 97.4153 108.146 95.0434 109.895C86.4748 116.209 76.0217 119.935 65.5035 121.11C55.2779 122.252 43.8918 119.552 34.6826 115.122C32.1529 113.905 29.9666 112.739 27.6365 111.149C25.5895 109.746 22.9345 108.127 21.0406 106.71C19.2025 105.334 17.1602 102.891 15.4242 101.212C13.3586 99.2206 12.1007 97.318 10.4483 95.0143C4.66006 86.9469 1.71257 75.895 0.747097 66.0369C0.278285 61.2477 0.463953 56.3933 1.01632 51.6228C1.75899 45.2015 2.13033 42.7533 4.95712 36.845C7.42651 31.7294 9.44565 28.2552 12.9826 23.7925C16.6496 19.1712 19.8338 16.5458 24.0345 12.6147ZM40.3455 13.9624C40.4662 12.4841 41.7334 12.2276 42.7824 11.4349C43.5947 10.8147 45.3725 9.65353 46.0362 9.63954C46.1801 9.82141 46.324 9.99861 46.4679 10.1805C46.2915 10.3344 46.1151 10.4929 45.9388 10.6468C46.1105 10.6841 46.2776 10.7168 46.4493 10.7541C46.5236 10.9826 46.6025 11.2111 46.6768 11.4396C44.4627 12.708 42.2486 13.9717 40.0391 15.2401C40.0159 15.1981 39.9927 15.1562 39.9695 15.1142C40.4755 14.009 40.1784 14.466 41.1299 13.6919C41.3759 13.4867 42.5596 12.9038 42.4343 12.6147C41.738 13.067 41.0417 13.5147 40.3455 13.9624ZM29.9156 8.77218C29.8924 8.82814 27.6829 10.6002 27.3719 10.81C26.9681 11.0805 25.1346 12.3722 24.7958 12.237C26.4993 11.0758 28.2074 9.924 29.9156 8.77218ZM24.573 13.8691C24.1227 12.6054 27.3626 11.1971 28.3699 10.2831C29.0058 9.70949 31.9997 7.8815 32.7842 7.88616C33.6104 8.76751 32.5521 10.3344 31.5912 10.5442C31.4891 10.2318 31.3824 9.91467 31.2802 9.60224C31.8001 9.2898 32.3153 8.98202 32.8352 8.66959C32.4453 8.36181 31.4752 9.36907 30.5701 9.37374C29.8181 9.3784 28.9315 10.3204 28.667 10.9126C28.3977 11.5095 24.87 13.9577 24.573 13.8691ZM45.3725 8.38513C45.521 8.66492 45.6742 8.94472 45.8227 9.22451C45.1125 9.93799 44.458 9.97996 43.6643 10.4043C42.9495 10.7867 42.4018 11.3603 41.673 11.8453C41.3899 11.2297 42.9727 10.6095 42.2486 9.66286C42.2857 9.49964 42.3229 9.33643 42.3554 9.17322C43.3672 8.57166 44.3745 7.96543 45.3864 7.35921C45.4282 7.34522 45.4653 7.3359 45.5071 7.32191C45.4607 7.68098 45.4189 8.03072 45.3725 8.38513ZM48.0275 7.61569C48.4406 7.7789 49.0023 7.25196 49.4247 7.04677C49.434 7.14004 49.4432 7.2333 49.4525 7.32657C49.3922 7.49445 49.3318 7.66232 49.2715 7.83486C48.6959 8.31984 48.4824 7.90481 47.9393 7.78357C47.9718 7.72761 47.9997 7.67165 48.0275 7.61569ZM29.9156 8.77218C30.8857 8.1473 31.8558 7.51776 32.8213 6.89289C32.7934 7.62502 30.4911 8.72088 29.9156 8.77218ZM42.7174 7.81155C42.8056 7.80688 42.8891 7.80222 42.9773 7.79756C43.1444 7.66699 43.3115 7.54108 43.4786 7.41051C44.0217 7.0561 44.5602 6.70169 45.1032 6.35195C45.6556 7.0561 44.8247 7.2846 44.212 7.78823C43.8732 8.06803 42.5921 8.76751 42.2439 8.77218C42.2625 8.70223 42.2811 8.62762 42.3043 8.55767C42.3786 8.52503 42.4482 8.49238 42.5225 8.45974C42.5828 8.24057 42.6524 8.02606 42.7174 7.81155ZM48.0275 7.61569C47.9068 7.50844 47.7815 7.40584 47.6562 7.29859C47.8883 7.08408 48.1157 6.87423 48.3432 6.65972C48.3339 6.63174 48.3246 6.60843 48.3107 6.58045C48.8677 6.23537 49.4247 5.89029 49.9817 5.54054C49.991 6.93019 48.4313 7.05144 48.0275 7.61569ZM42.7174 7.81155C42.6339 7.67631 42.8195 6.28666 42.8659 6.05816C43.098 4.92499 42.7638 5.17215 43.5947 4.26281C43.8639 4.47266 44.1378 4.68251 44.407 4.89235C44.4023 5.02292 44.3931 5.15816 44.3884 5.28873C43.9196 5.61049 43.4508 5.93226 42.9866 6.25402C43.0655 6.35195 43.1444 6.44988 43.2234 6.54781C43.6597 6.16542 44.1006 5.78303 44.537 5.40065C44.6669 5.62448 44.8015 5.85298 44.9315 6.07682C44.1888 6.6504 43.4554 7.2333 42.7174 7.81155ZM53.1334 3.52136C53.9039 4.58924 52.0844 5.23277 51.5181 4.65919C52.0612 4.28147 52.5996 3.89908 53.1334 3.52136ZM51.7316 3.45141C52.1958 3.2369 52.2515 2.71461 53.0545 2.90581C53.0359 3.81514 51.2303 4.68251 50.8125 4.36074C50.5015 4.63121 50.1952 4.89702 49.8842 5.16748C49.0998 5.76904 48.3199 6.3706 47.5401 6.97216C47.4519 6.95817 47.3638 6.94418 47.2756 6.92553C47.3313 6.72967 47.3823 6.52915 47.438 6.3333C48.8352 5.35401 50.3344 4.43069 51.7316 3.45141ZM51.6341 3.38612C50.2184 4.2768 48.8073 5.16282 47.3916 6.0535C47.2616 5.79236 47.1363 5.53588 47.0063 5.27474C48.7795 4.14623 50.5572 3.01772 52.3304 1.89388C52.4464 2.08974 52.5578 2.29026 52.6739 2.48611C52.3257 2.78456 51.9776 3.08767 51.6341 3.38612ZM46.0594 2.1457C46.5004 2.3229 46.6443 1.89854 46.881 2.21098C46.259 2.34622 46.6025 2.61202 46.0455 2.59337C46.0501 2.44414 46.0548 2.29492 46.0594 2.1457ZM49.5918 1.94984C49.6103 1.98248 49.6243 2.01046 49.6428 2.03844C49.2761 2.59803 46.9739 4.011 46.324 4.15556C46.3658 4.02032 46.4122 3.88509 46.454 3.74986C47.4984 3.1483 48.5427 2.5514 49.5918 1.94984ZM58.8334 1.55346C59.3254 1.58144 59.836 1.87523 60.3466 1.64673C61.3492 1.19439 61.1775 1.86124 61.8459 1.38559C62.0408 1.44155 62.2358 1.50217 62.4307 1.55813C61.4188 2.18767 60.4069 2.81254 59.3904 3.44208C59.4136 3.28353 59.4415 3.12498 59.4647 2.96643C59.3254 2.73793 59.1119 1.76797 58.6756 1.94051C58.7267 1.80994 58.7777 1.67937 58.8334 1.55346ZM49.3643 1.39958C49.4897 1.39025 49.6103 1.38092 49.7357 1.3716C49.8935 1.3716 50.0513 1.37626 50.2045 1.37626C49.6939 1.76331 49.0069 1.81461 48.2318 2.24829C47.8001 2.49078 46.7743 3.17161 46.3519 3.47006C45.7484 2.56539 48.0275 1.87989 48.3432 1.57678C48.4128 1.61875 48.4778 1.66072 48.5474 1.70269C48.8212 1.6001 49.0905 1.4975 49.3643 1.39958ZM73.0649 24.921C72.5125 24.5433 71.9648 24.1702 71.4124 23.7925C71.4171 23.7645 76.509 20.5096 77.0614 20.2251C78.0176 19.7401 79.3683 19.2039 80.176 18.5697C81.0393 17.8888 82.0837 17.9121 82.9703 17.1567C84.5392 15.8277 86.5073 14.7551 88.3222 13.7525C89.3109 13.2069 90.3924 13.1323 91.2279 12.4655C91.6224 12.1484 93.6091 10.8567 93.739 10.6888C92.5554 10.7867 91.9241 11.682 90.9447 12.3815C90.1278 12.9644 89.1252 13.0064 88.234 13.538C86.4144 14.6246 84.8363 15.422 83.0817 16.709C81.8331 17.623 79.1084 18.8448 77.6045 19.6422C75.8035 20.5982 74.1464 21.7687 72.4104 22.8319C71.5703 23.3448 70.2102 23.8438 69.6022 24.3101C68.451 25.1915 67.843 24.1842 67.2024 23.5547C65.6567 22.0485 63.0991 23.0137 62.078 24.6505C61.4699 25.6298 62.0594 26.3853 60.8943 27.3879C59.5575 28.5397 61.0382 28.5584 59.2326 29.5423C57.492 30.4936 55.7142 31.1744 54.0432 32.2796C54.0664 32.3263 54.0896 32.3776 54.1128 32.4242C56.2062 31.3796 58.2996 30.3304 60.393 29.2858C60.3559 29.6682 60.3188 30.0506 60.2816 30.433C59.409 31.0998 58.8798 30.2884 58.1743 31.5522C58.1047 33.2776 58.9309 34.2522 57.8262 35.5206C57.1485 36.2994 56.935 36.1455 56.1969 35.5579C55.1015 34.6952 55.8256 35.0682 55.3568 34.4014C56.1041 32.0045 53.9735 32.746 52.8549 31.9159C53.2541 30.6428 59.6132 28.2646 60.1656 27.4019C59.8546 27.2946 54.1546 30.4237 53.5047 30.8713C52.9524 31.2537 52.7945 31.748 52.154 31.6174C51.6434 31.5149 50.9843 31.6734 50.7893 32.1864C50.5015 32.9418 49.9817 35.5999 49.7078 35.8424C49.1322 35.861 46.9135 35.3854 46.765 34.6252C46.5747 33.6646 47.4055 33.0024 48.3896 33.5247C47.9904 33.8232 46.7046 34.2988 47.2152 34.7931C47.1967 34.7651 47.1781 34.7372 47.1595 34.7092C48.0507 34.075 48.9466 33.4408 49.8378 32.8112C49.7914 32.7879 49.7496 32.7646 49.7032 32.746C49.7914 32.2563 49.8796 31.7667 49.9724 31.277C51.8059 29.948 53.6393 28.6143 55.4728 27.2853C55.4264 27.22 55.3846 27.1594 55.3382 27.0941C53.4908 28.3998 51.6388 29.7008 49.7914 31.0066C49.5221 30.6848 49.2529 30.363 48.9837 30.0366C49.1554 29.7568 53.5465 26.8796 54.1871 26.4412C56.002 25.1868 57.673 24.2961 59.5668 22.9531C61.4467 21.6194 69.3283 17.3899 70.1174 16.4712C69.4583 16.2147 57.6358 24.0676 56.0066 25.0096C53.5697 26.4133 51.2906 28.3578 48.9094 29.7195C48.2921 30.0692 47.9579 29.0573 47.1085 29.6542C46.5282 30.0646 45.9248 29.5236 45.7624 28.978C44.8851 26.0309 46.0966 27.3646 47.0574 26.0868C47.0342 26.0449 47.0063 26.0029 46.9831 25.9609C46.4493 26.2873 45.9202 26.6184 45.3864 26.9449C45.4142 26.9309 45.4467 26.9122 45.4746 26.8982C45.3214 26.3247 45.1636 25.7557 45.0104 25.1822C44.9454 25.1868 44.8851 25.1915 44.8201 25.1961C44.8712 25.1075 44.9269 25.0236 44.9779 24.9397C43.5854 24.9024 41.8958 23.2516 41.8401 26.1288C41.1717 26.6231 40.4987 27.1174 39.8303 27.6117C39.1062 26.8936 38.2289 27.2247 38.3031 27.8216C38.3588 28.2972 38.9623 29.0713 38.577 29.4584C37.8807 30.1578 35.9219 29.1319 35.351 28.7869C38.9669 26.4692 42.5874 24.1469 46.208 21.8293C46.0362 21.694 38.8044 26.1288 38.1453 26.6184C37.0035 27.4672 35.4439 28.2413 34.2602 29.0247C32.7888 29.9993 35.3 32.1677 35.6481 32.7133C35.6713 32.7506 35.6945 32.7926 35.7177 32.8299C34.237 33.7206 32.7563 34.6113 31.2756 35.4973C30.3705 35.8004 28.3374 36.747 28.3281 35.5952C30.3287 34.2009 32.3293 32.8066 34.3252 31.4123C34.2788 31.3377 34.2277 31.2677 34.1813 31.1931C32.0879 32.634 29.9991 34.075 27.9057 35.5159C26.7499 34.3641 24.9304 33.562 25.2924 31.7387C25.2692 31.7014 25.246 31.6687 25.2228 31.6314C28.7412 29.1972 32.255 26.7583 35.7734 24.3241C35.727 24.2542 35.6806 24.1889 35.6342 24.1189C32.1993 26.4785 28.7644 28.8381 25.3342 31.1978C25.3621 29.0806 27.8732 28.1433 29.275 27.0335C30.4076 26.1335 33.6707 25.406 33.7636 23.6153C34.1859 23.3308 34.613 23.0511 35.0354 22.7666C34.9982 22.7153 34.9611 22.664 34.924 22.6127C34.5526 22.8738 34.1813 23.135 33.81 23.3961C33.2251 22.5801 32.6403 21.764 32.0554 20.9479C31.8837 20.4163 38.1221 16.7883 38.9855 16.238C41.4224 14.6898 43.9753 13.1463 46.5839 11.8219C46.816 11.9898 47.0435 12.1624 47.2756 12.3349C47.5912 12.0738 47.9068 11.8126 48.2225 11.5515C48.5195 11.6354 48.8212 11.7147 49.1183 11.7986C48.9466 12.0598 41.5848 16.3733 40.7679 16.7976C39.9649 17.2127 33.2019 21.6241 33.1369 21.9459C33.7264 21.8293 40.3455 17.3292 41.7241 16.6064C43.1862 15.8417 44.6298 14.7551 46.0826 14.009C47.4241 13.3188 49.0301 11.5095 50.5897 12.2323C49.1183 13.8551 35.4021 21.5728 35.3789 22.4588C35.4206 22.4681 43.2883 17.3899 44.1424 16.8536C45.637 15.9163 47.0342 15.0676 48.4638 14.0277C49.1879 13.5007 49.8749 13.0297 50.6454 12.5727C51.416 12.1111 51.8476 12.3582 52.8178 11.7054C53.4212 11.295 54.1778 10.1572 54.5491 10.1245C56.2805 9.97996 54.9901 9.95664 55.7142 8.85612C55.9973 8.4271 58.4203 5.75505 58.8056 5.47992C60.0031 4.62655 61.7345 3.31617 63.0574 2.77524C64.0368 2.3742 66.3623 -0.12997 67.3602 1.01253C66.9007 1.80062 57.6034 6.79962 57.0881 8.06803C57.3434 8.21725 59.3533 6.47319 59.7246 6.19806C60.523 5.61049 61.8088 5.04158 62.44 4.53328C63.2059 3.9224 64.2364 3.27887 65.1276 2.82653C66.1998 2.28559 67.0353 1.50683 67.959 0.993874C68.7759 1.12444 69.5975 1.25968 70.4145 1.39025C70.006 1.9545 63.9068 4.90168 64.2549 5.68977C66.418 4.29079 68.581 2.88715 70.744 1.48818C71.6492 1.62341 72.5543 1.76331 73.4594 1.89854C72.545 2.77524 70.6976 3.72188 69.5882 4.32344C68.2607 5.04624 67.8476 6.1048 66.1116 6.75299C62.946 7.94212 61.3028 9.47166 58.6802 11.3743C55.7095 13.5334 45.9387 18.7002 44.2399 20.878C45.029 20.5096 47.7444 18.5697 48.7145 17.9261C50.2787 16.8862 51.9405 15.9256 53.5465 14.9323C55.1525 13.9391 56.6797 13.095 58.2393 11.9945C59.8082 10.8893 61.1403 9.68617 62.7789 8.71156C64.3988 7.75093 65.8702 7.20066 67.4577 6.33796C68.3814 5.83433 68.6924 5.2421 69.5233 4.68251C70.2381 4.20219 71.0086 4.00167 71.7745 3.4141C74.3135 1.4602 74.2485 2.11305 77.0939 2.9198C77.6973 3.08767 81.6613 4.23017 81.8656 4.42603C80.2735 5.47059 69.6857 10.894 69.565 12.1344C71.1293 11.0105 71.8116 10.2971 73.6683 9.42503C74.2067 9.17322 77.3167 7.47113 77.6787 7.18667C78.7788 6.32397 80.5566 5.31671 81.8331 4.76178C83.1142 4.20685 85.1937 5.5079 86.2009 6.27734C85.5232 7.62968 72.1644 14.3214 71.4635 15.7857C76.5415 12.694 81.6149 9.60224 86.6929 6.5105C87.2082 6.75765 87.7234 7.0048 88.2386 7.25196C87.9694 7.68098 74.0861 16.28 72.8885 16.751C69.9085 17.9308 67.5737 20.337 64.9465 21.7733C63.9207 22.3329 57.6498 26.0309 57.5198 26.7397C57.5848 26.7117 65.8006 21.5402 66.0002 21.3816C67.1699 20.4256 68.8641 19.3251 70.1592 18.4951C71.677 17.5158 73.2738 16.9842 74.6941 16.0655C77.4838 14.2608 80.3431 12.5867 83.1699 10.8287C84.5763 9.95664 86.0245 9.1499 87.4078 8.2872C88.6842 7.48978 88.1551 7.15869 89.6636 8.10999C90.2995 8.51103 91.4089 8.88876 91.8127 9.28514C91.5064 9.49032 88.9349 10.6095 88.2757 10.8986C86.809 11.5421 86.2195 12.1764 84.9987 12.8992C84.4185 13.2442 84.1354 13.7525 83.634 14.1676C83.2766 14.466 82.3297 14.8997 81.8934 15.1935C81.4107 15.5199 78.8856 17.1754 78.6767 17.5064C80.1667 17.0215 84.0518 14.0463 85.3422 12.9131C86.9343 11.5142 90.2113 10.4043 92.1609 9.34109C93.5441 10.2691 94.932 11.2017 96.3198 12.1297C96.2873 12.181 96.2502 12.2323 96.2177 12.2836C95.2708 12.7686 94.1429 13.2955 93.1588 13.7199C92.1655 14.1489 91.3207 14.8997 90.4295 15.3054C88.3083 16.2753 86.8415 17.7116 84.516 18.6629C83.3416 19.1432 73.3387 24.2728 72.9488 24.6459C72.9813 24.7485 73.0231 24.8371 73.0649 24.921ZM52.3397 0.998537C52.27 1.09647 52.2051 1.18973 52.1354 1.28766C52.1494 1.42289 52.1633 1.55813 52.1772 1.6887C50.3669 2.86384 48.5613 4.03898 46.751 5.21878C46.6257 4.99494 46.5004 4.77577 46.3751 4.55193C46.4029 4.57059 46.4308 4.5939 46.4586 4.61256C48.0229 3.554 49.5871 2.49544 51.1514 1.43688C51.1885 1.32496 51.2257 1.21305 51.2628 1.10113C51.6248 1.06849 51.9823 1.03584 52.3397 0.998537ZM62.635 1.93119C62.4307 1.43688 63.9439 1.07315 64.1574 0.583507C64.5381 0.625477 64.9187 0.667446 65.2993 0.709415C65.3225 0.779364 65.3457 0.84465 65.3689 0.914598C63.0063 2.42083 60.6483 3.9224 58.2857 5.42396C58.2625 5.40065 58.2393 5.37733 58.2161 5.35401C58.6524 4.80375 59.0933 4.25349 59.5297 3.70322C60.5601 3.11565 61.5999 2.52342 62.635 1.93119ZM38.7348 15.5945C36.9292 14.5826 37.3191 10.8567 35.5228 9.924C33.6011 8.92606 33.6475 10.5862 33.3969 7.76958C33.2669 6.32397 34.7569 6.14677 35.857 5.55453C38.3171 4.23017 39.9927 3.97369 42.4482 3.16695C47.8883 1.3716 44.6112 3.13431 46.5375 5.48925C47.3591 6.49185 46.1476 6.54314 47.879 8.10999C49.6057 9.67218 49.8424 7.38719 50.1534 6.84159C50.9425 5.46127 49.9028 4.62655 51.7687 5.31671C53.4212 5.92759 54.02 4.51929 53.6347 3.12032C53.5001 2.62601 51.9823 0.970557 53.7275 0.863303C54.7905 0.798017 55.8581 0.728068 56.9164 0.64413C58.8056 0.494906 61.2935 0.499569 63.2059 0.588171C63.2105 0.658119 63.2152 0.723405 63.2245 0.793354C61.6788 0.919262 60.1331 1.04517 58.592 1.17108C58.5596 1.12911 58.5271 1.08714 58.4992 1.04517C58.3089 1.42289 58.1186 1.80528 57.9236 2.183C57.9608 2.20166 57.9979 2.22497 58.0397 2.24362C58.787 2.79855 59.3301 2.30425 58.5828 3.77783C58.1511 4.63587 57.9654 4.86904 57.5616 5.83899C57.0649 7.01879 55.1711 7.9701 55.0272 9.15923C54.9019 10.2271 54.3402 8.89342 53.6115 10.0872C53.1009 10.9266 52.6692 11.1411 51.8384 11.5701C50.5201 12.2556 48.9419 10.6188 47.7119 11.2857C47.4798 11.1971 47.2477 11.1038 47.0203 11.0152C46.7743 10.3997 47.1363 10.4929 46.6675 9.77011C46.5654 9.61623 46.1291 8.94938 46.078 8.82814C46.0687 8.80948 45.9527 7.14937 45.8877 6.83693C45.7159 6.03485 44.3327 3.87576 43.2976 3.75918C43.0238 4.38872 42.7499 3.69856 42.5689 5.00427C42.4946 5.54521 42.4807 6.0162 42.3786 6.54314C42.0444 8.25922 41.7287 7.85352 41.9237 9.88203C41.9794 10.4789 40.4523 12.181 40.0995 12.8292C39.315 14.2562 40.183 14.6012 38.7348 15.5945ZM59.1258 0.0239173C41.7148 0.499569 27.7386 6.88356 15.7862 19.7635C3.90346 32.5687 -0.696474 45.4393 0.0833329 62.9265C0.816723 79.4064 6.39605 94.3102 18.7476 105.418C23.9974 110.137 33.5779 115.612 40.1598 118.097C46.4029 120.457 56.4661 122.392 63.1224 121.935C69.5929 121.492 79.8371 118.881 85.6486 116.036C93.507 112.194 99.0677 107.563 105.237 101.417C115.397 91.2884 121.84 74.1883 120.907 59.7788C120.359 51.3243 119.552 45.3834 116.465 37.3766C113.926 30.7921 108.026 22.3982 102.962 17.5484C100.182 14.8857 97.1275 11.6634 93.8412 9.71415C90.5827 7.7789 86.2148 5.37267 82.7104 4.03898C75.3486 1.23636 66.975 -0.195256 59.1258 0.0239173ZM73.5662 76.394C73.2645 76.6551 72.9674 76.9163 72.6657 77.1774C72.5311 77.2567 72.3965 77.336 72.2665 77.4152C71.937 77.1961 71.6027 76.9816 71.2732 76.7624C72.1133 76.31 72.9581 75.8624 73.7983 75.41C73.8679 75.4847 73.9422 75.5593 74.0118 75.6339C73.8633 75.881 73.7147 76.1375 73.5662 76.394ZM52.0101 63.7612C51.9219 63.7099 51.8384 63.654 51.7548 63.6027C50.4134 64.7592 41.4549 70.3457 40.2527 70.2991C39.5471 67.8369 38.7905 68.4012 41.065 66.9882C42.3461 66.1908 43.7989 65.496 45.0058 64.7265C46.2544 63.9291 47.6794 63.3649 48.8398 62.5674C50.0188 61.756 51.5274 60.7534 52.7435 60.0027C55.1061 58.5384 57.543 56.3886 60.0078 55.2461C61.6556 54.4814 62.2033 54.2948 63.7629 53.2736C64.9465 52.4948 66.3948 51.5062 67.5691 50.7881C67.3092 50.6528 64.436 52.5228 63.9207 52.8632C62.5236 53.7772 61.6695 54.3321 60.096 54.929C57.6173 55.871 55.004 58.3938 52.6599 59.7415C50.0142 61.2664 47.6608 63.0198 44.8247 64.554C43.4369 65.3048 42.1558 66.0835 40.7957 66.8623C40.0995 67.2633 39.5053 68.0514 38.8137 67.3519C37.825 66.354 37.4723 66.6105 37.2216 66.3633C39.7003 64.7778 42.5874 63.4395 45.1404 61.9379C47.8697 60.3291 50.1441 58.3565 52.7853 56.7664C54.0339 56.0202 55.2639 55.4327 56.559 54.6399C57.9236 53.8052 59.1073 52.9705 60.5369 52.2197C62.1708 51.3617 62.8299 50.8907 64.2967 49.8881C65.2158 49.2632 67.04 48.2466 67.778 48.8062C69.7321 50.9606 68.4603 49.7528 68.2236 52.4902C68.0797 54.1363 69.3933 54.9897 69.89 56.2487C70.3773 57.4845 70.9158 58.9394 72.0483 59.6389C73.7379 60.6788 74.216 60.3664 75.6132 61.1405C75.9752 61.341 82.2601 57.4285 83.1838 56.8783C85.76 55.3534 88.6657 54.57 91.0283 52.6394C91.0144 52.6394 91.0051 52.6394 90.9911 52.6394C90.7359 52.5321 87.7652 54.4207 87.2407 54.6912C86.0802 55.2788 84.6599 55.8151 83.3834 56.4493C82.1533 57.0601 80.9465 58.0814 79.6561 58.7249C78.0362 59.5363 77.3724 59.9653 75.8267 60.9773C75.8592 60.1239 75.8917 59.2705 75.9242 58.4171C77.5813 57.4798 79.243 56.5472 80.9001 55.6099C80.8722 55.5586 80.8444 55.5073 80.8165 55.4607C79.1594 56.37 77.5023 57.2747 75.8453 58.184C75.3625 57.6757 74.8751 57.1674 74.3878 56.6591C76.0263 55.2368 79.0156 53.7679 80.979 52.7653C81.9723 52.257 83.3277 51.5109 84.2514 50.9C86.2009 49.6083 86.2845 50.6388 87.7837 50.6528C89.4826 50.6668 88.4011 49.3145 91.3486 50.6155C92.3233 51.0446 92.3512 52.4109 92.3605 53.3669C92.3697 54.556 92.379 55.2508 90.8287 55.1482C89.3294 55.0456 90.1417 55.6425 89.4362 55.9969C88.9813 56.2254 88.0576 56.6964 87.8673 57.1627C88.4429 56.855 89.0184 56.5472 89.594 56.2441C90.7544 57.6431 86.3773 56.9949 85.5743 60.0073C85.0591 61.9379 84.5763 61.0799 83.518 61.3737C82.7939 61.5742 81.3178 61.7607 80.7515 61.0006C82.6036 60.0073 84.451 59.0187 86.303 58.0254C86.2705 57.9602 86.238 57.8995 86.2056 57.8342C84.2793 58.8602 82.3483 59.8861 80.422 60.912C80.4359 60.954 80.4452 61.0006 80.4591 61.0426C79.424 60.9633 78.3889 60.884 77.3492 60.8094C76.7875 62.4089 78.556 62.1804 77.1032 63.2623C76.7318 63.5421 75.5714 64.582 76.6622 65.1136C77.4559 65.5006 79.7304 63.9757 82.7893 66.1069C82.5943 66.9462 82.3251 68.0701 81.3364 68.3965C80.6123 68.6343 80.733 68.9561 80.4823 69.4318C80.2363 69.9027 79.5493 69.7395 79.3126 70.2105C78.5885 71.6328 79.8603 71.3623 78.0037 72.5235C77.5627 72.7986 75.2233 74.1929 75.1861 74.51C76.3976 73.8105 77.6091 73.1157 78.8206 72.4162C78.8717 72.4535 78.9274 72.4955 78.9784 72.5375C78.6581 73.3815 78.3379 74.2256 78.0222 75.0696C76.5322 75.2748 75.3115 74.1976 73.7194 75.2375C73.1252 75.6292 69.9503 77.0142 69.825 77.1308C69.4583 77.4852 69.5558 78.5997 69.7043 79.0893C69.9224 79.8075 70.4795 79.4064 70.7997 81.0339C71.0365 82.2184 72.8885 83.6174 72.7864 84.3588C71.3103 84.6573 70.2056 85.492 70.6094 87.1847C71.0597 89.064 70.2613 89.1713 70.1499 90.6822C69.9271 93.7506 70.0571 92.8133 67.7641 93.9978C65.7635 95.0283 67.2674 96.6045 68.5996 97.2434C68.7156 97.6444 68.827 98.0501 68.943 98.4512C68.2189 99.3139 65.1879 99.2906 64.111 100.284C63.2987 101.03 61.4467 102.634 62.324 104.042C61.6416 104.616 60.9547 105.19 60.2723 105.758C60.5416 106.085 61.883 104.7 62.2358 104.434C62.9413 105.208 62.8346 107.293 62.2868 107.857C61.9991 108.155 59.4879 109.405 58.9123 109.722C56.8468 109.806 57.0788 109.484 56.002 111.182C55.7931 111.513 54.7533 111.541 54.6095 112.343C54.5305 112.786 54.3495 113.784 53.9643 114.026C53.9086 113.933 52.9431 111.872 52.9663 111.681C53.1148 110.254 53.0916 110.804 54.5213 109.783C55.1525 109.335 58.9587 107.041 58.8288 106.747C58.8102 106.719 58.7916 106.686 58.7731 106.658C56.805 108.006 54.8369 109.354 52.8688 110.702C52.4046 109.965 52.3118 108.538 53.152 107.824C53.463 107.558 55.8117 106.076 56.0994 105.982C57.0185 105.698 61.5627 102.975 62.0362 102.196C58.8984 104.075 55.7606 105.959 52.6228 107.838C52.6507 107.885 52.6785 107.932 52.7064 107.978C52.516 107.796 52.2283 105.647 51.5645 104.695C51.0493 103.963 51.0678 103.432 50.7893 102.984C50.3716 102.317 49.666 102.55 49.0858 102.019C49.0673 101.986 49.0441 101.949 49.0255 101.916C50.0931 101.272 51.1653 100.624 52.2329 99.9807C52.2051 99.9341 52.1818 99.8874 52.154 99.8408C50.9936 100.508 49.8331 101.175 48.6727 101.846C48.5427 101.324 48.4174 100.806 48.2875 100.284C48.3385 100.302 48.3896 100.326 48.4406 100.344C53.2773 96.9822 58.1139 93.6247 62.9506 90.2625C62.9042 90.1972 62.8624 90.1319 62.816 90.062C58.0397 93.3822 53.268 96.6978 48.4963 100.018C48.4731 99.9807 48.4453 99.9434 48.4221 99.9108C48.5474 99.16 48.6449 97.9429 48.5381 97.4299C48.4499 96.9916 48.1714 96.5066 48.0275 95.989C47.9161 95.5833 47.3777 95.3501 47.373 94.6366C49.0812 93.4801 50.7893 92.319 52.4928 91.1625C51.8755 90.8174 48.1157 93.9465 47.0528 94.4501C46.8392 93.7506 46.6304 93.0511 46.4168 92.3516C46.4122 92.3143 46.4076 92.277 46.4029 92.2397C50.302 89.8335 54.1963 87.4226 58.0954 85.0163C58.049 84.9371 57.9979 84.8578 57.9515 84.7785C54.1174 87.1801 50.2834 89.5817 46.4493 91.9832C46.2219 91.4376 47.1363 89.6843 47.4334 89.134C48.2735 87.5718 47.1827 88.2993 48.9466 87.1055C50.6919 85.921 52.7528 85.0163 54.4377 83.9205C55.6956 83.1044 64.552 77.9422 64.8166 77.5178C64.7934 77.4805 64.7748 77.4432 64.7516 77.4059C59.0794 80.8194 53.4073 84.2329 47.7351 87.6464C47.2848 87.3386 47.373 85.3941 47.6562 84.7972C47.9997 84.0697 49.5918 83.1231 50.3159 82.736C52.8085 81.4023 54.4841 79.9241 56.7632 78.4925C58.8381 77.1867 61.0243 75.9556 63.0434 74.5753C64.2224 73.7686 68.7202 71.9266 69.3608 70.9846C67.9404 71.4649 59.8917 76.0769 58.5828 77.0841C57.0788 78.2406 54.9297 79.2432 53.4537 80.5303C52.0055 81.7894 49.3968 82.694 48.2271 83.8599C48.0693 83.3562 47.9068 82.8526 47.749 82.349C47.7119 82.3723 47.6794 82.3956 47.6423 82.4189C46.8067 81.4536 45.9666 80.4837 45.1311 79.5184C45.1404 79.4438 45.1497 79.3738 45.1543 79.2992C53.1287 74.58 61.1078 69.8608 69.0823 65.1416C69.0405 65.067 68.9941 64.9923 68.9523 64.9177C61.0197 69.6369 53.087 74.3515 45.1543 79.0707C44.834 78.2686 44.5137 77.4712 44.1981 76.6691C44.226 76.6458 44.2585 76.6271 44.2863 76.6038C49.5871 73.5634 54.8926 70.5276 60.1981 67.4872C60.1563 67.4126 60.1145 67.338 60.0727 67.2633C54.7534 70.3224 49.434 73.3815 44.1099 76.4406C43.9289 75.881 43.7525 75.3261 43.5715 74.7665C44.0403 73.8525 47.6469 71.9825 48.6681 71.4509C49.5686 70.98 50.4969 70.882 51.3649 70.2385C52.4046 69.4691 52.9384 69.1659 54.0524 68.5411C54.9019 68.0607 64.3292 62.4136 64.3385 62.3949C64.1807 62.0218 62.3101 63.4255 61.9109 63.626C61.2517 63.9618 59.7478 64.6939 59.1955 65.1043C57.9933 65.9856 55.4821 67.4219 54.1128 68.2193C52.1865 69.3431 50.7104 70.2805 48.6634 71.2411C47.9208 71.5908 46.57 72.1924 45.9434 72.6307C45.5164 72.9292 43.8036 74.2302 43.5111 74.3422C43.2512 73.6613 42.9913 72.9851 42.7313 72.3043C44.031 70.8121 46.5515 70.0753 48.2085 69.0634C48.8352 68.681 53.3608 65.6638 53.4862 65.3561C53.2123 65.1555 48.682 68.4758 48.0507 68.8675C47.2013 69.3898 46.0966 69.7955 45.2611 70.3038C44.9315 70.5043 42.5317 72.0572 42.5317 72.0478C42.0072 71.6048 41.4827 71.1572 40.9582 70.7141C44.6391 68.3825 48.3246 66.0742 52.0101 63.7612ZM73.5337 54.3508C75.5993 52.8213 77.2842 52.1404 79.308 50.8487C79.7907 50.5409 81.782 49.2818 82.1487 49.1046C82.845 48.7689 82.7661 49.2212 83.3509 49.5896C83.5923 49.7435 84.6459 50.2844 84.7295 50.3964C81.1786 52.3782 77.6323 54.3555 74.0814 56.3373C74.0536 56.3793 74.0257 56.4259 73.9979 56.4679C73.8447 55.7638 73.6869 55.0596 73.5337 54.3508ZM72.5357 52.0145C72.6703 52.4202 72.8467 52.8166 72.9303 53.2409C73.1206 54.1783 72.8049 54.3788 73.1206 55.1902C73.5291 56.2347 73.1763 56.2907 74.2114 57.2C74.7452 57.671 75.6364 58.4078 75.576 59.1493C75.4925 60.1892 75.6782 60.7161 74.5874 60.1752C73.8076 59.7881 73.413 59.942 72.4939 59.3451C70.7208 58.1887 70.9529 57.1534 69.9364 55.4746C69.4676 54.7005 69.0544 54.3415 68.7806 53.3902C68.4092 52.0891 68.8734 52.2057 68.9245 51.2078C68.9663 50.4197 69.514 49.8274 69.1287 49.2585C68.7899 48.7642 67.5041 48.7269 67.8755 47.6823C67.9172 47.5658 69.2958 46.0689 69.4583 46.0036C69.9457 45.817 70.5444 47.1601 70.6558 47.5285C70.9065 48.3678 71.5285 49.1513 71.5749 49.8321C71.677 51.2078 72.364 51.4922 72.5357 52.0145ZM72.5914 51.0725C72.4522 50.5036 71.3289 48.3912 71.8859 47.9575C72.5682 47.4259 74.411 46.3766 75.2326 45.9523C76.1052 45.5046 81.717 42.273 82.0373 42.231C82.6732 43.0844 82.7614 43.1683 82.3622 44.4554C82.0791 45.3694 82.2972 44.8424 81.8006 45.6585C81.5406 46.0875 81.0068 46.4652 80.9976 46.5165C81.7634 46.6471 81.898 46.1015 82.028 47.4399C82.1116 48.2839 82.7196 48.4798 82.1951 48.8342C81.2575 49.4637 80.1899 50.0793 79.2151 50.6622C78.6721 50.9886 73.5662 53.9125 73.478 53.9358C73.594 53.9031 72.9442 51.5202 72.8978 51.3523C72.8467 51.3243 72.791 51.2964 72.74 51.2637C75.1119 49.8321 77.4838 48.4005 79.8557 46.9689C78.6721 47.0015 73.8911 50.2005 72.5914 51.0725ZM70.5073 45.9756C71.2639 45.4673 72.0669 44.8191 72.805 44.4274C73.5012 44.0543 74.5781 43.63 75.1444 43.2802C76.8618 42.2124 78.4446 40.9626 80.5334 42.0025C80.5287 41.9652 80.5241 41.9326 80.5241 41.8952C80.9419 41.8486 81.3596 41.8067 81.7774 41.76C81.7913 41.8393 81.8099 41.9139 81.8238 41.9932C78.3518 43.9471 74.8844 45.901 71.4124 47.8549C71.1061 47.23 70.8044 46.6005 70.5073 45.9756ZM70.3773 37.0828C70.4795 37.2133 70.5862 37.3439 70.6883 37.4745C70.0942 37.7916 69.5001 38.1087 68.9059 38.4211C68.9059 38.16 68.9059 37.8988 68.9059 37.6377C69.0266 37.5864 69.1426 37.5351 69.2633 37.4792C69.254 37.3952 69.2448 37.3113 69.2355 37.2273C69.6115 37.176 69.9967 37.1294 70.3773 37.0828ZM25.6452 67.7996C24.6705 67.6411 23.7003 67.4778 22.7256 67.3193C22.7349 67.2773 22.7395 67.2354 22.7488 67.1934C23.1294 66.2607 27.0656 64.3581 28.0078 63.7566C28.9269 63.169 29.8042 62.9778 30.83 62.1944C31.814 61.4436 32.3432 61.0845 33.3133 60.4736C33.2855 60.4223 33.253 60.3757 33.2251 60.3244C29.5675 62.5161 25.9051 64.7032 22.2428 66.8949C21.7972 66.1721 21.3516 65.4493 20.906 64.7265C20.9432 64.7079 20.9757 64.6846 21.0128 64.6659C21.9365 64.1296 22.8555 63.5887 23.7792 63.0524C23.7514 62.9965 23.7189 62.9405 23.6911 62.8845C22.7534 63.3882 21.8158 63.8871 20.8782 64.3908C20.4326 63.7799 19.987 63.169 19.5367 62.5581C20.8689 61.9426 21.8297 61.4669 23.1944 60.6089C24.5962 59.7275 24.9118 59.2565 26.5643 58.5337C27.1352 58.2866 33.7914 53.9498 33.8146 53.8798C33.8193 53.8751 33.8193 53.8705 33.8239 53.8658C33.2205 53.8192 30.0688 55.9689 29.3122 56.4306C28.5231 56.9156 27.8361 57.5032 27.1027 57.9322C26.2858 58.4125 25.5013 58.571 24.7633 59.126C23.4311 60.1239 21.9968 61.1918 20.4743 61.8819C19.2675 62.4322 19.3 62.5022 18.2463 61.6395C17.6383 61.1405 16.9838 60.5343 17.0441 59.6576C17.2298 57.1208 17.2066 56.9855 19.3975 55.7031C20.8967 54.8311 22.1779 53.8192 23.6168 52.9238C25.2924 51.8839 31.633 48.6103 32.5614 47.5098C32.5289 47.4585 32.501 47.4072 32.4685 47.3559C27.3441 50.4943 22.2196 53.6327 17.0905 56.771C17.1184 56.813 17.1416 56.8596 17.1695 56.9016C16.8863 56.2767 16.7285 54.8218 17.1555 54.2249C17.2809 54.043 18.9101 53.2596 19.2025 53.1057C20.9571 52.1917 22.4099 51.0399 24.0717 50.1539C25.3853 49.4544 32.8723 45.0896 33.4154 44.3388C28.0264 47.5285 22.6374 50.7181 17.2484 53.9031C17.2298 53.8705 17.2112 53.8332 17.188 53.8005C17.0859 53.7213 16.7146 51.8606 16.6821 51.5948C16.5567 50.5782 16.4825 50.1725 17.4108 49.8461C18.1535 49.585 18.6316 49.0487 19.3835 48.587C20.5625 47.8642 19.6621 47.3046 20.479 46.5165C22.1129 44.945 22.4842 45.0989 24.5962 44.9404C26.5921 44.7911 25.4038 42.4735 26.1558 41.4336C26.9727 40.3004 29.0754 39.8388 30.338 39.2838C31.2199 38.8968 31.7258 38.2999 32.6588 38.2346C33.4154 38.1833 34.5666 37.9501 35.3742 37.8429C36.3072 37.717 38.396 36.8076 39.9509 36.5372C40.7957 36.3926 44.1563 35.6605 44.6808 36.29C44.7273 36.6025 44.4116 37.4698 44.277 37.731C44.0867 38.0994 43.4926 38.2952 43.047 38.5191C42.3554 38.8688 40.9025 39.8434 40.4151 40.0346C39.38 40.4403 36.2329 42.4315 35.4114 43.2756C38.3031 41.5735 41.1949 39.8761 44.0867 38.174C44.1053 38.2066 44.1238 38.2393 44.1424 38.2719C44.5323 39.1206 45.3075 38.7009 46.2869 39.2978C44.899 41.0605 35.2628 45.3974 34.6548 46.3487C34.8636 46.3253 40.4708 43.4108 40.9489 43.1077C41.8076 42.5714 46.3472 39.517 46.8253 39.5823C47.1688 40.3657 47.5169 41.1445 47.8604 41.9279C47.1734 42.3476 46.4865 42.7673 45.7949 43.187C45.8274 43.2429 45.8552 43.2989 45.8877 43.3549C46.6629 42.9352 47.4427 42.5201 48.2178 42.1004C48.1993 42.1424 48.1807 42.1797 48.1621 42.2217C48.9048 42.6274 49.6428 43.0284 50.3855 43.4341C50.3623 43.3968 50.3391 43.3642 50.3159 43.3269C49.4525 43.8398 48.5938 44.3528 47.7304 44.8704C47.749 44.9077 47.7722 44.9404 47.7908 44.9777C48.125 45.001 49.8888 43.8725 50.4319 43.6067C51.1235 43.2709 52.6599 43.3455 53.268 42.9258C53.3748 42.9911 53.4862 43.0517 53.5976 43.117C53.8993 42.8839 55.8674 42.674 57.0092 41.9092C58.2161 41.1025 59.474 42.6694 60.2955 42.3383C60.458 42.5714 60.6251 42.7999 60.7876 43.0331C60.7504 43.089 54.1314 47.3186 53.3469 47.9108C52.4603 48.5824 50.9657 48.7129 49.5268 49.7109C48.8677 50.1679 45.962 51.8513 45.6974 52.2337C45.9991 52.5788 49.7357 49.8228 50.3205 49.4684C51.2953 48.8808 52.3257 48.8015 53.0406 48.3632C53.7972 47.8969 54.5909 47.3932 55.2918 46.801C55.9741 46.2227 59.2047 44.2502 60.0495 43.8352C60.3745 43.6766 61.0057 43.1963 61.3167 43.2662C61.9155 43.4015 61.8784 43.7186 62.5561 43.3642C63.243 43.0051 63.0342 43.0424 63.2523 42.3802C63.4751 41.7087 63.995 41.8953 64.3246 41.4709C64.3106 41.4383 64.2967 41.4056 64.2828 41.373C63.9811 41.4989 63.6794 41.6294 63.3823 41.76C63.2291 41.3357 63.1781 40.5756 63.8604 40.389C64.4267 40.7667 65.7542 42.0864 64.8862 42.9631C64.5334 43.3175 62.3518 44.5486 61.7623 44.8937C60.6855 45.5233 56.4476 47.6544 55.9277 48.629C59.0609 46.7683 62.194 44.9077 65.3272 43.0471C65.3179 43.0984 65.3132 43.145 65.304 43.1963C65.7217 43.4481 66.1395 43.6999 66.5619 43.9517C67.2674 43.6113 67.3092 42.8652 67.6109 42.3569C67.8198 42.0072 68.8316 41.4569 69.2308 41.2144C69.7693 40.888 72.5357 39.3724 72.4243 39.0274C72.4058 38.9994 72.3872 38.9667 72.3686 38.9388C70.8694 39.8901 69.3654 40.8414 67.8662 41.7927C67.4438 41.2471 68.6042 39.0693 69.0823 38.645C70.5769 37.3113 71.0736 37.7729 72.5914 38.5657C75.2836 39.974 73.9654 39.4377 74.8241 41.4522C75.6782 43.4574 75.7107 42.6134 73.1995 43.8911C72.2433 44.3761 70.874 46.0129 69.8853 45.4487C68.9895 44.9404 68.024 47.1741 67.2906 47.7989C66.3437 48.6103 61.6045 51.2964 60.3141 51.9725C58.035 53.171 56.1412 54.6866 53.76 55.8943C51.402 57.0881 49.4015 58.8275 47.2291 60.3431C45.7577 61.369 33.2298 68.1867 33.2112 68.2893C34.1952 67.8835 35.1746 67.4778 36.1587 67.0721C36.2469 67.2773 35.6574 68.4058 35.3696 68.695C34.9611 69.1007 33.7171 68.9281 33.1416 68.9375C32.5474 68.9514 29.521 68.5224 29.4004 68.2799C34.2509 65.3094 39.0969 62.3389 43.9475 59.3731C43.5576 58.8928 39.8256 61.7234 39.2686 62.0731C37.8065 62.9825 36.1494 63.8219 34.5851 64.7918C33.3226 65.5752 31.1085 66.6898 30.0455 67.5291C29.5953 67.8835 28.3792 68.625 27.8129 68.4758C27.3534 68.3685 25.8959 68.0934 25.6452 67.7996ZM37.5976 66.9369C39.6957 67.9115 38.7952 69.3991 39.7838 70.4996C40.2341 70.9986 41.0928 71.2504 41.5802 71.7587C41.5988 71.7774 42.2811 72.794 42.4946 73.0737C42.5178 73.1064 43.5854 76.5525 43.7386 76.9629C44.1563 78.0914 44.5323 79.8308 45.3493 80.6096C46.0826 81.3091 47.8836 83.0531 47.4659 84.0837C46.4865 86.4806 46.9042 85.5246 47.0806 87.8796C47.2988 90.8734 44.1517 90.3884 47.2384 95.933C48.2039 97.6631 48.1296 97.5931 47.8511 99.603C47.6469 101.095 47.995 102.326 49.5454 102.751C50.6501 103.054 50.418 103.287 50.6501 104.084C50.8404 104.733 51.3603 104.667 51.6248 105.847C52.0194 107.586 51.8662 108.552 52.2236 110.123C52.3629 110.743 52.3675 111.312 52.4603 111.919C52.581 112.711 53.2355 112.842 53.3933 113.518C54.1128 116.549 54.8647 113.052 55.2454 112.329C55.5796 111.699 55.8442 112.087 56.2944 111.751C56.5543 111.555 56.6889 111.033 56.8607 110.753C57.4363 109.834 58.5967 110.51 59.3486 110.039C60.3466 109.419 62.7881 108.57 62.9831 107.577C63.4751 105.054 63.2755 105.908 62.6628 103.464C62.4029 102.429 64.1342 100.615 65.1601 100.344C65.5314 100.247 69.073 99.1646 69.1287 99.1367C70.6466 98.2879 67.6527 96.0729 67.5181 95.8631C66.5572 94.4128 70.0199 94.2216 70.4098 93.0558C70.6233 92.4216 70.5166 91.7174 70.5909 91.0739C70.679 90.3138 71.12 89.6283 71.1339 88.9754C71.1618 87.7583 70.6233 86.0096 71.7049 85.1935C72.9813 84.2329 74.7498 86.1169 72.7168 82.9785C72.3315 82.3863 71.4589 81.7614 71.301 81.2438C70.8601 79.7982 71.6167 80.5863 70.433 79.1919C70.0849 78.7816 69.9364 77.7557 70.4098 77.3686C71.12 76.795 71.6909 78.0308 72.3361 77.8769C74.2717 77.4106 74.1046 74.6779 75.7107 75.3634C75.8638 75.4287 77.3677 75.6199 77.6555 75.6572C78.5003 75.7644 78.5978 74.7479 78.9134 74.2023C79.3405 73.4561 79.3173 71.2178 79.6561 70.6582C79.9857 70.1126 82.4597 68.4012 82.9146 67.5758C83.1931 67.0721 83.5227 65.8504 82.9517 65.4866C82.469 65.1789 81.6242 64.6193 81.0904 64.6239C80.3245 64.6286 79.735 64.2835 78.8067 64.3255C78.0037 64.3628 77.2888 65.0949 76.6715 64.3302C77.4049 63.3649 78.8624 63.141 77.7391 61.5648C79.0388 61.4762 80.0739 61.5322 81.3271 61.854C83.4298 62.3902 82.8403 61.7421 84.3953 61.8493C86.4841 61.9939 84.9569 58.6643 88.5914 58.0721C89.7333 57.8855 90.1603 57.1254 90.216 56.1182C90.2485 55.5166 91.6456 55.6005 92.5136 55.2928C93.0706 55.0969 92.7643 52.728 92.6529 52.1637C92.3976 50.8021 92.8339 50.7601 91.2279 50.2098C89.8168 49.7248 89.9793 49.1466 88.5728 50.042C87.6723 50.6155 86.8136 49.6782 85.941 49.7668C84.0472 49.958 82.0187 48.186 82.2508 46.2461C82.3529 45.3927 82.6964 44.6932 82.8496 43.7839C83.026 42.7067 82.6686 41.2657 81.4385 41.2098C80.422 41.1631 79.5633 40.9486 78.6256 41.0139C76.95 41.1305 76.9825 42.0118 75.6457 42.0258C74.2717 39.2512 76.0031 39.6662 72.6332 38.0014C71.8812 37.6284 71.1896 36.9662 70.382 36.5885C69.7043 36.2714 68.581 36.8729 68.4882 37.6657C68.3257 39.0087 68.2097 39.074 67.6898 40.2631C67.3927 40.9533 67.3556 40.7061 67.3463 41.4756C67.337 42.4968 67.1467 41.9139 66.9657 42.5201C66.4365 44.3201 65.8006 42.5434 65.5685 41.9372C65.225 41.0419 64.7609 40.3284 63.9161 39.7315C61.832 41.4149 63.4937 40.6781 62.8856 42.3476C62.3843 43.7279 61.2007 42.5248 60.7365 42.0398C60.4766 41.7693 58.5224 41.3123 58.0582 41.2331C56.7818 41.0232 56.5218 41.9232 55.0876 42.2403C53.9643 42.4921 52.6924 42.5761 51.4902 42.8372C50.6547 43.0191 49.4711 42.5994 48.7934 42.0305C47.6701 41.0885 47.7397 40.5009 47.2709 39.4377C46.8624 38.5097 44.8665 38.5657 44.7412 38.118C44.5509 37.4279 46.0177 35.8004 44.2492 35.5019C44.1331 35.4833 41.0974 35.7444 40.8236 35.7911C39.9277 35.9496 38.8787 36.0802 38.0246 36.332C36.9988 36.6351 35.8802 37.218 34.8961 37.3859C33.7775 37.5817 32.631 37.4418 31.6191 37.9548C30.5886 38.4818 29.9341 38.9947 28.7459 39.3351C25.0604 40.3937 25.9655 40.86 25.3946 43.7093C25.1996 44.6745 24.0438 44.6885 23.2547 44.5953C21.3284 44.3714 22.0015 44.5813 20.6554 45.6725C19.1097 46.9269 19.7178 47.7523 18.9612 48.2326C18.613 48.4518 16.501 49.571 16.4639 49.6036C15.8559 50.1212 16.1668 51.814 16.3339 52.5275C16.7331 54.2435 16.32 54.2016 16.2411 55.7171C16.1808 56.9249 17.0209 56.6964 16.5707 58.8881C16.3339 60.054 16.7192 61.0472 17.6476 61.7794C20.971 64.4001 19.4996 63.9571 21.528 66.8157C22.2846 67.8835 25.8309 68.3732 27.1816 68.7836C28.5231 69.1893 30.8114 69.0307 32.5428 69.3758C36.5207 70.2012 35.4021 68.1214 37.5976 66.9369ZM81.0347 96.4133C81.7356 97.0615 80.0507 97.5512 79.8418 98.1107C79.5493 98.8848 79.359 99.4911 79.0713 100.223C78.7835 100.96 79.7954 101.179 78.7417 102.303C78.0222 103.068 77.3863 101.352 77.2656 100.899C77.883 100.447 78.5003 99.9947 79.1223 99.5424C79.0945 99.5051 79.0713 99.4678 79.0434 99.4304C78.2172 99.8175 77.7205 100.363 77.0707 100.708C76.3698 101.081 75.8267 100.219 75.8174 99.603C77.5534 98.5444 79.2941 97.4765 81.0347 96.4133ZM80.7005 94.9118C80.7469 94.9118 80.7933 94.9118 80.8351 94.9118C80.9743 95.2708 81.1182 95.6299 81.2575 95.989C81.225 96.003 81.1879 96.0123 81.1554 96.0263C79.3869 97.1221 77.6138 98.2227 75.8453 99.3185C75.7107 98.9595 75.5807 98.5957 75.4461 98.2367C77.2006 97.1268 78.9506 96.0216 80.7005 94.9118ZM80.2688 93.8485C79.9207 94.646 81.1275 94.161 79.9207 95.0377C79.6607 95.2242 79.4704 95.518 79.2476 95.6299C78.8624 95.8211 79.0388 95.6998 78.5932 95.9796C77.3863 96.7211 76.8107 96.9123 75.5436 98.0175C75.525 97.8729 75.5018 97.7237 75.4832 97.5791C75.8499 97.2667 76.2212 96.9543 76.5879 96.6372C76.5508 96.5206 76.5137 96.4087 76.4719 96.2921C76.5926 96.1475 76.7179 96.003 76.8386 95.8584C77.6695 95.2662 78.5003 94.6739 79.3312 94.0817C79.6422 94.0024 79.9532 93.9231 80.2688 93.8485ZM81.42 92.9672C81.6103 92.7014 82.2183 92.1511 82.5433 92.1511C82.534 92.2304 82.5247 92.305 82.5154 92.3843C82.4365 92.4682 82.3576 92.5568 82.2787 92.6408C82.3019 92.6827 82.3251 92.7247 82.3483 92.7667C82.2601 92.8506 82.1766 92.9299 82.093 93.0138C81.8656 92.9905 81.6428 92.9765 81.42 92.9672ZM78.5328 91.8806C79.424 91.0273 80.8769 90.5936 81.4292 89.162C81.6799 88.5231 82.8078 88.0941 83.0678 88.9288C83.2627 89.5397 82.4968 89.5304 82.3994 90.4117C82.2926 91.3723 82.715 91.5449 82.093 92.0532C81.7309 92.3516 80.8537 93.1304 80.5195 93.247C79.7814 93.5035 77.3074 95.2428 77.0289 95.2708C76.9686 94.3801 76.6947 90.9014 78.5328 91.8806ZM80.7144 93.7273C81.4107 93.5594 82.1116 93.3915 82.8078 93.2237C82.9703 92.5801 83.1281 91.9319 83.2906 91.2884C83.142 91.2744 82.9889 91.2558 82.8403 91.2418C82.9517 90.9527 82.7707 90.5796 82.9285 90.3697C83.2349 89.9594 83.518 90.3698 83.6155 89.5957C83.6619 89.2412 83.4577 87.8376 82.7707 87.8329C82.0976 87.8283 81.0486 88.3552 80.8537 89.0734C80.7608 89.4231 79.7118 90.3045 79.359 90.6169C78.31 91.5356 76.1377 90.6775 76.4394 93.5921C76.7458 96.5625 74.8937 96.8983 74.9169 97.7237C74.9541 99.1413 75.2929 100.773 76.6668 101.286C76.9686 101.398 78.6674 104.928 79.684 101.804C79.7721 101.534 79.554 100.652 79.8325 99.603C79.995 98.9921 80.5102 98.0221 81.0579 97.7144C83.0585 96.5812 80.5798 94.5667 80.7144 93.7273ZM46.1291 29.3464C47.6098 28.6563 49.4897 26.5158 50.7011 25.891C52.2004 25.1215 53.8343 23.6013 55.3104 22.6966C58.4992 20.7427 61.9666 18.8914 65.0254 16.7836C67.5134 15.0676 83.5783 6.40324 84.0657 5.50324C83.5691 5.57785 66.3808 15.5712 64.6263 16.7557C63.0481 17.8235 61.3724 18.7189 59.7293 19.6749C58.6709 20.2904 55.9695 21.8433 55.1154 22.5148C52.6646 24.45 48.0229 27.0801 46.1291 29.3464ZM113.42 69.4411C114.371 69.6789 114.868 70.5556 114.724 71.2924C114.311 71.4323 112.789 70.6535 112.422 70.397C112.761 70.1312 113.104 69.8701 113.443 69.6043C113.438 69.5483 113.429 69.497 113.42 69.4411ZM110.635 69.1753C111.155 68.6157 111.902 68.4385 112.533 68.0048C113.132 67.5944 113.708 66.9276 114.348 67.4778C114.478 68.2053 113.216 70.038 111.944 70.1173C111.795 69.954 111.642 69.7908 111.494 69.6276C111.517 69.5996 111.545 69.5763 111.568 69.5483C111.257 69.4271 110.946 69.3012 110.635 69.1753ZM109.502 68.3126C109.966 67.9348 111.15 67.5105 111.665 67.5105C112.013 67.5198 112.362 67.5338 112.71 67.5431C111.888 68.0281 111.071 68.5084 110.254 68.9934C110.004 68.7649 109.753 68.5411 109.502 68.3126ZM113.754 66.7411C112.037 67.0815 111.373 67.1281 109.637 67.767C108.425 68.21 108.917 68.8115 109.818 69.3851C110.31 69.7022 110.672 69.5996 111.025 69.8841C111.368 70.1639 111.637 70.5183 112.004 70.7654C113.202 71.5722 115.745 73.1064 115.212 70.3504C114.933 68.9001 114.028 70.2245 114.566 68.3918C114.692 67.9628 115.119 67.6224 114.729 67.1934C114.552 67.0069 114.033 66.6851 113.754 66.7411ZM25.6452 67.7996C26.801 67.2867 28.1285 66.1115 29.2704 65.5799C30.5701 64.9737 32.0368 64.0737 33.3272 63.3742C35.8987 61.9845 37.8483 59.8021 40.5219 58.4638C42.5271 57.4565 45.8784 55.0223 47.8186 53.6466C48.6449 53.0637 50.6872 51.5249 51.4577 51.1751C52.4093 50.7414 54.3634 49.6969 55.0458 48.9508C54.5259 49.1046 51.7037 50.7088 51.0771 51.0819C50.0095 51.7207 48.5195 53.0451 47.5448 53.5441C45.1357 54.7845 42.6756 57.1348 40.2295 58.2912C37.6997 59.4897 35.5924 61.9472 33.1184 63.1597C32.1018 63.668 25.7102 67.0628 25.6452 67.7996ZM73.919 40.403C73.7565 40.445 67.8383 44.4227 67.1235 44.8844C65.9259 45.6538 64.8259 46.2041 63.6004 46.8989C62.3704 47.5937 61.1635 48.8761 60.2398 49.3378C58.0722 50.4197 54.4934 52.1684 52.5764 53.4928C51.5227 54.2249 50.2927 55.1109 49.2204 55.7638C48.8816 55.9689 45.9434 57.9415 45.9527 57.9462C46.4168 58.0627 52.024 54.1409 52.8503 53.6513C55.2593 52.2244 58.2857 50.844 60.5741 49.4311C61.7948 48.6756 62.5746 47.7756 64.06 46.9409C65.2993 46.2461 66.5247 45.5606 67.7408 44.8191C68.1447 44.5766 74.8566 40.1605 73.919 40.403ZM25.9284 32.8998C25.9423 32.8998 33.991 27.3925 34.4877 26.9682C36.0566 25.6392 37.398 25.3873 38.9251 24.2542C39.3197 23.9604 42.8659 21.321 42.9031 21.265C41.9051 21.4609 39.5193 23.3728 38.693 24.1143C37.6255 25.0749 35.5599 25.5506 34.2045 26.7723C33.1462 27.733 26.0676 32.1584 25.9284 32.8998ZM28.2074 54.2435C28.2492 54.2389 35.9544 49.4497 36.6785 48.9834C38.0107 48.1254 40.0763 47.1461 41.2228 46.0968C42.2393 45.1642 44.8665 44.2688 45.3725 43.574C43.033 44.031 39.1711 47.4958 36.725 48.6523C35.792 49.0953 28.3374 53.7399 28.2074 54.2435ZM25.7937 45.901C25.8309 45.9383 25.868 45.9803 25.9098 46.0176C26.9635 45.402 28.5277 44.2922 29.6278 43.574C30.7697 42.8232 32.2643 41.8253 33.4433 41.1911C34.7615 40.4869 35.9266 39.6382 37.3609 38.9154C37.6951 38.7429 41.3249 36.747 41.3388 36.733C41.0696 36.346 38.0293 38.188 37.528 38.4538C36.1912 39.1579 34.7337 40.2584 33.4433 40.902C32.4546 41.387 26.2115 45.2901 25.7937 45.901ZM38.3542 54.2435C44.8015 50.2705 51.2535 46.2974 57.7008 42.3243C57.2645 41.8719 55.7188 43.187 55.2779 43.5274C54.7255 43.9517 53.5511 44.6512 52.9152 44.9777C51.105 45.901 49.6892 47.0901 48.0507 47.9808C47.4148 48.3259 46.2173 49.1932 45.5674 49.6456C44.8712 50.1352 43.6829 50.5456 42.9913 51.0632C41.362 52.2757 39.9602 52.9565 38.3542 54.2435ZM54.1917 90.2019C54.7487 90.4537 61.1403 86.0236 62.0919 85.3241C62.9924 84.6619 69.8853 80.8147 69.8714 80.3578C69.3376 80.4184 54.3727 89.9127 54.1917 90.2019ZM48.6913 96.9309C48.7238 96.9216 52.2561 94.3195 52.8456 93.9558C54.3959 92.9952 55.8952 92.1884 57.4641 91.2091C58.9355 90.2905 60.2259 89.148 61.767 88.1547C62.3147 87.805 65.8795 85.45 65.6428 84.9884C65.5871 85.0023 63.8325 86.4013 63.6144 86.5739C62.9599 87.1008 62.1662 87.5438 61.5535 88.0381C61.0893 88.4112 59.8546 89.1387 59.2883 89.4931C58.6292 89.9034 58.0861 90.6076 57.2831 91.1112C55.8859 91.9879 48.9698 95.7045 48.6913 96.9309ZM66.172 76.7064C66.4876 76.9396 67.7733 75.8297 68.1122 75.5686C68.8084 75.0323 69.5093 74.8131 70.1917 74.4074C71.612 73.5681 72.9488 72.738 74.2857 71.8287C75.4322 71.0499 76.8989 70.066 77.9712 69.2219C78.4725 68.8255 81.9398 67.4639 82.028 66.9183C81.782 66.8903 78.1522 68.8955 77.637 69.1706C76.263 69.8888 75.3254 70.9053 74.0211 71.7587C71.6956 73.2836 68.0379 75.065 66.172 76.7064ZM53.6022 99.0994C54.02 99.3232 60.7969 94.548 61.6881 93.9558C62.2868 93.5594 69.2587 88.5184 69.2773 88.4951C68.5578 88.3179 62.5561 93.1444 61.5024 93.8579C60.6808 94.4081 53.6811 98.9221 53.6022 99.0994ZM52.0101 63.7612C53.4351 63.2016 67.6991 54.6679 67.9915 54.071C62.6675 57.2513 57.3388 60.4363 52.0147 63.6167C51.9915 63.5887 51.9683 63.5654 51.9498 63.5374C51.9683 63.612 51.9915 63.6866 52.0101 63.7612ZM46.0362 24.2495C47.2848 24.1143 51.3974 20.7661 52.7853 19.9407C53.398 19.5769 55.6538 18.3785 55.9741 18.0754C56.5033 17.5811 59.1398 15.8463 59.1815 15.7717C58.8659 15.394 56.4058 17.3899 55.9463 17.6603C55.3521 18.0147 55.1479 18.2526 54.4052 18.6396C53.9457 18.8821 53.1984 19.3624 52.7249 19.6795C51.5784 20.449 50.5155 21.1578 49.4804 22.0624C48.8166 22.6407 46.4818 23.5967 46.0362 24.2495ZM37.463 23.2189C43.1769 19.6096 48.8955 16.0002 54.6095 12.3955C53.6068 12.4701 47.2988 16.6577 45.9573 17.5251C44.7505 18.3085 42.3646 19.7308 41.4224 20.435C40.6333 21.0272 37.5048 22.4868 37.463 23.2189ZM60.4302 15.1329C61.2564 15.0816 72.053 8.04937 72.2804 7.54574C71.9184 7.11672 67.1235 10.8287 66.4458 11.2903C65.3736 12.0178 64.4963 12.6893 63.3684 13.3608C62.9135 13.6266 60.4162 14.6898 60.4302 15.1329ZM53.7183 17.1334C53.8854 17.1287 59.2233 13.6966 59.7432 13.3375C60.8247 12.596 65.0997 10.395 65.666 9.53695C65.3504 9.57892 60.0542 12.7919 59.525 13.2116C58.6106 13.9484 53.9225 16.4152 53.7183 17.1334ZM25 62.4788C25.0696 62.5488 25.1346 62.6187 25.2042 62.684C27.0238 61.4203 28.7319 60.1052 30.7232 59.1866C31.4009 58.8741 35.9776 56.1322 36.2701 55.6798C35.5553 55.7684 31.5587 58.4731 30.4679 59.028C29.4793 59.527 28.6205 59.998 27.6968 60.6415C26.9449 61.1731 25.7148 62.1058 25 62.4788ZM54.7626 65.2068C55.069 65.1789 56.9257 63.7939 57.4641 63.5234C58.4574 63.0244 59.409 62.5161 60.393 61.9752C61.1032 61.5788 64.928 59.1306 65.29 58.5757C64.9373 58.6223 60.458 61.5648 59.8778 61.9519C58.5828 62.8099 55.5471 64.0084 54.7626 65.2068ZM100.669 50.1445C101.036 50.5083 102.892 49.1046 103.431 48.8761C104.373 48.4751 105.501 48.1067 106.276 47.4305C107.103 46.7077 111.54 44.7305 111.661 44.1336C107.994 46.1388 104.331 48.144 100.669 50.1445ZM37.8297 57.1208C37.5465 57.5265 34.302 58.9254 34.3438 59.485C34.9008 59.4524 43.8314 53.614 44.2352 52.9938C44.212 52.9611 44.1935 52.9285 44.1703 52.8959C42.0583 54.3042 39.9417 55.7125 37.8297 57.1208ZM61.8737 66.6478C65.3411 64.6006 68.8084 62.5535 72.2711 60.5063C71.7884 60.2312 67.6898 63.0058 66.9703 63.3789C66.2787 63.7379 61.9341 66.0276 61.8737 66.6478ZM66.4087 9.02866C66.6083 9.02399 71.185 6.26335 71.5331 5.9649C72.3918 5.21878 75.5296 4.37007 76.4162 3.19026C76.1377 2.82653 74.462 4.25349 73.97 4.49598C73.4177 4.76644 71.496 5.55453 71.1989 5.825C70.6001 6.36128 66.4458 8.72088 66.4087 9.02866ZM70.3866 70.3644C70.6094 70.3691 72.1551 69.2452 72.5729 69.0354C73.3155 68.6576 74.3228 68.2613 74.9726 67.8089C75.9149 67.1561 78.8809 66.0183 79.4565 65.2955C79.2569 65.053 75.2094 67.3519 74.6663 67.697C74.1418 68.0374 70.1592 69.8095 70.3866 70.3644ZM17.6336 59.8208C18.0189 60.3198 25.2275 56.0762 25.9887 55.3767C25.6452 55.1669 22.4749 57.3166 21.8669 57.6244C21.463 57.8296 17.6568 59.7928 17.6336 59.8208ZM91.3718 47.7057C91.5017 47.7103 91.6271 47.7103 91.757 47.715C94.4678 46.1948 97.1832 44.6699 99.8986 43.1497C99.5365 42.8046 96.4544 44.7398 95.7767 45.1549C95.2801 45.458 91.46 47.5704 91.3718 47.7057ZM52.2979 77.7044C52.6507 77.8396 55.6121 76.0023 56.2016 75.7038C56.6054 75.4986 57.9468 74.8831 58.2068 74.6593C59.0933 73.8805 59.2372 73.9738 60.096 73.4002C59.8035 72.9991 57.0139 75.0043 56.2665 75.3867C55.8117 75.6106 52.4139 77.5178 52.2979 77.7044ZM52.038 105.101C52.0751 105.152 52.1076 105.204 52.1447 105.25C54.7719 103.52 57.1717 101.818 60.1609 100.321C59.3301 99.8455 53.5419 103.972 52.038 105.101ZM51.3185 103.59C51.5181 103.599 52.8688 102.28 53.1752 102.051C53.7739 101.594 54.7348 101.086 55.3057 100.652C55.9045 100.195 59.1119 98.4978 59.163 97.9615C58.5549 98.0408 51.1978 102.947 51.3185 103.59ZM98.1997 37.7077C101.194 36.0196 104.188 34.3268 107.177 32.6387C106.601 32.5501 98.6871 36.9522 98.1997 37.7077ZM60.1331 8.11466C60.1424 8.13797 60.1563 8.16129 60.1656 8.18461C59.6225 8.26855 56.2758 10.7354 55.8024 11.4675C56.1087 11.4396 58.787 9.24317 59.4879 8.85612C60.0913 8.52036 60.5508 8.11932 61.3214 7.73694C61.7206 7.53642 62.7139 6.92087 62.997 6.49651C62.9738 6.4592 62.9552 6.42656 62.932 6.38926C61.9991 6.95817 61.0661 7.53642 60.1331 8.11466ZM82.5525 34.3454C81.8748 34.4014 79.7443 35.5159 79.0248 35.9683C78.7092 36.1688 78.5096 36.1734 78.2033 36.3833C77.7716 36.6771 77.7391 36.5465 77.3863 36.8076C77.0289 37.0734 76.1795 37.218 75.8128 37.689C76.0263 37.8009 82.1719 34.9237 82.5525 34.3454ZM43.2234 47.687C43.2419 47.7243 43.2651 47.757 43.2837 47.7943C42.5828 47.9015 41.3945 48.8715 40.5451 49.2632C39.9138 49.557 38.1314 50.6435 38.0664 51.3663C38.3774 51.1611 38.5909 50.8067 38.8694 50.6435C39.134 50.4896 39.64 50.1865 39.8628 50.014C40.2109 49.7435 41.3249 49.086 41.7937 48.8388C42.2439 48.5963 45.2332 46.9269 45.4235 46.4792C44.6901 46.8756 43.9567 47.2813 43.2234 47.687ZM62.064 72.3183C62.1058 72.309 65.2668 70.4577 65.4757 70.2991C66.1627 69.7862 68.5856 68.6623 68.9848 68.0887C68.7527 67.9955 65.8981 69.6882 65.5964 69.9354C64.9048 70.509 62.1383 71.6281 62.064 72.3183ZM97.536 29.4397C100.725 27.7096 103.324 26.3107 106.453 24.5386C106.137 24.4314 97.652 28.9874 97.536 29.4397ZM66.3344 79.5417C66.3623 79.593 66.3901 79.6489 66.4226 79.7002C64.8166 80.6888 63.2059 81.6821 61.5999 82.6707C61.8273 82.8106 64.1853 81.407 64.5102 81.1412C64.6355 81.0386 67.5366 79.2339 67.5691 79.2292C67.5366 79.1733 67.5041 79.122 67.4716 79.066C67.4902 79.094 67.5088 79.122 67.5273 79.15C68.0797 78.7629 68.6274 78.3805 69.1798 77.9935C68.2468 78.0168 66.9796 79.4438 66.3344 79.5417ZM82.8403 54.4301C82.9703 54.4394 83.0956 54.4441 83.2256 54.4534C84.0611 53.9684 84.9012 53.4834 85.7367 52.9985C86.7626 52.5088 87.7884 52.0145 88.8142 51.5249C88.7863 51.4829 88.7538 51.4456 88.726 51.4036C88.9395 51.301 89.153 51.1984 89.3712 51.0958C89.0138 50.858 86.5815 52.3409 85.9131 52.658C84.7573 53.213 83.945 53.67 82.8403 54.4301ZM46.4168 21.363C48.5706 20.1412 50.0745 19.1619 52.3304 18.0474C52.3814 17.9028 52.4325 17.7583 52.4836 17.6137C52.0751 17.7349 52.1494 17.8655 51.778 17.9681C51.5227 18.0381 51.156 18.2619 50.8868 18.3971C49.615 19.0407 47.1409 20.2531 46.4168 21.363ZM92.509 37.4185C92.9639 37.2926 93.6369 36.6677 94.0315 36.5605C94.3982 36.4626 95.4333 36.0662 95.7071 35.8563C96.8722 34.9517 98.2693 34.3315 99.4344 33.5947C98.9935 33.5993 96.473 35.1335 96.0181 35.3947C95.2708 35.8237 92.6947 36.719 92.509 37.4185ZM100.474 39.2325C100.915 39.4564 105.775 36.0335 106.917 35.9729C106.253 35.3947 101.393 38.6823 100.474 39.2325ZM73.5383 6.73434C73.724 6.8276 75.9335 5.67111 76.328 5.54054C77.0103 5.31671 78.3471 4.22084 79.127 3.80115C79.062 3.7312 78.9923 3.65659 78.9274 3.58664C78.5096 3.9224 76.5787 5.18614 76.1748 5.34002C75.7292 5.50324 73.8447 6.34262 73.5383 6.73434ZM61.9712 16.751C63.2059 16.0375 64.4406 15.324 65.6753 14.6106C65.6521 14.5779 65.6289 14.5499 65.6057 14.5173C66.4737 14.0043 67.3463 13.4961 68.2143 12.9831C67.959 12.6007 65.5221 14.3448 65.174 14.6106C64.6031 15.0396 62.2265 16.3546 61.9712 16.751ZM70.1452 64.6286C70.9065 64.0317 71.8627 63.4441 72.5125 63.0151C73.1624 62.5861 74.8612 62.0965 75.1537 61.6488C74.4481 61.7187 69.7786 63.9338 70.1452 64.6286ZM4.32585 41.5315C4.76217 41.8393 5.9783 40.6735 6.50281 40.3191C7.6029 39.5776 7.51006 39.4237 8.77261 38.9714C8.28987 38.4818 7.04125 39.6989 6.51674 39.9647C6.12219 40.1605 5.85297 40.6035 5.50485 40.8041C5.25884 40.9439 4.51152 41.2237 4.32585 41.5315ZM65.6474 61.5695C67.3741 60.6648 69.1055 59.7602 70.8369 58.8508C70.8229 58.8229 70.8044 58.7902 70.7904 58.7622C70.3031 58.8135 65.5732 61.1778 65.6474 61.5695ZM7.16193 35.3714C7.4915 35.6045 8.79117 34.6346 9.20893 34.3175C9.91911 33.7765 10.6061 33.4641 11.3116 32.9278C10.8289 32.6434 7.66324 35.1009 7.16193 35.3714ZM70.1174 22.207C69.695 22.1277 68.2236 22.8599 67.8755 23.2935C68.1122 23.2656 68.3443 23.2422 68.581 23.2143C68.5624 23.1397 68.5485 23.065 68.5299 22.9904C68.6413 23.0184 68.7481 23.0417 68.8595 23.0697C69.9642 22.5008 71.0643 21.9319 72.169 21.363C72.1412 21.307 72.1133 21.251 72.0855 21.1951C71.4264 21.5308 70.7719 21.8666 70.1174 22.207ZM71.561 66.424C71.9509 66.6991 75.2094 64.3162 75.6503 63.8825C76.1006 64.0364 75.9613 64.0597 76.0031 63.6633C74.9309 63.7799 74.4713 64.6752 73.7147 65.0903C73.4548 65.2395 71.6956 66.2328 71.561 66.424ZM7.97423 33.0724C8.29451 33.3475 9.61276 32.4988 9.92839 32.2563C10.4251 31.8693 11.7154 31.4915 12.0775 31.2304C11.9986 31.1325 11.9197 31.0392 11.8408 30.9413C10.5504 31.6501 9.25999 32.3589 7.97423 33.0724ZM112.993 43.8631C113.248 43.8352 114.58 42.8372 114.998 42.6274C115.481 42.3896 115.564 42.1984 115.954 42.0445C116.042 42.0118 117.05 41.5269 117.068 41.5129C116.994 41.4383 116.92 41.359 116.845 41.2844C116.168 41.8253 113.058 43.1497 112.993 43.8631ZM3.18863 50.1072C2.83122 50.4057 2.46917 50.7088 2.11176 51.0072C2.15353 51.1145 2.19531 51.2218 2.23708 51.329C3.27683 50.499 4.31657 49.6689 5.35167 48.8388C4.91071 48.3166 3.62031 50.3217 3.18863 50.1072ZM5.63481 38.6683C6.49353 38.3185 6.95306 37.7543 7.70501 37.3066C8.33165 36.9382 9.58955 36.4579 10.0816 36.1128C9.97945 36.0709 9.87733 36.0289 9.77986 35.9869C9.23678 36.4299 5.6998 37.9175 5.63481 38.6683ZM26.9495 34.0796C27.3673 34.1543 30.0641 32.3402 30.389 31.8459C30.1941 31.8693 28.8433 32.6993 28.5695 32.8858C28.1935 33.1423 26.8845 33.7066 26.9495 34.0796ZM85.4536 41.2984C87.6027 40.0999 89.7472 38.9014 91.8963 37.7077C91.4739 37.5538 89.0927 39.1766 88.5775 39.4937C88.0344 39.8248 85.384 40.7807 85.4536 41.2984ZM106.174 58.0208C106.165 58.1467 106.151 58.2773 106.142 58.4032C106.156 58.4032 107.678 57.4892 107.984 57.3353C108.569 57.0368 109.479 56.8316 110.027 56.4819C109.419 56.0855 106.666 57.9135 106.174 58.0208ZM102.637 41.3916C102.971 41.6155 105.933 39.8527 106.346 39.2745C106.327 39.2465 106.313 39.2185 106.295 39.1859C105.079 39.918 103.858 40.6548 102.637 41.3916ZM97.8237 101.091C97.898 101.175 97.9723 101.258 98.0419 101.338C98.5896 100.951 101.751 100.522 102.47 100.587C102.052 99.9481 98.8078 100.895 97.8237 101.091ZM49.4525 24.4407C49.4943 24.45 49.5407 24.4594 49.5825 24.4687C50.8822 23.8298 51.8151 23.093 53.0638 22.235C52.7435 21.7826 49.7728 24.2169 49.4525 24.4407ZM2.02821 71.5489C2.84515 71.4743 4.39084 69.3898 4.96641 68.7602C4.53473 68.8115 2.05606 71.2831 2.02821 71.5489ZM9.24606 30.9553C9.71023 31.2257 10.5736 30.2931 11.0517 30.0319C11.7201 29.6635 12.3931 29.4211 13.1358 28.9687C12.8852 28.619 11.7479 29.4957 11.3116 29.7148C11.0331 29.8547 9.36674 30.7827 9.24606 30.9553ZM1.27161 60.7814C1.42943 60.7674 3.74564 58.7016 4.20981 58.3798C4.11698 58.3798 4.0195 58.3798 3.92667 58.3798C3.07259 58.6503 1.71257 60.1052 1.27161 60.7814ZM61.753 99.3745C61.7809 99.4165 61.8087 99.4584 61.8366 99.5004C63.1502 98.6144 64.4638 97.7237 65.7774 96.8377C65.2065 96.5579 62.5793 98.717 61.753 99.3745ZM64.0553 94.8185C65.796 93.6946 67.532 92.5755 69.2726 91.4516C68.7759 91.5029 64.4127 94.2682 64.0553 94.8185ZM77.4281 93.3729C78.7881 92.4449 80.1481 91.5122 81.5081 90.5843C80.9929 90.6402 77.4699 92.9019 77.4281 93.3729ZM71.2036 117.822C72.0019 117.967 72.805 118.116 73.6033 118.261C73.6776 118.163 73.7519 118.06 73.8261 117.962C72.9396 117.808 72.053 117.654 71.1664 117.505C71.1804 117.612 71.1943 117.72 71.2036 117.822ZM2.63627 52.8679C2.63627 52.8819 2.64091 52.9005 2.64091 52.9145C2.12104 53.3575 1.60117 53.8052 1.0813 54.2482C1.22055 54.2296 1.36444 54.2062 1.5037 54.1876C2.41347 53.4135 3.3186 52.6394 4.22838 51.8653C4.20517 51.8326 4.18196 51.8 4.15875 51.7674C3.6528 52.1358 3.14222 52.4995 2.63627 52.8679ZM17.0209 51.5295C17.1741 51.5295 17.3273 51.5295 17.4851 51.5249C17.4619 51.4876 17.4387 51.4503 17.4201 51.4083C18.613 50.6202 19.8059 49.8368 20.9989 49.0487C20.5208 49.1046 17.2948 51.1425 17.0209 51.5295ZM47.2152 80.7168C47.2013 80.8008 47.1874 80.8847 47.1734 80.9733C48.0507 80.8707 49.4943 79.1733 50.288 79.0194C50.2787 78.9774 50.2648 78.9355 50.2555 78.8982C49.0626 79.2759 48.2364 79.9847 47.2152 80.7168ZM3.23969 62.3016C2.6734 62.782 2.10712 63.2576 1.54083 63.7379C1.49441 63.9198 1.44799 64.1063 1.40158 64.2882C2.20923 63.5561 3.01225 62.8239 3.81526 62.0918C3.78277 62.0452 3.74564 61.9985 3.71315 61.9566C3.55997 62.0685 3.40215 62.1851 3.23969 62.3016ZM4.53009 46.5212C4.53937 46.5445 4.5533 46.5678 4.56258 46.5911C4.00557 46.9922 3.44393 47.3979 2.88692 47.8036C3.23969 47.9668 3.40679 47.8316 3.62495 47.5937C3.93595 47.3839 4.25159 47.1741 4.56258 46.9642C4.54401 46.8989 4.52545 46.8383 4.50224 46.773C4.89678 46.6891 5.5002 46.1948 5.54198 45.887C5.20313 46.0968 4.86429 46.3114 4.53009 46.5212ZM3.07259 73.5681C3.65745 73.5168 5.00354 71.8333 5.49092 71.4136C5.46771 71.381 5.43986 71.3483 5.41665 71.3157C4.46975 72.0105 3.73636 72.5468 3.07259 73.5681ZM1.84254 67.5105C1.91681 67.5245 1.99572 67.5385 2.06998 67.5525C2.91013 66.7364 3.75492 65.925 4.59507 65.1089C4.20053 65.1509 2.12104 67.0815 1.84254 67.5105ZM64.436 89.0454C64.9001 89.0034 67.2813 87.2733 67.5134 86.7604C66.6176 87.3993 65.7263 88.0381 64.8305 88.677C64.7005 88.8029 64.5659 88.9241 64.436 89.0454ZM100.307 99.0201C100.627 99.2439 102.749 98.7589 103.018 98.5817C102.591 98.5025 100.493 98.703 100.307 99.0201ZM60.6901 83.0531C60.3002 83.2956 59.9103 83.5334 59.5204 83.7759C59.4879 83.8925 59.46 84.0137 59.4276 84.1303C59.4832 84.1723 59.539 84.2189 59.5947 84.2609C60.1331 83.5661 61.2285 83.1744 61.4792 82.7826C61.2146 82.8712 60.9547 82.9598 60.6901 83.0531ZM4.14018 80.5769C5.16136 79.8401 5.09638 79.7282 5.90867 78.7816C5.5559 78.7862 4.1309 80.0173 4.14018 80.5769ZM10.6757 28.7029C10.7128 28.7309 10.7453 28.7589 10.7825 28.7869C11.6273 28.2646 12.472 27.7469 13.3122 27.2247C12.9037 27.0475 11.0656 28.3065 10.6757 28.7029ZM35.0447 8.68358C35.0957 8.53435 35.1514 8.38513 35.2025 8.2359C35.3 7.71828 35.3974 7.20532 35.4949 6.6877C35.4299 6.62242 35.3603 6.55713 35.2953 6.48718C35.0725 6.86491 34.7337 8.33383 35.0447 8.68358ZM1.09987 57.0648C1.14164 57.1208 1.17878 57.1814 1.22055 57.2373C1.93537 56.5612 2.64555 55.885 3.36038 55.2042C2.77552 55.2695 1.5826 56.5658 1.09987 57.0648ZM75.9102 117.123C75.836 117.039 75.7617 116.95 75.6828 116.866C74.968 116.726 74.2532 116.587 73.5383 116.447C73.5987 116.95 75.395 117.076 75.9102 117.123ZM112.631 83.0251C112.928 83.3562 114.863 82.9645 115.17 82.6194C115.077 82.6148 114.984 82.6101 114.891 82.6054C114.766 82.5961 112.71 82.9645 112.631 83.0251ZM68.9013 32.5874C70.2195 31.9625 71.5378 31.3377 72.8514 30.7128C72.6146 30.5589 69.1659 32.219 68.9013 32.5874ZM93.4559 40.2072C94.6256 39.6056 95.7907 39.004 96.9557 38.4071C96.422 38.3932 93.7576 39.7455 93.4559 40.2072ZM69.6532 85.3941C69.7693 85.3847 69.89 85.3801 70.0106 85.3707C70.4841 84.9557 70.9576 84.5407 71.431 84.1257C71.5935 84.0231 71.7513 83.9251 71.9137 83.8225C71.612 83.5008 69.9874 85.063 69.6532 85.3941ZM45.3725 8.38513C45.2889 8.39912 45.2054 8.40844 45.1172 8.42243C44.3142 8.95404 43.5111 9.48099 42.7081 10.0126C42.9449 10.1665 45.1497 8.73021 45.3725 8.38513ZM75.641 115.934C75.9892 116.199 76.9036 116.353 77.3306 116.353C77.3631 116.353 77.3956 116.353 77.4234 116.353C77.8041 116.353 77.7066 116.437 77.8969 116.176C77.5163 116.139 77.1403 116.102 76.7597 116.064C76.5369 115.999 75.7107 115.607 75.641 115.934ZM56.2341 34.0144C56.1969 34.0004 56.1598 33.9864 56.1227 33.9724C56.0205 34.075 55.9184 34.1822 55.8163 34.2848C55.8488 34.3315 55.8859 34.3734 55.9184 34.4201C56.0298 34.3874 56.1366 34.3594 56.248 34.3268C56.8096 33.9024 57.3759 33.4827 57.9376 33.0584C57.9097 33.0164 57.8819 32.9791 57.854 32.9371C57.3109 33.2962 56.7725 33.6553 56.2341 34.0144ZM98.4921 26.0169C98.5246 26.0635 98.5618 26.1055 98.5943 26.1521C99.4344 25.6625 100.279 25.1728 101.119 24.6785C99.8847 25.0749 99.5969 25.336 98.4921 26.0169ZM117.24 58.4731C117.597 58.7762 118.995 57.699 119.245 57.3446C119.227 57.3166 119.213 57.2886 119.194 57.2607C118.544 57.6664 117.89 58.0721 117.24 58.4731ZM114.534 80.7075C114.399 80.7728 114.265 80.8427 114.13 80.908C114.2 80.9686 114.269 81.0293 114.339 81.0899C114.794 80.9686 115.244 80.8521 115.699 80.7308C115.838 80.6748 115.977 80.6189 116.117 80.5629C115.912 80.3018 115.04 80.6469 114.534 80.7075ZM12.6531 26.1708C13.5489 26.0682 13.8367 25.5226 14.4541 24.921C14.1245 24.9583 12.8666 25.8443 12.6531 26.1708ZM89.4733 21.75C89.9375 21.5448 90.397 21.335 90.8612 21.1298C91.0933 20.9526 91.33 20.7754 91.5621 20.5982C91.2232 20.4769 89.7147 21.3769 89.4733 21.75ZM3.76885 76.7018C3.81062 76.7624 3.84776 76.823 3.88953 76.8836C4.30729 76.5665 4.72968 76.2541 5.14743 75.937C5.13351 75.9043 5.12423 75.8717 5.1103 75.8344C5.19849 75.7271 5.28204 75.6152 5.37024 75.508C5.34703 75.48 5.32382 75.4567 5.30061 75.4287C4.79002 75.853 4.27944 76.2774 3.76885 76.7018ZM98.8124 40.0673C98.7799 40.0579 98.7474 40.0533 98.715 40.0439C98.4179 40.2724 98.1255 40.5009 97.8284 40.7294C97.8702 40.7574 97.9073 40.7854 97.9491 40.8134C98.6314 40.3844 99.3184 39.96 100.001 39.531C99.8986 39.517 99.7918 39.503 99.6897 39.489C99.3973 39.6849 99.1049 39.8761 98.8124 40.0673ZM97.2342 29.5143C96.4684 29.6169 95.786 30.0832 95.3868 30.6615C96.0645 30.2744 96.7469 29.8874 97.4292 29.5003C97.3874 29.449 97.3456 29.3977 97.3039 29.3464C97.2807 29.4024 97.2575 29.4584 97.2342 29.5143ZM5.91796 85.6832C6.33571 85.3148 6.59565 84.8671 7.01804 84.4101C7.03197 84.3215 7.04125 84.2329 7.05518 84.149C6.75346 84.2795 5.74621 85.2308 5.91796 85.6832ZM15.8883 98.5911C15.7909 98.9595 15.698 99.3279 15.6006 99.6962C15.6748 99.7429 15.7491 99.7895 15.828 99.8361C15.9626 99.4678 16.0926 99.0994 16.2272 98.7263C16.204 98.6051 16.1761 98.4838 16.1529 98.3626C16.0647 98.4418 15.9765 98.5164 15.8883 98.5911ZM3.46714 44.8564C3.7967 45.2854 4.72968 44.1103 4.96177 43.7885C4.70183 43.7885 3.79206 44.6139 3.46714 44.8564ZM31.9208 30.82C31.9533 30.8667 31.9858 30.918 32.0183 30.9646C32.3153 30.7967 32.6171 30.6335 32.9141 30.4656C33.0812 30.2838 33.253 30.1019 33.4201 29.92C32.9977 29.9667 32.2132 30.5216 31.9208 30.82ZM67.1978 57.3586C67.2349 57.4099 67.2767 57.4658 67.3138 57.5171C67.8151 56.9995 68.4789 56.6498 69.1658 56.2301C69.1426 56.1835 69.1148 56.1368 69.0916 56.0902C68.4 56.384 67.8058 56.9202 67.1978 57.3586ZM61.0197 96.7397C61.4049 96.8936 62.6257 95.7465 63.0109 95.49C62.6443 95.532 61.2007 96.4646 61.0197 96.7397ZM101.802 97.4159C101.899 97.5232 101.997 97.6304 102.094 97.7377C102.563 97.3879 103.064 97.5232 103.593 97.2294C102.967 97.2107 102.447 97.304 101.802 97.4159ZM4.9432 82.1111C4.96641 82.1344 4.99426 82.1578 5.01747 82.1811C5.66731 81.5609 5.84833 81.2811 6.27073 80.6422C5.77406 80.936 5.30989 81.4863 4.9432 82.1111ZM92.7921 32.0371C92.8386 32.0511 92.885 32.0651 92.9314 32.0791C93.5302 31.7667 94.129 31.4589 94.7277 31.1511C94.7092 31.1092 94.6906 31.0718 94.6674 31.0299C94.1382 31.3143 93.1124 31.5428 92.7921 32.0371ZM13.2658 96.1149C13.2704 96.2921 13.2704 96.4693 13.2751 96.6465C13.3122 96.6558 13.354 96.6605 13.3911 96.6698C13.5675 96.0869 13.7439 95.5086 13.9203 94.9257C13.8924 94.9118 13.8599 94.9024 13.8321 94.8884C13.6418 95.2941 13.4561 95.7045 13.2658 96.1149ZM91.4043 41.387C91.3764 41.387 91.3439 41.387 91.3161 41.387C91.0004 41.6108 90.6894 41.8393 90.3738 42.0631C90.4017 42.1051 90.4342 42.1517 90.462 42.1937C91.0004 41.844 91.5389 41.4942 92.0773 41.1445C92.0495 41.1025 92.0216 41.0559 91.9984 41.0139C91.7988 41.1398 91.5992 41.2611 91.4043 41.387ZM6.73026 87.4645C6.75811 87.4832 6.78596 87.5019 6.81381 87.5158C7.1805 87.0635 7.54256 86.6158 7.90925 86.1635C7.20835 86.2381 7.0134 86.9656 6.73026 87.4645ZM68.2561 83.0531C68.2329 83.1697 68.205 83.2863 68.1818 83.4075C68.6831 83.0997 69.1891 82.792 69.6904 82.4795C69.6718 82.4422 69.6486 82.4049 69.63 82.3676C69.1705 82.5961 68.711 82.8246 68.2561 83.0531ZM22.1361 48.2839C22.6699 48.0181 23.199 47.7476 23.7328 47.4818C23.4265 47.1507 22.3867 47.8969 22.1361 48.2839ZM35.2582 52.658C34.9054 52.9425 34.548 53.227 34.1952 53.5161C34.237 53.572 34.2788 53.628 34.3206 53.684C34.7708 53.3156 35.221 52.9472 35.6713 52.5788C35.532 52.6021 35.3928 52.6301 35.2582 52.658ZM78.3147 115.155C78.7185 115.164 79.1223 115.174 79.5261 115.188C79.4472 115.118 79.3637 115.048 79.2848 114.978C78.7835 114.94 78.2822 114.898 77.7809 114.861C77.9619 114.959 78.1383 115.057 78.3147 115.155ZM19.9545 104.336C20.3212 104.234 20.3908 103.483 20.7111 102.989C20.1866 103.063 20.0659 103.861 19.9545 104.336ZM7.7143 89.2086C7.83498 89.2459 7.95102 89.2879 8.07171 89.3252C8.3595 89.0221 8.64728 88.7143 8.93507 88.4112C8.90257 88.3739 8.87008 88.3319 8.83759 88.2946C8.38735 88.6397 8.17847 88.9941 7.7143 89.2086ZM15.7909 22.9764C15.8559 23.0277 15.9255 23.0744 15.9905 23.1257C16.1529 22.7806 16.8585 22.8412 16.9931 22.3656C16.4361 22.4542 16.2458 22.622 15.7909 22.9764ZM14.2684 97.789C14.3009 97.789 14.338 97.789 14.3705 97.789C14.3891 97.7144 14.4123 97.6351 14.4308 97.5605C14.533 97.1548 14.6304 96.7491 14.7326 96.348C14.3334 96.6838 14.1848 97.2294 14.2684 97.789ZM21.6858 105.479C22.1779 105.32 22.0618 104.952 22.4053 104.555C22.3682 104.518 22.331 104.481 22.2893 104.448C22.0061 104.611 21.6766 105.064 21.6858 105.479ZM117.546 59.8208C118.182 59.4151 118.326 59.4664 118.874 58.8602C118.577 58.7529 117.755 59.499 117.546 59.8208ZM35.9869 6.47786C36.0705 6.70636 35.7409 7.13071 36.0705 7.51776C36.1262 7.27994 36.1819 7.04211 36.2376 6.79962C36.2654 6.61309 36.2933 6.43122 36.3165 6.24469C36.2097 6.32397 36.0983 6.40325 35.9869 6.47786ZM55.0458 2.13637C55.0504 2.22497 55.0597 2.31824 55.0643 2.40684C55.1618 2.47212 55.2593 2.53741 55.3568 2.6027C55.3753 2.29492 55.3985 1.98715 55.4171 1.67937C55.1247 1.67937 55.0226 1.73533 55.0458 2.13637ZM54.2149 1.88455C54.201 2.07108 54.1871 2.25761 54.1685 2.44414C54.2613 2.53275 54.3542 2.61669 54.447 2.70529C54.4563 2.40218 54.5538 1.6374 54.4238 1.47419C54.3588 1.60942 54.2892 1.74932 54.2149 1.88455ZM37.036 6.00687C37.0081 6.41257 36.9849 6.81827 36.957 7.22398C37.0035 7.22864 37.0545 7.23797 37.1009 7.24263C37.1659 6.75299 37.2355 6.26335 37.3005 5.77371C37.2123 5.85764 37.1241 5.93226 37.036 6.00687ZM48.2178 25.3081C48.255 25.3267 48.2921 25.3407 48.3246 25.3594C48.8677 25.0516 48.9141 24.8697 49.434 24.6132C49.4386 24.5573 49.4432 24.5013 49.4479 24.4454C48.928 24.6879 48.6495 24.9257 48.2178 25.3081ZM38.266 6.34262C38.3542 6.34729 38.4378 6.34729 38.5259 6.35195C38.5538 6.00687 38.6884 5.57319 38.5074 5.32603C38.136 5.67578 38.4099 5.96956 38.266 6.34262ZM58.3646 18.8635C58.5363 18.7702 58.7034 18.6769 58.8752 18.5883C58.9077 18.6023 58.9448 18.6163 58.9773 18.6303C59.2465 18.4204 59.5157 18.2106 59.785 18.0008C59.3765 18.0474 58.606 18.4951 58.3646 18.8635ZM118.516 61.6814C118.387 61.8213 118.257 61.9612 118.122 62.1058C118.619 62.1198 118.869 61.8773 119.129 61.4343C118.93 61.5182 118.721 61.5975 118.516 61.6814ZM5.65802 75.5779C5.97366 75.3494 6.32179 75.0183 6.37284 74.6499C6.05257 74.7432 5.64874 75.1302 5.65802 75.5779ZM100.34 42.7393C100.683 42.5714 101.022 42.4035 101.365 42.2403C101.398 42.2543 101.435 42.2683 101.467 42.2776C101.667 42.1331 101.871 41.9932 102.071 41.8486C101.95 41.8486 101.83 41.8486 101.709 41.8486C101.254 42.1471 100.794 42.4409 100.34 42.7393ZM92.95 19.908C92.7411 19.992 92.5322 20.0712 92.3233 20.1552C92.3744 20.2018 92.4254 20.2484 92.4765 20.2904C92.5693 20.2251 92.6668 20.1645 92.7596 20.0992C92.9732 19.978 93.182 19.8567 93.3956 19.7355C93.4373 19.7588 93.4837 19.7868 93.5255 19.8101C93.5952 19.7168 93.6694 19.6236 93.739 19.5303C93.5905 19.5396 93.442 19.5443 93.2934 19.5536C93.182 19.6749 93.066 19.7914 92.95 19.908ZM79.9996 114.213C80.3292 114.157 80.5752 114.246 80.9187 114.222C80.8676 114.012 80.357 113.919 80.0831 113.859C80.0599 113.975 80.0321 114.092 79.9996 114.213ZM17.1648 101.193C17.2669 100.731 17.3923 100.321 17.5686 99.9247C17.072 100.083 17.072 100.806 17.1648 101.193ZM8.95363 90.8267C8.99541 90.8687 9.03718 90.9107 9.07896 90.9527C9.36674 90.7475 9.69631 90.4723 9.6731 90.0993C9.43637 90.3418 9.195 90.5843 8.95363 90.8267ZM55.8906 20.351C56.248 20.3883 56.6332 20.1458 56.8375 19.8567C56.805 19.8241 56.7678 19.7914 56.7307 19.7588C56.4522 19.9593 56.1691 20.1552 55.8906 20.351ZM44.9779 11.1924C45.0197 11.239 45.0661 11.2857 45.1079 11.337C45.3493 11.1738 45.5953 11.0105 45.8366 10.8473C45.7949 10.8007 45.7531 10.7494 45.7113 10.7028C45.4699 10.866 45.2239 11.0292 44.9779 11.1924ZM118.312 63.64C118.628 63.64 118.939 63.3136 119.148 63.0151C118.8 63.0105 118.53 63.3369 118.312 63.64ZM9.83556 91.5122C9.82627 91.5822 9.82163 91.6475 9.81235 91.7128C10.1651 91.7221 10.3879 91.4936 10.4343 91.1485C10.2394 91.2744 10.0352 91.391 9.83556 91.5122ZM56.0902 2.05709C56.1134 2.23896 56.1412 2.42083 56.1644 2.60736C56.2016 2.61202 56.2341 2.61202 56.2712 2.61669C56.3176 2.31824 56.3594 2.01979 56.4058 1.726C56.299 1.83326 56.1923 1.94518 56.0902 2.05709ZM23.1944 106.421C23.2362 106.463 23.2779 106.5 23.3197 106.542C23.6632 106.201 23.7746 106.229 23.5843 105.782C23.4961 106.048 23.3708 106.197 23.1944 106.421ZM46.0362 24.2495C45.9944 24.2215 45.9527 24.1982 45.9109 24.1702C45.702 24.3894 45.4885 24.6086 45.2796 24.8278C45.651 24.7904 45.832 24.5573 46.0362 24.2495ZM48.2178 25.3081C48.1528 25.3034 48.0832 25.2987 48.0182 25.2941C47.7629 25.4713 47.5123 25.6485 47.257 25.8257C47.3405 25.835 47.4241 25.8397 47.5076 25.849C47.7444 25.6671 47.9811 25.4853 48.2178 25.3081ZM115.569 77.1914C115.82 77.3686 116.029 77.2194 116.205 76.9676C116.038 76.8044 115.718 77.0142 115.569 77.1914ZM118.14 60.7721C118.349 60.5576 118.563 60.3477 118.772 60.1332C118.41 60.1286 118.131 60.3757 118.14 60.7721ZM64.436 89.0454C64.1528 89.2692 63.865 89.4931 63.5819 89.7169C64.1946 89.6609 63.8836 89.3485 64.5241 89.2086C64.4963 89.1573 64.4638 89.1013 64.436 89.0454ZM43.474 5.03691C43.5993 4.87836 43.72 4.71981 43.8453 4.56592C43.5019 4.56126 43.2791 4.68251 43.474 5.03691Z"
              fill="#D9E6F7"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="121" height="122" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      name: "Физика",
      link: "physics",
      img: (
        <svg
          width="121"
          height="121"
          viewBox="0 0 121 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M78.452 55.8223C78.4323 54.9085 78.4072 54 78.3731 53.0951C78.2782 50.3589 78.1294 47.6657 77.927 45.0298C77.8822 44.4224 77.832 43.8185 77.78 43.2183C77.2837 37.4484 76.5382 31.976 75.5599 26.957C75.4362 26.3209 75.309 25.6901 75.1764 25.0683C74.8378 23.461 74.4722 21.9039 74.0852 20.4041C73.5422 20.6496 72.9742 20.8449 72.3847 20.9847C72.8093 22.6332 73.2036 24.3516 73.5691 26.1327C73.6981 26.7599 73.8236 27.3978 73.9436 28.0411C74.8234 32.7053 75.5043 37.7584 75.9702 43.0713C76.0222 43.6698 76.0724 44.2737 76.1189 44.8793C76.2784 46.9239 76.4056 49.0024 76.5006 51.1115C76.5418 52.011 76.5777 52.9159 76.6063 53.8262C76.6762 56.0248 76.7121 58.2521 76.7121 60.4991C76.7121 62.7461 76.6762 64.9734 76.6063 67.1738C76.5777 68.0841 76.5418 68.9872 76.5006 69.8867C76.4056 71.9958 76.2784 74.0743 76.1189 76.1189C76.0724 76.7245 76.0222 77.3266 75.9702 77.9269C75.5043 83.2398 74.8234 88.2929 73.9436 92.9571C73.8236 93.6022 73.6981 94.2383 73.5691 94.8673C73.0244 97.5246 72.4116 100.044 71.736 102.399C68.6701 113.082 64.5739 119.208 60.4992 119.208C56.4244 119.208 52.33 113.082 49.2623 102.399C48.5868 100.044 47.9757 97.5246 47.431 94.8673C47.302 94.2383 47.1766 93.6022 47.0547 92.9589C46.1749 88.2947 45.4958 83.2416 45.0299 77.9269C44.9761 77.3266 44.926 76.7245 44.8794 76.1189C44.7199 74.0761 44.5927 71.9958 44.4977 69.8885C44.4565 68.989 44.4207 68.0823 44.3938 67.1721C44.3221 64.9734 44.2863 62.7461 44.2863 60.4991C44.2863 58.2521 44.3221 56.0248 44.3938 53.8262C44.4207 52.9159 44.4565 52.0092 44.4977 51.1097C44.5927 49.0024 44.7199 46.9221 44.8794 44.8793C44.926 44.2737 44.9761 43.6698 45.0299 43.0713C45.4958 37.7584 46.1749 32.7053 47.0547 28.0411C47.1766 27.396 47.302 26.7599 47.431 26.1309C47.9757 23.4736 48.5868 20.9542 49.2623 18.5997C52.33 7.9183 56.4244 1.79188 60.4992 1.79188C61.8682 1.79188 63.2389 2.48354 64.5739 3.80774C65.0738 3.45115 65.6078 3.14295 66.1704 2.88492C64.3768 0.967613 62.4756 0 60.4992 0C57.8759 0 55.3851 1.70766 53.0987 5.07638C51.0076 8.15662 49.1387 12.5395 47.5403 18.1051C46.9114 20.293 46.338 22.6206 45.8219 25.0666C45.6893 25.6883 45.5621 26.3191 45.4384 26.9552C44.4619 31.9742 43.7147 37.4484 43.2183 43.2183C43.1663 43.8185 43.1162 44.4224 43.0714 45.0298C42.8689 47.6657 42.7202 50.3589 42.6252 53.0951C42.5911 54 42.5661 54.9102 42.5464 55.8241C42.5123 57.3723 42.4944 58.9312 42.4944 60.4991C42.4944 62.067 42.5123 63.6259 42.5464 65.1741C42.5661 66.088 42.5911 66.9982 42.6252 67.9031C42.7202 70.6393 42.8689 73.3343 43.0714 75.9702C43.1162 76.5758 43.1663 77.1797 43.2183 77.78C43.7147 83.5498 44.4619 89.0258 45.4384 94.043C45.5621 94.6809 45.6911 95.3117 45.8219 95.9334C46.338 98.3794 46.9132 100.705 47.5403 102.893C49.1387 108.459 51.0076 112.842 53.0987 115.924C55.3851 119.292 57.8759 121 60.4992 121C63.1243 121 65.615 119.292 67.9014 115.924C69.9907 112.842 71.8615 108.459 73.458 102.893C74.087 100.705 74.6604 98.3776 75.1764 95.9317C75.309 95.3099 75.4362 94.6791 75.5599 94.0412C76.5382 89.024 77.2837 83.5498 77.78 77.78C77.832 77.1797 77.8822 76.5758 77.927 75.9702C78.1294 73.3343 78.2782 70.6393 78.3731 67.9031C78.4072 67 78.4323 66.0898 78.452 65.1777C78.486 63.6295 78.5039 62.0688 78.5039 60.4991C78.5039 58.9294 78.486 57.3705 78.452 55.8223Z"
            fill="#D9E6F7"
          />
          <path
            d="M104.923 94.4569C104.223 90.7997 102.445 86.3774 99.639 81.3135C98.5352 79.3227 97.2952 77.271 95.9316 75.1763C95.5858 74.6424 95.231 74.1066 94.8672 73.569C92.011 69.3295 88.6673 64.9304 84.9384 60.4991C84.5514 60.0386 84.159 59.5763 83.763 59.114C82.0392 57.1071 80.2401 55.0966 78.373 53.0951C77.7566 52.4321 77.133 51.7709 76.5005 51.1115C75.4307 49.9915 74.3395 48.877 73.2303 47.7678C72.1211 46.6586 71.0066 45.5692 69.8885 44.4976C69.2291 43.8669 68.5661 43.2415 67.9031 42.6251C65.9015 40.758 63.8911 38.959 61.8842 37.237C61.4218 36.841 60.9613 36.4485 60.5008 36.0615C56.0695 32.3326 51.6705 28.989 47.4309 26.1309C46.8915 25.769 46.3558 25.4124 45.8218 25.0665C43.7271 23.7011 41.6772 22.4629 39.6864 21.3592C35.144 18.8416 31.1194 17.1536 27.7005 16.3294C27.8475 16.9458 27.9353 17.5837 27.9568 18.2395C31.0352 19.0763 34.7032 20.6478 38.8173 22.927C40.9604 24.1133 43.1734 25.4608 45.4383 26.9552C45.9741 27.3082 46.5134 27.6701 47.0546 28.0411C50.9734 30.7163 55.0266 33.8091 59.1139 37.237C59.5762 37.624 60.0367 38.0146 60.499 38.4106C62.0562 39.742 63.6169 41.1217 65.174 42.5463C65.8406 43.1537 66.5072 43.7701 67.172 44.3937C68.7757 45.8989 70.3759 47.4471 71.9635 49.0347C73.5511 50.6223 75.101 52.2224 76.6062 53.8261C77.2298 54.4909 77.8444 55.1557 78.4518 55.8223C79.8764 57.3794 81.2579 58.9419 82.5893 60.4991C82.9853 60.9614 83.3759 61.4219 83.763 61.8842C87.1908 65.9715 90.2818 70.0247 92.9589 73.9435C93.328 74.4847 93.69 75.024 94.043 75.5598C95.5374 77.8247 96.8849 80.0377 98.0729 82.1808C103.457 91.9035 104.895 99.1319 102.013 102.013C99.1319 104.895 91.9035 103.458 82.1825 98.0729C80.0394 96.8849 77.8247 95.5374 75.5598 94.0412C75.024 93.6882 74.4846 93.328 73.9435 92.9571C70.0246 90.2819 65.9696 87.1891 61.8842 83.763C61.4218 83.376 60.9613 82.9853 60.499 82.5893C58.9419 81.258 57.3794 79.8764 55.8222 78.4519C55.1557 77.8444 54.4909 77.2298 53.8261 76.6063C52.2224 75.1011 50.6222 73.5511 49.0346 71.9635C47.447 70.3759 45.8988 68.7758 44.3937 67.172C43.7701 66.5072 43.1537 65.8407 42.5462 65.1741C41.1217 63.617 39.7419 62.0562 38.4106 60.4991C38.0146 60.0368 37.6239 59.5763 37.2369 59.114C33.809 55.0267 30.7163 50.9735 28.041 47.0546C27.6701 46.5135 27.3081 45.9741 26.9551 45.4384C25.4607 43.1734 24.1132 40.9605 22.927 38.8174C20.7015 34.8 19.1497 31.2073 18.2986 28.1719C17.6463 28.1683 17.0102 28.1002 16.3938 27.9712C17.2431 31.3309 18.9096 35.2641 21.3591 39.6865C22.4629 41.6772 23.7011 43.7271 25.0665 45.8218C25.4123 46.3558 25.7689 46.8916 26.1309 47.4309C28.9889 51.6687 32.3307 56.0678 36.0596 60.4991C36.4485 60.9596 36.8409 61.4219 37.2369 61.8842C38.9589 63.8911 40.7579 65.9016 42.6251 67.9031C43.2415 68.5661 43.8668 69.2291 44.4976 69.8885C45.5691 71.0066 46.6586 72.1212 47.7678 73.2304C48.8769 74.3395 49.9915 75.4308 51.1114 76.5005C51.7708 77.1331 52.432 77.7566 53.095 78.373C55.0983 80.2402 57.1088 82.0392 59.1157 83.7612C59.578 84.159 60.0403 84.5514 60.5008 84.9385C64.9321 88.6674 69.3294 92.011 73.569 94.8673C74.1083 95.2292 74.6441 95.5858 75.1763 95.9316C77.271 97.2953 79.3227 98.5352 81.3135 99.639C86.3773 102.445 90.7997 104.223 94.4569 104.923C95.6198 105.145 96.6949 105.257 97.6823 105.257C100.087 105.257 101.963 104.595 103.28 103.28C105.136 101.424 105.688 98.4546 104.923 94.4569Z"
            fill="#D9E6F7"
          />
          <path
            d="M115.924 53.0987C112.843 51.0075 108.459 49.1386 102.893 47.5403C100.705 46.9131 98.3794 46.3379 95.9334 45.8218C95.3117 45.691 94.6809 45.562 94.043 45.4384C89.0258 44.4618 83.5498 43.7146 77.78 43.2183C77.1797 43.1663 76.5758 43.1161 75.9702 43.0713C73.3343 42.8688 70.6393 42.7201 67.9031 42.6251C66.9982 42.5911 66.088 42.566 65.1741 42.5463C63.6259 42.5123 62.067 42.4943 60.4991 42.4943C58.9312 42.4943 57.3723 42.5123 55.8241 42.5463C54.9102 42.566 54 42.5911 53.0951 42.6251C50.3589 42.7201 47.6657 42.8688 45.0298 43.0713C44.4224 43.1161 43.8185 43.1663 43.2183 43.2183C37.4484 43.7146 31.9742 44.4618 26.9552 45.4384C26.3191 45.562 25.6883 45.6892 25.0666 45.8218C22.6206 46.3379 20.293 46.9113 18.1051 47.5403C12.5395 49.1386 8.15662 51.0075 5.07638 53.0987C1.70766 55.3851 0 57.874 0 60.4991C0 63.1242 1.70766 65.6149 5.07638 67.8996C8.15662 69.9907 12.5395 71.8614 18.1051 73.458C20.293 74.0869 22.6206 74.6603 25.0666 75.1764C25.6883 75.309 26.3191 75.4362 26.9552 75.5598C31.9742 76.5364 37.4484 77.2836 43.2183 77.78C43.8185 77.8319 44.4224 77.8821 45.0298 77.9269C47.6657 78.1294 50.3589 78.2781 53.0951 78.3731C54 78.4071 54.9085 78.4322 55.8223 78.4519C57.3705 78.486 58.9294 78.5039 60.4991 78.5039C62.0688 78.5039 63.6277 78.486 65.1759 78.4519C66.0898 78.4322 66.9982 78.4071 67.9031 78.3731C70.6393 78.2781 73.3343 78.1294 75.9702 77.9269C76.5758 77.8821 77.1797 77.8319 77.78 77.78C83.5498 77.2836 89.0258 76.5364 94.043 75.5598C94.6809 75.4362 95.3099 75.309 95.9317 75.1764C97.1555 74.9183 98.3507 74.646 99.5118 74.3575C99.2842 73.8092 99.1069 73.2358 98.9832 72.6427C97.6537 72.9706 96.2793 73.2788 94.8673 73.5691C94.2383 73.6981 93.6022 73.8235 92.9589 73.9436C88.2947 74.8234 83.2416 75.5043 77.9269 75.9702C77.3266 76.0221 76.7245 76.0723 76.1189 76.1189C74.0743 76.2784 71.9958 76.4056 69.8867 76.5006C68.9872 76.5418 68.0823 76.5776 67.1721 76.6063C64.9734 76.6762 62.7461 76.712 60.4991 76.712C58.2521 76.712 56.0248 76.6762 53.8262 76.6063C52.9159 76.5776 52.011 76.5418 51.1115 76.5006C49.0024 76.4056 46.9239 76.2784 44.8793 76.1189C44.2737 76.0723 43.6698 76.0221 43.0713 75.9702C37.7584 75.5043 32.7053 74.8234 28.0411 73.9436C27.3978 73.8235 26.7599 73.6981 26.1327 73.5691C23.4736 73.0243 20.9542 72.4115 18.5997 71.736C7.9183 68.6701 1.79188 64.5738 1.79188 60.4991C1.79188 56.4244 7.9183 52.3299 18.5997 49.2623C20.9542 48.5867 23.4736 47.9757 26.1309 47.431C26.7599 47.3019 27.396 47.1765 28.0411 47.0547C32.7053 46.1748 37.7584 45.4957 43.0713 45.0298C43.6698 44.9761 44.2737 44.9259 44.8793 44.8793C46.9221 44.7198 49.0024 44.5926 51.1097 44.4977C52.0092 44.4564 52.9159 44.4206 53.8262 44.3937C56.0248 44.322 58.2521 44.2862 60.4991 44.2862C62.7461 44.2862 64.9734 44.322 67.1721 44.3937C68.0823 44.4206 68.989 44.4564 69.8885 44.4977C71.9958 44.5926 74.0761 44.7198 76.1189 44.8793C76.7245 44.9259 77.3266 44.9761 77.9269 45.0298C83.2416 45.4957 88.2947 46.1748 92.9589 47.0547C93.6022 47.1765 94.2383 47.3019 94.8673 47.431C97.5246 47.9757 100.044 48.5867 102.399 49.2623C113.082 52.3299 119.208 56.4244 119.208 60.4991C119.208 62.1279 118.23 63.7603 116.372 65.3282C116.71 65.8281 117.002 66.3621 117.242 66.9248C119.739 64.9143 121 62.7569 121 60.4991C121 57.874 119.292 55.3851 115.924 53.0987Z"
            fill="#D9E6F7"
          />
          <path
            d="M103.28 17.7199C101.424 15.8635 98.4546 15.3098 94.4569 16.0767C90.7997 16.7755 86.3773 18.5531 81.3135 21.3592C79.3227 22.463 77.271 23.7029 75.1763 25.0683C74.6441 25.4142 74.1084 25.769 73.569 26.1327C69.3294 28.989 64.9322 32.3308 60.5009 36.0615C60.0385 36.4485 59.5762 36.841 59.1139 37.237C57.107 38.9607 55.0965 40.758 53.095 42.6251C52.432 43.2415 51.7708 43.8669 51.1096 44.4976C49.9915 45.5692 48.8769 46.6586 47.7678 47.7678C46.6586 48.877 45.5691 49.9915 44.4976 51.1097C43.8669 51.7691 43.2415 52.4321 42.6251 53.0951C40.758 55.0966 38.9589 57.1071 37.2369 59.114C36.8409 59.5763 36.4485 60.0386 36.0597 60.4991C32.3308 64.9304 28.9889 69.3295 26.1327 73.569C25.7689 74.1066 25.4141 74.6424 25.0665 75.1763C23.7029 77.271 22.4629 79.3227 21.3591 81.3135C18.553 86.3774 16.7755 90.7997 16.0767 94.4569C15.3097 98.4546 15.8634 101.424 17.7198 103.28C19.035 104.595 20.9111 105.257 23.3176 105.257C23.8427 105.257 24.3928 105.224 24.9679 105.162C24.735 104.606 24.5522 104.024 24.4268 103.42C24.0487 103.452 23.685 103.468 23.3355 103.468C21.4362 103.468 19.9614 102.988 18.9867 102.013C16.1053 99.1319 17.5406 91.9035 22.927 82.1808C24.1132 80.0377 25.4607 77.8247 26.9551 75.5598C27.3081 75.024 27.6701 74.4847 28.041 73.9435C30.7163 70.0247 33.8091 65.9715 37.2369 61.8842C37.624 61.4219 38.0146 60.9614 38.4106 60.4991C39.742 58.942 41.1217 57.3812 42.5463 55.8241C43.1537 55.1575 43.7701 54.4909 44.3937 53.8261C45.8989 52.2224 47.447 50.6223 49.0346 49.0347C50.6222 47.4471 52.2224 45.8989 53.8261 44.3937C54.4909 43.7701 55.1575 43.1537 55.8241 42.5463C57.3812 41.1218 58.9419 39.742 60.4991 38.4106C60.9614 38.0146 61.4219 37.624 61.8842 37.237C65.9697 33.8091 70.0247 30.7181 73.9435 28.0411C74.4846 27.6719 75.024 27.31 75.5598 26.957C77.8247 25.4626 80.0395 24.1133 82.1825 22.927C91.9035 17.5407 99.1319 16.1054 102.013 18.9867C104.895 21.8681 103.457 29.0965 98.0729 38.8174C96.8849 40.9605 95.5374 43.1734 94.043 45.4384C93.69 45.9741 93.328 46.5135 92.9589 47.0547C90.2818 50.9735 87.1908 55.0285 83.763 59.114C83.3759 59.5763 82.9853 60.0368 82.5893 60.4991C81.2579 62.058 79.8764 63.6187 78.4519 65.1777C77.8444 65.8443 77.228 66.509 76.6062 67.1738C75.0993 68.7776 73.5511 70.3759 71.9635 71.9635C70.3759 73.5511 68.7757 75.1011 67.172 76.6063C66.5072 77.2298 65.8424 77.8444 65.1759 78.4519C63.6187 79.8764 62.0562 81.258 60.4991 82.5893C60.0385 82.9853 59.5762 83.376 59.1157 83.7612C55.0285 87.1891 50.9734 90.2819 47.0546 92.9589C46.5135 93.328 45.9741 93.69 45.4383 94.043C44.2521 94.8261 43.0802 95.5679 41.9263 96.2667C42.2488 96.7684 42.5265 97.3006 42.7523 97.8615C43.7629 97.2505 44.7879 96.6072 45.8218 95.9334C46.3558 95.5858 46.8916 95.231 47.4309 94.8673C51.6705 92.0092 56.0695 88.6674 60.5009 84.9385C60.9614 84.5496 61.4219 84.159 61.8842 83.763C63.8911 82.0392 65.9016 80.2402 67.9031 78.3731C68.5661 77.7566 69.2273 77.1331 69.8867 76.5005C71.0066 75.4308 72.1212 74.3395 73.2303 73.2304C74.3395 72.1212 75.4308 71.0066 76.5005 69.8867C77.133 69.2273 77.7566 68.5661 78.373 67.9031C80.2402 65.9016 82.0392 63.8911 83.763 61.8842C84.159 61.4219 84.5514 60.9596 84.9385 60.4991C88.6673 56.0678 92.011 51.6687 94.8672 47.4309C95.231 46.8916 95.5858 46.3558 95.9334 45.8218C97.297 43.7271 98.5352 41.6772 99.639 39.6865C102.445 34.6208 104.223 30.1985 104.923 26.5431C105.688 22.5436 105.136 19.5745 103.28 17.7199Z"
            fill="#D9E6F7"
          />
          <path
            d="M115.136 72.2831C116.015 68.5617 113.71 64.8325 109.989 63.9538C106.267 63.0751 102.538 65.3795 101.659 69.101C100.781 72.8224 103.085 76.5516 106.807 77.4303C110.528 78.309 114.257 76.0046 115.136 72.2831Z"
            fill="#D9E6F7"
          />
          <path
            d="M76.8884 13.2297C77.7671 9.50825 75.4627 5.77908 71.7412 4.90035C68.0198 4.02161 64.2906 6.32607 63.4119 10.0475C62.5332 13.7689 64.8376 17.4981 68.5591 18.3768C72.2805 19.2556 76.0097 16.9511 76.8884 13.2297Z"
            fill="#D9E6F7"
          />
          <path
            d="M40.573 103.05C41.4517 99.3289 39.1472 95.5998 35.4258 94.721C31.7044 93.8423 27.9752 96.1467 27.0965 99.8682C26.2177 103.59 28.5222 107.319 32.2436 108.198C35.9651 109.076 39.6942 106.772 40.573 103.05Z"
            fill="#D9E6F7"
          />
          <path
            d="M23.2466 23.4559C25.9504 20.752 25.9504 16.3681 23.2466 13.6642C20.5427 10.9604 16.1588 10.9604 13.4549 13.6642C10.751 16.3681 10.751 20.752 13.4549 23.4559C16.1588 26.1598 20.5427 26.1598 23.2466 23.4559Z"
            fill="#D9E6F7"
          />
          <path
            d="M69.8879 62.7228C71.1123 57.5374 67.9013 52.3413 62.7159 51.1169C57.5306 49.8925 52.3345 53.1035 51.1101 58.2888C49.8856 63.4741 53.0966 68.6703 58.282 69.8947C63.4673 71.1191 68.6634 67.9081 69.8879 62.7228Z"
            fill="#D9E6F7"
          />
        </svg>
      )
    },
    {
      name: "История Казахстана",
      link: "historyk",
      img: (
        <svg
          width="164"
          height="127"
          viewBox="0 0 164 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M81.5132 0.710022C100.925 0.710022 116.679 16.405 116.679 35.8022C116.679 55.1732 100.951 70.8682 81.5132 70.8682C62.1016 70.8682 46.3477 55.1732 46.3477 35.8022C46.3477 16.4311 62.1016 0.710022 81.5132 0.710022Z"
            fill="#D9E6F7"
          />
          <path
            d="M80.3374 97.0179L79.7365 98.2172L79.0572 99.7554L78.6653 100.485L78.3257 101.163L78.0644 101.711L77.7248 102.05L76.9149 101.372L76.0266 100.772L75.0861 100.303L74.0672 99.9118L72.996 99.6511L71.9248 99.3904L70.8537 99.1818L69.7041 99.0515L67.3528 98.8429L65.0014 98.7647L62.7024 98.6343L60.5339 98.3736L59.3321 98.165L58.1826 97.9043L57.5817 97.6957L56.9808 97.4872L56.4321 97.2265L55.9619 96.9657L55.2303 96.4965L54.4988 95.949L53.6889 95.3493L52.9574 94.6715L51.4159 93.1854L49.8745 91.6993L48.3331 90.2915L46.9223 89.014L46.243 88.5447L45.5637 88.0754L44.9628 87.8147L44.3619 87.6061L43.2124 87.3454L42.1935 87.0065L41.1745 86.6675L40.1556 86.1982L39.2673 85.8072L38.3791 85.2597L37.5692 84.7122L36.8376 84.1647L36.0277 83.565L35.3485 82.9654L34.6692 82.2875L33.9638 81.6097L32.6836 80.2018L31.4818 78.7157L29.0521 75.5611L26.4917 72.3282L25.0026 70.79L23.4611 69.2518L22.5728 68.4436L21.6846 67.7136L20.744 67.0357L19.7251 66.3057L19.5161 66.384L19.3332 66.5404L19.1242 66.8011L18.9936 67.14L18.8107 67.7397L18.7323 68.0004L18.2621 67.8179L17.844 67.6093L17.3738 67.4007L16.9819 67.2704H16.1197L15.6495 67.4007L15.1531 67.6093L15.6233 68.209L16.2242 69.0172L16.8251 69.9557L17.3738 70.9725L17.9224 72.0414L18.3143 73.0582L18.4449 73.6057L18.5756 74.0229L18.6539 74.4922V74.8832H17.9224H15.0224L15.5711 75.6915L16.172 76.4997L16.8513 77.3079L17.5828 78.0379L18.3143 78.7679L19.0458 79.4979L19.7774 80.0975L20.4566 80.5668L19.7251 80.645L18.7062 80.7232L17.7134 80.8536L16.9819 80.9318L17.5828 81.4793L18.3143 82.0268L19.1242 82.6265L20.0125 83.2261L20.9008 83.7475L21.7891 84.2168L22.599 84.4775L23.3305 84.6861L23.6701 84.7643L23.9314 84.8425L24.1404 84.9207L24.271 85.0511L24.3494 85.1293V85.39L24.271 85.5204L24.1404 85.9115L24.062 86.3286L23.9837 86.5893V86.7979L24.062 87.1368L24.1404 87.3975L24.271 87.5279L24.48 87.6582L24.7413 87.7886L25.0809 87.8668L25.4206 87.9972L25.7602 88.1275L26.0999 88.2579L26.3611 88.4665L26.4395 88.5447V88.675L26.3611 88.7532L26.0999 88.9618L25.8386 89.1704L25.5773 89.4311L25.3161 89.77V90.0307L25.2377 90.2915L25.3161 90.6304L25.3422 91.0215L26.4917 91.4125L27.6935 91.8297L28.2422 91.96L28.7908 92.1686L29.1827 92.3772L29.5224 92.5857L27.3017 94.3325L27.9025 94.88L28.6341 95.2711L29.5746 95.7143L30.5151 96.0532L31.5863 96.3922L32.6052 96.6007L33.4935 96.8093H34.3034L33.5719 97.3568L32.6314 97.9565L31.6124 98.504L30.8809 99.0515L31.5602 99.5207L32.5007 99.99L33.5719 100.538L34.8521 101.137L37.8043 102.415L41.0439 103.692L44.4142 104.865L47.706 105.934L49.1952 106.404L50.5538 106.743L51.7556 107.081L52.8267 107.29L50.6583 107.081L48.6466 106.821L46.6349 106.482L44.7538 106.091L42.8727 105.543L41.0439 104.996L39.2935 104.396L37.6214 103.718L34.3295 102.363L31.2205 101.007L29.7314 100.407L28.2422 99.8075L26.8314 99.26L25.4206 98.7125L25.7602 98.504L26.1521 98.3736L26.7008 98.165L27.3017 98.0347L28.5818 97.6175L29.7314 97.2265L27.7197 96.8875L24.9503 96.34L23.5918 95.949L22.4422 95.61L21.972 95.4536L21.5539 95.245L21.2143 95.0365L21.0053 94.8279V94.7497L21.0837 94.6715L21.2927 94.5932L21.5017 94.4629L22.0503 94.2543L22.7819 94.0457L24.4017 93.5765L25.7602 93.1072L22.4683 92.5075L19.908 92.0904L18.9675 91.8818L18.2359 91.6211L17.9747 91.4907L17.7134 91.2822L17.5044 91.1518L17.3215 91.0215L17.5305 90.8911L18.1314 90.7607L19.0197 90.6304L20.0386 90.4218L21.1098 90.2915L22.0503 90.0307L22.5206 89.9004L22.9125 89.77L23.1737 89.5615L23.435 89.3529L22.8864 89.1443L22.3638 88.9357L21.6846 88.8054L21.0314 88.675L19.49 88.4665L17.9485 88.2579L17.1386 88.0493L16.4071 87.9189L15.6756 87.6582L14.9441 87.3975L14.2648 87.0586L13.6116 86.5893L13.063 86.12L12.645 85.5204L12.7756 85.4422L13.063 85.364H13.4026L13.9513 85.4422L15.1531 85.5204L16.5116 85.5986L18.0008 85.729H19.8819L20.4305 85.6507L20.8485 85.5204L21.1098 85.39L19.49 84.7122L17.3215 83.7736L16.1197 83.174L14.8396 82.5743L13.5594 81.8965L12.2792 81.2186L11.0774 80.4886L9.92787 79.6804L8.85671 78.8722L7.91617 78.064L7.52428 77.5947L7.10627 77.1775L6.84501 76.7865L6.58375 76.3172L6.27024 75.9L6.13961 75.4307L6.06123 75.0136L6.00898 74.5443H6.47924L7.02789 74.6225L7.57653 74.8311L8.12518 75.0397L9.19635 75.7175L10.3981 76.3954L10.9468 76.7343L11.5477 77.0732L12.1486 77.334L12.6972 77.5425L13.2981 77.6729L13.8468 77.7511H14.4477L14.9963 77.5425L13.3765 76.3432L11.5477 74.805L9.45761 72.98L7.36753 70.9725L5.27745 68.8086L3.318 66.6447L2.42972 65.4715L1.56756 64.4025L0.836031 63.3336L0.156756 62.3168L0 62.03V61.5607L0.0783779 61.3522L0.156756 61.1436L0.365764 61.0132L0.574772 60.8047L0.78378 60.6743L1.04504 60.5961L1.3063 60.5179H1.82882L2.16846 60.5961L2.42972 60.6743L2.69098 60.8829L2.89998 61.0915L4.10178 62.2907L5.51258 63.6986L7.00176 65.2368L8.62157 66.775L10.2414 68.1829L11.8612 69.5386L12.6711 70.0861L13.4026 70.5554L14.2125 70.9465L14.9441 71.2072L14.3954 70.8682L13.7945 70.2686L12.9846 69.4604L12.0963 68.4436L10.1369 66.0972L8.02068 63.3857L6.94951 61.8997L5.9306 60.4136L4.99006 58.9275L4.04953 57.5197L3.23962 56.164L2.56035 54.9647L2.09008 53.8175L1.69819 52.879L1.61981 52.54V51.9925L1.69819 51.784L1.82882 51.5754L1.95945 51.3668L2.09008 51.2365L2.29909 51.1061L2.76935 50.9757L3.18737 50.8454H4.12791L4.38916 50.9236L4.59817 51.0018L4.85943 51.1322L5.06844 51.3407L5.61709 51.81L6.16573 52.4879L7.36753 54.0261L8.6477 55.9815L10.1369 58.0672L11.6783 60.2311L12.4882 61.2479L13.2981 62.2647L14.1864 63.1511L15.1269 63.9593L13.9774 61.7432L12.6972 59.1882L12.018 57.7804L11.4171 56.3725L10.8162 54.8865L10.2675 53.4004L9.79724 51.8622L9.32697 50.3761L8.98734 48.89L8.72608 47.404L8.59545 45.9961L8.49094 44.6143L8.56932 43.9365L8.6477 43.3368L8.72608 42.7372L8.85671 42.1375L8.98734 41.929L9.06572 41.7204L9.27472 41.5118L9.40535 41.3815L9.87562 41.1729L10.3459 41.0425H10.8162L11.208 41.1207L11.4171 41.199L11.5477 41.2772L11.6261 41.4075L11.7044 41.6161L12.3837 43.78L12.9846 46.0743L13.5855 48.4207L14.1864 50.715L14.7873 53.0093L15.5972 55.1732L16.0152 56.19L16.4855 57.2068L17.0341 58.1454L17.635 59.084L17.217 57.1286L16.9558 55.3818L16.6945 53.7654L16.5639 52.2793L16.4332 51.0018L16.3549 49.8547L16.4332 48.9161L16.5116 48.1079L16.6423 47.43L16.8513 46.8825L16.9819 46.674L17.1125 46.4654L17.2431 46.335L17.4522 46.2047L17.6612 46.1265H18.2621L18.8107 46.335L19.3594 46.5957L19.8296 48.7597L20.2999 50.8454L20.8485 52.8007L21.4494 54.6779L22.1287 56.555L22.8602 58.4322L23.6701 60.3875L24.6107 62.3429L25.29 63.6204L25.9692 64.8979L26.7008 66.1754L27.4323 67.4529L28.2422 68.6522L29.0521 69.8515L29.9142 71.0507L30.7242 72.25L32.344 74.2575L34.016 76.1347L35.7665 78.0118L37.5953 79.7586L39.4764 81.5054L41.4358 83.1218L43.4475 84.66L45.5376 86.1461L46.9484 87.0847L48.4376 87.945L49.979 88.8315L51.4682 89.6397L53.8195 90.7868L56.1186 91.8557L58.5483 92.7943L60.978 93.6807L63.2771 94.4107L65.6285 95.0104L68.0582 95.5579L70.4095 96.0272L72.8915 96.3661L75.3212 96.6268L77.8293 96.8354L80.3374 97.0179Z"
            fill="#D9E6F7"
          />
          <path
            d="M86.4772 117.458L87.6268 117.588L88.1754 117.797L88.306 117.875V117.953H88.1754L88.0448 118.031L86.9736 118.24H86.1115L83.2898 118.031L79.8412 117.953L76.1313 117.875L72.2908 117.953L70.462 118.031L68.6332 118.162L67.0134 118.292L65.4719 118.423L64.1918 118.631L63.0422 118.892L62.6242 119.022L62.2323 119.153L61.8927 119.283L61.6314 119.491L61.762 118.814L62.0233 118.136L61.553 118.266L61.0828 118.396L60.6647 118.605L60.2729 118.814L59.9332 119.022L59.672 119.283L59.463 119.622L59.3846 119.961L59.1756 119.491L59.0449 119.074L58.9666 118.605L58.8882 118.214L58.9666 117.875L59.0449 117.458L59.1233 117.119L59.3323 116.78L59.463 116.519L59.7242 116.18L59.9855 115.92L60.2467 115.659L60.9783 115.19L61.7882 114.72C62.2323 114.981 62.7287 115.164 63.199 115.32C63.617 115.372 64.1134 115.32 64.6098 115.19C65.4197 115.92 66.5431 115.815 67.2485 115.059C67.3791 114.929 67.5359 114.694 67.5881 114.512C67.6926 114.121 67.6665 113.625 67.5881 113.156L68.398 113.078L69.3386 112.948L70.3575 112.687L71.4287 112.426L72.4998 112.218L73.5187 111.957L74.4593 111.826L75.2692 111.748L74.9295 112.009L74.1196 112.609L73.1791 113.339L72.4998 113.808L73.3881 114.016L74.1196 114.147L73.571 114.746L73.0223 115.346L72.4737 115.946L72.0818 116.493L72.6304 116.702L73.1791 116.832L73.78 116.963H74.9818L75.5827 116.832L76.1836 116.702L76.6539 116.441L77.2025 116.702L77.7511 116.91L78.2998 117.041L78.8484 117.171L80.0502 117.301L81.3304 117.432H86.4772"
            fill="#D9E6F7"
          />
          <path
            d="M115.973 120.743L115.503 120.951L115.033 121.03L114.615 121.108L114.275 121.03L113.935 120.951L113.596 120.821L113.334 120.691L112.995 120.482L112.446 120.065L111.897 119.674L111.636 119.465L111.297 119.335L111.035 119.257H110.696L110.095 120.534L109.285 122.151L109.024 122.568L108.762 122.907L108.501 123.115L108.24 123.324L107.9 123.454H107.561L107.221 123.324L106.829 123.115L106.698 122.907L106.568 122.698L106.437 122.438L106.307 122.099L106.176 121.499L106.098 121.108L105.706 121.447L105.288 121.916L104.948 122.464L104.504 123.037L104.034 123.637L103.563 124.106L103.302 124.367L102.962 124.575L102.623 124.706L102.231 124.836H102.022L101.682 124.914L101.343 124.836L101.081 124.706L100.271 123.767L99.3831 122.829L98.7822 123.767L98.103 124.575L97.7633 124.914L97.4237 125.253L97.084 125.514L96.7444 125.723L96.4832 125.853L96.1435 125.931H95.8039L95.5426 125.853L95.2814 125.723L95.0723 125.514L94.8111 125.175L94.6805 124.758L94.5498 124.367L94.2886 123.689L94.2102 123.35L94.0534 123.089L93.9228 122.959H93.7922L91.9634 125.905L91.7021 126.166L91.2318 126.374L90.6832 126.505L90.1345 126.635H89.5336L89.0634 126.505L88.9327 126.426L88.7237 126.218L88.6454 126.088V125.827L88.9066 122.881L88.6976 122.959L88.4363 123.089L88.1751 123.22L87.9138 123.48L87.3652 124.08L86.7643 124.758L86.1634 125.488L85.4319 126.088L85.0922 126.348L84.7526 126.609L84.3607 126.818L84.0211 126.896L83.5508 127L83.2112 126.922L83.0805 126.844L82.9499 126.713L82.8715 126.505V126.296L82.9499 125.41L83.0805 124.549L83.1589 124.08L83.0805 123.689L83.0021 123.272L82.7409 122.803L82.3229 123.402L81.6436 124.263L80.8337 125.149L79.9715 126.009L79.5013 126.348L79.031 126.687L78.613 126.818L78.2995 127L78.1688 126.922H77.9598L77.8292 126.791L77.7508 126.713L77.6202 126.505L77.5418 126.296V126.035L77.4634 125.696L77.5418 123.141L75.8436 124.289L73.8319 125.566L73.3617 125.775L72.813 126.035L72.3427 126.166L71.7941 126.296L71.3238 126.426H70.8536L70.3833 126.348L69.9653 126.218L70.1743 125.67L70.3833 125.201L70.5923 124.732L70.8536 124.341L71.1148 123.924L71.3761 123.533L71.7157 123.194L72.0554 122.855L72.7869 122.307L73.649 121.76L74.5373 121.369L75.5562 121.03L76.5752 120.769L77.7247 120.56L78.8742 120.352L80.0238 120.221L82.5319 120.091L85.0922 120.013H90.2129L91.4931 119.935L92.6949 119.856L93.8967 119.778L95.0462 119.648L96.1958 119.439L97.2147 119.231L98.2336 118.97L99.1741 118.579L100.036 118.162L100.768 117.614L101.499 117.067L102.1 116.337L101.421 114.981L101.97 114.903L102.518 114.773L103.067 114.512L103.537 114.173L103.746 114.043L103.981 113.964L104.112 113.704L104.243 113.495L104.321 113.234V112.765L104.19 112.504L105.34 112.296L106.542 112.165L107.822 112.087H109.18L111.95 112.218L114.771 112.426L117.671 112.765L120.493 113.026L123.262 113.286L125.823 113.417V114.355L125.744 114.746L125.614 115.164L125.483 115.555L125.352 115.894L125.143 116.154L124.882 116.493L124.412 116.963L123.811 117.38L123.21 117.64L122.531 117.771L121.799 117.901L121.068 117.823L120.388 117.745L119.657 117.536L118.978 117.197L118.298 116.858L117.75 116.389L117.201 115.841V116.989L116.992 118.475L116.861 119.205L116.652 119.883L116.522 120.143L116.313 120.352L116.182 120.56L115.973 120.743ZM61.7878 114.434L63.3293 115.111L63.7212 114.773L64.2698 114.381L64.8707 114.043L65.4194 113.704L67.4311 112.895L69.1815 112.087L70.0437 111.748L70.7752 111.331L71.5067 110.94L72.1076 110.523L73.649 109.506L75.1905 108.489L76.6797 107.551L78.0382 106.612L79.0571 105.804L79.867 105.074L80.7553 104.266L81.6958 103.379L82.0355 103.04L82.4535 102.78L82.9238 102.519L83.4724 102.258L84.622 101.711L85.7715 101.32L87.3129 100.903L88.985 100.485L90.7354 100.146L92.6949 99.8075L95.0462 99.5468L97.3976 99.2079L99.8273 98.9472L102.179 98.53L102.989 98.3997L103.72 98.1911L104.53 97.9825L105.34 97.774L106.15 96.7572L107.43 95.3493L108.292 94.489L109.311 93.6807L110.461 92.7943L111.819 91.934L113.831 90.7347L115.999 89.6657L118.22 88.5186L120.388 87.5018L122.4 86.485L124.281 85.5465L125.823 84.7382L127.024 83.93L127.364 82.9132L127.834 81.8965L128.435 80.8797L129.167 79.8629L129.977 78.794L130.996 77.725L132.067 76.5257L133.425 75.2482L134.627 74.1793L135.907 73.1104L136.587 72.6411L137.266 72.1718L137.997 71.7547L138.729 71.3636L139.46 71.0247L140.192 70.764L141.002 70.5554L141.733 70.3468L142.543 70.2686L143.275 70.1904L144.085 70.2686L144.816 70.399L144.738 71.2072L144.529 72.0154L144.268 72.8236L143.928 73.684L143.458 74.5704L142.857 75.4307L142.125 76.3693L141.237 77.3079L141.916 77.2297L142.517 77.0993L142.987 76.969L143.458 76.7604L143.876 76.63L144.346 76.4997L144.947 76.4215L145.626 76.3432L145.704 76.8125V77.2818L145.626 77.7511L145.495 78.1422L145.286 78.5593L145.025 78.9504L144.764 79.2893L144.424 79.6282L143.014 80.984L141.603 82.2615L142.413 82.3397L143.301 82.6004L144.163 82.8611L144.842 82.9915L144.032 83.5911L143.092 84.1907L142.151 84.7904L141.08 85.39L140.009 85.9897L138.938 86.6675L137.867 87.3975L136.848 88.2057L137.318 88.284L137.919 88.5447L138.18 88.6229L138.441 88.7532L138.65 88.8315L138.859 88.7532L137.501 89.4832L135.829 90.2915L135.019 90.7086L134.34 91.0997L134 91.3082L133.791 91.5168L133.66 91.7254L133.53 91.934L133.608 92.1947L133.739 92.4032L134 92.6118L134.209 92.8204L134.131 93.0811L134 93.2897L133.739 93.4982L133.478 93.7068L132.877 94.0457L132.067 94.3847L131.257 94.6454L130.525 94.9061L129.977 95.1668L129.559 95.3754L130.917 96.7311L130.447 97.2004L129.977 97.5393L129.559 97.7479L129.088 97.9565L128.148 98.0868H126.868L126.998 98.6865L127.207 99.2861L127.338 99.964L127.469 100.642L126.319 101.502L124.908 102.519L123.367 103.536L121.616 104.553L120.597 105.1L119.579 105.569L118.507 105.986L117.358 106.378L116.156 106.795L114.954 107.081L113.596 107.342L112.185 107.551L114.667 107.629H116.835L118.847 107.42L120.676 107.212L122.348 106.873L123.837 106.456L125.326 105.908L126.737 105.361L128.618 104.474L130.447 103.458L132.197 102.389L134.026 101.32L132.955 100.772L131.884 100.433L131.335 100.225L130.787 99.964L130.186 99.7032L129.585 99.3643L130.133 98.9472L130.734 98.6865L131.466 98.4257L132.276 98.2172L133.896 97.8783L135.594 97.6697L137.083 97.4611L138.441 97.3307L138.99 97.2004L139.46 97.07L139.722 96.9397L139.931 96.7311L139.852 96.6529L139.722 96.5225L139.513 96.4443L139.251 96.314L138.468 96.2618L137.527 96.1315L136.587 96.0532L135.646 95.9229L134.836 95.7143L134.287 95.5057L136.116 95.0886L137.945 94.6975L139.565 94.3586L140.923 94.0197L142.073 93.6807L143.092 93.2636L143.536 93.1072L143.876 92.8986L144.215 92.69L144.477 92.4293L144.398 92.3511L144.268 92.2207L144.006 92.1425L143.667 92.0643L142.805 91.9861H141.786L140.714 91.9079L139.696 91.8297L138.833 91.6993L138.285 91.569L138.755 91.3604L139.225 91.1518L140.845 90.6825L142.256 90.2915L143.536 89.9525L144.738 89.5354L146.018 89.1443L147.298 88.5968L147.899 88.2579L148.448 87.919L148.657 87.7104L148.866 87.4497L149.075 87.2411L149.153 87.0325L149.075 86.824L148.866 86.6936L148.657 86.6154H146.776L145.914 86.6936H144.712L144.372 86.6154L144.111 86.485L143.85 86.3547L146.541 84.6079L149.022 82.9915L151.243 81.5836L153.203 80.2279L154.013 79.55L154.744 78.8722L155.345 78.1943L155.894 77.5165L156.312 76.7865L156.651 76.0565L156.86 75.2482V74.3618H156.39L155.92 74.44L155.371 74.6486L154.822 74.8572L153.751 75.535L152.602 76.2129L152.001 76.5518L151.452 76.8907L150.851 77.1515L150.25 77.36L149.702 77.4904L149.153 77.5686H148.552L148.004 77.36L149.623 76.1607L151.452 74.6225L153.542 72.7975L155.632 70.79L157.722 68.6261L159.682 66.4622L160.544 65.315L161.406 64.2461L162.138 63.1772L162.817 62.1604L162.948 61.8997L163.026 61.6911L162.948 61.4304L162.869 61.2218L162.791 61.0132L162.582 60.8829L162.373 60.6743L162.164 60.5961L161.903 60.4657L161.641 60.3875H161.093L160.831 60.4657L160.492 60.544L160.283 60.7525L160.022 60.9611L158.82 62.1604L157.409 63.5682L155.92 65.1065L154.3 66.6447L152.68 68.0525L151.06 69.4082L150.25 69.9557L149.519 70.425L148.709 70.8422L148.03 71.1811L148.5 70.79L149.101 70.1904L149.911 69.3822L150.773 68.3654L152.732 66.019L154.901 63.2554L155.998 61.8215L157.017 60.3354L158.036 58.9275L158.924 57.4415L159.734 56.0857L160.413 54.8865L160.962 53.7393L161.302 52.8007L161.38 52.4618V51.9143L161.302 51.7057L161.171 51.4972L161.04 51.2886L160.91 51.1582L160.701 51.08L160.283 50.8715L159.813 50.7411H158.872L158.611 50.8193L158.402 50.8975L158.14 51.0279L157.931 51.2365L157.383 51.7057L156.834 52.3836L155.632 53.9218L154.352 55.8772L152.941 57.9629L151.4 60.1268L150.512 61.1436L149.702 62.1604L148.84 63.0207L147.899 63.829L149.101 61.6129L150.303 59.0579L150.982 57.65L151.583 56.2422L152.184 54.7561L152.732 53.27L153.203 51.7318L153.673 50.2457L153.986 48.7857L154.248 47.2997L154.378 45.8918L154.457 44.5361L154.378 43.8582L154.3 43.2586L154.222 42.659L154.091 42.0593L154.013 41.8507L153.882 41.6422L153.673 41.4336L153.542 41.3032L153.072 41.0947L152.602 40.9643H152.131L151.713 41.0425L151.583 41.1207L151.374 41.199L151.295 41.3293L151.217 41.5379L150.538 43.754L149.937 45.97L149.336 48.3165L148.735 50.6107L148.134 52.905L147.324 55.069L146.932 56.1379L146.462 57.0765L145.914 58.0932L145.313 58.9536L145.704 56.9982L145.966 55.2515L146.227 53.635L146.358 52.149L146.488 50.8715L146.567 49.7243V48.7857L146.488 47.9775L146.358 47.2997L146.149 46.7522L146.018 46.5436L145.887 46.335L145.757 46.2047L145.548 46.1265L145.339 46.0482L145.13 45.97H144.921L144.712 46.0482L144.163 46.1786L143.614 46.4393L143.144 48.6032L142.674 50.689L142.125 52.6443L141.524 54.5215L140.845 56.3986L140.114 58.2757L139.304 60.2311L138.363 62.1865L137.684 63.464L137.005 64.7415L136.273 66.019L135.541 67.2965L134.732 68.4957L133.922 69.695L133.033 70.8943L132.171 72.0936L130.551 74.1011L128.853 75.9782L127.103 77.8554L125.274 79.6022L123.393 81.349L121.433 82.9654L119.422 84.5036L117.332 85.9897L115.921 86.9282L114.432 87.8668L112.943 88.7532L111.453 89.6136L109.102 90.6825L106.751 91.7515L104.321 92.6379L101.891 93.4982L99.8795 94.0979L97.8678 94.6975L95.7777 95.1668L93.6877 95.6361L91.5976 95.975L89.4291 96.2357L87.3391 96.4965L85.1706 96.6268L84.9616 96.705L84.7526 96.7832L84.3607 96.9918L83.8904 97.3307L83.2112 97.9304L82.3229 98.7386L81.2517 99.8075L79.9715 101.215L78.7697 102.623L77.3589 104.161L76.6274 104.891L75.8959 105.621L75.0337 106.299L74.1716 106.977L73.4923 107.446L72.813 107.864L72.0815 108.203L71.35 108.541L69.7301 109.219L68.1103 109.819L66.4905 110.419L65.0797 110.966L64.4788 111.227L63.8779 111.566L63.3293 111.826L62.9113 112.087L62.5194 112.504L62.1797 112.843L61.9707 113.182L61.8401 113.521L61.7617 113.99V114.434"
            fill="#D9E6F7"
          />
        </svg>
      )
    },
    {
      name: "Всемирная история",
      link: "historyb",
      img: (
        <svg
          width="87"
          height="102"
          viewBox="0 0 87 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M85.4217 88.6125H80.7085V79.8575C80.7085 79.0075 79.995 78.3062 79.1302 78.3062H74.417V57.5238C74.417 56.9712 74.1143 56.4613 73.617 56.185C73.1198 55.9088 72.5144 55.9088 72.0388 56.2063L65.704 59.925L58.0072 53.125C57.791 52.9338 57.5316 52.8063 57.2505 52.7637L49.705 51.4038L56.9046 46.6862L66.3526 49.0875C66.8499 49.215 67.3688 49.0875 67.7796 48.7688L73.8981 43.6263C74.244 43.3288 74.4386 42.9037 74.4386 42.4575V27.7738C81.5084 27.0087 87.0216 21.1012 87.0216 13.9613C87 6.2475 80.6653 0 72.8603 0H14.1613C6.35636 0 0 6.2475 0 13.9188C0 21.0588 5.51317 26.9662 12.583 27.7313V78.3062H7.86978C7.00497 78.3062 6.2915 79.0075 6.2915 79.8575V88.6125H1.57828C0.713469 88.6125 0 89.2925 0 90.1425V100.449C0 101.299 0.713469 102 1.57828 102H85.4433C86.3081 102 87.0216 101.299 87.0216 100.449V90.1425C87 89.2925 86.3081 88.6125 85.4217 88.6125ZM62.6772 61.3913L64.45 62.9637C64.9689 63.41 65.704 63.495 66.3094 63.1337L71.2604 60.2225V78.285H62.6556V61.3913H62.6772ZM50.9374 54.74L56.2343 55.6962L59.5422 58.6075V78.285H50.9374V54.74ZM71.2821 41.6925L66.331 45.8575L62.6772 44.9225V32.4487C62.6772 31.5988 61.9637 30.8975 61.0989 30.8975C60.2341 30.8975 59.5206 31.5988 59.5206 32.4487V44.1362L56.9694 43.4987C56.537 43.3925 56.083 43.4775 55.7155 43.7113L50.9157 46.8562V22.1425C50.9157 21.2925 50.2023 20.5912 49.3375 20.5912C48.4727 20.5912 47.7592 21.2925 47.7592 22.1425V48.8963L44.6891 50.915C44.1486 51.255 43.8892 51.8925 44.0189 52.5087C44.1486 53.125 44.6459 53.5925 45.2729 53.72L47.7592 54.1662V78.3062H39.1543V22.1425C39.1543 21.2925 38.4408 20.5912 37.576 20.5912C36.7112 20.5912 35.9978 21.2925 35.9978 22.1425V78.285H27.4578V32.4487C27.4578 31.5988 26.7443 30.8975 25.8795 30.8975C25.0147 30.8975 24.3012 31.5988 24.3012 32.4487V78.3062H15.7179V27.7313C22.2689 27.0088 27.4794 21.8875 28.2145 15.47H58.7855C59.5206 21.9088 64.7311 27.03 71.2821 27.7313V41.6925ZM3.13494 13.9188C3.13494 7.9475 8.06436 3.1025 14.1397 3.1025H72.8603C78.9356 3.1025 83.8651 7.9475 83.8651 13.9188C83.8651 19.89 78.9356 24.735 72.8603 24.735C66.785 24.735 61.8556 19.89 61.8556 13.9188C61.8556 13.0688 61.1421 12.3675 60.2773 12.3675H26.7227C25.8578 12.3675 25.1444 13.0688 25.1444 13.9188C25.1444 19.89 20.215 24.735 14.1397 24.735C8.08598 24.735 3.13494 19.8687 3.13494 13.9188ZM9.42644 81.3875H77.5519V88.5912H9.42644V81.3875ZM83.8651 98.8975H3.13494V91.6938H83.8434V98.8975H83.8651Z"
              fill="#D9E6F7"
            />
            <path
              d="M19.9124 13.9188C19.9124 10.795 17.318 8.245 14.1398 8.245C10.9616 8.245 8.36719 10.795 8.36719 13.9188C8.36719 17.0425 10.9616 19.5925 14.1398 19.5925C17.318 19.5925 19.9124 17.0425 19.9124 13.9188ZM11.5237 13.9188C11.5237 12.495 12.6912 11.3475 14.1398 11.3475C15.5884 11.3475 16.7559 12.495 16.7559 13.9188C16.7559 15.3425 15.5884 16.49 14.1398 16.49C12.7129 16.49 11.5237 15.3213 11.5237 13.9188Z"
              fill="#D9E6F7"
            />
            <path
              d="M72.8605 19.5713C76.0387 19.5713 78.6331 17.0213 78.6331 13.8975C78.6331 10.7738 76.0387 8.22375 72.8605 8.22375C69.6823 8.22375 67.0879 10.7738 67.0879 13.8975C67.0879 17.0213 69.6823 19.5713 72.8605 19.5713ZM72.8605 11.3263C74.3091 11.3263 75.4766 12.4738 75.4766 13.8975C75.4766 15.3213 74.3091 16.4688 72.8605 16.4688C71.4119 16.4688 70.2445 15.3213 70.2445 13.8975C70.2228 12.495 71.4119 11.3263 72.8605 11.3263Z"
              fill="#D9E6F7"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="87" height="102" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      name: "Информатика",
      link: "inform",
      img: (
        <svg
          width="112"
          height="113"
          viewBox="0 0 112 113"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M56.0002 91.63C56.9335 91.63 57.7035 90.86 57.7035 89.9267C57.7035 88.9933 56.9335 88.2233 56.0002 88.2233C55.0669 88.2233 54.2969 88.9933 54.2969 89.9267C54.2969 90.8833 55.0669 91.63 56.0002 91.63Z"
            fill="#D9E6F7"
          />
          <path
            d="M103.507 0H8.49333C3.80333 0 0 3.80333 0 8.49333V89.95C0 94.6167 3.80333 98.4433 8.49333 98.4433H33.95V108.617H22.05C21.1167 108.617 20.3467 109.387 20.3467 110.32C20.3467 111.253 21.1167 112.023 22.05 112.023H89.9267C90.86 112.023 91.63 111.253 91.63 110.32C91.63 109.387 90.86 108.617 89.9267 108.617H78.05V98.4433H103.507C108.173 98.4433 112 94.64 112 89.95V8.49333C112 3.80333 108.197 0 103.507 0ZM74.6667 108.593H37.3333V98.42H74.6667V108.593ZM108.617 89.9267C108.617 92.7267 106.33 95.0133 103.53 95.0133H8.49333C5.69333 95.0133 3.40667 92.7267 3.40667 89.9267V84.84H108.617V89.9267ZM108.617 81.4567H3.38333V8.49333C3.38333 5.69333 5.67 3.40667 8.47 3.40667H103.507C106.307 3.40667 108.593 5.69333 108.593 8.49333V81.4567H108.617Z"
            fill="#D9E6F7"
          />
          <path
            d="M27.72 15.8433H20.93C18.7367 15.8433 16.9634 17.6167 16.9634 19.81V33.39C16.9634 35.5833 18.7367 37.3567 20.93 37.3567H27.72C29.9134 37.3567 31.6867 35.5833 31.6867 33.39V19.81C31.6634 17.6167 29.89 15.8433 27.72 15.8433ZM28.28 33.3667C28.28 33.67 28.0234 33.9267 27.72 33.9267H20.93C20.6267 33.9267 20.37 33.67 20.37 33.3667V19.81C20.37 19.5067 20.6267 19.25 20.93 19.25H27.72C28.0234 19.25 28.28 19.5067 28.28 19.81V33.3667Z"
            fill="#D9E6F7"
          />
          <path
            d="M72.9632 15.8433H66.1732C63.9799 15.8433 62.2065 17.6167 62.2065 19.81V33.39C62.2065 35.5833 63.9799 37.3567 66.1732 37.3567H72.9632C75.1566 37.3567 76.9299 35.5833 76.9299 33.39V19.81C76.9299 17.6167 75.1566 15.8433 72.9632 15.8433ZM73.5465 33.3667C73.5465 33.67 73.2899 33.9267 72.9866 33.9267H66.1965C65.8932 33.9267 65.6365 33.67 65.6365 33.3667V19.81C65.6365 19.5067 65.8932 19.25 66.1965 19.25H72.9866C73.2899 19.25 73.5465 19.5067 73.5465 19.81V33.3667Z"
            fill="#D9E6F7"
          />
          <path
            d="M48.8133 16.0067C48.23 15.7267 47.53 15.7967 47.0167 16.2167L41.37 20.7433C40.6467 21.3267 40.53 22.4 41.1133 23.1233C41.6967 23.8467 42.77 23.9633 43.4933 23.38L46.3867 21.07V35.63C46.3867 36.5633 47.1567 37.3333 48.09 37.3333C49.0233 37.3333 49.7933 36.5633 49.7933 35.63V17.5467C49.77 16.8933 49.3967 16.2867 48.8133 16.0067Z"
            fill="#D9E6F7"
          />
          <path
            d="M94.0799 16.0067C93.4966 15.7267 92.7966 15.7967 92.2833 16.2167L86.6366 20.7433C85.9133 21.3267 85.7966 22.4 86.3799 23.1233C86.9633 23.8467 88.0366 23.9633 88.7599 23.38L91.6533 21.07V35.63C91.6533 36.5633 92.4233 37.3333 93.3566 37.3333C94.2899 37.3333 95.0599 36.5633 95.0599 35.63V17.5467C95.0366 16.8933 94.6633 16.2867 94.0799 16.0067Z"
            fill="#D9E6F7"
          />
          <path
            d="M44.6834 47.53H37.8934C35.7234 47.53 33.9268 49.3033 33.9268 51.4967V65.0767C33.9268 67.27 35.7001 69.0433 37.8934 69.0433H44.6834C46.8768 69.0433 48.6501 67.27 48.6501 65.0767V51.4967C48.6501 49.3033 46.8768 47.53 44.6834 47.53ZM45.2434 65.0533C45.2434 65.3567 44.9868 65.6133 44.6834 65.6133H37.8934C37.5901 65.6133 37.3334 65.3567 37.3334 65.0533V51.4733C37.3334 51.17 37.5901 50.9133 37.8934 50.9133H44.6834C44.9868 50.9133 45.2434 51.17 45.2434 51.4733V65.0533Z"
            fill="#D9E6F7"
          />
          <path
            d="M91.0701 47.53H84.2801C82.0868 47.53 80.3135 49.3033 80.3135 51.4967V65.0767C80.3135 67.27 82.0868 69.0433 84.2801 69.0433H91.0701C93.2635 69.0433 95.0368 67.27 95.0368 65.0767V51.4967C95.0368 49.3033 93.2635 47.53 91.0701 47.53ZM91.6302 65.0533C91.6302 65.3567 91.3735 65.6133 91.0701 65.6133H84.2801C83.9768 65.6133 83.7202 65.3567 83.7202 65.0533V51.4733C83.7202 51.17 83.9768 50.9133 84.2801 50.9133H91.0701C91.3735 50.9133 91.6302 51.17 91.6302 51.4733V65.0533Z"
            fill="#D9E6F7"
          />
          <path
            d="M20.5334 47.6933C19.9501 47.4133 19.2501 47.4833 18.7368 47.9033L13.0668 52.4067C12.3434 52.99 12.2268 54.0633 12.8101 54.7867C13.3934 55.51 14.4668 55.6267 15.1901 55.0433L18.0834 52.7333V67.2933C18.0834 68.2267 18.8534 68.9967 19.7868 68.9967C20.7201 68.9967 21.4901 68.2267 21.4901 67.2933V49.1867C21.4901 48.5567 21.1168 47.9733 20.5334 47.6933Z"
            fill="#D9E6F7"
          />
          <path
            d="M66.9198 47.6933C66.3364 47.4133 65.6364 47.4833 65.1231 47.9033L59.4764 52.43C58.7531 53.0133 58.6364 54.0867 59.2198 54.81C59.8031 55.5333 60.8764 55.65 61.5998 55.0667L64.4931 52.7567V67.3167C64.4931 68.25 65.2631 69.02 66.1964 69.02C67.1298 69.02 67.8998 68.25 67.8998 67.3167V49.21C67.8764 48.5567 67.5031 47.9733 66.9198 47.6933Z"
            fill="#D9E6F7"
          />
        </svg>
      )
    },
    {
      name: "Английский язык",
      link: "eng",
      img: (
        <svg
          width="97"
          height="166"
          viewBox="0 0 97 166"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8241 37.9624C11.7404 37.9624 11.6846 37.9624 11.6008 37.9343C11.3216 37.8217 11.1262 37.5403 11.1262 37.2307L11.2379 34.4166L8.97666 32.7844C8.72541 32.6156 8.61375 32.2779 8.72541 31.9965C8.83708 31.7151 9.11624 31.5181 9.42333 31.5181L12.215 31.6307L13.8341 29.3512C14.0016 29.098 14.3366 28.9854 14.6158 29.098C14.8949 29.2105 15.0904 29.4919 15.0904 29.8015L14.9787 32.6156L17.2399 34.2478C17.4912 34.4166 17.6028 34.7543 17.4912 35.0357C17.3795 35.3171 17.1003 35.5423 16.7933 35.5141L14.0016 35.4016L12.3825 37.681C12.2429 37.8498 12.0196 37.9624 11.8241 37.9624ZM11.6846 33.0377L12.3546 33.5161C12.55 33.6568 12.6616 33.8819 12.6616 34.1071L12.6337 34.9232L13.1083 34.2478C13.2479 34.0508 13.4712 33.9382 13.6945 33.9664L14.5041 33.9945L13.8341 33.5161C13.6387 33.3754 13.527 33.1503 13.527 32.9251L13.555 32.1091L13.0804 32.7844C12.9408 32.9814 12.7175 33.094 12.4941 33.0659L11.6846 33.0377Z"
            fill="#D9E6F7"
          />
          <path
            d="M4.56575 55.9727C4.482 55.9727 4.42617 55.9727 4.34242 55.9446C4.06325 55.832 3.86784 55.5506 3.86784 55.241L4.06325 50.5978L0.294533 47.8962C0.043285 47.7274 -0.0683808 47.3897 0.043285 47.1083C0.154951 46.8268 0.434115 46.6299 0.741196 46.6299L5.34741 46.8268L8.02739 43.0278C8.19489 42.7745 8.52989 42.662 8.80905 42.7745C9.08821 42.8871 9.28363 43.1685 9.28363 43.478L9.08821 48.1213L12.8569 50.8229C13.1082 50.9917 13.2198 51.3294 13.1082 51.6108C12.9965 51.8922 12.7174 52.0892 12.4103 52.0892L7.80406 51.8922L5.12408 55.6913C4.9845 55.8601 4.78908 55.9727 4.56575 55.9727ZM3.00243 48.1213L5.152 49.6691C5.34741 49.8098 5.45908 50.0349 5.45908 50.2601L5.34741 52.9335L6.88282 50.7666C7.0224 50.5696 7.24573 50.4571 7.46906 50.4852L10.1211 50.5978L7.97156 49.05C7.77614 48.9093 7.66448 48.6842 7.69239 48.459L7.80406 45.7856L6.26865 47.9525C6.12907 48.1495 5.90574 48.262 5.68241 48.2339L3.00243 48.1213Z"
            fill="#D9E6F7"
          />
          <path
            d="M20.1151 23.0757C19.9196 23.0757 19.6963 23.0476 19.5009 22.9632C18.4959 22.6255 17.9655 21.528 18.3005 20.5149C18.6355 19.5018 19.7242 18.9671 20.7292 19.3048C21.2038 19.5018 21.5946 19.8395 21.818 20.2898C22.0413 20.7682 22.0692 21.2747 21.9017 21.7813C21.7621 22.2597 21.3992 22.6536 20.9526 22.8788C20.6734 23.0195 20.3942 23.0757 20.1151 23.0757ZM20.1151 20.6275C20.0313 20.6275 19.9476 20.6556 19.8917 20.6838C19.7521 20.74 19.6684 20.8526 19.6126 20.9652C19.5846 21.1059 19.5846 21.2466 19.6405 21.3873C19.6963 21.4998 19.808 21.5843 19.9476 21.6406C20.0592 21.6687 20.1988 21.6687 20.3384 21.6124C20.4501 21.5561 20.5617 21.4436 20.5896 21.3029C20.6455 21.1622 20.6176 21.0214 20.5617 20.9089C20.5059 20.7963 20.3942 20.7119 20.2826 20.6556C20.2267 20.6275 20.1709 20.6275 20.1151 20.6275Z"
            fill="#D9E6F7"
          />
          <path
            d="M27.0663 15.7872C26.8709 15.7872 26.6475 15.7591 26.4521 15.6746C25.9496 15.5058 25.5588 15.1681 25.3355 14.7178C25.1121 14.2394 25.0842 13.7329 25.2517 13.2264C25.5867 12.2133 26.6755 11.6786 27.6805 12.0163C28.6854 12.354 29.2159 13.4515 28.8809 14.4646C28.6017 15.2807 27.848 15.7872 27.0663 15.7872ZM27.0663 13.3389C26.843 13.3389 26.6475 13.4796 26.5917 13.6766C26.5359 13.8173 26.5638 13.958 26.6196 14.0706C26.6475 14.2113 26.7592 14.2957 26.8988 14.352C27.0384 14.4083 27.178 14.3801 27.2896 14.3239C27.4013 14.2676 27.513 14.155 27.5409 14.0143C27.5967 13.8736 27.5688 13.7329 27.513 13.6203C27.4571 13.5078 27.3455 13.4233 27.2338 13.3671C27.178 13.3389 27.1221 13.3389 27.0663 13.3389Z"
            fill="#D9E6F7"
          />
          <path
            d="M35.916 10.5811C35.7764 10.5811 35.6368 10.5529 35.4973 10.4967C35.1623 10.4122 34.911 10.159 34.7435 9.84942C34.576 9.53986 34.576 9.17403 34.6877 8.83634C34.911 8.13281 35.6648 7.76697 36.3627 8.02024C37.0606 8.24537 37.4235 9.00518 37.1722 9.70871C36.9768 10.2434 36.4743 10.5811 35.916 10.5811ZM35.916 9.17403C35.8881 9.17403 35.8602 9.20217 35.8323 9.23031C35.8043 9.28659 35.8323 9.31473 35.8881 9.34288C35.9439 9.37102 35.9718 9.34288 35.9998 9.28659C35.9998 9.28659 35.9998 9.25845 35.9998 9.23031C35.9998 9.20217 35.9718 9.17403 35.916 9.17403C35.9439 9.17403 35.9439 9.17403 35.916 9.17403Z"
            fill="#D9E6F7"
          />
          <path
            d="M34.7994 29.6889C34.6877 29.6889 34.604 29.6889 34.4923 29.6608C33.7944 29.4919 33.3477 28.7884 33.5152 28.0567C33.6827 27.3532 34.3806 26.9029 35.1065 27.0718C35.8044 27.2406 36.251 27.9442 36.0835 28.6758C35.944 29.2949 35.4135 29.6889 34.7994 29.6889ZM34.7994 28.2819C34.7715 28.2819 34.7435 28.31 34.7156 28.3381C34.7156 28.3944 34.7435 28.4226 34.7715 28.4226C34.8273 28.4226 34.8552 28.3944 34.8552 28.3663C34.911 28.3381 34.8831 28.31 34.7994 28.2819C34.8273 28.2819 34.8273 28.2819 34.7994 28.2819Z"
            fill="#D9E6F7"
          />
          <path
            d="M29.8023 37.6528C29.6906 37.6528 29.6069 37.6528 29.4952 37.6247C28.7973 37.4559 28.3507 36.7523 28.5182 36.0207C28.6857 35.3171 29.3836 34.8669 30.1094 35.0357C30.8073 35.2046 31.254 35.9081 31.0865 36.6398C30.9469 37.2307 30.3886 37.6528 29.8023 37.6528ZM29.8023 36.2458C29.7744 36.2458 29.7465 36.2739 29.7186 36.3021C29.7186 36.3584 29.7465 36.3865 29.7744 36.3865C29.8302 36.3865 29.8581 36.3584 29.8581 36.3302C29.8861 36.3021 29.8581 36.2458 29.8023 36.2458Z"
            fill="#D9E6F7"
          />
          <path
            d="M93.8142 44.1253C93.5908 44.1253 93.3675 44.0127 93.2279 43.8157L91.6367 41.5081L88.845 41.5926C88.5379 41.5926 88.2588 41.3956 88.175 41.1142C88.0913 40.8046 88.175 40.4951 88.4542 40.3262L90.7433 38.7222L90.6596 35.9081C90.6596 35.5985 90.855 35.3171 91.1342 35.2327C91.4413 35.1483 91.7483 35.2327 91.9158 35.5141L93.5071 37.8217L96.2987 37.7372C96.6058 37.7372 96.885 37.9342 96.9687 38.2156C97.0525 38.5252 96.9687 38.8347 96.6895 39.0036L94.4004 40.6076L94.4841 43.4217C94.4841 43.7313 94.2887 44.0127 94.0096 44.0971C93.9817 44.1253 93.8979 44.1253 93.8142 44.1253ZM92.0275 40.1011C92.2508 40.1011 92.4742 40.2137 92.6137 40.4106L93.0883 41.086L93.0604 40.2699C93.0604 40.0448 93.1721 39.8197 93.3675 39.679L94.0375 39.2006L93.2279 39.2287C93.0046 39.2287 92.7812 39.1161 92.6417 38.9192L92.1671 38.2438L92.195 39.0599C92.195 39.285 92.0833 39.5101 91.8879 39.6508L91.2179 40.1292L92.0275 40.1011Z"
            fill="#D9E6F7"
          />
          <path
            d="M85.7743 29.126C84.9647 29.126 84.2109 28.6195 83.9597 27.8034C83.7922 27.325 83.848 26.7903 84.0714 26.3401C84.2947 25.8898 84.6855 25.5521 85.188 25.3833C86.193 25.0456 87.2817 25.6084 87.5888 26.6215C87.9238 27.6346 87.3655 28.7321 86.3605 29.0416C86.1651 29.0698 85.9697 29.126 85.7743 29.126ZM85.7743 26.6778C85.7184 26.6778 85.6626 26.6778 85.6068 26.7059C85.4672 26.7622 85.3834 26.8466 85.2997 26.9592C85.2439 27.0717 85.2159 27.2124 85.2718 27.3532C85.3555 27.6346 85.6626 27.7753 85.9138 27.6908C86.193 27.6064 86.3326 27.2969 86.2488 27.0436C86.193 26.8185 85.9697 26.6778 85.7743 26.6778Z"
            fill="#D9E6F7"
          />
          <path
            d="M78.9066 21.725C78.5995 21.725 78.3203 21.6405 78.0412 21.528C77.5945 21.3028 77.2595 20.9089 77.092 20.4023C76.757 19.3892 77.3153 18.2917 78.3203 17.9822C78.7949 17.8133 79.3253 17.8696 79.772 18.0948C80.2187 18.3199 80.5537 18.7139 80.7212 19.2204C81.0562 20.2335 80.4978 21.331 79.4928 21.6405C79.3253 21.6968 79.102 21.725 78.9066 21.725ZM78.9066 19.2767C78.8508 19.2767 78.7949 19.2767 78.7391 19.3048C78.5995 19.3611 78.5158 19.4455 78.432 19.5581C78.4041 19.6988 78.3762 19.8395 78.432 19.9521C78.4878 20.0928 78.5716 20.1772 78.6833 20.2616C78.7949 20.3179 78.9345 20.346 79.0741 20.2898C79.3532 20.2053 79.4928 19.8958 79.4091 19.6425C79.3533 19.5018 79.2695 19.4174 79.1578 19.333C79.0741 19.3048 78.9903 19.2767 78.9066 19.2767Z"
            fill="#D9E6F7"
          />
          <path
            d="M70.1133 16.4063C69.555 16.4063 69.0525 16.0404 68.857 15.4776C68.7454 15.1399 68.7733 14.7741 68.9408 14.4645C69.1083 14.155 69.3595 13.9017 69.6945 13.8173C70.3924 13.5922 71.1183 13.9861 71.3416 14.6615C71.5649 15.3651 71.1741 16.0967 70.5041 16.3218C70.3924 16.3781 70.2529 16.4063 70.1133 16.4063ZM70.197 15.0555L70.0574 15.1118C70.0574 15.1681 70.1133 15.1681 70.1691 15.1681C70.1691 15.1681 70.197 15.1681 70.2249 15.1399C70.197 15.0836 70.197 15.0555 70.197 15.0555ZM70.1133 14.9992C70.1133 14.9992 70.0854 14.9992 70.1133 14.9992C70.0574 15.0274 70.0295 15.0555 70.0295 15.1118L70.1691 15.0555C70.1691 14.9992 70.1412 14.9992 70.1133 14.9992Z"
            fill="#D9E6F7"
          />
          <path
            d="M74.6354 42.4368C74.4958 42.4368 74.3562 42.4087 74.2167 42.3805C73.1838 42.1554 72.5417 41.1142 72.765 40.1011C72.9883 39.0599 74.0212 38.4126 75.0262 38.6378C76.0591 38.8629 76.7012 39.9041 76.4779 40.9172C76.2825 41.8177 75.5008 42.4368 74.6354 42.4368ZM74.6354 39.9885C74.4121 39.9885 74.1887 40.1574 74.1329 40.4106C74.0771 40.6921 74.2446 40.9735 74.5237 41.0298C74.8029 41.086 75.0821 40.9172 75.1379 40.6358C75.1937 40.3544 75.0262 40.073 74.7471 40.0167C74.6912 39.9885 74.6633 39.9885 74.6354 39.9885Z"
            fill="#D9E6F7"
          />
          <path
            d="M69.3873 33.2909C69.3035 33.2909 69.1918 33.2909 69.1081 33.2628C68.4102 33.094 67.9356 32.3904 68.1031 31.6869C68.2706 30.9834 68.9685 30.505 69.6664 30.6738C70.3643 30.8427 70.8389 31.5462 70.6714 32.2497C70.5877 32.5874 70.3923 32.897 70.0852 33.094C69.8898 33.2065 69.6385 33.2909 69.3873 33.2909ZM69.3035 31.9402C69.3035 31.9965 69.3314 32.0246 69.3593 32.0246C69.3873 32.0246 69.4431 31.9965 69.4431 31.9683C69.4431 31.912 69.4152 31.8839 69.3873 31.8839C69.3873 31.8839 69.3593 31.8839 69.3314 31.8839C69.3035 31.912 69.3035 31.9402 69.3035 31.9402Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2473 67.3136C57.4118 67.3136 61.6272 63.0642 61.6272 57.8581C61.6272 52.652 57.4118 48.4027 52.2473 48.4027C47.0827 48.4027 42.8673 52.652 42.8673 57.8581C42.8394 63.0642 47.0548 67.3136 52.2473 67.3136ZM52.2473 49.7816C56.658 49.7816 60.2314 53.3837 60.2314 57.83C60.2314 62.2763 56.658 65.8784 52.2473 65.8784C47.8365 65.8784 44.2631 62.2763 44.2631 57.83C44.2352 53.4118 47.8365 49.7816 52.2473 49.7816Z"
            fill="#D9E6F7"
          />
          <path
            d="M49.4552 32.4467C49.8461 32.4467 50.1531 32.1372 50.1531 31.7432V29.3793C50.1531 28.9854 49.8461 28.6758 49.4552 28.6758C49.0644 28.6758 48.7573 28.9854 48.7573 29.3793V31.7432C48.7573 32.1372 49.0644 32.4467 49.4552 32.4467Z"
            fill="#D9E6F7"
          />
          <path
            d="M55.0387 32.4467C55.4296 32.4467 55.7366 32.1372 55.7366 31.7432V29.3793C55.7366 28.9854 55.4296 28.6758 55.0387 28.6758C54.6479 28.6758 54.3408 28.9854 54.3408 29.3793V31.7432C54.3408 32.1372 54.6479 32.4467 55.0387 32.4467Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2472 89.9953C52.6381 89.9953 52.9451 89.6857 52.9451 89.2918V78.2604C52.9451 77.8665 52.6381 77.5569 52.2472 77.5569C51.8564 77.5569 51.5493 77.8665 51.5493 78.2604V89.2918C51.5493 89.6857 51.8564 89.9953 52.2472 89.9953Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2472 107.949C52.6381 107.949 52.9451 107.64 52.9451 107.246V96.2145C52.9451 95.8205 52.6381 95.5109 52.2472 95.5109C51.8564 95.5109 51.5493 95.8205 51.5493 96.2145V107.246C51.5493 107.64 51.8564 107.949 52.2472 107.949Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2472 125.903C52.6381 125.903 52.9451 125.594 52.9451 125.2V114.169C52.9451 113.775 52.6381 113.465 52.2472 113.465C51.8564 113.465 51.5493 113.775 51.5493 114.169V125.2C51.5493 125.594 51.8564 125.903 52.2472 125.903Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2472 143.857C52.6381 143.857 52.9451 143.548 52.9451 143.154V132.123C52.9451 131.729 52.6381 131.419 52.2472 131.419C51.8564 131.419 51.5493 131.729 51.5493 132.123V143.154C51.5493 143.52 51.8564 143.857 52.2472 143.857Z"
            fill="#D9E6F7"
          />
          <path
            d="M49.1203 89.9953C49.5111 89.9953 49.8182 89.6857 49.8182 89.2918V78.2604C49.8182 77.8665 49.5111 77.5569 49.1203 77.5569C48.7294 77.5569 48.4224 77.8665 48.4224 78.2604V89.2918C48.4224 89.6857 48.7294 89.9953 49.1203 89.9953Z"
            fill="#D9E6F7"
          />
          <path
            d="M49.1203 107.949C49.5111 107.949 49.8182 107.64 49.8182 107.246V96.2145C49.8182 95.8205 49.5111 95.5109 49.1203 95.5109C48.7294 95.5109 48.4224 95.8205 48.4224 96.2145V107.246C48.4224 107.64 48.7294 107.949 49.1203 107.949Z"
            fill="#D9E6F7"
          />
          <path
            d="M49.1203 125.903C49.5111 125.903 49.8182 125.594 49.8182 125.2V114.169C49.8182 113.775 49.5111 113.465 49.1203 113.465C48.7294 113.465 48.4224 113.775 48.4224 114.169V125.2C48.4224 125.594 48.7294 125.903 49.1203 125.903Z"
            fill="#D9E6F7"
          />
          <path
            d="M49.1203 143.857C49.5111 143.857 49.8182 143.548 49.8182 143.154V132.123C49.8182 131.729 49.5111 131.419 49.1203 131.419C48.7294 131.419 48.4224 131.729 48.4224 132.123V143.154C48.4224 143.52 48.7294 143.857 49.1203 143.857Z"
            fill="#D9E6F7"
          />
          <path
            d="M46.0216 89.9953C46.4125 89.9953 46.7196 89.6857 46.7196 89.2918V78.2604C46.7196 77.8665 46.4125 77.5569 46.0216 77.5569C45.6308 77.5569 45.3237 77.8665 45.3237 78.2604V89.2918C45.3237 89.6857 45.6308 89.9953 46.0216 89.9953Z"
            fill="#D9E6F7"
          />
          <path
            d="M46.0216 107.949C46.4125 107.949 46.7196 107.64 46.7196 107.246V96.2145C46.7196 95.8205 46.4125 95.5109 46.0216 95.5109C45.6308 95.5109 45.3237 95.8205 45.3237 96.2145V107.246C45.3237 107.64 45.6308 107.949 46.0216 107.949Z"
            fill="#D9E6F7"
          />
          <path
            d="M46.0216 125.903C46.4125 125.903 46.7196 125.594 46.7196 125.2V114.169C46.7196 113.775 46.4125 113.465 46.0216 113.465C45.6308 113.465 45.3237 113.775 45.3237 114.169V125.2C45.3237 125.594 45.6308 125.903 46.0216 125.903Z"
            fill="#D9E6F7"
          />
          <path
            d="M46.0216 143.857C46.4125 143.857 46.7196 143.548 46.7196 143.154V132.123C46.7196 131.729 46.4125 131.419 46.0216 131.419C45.6308 131.419 45.3237 131.729 45.3237 132.123V143.154C45.3237 143.52 45.6308 143.857 46.0216 143.857Z"
            fill="#D9E6F7"
          />
          <path
            d="M55.3459 89.9953C55.7367 89.9953 56.0438 89.6857 56.0438 89.2918V78.2604C56.0438 77.8665 55.7367 77.5569 55.3459 77.5569C54.955 77.5569 54.6479 77.8665 54.6479 78.2604V89.2918C54.6479 89.6857 54.9829 89.9953 55.3459 89.9953Z"
            fill="#D9E6F7"
          />
          <path
            d="M55.3459 107.949C55.7367 107.949 56.0438 107.64 56.0438 107.246V96.2145C56.0438 95.8205 55.7367 95.5109 55.3459 95.5109C54.955 95.5109 54.6479 95.8205 54.6479 96.2145V107.246C54.6479 107.64 54.9829 107.949 55.3459 107.949Z"
            fill="#D9E6F7"
          />
          <path
            d="M55.3459 125.903C55.7367 125.903 56.0438 125.594 56.0438 125.2V114.169C56.0438 113.775 55.7367 113.465 55.3459 113.465C54.955 113.465 54.6479 113.775 54.6479 114.169V125.2C54.6479 125.594 54.9829 125.903 55.3459 125.903Z"
            fill="#D9E6F7"
          />
          <path
            d="M55.3459 143.857C55.7367 143.857 56.0438 143.548 56.0438 143.154V132.123C56.0438 131.729 55.7367 131.419 55.3459 131.419C54.955 131.419 54.6479 131.729 54.6479 132.123V143.154C54.6479 143.52 54.9829 143.857 55.3459 143.857Z"
            fill="#D9E6F7"
          />
          <path
            d="M58.4723 89.9953C58.8632 89.9953 59.1702 89.6857 59.1702 89.2918V78.2604C59.1702 77.8665 58.8632 77.5569 58.4723 77.5569C58.0815 77.5569 57.7744 77.8665 57.7744 78.2604V89.2918C57.7744 89.6857 58.0815 89.9953 58.4723 89.9953Z"
            fill="#D9E6F7"
          />
          <path
            d="M58.4723 107.949C58.8632 107.949 59.1702 107.64 59.1702 107.246V96.2145C59.1702 95.8205 58.8632 95.5109 58.4723 95.5109C58.0815 95.5109 57.7744 95.8205 57.7744 96.2145V107.246C57.7744 107.64 58.0815 107.949 58.4723 107.949Z"
            fill="#D9E6F7"
          />
          <path
            d="M58.4723 125.903C58.8632 125.903 59.1702 125.594 59.1702 125.2V114.169C59.1702 113.775 58.8632 113.465 58.4723 113.465C58.0815 113.465 57.7744 113.775 57.7744 114.169V125.2C57.7744 125.594 58.0815 125.903 58.4723 125.903Z"
            fill="#D9E6F7"
          />
          <path
            d="M58.4723 143.857C58.8632 143.857 59.1702 143.548 59.1702 143.154V132.123C59.1702 131.729 58.8632 131.419 58.4723 131.419C58.0815 131.419 57.7744 131.729 57.7744 132.123V143.154C57.7744 143.52 58.0815 143.857 58.4723 143.857Z"
            fill="#D9E6F7"
          />
          <path
            d="M64.5862 37.9905C64.1954 37.9905 63.8883 38.3001 63.8883 38.694V41.2549C62.325 40.4388 59.2821 38.4408 59.1983 34.9794L59.645 33.9945C59.6729 33.91 59.7008 33.7975 59.7008 33.7131V27.4657V22.1752C59.7008 21.7812 59.3937 21.4717 59.0029 21.4717C58.6121 21.4717 58.305 21.7812 58.305 22.1752V25.4959C56.4067 22.9069 52.945 17.1942 52.945 9.73683C52.945 9.70868 52.945 9.6524 52.945 9.62426C52.945 9.59612 52.945 9.56798 52.945 9.5117V6.81015C53.3638 7.1197 53.4475 7.65438 53.4475 7.87951C53.4475 8.27349 53.7546 8.5549 54.1454 8.5549C54.5363 8.5549 54.8434 8.21721 54.8434 7.85137C54.8154 6.92271 54.285 5.62822 52.945 5.29053V0.703528C52.945 0.309552 52.638 0 52.2471 0C51.8563 0 51.5492 0.309552 51.5492 0.703528V5.29053C50.1813 5.62822 49.6788 6.92271 49.6509 7.85137C49.6509 8.24535 49.958 8.5549 50.3488 8.5549C50.7396 8.5549 51.0467 8.24535 51.0467 7.85137C51.0467 7.71067 51.1026 7.1197 51.5492 6.81015V9.5117C51.5492 9.53984 51.5492 9.59612 51.5492 9.62426C51.5492 9.6524 51.5492 9.70868 51.5492 9.73683C51.5492 17.2505 47.9201 22.9913 45.9659 25.5521V22.1752C45.9659 21.7812 45.6588 21.4717 45.268 21.4717C44.8772 21.4717 44.5701 21.7812 44.5701 22.1752V27.4939V33.7131C44.5701 33.8256 44.598 33.91 44.6259 33.9945L45.0726 34.9794C44.9889 38.4408 41.9739 40.4388 40.3826 41.2549V38.694C40.3826 38.3001 40.0756 37.9905 39.6847 37.9905C39.2939 37.9905 38.9868 38.3001 38.9868 38.694V45.3635V45.5042V70.6905C38.9868 71.0845 39.2939 71.394 39.6847 71.394H41.611V149.88H40.3826C39.9918 149.88 39.6847 150.189 39.6847 150.583V164.907C39.6847 165.301 39.9918 165.61 40.3826 165.61H52.1355H63.8883C64.2791 165.61 64.5862 165.301 64.5862 164.907V150.555C64.5862 150.161 64.2791 149.851 63.8883 149.851H62.66V71.3659H64.5862C64.977 71.3659 65.2841 71.0563 65.2841 70.6623V45.476V45.3353V38.6659C65.2841 38.3001 64.9491 37.9905 64.5862 37.9905ZM52.2192 15.7027C53.7546 22.3159 57.3838 26.7341 58.305 27.7471V33.5442L58.0537 34.1352H52.1355H46.2172L45.9659 33.5442V27.7471C46.8872 26.7341 50.6559 22.3159 52.2192 15.7027ZM46.4405 35.5141H52.1355H57.8304C58.2492 39.9885 62.4366 42.1835 63.8883 42.8026V44.66H40.4106V42.8026C41.8064 42.1835 46.0218 39.9885 46.4405 35.5141ZM63.1904 164.175H52.1355H41.0805V151.258H42.3089H52.1355H61.9621H63.1904V164.175ZM61.2641 149.851H52.1355H43.0068V71.3659H61.2362V149.851H61.2641ZM63.8883 69.9588H40.4106V46.067H63.8883V69.9588Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2472 32.4467C52.6381 32.4467 52.9451 32.1372 52.9451 31.7432V29.3793C52.9451 28.9854 52.6381 28.6758 52.2472 28.6758C51.8564 28.6758 51.5493 28.9854 51.5493 29.3793V31.7432C51.5493 32.1372 51.8564 32.4467 52.2472 32.4467Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2472 43.3373C52.6381 43.3373 52.9451 43.0277 52.9451 42.6338V41.5081C52.9451 41.1142 52.6381 40.8046 52.2472 40.8046C51.8564 40.8046 51.5493 41.1142 51.5493 41.5081V42.6338C51.5493 43.0277 51.8564 43.3373 52.2472 43.3373Z"
            fill="#D9E6F7"
          />
          <path
            d="M49.4552 43.3373C49.8461 43.3373 50.1531 43.0277 50.1531 42.6338V41.5081C50.1531 41.1142 49.8461 40.8046 49.4552 40.8046C49.0644 40.8046 48.7573 41.1142 48.7573 41.5081V42.6338C48.7573 43.0277 49.0923 43.3373 49.4552 43.3373Z"
            fill="#D9E6F7"
          />
          <path
            d="M46.6916 43.3373C47.0824 43.3373 47.3895 43.0277 47.3895 42.6338V41.5081C47.3895 41.1142 47.0824 40.8046 46.6916 40.8046C46.3007 40.8046 45.9937 41.1142 45.9937 41.5081V42.6338C45.9937 43.0277 46.3007 43.3373 46.6916 43.3373Z"
            fill="#D9E6F7"
          />
          <path
            d="M55.0109 43.3373C55.4017 43.3373 55.7088 43.0277 55.7088 42.6338V41.5081C55.7088 41.1142 55.4017 40.8046 55.0109 40.8046C54.6201 40.8046 54.313 41.1142 54.313 41.5081V42.6338C54.313 43.0277 54.6201 43.3373 55.0109 43.3373Z"
            fill="#D9E6F7"
          />
          <path
            d="M57.8024 43.3373C58.1932 43.3373 58.5003 43.0277 58.5003 42.6338V41.5081C58.5003 41.1142 58.1932 40.8046 57.8024 40.8046C57.4116 40.8046 57.1045 41.1142 57.1045 41.5081V42.6338C57.1045 43.0277 57.4116 43.3373 57.8024 43.3373Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.1354 58.7305H57.0487C57.4395 58.7305 57.7466 58.421 57.7466 58.027C57.7466 57.633 57.4395 57.3235 57.0487 57.3235H52.8333V51.7797C52.8333 51.3857 52.5262 51.0761 52.1354 51.0761C51.7446 51.0761 51.4375 51.3857 51.4375 51.7797V57.9989C51.4375 58.3928 51.7446 58.7305 52.1354 58.7305Z"
            fill="#D9E6F7"
          />
        </svg>
      )
    },
    {
      name: "Биология",
      link: "biolog",
      img: (
        <svg
          width="119"
          height="119"
          viewBox="0 0 119 119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M88.1437 62.7795C87.8189 55.1409 87.0272 45.7301 86.5602 40.2099C93.6247 40.658 107.003 40.4339 117.356 33.9564C119 32.9379 119.487 30.7787 118.472 29.1287C117.437 27.4788 115.305 26.9899 113.661 28.0084C113.214 28.2936 112.748 28.5584 112.26 28.8028L89.6662 6.11093C89.8083 5.82575 89.9504 5.56095 90.1128 5.27577C91.0872 3.60545 90.5188 1.46663 88.8745 0.488883C87.2302 -0.488864 85.0783 0.0611188 84.1039 1.73144C78.2169 11.7941 77.8921 24.4437 78.2575 31.4916C72.817 31.0027 63.1135 30.188 55.2776 29.8417C42.9959 29.2917 39.7073 38.8858 39.484 42.6542C39.4637 42.7561 39.4637 42.8783 39.4637 42.9802L40.4178 69.6645C31.9526 69.1756 14.9816 69.6645 4.50669 80.1753C2.27366 82.416 0.812048 85.0844 0.060939 88.3028C-0.365366 90.1768 0.791748 92.0712 2.67967 92.499C4.54729 92.9268 6.41491 91.7657 6.84122 89.8917C6.98332 89.3213 7.16602 88.7917 7.36902 88.2621L30.4098 111.382C29.7805 111.667 29.1106 111.932 28.3798 112.115C26.5324 112.604 25.3956 114.498 25.8625 116.372C26.0249 117.004 26.3497 117.554 26.7761 117.982C27.6084 118.817 28.867 119.204 30.1053 118.898C33.4751 118.043 36.2157 116.515 38.469 114.254C49.1469 103.56 49.4717 86.0418 48.9033 77.7106L75.0297 78.6476C75.1515 78.6476 75.253 78.6476 75.3748 78.6272C79.1101 78.4031 88.6918 75.1236 88.1437 62.7795ZM88.5903 8.33123L110.088 29.9028C108.748 30.4935 107.327 31.0027 105.927 31.4101L87.0881 12.507C87.4738 11.0811 88.0016 9.696 88.5903 8.33123ZM86.3979 15.1144L103.308 32.0823C101.664 32.449 100.04 32.7138 98.4562 32.8971L85.5858 19.9827C85.7685 18.3939 86.0324 16.7643 86.3979 15.1144ZM85.2813 22.9974L95.4315 33.1823C91.3105 33.4675 87.6565 33.3045 85.3625 33.1008C85.3625 32.9582 85.3422 32.7953 85.3219 32.6323C85.1595 30.3306 85.0174 26.8881 85.2813 22.9974ZM80.0033 45.6282L72.411 37.9896C75.2733 38.234 77.7296 38.4377 79.4146 38.5803C79.5567 40.2914 79.78 42.7357 80.0033 45.6282ZM68.8584 37.7044L80.3078 49.1929C80.4702 51.4743 80.6529 53.8983 80.8153 56.302L61.7737 37.1952C64.1691 37.3581 66.5848 37.5211 68.8584 37.7044ZM54.9731 36.8285C56.0693 36.8692 57.1452 36.9303 58.2617 36.9915L80.998 59.8056C81.0589 60.9463 81.1198 62.0462 81.1604 63.1055C81.2213 64.3684 81.1198 65.4072 80.8965 66.3239L51.8062 37.0933C52.6995 36.8692 53.7348 36.7674 54.9731 36.8285ZM33.536 109.304C33.2315 109.61 32.8864 109.915 32.521 110.18L8.56674 86.1436C8.83064 85.7973 9.13514 85.4714 9.45995 85.1455C10.1502 84.4733 10.8607 83.8622 11.6118 83.2715L35.424 107.145C34.8353 107.878 34.2262 108.611 33.536 109.304ZM36.7638 105.189L13.5403 81.9067C14.7786 81.1123 16.0981 80.4401 17.4379 79.8698L38.7938 101.299C38.2254 102.643 37.5352 103.947 36.7638 105.189ZM39.687 98.9155L19.8131 78.9735C21.3559 78.4439 22.919 78.0365 24.4618 77.7106L32.4398 85.7159L40.9659 94.2508C40.6411 95.7989 40.2148 97.3674 39.687 98.9155ZM42.0012 86.0418C41.8997 87.7528 41.7373 89.5657 41.4531 91.4398L27.2633 77.2013C29.1309 76.9365 30.9376 76.7532 32.6428 76.6513L42.0012 86.0418ZM41.3719 76.7532C41.5343 76.7736 41.6967 76.7736 41.8388 76.7939C41.9606 78.3013 42.0824 80.3994 42.0621 82.8234L35.83 76.5699C38.0427 76.5495 39.9306 76.6513 41.3719 76.7532ZM47.259 65.5091L52.5777 70.846L47.4417 70.6626L47.259 65.5091ZM56.0084 70.9682L47.1575 62.087L46.9139 55.2631L62.809 71.2126L56.0084 70.9682ZM66.2194 71.3348L46.7921 51.841L46.5485 44.9968L73.0403 71.5793L66.2194 71.3348ZM76.1665 71.4367L46.6703 41.8395C46.9951 40.7191 47.7259 39.1303 49.4514 38.0303L79.983 68.6664C78.9274 70.3774 77.3643 71.1311 76.1665 71.4367Z"
              fill="#D9E6F7"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="119" height="119" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      name: "Химия",
      link: "chim",
      img: (
        <svg
          width="84"
          height="148"
          viewBox="0 0 84 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42 148C18.8414 148 0 128.96 0 105.557C0 96.8503 2.58935 88.4854 7.48868 81.3613C12.1204 74.6263 18.4916 69.4404 25.9498 66.3232V49.4939H22.6679C21.0763 49.4939 19.7804 48.1843 19.7804 46.5759V41.4066C19.7804 39.7982 21.0763 38.4886 22.6679 38.4886H61.3297C62.9214 38.4886 64.2172 39.7982 64.2172 41.4066V46.5759C64.2172 48.1843 62.9214 49.4939 61.3297 49.4939H58.0455V66.3232C65.5037 69.4404 71.8749 74.6263 76.509 81.3613C81.4083 88.4831 83.9977 96.8503 83.9977 105.557C84 128.96 65.1586 148 42 148ZM22.6679 40.861C22.3698 40.861 22.128 41.1053 22.128 41.4066V46.5759C22.128 46.8772 22.3698 47.1215 22.6679 47.1215H28.2974V67.934L27.5508 68.2281C12.2401 74.2871 2.34755 88.9386 2.34755 105.557C2.34755 127.653 20.1349 145.628 42 145.628C63.8651 145.628 81.6525 127.653 81.6525 105.557C81.6525 88.9386 71.7599 74.2871 56.4468 68.2305L55.7003 67.9363V47.1239H61.3321C61.6302 47.1239 61.872 46.8796 61.872 46.5783V41.409C61.872 41.1077 61.6302 40.8633 61.3321 40.8633H22.6679V40.861Z"
            fill="#D9E6F7"
          />
          <path
            d="M76.314 105.559C76.314 124.711 60.9517 140.233 42.0023 140.233C23.0458 140.233 7.68579 124.708 7.68579 105.559C7.68579 102.805 8.00271 100.129 8.60133 97.562H75.3985C75.9948 100.126 76.314 102.805 76.314 105.559Z"
            fill="#D9E6F7"
          />
          <path
            d="M50.5334 126.327C51.0331 124.188 49.7228 122.046 47.6068 121.541C45.4908 121.036 43.3704 122.36 42.8708 124.498C42.3711 126.636 43.6814 128.779 45.7974 129.284C47.9134 129.789 50.0338 128.465 50.5334 126.327Z"
            fill="white"
          />
          <path
            d="M33.6638 119.812C34.6453 119.812 35.4409 119.008 35.4409 118.016C35.4409 117.024 34.6453 116.22 33.6638 116.22C32.6823 116.22 31.8867 117.024 31.8867 118.016C31.8867 119.008 32.6823 119.812 33.6638 119.812Z"
            fill="white"
          />
          <path
            d="M42.7676 109.248C44.4505 109.248 45.8147 107.869 45.8147 106.169C45.8147 104.468 44.4505 103.089 42.7676 103.089C41.0847 103.089 39.7205 104.468 39.7205 106.169C39.7205 107.869 41.0847 109.248 42.7676 109.248Z"
            fill="white"
          />
          <path
            d="M38.1194 81.2048C39.8995 81.2048 41.3426 79.7465 41.3426 77.9476C41.3426 76.1486 39.8995 74.6903 38.1194 74.6903C36.3393 74.6903 34.8962 76.1486 34.8962 77.9476C34.8962 79.7465 36.3393 81.2048 38.1194 81.2048Z"
            fill="#D9E6F7"
          />
          <path
            d="M44.9532 64.1074C46.159 64.1074 47.1365 63.1196 47.1365 61.9011C47.1365 60.6827 46.159 59.6949 44.9532 59.6949C43.7475 59.6949 42.77 60.6827 42.77 61.9011C42.77 63.1196 43.7475 64.1074 44.9532 64.1074Z"
            fill="#D9E6F7"
          />
          <path
            d="M50.4606 27.2319C52.0164 27.2319 53.2777 25.9574 53.2777 24.3852C53.2777 22.8129 52.0164 21.5384 50.4606 21.5384C48.9048 21.5384 47.6436 22.8129 47.6436 24.3852C47.6436 25.9574 48.9048 27.2319 50.4606 27.2319Z"
            fill="#D9E6F7"
          />
          <path
            d="M40.838 10.3311C41.4667 7.64071 39.8181 4.94468 37.1557 4.3094C34.4934 3.67411 31.8255 5.34013 31.1969 8.03057C30.5682 10.721 32.2168 13.417 34.8792 14.0523C37.5415 14.6876 40.2094 13.0216 40.838 10.3311Z"
            fill="#D9E6F7"
          />
          <path
            d="M45.8665 4.17055C47.0061 4.17055 47.93 3.23694 47.93 2.08528C47.93 0.93361 47.0061 0 45.8665 0C44.7268 0 43.803 0.93361 43.803 2.08528C43.803 3.23694 44.7268 4.17055 45.8665 4.17055Z"
            fill="#D9E6F7"
          />
        </svg>
      )
    },
    {
      name: "Самопознание",
      link: "samopoz",
      img: (
        <svg
          width="92"
          height="100"
          viewBox="0 0 92 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M90.0271 54.5417C83.6307 46.9375 82.0524 41.7083 81.8239 40.8542C81.7201 18.3125 63.4032 0 40.912 0C18.3585 0 0 18.4167 0 41.0417C0 48.2292 1.86907 55.2917 5.42032 61.4792C5.44108 61.5 5.46185 61.5417 5.46185 61.5625C6.68713 63.6875 8.03702 65.875 9.38691 68.0208C11.6921 71.7292 13.8519 75.2083 15.1187 78.0208C18.0054 84.4375 18.1923 98.375 18.1923 98.5C18.1923 99.3333 18.8361 99.9792 19.7084 100C20.5391 100 21.2036 99.3125 21.2036 98.4583C21.2036 97.8542 21.0167 83.75 17.86 76.75C16.5102 73.75 14.288 70.1667 11.9205 66.3958C10.5914 64.25 9.22077 62.0625 7.99548 59.9375C7.97472 59.9167 7.97472 59.8958 7.95395 59.8542C4.73499 54.1667 3.03205 47.6667 3.03205 41.0417C3.03205 20.0833 20.0199 3.04167 40.912 3.04167C61.8041 3.04167 78.8126 20.1042 78.8126 41.0625C78.8126 41.1667 78.8126 41.2708 78.8334 41.375C78.8957 41.625 80.1833 47.5625 87.7219 56.5208C88.0749 56.9375 89.1756 58.3542 88.9679 59.5C88.9264 59.7083 88.8226 60.3333 87.6804 61C84.0253 63.125 79.581 64.875 79.5395 64.875C78.8957 65.125 78.5011 65.7917 78.5842 66.4792C78.605 66.5625 79.7472 75.5417 78.7503 80.8958C78.3142 83.1667 73.2054 84.6875 66.0199 84.6875C61.9702 84.6875 59.3535 87.2292 59.3535 91.1458V98.5C59.3535 99.3333 60.0388 100.021 60.8695 100.021C61.7002 100.021 62.3856 99.3333 62.3856 98.5V91.1458C62.3856 88.1667 64.67 87.7083 66.0199 87.7083C71.4402 87.7083 80.6817 86.8958 81.6993 81.4583C82.5923 76.7917 81.9901 69.9583 81.6993 67.25C83.2984 66.5833 86.4135 65.2292 89.1756 63.6042C91.1278 62.4792 91.7508 61.0208 91.9169 60.0208C92.3323 57.7083 90.9201 55.5833 90.0271 54.5417Z"
              fill="#D9E6F7"
            />
            <path
              d="M68.6987 41.1458C68.6987 25.8333 56.2797 13.375 41.0156 13.375C25.7515 13.375 13.3325 25.8333 13.3325 41.1458C13.3325 56.4583 25.7515 68.9167 41.0156 68.9167C56.2797 68.9167 68.6987 56.4583 68.6987 41.1458ZM16.3438 41.1458C16.3438 27.5 27.4129 16.3958 41.0156 16.3958C41.4102 16.3958 41.8048 16.4375 42.1993 16.4583C48.035 17.0625 52.6038 22 52.6038 28.0208C52.6038 34.4167 47.412 39.6458 41.0156 39.6458C32.9578 39.6458 26.416 46.2083 26.416 54.2917C26.416 57.5417 27.496 60.5 29.282 62.9375C21.598 58.7292 16.3438 50.5417 16.3438 41.1458ZM41.0156 65.8958C40.621 65.8958 40.2264 65.8542 39.8318 65.8333C33.9962 65.2292 29.4273 60.2917 29.4273 54.2708C29.4273 47.875 34.6192 42.6458 41.0156 42.6458C49.0734 42.6458 55.6151 36.0833 55.6151 28C55.6151 24.7708 54.556 21.7917 52.77 19.375C60.454 23.5625 65.6874 31.75 65.6874 41.125C65.6874 54.7917 54.6183 65.8958 41.0156 65.8958Z"
              fill="#D9E6F7"
            />
            <path
              d="M41.0156 48.7292C37.9628 48.7292 35.4707 51.2292 35.4707 54.2917C35.4707 57.3542 37.9628 59.8542 41.0156 59.8542C44.0684 59.8542 46.5605 57.3542 46.5605 54.2917C46.5605 51.2083 44.0684 48.7292 41.0156 48.7292ZM41.0156 56.8125C39.6242 56.8125 38.5028 55.6875 38.5028 54.2917C38.5028 52.8958 39.6242 51.7708 41.0156 51.7708C42.407 51.7708 43.5285 52.8958 43.5285 54.2917C43.5285 55.6667 42.407 56.8125 41.0156 56.8125Z"
              fill="#D9E6F7"
            />
            <path
              d="M41.0156 33.5625C44.0684 33.5625 46.5605 31.0625 46.5605 28C46.5605 24.9375 44.0684 22.4375 41.0156 22.4375C37.9628 22.4375 35.4707 24.9375 35.4707 28C35.4707 31.0833 37.9628 33.5625 41.0156 33.5625ZM41.0156 25.5C42.407 25.5 43.5285 26.625 43.5285 28.0208C43.5285 29.4167 42.407 30.5417 41.0156 30.5417C39.6242 30.5417 38.5028 29.4167 38.5028 28.0208C38.5028 26.625 39.6242 25.5 41.0156 25.5Z"
              fill="#D9E6F7"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="92" height="100" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    }
  ]);
const [lessons56b] = useState([
    {
      name: "Русский язык",
      link: "rus",
      img: (
        <svg
          width="87"
          height="165"
          viewBox="0 0 87 165"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M39.329 64.8895C38.9371 64.8895 38.6292 64.5811 38.6292 64.1885V57.5144C38.6012 57.1499 38.4892 54.8785 40.3367 53.4483C41.9043 52.2425 42.968 50.9806 42.968 48.8494C42.968 48.4568 43.2759 48.1483 43.6678 48.1483C44.0597 48.1483 44.3676 48.4568 44.3676 48.8494C44.3676 51.7377 42.7721 53.3642 41.2045 54.57C39.8609 55.6076 40.0288 57.3181 40.0288 57.4023C40.0288 57.4303 40.0288 57.4583 40.0288 57.4864V64.1885C40.0288 64.5811 39.7209 64.8895 39.329 64.8895Z"
              fill="#D9E6F7"
            />
            <path
              d="M48.0069 64.8895C47.615 64.8895 47.3071 64.5811 47.3071 64.1885V57.4864C47.3071 57.4583 47.3071 57.4303 47.3071 57.4023C47.3071 57.3462 47.475 55.6076 46.1314 54.57C44.5638 53.3642 42.9683 51.7377 42.9683 48.8494C42.9683 48.4568 43.2762 48.1483 43.6681 48.1483C44.06 48.1483 44.3679 48.4568 44.3679 48.8494C44.3679 51.0086 45.4316 52.2425 46.9992 53.4483C48.8466 54.8785 48.7347 57.1218 48.7067 57.5144V64.1885C48.7067 64.5811 48.3988 64.8895 48.0069 64.8895Z"
              fill="#D9E6F7"
            />
            <path
              d="M39.3013 64.8895C38.9094 64.8895 38.6015 64.5811 38.6015 64.1885V57.4864C38.6015 57.4583 38.6015 57.4303 38.6015 57.4023C38.6015 57.3462 38.7695 55.6076 37.4258 54.57C36.81 54.0933 36.1942 53.5605 35.6623 52.8875V64.1885C35.6623 64.5811 35.3544 64.8895 34.9625 64.8895C34.5706 64.8895 34.2627 64.5811 34.2627 64.1885V48.8494C34.2627 48.4568 34.5706 48.1483 34.9625 48.1483C35.3544 48.1483 35.6623 48.4568 35.6623 48.8494C35.6623 51.0086 36.726 52.2425 38.2936 53.4483C40.1411 54.8785 40.0291 57.1218 40.0011 57.5144V64.1885C40.0011 64.5811 39.6932 64.8895 39.3013 64.8895Z"
              fill="#D9E6F7"
            />
            <path
              d="M35.7459 52.5229C35.6899 52.5229 35.6619 52.5229 35.606 52.5229C35.2141 52.4388 34.9901 52.0743 35.0461 51.7097L42.9959 9.53434C43.0799 9.14175 43.4438 8.91741 43.8077 8.97349C44.1996 9.05762 44.4235 9.42217 44.3675 9.78672L36.4457 51.9621C36.3897 52.2706 36.0818 52.5229 35.7459 52.5229Z"
              fill="#D9E6F7"
            />
            <path
              d="M41.0645 45.7928C41.0365 45.7928 41.0365 45.7928 41.0085 45.7928C40.6166 45.7648 40.3367 45.4283 40.3647 45.0357L41.1205 34.7723C41.1485 34.3797 41.4844 34.0993 41.8763 34.1273C42.2682 34.1553 42.5481 34.4918 42.5201 34.8844L41.7643 45.1479C41.7363 45.5124 41.4284 45.7928 41.0645 45.7928Z"
              fill="#D9E6F7"
            />
            <path
              d="M51.5898 52.5229C51.2539 52.5229 50.9739 52.2986 50.89 51.9621L42.9961 9.78671C42.9122 9.39412 43.1641 9.02957 43.556 8.97349C43.9479 8.88936 44.3118 9.14174 44.3678 9.53433L52.2896 51.7097C52.3735 52.1023 52.1216 52.4669 51.7297 52.5229C51.6737 52.5229 51.6457 52.5229 51.5898 52.5229Z"
              fill="#D9E6F7"
            />
            <path
              d="M46.271 45.7648C45.9071 45.7648 45.5992 45.4844 45.5712 45.1198L44.8154 34.8844C44.7874 34.4918 45.0673 34.1553 45.4592 34.1273C45.8511 34.0993 46.187 34.3797 46.215 34.7723L46.9708 45.0077C46.9988 45.4002 46.7189 45.7367 46.327 45.7648C46.327 45.7648 46.299 45.7648 46.271 45.7648Z"
              fill="#D9E6F7"
            />
            <path
              d="M43.668 81.7429C40.085 81.7429 37.1738 78.8265 37.1738 75.2371C37.1738 71.6477 40.085 68.7313 43.668 68.7313C47.2511 68.7313 50.1622 71.6477 50.1622 75.2371C50.1622 78.8265 47.2511 81.7429 43.668 81.7429ZM43.668 70.1614C40.8688 70.1614 38.5734 72.4609 38.5734 75.2651C38.5734 78.0693 40.8688 80.3688 43.668 80.3688C46.4673 80.3688 48.7626 78.0693 48.7626 75.2651C48.7626 72.4609 46.4953 70.1614 43.668 70.1614Z"
              fill="#D9E6F7"
            />
            <path
              d="M43.6681 165H24.2135C23.8216 165 23.5137 164.692 23.5137 164.299V102.606C23.5137 102.214 23.8216 101.905 24.2135 101.905H35.8863C36.2782 101.905 36.5861 102.214 36.5861 102.606C36.5861 102.999 36.2782 103.307 35.8863 103.307H24.9133V163.598H43.6681C44.06 163.598 44.3679 163.906 44.3679 164.299C44.3679 164.692 44.06 165 43.6681 165Z"
              fill="#D9E6F7"
            />
            <path
              d="M43.6679 120.217H35.858C35.4661 120.217 35.1582 119.908 35.1582 119.516V102.634C35.1582 102.606 35.1582 102.578 35.1582 102.55C35.1862 102.382 35.6621 98.6803 38.3493 96.9978C40.5607 95.6237 42.968 92.6232 42.968 89.3143C42.968 88.9217 43.276 88.6132 43.6679 88.6132C44.0597 88.6132 44.3677 88.9217 44.3677 89.3143C44.3677 93.156 41.6244 96.6052 39.1051 98.1756C37.1177 99.4094 36.6138 102.298 36.5858 102.662V118.787H43.6958C44.0877 118.787 44.3957 119.095 44.3957 119.488C44.3957 119.88 44.0597 120.217 43.6679 120.217Z"
              fill="#D9E6F7"
            />
            <path
              d="M24.2135 103.307C23.8216 103.307 23.5137 102.999 23.5137 102.606V96.7735C23.5137 96.5772 23.5976 96.3809 23.7376 96.2407L23.9056 96.1004L25.837 82.6683C25.893 82.2757 26.2569 82.0233 26.6208 82.0794C27.0127 82.1355 27.2646 82.5 27.2086 82.8646L25.2492 96.5491C25.2212 96.7174 25.1372 96.8576 25.0253 96.9698L24.9133 97.0819V102.606C24.9133 102.999 24.6054 103.307 24.2135 103.307Z"
              fill="#D9E6F7"
            />
            <path
              d="M28.8599 97.4745C28.692 97.4745 28.524 97.4184 28.384 97.3062L28.0201 96.9697C27.9082 96.8576 27.8242 96.7174 27.7962 96.5491L25.8367 82.8645C25.7808 82.472 26.0607 82.1355 26.4246 82.0794C26.8165 82.0233 27.1524 82.3037 27.2084 82.6683L29.1398 96.1004L29.3078 96.2406C29.5877 96.493 29.6157 96.9417 29.3638 97.2221C29.2518 97.3904 29.0559 97.4745 28.8599 97.4745Z"
              fill="#D9E6F7"
            />
            <path
              d="M47.2791 12.4788C47.1392 12.4788 46.9992 12.4227 46.8592 12.3385L43.6681 10.0391L40.505 12.3385C40.2531 12.5068 39.9172 12.5068 39.6932 12.3385C39.4413 12.1703 39.3573 11.8338 39.4413 11.5534L40.645 7.79572L37.4538 5.46822C37.2019 5.29997 37.1179 4.96346 37.2019 4.68304C37.2859 4.40262 37.5658 4.20632 37.8737 4.20632H41.7926L42.9963 0.448674C43.1083 0.196295 43.3882 0 43.6681 0C43.976 0 44.228 0.196295 44.3399 0.476717L45.5436 4.23436H49.4625C49.7704 4.23436 50.0224 4.43066 50.1343 4.71108C50.2183 4.9915 50.1343 5.32801 49.8824 5.49626L46.6913 7.82376L47.895 11.5814C47.9789 11.8618 47.8949 12.1983 47.643 12.3666C47.559 12.4227 47.4191 12.4788 47.2791 12.4788ZM43.6681 8.46873C43.8081 8.46873 43.948 8.52481 44.088 8.60894L45.9355 9.95496L45.2357 7.76767C45.1517 7.48725 45.2357 7.15075 45.4876 6.98249L47.3351 5.63647H45.0397C44.7318 5.63647 44.4799 5.44018 44.3679 5.15976L43.6681 2.97247L42.9683 5.15976C42.8843 5.44018 42.6044 5.63647 42.2965 5.63647H40.0291L41.8766 6.98249C42.1285 7.15075 42.2125 7.48725 42.1285 7.76767L41.4287 9.92692L43.2762 8.5809C43.3882 8.49677 43.5282 8.46873 43.6681 8.46873Z"
              fill="#D9E6F7"
            />
            <path
              d="M46.4113 75.9662H43.6681C43.2762 75.9662 42.9683 75.6577 42.9683 75.2651V70.8344C42.9683 70.4419 43.2762 70.1334 43.6681 70.1334C44.06 70.1334 44.3679 70.4419 44.3679 70.8344V74.564H46.4113C46.8032 74.564 47.1111 74.8725 47.1111 75.2651C47.1111 75.6297 46.8032 75.9662 46.4113 75.9662Z"
              fill="#D9E6F7"
            />
            <path
              d="M28.86 103.307C28.4681 103.307 28.1602 102.999 28.1602 102.606V96.7734C28.1602 96.7454 28.1602 96.6893 28.1602 96.6613C28.1881 96.4369 28.5241 94.5301 29.8957 93.7729C30.6795 93.3243 31.3233 91.5576 31.3233 89.9031C31.3233 89.5105 31.6312 89.2021 32.0231 89.2021C32.415 89.2021 32.7229 89.5105 32.7229 89.9031C32.7229 91.838 31.9951 94.1936 30.5675 94.9787C29.9517 95.3153 29.6437 96.3809 29.5598 96.8015V102.578C29.5598 102.999 29.2519 103.307 28.86 103.307Z"
              fill="#D9E6F7"
            />
            <path
              d="M35.1862 97.4745C34.8503 97.4745 34.5424 97.2221 34.4864 96.8856C34.4304 96.4931 34.1225 95.3714 33.4786 95.0068C32.051 94.2216 31.3232 91.8381 31.3232 89.9312C31.3232 89.5386 31.6312 89.2301 32.023 89.2301C32.4149 89.2301 32.7229 89.5386 32.7229 89.9312C32.7229 91.5857 33.3947 93.3523 34.1505 93.801C35.4941 94.5581 35.83 96.465 35.886 96.6893C35.942 97.0819 35.69 97.4184 35.2981 97.5026C35.2702 97.4745 35.2422 97.4745 35.1862 97.4745Z"
              fill="#D9E6F7"
            />
            <path
              d="M35.1861 103.307C34.7942 103.307 34.4863 102.999 34.4863 102.606V96.7734C34.4863 96.7454 34.4863 96.6893 34.4863 96.6613C34.5143 96.4369 34.8502 94.5301 36.1939 93.7729C36.9776 93.3243 37.6215 91.5576 37.6215 89.9031C37.6215 89.5105 37.9294 89.2021 38.3213 89.2021C38.7132 89.2021 39.0211 89.5105 39.0211 89.9031C39.0211 91.838 38.2933 94.1936 36.8657 94.9787C36.2498 95.3153 35.9419 96.3809 35.858 96.8015V102.578C35.8859 102.999 35.578 103.307 35.1861 103.307Z"
              fill="#D9E6F7"
            />
            <path
              d="M41.1208 96.2126C40.8689 96.2126 40.6169 96.0724 40.505 95.82C40.309 95.4274 40.0851 95.147 39.8331 95.0068C38.4055 94.2216 37.6777 91.8381 37.6777 89.9312C37.6777 89.5386 37.9856 89.2301 38.3775 89.2301C38.7694 89.2301 39.0773 89.5386 39.0773 89.9312C39.0773 91.5857 39.7492 93.3523 40.505 93.801C41.0088 94.0814 41.4287 94.5581 41.7646 95.2311C41.9326 95.5677 41.7926 95.9883 41.4287 96.1565C41.3447 96.1846 41.2328 96.2126 41.1208 96.2126Z"
              fill="#D9E6F7"
            />
            <path
              d="M43.6679 161.607H36.8658C36.4739 161.607 36.166 161.298 36.166 160.906V148.063C36.166 147.894 36.194 144.024 38.6293 141.557C39.917 140.267 41.5965 139.622 43.64 139.622C44.0318 139.622 44.3398 139.93 44.3398 140.323C44.3398 140.716 44.0318 141.024 43.64 141.024C41.9884 141.024 40.6168 141.529 39.6091 142.538C37.5656 144.585 37.5376 148.006 37.5376 148.063V160.205H43.64C44.0318 160.205 44.3398 160.513 44.3398 160.906C44.3398 161.298 44.0598 161.607 43.6679 161.607Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.4702 161.607H43.6681C43.2762 161.607 42.9683 161.298 42.9683 160.906C42.9683 160.513 43.2762 160.205 43.6681 160.205H49.7704V148.063C49.7704 147.782 49.6864 141.024 43.6681 141.024C43.2762 141.024 42.9683 140.716 42.9683 140.323C42.9683 139.93 43.2762 139.622 43.6681 139.622C45.7115 139.622 47.391 140.267 48.6787 141.557C51.142 144.024 51.142 147.894 51.142 148.063V160.906C51.17 161.298 50.8621 161.607 50.4702 161.607Z"
              fill="#D9E6F7"
            />
            <path
              d="M45.5991 129.667V135.416H41.7922V129.667H45.5991ZM45.5991 128.265H41.7922C41.0084 128.265 40.3926 128.882 40.3926 129.667V135.416C40.3926 136.201 41.0084 136.818 41.7922 136.818H45.5991C46.3829 136.818 46.9988 136.201 46.9988 135.416V129.667C46.9988 128.91 46.3549 128.265 45.5991 128.265Z"
              fill="#D9E6F7"
            />
            <path
              d="M43.6681 124.535H24.2135C23.8216 124.535 23.5137 124.227 23.5137 123.834C23.5137 123.442 23.8216 123.133 24.2135 123.133H43.6681C44.06 123.133 44.3679 123.442 44.3679 123.834C44.3679 124.227 44.06 124.535 43.6681 124.535Z"
              fill="#D9E6F7"
            />
            <path
              d="M43.6681 106.644C43.2762 106.644 42.9683 106.336 42.9683 105.943V102.634C42.9683 102.242 43.2762 101.933 43.6681 101.933C44.06 101.933 44.3679 102.242 44.3679 102.634V105.943C44.3679 106.336 44.06 106.644 43.6681 106.644Z"
              fill="#D9E6F7"
            />
            <path
              d="M22.5338 136.341C22.1419 136.341 21.834 136.032 21.834 135.64V130.508C21.834 130.256 21.9739 130.031 22.1979 129.891C22.4218 129.779 22.6738 129.779 22.8977 129.891C23.2336 130.116 24.9131 131.181 24.9131 132.443C24.9131 132.836 24.6052 133.144 24.2133 133.144C23.8214 133.144 23.5135 132.836 23.5135 132.443C23.5135 132.331 23.4016 132.163 23.2336 131.966V135.64C23.2336 136.004 22.8977 136.341 22.5338 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M15.5914 136.341C15.1995 136.341 14.8916 136.033 14.8916 135.64V130.508C14.8916 130.256 15.0316 130.032 15.2555 129.891C15.4794 129.779 15.7314 129.779 15.9553 129.891C16.2912 130.088 17.9987 131.181 17.9987 132.443C17.9987 132.836 17.6908 133.144 17.2989 133.144C16.907 133.144 16.5991 132.836 16.5991 132.443C16.5991 132.331 16.4872 132.163 16.3192 131.966V135.64C16.2912 136.005 15.9833 136.341 15.5914 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M18.9785 136.341C18.5866 136.341 18.2787 136.032 18.2787 135.64V131.966C18.1107 132.163 17.9987 132.331 17.9987 132.443C17.9987 132.836 17.6908 133.144 17.2989 133.144C16.907 133.144 16.5991 132.836 16.5991 132.443C16.5991 131.181 18.2787 130.088 18.6426 129.891C18.8665 129.751 19.1184 129.751 19.3424 129.891C19.5663 130.003 19.7063 130.256 19.7063 130.508V135.64C19.6783 136.004 19.3704 136.341 18.9785 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M8.64951 136.341C8.25762 136.341 7.94971 136.033 7.94971 135.64V130.508C7.94971 130.256 8.08967 130.032 8.31361 129.891C8.53755 129.779 8.78948 129.779 9.01341 129.891C9.34932 130.088 11.0568 131.181 11.0568 132.443C11.0568 132.836 10.7489 133.144 10.357 133.144C9.96515 133.144 9.65724 132.836 9.65724 132.443C9.65724 132.331 9.54527 132.163 9.37731 131.966V135.64C9.34932 136.005 9.04141 136.341 8.64951 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M12.0366 136.341C11.6447 136.341 11.3368 136.032 11.3368 135.64V131.966C11.1688 132.163 11.0568 132.331 11.0568 132.443C11.0568 132.836 10.7489 133.144 10.357 133.144C9.96514 133.144 9.65723 132.836 9.65723 132.443C9.65723 131.181 11.3368 130.088 11.7007 129.891C11.9246 129.751 12.1765 129.751 12.4005 129.891C12.6244 130.003 12.7644 130.256 12.7644 130.508V135.64C12.7364 136.004 12.4285 136.341 12.0366 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M24.2132 136.341H1.73545C1.34356 136.341 1.03564 136.033 1.03564 135.64V130.508C1.03564 130.256 1.17561 130.032 1.39954 129.891C1.62348 129.779 1.87541 129.779 2.09935 129.891C2.43526 130.088 4.14279 131.181 4.14279 132.443C4.14279 132.836 3.83487 133.144 3.44298 133.144C3.05109 133.144 2.74317 132.836 2.74317 132.443C2.74317 132.331 2.6312 132.163 2.46325 131.966V134.939H24.2412C24.6331 134.939 24.941 135.247 24.941 135.64C24.941 136.033 24.6051 136.341 24.2132 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M5.12251 136.341C4.73062 136.341 4.4227 136.032 4.4227 135.64V131.966C4.25475 132.163 4.14278 132.331 4.14278 132.443C4.14278 132.836 3.83486 133.144 3.44297 133.144C3.05108 133.144 2.74316 132.836 2.74316 132.443C2.74316 131.181 4.4227 130.088 4.7866 129.891C5.01054 129.751 5.26247 129.751 5.48641 129.891C5.71035 130.003 5.85031 130.256 5.85031 130.508V135.64C5.82231 136.004 5.48641 136.341 5.12251 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M27.9922 165H1.73545C1.34356 165 1.03564 164.692 1.03564 164.299V135.64C1.03564 135.247 1.34356 134.939 1.73545 134.939C2.12734 134.939 2.43526 135.247 2.43526 135.64V163.626H27.9922C28.3841 163.626 28.692 163.934 28.692 164.327C28.692 164.692 28.3841 165 27.9922 165Z"
              fill="#D9E6F7"
            />
            <path
              d="M24.2132 160.317H1.73545C1.34356 160.317 1.03564 160.008 1.03564 159.616C1.03564 159.223 1.34356 158.915 1.73545 158.915H24.2132C24.6051 158.915 24.9131 159.223 24.9131 159.616C24.9131 160.008 24.6051 160.317 24.2132 160.317Z"
              fill="#D9E6F7"
            />
            <path
              d="M48.0069 64.8895C47.615 64.8895 47.3071 64.5811 47.3071 64.1885V57.4864C47.3071 57.4583 47.3071 57.4303 47.3071 57.4023C47.3071 57.3462 47.475 55.6076 46.1314 54.57C44.5638 53.3642 42.9683 51.7377 42.9683 48.8494C42.9683 48.4568 43.2762 48.1483 43.6681 48.1483C44.06 48.1483 44.3679 48.4568 44.3679 48.8494C44.3679 51.0086 45.4316 52.2425 46.9992 53.4483C48.8466 54.8785 48.7347 57.1218 48.7067 57.5144V64.1885C48.7067 64.5811 48.3988 64.8895 48.0069 64.8895Z"
              fill="#D9E6F7"
            />
            <path
              d="M52.3734 64.8895C51.9815 64.8895 51.6736 64.5811 51.6736 64.1885V52.8875C51.1417 53.5324 50.5259 54.0933 49.9101 54.57C48.5384 55.6076 48.7344 57.3742 48.7344 57.4023C48.7344 57.4303 48.7344 57.4583 48.7344 57.4864V64.1885C48.7344 64.5811 48.4265 64.8895 48.0346 64.8895C47.6427 64.8895 47.3348 64.5811 47.3348 64.1885V57.5144C47.3068 57.1499 47.1948 54.8785 49.0423 53.4483C50.6099 52.2425 51.6736 50.9806 51.6736 48.8494C51.6736 48.4568 51.9815 48.1483 52.3734 48.1483C52.7653 48.1483 53.0732 48.4568 53.0732 48.8494V64.1885C53.0732 64.5811 52.7653 64.8895 52.3734 64.8895Z"
              fill="#D9E6F7"
            />
            <path
              d="M63.1507 165H43.6681C43.2762 165 42.9683 164.692 42.9683 164.299C42.9683 163.906 43.2762 163.598 43.6681 163.598H62.4229V103.307H51.4499C51.058 103.307 50.7501 102.999 50.7501 102.606C50.7501 102.214 51.058 101.905 51.4499 101.905H63.1227C63.5146 101.905 63.8225 102.214 63.8225 102.606V164.299C63.8505 164.692 63.5426 165 63.1507 165Z"
              fill="#D9E6F7"
            />
            <path
              d="M51.4779 120.217H43.6681C43.2762 120.217 42.9683 119.908 42.9683 119.516C42.9683 119.123 43.2762 118.815 43.6681 118.815H50.7781V102.69C50.7221 102.326 50.2463 99.4375 48.2588 98.2036C45.7115 96.6332 42.9963 93.1841 42.9963 89.3423C42.9963 88.9497 43.3042 88.6412 43.6961 88.6412C44.088 88.6412 44.3959 88.9497 44.3959 89.3423C44.3959 92.6513 46.7752 95.6518 48.9866 97.0258C51.6739 98.7084 52.1497 102.41 52.1777 102.578C52.1777 102.606 52.1777 102.634 52.1777 102.662V119.544C52.1777 119.88 51.8698 120.217 51.4779 120.217Z"
              fill="#D9E6F7"
            />
            <path
              d="M63.1504 103.307C62.7585 103.307 62.4506 102.999 62.4506 102.606V97.0819L62.3107 96.9697C62.1987 96.8576 62.1147 96.7174 62.0867 96.5491L60.1273 82.8645C60.0713 82.472 60.3512 82.1355 60.7151 82.0794C61.107 82.0233 61.4429 82.3037 61.4989 82.6683L63.4304 96.1004L63.5983 96.2406C63.7383 96.3809 63.8223 96.5771 63.8223 96.7734V102.606C63.8502 102.999 63.5423 103.307 63.1504 103.307Z"
              fill="#D9E6F7"
            />
            <path
              d="M58.5039 97.4745C58.3079 97.4745 58.112 97.3904 57.972 97.2502C57.7201 96.9698 57.7481 96.5211 58.028 96.2687L58.196 96.1285L60.1274 82.6963C60.1834 82.3037 60.5473 82.0513 60.9112 82.1074C61.3031 82.1635 61.555 82.528 61.499 82.8926L59.5396 96.5772C59.5116 96.7454 59.4276 96.8856 59.3156 96.9978L58.9517 97.3343C58.8398 97.4184 58.6718 97.4745 58.5039 97.4745Z"
              fill="#D9E6F7"
            />
            <path
              d="M58.5036 103.307C58.1117 103.307 57.8038 102.999 57.8038 102.606V96.8296C57.7198 96.4089 57.4119 95.3433 56.796 95.0068C55.3684 94.2216 54.6406 91.8381 54.6406 89.9312C54.6406 89.5386 54.9485 89.2301 55.3404 89.2301C55.7323 89.2301 56.0402 89.5386 56.0402 89.9312C56.0402 91.5857 56.7121 93.3523 57.4678 93.801C58.8115 94.5581 59.1474 96.465 59.1754 96.6893C59.1754 96.7174 59.1754 96.7735 59.1754 96.8015V102.634C59.2034 102.999 58.8954 103.307 58.5036 103.307Z"
              fill="#D9E6F7"
            />
            <path
              d="M52.1495 97.4745C52.1215 97.4745 52.0655 97.4745 52.0375 97.4745C51.6456 97.4184 51.3937 97.0539 51.4497 96.6613C51.4777 96.4369 51.8136 94.5301 53.1572 93.7729C53.941 93.3243 54.5848 91.5576 54.5848 89.9031C54.5848 89.5105 54.8927 89.2021 55.2846 89.2021C55.6765 89.2021 55.9844 89.5105 55.9844 89.9031C55.9844 91.838 55.2566 94.1936 53.829 94.9787C53.1852 95.3433 52.8773 96.493 52.8213 96.8576C52.7933 97.2221 52.5134 97.4745 52.1495 97.4745Z"
              fill="#D9E6F7"
            />
            <path
              d="M52.1496 103.307C51.7577 103.307 51.4497 102.999 51.4497 102.606V96.8296C51.3658 96.4089 51.0579 95.3433 50.442 95.0068C49.0144 94.2216 48.2866 91.8381 48.2866 89.9312C48.2866 89.5386 48.5945 89.2301 48.9864 89.2301C49.3783 89.2301 49.6862 89.5386 49.6862 89.9312C49.6862 91.5857 50.3581 93.3523 51.1138 93.801C52.4575 94.5581 52.7934 96.465 52.8214 96.6893C52.8214 96.7174 52.8214 96.7735 52.8214 96.8015V102.634C52.8494 102.999 52.5414 103.307 52.1496 103.307Z"
              fill="#D9E6F7"
            />
            <path
              d="M46.2154 96.2126C46.1034 96.2126 46.0194 96.1846 45.9075 96.1285C45.5716 95.9602 45.4036 95.5396 45.5996 95.2031C45.9355 94.5301 46.3553 94.0534 46.8592 93.7729C47.643 93.3243 48.2868 91.5576 48.2868 89.9031C48.2868 89.5105 48.5947 89.2021 48.9866 89.2021C49.3785 89.2021 49.6864 89.5105 49.6864 89.9031C49.6864 91.838 48.9586 94.1936 47.531 94.9787C47.2791 95.119 47.0552 95.3994 46.8592 95.792C46.7472 96.0724 46.4953 96.2126 46.2154 96.2126Z"
              fill="#D9E6F7"
            />
            <path
              d="M63.1507 124.535H43.6681C43.2762 124.535 42.9683 124.227 42.9683 123.834C42.9683 123.442 43.2762 123.133 43.6681 123.133H63.1227C63.5146 123.133 63.8225 123.442 63.8225 123.834C63.8225 124.227 63.5426 124.535 63.1507 124.535Z"
              fill="#D9E6F7"
            />
            <path
              d="M64.83 136.341C64.4381 136.341 64.1302 136.032 64.1302 135.64V131.966C63.9623 132.163 63.8503 132.331 63.8503 132.443C63.8503 132.836 63.5424 133.144 63.1505 133.144C62.7586 133.144 62.4507 132.836 62.4507 132.443C62.4507 131.181 64.1302 130.088 64.4941 129.891C64.7181 129.751 64.97 129.751 65.1939 129.891C65.4179 130.003 65.5578 130.256 65.5578 130.508V135.64C65.5298 136.004 65.2219 136.341 64.83 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M71.7719 136.341C71.38 136.341 71.0721 136.032 71.0721 135.64V131.966C70.9042 132.163 70.7922 132.331 70.7922 132.443C70.7922 132.836 70.4843 133.144 70.0924 133.144C69.7005 133.144 69.3926 132.836 69.3926 132.443C69.3926 131.181 71.0721 130.088 71.436 129.891C71.6599 129.751 71.9119 129.751 72.1358 129.891C72.3598 130.003 72.4997 130.256 72.4997 130.508V135.64C72.4717 136.004 72.1638 136.341 71.7719 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M68.3849 136.341C67.993 136.341 67.6851 136.033 67.6851 135.64V130.508C67.6851 130.256 67.825 130.032 68.049 129.891C68.2729 129.779 68.5248 129.779 68.7488 129.891C69.0847 130.088 70.7922 131.181 70.7922 132.443C70.7922 132.836 70.4843 133.144 70.0924 133.144C69.7005 133.144 69.3926 132.836 69.3926 132.443C69.3926 132.331 69.2806 132.163 69.1127 131.966V135.64C69.0847 136.005 68.7768 136.341 68.3849 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M78.7143 136.341C78.3224 136.341 78.0145 136.032 78.0145 135.64V131.966C77.8465 132.163 77.7346 132.331 77.7346 132.443C77.7346 132.836 77.4267 133.144 77.0348 133.144C76.6429 133.144 76.335 132.836 76.335 132.443C76.335 131.181 78.0145 130.088 78.3784 129.891C78.6023 129.751 78.8543 129.751 79.0782 129.891C79.3021 130.003 79.4421 130.256 79.4421 130.508V135.64C79.4141 136.004 79.0782 136.341 78.7143 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M75.3272 136.341C74.9354 136.341 74.6274 136.033 74.6274 135.64V130.508C74.6274 130.256 74.7674 130.032 74.9913 129.891C75.2153 129.779 75.4672 129.779 75.6912 129.891C76.0271 130.088 77.7346 131.181 77.7346 132.443C77.7346 132.836 77.4267 133.144 77.0348 133.144C76.6429 133.144 76.335 132.836 76.335 132.443C76.335 132.331 76.223 132.163 76.055 131.966V135.64C76.0271 136.005 75.6911 136.341 75.3272 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M85.6283 136.341H63.1505C62.7586 136.341 62.4507 136.032 62.4507 135.64C62.4507 135.247 62.7586 134.939 63.1505 134.939H84.9285V131.966C84.7605 132.163 84.6486 132.331 84.6486 132.443C84.6486 132.836 84.3406 133.144 83.9488 133.144C83.5569 133.144 83.2489 132.836 83.2489 132.443C83.2489 131.181 84.9285 130.088 85.2924 129.891C85.5163 129.751 85.7682 129.751 85.9922 129.891C86.2161 130.003 86.3561 130.256 86.3561 130.508V135.64C86.3281 136.004 86.0202 136.341 85.6283 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M82.2413 136.341C81.8494 136.341 81.5415 136.032 81.5415 135.64V130.508C81.5415 130.256 81.6815 130.031 81.9054 129.891C82.1293 129.779 82.3813 129.779 82.6052 129.891C82.9411 130.088 84.6487 131.181 84.6487 132.443C84.6487 132.836 84.3407 133.144 83.9489 133.144C83.557 133.144 83.249 132.836 83.249 132.443C83.249 132.331 83.1371 132.163 82.9691 131.966V135.64C82.9411 136.004 82.6332 136.341 82.2413 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M85.6284 165H59.3717C58.9798 165 58.6719 164.692 58.6719 164.299C58.6719 163.906 58.9798 163.598 59.3717 163.598H84.9286V135.612C84.9286 135.219 85.2366 134.911 85.6284 134.911C86.0203 134.911 86.3283 135.219 86.3283 135.612V164.299C86.3283 164.692 86.0203 165 85.6284 165Z"
              fill="#D9E6F7"
            />
            <path
              d="M85.6283 160.317H63.1505C62.7586 160.317 62.4507 160.008 62.4507 159.616C62.4507 159.223 62.7586 158.915 63.1505 158.915H85.6283C86.0202 158.915 86.3281 159.223 86.3281 159.616C86.3281 160.008 86.0202 160.317 85.6283 160.317Z"
              fill="#D9E6F7"
            />
            <path
              d="M52.9052 86.1735H34.4303C34.0384 86.1735 33.7305 85.865 33.7305 85.4725C33.7305 85.0799 34.0384 84.7714 34.4303 84.7714H52.9052C53.2971 84.7714 53.605 85.0799 53.605 85.4725C53.605 85.865 53.2971 86.1735 52.9052 86.1735Z"
              fill="#D9E6F7"
            />
            <path
              d="M34.4303 95.6518C34.0384 95.6518 33.7305 95.3433 33.7305 94.9507V64.1885C33.7305 63.7959 34.0384 63.4874 34.4303 63.4874H43.6677C44.0596 63.4874 44.3675 63.7959 44.3675 64.1885C44.3675 64.5811 44.0596 64.8895 43.6677 64.8895H35.1301V94.9227C35.1301 95.3153 34.8222 95.6518 34.4303 95.6518Z"
              fill="#D9E6F7"
            />
            <path
              d="M52.9055 95.6518C52.5136 95.6518 52.2057 95.3433 52.2057 94.9507V64.8895H43.6681C43.2762 64.8895 42.9683 64.5811 42.9683 64.1885C42.9683 63.7959 43.2762 63.4874 43.6681 63.4874H52.9055C53.2974 63.4874 53.6053 63.7959 53.6053 64.1885V94.9227C53.6053 95.3153 53.2974 95.6518 52.9055 95.6518Z"
              fill="#D9E6F7"
            />
            <path
              d="M9.29318 49.4103C9.26519 49.4103 9.2372 49.4103 9.2372 49.4103C8.92928 49.3822 8.67735 49.1579 8.62137 48.8494L8.08951 46.1013L5.51422 45.0357C5.2343 44.9235 5.06635 44.6151 5.09434 44.3066C5.12233 43.9981 5.34627 43.7457 5.65418 43.6897L8.39743 43.1569L9.46113 40.577C9.5731 40.2966 9.88102 40.1283 10.1889 40.1564C10.4968 40.1844 10.7488 40.4087 10.8048 40.7172L11.3366 43.4653L13.9119 44.5309C14.1918 44.6431 14.3598 44.9516 14.3318 45.26C14.3038 45.5685 14.0799 45.8209 13.7719 45.877L11.0287 46.4098L9.96499 48.9896C9.82503 49.242 9.5731 49.4103 9.29318 49.4103ZM8.20148 44.6431L8.95727 44.9516C9.18121 45.0357 9.32117 45.232 9.37716 45.4563L9.54511 46.2695L9.85303 45.5124C9.937 45.2881 10.1329 45.1479 10.3569 45.0918L11.1687 44.9235L10.4129 44.6151C10.1889 44.5309 10.049 44.3346 9.99299 44.1103L9.82503 43.2971L9.51712 44.0542C9.43314 44.2786 9.2372 44.4188 9.01326 44.4748L8.20148 44.6431Z"
              fill="#D9E6F7"
            />
            <path
              d="M6.27021 68.535C6.24222 68.535 6.21423 68.535 6.21423 68.535C5.90631 68.507 5.65438 68.2826 5.5984 67.9742L4.73063 63.4033L0.447817 61.6366C0.167894 61.5245 -5.94277e-05 61.216 0.0279328 60.9075C0.0559251 60.5991 0.279863 60.3467 0.587778 60.2906L5.15052 59.4213L6.91403 55.1309C7.026 54.8504 7.33392 54.6822 7.64183 54.7102C7.94975 54.7383 8.20168 54.9626 8.25766 55.2711L9.12542 59.8419L13.4082 61.6086C13.6882 61.7208 13.8561 62.0292 13.8281 62.3377C13.8001 62.6461 13.5762 62.8985 13.2683 62.9546L8.67754 63.8239L6.91403 68.1144C6.83006 68.3667 6.55013 68.535 6.27021 68.535ZM3.13508 61.244L5.5984 62.2536C5.82233 62.3377 5.9623 62.534 6.01828 62.7583L6.52214 65.3662L7.52986 62.8985C7.61384 62.6742 7.80978 62.534 8.03372 62.4779L10.637 61.9731L8.17368 60.9636C7.94975 60.8795 7.80978 60.6832 7.7538 60.4589L7.27793 57.8509L6.27021 60.3186C6.18623 60.543 5.99029 60.6832 5.76635 60.7393L3.13508 61.244Z"
              fill="#D9E6F7"
            />
            <path
              d="M13.7441 33.0897C13.6881 33.0897 13.6041 33.0897 13.5481 33.0897C13.0443 33.0336 12.5684 32.7813 12.2605 32.3887C11.9246 31.9961 11.7846 31.4913 11.8406 30.9866C11.9526 29.921 12.8763 29.1638 13.94 29.276C15.0037 29.3882 15.7595 30.3136 15.6476 31.3792C15.5916 31.8839 15.3396 32.3606 14.9478 32.6691C14.6118 32.9495 14.192 33.0897 13.7441 33.0897ZM13.2402 31.1268C13.2402 31.267 13.2682 31.4072 13.3522 31.5194C13.4362 31.6315 13.5761 31.6876 13.6881 31.7157C13.8281 31.7437 13.968 31.6876 14.08 31.6035C14.192 31.5194 14.2479 31.3792 14.2759 31.267C14.3039 31.1548 14.22 30.9585 14.136 30.8464C14.052 30.7342 13.912 30.6781 13.8001 30.6501C13.5201 30.622 13.2682 30.8464 13.2402 31.1268Z"
              fill="#D9E6F7"
            />
            <path
              d="M18.8949 24.4247C18.8389 24.4247 18.7549 24.4247 18.6989 24.4247C17.6352 24.3126 16.8794 23.3872 16.9634 22.3216C17.0194 21.8168 17.2713 21.3681 17.6632 21.0316C18.0551 20.6951 18.559 20.5549 19.0628 20.611C19.5947 20.6671 20.0425 20.8914 20.3785 21.312C20.7144 21.7046 20.8543 22.2094 20.7983 22.7141C20.6864 23.6956 19.8466 24.4247 18.8949 24.4247ZM18.363 22.4618C18.335 22.7422 18.531 22.9946 18.8109 23.0226C19.0908 23.0507 19.3427 22.8544 19.3707 22.5459C19.3707 22.4057 19.3427 22.2655 19.2588 22.1813C19.2028 22.0692 19.0628 22.0131 18.9229 22.0131C18.7829 22.0131 18.6429 22.0411 18.531 22.1253C18.447 22.2094 18.391 22.3216 18.363 22.4618Z"
              fill="#D9E6F7"
            />
            <path
              d="M26.5088 17.3581C26.4528 17.3581 26.4248 17.3581 26.3689 17.3581C26.0329 17.302 25.697 17.1338 25.4731 16.8534C25.2492 16.601 25.1652 16.2364 25.1932 15.8999C25.2772 15.1708 25.921 14.638 26.6488 14.7222C27.3486 14.7782 27.8804 15.4232 27.8244 16.1523C27.7405 16.8253 27.1806 17.3581 26.5088 17.3581ZM26.5088 15.956C26.4808 15.956 26.4248 15.984 26.4248 16.0401C26.4248 16.0401 26.4248 16.0682 26.4528 16.0962C26.4808 16.1243 26.5088 16.1243 26.5088 16.1243C26.5088 16.1243 26.5368 16.1243 26.5648 16.0962C26.5928 16.0682 26.5928 16.0401 26.5928 16.0401C26.5928 16.0401 26.5928 16.0121 26.5648 15.984C26.5368 15.956 26.5088 15.956 26.5088 15.956Z"
              fill="#D9E6F7"
            />
            <path
              d="M29.7277 36.1463C28.9999 36.1463 28.4121 35.5575 28.4121 34.8284C28.4121 34.0993 28.9999 33.5104 29.7277 33.5104C30.4555 33.5104 31.0434 34.0993 31.0434 34.8284C31.0434 35.5575 30.4555 36.1463 29.7277 36.1463ZM29.7277 34.7442C29.6718 34.7442 29.6438 34.7723 29.6438 34.8284C29.6438 34.8844 29.6718 34.9125 29.7277 34.9125C29.7837 34.9125 29.8117 34.8844 29.8117 34.8284C29.8117 34.7723 29.7837 34.7442 29.7277 34.7442Z"
              fill="#D9E6F7"
            />
            <path
              d="M26.6486 45.0077C25.9208 45.0077 25.333 44.4188 25.333 43.6897C25.333 42.9606 25.9208 42.3717 26.6486 42.3717C27.3764 42.3717 27.9643 42.9606 27.9643 43.6897C27.9643 44.4188 27.3764 45.0077 26.6486 45.0077ZM26.6486 43.6056C26.5927 43.6056 26.5647 43.6336 26.5647 43.6897C26.5647 43.7458 26.5927 43.7738 26.6486 43.7738C26.7046 43.7738 26.7326 43.7458 26.7326 43.6897C26.7326 43.6336 26.6766 43.6056 26.6486 43.6056Z"
              fill="#D9E6F7"
            />
            <path
              d="M83.6129 43.4093C83.3889 43.4093 83.165 43.2971 83.025 43.1008L81.5135 40.7453L78.7142 40.7172C78.4063 40.7172 78.1264 40.5209 78.0424 40.2125C77.9584 39.904 78.0704 39.5955 78.3503 39.4273L80.7017 37.913L80.7297 35.1088C80.7297 34.8003 80.9256 34.5199 81.2335 34.4358C81.5414 34.3516 81.8494 34.4638 82.0173 34.7442L83.5289 37.0998L86.3281 37.1278C86.636 37.1278 86.916 37.3241 86.9999 37.6326C87.0839 37.941 86.9719 38.2495 86.72 38.4178L84.3687 39.932L84.3407 42.7362C84.3407 43.0447 84.1447 43.3251 83.8368 43.4093C83.7528 43.4093 83.6689 43.4093 83.6129 43.4093ZM81.0936 39.3431H81.9053C82.1293 39.3431 82.3532 39.4553 82.4932 39.6516L82.9411 40.3527V39.5394C82.9411 39.3151 83.053 39.0908 83.249 38.9506L83.9488 38.5019H83.137C82.9131 38.5019 82.6891 38.3897 82.5492 38.1934L82.1013 37.4924V38.3056C82.1013 38.5299 81.9893 38.7543 81.7934 38.8945L81.0936 39.3431Z"
              fill="#D9E6F7"
            />
            <path
              d="M76.0828 28.1824C75.2431 28.1824 74.4873 27.6496 74.2353 26.8083C73.9554 25.7988 74.5153 24.7332 75.551 24.4247C76.5587 24.1443 77.6224 24.7051 77.9303 25.7427C78.2102 26.7522 77.6504 27.8178 76.6147 28.1263C76.4187 28.1824 76.2508 28.1824 76.0828 28.1824ZM76.0828 25.7707C76.0268 25.7707 75.9988 25.7707 75.9429 25.7988C75.6629 25.8829 75.523 26.1633 75.579 26.4437C75.6629 26.7242 75.9429 26.8644 76.2228 26.8083C76.5027 26.7242 76.6427 26.4437 76.5867 26.1633C76.5027 25.9109 76.3068 25.7707 76.0828 25.7707Z"
              fill="#D9E6F7"
            />
            <path
              d="M69.4486 20.611C68.6088 20.611 67.853 20.0501 67.6011 19.2369C67.3211 18.2274 67.881 17.1618 68.9167 16.8533C69.4206 16.7131 69.9244 16.7692 70.3723 17.0216C70.8202 17.274 71.1561 17.6666 71.296 18.1713C71.576 19.1808 71.0161 20.2464 69.9804 20.5549C69.8125 20.5829 69.6165 20.611 69.4486 20.611ZM69.4486 18.1713C69.3926 18.1713 69.3646 18.1713 69.3086 18.1994C69.0287 18.2835 68.8887 18.5639 68.9447 18.8443C69.0287 19.1248 69.3086 19.265 69.5885 19.2089C69.8684 19.1248 70.0084 18.8443 69.9524 18.5639C69.9244 18.4237 69.8125 18.3115 69.7005 18.2554C69.6165 18.1994 69.5325 18.1713 69.4486 18.1713Z"
              fill="#D9E6F7"
            />
            <path
              d="M60.7711 15.0025C60.5472 15.0025 60.3232 14.9464 60.1273 14.8343C59.8194 14.666 59.5954 14.3856 59.4835 14.0491C59.2875 13.348 59.6794 12.6189 60.3792 12.4226C61.079 12.2264 61.8068 12.6189 62.0028 13.32C62.2547 14.0211 61.8628 14.7501 61.163 14.9464C61.0231 15.0025 60.9111 15.0025 60.7711 15.0025ZM60.8551 13.6565L60.6871 13.7126C60.6871 13.7687 60.7431 13.7687 60.7991 13.7687C60.7991 13.7687 60.8271 13.7687 60.8551 13.7406C60.8831 13.7126 60.8551 13.6845 60.8551 13.6565ZM60.7991 13.6004C60.7711 13.6004 60.7711 13.6004 60.7991 13.6004C60.7431 13.6285 60.7151 13.6565 60.7151 13.7126L60.8831 13.6565C60.8831 13.6565 60.8831 13.6285 60.8551 13.6004C60.7991 13.6004 60.7991 13.6004 60.7991 13.6004Z"
              fill="#D9E6F7"
            />
            <path
              d="M64.466 41.1098C64.298 41.1098 64.1581 41.0818 63.9901 41.0537C62.9544 40.8013 62.3386 39.7357 62.5905 38.7262C62.8424 37.6887 63.9061 37.0717 64.9138 37.3241C65.4177 37.4363 65.8376 37.7728 66.0895 38.1934C66.3414 38.6421 66.4254 39.1468 66.3135 39.6516C66.2015 40.1564 65.8656 40.577 65.4457 40.8294C65.1378 40.9976 64.8019 41.1098 64.466 41.1098ZM64.466 38.6701C64.242 38.6701 64.0181 38.8384 63.9621 39.0627C63.9061 39.3431 64.0741 39.6236 64.326 39.6796C64.466 39.7077 64.6059 39.6796 64.7179 39.6236C64.8299 39.5394 64.9138 39.4273 64.9418 39.3151C64.9698 39.1749 64.9418 39.0347 64.8859 38.9225C64.8019 38.8103 64.6899 38.7262 64.5779 38.6982C64.5499 38.6701 64.522 38.6701 64.466 38.6701Z"
              fill="#D9E6F7"
            />
            <path
              d="M59.5116 31.7998C59.3996 31.7998 59.2877 31.7998 59.1757 31.7718C58.4759 31.6035 58.028 30.8744 58.2239 30.1734C58.3079 29.8369 58.5319 29.5564 58.8398 29.3601C59.1477 29.1919 59.4836 29.1358 59.8475 29.2199C60.1834 29.3041 60.4633 29.5284 60.6593 29.8369C60.8272 30.1453 60.8832 30.4818 60.7992 30.8464C60.7153 31.1829 60.4913 31.4633 60.1834 31.6596C59.9595 31.7437 59.7355 31.7998 59.5116 31.7998ZM59.4276 30.4538C59.4276 30.4538 59.4276 30.4818 59.4276 30.5099C59.4556 30.5379 59.4836 30.5379 59.4836 30.5379C59.5116 30.5379 59.5676 30.5099 59.5676 30.4818C59.5676 30.4257 59.5396 30.3977 59.5116 30.3977C59.5116 30.3977 59.4836 30.3977 59.4556 30.3977C59.4276 30.4257 59.4276 30.4538 59.4276 30.4538Z"
              fill="#D9E6F7"
            />
            <path
              d="M10.7212 142.118H7.75401C7.36211 142.118 7.0542 141.809 7.0542 141.417C7.0542 141.024 7.36211 140.715 7.75401 140.715H10.7212C11.1131 140.715 11.421 141.024 11.421 141.417C11.421 141.809 11.1131 142.118 10.7212 142.118Z"
              fill="#D9E6F7"
            />
            <path
              d="M13.4643 145.399H11.8688C11.4769 145.399 11.1689 145.09 11.1689 144.698C11.1689 144.305 11.4769 143.996 11.8688 143.996H13.4363C13.8282 143.996 14.1361 144.305 14.1361 144.698C14.1361 145.09 13.8282 145.399 13.4643 145.399Z"
              fill="#D9E6F7"
            />
            <path
              d="M7.44609 155.886H5.87852C5.48663 155.886 5.17871 155.578 5.17871 155.185C5.17871 154.793 5.48663 154.484 5.87852 154.484H7.44609C7.83798 154.484 8.14589 154.793 8.14589 155.185C8.14589 155.578 7.83798 155.886 7.44609 155.886Z"
              fill="#D9E6F7"
            />
            <path
              d="M69.1687 143.996H67.6012C67.2093 143.996 66.9014 143.688 66.9014 143.295C66.9014 142.903 67.2093 142.594 67.6012 142.594H69.1687C69.5606 142.594 69.8685 142.903 69.8685 143.295C69.8685 143.688 69.5606 143.996 69.1687 143.996Z"
              fill="#D9E6F7"
            />
            <path
              d="M80.45 150.39H78.8824C78.4905 150.39 78.1826 150.082 78.1826 149.689C78.1826 149.296 78.4905 148.988 78.8824 148.988H80.45C80.8419 148.988 81.1498 149.296 81.1498 149.689C81.1498 150.082 80.8139 150.39 80.45 150.39Z"
              fill="#D9E6F7"
            />
            <path
              d="M78.1263 153.222H76.5587C76.1668 153.222 75.8589 152.914 75.8589 152.521C75.8589 152.129 76.1668 151.82 76.5587 151.82H78.1263C78.5181 151.82 78.8261 152.129 78.8261 152.521C78.8261 152.914 78.5181 153.222 78.1263 153.222Z"
              fill="#D9E6F7"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="87" height="165" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      name: "Русская литература",
      link: "ruslit",
      img: (
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M137.314 0.195465C117.55 7.22728 85.291 27.3636 80.5228 83.1182C80.5228 83.1227 80.5228 83.1318 80.5183 83.1364C80.1864 87.45 79.9683 93.7864 79.9683 98.9091C79.9683 99.85 80.7319 100.618 81.6774 100.618C82.6228 100.618 83.3864 99.85 83.3864 98.9091C83.3864 94.2546 83.5728 88.5864 83.8546 84.4091C86.8137 83 94.9319 78.4727 96.991 70.2955C99.6137 59.8 106.982 54.5182 114.786 48.9227C126.605 40.45 140 30.8455 140 1.59546C140 0.545465 139.091 -0.427263 137.314 0.195465ZM112.796 46.15C104.468 52.1182 96.6046 57.7591 93.6819 69.4637C92.2865 75 87.3683 78.5864 84.2137 80.3818C89.5955 29.7909 118.718 10.9636 136.55 4.12728C135.827 29.6409 124.123 38.0273 112.796 46.15Z"
              fill="#D9E6F7"
            />
            <path
              d="M74.6909 98.8045C69.7591 100.091 65.5955 101.714 62.3091 103.627C61.4955 104.1 61.2364 105.136 61.6955 105.964C62.1182 106.718 63.1955 107.064 64.0318 106.577C67.0455 104.818 70.9228 103.318 75.5546 102.114C76.4637 101.873 77.0137 100.941 76.7773 100.032C76.5364 99.1091 75.6091 98.5864 74.6909 98.8045Z"
              fill="#D9E6F7"
            />
            <path
              d="M76.841 86.3727C76.6092 85.4636 75.6728 84.9182 74.7638 85.1455C70.0547 86.3545 65.8728 87.9727 62.3365 89.9545C61.5138 90.4136 61.2501 91.4364 61.6819 92.2773C62.1501 93.1954 63.291 93.3273 64.0047 92.9318C67.2956 91.1136 71.1956 89.5909 75.6138 88.4545C76.5274 88.2182 77.0774 87.2864 76.841 86.3727Z"
              fill="#D9E6F7"
            />
            <path
              d="M78.2865 72.3409C78.0774 71.4273 77.1774 70.8318 76.232 71.0727C70.7911 72.3545 66.1092 74.1136 62.3183 76.3C61.5001 76.7727 61.2047 77.8227 61.6956 78.6364C62.2092 79.4909 63.2229 79.7273 64.0274 79.2636C67.532 77.25 71.9001 75.6045 77.0229 74.3954C77.9365 74.1818 78.5047 73.2591 78.2865 72.3409Z"
              fill="#D9E6F7"
            />
            <path
              d="M81.3047 58.05C81.1138 57.1318 80.1911 56.5545 79.2911 56.7182C72.4229 58.1182 66.7183 60.1136 62.3183 62.6455C61.5001 63.1182 61.232 64.1545 61.691 64.9773C62.241 65.9636 63.4092 65.9591 64.0274 65.6045C68.1229 63.2318 73.4729 61.3909 79.9729 60.0636C80.8956 59.8773 81.4911 58.9682 81.3047 58.05Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 62.6455C42.3863 58.0591 30.6363 55.4046 15.4363 54.7682C14.4363 54.7227 13.6999 55.4636 13.659 56.4C13.6226 57.3455 14.3545 58.1409 15.2954 58.1818C33.5363 58.9409 43.5136 62.6546 48.6636 65.6046C49.5908 66.1364 50.5999 65.6773 50.9954 64.9773C51.459 64.1546 51.1772 63.1182 50.3636 62.6455Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 76.3045C42.3863 71.7182 30.6363 69.0636 15.4363 68.4273C14.4363 68.3818 13.6999 69.1227 13.659 70.0591C13.6226 71.0046 14.3545 71.8 15.2954 71.8409C33.5363 72.6 43.5136 76.3136 48.6636 79.2636C49.5908 79.7955 50.5999 79.3364 50.9954 78.6364C51.459 77.8136 51.1772 76.7773 50.3636 76.3045Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 89.9636C42.3863 85.3773 30.6363 82.7227 15.4363 82.0864C14.4363 82.0409 13.6999 82.7818 13.659 83.7182C13.6226 84.6636 14.3545 85.4591 15.2954 85.5C33.5363 86.2591 43.5136 89.9727 48.6636 92.9227C49.5908 93.4545 50.5999 92.9955 50.9954 92.2955C51.459 91.4727 51.1772 90.4364 50.3636 89.9636Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 103.623C42.3863 99.0364 30.6363 96.3818 15.4363 95.7455C14.4363 95.7 13.6999 96.4409 13.659 97.3773C13.6226 98.3227 14.3545 99.1182 15.2954 99.1591C33.5363 99.9182 43.5136 103.632 48.6636 106.582C49.5908 107.114 50.5999 106.655 50.9954 105.955C51.459 105.132 51.1772 104.095 50.3636 103.623Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 117.282C42.3863 112.695 30.6363 110.041 15.4363 109.405C14.4363 109.359 13.6999 110.1 13.659 111.036C13.6226 111.982 14.3545 112.777 15.2954 112.818C33.5363 113.577 43.5136 117.291 48.6636 120.241C49.5908 120.773 50.5999 120.314 50.9954 119.614C51.459 118.791 51.1772 117.755 50.3636 117.282Z"
              fill="#D9E6F7"
            />
            <path
              d="M86.3045 43.6682C86.1727 42.7273 85.2591 42.0545 84.3727 42.2227C66.6454 44.7682 59.1773 50.4636 56.3455 53.5318C52.6364 49.5 40.9591 40.9727 8.53636 40.9727C7.59091 40.9727 6.82727 41.7409 6.82727 42.6818V47.8045H1.70909C0.763636 47.8045 0 48.5727 0 49.5136V138.295C0 139.236 0.763636 140.005 1.70909 140.005H110.977C111.923 140.005 112.686 139.236 112.686 138.295V58.3227C112.686 57.3818 111.923 56.6136 110.977 56.6136C110.032 56.6136 109.268 57.3818 109.268 58.3227V136.586H65.1864C71.7864 134.923 83.6 133.173 104.145 133.173C105.091 133.173 105.855 132.405 105.855 131.464V66.1045C105.855 65.1636 105.091 64.3954 104.145 64.3954C103.2 64.3954 102.436 65.1636 102.436 66.1045V129.764C74.6409 129.891 62.8136 133.177 58.0455 135.327V56.8364C59.1045 55.3273 64.95 48.4591 84.8545 45.6C85.7909 45.4636 86.4409 44.6045 86.3045 43.6682ZM3.41364 136.586V51.2227H6.82727V131.468C6.82727 132.409 7.59091 133.177 8.53636 133.177C29.0818 133.177 40.9045 134.927 47.5 136.591H3.41364V136.586ZM54.6364 135.323C49.8682 133.177 38.0455 129.886 10.2455 129.759V44.3954C44.5682 44.7273 53.3455 55 54.6364 56.8273V135.323Z"
              fill="#D9E6F7"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="140" height="140" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },    {
      name: "Математика",
      link: "algebra",
      img: (
        <svg
          width="172"
          height="172"
          viewBox="0 0 172 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M96.75 118.25H32.25C29.2803 118.25 26.875 115.845 26.875 112.875V26.875C26.875 23.9053 29.2803 21.5 32.25 21.5H96.75C99.7197 21.5 102.125 23.9053 102.125 26.875V112.875C102.125 115.845 99.7197 118.25 96.75 118.25Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M91.375 118.25H26.875C23.9053 118.25 21.5 115.845 21.5 112.875V26.875C21.5 23.9053 23.9053 21.5 26.875 21.5H91.375C94.3447 21.5 96.75 23.9053 96.75 26.875V112.875C96.75 115.845 94.3447 118.25 91.375 118.25Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M86 32.25H32.25V107.5H86V32.25Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M77.9375 107.5H120.938V86H77.9375C76.4527 86 75.25 87.2027 75.25 88.6875V104.812C75.25 106.297 76.4527 107.5 77.9375 107.5Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M56.4375 129H99.4375V107.5H56.4375C54.9527 107.5 53.75 108.703 53.75 110.188V126.312C53.75 127.797 54.9527 129 56.4375 129Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M67.1875 150.5H110.188V129H67.1875C65.7027 129 64.5 130.203 64.5 131.688V147.812C64.5 149.297 65.7027 150.5 67.1875 150.5Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M75.25 147.812V131.688C75.25 130.203 76.4527 129 77.9375 129H72.5625C71.0777 129 69.875 130.203 69.875 131.688V147.812C69.875 149.297 71.0777 150.5 72.5625 150.5H77.9375C76.4527 150.5 75.25 149.297 75.25 147.812Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M147.812 88.6875V104.812H150.5V107.5H120.938C119.453 107.5 118.25 106.297 118.25 104.812V88.6875C118.25 87.2027 119.453 86 120.938 86H150.5V88.6875H147.812Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M137.062 110.188V126.312H139.75V129H99.4375C97.9527 129 96.75 127.797 96.75 126.312V110.188C96.75 108.703 97.9527 107.5 99.4375 107.5H139.75V110.188H137.062Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M147.812 131.688V147.812H150.5V150.5H110.188C108.703 150.5 107.5 149.297 107.5 147.812V131.688C107.5 130.203 108.703 129 110.188 129H150.5V131.688H147.812Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M102.125 43H91.375C88.4053 43 86 45.4053 86 48.375V64.5H102.125V43Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M102.125 64.5H86V80.625C86 83.5947 88.4053 86 91.375 86H102.125V64.5Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M118.25 64.5V43H102.125C99.1553 43 96.75 45.4053 96.75 48.375V64.5H118.25Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M118.25 64.5H139.75V48.375C139.75 45.4053 137.345 43 134.375 43H118.25V64.5Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M118.25 64.5V86H102.125C99.1553 86 96.75 83.5947 96.75 80.625V64.5H118.25Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M118.25 64.5H139.75V80.625C139.75 83.5947 137.345 86 134.375 86H118.25V64.5Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M147.812 88.6875H120.938V104.812H147.812V88.6875Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M137.062 110.188H99.4375V126.312H137.062V110.188Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M147.812 131.688H110.188V147.812H147.812V131.688Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M59.125 37.625V102.125"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.625 80.625H80.625"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M80.625 37.625C80.625 61.3758 70.997 80.625 59.125 80.625C47.253 80.625 37.625 61.3758 37.625 37.625"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M56.4375 40.3125L59.125 37.625L61.8125 40.3125"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M77.9375 77.9375L80.625 80.625L77.9375 83.3125"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M59.125 83.3125C60.6093 83.3125 61.8125 82.1093 61.8125 80.625C61.8125 79.1407 60.6093 77.9375 59.125 77.9375C57.6407 77.9375 56.4375 79.1407 56.4375 80.625C56.4375 82.1093 57.6407 83.3125 59.125 83.3125Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M48.375 92.7188C49.1171 92.7188 49.7188 92.1171 49.7188 91.375C49.7188 90.6329 49.1171 90.0312 48.375 90.0312C47.6329 90.0312 47.0312 90.6329 47.0312 91.375C47.0312 92.1171 47.6329 92.7188 48.375 92.7188Z"
            fill="#D9E6F7"
          />
          <path
            d="M41.1994 92.8733L40.682 94.7344H38.9822L41.1994 87.4849H43.3494L45.6001 94.7344H43.8331L43.2755 92.8733H41.1994ZM43.0403 91.6505L42.5901 90.1119C42.4625 89.6819 42.3348 89.1444 42.2273 88.7144H42.2072C42.0997 89.1444 41.9922 89.6953 41.8712 90.1119L41.4412 91.6505H43.0403Z"
            fill="#D9E6F7"
          />
          <path
            d="M59.125 28.2188C59.8671 28.2188 60.4688 27.6171 60.4688 26.875C60.4688 26.1329 59.8671 25.5312 59.125 25.5312C58.3829 25.5312 57.7812 26.1329 57.7812 26.875C57.7812 27.6171 58.3829 28.2188 59.125 28.2188Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M75.25 114.219C77.4739 114.219 79.2812 116.026 79.2812 118.25C79.2812 120.474 77.4739 122.281 75.25 122.281C73.0261 122.281 71.2188 120.474 71.2188 118.25C71.2188 116.026 73.0261 114.219 75.25 114.219ZM75.25 112.875C72.2803 112.875 69.875 115.28 69.875 118.25C69.875 121.22 72.2803 123.625 75.25 123.625C78.2197 123.625 80.625 121.22 80.625 118.25C80.625 115.28 78.2197 112.875 75.25 112.875Z"
            fill="#D9E6F7"
          />
          <path
            d="M86 116.906C86.7391 116.906 87.3438 117.511 87.3438 118.25C87.3438 118.989 86.7391 119.594 86 119.594C85.2609 119.594 84.6562 118.989 84.6562 118.25C84.6562 117.511 85.2609 116.906 86 116.906ZM86 115.562C84.5152 115.562 83.3125 116.765 83.3125 118.25C83.3125 119.735 84.5152 120.938 86 120.938C87.4848 120.938 88.6875 119.735 88.6875 118.25C88.6875 116.765 87.4848 115.562 86 115.562Z"
            fill="#D9E6F7"
          />
          <path
            d="M64.5 116.906C65.2391 116.906 65.8438 117.511 65.8438 118.25C65.8438 118.989 65.2391 119.594 64.5 119.594C63.7609 119.594 63.1562 118.989 63.1562 118.25C63.1562 117.511 63.7609 116.906 64.5 116.906ZM64.5 115.562C63.0152 115.562 61.8125 116.765 61.8125 118.25C61.8125 119.735 63.0152 120.938 64.5 120.938C65.9848 120.938 67.1875 119.735 67.1875 118.25C67.1875 116.765 65.9848 115.562 64.5 115.562Z"
            fill="#D9E6F7"
          />
          <path
            d="M96.75 96.75L91.375 102.125H80.625V91.375H96.75V96.75Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M91.375 102.125V96.75H96.75"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M107.5 48.375V59.125"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M102.125 53.75H112.875"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M129 75.25L130.901 77.1514"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M125.197 79.0528L132.803 71.4472"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M103.697 71.4472L111.303 79.0528"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M103.697 79.0528L111.303 71.4472"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M123.625 53.75H134.375"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M120.938 91.375H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M120.938 94.0625H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M120.938 96.75H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M120.938 99.4375H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M120.938 102.125H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M110.745 134.153H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M110.745 137.062H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M110.745 139.75H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M110.745 142.438H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M110.745 145.125H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M99.9951 123.625H137.062"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M99.9951 120.938H137.062"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M99.9951 118.25H137.062"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M99.9951 115.562H137.062"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M99.9951 112.875H137.062"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M131.688 96.75H126.312V115.562H131.688V96.75Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M102.125 147.812V131.688C102.125 130.203 103.328 129 104.812 129H99.4375C97.9527 129 96.75 130.203 96.75 131.688V147.812C96.75 149.297 97.9527 150.5 99.4375 150.5H104.812C103.328 150.5 102.125 149.297 102.125 147.812Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      name: "Английский язык",
      link: "eng",
      img: (
        <svg
          width="97"
          height="166"
          viewBox="0 0 97 166"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8241 37.9624C11.7404 37.9624 11.6846 37.9624 11.6008 37.9343C11.3216 37.8217 11.1262 37.5403 11.1262 37.2307L11.2379 34.4166L8.97666 32.7844C8.72541 32.6156 8.61375 32.2779 8.72541 31.9965C8.83708 31.7151 9.11624 31.5181 9.42333 31.5181L12.215 31.6307L13.8341 29.3512C14.0016 29.098 14.3366 28.9854 14.6158 29.098C14.8949 29.2105 15.0904 29.4919 15.0904 29.8015L14.9787 32.6156L17.2399 34.2478C17.4912 34.4166 17.6028 34.7543 17.4912 35.0357C17.3795 35.3171 17.1003 35.5423 16.7933 35.5141L14.0016 35.4016L12.3825 37.681C12.2429 37.8498 12.0196 37.9624 11.8241 37.9624ZM11.6846 33.0377L12.3546 33.5161C12.55 33.6568 12.6616 33.8819 12.6616 34.1071L12.6337 34.9232L13.1083 34.2478C13.2479 34.0508 13.4712 33.9382 13.6945 33.9664L14.5041 33.9945L13.8341 33.5161C13.6387 33.3754 13.527 33.1503 13.527 32.9251L13.555 32.1091L13.0804 32.7844C12.9408 32.9814 12.7175 33.094 12.4941 33.0659L11.6846 33.0377Z"
            fill="#D9E6F7"
          />
          <path
            d="M4.56575 55.9727C4.482 55.9727 4.42617 55.9727 4.34242 55.9446C4.06325 55.832 3.86784 55.5506 3.86784 55.241L4.06325 50.5978L0.294533 47.8962C0.043285 47.7274 -0.0683808 47.3897 0.043285 47.1083C0.154951 46.8268 0.434115 46.6299 0.741196 46.6299L5.34741 46.8268L8.02739 43.0278C8.19489 42.7745 8.52989 42.662 8.80905 42.7745C9.08821 42.8871 9.28363 43.1685 9.28363 43.478L9.08821 48.1213L12.8569 50.8229C13.1082 50.9917 13.2198 51.3294 13.1082 51.6108C12.9965 51.8922 12.7174 52.0892 12.4103 52.0892L7.80406 51.8922L5.12408 55.6913C4.9845 55.8601 4.78908 55.9727 4.56575 55.9727ZM3.00243 48.1213L5.152 49.6691C5.34741 49.8098 5.45908 50.0349 5.45908 50.2601L5.34741 52.9335L6.88282 50.7666C7.0224 50.5696 7.24573 50.4571 7.46906 50.4852L10.1211 50.5978L7.97156 49.05C7.77614 48.9093 7.66448 48.6842 7.69239 48.459L7.80406 45.7856L6.26865 47.9525C6.12907 48.1495 5.90574 48.262 5.68241 48.2339L3.00243 48.1213Z"
            fill="#D9E6F7"
          />
          <path
            d="M20.1151 23.0757C19.9196 23.0757 19.6963 23.0476 19.5009 22.9632C18.4959 22.6255 17.9655 21.528 18.3005 20.5149C18.6355 19.5018 19.7242 18.9671 20.7292 19.3048C21.2038 19.5018 21.5946 19.8395 21.818 20.2898C22.0413 20.7682 22.0692 21.2747 21.9017 21.7813C21.7621 22.2597 21.3992 22.6536 20.9526 22.8788C20.6734 23.0195 20.3942 23.0757 20.1151 23.0757ZM20.1151 20.6275C20.0313 20.6275 19.9476 20.6556 19.8917 20.6838C19.7521 20.74 19.6684 20.8526 19.6126 20.9652C19.5846 21.1059 19.5846 21.2466 19.6405 21.3873C19.6963 21.4998 19.808 21.5843 19.9476 21.6406C20.0592 21.6687 20.1988 21.6687 20.3384 21.6124C20.4501 21.5561 20.5617 21.4436 20.5896 21.3029C20.6455 21.1622 20.6176 21.0214 20.5617 20.9089C20.5059 20.7963 20.3942 20.7119 20.2826 20.6556C20.2267 20.6275 20.1709 20.6275 20.1151 20.6275Z"
            fill="#D9E6F7"
          />
          <path
            d="M27.0663 15.7872C26.8709 15.7872 26.6475 15.7591 26.4521 15.6746C25.9496 15.5058 25.5588 15.1681 25.3355 14.7178C25.1121 14.2394 25.0842 13.7329 25.2517 13.2264C25.5867 12.2133 26.6755 11.6786 27.6805 12.0163C28.6854 12.354 29.2159 13.4515 28.8809 14.4646C28.6017 15.2807 27.848 15.7872 27.0663 15.7872ZM27.0663 13.3389C26.843 13.3389 26.6475 13.4796 26.5917 13.6766C26.5359 13.8173 26.5638 13.958 26.6196 14.0706C26.6475 14.2113 26.7592 14.2957 26.8988 14.352C27.0384 14.4083 27.178 14.3801 27.2896 14.3239C27.4013 14.2676 27.513 14.155 27.5409 14.0143C27.5967 13.8736 27.5688 13.7329 27.513 13.6203C27.4571 13.5078 27.3455 13.4233 27.2338 13.3671C27.178 13.3389 27.1221 13.3389 27.0663 13.3389Z"
            fill="#D9E6F7"
          />
          <path
            d="M35.916 10.5811C35.7764 10.5811 35.6368 10.5529 35.4973 10.4967C35.1623 10.4122 34.911 10.159 34.7435 9.84942C34.576 9.53986 34.576 9.17403 34.6877 8.83634C34.911 8.13281 35.6648 7.76697 36.3627 8.02024C37.0606 8.24537 37.4235 9.00518 37.1722 9.70871C36.9768 10.2434 36.4743 10.5811 35.916 10.5811ZM35.916 9.17403C35.8881 9.17403 35.8602 9.20217 35.8323 9.23031C35.8043 9.28659 35.8323 9.31473 35.8881 9.34288C35.9439 9.37102 35.9718 9.34288 35.9998 9.28659C35.9998 9.28659 35.9998 9.25845 35.9998 9.23031C35.9998 9.20217 35.9718 9.17403 35.916 9.17403C35.9439 9.17403 35.9439 9.17403 35.916 9.17403Z"
            fill="#D9E6F7"
          />
          <path
            d="M34.7994 29.6889C34.6877 29.6889 34.604 29.6889 34.4923 29.6608C33.7944 29.4919 33.3477 28.7884 33.5152 28.0567C33.6827 27.3532 34.3806 26.9029 35.1065 27.0718C35.8044 27.2406 36.251 27.9442 36.0835 28.6758C35.944 29.2949 35.4135 29.6889 34.7994 29.6889ZM34.7994 28.2819C34.7715 28.2819 34.7435 28.31 34.7156 28.3381C34.7156 28.3944 34.7435 28.4226 34.7715 28.4226C34.8273 28.4226 34.8552 28.3944 34.8552 28.3663C34.911 28.3381 34.8831 28.31 34.7994 28.2819C34.8273 28.2819 34.8273 28.2819 34.7994 28.2819Z"
            fill="#D9E6F7"
          />
          <path
            d="M29.8023 37.6528C29.6906 37.6528 29.6069 37.6528 29.4952 37.6247C28.7973 37.4559 28.3507 36.7523 28.5182 36.0207C28.6857 35.3171 29.3836 34.8669 30.1094 35.0357C30.8073 35.2046 31.254 35.9081 31.0865 36.6398C30.9469 37.2307 30.3886 37.6528 29.8023 37.6528ZM29.8023 36.2458C29.7744 36.2458 29.7465 36.2739 29.7186 36.3021C29.7186 36.3584 29.7465 36.3865 29.7744 36.3865C29.8302 36.3865 29.8581 36.3584 29.8581 36.3302C29.8861 36.3021 29.8581 36.2458 29.8023 36.2458Z"
            fill="#D9E6F7"
          />
          <path
            d="M93.8142 44.1253C93.5908 44.1253 93.3675 44.0127 93.2279 43.8157L91.6367 41.5081L88.845 41.5926C88.5379 41.5926 88.2588 41.3956 88.175 41.1142C88.0913 40.8046 88.175 40.4951 88.4542 40.3262L90.7433 38.7222L90.6596 35.9081C90.6596 35.5985 90.855 35.3171 91.1342 35.2327C91.4413 35.1483 91.7483 35.2327 91.9158 35.5141L93.5071 37.8217L96.2987 37.7372C96.6058 37.7372 96.885 37.9342 96.9687 38.2156C97.0525 38.5252 96.9687 38.8347 96.6895 39.0036L94.4004 40.6076L94.4841 43.4217C94.4841 43.7313 94.2887 44.0127 94.0096 44.0971C93.9817 44.1253 93.8979 44.1253 93.8142 44.1253ZM92.0275 40.1011C92.2508 40.1011 92.4742 40.2137 92.6137 40.4106L93.0883 41.086L93.0604 40.2699C93.0604 40.0448 93.1721 39.8197 93.3675 39.679L94.0375 39.2006L93.2279 39.2287C93.0046 39.2287 92.7812 39.1161 92.6417 38.9192L92.1671 38.2438L92.195 39.0599C92.195 39.285 92.0833 39.5101 91.8879 39.6508L91.2179 40.1292L92.0275 40.1011Z"
            fill="#D9E6F7"
          />
          <path
            d="M85.7743 29.126C84.9647 29.126 84.2109 28.6195 83.9597 27.8034C83.7922 27.325 83.848 26.7903 84.0714 26.3401C84.2947 25.8898 84.6855 25.5521 85.188 25.3833C86.193 25.0456 87.2817 25.6084 87.5888 26.6215C87.9238 27.6346 87.3655 28.7321 86.3605 29.0416C86.1651 29.0698 85.9697 29.126 85.7743 29.126ZM85.7743 26.6778C85.7184 26.6778 85.6626 26.6778 85.6068 26.7059C85.4672 26.7622 85.3834 26.8466 85.2997 26.9592C85.2439 27.0717 85.2159 27.2124 85.2718 27.3532C85.3555 27.6346 85.6626 27.7753 85.9138 27.6908C86.193 27.6064 86.3326 27.2969 86.2488 27.0436C86.193 26.8185 85.9697 26.6778 85.7743 26.6778Z"
            fill="#D9E6F7"
          />
          <path
            d="M78.9066 21.725C78.5995 21.725 78.3203 21.6405 78.0412 21.528C77.5945 21.3028 77.2595 20.9089 77.092 20.4023C76.757 19.3892 77.3153 18.2917 78.3203 17.9822C78.7949 17.8133 79.3253 17.8696 79.772 18.0948C80.2187 18.3199 80.5537 18.7139 80.7212 19.2204C81.0562 20.2335 80.4978 21.331 79.4928 21.6405C79.3253 21.6968 79.102 21.725 78.9066 21.725ZM78.9066 19.2767C78.8508 19.2767 78.7949 19.2767 78.7391 19.3048C78.5995 19.3611 78.5158 19.4455 78.432 19.5581C78.4041 19.6988 78.3762 19.8395 78.432 19.9521C78.4878 20.0928 78.5716 20.1772 78.6833 20.2616C78.7949 20.3179 78.9345 20.346 79.0741 20.2898C79.3532 20.2053 79.4928 19.8958 79.4091 19.6425C79.3533 19.5018 79.2695 19.4174 79.1578 19.333C79.0741 19.3048 78.9903 19.2767 78.9066 19.2767Z"
            fill="#D9E6F7"
          />
          <path
            d="M70.1133 16.4063C69.555 16.4063 69.0525 16.0404 68.857 15.4776C68.7454 15.1399 68.7733 14.7741 68.9408 14.4645C69.1083 14.155 69.3595 13.9017 69.6945 13.8173C70.3924 13.5922 71.1183 13.9861 71.3416 14.6615C71.5649 15.3651 71.1741 16.0967 70.5041 16.3218C70.3924 16.3781 70.2529 16.4063 70.1133 16.4063ZM70.197 15.0555L70.0574 15.1118C70.0574 15.1681 70.1133 15.1681 70.1691 15.1681C70.1691 15.1681 70.197 15.1681 70.2249 15.1399C70.197 15.0836 70.197 15.0555 70.197 15.0555ZM70.1133 14.9992C70.1133 14.9992 70.0854 14.9992 70.1133 14.9992C70.0574 15.0274 70.0295 15.0555 70.0295 15.1118L70.1691 15.0555C70.1691 14.9992 70.1412 14.9992 70.1133 14.9992Z"
            fill="#D9E6F7"
          />
          <path
            d="M74.6354 42.4368C74.4958 42.4368 74.3562 42.4087 74.2167 42.3805C73.1838 42.1554 72.5417 41.1142 72.765 40.1011C72.9883 39.0599 74.0212 38.4126 75.0262 38.6378C76.0591 38.8629 76.7012 39.9041 76.4779 40.9172C76.2825 41.8177 75.5008 42.4368 74.6354 42.4368ZM74.6354 39.9885C74.4121 39.9885 74.1887 40.1574 74.1329 40.4106C74.0771 40.6921 74.2446 40.9735 74.5237 41.0298C74.8029 41.086 75.0821 40.9172 75.1379 40.6358C75.1937 40.3544 75.0262 40.073 74.7471 40.0167C74.6912 39.9885 74.6633 39.9885 74.6354 39.9885Z"
            fill="#D9E6F7"
          />
          <path
            d="M69.3873 33.2909C69.3035 33.2909 69.1918 33.2909 69.1081 33.2628C68.4102 33.094 67.9356 32.3904 68.1031 31.6869C68.2706 30.9834 68.9685 30.505 69.6664 30.6738C70.3643 30.8427 70.8389 31.5462 70.6714 32.2497C70.5877 32.5874 70.3923 32.897 70.0852 33.094C69.8898 33.2065 69.6385 33.2909 69.3873 33.2909ZM69.3035 31.9402C69.3035 31.9965 69.3314 32.0246 69.3593 32.0246C69.3873 32.0246 69.4431 31.9965 69.4431 31.9683C69.4431 31.912 69.4152 31.8839 69.3873 31.8839C69.3873 31.8839 69.3593 31.8839 69.3314 31.8839C69.3035 31.912 69.3035 31.9402 69.3035 31.9402Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2473 67.3136C57.4118 67.3136 61.6272 63.0642 61.6272 57.8581C61.6272 52.652 57.4118 48.4027 52.2473 48.4027C47.0827 48.4027 42.8673 52.652 42.8673 57.8581C42.8394 63.0642 47.0548 67.3136 52.2473 67.3136ZM52.2473 49.7816C56.658 49.7816 60.2314 53.3837 60.2314 57.83C60.2314 62.2763 56.658 65.8784 52.2473 65.8784C47.8365 65.8784 44.2631 62.2763 44.2631 57.83C44.2352 53.4118 47.8365 49.7816 52.2473 49.7816Z"
            fill="#D9E6F7"
          />
          <path
            d="M49.4552 32.4467C49.8461 32.4467 50.1531 32.1372 50.1531 31.7432V29.3793C50.1531 28.9854 49.8461 28.6758 49.4552 28.6758C49.0644 28.6758 48.7573 28.9854 48.7573 29.3793V31.7432C48.7573 32.1372 49.0644 32.4467 49.4552 32.4467Z"
            fill="#D9E6F7"
          />
          <path
            d="M55.0387 32.4467C55.4296 32.4467 55.7366 32.1372 55.7366 31.7432V29.3793C55.7366 28.9854 55.4296 28.6758 55.0387 28.6758C54.6479 28.6758 54.3408 28.9854 54.3408 29.3793V31.7432C54.3408 32.1372 54.6479 32.4467 55.0387 32.4467Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2472 89.9953C52.6381 89.9953 52.9451 89.6857 52.9451 89.2918V78.2604C52.9451 77.8665 52.6381 77.5569 52.2472 77.5569C51.8564 77.5569 51.5493 77.8665 51.5493 78.2604V89.2918C51.5493 89.6857 51.8564 89.9953 52.2472 89.9953Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2472 107.949C52.6381 107.949 52.9451 107.64 52.9451 107.246V96.2145C52.9451 95.8205 52.6381 95.5109 52.2472 95.5109C51.8564 95.5109 51.5493 95.8205 51.5493 96.2145V107.246C51.5493 107.64 51.8564 107.949 52.2472 107.949Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2472 125.903C52.6381 125.903 52.9451 125.594 52.9451 125.2V114.169C52.9451 113.775 52.6381 113.465 52.2472 113.465C51.8564 113.465 51.5493 113.775 51.5493 114.169V125.2C51.5493 125.594 51.8564 125.903 52.2472 125.903Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2472 143.857C52.6381 143.857 52.9451 143.548 52.9451 143.154V132.123C52.9451 131.729 52.6381 131.419 52.2472 131.419C51.8564 131.419 51.5493 131.729 51.5493 132.123V143.154C51.5493 143.52 51.8564 143.857 52.2472 143.857Z"
            fill="#D9E6F7"
          />
          <path
            d="M49.1203 89.9953C49.5111 89.9953 49.8182 89.6857 49.8182 89.2918V78.2604C49.8182 77.8665 49.5111 77.5569 49.1203 77.5569C48.7294 77.5569 48.4224 77.8665 48.4224 78.2604V89.2918C48.4224 89.6857 48.7294 89.9953 49.1203 89.9953Z"
            fill="#D9E6F7"
          />
          <path
            d="M49.1203 107.949C49.5111 107.949 49.8182 107.64 49.8182 107.246V96.2145C49.8182 95.8205 49.5111 95.5109 49.1203 95.5109C48.7294 95.5109 48.4224 95.8205 48.4224 96.2145V107.246C48.4224 107.64 48.7294 107.949 49.1203 107.949Z"
            fill="#D9E6F7"
          />
          <path
            d="M49.1203 125.903C49.5111 125.903 49.8182 125.594 49.8182 125.2V114.169C49.8182 113.775 49.5111 113.465 49.1203 113.465C48.7294 113.465 48.4224 113.775 48.4224 114.169V125.2C48.4224 125.594 48.7294 125.903 49.1203 125.903Z"
            fill="#D9E6F7"
          />
          <path
            d="M49.1203 143.857C49.5111 143.857 49.8182 143.548 49.8182 143.154V132.123C49.8182 131.729 49.5111 131.419 49.1203 131.419C48.7294 131.419 48.4224 131.729 48.4224 132.123V143.154C48.4224 143.52 48.7294 143.857 49.1203 143.857Z"
            fill="#D9E6F7"
          />
          <path
            d="M46.0216 89.9953C46.4125 89.9953 46.7196 89.6857 46.7196 89.2918V78.2604C46.7196 77.8665 46.4125 77.5569 46.0216 77.5569C45.6308 77.5569 45.3237 77.8665 45.3237 78.2604V89.2918C45.3237 89.6857 45.6308 89.9953 46.0216 89.9953Z"
            fill="#D9E6F7"
          />
          <path
            d="M46.0216 107.949C46.4125 107.949 46.7196 107.64 46.7196 107.246V96.2145C46.7196 95.8205 46.4125 95.5109 46.0216 95.5109C45.6308 95.5109 45.3237 95.8205 45.3237 96.2145V107.246C45.3237 107.64 45.6308 107.949 46.0216 107.949Z"
            fill="#D9E6F7"
          />
          <path
            d="M46.0216 125.903C46.4125 125.903 46.7196 125.594 46.7196 125.2V114.169C46.7196 113.775 46.4125 113.465 46.0216 113.465C45.6308 113.465 45.3237 113.775 45.3237 114.169V125.2C45.3237 125.594 45.6308 125.903 46.0216 125.903Z"
            fill="#D9E6F7"
          />
          <path
            d="M46.0216 143.857C46.4125 143.857 46.7196 143.548 46.7196 143.154V132.123C46.7196 131.729 46.4125 131.419 46.0216 131.419C45.6308 131.419 45.3237 131.729 45.3237 132.123V143.154C45.3237 143.52 45.6308 143.857 46.0216 143.857Z"
            fill="#D9E6F7"
          />
          <path
            d="M55.3459 89.9953C55.7367 89.9953 56.0438 89.6857 56.0438 89.2918V78.2604C56.0438 77.8665 55.7367 77.5569 55.3459 77.5569C54.955 77.5569 54.6479 77.8665 54.6479 78.2604V89.2918C54.6479 89.6857 54.9829 89.9953 55.3459 89.9953Z"
            fill="#D9E6F7"
          />
          <path
            d="M55.3459 107.949C55.7367 107.949 56.0438 107.64 56.0438 107.246V96.2145C56.0438 95.8205 55.7367 95.5109 55.3459 95.5109C54.955 95.5109 54.6479 95.8205 54.6479 96.2145V107.246C54.6479 107.64 54.9829 107.949 55.3459 107.949Z"
            fill="#D9E6F7"
          />
          <path
            d="M55.3459 125.903C55.7367 125.903 56.0438 125.594 56.0438 125.2V114.169C56.0438 113.775 55.7367 113.465 55.3459 113.465C54.955 113.465 54.6479 113.775 54.6479 114.169V125.2C54.6479 125.594 54.9829 125.903 55.3459 125.903Z"
            fill="#D9E6F7"
          />
          <path
            d="M55.3459 143.857C55.7367 143.857 56.0438 143.548 56.0438 143.154V132.123C56.0438 131.729 55.7367 131.419 55.3459 131.419C54.955 131.419 54.6479 131.729 54.6479 132.123V143.154C54.6479 143.52 54.9829 143.857 55.3459 143.857Z"
            fill="#D9E6F7"
          />
          <path
            d="M58.4723 89.9953C58.8632 89.9953 59.1702 89.6857 59.1702 89.2918V78.2604C59.1702 77.8665 58.8632 77.5569 58.4723 77.5569C58.0815 77.5569 57.7744 77.8665 57.7744 78.2604V89.2918C57.7744 89.6857 58.0815 89.9953 58.4723 89.9953Z"
            fill="#D9E6F7"
          />
          <path
            d="M58.4723 107.949C58.8632 107.949 59.1702 107.64 59.1702 107.246V96.2145C59.1702 95.8205 58.8632 95.5109 58.4723 95.5109C58.0815 95.5109 57.7744 95.8205 57.7744 96.2145V107.246C57.7744 107.64 58.0815 107.949 58.4723 107.949Z"
            fill="#D9E6F7"
          />
          <path
            d="M58.4723 125.903C58.8632 125.903 59.1702 125.594 59.1702 125.2V114.169C59.1702 113.775 58.8632 113.465 58.4723 113.465C58.0815 113.465 57.7744 113.775 57.7744 114.169V125.2C57.7744 125.594 58.0815 125.903 58.4723 125.903Z"
            fill="#D9E6F7"
          />
          <path
            d="M58.4723 143.857C58.8632 143.857 59.1702 143.548 59.1702 143.154V132.123C59.1702 131.729 58.8632 131.419 58.4723 131.419C58.0815 131.419 57.7744 131.729 57.7744 132.123V143.154C57.7744 143.52 58.0815 143.857 58.4723 143.857Z"
            fill="#D9E6F7"
          />
          <path
            d="M64.5862 37.9905C64.1954 37.9905 63.8883 38.3001 63.8883 38.694V41.2549C62.325 40.4388 59.2821 38.4408 59.1983 34.9794L59.645 33.9945C59.6729 33.91 59.7008 33.7975 59.7008 33.7131V27.4657V22.1752C59.7008 21.7812 59.3937 21.4717 59.0029 21.4717C58.6121 21.4717 58.305 21.7812 58.305 22.1752V25.4959C56.4067 22.9069 52.945 17.1942 52.945 9.73683C52.945 9.70868 52.945 9.6524 52.945 9.62426C52.945 9.59612 52.945 9.56798 52.945 9.5117V6.81015C53.3638 7.1197 53.4475 7.65438 53.4475 7.87951C53.4475 8.27349 53.7546 8.5549 54.1454 8.5549C54.5363 8.5549 54.8434 8.21721 54.8434 7.85137C54.8154 6.92271 54.285 5.62822 52.945 5.29053V0.703528C52.945 0.309552 52.638 0 52.2471 0C51.8563 0 51.5492 0.309552 51.5492 0.703528V5.29053C50.1813 5.62822 49.6788 6.92271 49.6509 7.85137C49.6509 8.24535 49.958 8.5549 50.3488 8.5549C50.7396 8.5549 51.0467 8.24535 51.0467 7.85137C51.0467 7.71067 51.1026 7.1197 51.5492 6.81015V9.5117C51.5492 9.53984 51.5492 9.59612 51.5492 9.62426C51.5492 9.6524 51.5492 9.70868 51.5492 9.73683C51.5492 17.2505 47.9201 22.9913 45.9659 25.5521V22.1752C45.9659 21.7812 45.6588 21.4717 45.268 21.4717C44.8772 21.4717 44.5701 21.7812 44.5701 22.1752V27.4939V33.7131C44.5701 33.8256 44.598 33.91 44.6259 33.9945L45.0726 34.9794C44.9889 38.4408 41.9739 40.4388 40.3826 41.2549V38.694C40.3826 38.3001 40.0756 37.9905 39.6847 37.9905C39.2939 37.9905 38.9868 38.3001 38.9868 38.694V45.3635V45.5042V70.6905C38.9868 71.0845 39.2939 71.394 39.6847 71.394H41.611V149.88H40.3826C39.9918 149.88 39.6847 150.189 39.6847 150.583V164.907C39.6847 165.301 39.9918 165.61 40.3826 165.61H52.1355H63.8883C64.2791 165.61 64.5862 165.301 64.5862 164.907V150.555C64.5862 150.161 64.2791 149.851 63.8883 149.851H62.66V71.3659H64.5862C64.977 71.3659 65.2841 71.0563 65.2841 70.6623V45.476V45.3353V38.6659C65.2841 38.3001 64.9491 37.9905 64.5862 37.9905ZM52.2192 15.7027C53.7546 22.3159 57.3838 26.7341 58.305 27.7471V33.5442L58.0537 34.1352H52.1355H46.2172L45.9659 33.5442V27.7471C46.8872 26.7341 50.6559 22.3159 52.2192 15.7027ZM46.4405 35.5141H52.1355H57.8304C58.2492 39.9885 62.4366 42.1835 63.8883 42.8026V44.66H40.4106V42.8026C41.8064 42.1835 46.0218 39.9885 46.4405 35.5141ZM63.1904 164.175H52.1355H41.0805V151.258H42.3089H52.1355H61.9621H63.1904V164.175ZM61.2641 149.851H52.1355H43.0068V71.3659H61.2362V149.851H61.2641ZM63.8883 69.9588H40.4106V46.067H63.8883V69.9588Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2472 32.4467C52.6381 32.4467 52.9451 32.1372 52.9451 31.7432V29.3793C52.9451 28.9854 52.6381 28.6758 52.2472 28.6758C51.8564 28.6758 51.5493 28.9854 51.5493 29.3793V31.7432C51.5493 32.1372 51.8564 32.4467 52.2472 32.4467Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2472 43.3373C52.6381 43.3373 52.9451 43.0277 52.9451 42.6338V41.5081C52.9451 41.1142 52.6381 40.8046 52.2472 40.8046C51.8564 40.8046 51.5493 41.1142 51.5493 41.5081V42.6338C51.5493 43.0277 51.8564 43.3373 52.2472 43.3373Z"
            fill="#D9E6F7"
          />
          <path
            d="M49.4552 43.3373C49.8461 43.3373 50.1531 43.0277 50.1531 42.6338V41.5081C50.1531 41.1142 49.8461 40.8046 49.4552 40.8046C49.0644 40.8046 48.7573 41.1142 48.7573 41.5081V42.6338C48.7573 43.0277 49.0923 43.3373 49.4552 43.3373Z"
            fill="#D9E6F7"
          />
          <path
            d="M46.6916 43.3373C47.0824 43.3373 47.3895 43.0277 47.3895 42.6338V41.5081C47.3895 41.1142 47.0824 40.8046 46.6916 40.8046C46.3007 40.8046 45.9937 41.1142 45.9937 41.5081V42.6338C45.9937 43.0277 46.3007 43.3373 46.6916 43.3373Z"
            fill="#D9E6F7"
          />
          <path
            d="M55.0109 43.3373C55.4017 43.3373 55.7088 43.0277 55.7088 42.6338V41.5081C55.7088 41.1142 55.4017 40.8046 55.0109 40.8046C54.6201 40.8046 54.313 41.1142 54.313 41.5081V42.6338C54.313 43.0277 54.6201 43.3373 55.0109 43.3373Z"
            fill="#D9E6F7"
          />
          <path
            d="M57.8024 43.3373C58.1932 43.3373 58.5003 43.0277 58.5003 42.6338V41.5081C58.5003 41.1142 58.1932 40.8046 57.8024 40.8046C57.4116 40.8046 57.1045 41.1142 57.1045 41.5081V42.6338C57.1045 43.0277 57.4116 43.3373 57.8024 43.3373Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.1354 58.7305H57.0487C57.4395 58.7305 57.7466 58.421 57.7466 58.027C57.7466 57.633 57.4395 57.3235 57.0487 57.3235H52.8333V51.7797C52.8333 51.3857 52.5262 51.0761 52.1354 51.0761C51.7446 51.0761 51.4375 51.3857 51.4375 51.7797V57.9989C51.4375 58.3928 51.7446 58.7305 52.1354 58.7305Z"
            fill="#D9E6F7"
          />
        </svg>
      )
    },
    {
      name: "Қазақ тілі",
      link: "kaz",
      img: (
        <svg
          width="185"
          height="190"
          viewBox="0 0 185 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7895 73.6394C16.7895 67.4401 21.7779 62.413 27.9341 62.413C34.0903 62.413 39.0787 67.4401 39.0787 73.6394H16.7895ZM56.025 73.6394H52.7752H56.025ZM27.4043 76.3781H11.1743H27.4043ZM16.7895 73.6394H0.55957H16.7895ZM52.7752 73.6394C52.7752 69.829 49.7083 66.7443 45.9288 66.7443C42.1493 66.7443 39.0824 69.829 39.0824 73.6394"
            fill="white"
          />
          <path
            d="M52.7752 73.6394C52.7752 69.829 49.7083 66.7443 45.9288 66.7443C42.1493 66.7443 39.0824 69.829 39.0824 73.6394M16.7895 73.6394C16.7895 67.4401 21.7779 62.413 27.9341 62.413C34.0903 62.413 39.0787 67.4401 39.0787 73.6394H16.7895ZM56.025 73.6394H52.7752H56.025ZM27.4043 76.3781H11.1743H27.4043ZM16.7895 73.6394H0.55957H16.7895Z"
            stroke="#D9E6F7"
            strokeWidth="3"
            strokeMiterlimit="2.6131"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M151.763 100.583C151.763 96.1145 155.36 92.4902 159.8 92.4902C164.236 92.4902 167.833 96.1145 167.833 100.583H151.763ZM141.894 100.583H132.089H141.894ZM175.612 102.556H160.18H175.612ZM172.071 100.583H167.833H172.071ZM151.763 100.583C151.763 97.8373 149.554 95.6121 146.827 95.6121C144.103 95.6121 141.891 97.8373 141.891 100.583"
            fill="white"
          />
          <path
            d="M151.763 100.583C151.763 97.8373 149.554 95.6121 146.827 95.6121C144.103 95.6121 141.891 97.8373 141.891 100.583M151.763 100.583C151.763 96.1145 155.36 92.4902 159.8 92.4902C164.236 92.4902 167.833 96.1145 167.833 100.583H151.763ZM141.894 100.583H132.089H141.894ZM175.612 102.556H160.18H175.612ZM172.071 100.583H167.833H172.071Z"
            stroke="#D9E6F7"
            strokeWidth="3"
            strokeMiterlimit="2.6131"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M152.349 28.8934C152.174 28.8934 152.006 28.8115 151.901 28.6701C150.748 27.1259 148.196 26.7278 146.092 27.7622C145.816 27.8999 145.48 27.7845 145.342 27.5092C145.204 27.2338 145.32 26.8989 145.596 26.7612C147.842 25.6561 150.536 25.9314 152.159 27.3231C153.17 25.3249 155.207 24.4505 158.371 24.6477C158.68 24.6663 158.912 24.9342 158.893 25.2393C158.874 25.5482 158.621 25.7789 158.3 25.7603C154.326 25.5073 153.3 27.2078 152.882 28.5064C152.819 28.7036 152.647 28.8525 152.442 28.886C152.409 28.8934 152.379 28.8934 152.349 28.8934Z"
            fill="#D9E6F7"
          />
          <path
            d="M172.534 40.7598C172.358 40.7598 172.19 40.6779 172.086 40.5365C171.179 39.3235 169.168 39.0146 167.504 39.8295C167.228 39.9672 166.892 39.8519 166.754 39.5765C166.616 39.3011 166.732 38.9662 167.008 38.8286C168.821 37.9355 170.989 38.1327 172.347 39.2156C173.209 37.6527 174.918 36.9457 177.421 37.102C177.731 37.1206 177.966 37.3885 177.944 37.6937C177.925 38.0025 177.66 38.2332 177.35 38.2146C174.194 38.0137 173.392 39.3495 173.063 40.3691C173 40.5663 172.828 40.7151 172.623 40.7486C172.593 40.7561 172.563 40.7598 172.534 40.7598Z"
            fill="#D9E6F7"
          />
          <path
            d="M129.03 22.5751C128.854 22.5751 128.686 22.4932 128.582 22.3518C127.429 20.8076 124.877 20.4094 122.773 21.4439C122.497 21.5816 122.161 21.4662 122.023 21.1908C121.885 20.9155 122 20.5806 122.276 20.4429C124.523 19.3378 127.216 19.6131 128.839 21.0048C129.85 19.0066 131.884 18.1321 135.051 18.3294C135.361 18.348 135.592 18.6159 135.574 18.921C135.555 19.2299 135.301 19.4606 134.981 19.442C131.007 19.1889 129.981 20.8894 129.563 22.1881C129.5 22.3853 129.328 22.5341 129.123 22.5676C129.089 22.5751 129.059 22.5751 129.03 22.5751Z"
            fill="#D9E6F7"
          />
          <path
            d="M180.622 65.7354C180.492 65.7354 180.369 65.6759 180.29 65.568C179.749 64.8424 178.541 64.66 177.533 65.1512C177.328 65.2517 177.078 65.1661 176.977 64.9614C176.877 64.7568 176.962 64.5075 177.168 64.407C178.309 63.8488 179.63 63.953 180.492 64.6079C181.052 63.6665 182.115 63.2386 183.663 63.3316C183.891 63.3465 184.066 63.54 184.051 63.7707C184.036 63.9977 183.85 64.1726 183.611 64.1577C181.727 64.0423 181.234 64.7865 181.018 65.4489C180.969 65.5977 180.843 65.7056 180.69 65.728C180.664 65.7317 180.641 65.7354 180.622 65.7354Z"
            fill="#D9E6F7"
          />
          <path
            d="M74.3554 189.955C74.3218 189.955 74.2882 189.952 74.2509 189.944C73.9673 189.892 73.7733 189.635 73.7957 189.349L80.9145 103.873L76.6798 84.4043C76.6425 84.2406 76.6835 84.0657 76.7917 83.9355C76.8962 83.8053 77.0566 83.7271 77.2282 83.7271H79.3325C79.6012 83.7271 79.8325 83.9169 79.881 84.1811L83.5747 103.731C83.5822 103.772 83.5859 103.817 83.5822 103.858L81.1757 157.925L79.9743 172.306C79.9705 172.344 79.9631 172.381 79.9519 172.418L74.8852 189.546C74.818 189.795 74.5979 189.955 74.3554 189.955ZM77.9222 84.8471L82.0263 103.72C82.0375 103.776 82.0413 103.828 82.0375 103.884L75.3627 184.005L78.8662 172.161L80.0638 157.858L82.4666 103.877L78.8736 84.8434H77.9222V84.8471Z"
            fill="#D9E6F7"
          />
          <path
            d="M78.0043 189.955C77.9707 189.955 77.9334 189.952 77.8998 189.944C77.6162 189.892 77.4222 189.635 77.4446 189.349L84.5634 103.873L80.3735 84.4043C80.3399 84.2406 80.3809 84.0657 80.4854 83.9355C80.5899 83.8053 80.7503 83.7271 80.9219 83.7271H85.1716C85.291 83.7271 85.4029 83.7643 85.4924 83.8276C85.5857 83.7606 85.6976 83.7271 85.8133 83.7271H88.6041C88.8951 83.7271 89.1376 83.9504 89.1638 84.2406L90.7084 103.791C90.7084 103.813 90.7121 103.836 90.7084 103.858L87.746 170.081C87.746 170.118 87.7385 170.159 87.7273 170.197L82.7016 189.531C82.6307 189.81 82.3547 189.989 82.0674 189.94C81.7801 189.892 81.5786 189.635 81.601 189.349L82.627 175.812L78.5341 189.55C78.4669 189.795 78.2468 189.955 78.0043 189.955ZM81.6159 84.8471L85.679 103.724C85.6902 103.776 85.6939 103.832 85.6902 103.888L79.0117 184.065L83.0524 170.513C83.1344 170.241 83.4105 170.074 83.6904 170.122C83.9702 170.174 84.1679 170.427 84.1455 170.714L83.1979 183.217L86.6379 169.981L89.5966 103.85L88.093 84.8471H86.4625L89.119 103.761C89.1265 103.802 89.1265 103.839 89.1227 103.88L84.4851 165.821C84.4627 166.126 84.194 166.356 83.8918 166.338C83.5859 166.319 83.3508 166.063 83.3658 165.757L86.1118 103.85L84.653 84.8471H81.6159ZM86.317 91.8576L87.2348 103.798C87.2348 103.821 87.2386 103.843 87.2348 103.865L86.1193 129.012L88.0034 103.858L86.317 91.8576Z"
            fill="#D9E6F7"
          />
          <path
            d="M105.957 189.955C105.715 189.955 105.491 189.795 105.42 189.557L100.309 172.429C100.297 172.392 100.29 172.355 100.286 172.318L99.0847 157.958L96.6782 103.869C96.6745 103.824 96.6782 103.784 96.6857 103.743L100.379 84.1922C100.428 83.9281 100.659 83.7383 100.928 83.7383H103.032C103.2 83.7383 103.36 83.8164 103.469 83.9467C103.573 84.0769 103.614 84.2518 103.581 84.4155L99.3496 103.884L106.513 189.356C106.536 189.643 106.342 189.9 106.058 189.952C106.024 189.952 105.991 189.955 105.957 189.955ZM101.398 172.165L104.946 184.057L98.2266 103.888C98.2229 103.832 98.2266 103.776 98.2378 103.724L102.342 84.8509H101.398L97.805 103.884L100.208 157.887L101.398 172.165Z"
            fill="#D9E6F7"
          />
          <path
            d="M102.264 189.955C102.021 189.955 101.797 189.795 101.726 189.557L96.1449 170.829C96.1337 170.788 96.1262 170.751 96.1225 170.71L95.7792 165.821L93.0332 103.865C93.0332 103.843 93.0332 103.821 93.0332 103.798L94.5368 84.248C94.5592 83.9578 94.8017 83.7308 95.0965 83.7308H99.3909C99.5588 83.7308 99.7192 83.8089 99.8274 83.9392C99.9319 84.0694 99.9729 84.2443 99.9393 84.408L95.7046 103.877L102.827 189.353C102.85 189.639 102.656 189.896 102.372 189.948C102.331 189.952 102.297 189.955 102.264 189.955ZM97.2343 170.569L101.256 184.065L94.5741 103.888C94.5704 103.832 94.5741 103.776 94.5853 103.724L98.6894 84.8508H95.6076L94.1488 103.854L96.8948 165.761L97.2343 170.569Z"
            fill="#D9E6F7"
          />
          <path
            d="M98.0963 189.955C97.8463 189.955 97.6187 189.788 97.5553 189.539L92.5333 170.204C92.5221 170.167 92.5184 170.126 92.5147 170.089L89.5933 103.865C89.5933 103.843 89.5933 103.821 89.5933 103.798L91.0969 84.248C91.1193 83.9578 91.3618 83.7308 91.6565 83.7308H94.4473C94.6078 83.7308 94.7645 83.8015 94.8689 83.9243C94.9771 84.0471 95.0219 84.2071 94.9995 84.3671L92.2609 103.858L98.6559 189.356C98.6783 189.643 98.4731 189.9 98.1896 189.948C98.1597 189.952 98.1299 189.955 98.0963 189.955ZM93.6302 169.981L97.0777 183.243L91.1416 103.884C91.1379 103.843 91.1416 103.806 91.1454 103.765L93.8056 84.8508H92.1751L90.7126 103.854L93.6302 169.981Z"
            fill="#D9E6F7"
          />
          <path
            d="M103.081 84.8472H77.1876C76.8779 84.8472 76.6279 84.5978 76.6279 84.289V76.6348C76.6279 76.326 76.8779 76.0767 77.1876 76.0767H103.081C103.391 76.0767 103.641 76.326 103.641 76.6348V84.289C103.641 84.5978 103.387 84.8472 103.081 84.8472ZM77.7472 83.7308H102.521V77.193H77.7472V83.7308Z"
            fill="#D9E6F7"
          />
          <path
            d="M79.1275 77.193C79.1238 77.193 79.1238 77.193 79.1201 77.193H77.1874C76.9747 77.193 76.777 77.0702 76.6837 76.8804L57.704 37.9955C57.5772 37.7351 57.6704 37.4225 57.9167 37.2736C58.1629 37.1248 58.4838 37.1881 58.6554 37.4188L74.1989 58.3533C74.2362 58.4054 74.266 58.465 74.2847 58.5245L79.6275 76.3929C79.6648 76.4674 79.6835 76.5492 79.6835 76.6348C79.6872 76.9436 79.4372 77.193 79.1275 77.193ZM77.5344 76.0766H78.3664L73.24 58.9375L61.3567 42.9333L77.5344 76.0766Z"
            fill="#D9E6F7"
          />
          <path
            d="M84.321 77.193C84.3173 77.193 84.3173 77.193 84.3136 77.193H82.5115C82.2988 77.193 82.1011 77.0702 82.0078 76.8804L62.9423 37.9955C62.8154 37.7351 62.9087 37.4225 63.155 37.2736C63.4012 37.1248 63.7221 37.1881 63.8937 37.4188L79.3924 58.3533C79.4297 58.4054 79.4595 58.465 79.4782 58.5245L84.821 76.3929C84.8583 76.4674 84.877 76.5492 84.877 76.6348C84.8807 76.9436 84.6307 77.193 84.321 77.193ZM82.8622 76.0766H83.5636L78.4372 58.9375L66.6547 43.0227L82.8622 76.0766Z"
            fill="#D9E6F7"
          />
          <path
            d="M89.5183 77.193C89.5146 77.193 89.5146 77.193 89.5109 77.193H87.7088C87.4961 77.193 87.2984 77.0702 87.2051 76.8804L68.1396 37.9955C68.0127 37.7351 68.106 37.4225 68.3522 37.2736C68.5985 37.1248 68.9193 37.1881 69.091 37.4188L84.5934 58.3533C84.6307 58.4054 84.6605 58.465 84.6792 58.5245L90.022 76.3929C90.0593 76.4674 90.078 76.5492 90.078 76.6348C90.078 76.9436 89.828 77.193 89.5183 77.193ZM88.0558 76.0766H88.7572L83.6345 58.9375L71.8482 43.0189L88.0558 76.0766Z"
            fill="#D9E6F7"
          />
          <path
            d="M90.97 77.1929H89.5112C89.2612 77.1929 89.0448 77.0292 88.974 76.7911L83.6498 58.7961C83.6311 58.7329 83.6237 58.6696 83.6274 58.6026L84.9146 37.6234C84.9333 37.3481 85.1497 37.1248 85.4258 37.1025C85.7018 37.0801 85.9556 37.2625 86.019 37.5304L90.9589 58.5505C90.9663 58.5877 90.9738 58.625 90.9738 58.6622L91.5334 76.6125C91.5372 76.765 91.4812 76.9101 91.3767 77.018C91.2685 77.1297 91.123 77.1929 90.97 77.1929ZM89.9291 76.0766H90.3955L89.8582 58.7589L85.8026 41.497L84.7542 58.5803L89.9291 76.0766Z"
            fill="#D9E6F7"
          />
          <path
            d="M102.95 77.193H101.189C101.01 77.193 100.846 77.1074 100.738 76.966C100.633 76.8246 100.599 76.6385 100.652 76.4711L106.491 57.5682C106.509 57.505 106.539 57.4491 106.577 57.397L121.605 37.4151C121.777 37.1844 122.101 37.1248 122.344 37.2737C122.59 37.4225 122.68 37.7351 122.553 37.9955L103.443 76.8804C103.357 77.0702 103.163 77.193 102.95 77.193ZM101.946 76.0767H102.599L118.941 42.8254L107.535 57.9924L101.946 76.0767Z"
            fill="#D9E6F7"
          />
          <path
            d="M97.7564 77.1929H95.9543C95.7789 77.1929 95.611 77.1111 95.5066 76.9697C95.4021 76.8283 95.3685 76.646 95.4208 76.4748L100.79 58.5245C100.808 58.4612 100.838 58.4054 100.876 58.3533L116.378 37.4188C116.55 37.1881 116.87 37.1211 117.12 37.2736C117.367 37.4225 117.46 37.7351 117.333 37.9955L98.2675 76.8804C98.1631 77.0702 97.9691 77.1929 97.7564 77.1929ZM96.7005 76.0766H97.4019L113.61 43.0189L101.823 58.9375L96.7005 76.0766Z"
            fill="#D9E6F7"
          />
          <path
            d="M92.5591 77.193H90.757C90.5817 77.193 90.4138 77.1111 90.3093 76.9697C90.2048 76.8283 90.1713 76.646 90.2235 76.4748L95.5887 58.5245C95.6074 58.4612 95.6372 58.4054 95.6745 58.3533L111.218 37.4188C111.39 37.1881 111.71 37.1248 111.957 37.2736C112.203 37.4225 112.296 37.7351 112.169 37.9955L93.0591 76.8804C92.9658 77.0702 92.7718 77.193 92.5591 77.193ZM91.507 76.0766H92.2084L108.461 43.0041L96.6297 58.9375L91.507 76.0766Z"
            fill="#D9E6F7"
          />
          <path
            d="M90.7569 77.193H89.2981C89.1451 77.193 89.0034 77.1334 88.8952 77.0218C88.7907 76.9139 88.7347 76.7688 88.7385 76.6162L89.2981 58.6659C89.2981 58.6287 89.3056 58.5915 89.313 58.5543L94.2492 37.5341C94.3126 37.2662 94.5626 37.0839 94.8424 37.1062C95.1185 37.1285 95.3386 37.3518 95.3536 37.6272L96.6408 58.6064C96.6445 58.6696 96.637 58.7366 96.6184 58.7999L91.2942 76.7948C91.2233 77.0293 91.0032 77.193 90.7569 77.193ZM89.8727 76.0767H90.3353L95.514 58.5766L94.4656 41.4933L90.41 58.7552L89.8727 76.0767Z"
            fill="#D9E6F7"
          />
          <path
            d="M88.4366 28.8343C88.306 28.8343 88.1754 28.7897 88.0747 28.7041C87.9478 28.5962 87.877 28.4436 87.877 28.2762V27.4985C87.877 26.4082 88.7276 25.5561 89.8096 25.5561H90.4551C91.4961 25.5561 92.343 26.4268 92.343 27.4985V28.2762C92.343 28.4399 92.2721 28.5925 92.1453 28.7004C92.0221 28.8083 91.8542 28.8529 91.6938 28.8269C91.164 28.745 90.6305 28.7041 90.0633 28.7041C89.5298 28.7041 89 28.745 88.5262 28.8269C88.5 28.8306 88.4665 28.8343 88.4366 28.8343ZM90.0671 27.5878C90.4663 27.5878 90.8469 27.6064 91.2237 27.6436V27.4985C91.2237 27.0371 90.8842 26.6724 90.4551 26.6724H89.8096C89.347 26.6724 88.9963 27.0259 88.9963 27.4985V27.6399C89.3432 27.6064 89.7014 27.5878 90.0671 27.5878Z"
            fill="#D9E6F7"
          />
          <path
            d="M91.0557 26.8026C90.9699 26.8026 90.8841 26.784 90.802 26.7431C90.7162 26.6984 90.5856 26.6724 90.455 26.6724H89.8095C89.6752 26.6724 89.5484 26.6984 89.4626 26.7431C89.2835 26.8324 89.0671 26.8212 88.8992 26.7096C88.7313 26.598 88.638 26.4045 88.6529 26.2035L89.5111 14.9586C89.5334 14.6683 89.776 14.4413 90.0707 14.4413H90.1565C90.4475 14.4413 90.6901 14.6646 90.7162 14.9548L91.6191 26.1998C91.634 26.4008 91.5407 26.5943 91.3728 26.7059C91.2758 26.7691 91.1676 26.8026 91.0557 26.8026ZM89.8245 25.5561H90.4401L90.1229 21.6229L89.8245 25.5561Z"
            fill="#D9E6F7"
          />
          <path
            d="M90.0667 55.0044C89.8392 55.0044 89.5817 55.0044 89.3131 54.9486C89.1004 54.9039 88.9288 54.7402 88.8803 54.5281L85.7985 41.4338L85.0896 52.835C85.0784 53.0322 84.9627 53.2071 84.7836 53.2964C84.6083 53.3857 84.3956 53.3746 84.2277 53.2704C80.4407 50.8517 78.0864 46.26 78.0864 41.2961C78.0864 33.7386 83.4628 27.5878 90.0667 27.5878C96.6744 27.5878 102.047 33.7349 102.047 41.2961C102.047 46.2041 99.745 50.755 96.0401 53.1811C95.8722 53.289 95.6595 53.3039 95.4842 53.2146C95.3051 53.1253 95.1894 52.9504 95.1745 52.7494L94.4656 41.43L91.3838 54.5281C91.3316 54.7476 91.1562 54.9151 90.9323 54.9523C90.6301 55.0044 90.3466 55.0044 90.0667 55.0044ZM89.8802 53.8844C90.0481 53.8881 90.2272 53.8881 90.3913 53.8806L94.2492 37.4895C94.3127 37.2215 94.5589 37.0355 94.8425 37.0615C95.1185 37.0839 95.3387 37.3071 95.3536 37.5825L96.2341 51.6666C99.1555 49.341 100.931 45.4599 100.931 41.2961C100.931 34.3526 96.0588 28.7041 90.0705 28.7041C84.0822 28.7041 79.2095 34.3526 79.2095 41.2961C79.2095 45.5232 81.0377 49.4452 84.0374 51.7671L84.9179 37.5825C84.9366 37.3071 85.153 37.0839 85.4291 37.0615C85.7089 37.0392 85.9589 37.2215 86.0223 37.4895L89.8802 53.8844Z"
            fill="#D9E6F7"
          />
          <path
            d="M77.1873 77.193C76.8851 77.193 76.6352 76.9511 76.6277 76.6497L76.4598 69.8923L69.688 62.4353C69.5873 62.3237 69.535 62.1748 69.5462 62.0223L70.0387 54.7662L63.9012 50.4908C63.6475 50.3159 63.584 49.9661 63.7631 49.7131C63.9385 49.4601 64.2892 49.4005 64.5429 49.5754L70.9416 54.0295C71.102 54.1411 71.1916 54.3309 71.1804 54.5244L70.6804 61.8586L77.4336 69.2932C77.5231 69.3937 77.5754 69.5202 77.5791 69.6541L77.7507 76.6199C77.7582 76.9288 77.5157 77.1855 77.206 77.193C77.1948 77.193 77.1911 77.193 77.1873 77.193Z"
            fill="#D9E6F7"
          />
          <path
            d="M102.95 77.193C102.939 77.193 102.928 77.193 102.92 77.193C102.61 77.1744 102.375 76.9139 102.39 76.605L102.778 69.6393C102.786 69.5127 102.834 69.3937 102.92 69.3006L109.546 61.866L108.923 54.5356C108.905 54.3346 108.998 54.1411 109.166 54.0295L115.695 49.5754C115.949 49.4005 116.3 49.4675 116.471 49.7205C116.647 49.9736 116.579 50.3233 116.326 50.4982L110.069 54.77L110.684 62.0148C110.699 62.1674 110.647 62.32 110.546 62.4316L103.89 69.8997L103.513 76.6683C103.491 76.9623 103.245 77.193 102.95 77.193Z"
            fill="#D9E6F7"
          />
          <path
            d="M82.5114 77.193C82.2129 77.193 81.9629 76.9548 81.9517 76.6571L81.7017 69.896L74.9672 62.4353C74.8665 62.3237 74.8143 62.1786 74.8255 62.0297L75.2396 54.7142L67.5649 47.2795C67.3447 47.0637 67.3373 46.7102 67.5537 46.4907C67.7701 46.2711 68.1245 46.2637 68.3447 46.4795L76.2022 54.0927C76.3179 54.2044 76.3813 54.3644 76.3701 54.5244L75.9522 61.8623L82.6681 69.3006C82.7576 69.3974 82.8061 69.5239 82.8098 69.6541L83.0673 76.6199C83.0785 76.9288 82.836 77.1855 82.53 77.1967C82.5263 77.193 82.5188 77.193 82.5114 77.193Z"
            fill="#D9E6F7"
          />
          <path
            d="M97.7563 77.1483C97.7489 77.1483 97.7414 77.1483 97.7339 77.1483C97.4243 77.1371 97.1855 76.8767 97.1967 76.5716L97.4541 69.6504C97.4578 69.5202 97.5101 69.3937 97.5959 69.2969L104.312 61.8586L103.894 54.5207C103.886 54.3607 103.946 54.2044 104.062 54.089L112.005 46.3455C112.225 46.1297 112.58 46.1334 112.796 46.353C113.012 46.5725 113.009 46.926 112.789 47.1418L105.028 54.7067L105.446 62.0223C105.453 62.1711 105.401 62.3162 105.304 62.4279L98.5697 69.8886L98.3197 76.6088C98.301 76.9139 98.0548 77.1483 97.7563 77.1483Z"
            fill="#D9E6F7"
          />
          <path
            d="M87.7089 77.1929C87.4104 77.1929 87.1604 76.9585 87.1492 76.6571L86.8992 70.0225L80.161 62.4316C80.064 62.32 80.0118 62.1785 80.023 62.0297L80.4408 54.7179L72.7698 47.3688C72.546 47.1567 72.5385 46.8032 72.7549 46.58C72.9676 46.3567 73.322 46.3492 73.5459 46.5651L81.4034 54.0927C81.5228 54.2044 81.5825 54.3644 81.5751 54.5281L81.1572 61.8697L87.8768 69.4383C87.9626 69.535 88.0111 69.6578 88.0185 69.7881L88.276 76.6236C88.2872 76.9325 88.0484 77.1892 87.7387 77.2041C87.7201 77.1929 87.7126 77.1929 87.7089 77.1929Z"
            fill="#D9E6F7"
          />
          <path
            d="M92.7307 76.8469C92.727 76.8469 92.7233 76.8469 92.7195 76.8469C92.4098 76.8394 92.1636 76.5864 92.1711 76.2776L92.3017 69.6578C92.3054 69.5239 92.3539 69.3974 92.4434 69.2969L99.1145 61.8585L98.6966 54.5207C98.6892 54.3569 98.7489 54.1969 98.8683 54.0853L106.685 46.6469C106.909 46.4348 107.263 46.4423 107.476 46.6655C107.688 46.8888 107.681 47.2423 107.457 47.4544L99.8271 54.7179L100.241 62.0297C100.249 62.1786 100.2 62.3237 100.099 62.4316L93.4098 69.8885L93.2829 76.2999C93.2829 76.6013 93.0367 76.8469 92.7307 76.8469Z"
            fill="#D9E6F7"
          />
          <path
            d="M115.788 55.0453H64.4757C64.166 55.0453 63.916 54.796 63.916 54.4872C63.916 54.1783 64.166 53.929 64.4757 53.929H115.788C116.098 53.929 116.348 54.1783 116.348 54.4872C116.348 54.796 116.098 55.0453 115.788 55.0453Z"
            fill="#D9E6F7"
          />
          <path
            d="M73.367 44.7083C73.3558 44.7083 73.3483 44.7083 73.3371 44.7083C73.0274 44.6934 72.7924 44.4292 72.8073 44.1241C73.2476 35.5954 79.941 28.5255 88.3806 27.6808C88.6828 27.651 88.9627 27.8743 88.9925 28.1794C89.0223 28.4845 88.7985 28.7599 88.4925 28.7897C80.5977 29.5822 74.3333 36.1983 73.9229 44.1799C73.908 44.4776 73.6617 44.7083 73.367 44.7083Z"
            fill="#D9E6F7"
          />
          <path
            d="M90.1119 28.7041H89.7686C89.459 28.7041 89.209 28.4548 89.209 28.1459C89.209 27.8371 89.459 27.5878 89.7686 27.5878H90.1119C90.4216 27.5878 90.6716 27.8371 90.6716 28.1459C90.6716 28.4548 90.4216 28.7041 90.1119 28.7041Z"
            fill="#D9E6F7"
          />
          <path
            d="M106.901 44.2766C106.614 44.2766 106.368 44.0534 106.346 43.7631C105.722 35.8448 99.5737 29.545 91.7348 28.7897C91.4289 28.7599 91.2013 28.4883 91.2311 28.1794C91.261 27.8706 91.5334 27.651 91.843 27.6771C100.227 28.4845 106.797 35.2122 107.461 43.6738C107.487 43.9827 107.256 44.2506 106.946 44.2729C106.931 44.2766 106.916 44.2766 106.901 44.2766Z"
            fill="#D9E6F7"
          />
          <path
            d="M112.614 62.6139H67.6099C67.3003 62.6139 67.0503 62.3646 67.0503 62.0557C67.0503 61.7469 67.3003 61.4976 67.6099 61.4976H112.61C112.92 61.4976 113.169 61.7469 113.169 62.0557C113.169 62.3646 112.92 62.6139 112.614 62.6139Z"
            fill="#D9E6F7"
          />
          <path
            d="M73.5794 44.8385C73.542 44.8385 73.5047 44.8348 73.4674 44.8274C73.1652 44.7678 72.9675 44.4739 73.0309 44.1687C74.527 36.7676 81.7279 31.3944 90.1526 31.3944C98.5026 31.3944 105.689 36.749 107.233 44.1241C107.297 44.4255 107.103 44.7232 106.8 44.7864C106.502 44.8497 106.203 44.6562 106.14 44.3548C104.7 37.4932 97.9765 32.5144 90.1563 32.5144C82.2614 32.5144 75.5232 37.5118 74.1315 44.3957C74.0756 44.6562 73.8405 44.8385 73.5794 44.8385Z"
            fill="#D9E6F7"
          />
          <path
            d="M74.8256 46.6544C74.7174 46.6544 74.6055 46.6209 74.5085 46.5539C74.2548 46.379 74.1914 46.033 74.3667 45.7762C77.2284 41.6347 83.4256 38.9593 90.1564 38.9593C91.5294 38.9593 92.9062 39.0746 94.3687 39.3128C94.6747 39.3611 94.8799 39.6477 94.8314 39.9528C94.7829 40.2579 94.4956 40.4626 94.1896 40.4142C92.7868 40.1872 91.466 40.0756 90.1564 40.0756C83.7838 40.0756 77.9485 42.5612 75.2883 46.4088C75.1763 46.5688 75.0047 46.6544 74.8256 46.6544Z"
            fill="#D9E6F7"
          />
          <path
            d="M105.443 46.6544C105.267 46.6544 105.092 46.5725 104.984 46.4162C103.025 43.6031 99.3163 41.4635 94.8092 40.5482C94.507 40.4849 94.3093 40.1909 94.3727 39.8895C94.4361 39.5881 94.7309 39.3946 95.0331 39.4542C99.8163 40.4254 103.779 42.7324 105.902 45.7799C106.077 46.033 106.013 46.379 105.76 46.5576C105.663 46.6209 105.551 46.6544 105.443 46.6544Z"
            fill="#D9E6F7"
          />
          <path
            d="M77.4 49.9438C77.1985 49.9438 77.0045 49.8359 76.9037 49.6461C76.7582 49.3745 76.8664 49.0359 77.1388 48.8907C79.1759 47.8191 81.8212 47.0228 84.7911 46.5837C85.1008 46.539 85.3806 46.7474 85.4254 47.0525C85.4702 47.3577 85.2612 47.6405 84.9553 47.6851C82.1085 48.1056 79.5864 48.8647 77.6611 49.8768C77.5791 49.9215 77.4895 49.9438 77.4 49.9438Z"
            fill="#D9E6F7"
          />
          <path
            d="M92.6451 47.3911C92.6339 47.3911 92.6264 47.3911 92.6153 47.3911C91.8877 47.3539 90.9811 47.3056 90.1528 47.3056C89.2797 47.3056 88.3768 47.3539 87.6493 47.3911C87.3433 47.4097 87.0784 47.1716 87.0598 46.8628C87.0448 46.5539 87.2799 46.2934 87.5896 46.2748C88.3283 46.2376 89.2499 46.1892 90.1528 46.1892C91.0109 46.1892 91.9325 46.2376 92.675 46.2748C92.9846 46.2897 93.2197 46.5539 93.2048 46.8628C93.1898 47.1604 92.9399 47.3911 92.6451 47.3911Z"
            fill="#D9E6F7"
          />
          <path
            d="M102.864 49.9438C102.775 49.9438 102.685 49.9215 102.603 49.8805C100.678 48.8684 98.1593 48.113 95.3126 47.6888C95.0066 47.6442 94.7977 47.3577 94.8425 47.0563C94.8872 46.7511 95.1708 46.5428 95.4767 46.5874C98.4466 47.0265 101.092 47.8265 103.125 48.8945C103.398 49.0396 103.502 49.3745 103.36 49.6498C103.26 49.8359 103.066 49.9438 102.864 49.9438Z"
            fill="#D9E6F7"
          />
          <path
            d="M109.047 70.2272H71.2179C70.9082 70.2272 70.6582 69.9779 70.6582 69.669C70.6582 69.3602 70.9082 69.1108 71.2179 69.1108H109.047C109.356 69.1108 109.606 69.3602 109.606 69.669C109.606 69.9779 109.356 70.2272 109.047 70.2272Z"
            fill="#D9E6F7"
          />
          <path
            d="M111.584 190H66.7965C66.4868 190 66.2368 189.751 66.2368 189.442C66.2368 189.133 66.4868 188.884 66.7965 188.884H111.584C111.893 188.884 112.143 189.133 112.143 189.442C112.143 189.751 111.89 190 111.584 190Z"
            fill="#D9E6F7"
          />
          <path
            d="M90.026 189.78C89.7163 189.78 89.4663 189.531 89.4663 189.222V84.289C89.4663 83.9801 89.7163 83.7308 90.026 83.7308C90.3356 83.7308 90.5856 83.9801 90.5856 84.289V189.222C90.5856 189.531 90.3356 189.78 90.026 189.78Z"
            fill="#D9E6F7"
          />
          <path
            d="M98.0142 79.7456H77.1876C76.8779 79.7456 76.6279 79.4963 76.6279 79.1874C76.6279 78.8786 76.8779 78.6293 77.1876 78.6293H98.0142C98.3238 78.6293 98.5738 78.8786 98.5738 79.1874C98.5738 79.4963 98.3201 79.7456 98.0142 79.7456Z"
            fill="#D9E6F7"
          />
        </svg>
      )
    },    {
      name: "Информатика",
      link: "inform",
      img: (
        <svg
          width="112"
          height="113"
          viewBox="0 0 112 113"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M56.0002 91.63C56.9335 91.63 57.7035 90.86 57.7035 89.9267C57.7035 88.9933 56.9335 88.2233 56.0002 88.2233C55.0669 88.2233 54.2969 88.9933 54.2969 89.9267C54.2969 90.8833 55.0669 91.63 56.0002 91.63Z"
            fill="#D9E6F7"
          />
          <path
            d="M103.507 0H8.49333C3.80333 0 0 3.80333 0 8.49333V89.95C0 94.6167 3.80333 98.4433 8.49333 98.4433H33.95V108.617H22.05C21.1167 108.617 20.3467 109.387 20.3467 110.32C20.3467 111.253 21.1167 112.023 22.05 112.023H89.9267C90.86 112.023 91.63 111.253 91.63 110.32C91.63 109.387 90.86 108.617 89.9267 108.617H78.05V98.4433H103.507C108.173 98.4433 112 94.64 112 89.95V8.49333C112 3.80333 108.197 0 103.507 0ZM74.6667 108.593H37.3333V98.42H74.6667V108.593ZM108.617 89.9267C108.617 92.7267 106.33 95.0133 103.53 95.0133H8.49333C5.69333 95.0133 3.40667 92.7267 3.40667 89.9267V84.84H108.617V89.9267ZM108.617 81.4567H3.38333V8.49333C3.38333 5.69333 5.67 3.40667 8.47 3.40667H103.507C106.307 3.40667 108.593 5.69333 108.593 8.49333V81.4567H108.617Z"
            fill="#D9E6F7"
          />
          <path
            d="M27.72 15.8433H20.93C18.7367 15.8433 16.9634 17.6167 16.9634 19.81V33.39C16.9634 35.5833 18.7367 37.3567 20.93 37.3567H27.72C29.9134 37.3567 31.6867 35.5833 31.6867 33.39V19.81C31.6634 17.6167 29.89 15.8433 27.72 15.8433ZM28.28 33.3667C28.28 33.67 28.0234 33.9267 27.72 33.9267H20.93C20.6267 33.9267 20.37 33.67 20.37 33.3667V19.81C20.37 19.5067 20.6267 19.25 20.93 19.25H27.72C28.0234 19.25 28.28 19.5067 28.28 19.81V33.3667Z"
            fill="#D9E6F7"
          />
          <path
            d="M72.9632 15.8433H66.1732C63.9799 15.8433 62.2065 17.6167 62.2065 19.81V33.39C62.2065 35.5833 63.9799 37.3567 66.1732 37.3567H72.9632C75.1566 37.3567 76.9299 35.5833 76.9299 33.39V19.81C76.9299 17.6167 75.1566 15.8433 72.9632 15.8433ZM73.5465 33.3667C73.5465 33.67 73.2899 33.9267 72.9866 33.9267H66.1965C65.8932 33.9267 65.6365 33.67 65.6365 33.3667V19.81C65.6365 19.5067 65.8932 19.25 66.1965 19.25H72.9866C73.2899 19.25 73.5465 19.5067 73.5465 19.81V33.3667Z"
            fill="#D9E6F7"
          />
          <path
            d="M48.8133 16.0067C48.23 15.7267 47.53 15.7967 47.0167 16.2167L41.37 20.7433C40.6467 21.3267 40.53 22.4 41.1133 23.1233C41.6967 23.8467 42.77 23.9633 43.4933 23.38L46.3867 21.07V35.63C46.3867 36.5633 47.1567 37.3333 48.09 37.3333C49.0233 37.3333 49.7933 36.5633 49.7933 35.63V17.5467C49.77 16.8933 49.3967 16.2867 48.8133 16.0067Z"
            fill="#D9E6F7"
          />
          <path
            d="M94.0799 16.0067C93.4966 15.7267 92.7966 15.7967 92.2833 16.2167L86.6366 20.7433C85.9133 21.3267 85.7966 22.4 86.3799 23.1233C86.9633 23.8467 88.0366 23.9633 88.7599 23.38L91.6533 21.07V35.63C91.6533 36.5633 92.4233 37.3333 93.3566 37.3333C94.2899 37.3333 95.0599 36.5633 95.0599 35.63V17.5467C95.0366 16.8933 94.6633 16.2867 94.0799 16.0067Z"
            fill="#D9E6F7"
          />
          <path
            d="M44.6834 47.53H37.8934C35.7234 47.53 33.9268 49.3033 33.9268 51.4967V65.0767C33.9268 67.27 35.7001 69.0433 37.8934 69.0433H44.6834C46.8768 69.0433 48.6501 67.27 48.6501 65.0767V51.4967C48.6501 49.3033 46.8768 47.53 44.6834 47.53ZM45.2434 65.0533C45.2434 65.3567 44.9868 65.6133 44.6834 65.6133H37.8934C37.5901 65.6133 37.3334 65.3567 37.3334 65.0533V51.4733C37.3334 51.17 37.5901 50.9133 37.8934 50.9133H44.6834C44.9868 50.9133 45.2434 51.17 45.2434 51.4733V65.0533Z"
            fill="#D9E6F7"
          />
          <path
            d="M91.0701 47.53H84.2801C82.0868 47.53 80.3135 49.3033 80.3135 51.4967V65.0767C80.3135 67.27 82.0868 69.0433 84.2801 69.0433H91.0701C93.2635 69.0433 95.0368 67.27 95.0368 65.0767V51.4967C95.0368 49.3033 93.2635 47.53 91.0701 47.53ZM91.6302 65.0533C91.6302 65.3567 91.3735 65.6133 91.0701 65.6133H84.2801C83.9768 65.6133 83.7202 65.3567 83.7202 65.0533V51.4733C83.7202 51.17 83.9768 50.9133 84.2801 50.9133H91.0701C91.3735 50.9133 91.6302 51.17 91.6302 51.4733V65.0533Z"
            fill="#D9E6F7"
          />
          <path
            d="M20.5334 47.6933C19.9501 47.4133 19.2501 47.4833 18.7368 47.9033L13.0668 52.4067C12.3434 52.99 12.2268 54.0633 12.8101 54.7867C13.3934 55.51 14.4668 55.6267 15.1901 55.0433L18.0834 52.7333V67.2933C18.0834 68.2267 18.8534 68.9967 19.7868 68.9967C20.7201 68.9967 21.4901 68.2267 21.4901 67.2933V49.1867C21.4901 48.5567 21.1168 47.9733 20.5334 47.6933Z"
            fill="#D9E6F7"
          />
          <path
            d="M66.9198 47.6933C66.3364 47.4133 65.6364 47.4833 65.1231 47.9033L59.4764 52.43C58.7531 53.0133 58.6364 54.0867 59.2198 54.81C59.8031 55.5333 60.8764 55.65 61.5998 55.0667L64.4931 52.7567V67.3167C64.4931 68.25 65.2631 69.02 66.1964 69.02C67.1298 69.02 67.8998 68.25 67.8998 67.3167V49.21C67.8764 48.5567 67.5031 47.9733 66.9198 47.6933Z"
            fill="#D9E6F7"
          />
        </svg>
      )
    },    {
      name: "История Казахстана",
      link: "historyk",
      img: (
        <svg
          width="164"
          height="127"
          viewBox="0 0 164 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M81.5132 0.710022C100.925 0.710022 116.679 16.405 116.679 35.8022C116.679 55.1732 100.951 70.8682 81.5132 70.8682C62.1016 70.8682 46.3477 55.1732 46.3477 35.8022C46.3477 16.4311 62.1016 0.710022 81.5132 0.710022Z"
            fill="#D9E6F7"
          />
          <path
            d="M80.3374 97.0179L79.7365 98.2172L79.0572 99.7554L78.6653 100.485L78.3257 101.163L78.0644 101.711L77.7248 102.05L76.9149 101.372L76.0266 100.772L75.0861 100.303L74.0672 99.9118L72.996 99.6511L71.9248 99.3904L70.8537 99.1818L69.7041 99.0515L67.3528 98.8429L65.0014 98.7647L62.7024 98.6343L60.5339 98.3736L59.3321 98.165L58.1826 97.9043L57.5817 97.6957L56.9808 97.4872L56.4321 97.2265L55.9619 96.9657L55.2303 96.4965L54.4988 95.949L53.6889 95.3493L52.9574 94.6715L51.4159 93.1854L49.8745 91.6993L48.3331 90.2915L46.9223 89.014L46.243 88.5447L45.5637 88.0754L44.9628 87.8147L44.3619 87.6061L43.2124 87.3454L42.1935 87.0065L41.1745 86.6675L40.1556 86.1982L39.2673 85.8072L38.3791 85.2597L37.5692 84.7122L36.8376 84.1647L36.0277 83.565L35.3485 82.9654L34.6692 82.2875L33.9638 81.6097L32.6836 80.2018L31.4818 78.7157L29.0521 75.5611L26.4917 72.3282L25.0026 70.79L23.4611 69.2518L22.5728 68.4436L21.6846 67.7136L20.744 67.0357L19.7251 66.3057L19.5161 66.384L19.3332 66.5404L19.1242 66.8011L18.9936 67.14L18.8107 67.7397L18.7323 68.0004L18.2621 67.8179L17.844 67.6093L17.3738 67.4007L16.9819 67.2704H16.1197L15.6495 67.4007L15.1531 67.6093L15.6233 68.209L16.2242 69.0172L16.8251 69.9557L17.3738 70.9725L17.9224 72.0414L18.3143 73.0582L18.4449 73.6057L18.5756 74.0229L18.6539 74.4922V74.8832H17.9224H15.0224L15.5711 75.6915L16.172 76.4997L16.8513 77.3079L17.5828 78.0379L18.3143 78.7679L19.0458 79.4979L19.7774 80.0975L20.4566 80.5668L19.7251 80.645L18.7062 80.7232L17.7134 80.8536L16.9819 80.9318L17.5828 81.4793L18.3143 82.0268L19.1242 82.6265L20.0125 83.2261L20.9008 83.7475L21.7891 84.2168L22.599 84.4775L23.3305 84.6861L23.6701 84.7643L23.9314 84.8425L24.1404 84.9207L24.271 85.0511L24.3494 85.1293V85.39L24.271 85.5204L24.1404 85.9115L24.062 86.3286L23.9837 86.5893V86.7979L24.062 87.1368L24.1404 87.3975L24.271 87.5279L24.48 87.6582L24.7413 87.7886L25.0809 87.8668L25.4206 87.9972L25.7602 88.1275L26.0999 88.2579L26.3611 88.4665L26.4395 88.5447V88.675L26.3611 88.7532L26.0999 88.9618L25.8386 89.1704L25.5773 89.4311L25.3161 89.77V90.0307L25.2377 90.2915L25.3161 90.6304L25.3422 91.0215L26.4917 91.4125L27.6935 91.8297L28.2422 91.96L28.7908 92.1686L29.1827 92.3772L29.5224 92.5857L27.3017 94.3325L27.9025 94.88L28.6341 95.2711L29.5746 95.7143L30.5151 96.0532L31.5863 96.3922L32.6052 96.6007L33.4935 96.8093H34.3034L33.5719 97.3568L32.6314 97.9565L31.6124 98.504L30.8809 99.0515L31.5602 99.5207L32.5007 99.99L33.5719 100.538L34.8521 101.137L37.8043 102.415L41.0439 103.692L44.4142 104.865L47.706 105.934L49.1952 106.404L50.5538 106.743L51.7556 107.081L52.8267 107.29L50.6583 107.081L48.6466 106.821L46.6349 106.482L44.7538 106.091L42.8727 105.543L41.0439 104.996L39.2935 104.396L37.6214 103.718L34.3295 102.363L31.2205 101.007L29.7314 100.407L28.2422 99.8075L26.8314 99.26L25.4206 98.7125L25.7602 98.504L26.1521 98.3736L26.7008 98.165L27.3017 98.0347L28.5818 97.6175L29.7314 97.2265L27.7197 96.8875L24.9503 96.34L23.5918 95.949L22.4422 95.61L21.972 95.4536L21.5539 95.245L21.2143 95.0365L21.0053 94.8279V94.7497L21.0837 94.6715L21.2927 94.5932L21.5017 94.4629L22.0503 94.2543L22.7819 94.0457L24.4017 93.5765L25.7602 93.1072L22.4683 92.5075L19.908 92.0904L18.9675 91.8818L18.2359 91.6211L17.9747 91.4907L17.7134 91.2822L17.5044 91.1518L17.3215 91.0215L17.5305 90.8911L18.1314 90.7607L19.0197 90.6304L20.0386 90.4218L21.1098 90.2915L22.0503 90.0307L22.5206 89.9004L22.9125 89.77L23.1737 89.5615L23.435 89.3529L22.8864 89.1443L22.3638 88.9357L21.6846 88.8054L21.0314 88.675L19.49 88.4665L17.9485 88.2579L17.1386 88.0493L16.4071 87.9189L15.6756 87.6582L14.9441 87.3975L14.2648 87.0586L13.6116 86.5893L13.063 86.12L12.645 85.5204L12.7756 85.4422L13.063 85.364H13.4026L13.9513 85.4422L15.1531 85.5204L16.5116 85.5986L18.0008 85.729H19.8819L20.4305 85.6507L20.8485 85.5204L21.1098 85.39L19.49 84.7122L17.3215 83.7736L16.1197 83.174L14.8396 82.5743L13.5594 81.8965L12.2792 81.2186L11.0774 80.4886L9.92787 79.6804L8.85671 78.8722L7.91617 78.064L7.52428 77.5947L7.10627 77.1775L6.84501 76.7865L6.58375 76.3172L6.27024 75.9L6.13961 75.4307L6.06123 75.0136L6.00898 74.5443H6.47924L7.02789 74.6225L7.57653 74.8311L8.12518 75.0397L9.19635 75.7175L10.3981 76.3954L10.9468 76.7343L11.5477 77.0732L12.1486 77.334L12.6972 77.5425L13.2981 77.6729L13.8468 77.7511H14.4477L14.9963 77.5425L13.3765 76.3432L11.5477 74.805L9.45761 72.98L7.36753 70.9725L5.27745 68.8086L3.318 66.6447L2.42972 65.4715L1.56756 64.4025L0.836031 63.3336L0.156756 62.3168L0 62.03V61.5607L0.0783779 61.3522L0.156756 61.1436L0.365764 61.0132L0.574772 60.8047L0.78378 60.6743L1.04504 60.5961L1.3063 60.5179H1.82882L2.16846 60.5961L2.42972 60.6743L2.69098 60.8829L2.89998 61.0915L4.10178 62.2907L5.51258 63.6986L7.00176 65.2368L8.62157 66.775L10.2414 68.1829L11.8612 69.5386L12.6711 70.0861L13.4026 70.5554L14.2125 70.9465L14.9441 71.2072L14.3954 70.8682L13.7945 70.2686L12.9846 69.4604L12.0963 68.4436L10.1369 66.0972L8.02068 63.3857L6.94951 61.8997L5.9306 60.4136L4.99006 58.9275L4.04953 57.5197L3.23962 56.164L2.56035 54.9647L2.09008 53.8175L1.69819 52.879L1.61981 52.54V51.9925L1.69819 51.784L1.82882 51.5754L1.95945 51.3668L2.09008 51.2365L2.29909 51.1061L2.76935 50.9757L3.18737 50.8454H4.12791L4.38916 50.9236L4.59817 51.0018L4.85943 51.1322L5.06844 51.3407L5.61709 51.81L6.16573 52.4879L7.36753 54.0261L8.6477 55.9815L10.1369 58.0672L11.6783 60.2311L12.4882 61.2479L13.2981 62.2647L14.1864 63.1511L15.1269 63.9593L13.9774 61.7432L12.6972 59.1882L12.018 57.7804L11.4171 56.3725L10.8162 54.8865L10.2675 53.4004L9.79724 51.8622L9.32697 50.3761L8.98734 48.89L8.72608 47.404L8.59545 45.9961L8.49094 44.6143L8.56932 43.9365L8.6477 43.3368L8.72608 42.7372L8.85671 42.1375L8.98734 41.929L9.06572 41.7204L9.27472 41.5118L9.40535 41.3815L9.87562 41.1729L10.3459 41.0425H10.8162L11.208 41.1207L11.4171 41.199L11.5477 41.2772L11.6261 41.4075L11.7044 41.6161L12.3837 43.78L12.9846 46.0743L13.5855 48.4207L14.1864 50.715L14.7873 53.0093L15.5972 55.1732L16.0152 56.19L16.4855 57.2068L17.0341 58.1454L17.635 59.084L17.217 57.1286L16.9558 55.3818L16.6945 53.7654L16.5639 52.2793L16.4332 51.0018L16.3549 49.8547L16.4332 48.9161L16.5116 48.1079L16.6423 47.43L16.8513 46.8825L16.9819 46.674L17.1125 46.4654L17.2431 46.335L17.4522 46.2047L17.6612 46.1265H18.2621L18.8107 46.335L19.3594 46.5957L19.8296 48.7597L20.2999 50.8454L20.8485 52.8007L21.4494 54.6779L22.1287 56.555L22.8602 58.4322L23.6701 60.3875L24.6107 62.3429L25.29 63.6204L25.9692 64.8979L26.7008 66.1754L27.4323 67.4529L28.2422 68.6522L29.0521 69.8515L29.9142 71.0507L30.7242 72.25L32.344 74.2575L34.016 76.1347L35.7665 78.0118L37.5953 79.7586L39.4764 81.5054L41.4358 83.1218L43.4475 84.66L45.5376 86.1461L46.9484 87.0847L48.4376 87.945L49.979 88.8315L51.4682 89.6397L53.8195 90.7868L56.1186 91.8557L58.5483 92.7943L60.978 93.6807L63.2771 94.4107L65.6285 95.0104L68.0582 95.5579L70.4095 96.0272L72.8915 96.3661L75.3212 96.6268L77.8293 96.8354L80.3374 97.0179Z"
            fill="#D9E6F7"
          />
          <path
            d="M86.4772 117.458L87.6268 117.588L88.1754 117.797L88.306 117.875V117.953H88.1754L88.0448 118.031L86.9736 118.24H86.1115L83.2898 118.031L79.8412 117.953L76.1313 117.875L72.2908 117.953L70.462 118.031L68.6332 118.162L67.0134 118.292L65.4719 118.423L64.1918 118.631L63.0422 118.892L62.6242 119.022L62.2323 119.153L61.8927 119.283L61.6314 119.491L61.762 118.814L62.0233 118.136L61.553 118.266L61.0828 118.396L60.6647 118.605L60.2729 118.814L59.9332 119.022L59.672 119.283L59.463 119.622L59.3846 119.961L59.1756 119.491L59.0449 119.074L58.9666 118.605L58.8882 118.214L58.9666 117.875L59.0449 117.458L59.1233 117.119L59.3323 116.78L59.463 116.519L59.7242 116.18L59.9855 115.92L60.2467 115.659L60.9783 115.19L61.7882 114.72C62.2323 114.981 62.7287 115.164 63.199 115.32C63.617 115.372 64.1134 115.32 64.6098 115.19C65.4197 115.92 66.5431 115.815 67.2485 115.059C67.3791 114.929 67.5359 114.694 67.5881 114.512C67.6926 114.121 67.6665 113.625 67.5881 113.156L68.398 113.078L69.3386 112.948L70.3575 112.687L71.4287 112.426L72.4998 112.218L73.5187 111.957L74.4593 111.826L75.2692 111.748L74.9295 112.009L74.1196 112.609L73.1791 113.339L72.4998 113.808L73.3881 114.016L74.1196 114.147L73.571 114.746L73.0223 115.346L72.4737 115.946L72.0818 116.493L72.6304 116.702L73.1791 116.832L73.78 116.963H74.9818L75.5827 116.832L76.1836 116.702L76.6539 116.441L77.2025 116.702L77.7511 116.91L78.2998 117.041L78.8484 117.171L80.0502 117.301L81.3304 117.432H86.4772"
            fill="#D9E6F7"
          />
          <path
            d="M115.973 120.743L115.503 120.951L115.033 121.03L114.615 121.108L114.275 121.03L113.935 120.951L113.596 120.821L113.334 120.691L112.995 120.482L112.446 120.065L111.897 119.674L111.636 119.465L111.297 119.335L111.035 119.257H110.696L110.095 120.534L109.285 122.151L109.024 122.568L108.762 122.907L108.501 123.115L108.24 123.324L107.9 123.454H107.561L107.221 123.324L106.829 123.115L106.698 122.907L106.568 122.698L106.437 122.438L106.307 122.099L106.176 121.499L106.098 121.108L105.706 121.447L105.288 121.916L104.948 122.464L104.504 123.037L104.034 123.637L103.563 124.106L103.302 124.367L102.962 124.575L102.623 124.706L102.231 124.836H102.022L101.682 124.914L101.343 124.836L101.081 124.706L100.271 123.767L99.3831 122.829L98.7822 123.767L98.103 124.575L97.7633 124.914L97.4237 125.253L97.084 125.514L96.7444 125.723L96.4832 125.853L96.1435 125.931H95.8039L95.5426 125.853L95.2814 125.723L95.0723 125.514L94.8111 125.175L94.6805 124.758L94.5498 124.367L94.2886 123.689L94.2102 123.35L94.0534 123.089L93.9228 122.959H93.7922L91.9634 125.905L91.7021 126.166L91.2318 126.374L90.6832 126.505L90.1345 126.635H89.5336L89.0634 126.505L88.9327 126.426L88.7237 126.218L88.6454 126.088V125.827L88.9066 122.881L88.6976 122.959L88.4363 123.089L88.1751 123.22L87.9138 123.48L87.3652 124.08L86.7643 124.758L86.1634 125.488L85.4319 126.088L85.0922 126.348L84.7526 126.609L84.3607 126.818L84.0211 126.896L83.5508 127L83.2112 126.922L83.0805 126.844L82.9499 126.713L82.8715 126.505V126.296L82.9499 125.41L83.0805 124.549L83.1589 124.08L83.0805 123.689L83.0021 123.272L82.7409 122.803L82.3229 123.402L81.6436 124.263L80.8337 125.149L79.9715 126.009L79.5013 126.348L79.031 126.687L78.613 126.818L78.2995 127L78.1688 126.922H77.9598L77.8292 126.791L77.7508 126.713L77.6202 126.505L77.5418 126.296V126.035L77.4634 125.696L77.5418 123.141L75.8436 124.289L73.8319 125.566L73.3617 125.775L72.813 126.035L72.3427 126.166L71.7941 126.296L71.3238 126.426H70.8536L70.3833 126.348L69.9653 126.218L70.1743 125.67L70.3833 125.201L70.5923 124.732L70.8536 124.341L71.1148 123.924L71.3761 123.533L71.7157 123.194L72.0554 122.855L72.7869 122.307L73.649 121.76L74.5373 121.369L75.5562 121.03L76.5752 120.769L77.7247 120.56L78.8742 120.352L80.0238 120.221L82.5319 120.091L85.0922 120.013H90.2129L91.4931 119.935L92.6949 119.856L93.8967 119.778L95.0462 119.648L96.1958 119.439L97.2147 119.231L98.2336 118.97L99.1741 118.579L100.036 118.162L100.768 117.614L101.499 117.067L102.1 116.337L101.421 114.981L101.97 114.903L102.518 114.773L103.067 114.512L103.537 114.173L103.746 114.043L103.981 113.964L104.112 113.704L104.243 113.495L104.321 113.234V112.765L104.19 112.504L105.34 112.296L106.542 112.165L107.822 112.087H109.18L111.95 112.218L114.771 112.426L117.671 112.765L120.493 113.026L123.262 113.286L125.823 113.417V114.355L125.744 114.746L125.614 115.164L125.483 115.555L125.352 115.894L125.143 116.154L124.882 116.493L124.412 116.963L123.811 117.38L123.21 117.64L122.531 117.771L121.799 117.901L121.068 117.823L120.388 117.745L119.657 117.536L118.978 117.197L118.298 116.858L117.75 116.389L117.201 115.841V116.989L116.992 118.475L116.861 119.205L116.652 119.883L116.522 120.143L116.313 120.352L116.182 120.56L115.973 120.743ZM61.7878 114.434L63.3293 115.111L63.7212 114.773L64.2698 114.381L64.8707 114.043L65.4194 113.704L67.4311 112.895L69.1815 112.087L70.0437 111.748L70.7752 111.331L71.5067 110.94L72.1076 110.523L73.649 109.506L75.1905 108.489L76.6797 107.551L78.0382 106.612L79.0571 105.804L79.867 105.074L80.7553 104.266L81.6958 103.379L82.0355 103.04L82.4535 102.78L82.9238 102.519L83.4724 102.258L84.622 101.711L85.7715 101.32L87.3129 100.903L88.985 100.485L90.7354 100.146L92.6949 99.8075L95.0462 99.5468L97.3976 99.2079L99.8273 98.9472L102.179 98.53L102.989 98.3997L103.72 98.1911L104.53 97.9825L105.34 97.774L106.15 96.7572L107.43 95.3493L108.292 94.489L109.311 93.6807L110.461 92.7943L111.819 91.934L113.831 90.7347L115.999 89.6657L118.22 88.5186L120.388 87.5018L122.4 86.485L124.281 85.5465L125.823 84.7382L127.024 83.93L127.364 82.9132L127.834 81.8965L128.435 80.8797L129.167 79.8629L129.977 78.794L130.996 77.725L132.067 76.5257L133.425 75.2482L134.627 74.1793L135.907 73.1104L136.587 72.6411L137.266 72.1718L137.997 71.7547L138.729 71.3636L139.46 71.0247L140.192 70.764L141.002 70.5554L141.733 70.3468L142.543 70.2686L143.275 70.1904L144.085 70.2686L144.816 70.399L144.738 71.2072L144.529 72.0154L144.268 72.8236L143.928 73.684L143.458 74.5704L142.857 75.4307L142.125 76.3693L141.237 77.3079L141.916 77.2297L142.517 77.0993L142.987 76.969L143.458 76.7604L143.876 76.63L144.346 76.4997L144.947 76.4215L145.626 76.3432L145.704 76.8125V77.2818L145.626 77.7511L145.495 78.1422L145.286 78.5593L145.025 78.9504L144.764 79.2893L144.424 79.6282L143.014 80.984L141.603 82.2615L142.413 82.3397L143.301 82.6004L144.163 82.8611L144.842 82.9915L144.032 83.5911L143.092 84.1907L142.151 84.7904L141.08 85.39L140.009 85.9897L138.938 86.6675L137.867 87.3975L136.848 88.2057L137.318 88.284L137.919 88.5447L138.18 88.6229L138.441 88.7532L138.65 88.8315L138.859 88.7532L137.501 89.4832L135.829 90.2915L135.019 90.7086L134.34 91.0997L134 91.3082L133.791 91.5168L133.66 91.7254L133.53 91.934L133.608 92.1947L133.739 92.4032L134 92.6118L134.209 92.8204L134.131 93.0811L134 93.2897L133.739 93.4982L133.478 93.7068L132.877 94.0457L132.067 94.3847L131.257 94.6454L130.525 94.9061L129.977 95.1668L129.559 95.3754L130.917 96.7311L130.447 97.2004L129.977 97.5393L129.559 97.7479L129.088 97.9565L128.148 98.0868H126.868L126.998 98.6865L127.207 99.2861L127.338 99.964L127.469 100.642L126.319 101.502L124.908 102.519L123.367 103.536L121.616 104.553L120.597 105.1L119.579 105.569L118.507 105.986L117.358 106.378L116.156 106.795L114.954 107.081L113.596 107.342L112.185 107.551L114.667 107.629H116.835L118.847 107.42L120.676 107.212L122.348 106.873L123.837 106.456L125.326 105.908L126.737 105.361L128.618 104.474L130.447 103.458L132.197 102.389L134.026 101.32L132.955 100.772L131.884 100.433L131.335 100.225L130.787 99.964L130.186 99.7032L129.585 99.3643L130.133 98.9472L130.734 98.6865L131.466 98.4257L132.276 98.2172L133.896 97.8783L135.594 97.6697L137.083 97.4611L138.441 97.3307L138.99 97.2004L139.46 97.07L139.722 96.9397L139.931 96.7311L139.852 96.6529L139.722 96.5225L139.513 96.4443L139.251 96.314L138.468 96.2618L137.527 96.1315L136.587 96.0532L135.646 95.9229L134.836 95.7143L134.287 95.5057L136.116 95.0886L137.945 94.6975L139.565 94.3586L140.923 94.0197L142.073 93.6807L143.092 93.2636L143.536 93.1072L143.876 92.8986L144.215 92.69L144.477 92.4293L144.398 92.3511L144.268 92.2207L144.006 92.1425L143.667 92.0643L142.805 91.9861H141.786L140.714 91.9079L139.696 91.8297L138.833 91.6993L138.285 91.569L138.755 91.3604L139.225 91.1518L140.845 90.6825L142.256 90.2915L143.536 89.9525L144.738 89.5354L146.018 89.1443L147.298 88.5968L147.899 88.2579L148.448 87.919L148.657 87.7104L148.866 87.4497L149.075 87.2411L149.153 87.0325L149.075 86.824L148.866 86.6936L148.657 86.6154H146.776L145.914 86.6936H144.712L144.372 86.6154L144.111 86.485L143.85 86.3547L146.541 84.6079L149.022 82.9915L151.243 81.5836L153.203 80.2279L154.013 79.55L154.744 78.8722L155.345 78.1943L155.894 77.5165L156.312 76.7865L156.651 76.0565L156.86 75.2482V74.3618H156.39L155.92 74.44L155.371 74.6486L154.822 74.8572L153.751 75.535L152.602 76.2129L152.001 76.5518L151.452 76.8907L150.851 77.1515L150.25 77.36L149.702 77.4904L149.153 77.5686H148.552L148.004 77.36L149.623 76.1607L151.452 74.6225L153.542 72.7975L155.632 70.79L157.722 68.6261L159.682 66.4622L160.544 65.315L161.406 64.2461L162.138 63.1772L162.817 62.1604L162.948 61.8997L163.026 61.6911L162.948 61.4304L162.869 61.2218L162.791 61.0132L162.582 60.8829L162.373 60.6743L162.164 60.5961L161.903 60.4657L161.641 60.3875H161.093L160.831 60.4657L160.492 60.544L160.283 60.7525L160.022 60.9611L158.82 62.1604L157.409 63.5682L155.92 65.1065L154.3 66.6447L152.68 68.0525L151.06 69.4082L150.25 69.9557L149.519 70.425L148.709 70.8422L148.03 71.1811L148.5 70.79L149.101 70.1904L149.911 69.3822L150.773 68.3654L152.732 66.019L154.901 63.2554L155.998 61.8215L157.017 60.3354L158.036 58.9275L158.924 57.4415L159.734 56.0857L160.413 54.8865L160.962 53.7393L161.302 52.8007L161.38 52.4618V51.9143L161.302 51.7057L161.171 51.4972L161.04 51.2886L160.91 51.1582L160.701 51.08L160.283 50.8715L159.813 50.7411H158.872L158.611 50.8193L158.402 50.8975L158.14 51.0279L157.931 51.2365L157.383 51.7057L156.834 52.3836L155.632 53.9218L154.352 55.8772L152.941 57.9629L151.4 60.1268L150.512 61.1436L149.702 62.1604L148.84 63.0207L147.899 63.829L149.101 61.6129L150.303 59.0579L150.982 57.65L151.583 56.2422L152.184 54.7561L152.732 53.27L153.203 51.7318L153.673 50.2457L153.986 48.7857L154.248 47.2997L154.378 45.8918L154.457 44.5361L154.378 43.8582L154.3 43.2586L154.222 42.659L154.091 42.0593L154.013 41.8507L153.882 41.6422L153.673 41.4336L153.542 41.3032L153.072 41.0947L152.602 40.9643H152.131L151.713 41.0425L151.583 41.1207L151.374 41.199L151.295 41.3293L151.217 41.5379L150.538 43.754L149.937 45.97L149.336 48.3165L148.735 50.6107L148.134 52.905L147.324 55.069L146.932 56.1379L146.462 57.0765L145.914 58.0932L145.313 58.9536L145.704 56.9982L145.966 55.2515L146.227 53.635L146.358 52.149L146.488 50.8715L146.567 49.7243V48.7857L146.488 47.9775L146.358 47.2997L146.149 46.7522L146.018 46.5436L145.887 46.335L145.757 46.2047L145.548 46.1265L145.339 46.0482L145.13 45.97H144.921L144.712 46.0482L144.163 46.1786L143.614 46.4393L143.144 48.6032L142.674 50.689L142.125 52.6443L141.524 54.5215L140.845 56.3986L140.114 58.2757L139.304 60.2311L138.363 62.1865L137.684 63.464L137.005 64.7415L136.273 66.019L135.541 67.2965L134.732 68.4957L133.922 69.695L133.033 70.8943L132.171 72.0936L130.551 74.1011L128.853 75.9782L127.103 77.8554L125.274 79.6022L123.393 81.349L121.433 82.9654L119.422 84.5036L117.332 85.9897L115.921 86.9282L114.432 87.8668L112.943 88.7532L111.453 89.6136L109.102 90.6825L106.751 91.7515L104.321 92.6379L101.891 93.4982L99.8795 94.0979L97.8678 94.6975L95.7777 95.1668L93.6877 95.6361L91.5976 95.975L89.4291 96.2357L87.3391 96.4965L85.1706 96.6268L84.9616 96.705L84.7526 96.7832L84.3607 96.9918L83.8904 97.3307L83.2112 97.9304L82.3229 98.7386L81.2517 99.8075L79.9715 101.215L78.7697 102.623L77.3589 104.161L76.6274 104.891L75.8959 105.621L75.0337 106.299L74.1716 106.977L73.4923 107.446L72.813 107.864L72.0815 108.203L71.35 108.541L69.7301 109.219L68.1103 109.819L66.4905 110.419L65.0797 110.966L64.4788 111.227L63.8779 111.566L63.3293 111.826L62.9113 112.087L62.5194 112.504L62.1797 112.843L61.9707 113.182L61.8401 113.521L61.7617 113.99V114.434"
            fill="#D9E6F7"
          />
        </svg>
      )
    },
    {
      name: "Всемирная история",
      link: "historyb",
      img: (
        <svg
          width="87"
          height="102"
          viewBox="0 0 87 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M85.4217 88.6125H80.7085V79.8575C80.7085 79.0075 79.995 78.3062 79.1302 78.3062H74.417V57.5238C74.417 56.9712 74.1143 56.4613 73.617 56.185C73.1198 55.9088 72.5144 55.9088 72.0388 56.2063L65.704 59.925L58.0072 53.125C57.791 52.9338 57.5316 52.8063 57.2505 52.7637L49.705 51.4038L56.9046 46.6862L66.3526 49.0875C66.8499 49.215 67.3688 49.0875 67.7796 48.7688L73.8981 43.6263C74.244 43.3288 74.4386 42.9037 74.4386 42.4575V27.7738C81.5084 27.0087 87.0216 21.1012 87.0216 13.9613C87 6.2475 80.6653 0 72.8603 0H14.1613C6.35636 0 0 6.2475 0 13.9188C0 21.0588 5.51317 26.9662 12.583 27.7313V78.3062H7.86978C7.00497 78.3062 6.2915 79.0075 6.2915 79.8575V88.6125H1.57828C0.713469 88.6125 0 89.2925 0 90.1425V100.449C0 101.299 0.713469 102 1.57828 102H85.4433C86.3081 102 87.0216 101.299 87.0216 100.449V90.1425C87 89.2925 86.3081 88.6125 85.4217 88.6125ZM62.6772 61.3913L64.45 62.9637C64.9689 63.41 65.704 63.495 66.3094 63.1337L71.2604 60.2225V78.285H62.6556V61.3913H62.6772ZM50.9374 54.74L56.2343 55.6962L59.5422 58.6075V78.285H50.9374V54.74ZM71.2821 41.6925L66.331 45.8575L62.6772 44.9225V32.4487C62.6772 31.5988 61.9637 30.8975 61.0989 30.8975C60.2341 30.8975 59.5206 31.5988 59.5206 32.4487V44.1362L56.9694 43.4987C56.537 43.3925 56.083 43.4775 55.7155 43.7113L50.9157 46.8562V22.1425C50.9157 21.2925 50.2023 20.5912 49.3375 20.5912C48.4727 20.5912 47.7592 21.2925 47.7592 22.1425V48.8963L44.6891 50.915C44.1486 51.255 43.8892 51.8925 44.0189 52.5087C44.1486 53.125 44.6459 53.5925 45.2729 53.72L47.7592 54.1662V78.3062H39.1543V22.1425C39.1543 21.2925 38.4408 20.5912 37.576 20.5912C36.7112 20.5912 35.9978 21.2925 35.9978 22.1425V78.285H27.4578V32.4487C27.4578 31.5988 26.7443 30.8975 25.8795 30.8975C25.0147 30.8975 24.3012 31.5988 24.3012 32.4487V78.3062H15.7179V27.7313C22.2689 27.0088 27.4794 21.8875 28.2145 15.47H58.7855C59.5206 21.9088 64.7311 27.03 71.2821 27.7313V41.6925ZM3.13494 13.9188C3.13494 7.9475 8.06436 3.1025 14.1397 3.1025H72.8603C78.9356 3.1025 83.8651 7.9475 83.8651 13.9188C83.8651 19.89 78.9356 24.735 72.8603 24.735C66.785 24.735 61.8556 19.89 61.8556 13.9188C61.8556 13.0688 61.1421 12.3675 60.2773 12.3675H26.7227C25.8578 12.3675 25.1444 13.0688 25.1444 13.9188C25.1444 19.89 20.215 24.735 14.1397 24.735C8.08598 24.735 3.13494 19.8687 3.13494 13.9188ZM9.42644 81.3875H77.5519V88.5912H9.42644V81.3875ZM83.8651 98.8975H3.13494V91.6938H83.8434V98.8975H83.8651Z"
              fill="#D9E6F7"
            />
            <path
              d="M19.9124 13.9188C19.9124 10.795 17.318 8.245 14.1398 8.245C10.9616 8.245 8.36719 10.795 8.36719 13.9188C8.36719 17.0425 10.9616 19.5925 14.1398 19.5925C17.318 19.5925 19.9124 17.0425 19.9124 13.9188ZM11.5237 13.9188C11.5237 12.495 12.6912 11.3475 14.1398 11.3475C15.5884 11.3475 16.7559 12.495 16.7559 13.9188C16.7559 15.3425 15.5884 16.49 14.1398 16.49C12.7129 16.49 11.5237 15.3213 11.5237 13.9188Z"
              fill="#D9E6F7"
            />
            <path
              d="M72.8605 19.5713C76.0387 19.5713 78.6331 17.0213 78.6331 13.8975C78.6331 10.7738 76.0387 8.22375 72.8605 8.22375C69.6823 8.22375 67.0879 10.7738 67.0879 13.8975C67.0879 17.0213 69.6823 19.5713 72.8605 19.5713ZM72.8605 11.3263C74.3091 11.3263 75.4766 12.4738 75.4766 13.8975C75.4766 15.3213 74.3091 16.4688 72.8605 16.4688C71.4119 16.4688 70.2445 15.3213 70.2445 13.8975C70.2228 12.495 71.4119 11.3263 72.8605 11.3263Z"
              fill="#D9E6F7"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="87" height="102" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },    {
      name: "География",
      link: "geography",
      img: (
        <svg
          width="121"
          height="122"
          viewBox="0 0 121 122"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M111.675 62.9405C111.93 63.7892 112.176 64.596 112.431 65.4447C112.241 65.5892 112.046 65.7338 111.856 65.8737C110.728 65.841 110.89 65.5053 109.563 65.8737C108.184 66.2561 108.579 66.1255 107.952 65.3001C107.933 65.2675 107.91 65.2302 107.892 65.1975C109.15 64.4327 110.417 63.7053 111.675 62.9405ZM111.665 62.8985C110.375 63.584 109.085 64.2695 107.799 64.955C107.525 64.6193 107.39 64.0317 107.673 63.7333C107.613 63.6633 107.557 63.5887 107.502 63.5187C107.984 63.0384 110.333 61.6628 111.006 61.5322C111.043 61.4436 111.08 61.355 111.122 61.2711C111.354 61.5835 111.856 62.4788 111.665 62.8985ZM105.51 55.7171C107.047 55.2042 107.683 54.7891 109.057 54.1036C110.324 53.4694 111.494 53.0124 112.649 52.4575C113.559 52.0238 118.869 48.7316 119.31 48.8342C119.449 49.6502 119.589 50.4663 119.728 51.2824C118.335 52.3922 113.081 53.9451 112.617 54.999C114.993 53.8705 117.375 52.7373 119.751 51.6088C119.756 52.3083 119.765 53.0078 119.77 53.7073C118.558 54.6679 115.184 55.9083 113.698 56.9995C112.273 58.0441 108.481 59.4151 107.683 60.5996C111.693 58.4032 115.704 56.2114 119.714 54.0197C119.747 54.0523 119.779 54.0897 119.812 54.1223C119.83 54.5746 119.853 55.0223 119.872 55.4746C118.586 56.3933 116.112 56.5612 114.956 57.6011C113.726 58.7156 110.988 59.1353 111.076 60.954C111.094 60.9819 111.108 61.0146 111.127 61.0426C109.98 61.7001 108.834 62.3623 107.687 63.0198C107.673 62.9871 107.362 60.954 107.358 60.87C107.265 59.3218 106.736 60.0073 106.04 59.3778C105.863 58.142 105.691 56.9436 105.51 55.7171ZM34.0142 34.3688C34.4645 34.0377 35.4485 33.0211 35.8616 33.3102C35.7781 33.3475 35.6945 33.3848 35.611 33.4175C35.6713 33.4874 35.727 33.5574 35.7827 33.6273C35.2675 34.1636 34.6083 34.6952 34.0142 34.3688ZM82.3437 31.7294C82.5665 30.461 82.4133 31.0672 81.5453 30.6382C80.5195 30.1299 82.2323 30.0086 82.4179 30.004C83.5319 29.976 84.14 29.9107 85.3515 29.99C86.7858 30.0832 87.2082 29.7661 88.4753 29.8874C89.8075 30.0179 90.657 29.0853 91.4971 29.1226C91.3439 29.2905 91.1954 29.463 91.0422 29.6309C90.9819 29.9107 90.9215 30.1952 90.8612 30.4749C89.4548 30.6522 89.5569 31.0066 89.102 32.0325C88.0808 31.7993 88.0854 30.6148 87.171 30.9459C86.5212 31.7014 87.3149 32.8252 87.9276 33.4081C88.9581 34.3874 88.1319 35.4133 88.6935 36.9196C88.5589 37.0968 88.4243 37.274 88.2897 37.4512C88.4429 37.3952 88.6007 37.3439 88.7539 37.288C88.7817 37.5165 88.8096 37.7496 88.8374 37.9781C88.1829 39.2512 87.482 37.8942 86.874 37.5304C86.2009 37.6564 86.3077 38.5843 85.0637 37.1714C84.4371 36.4626 84.3814 36.0335 83.894 35.3107C83.2999 34.4294 83.6387 34.1822 82.896 33.4874C82.3947 33.0164 81.5174 33.0351 80.9465 32.3542C80.9326 32.3123 80.914 32.2703 80.9001 32.233C81.3875 32.0651 81.8656 31.8972 82.3437 31.7294ZM65.0022 29.2485C65.3736 29.2765 65.536 27.7376 66.9053 27.3179C67.286 27.635 67.6666 27.9521 68.0472 28.2739C68.024 28.2459 68.0054 28.2133 67.9822 28.1853C66.4597 28.9874 64.9373 29.7894 63.4148 30.5915C63.4008 30.2138 63.5262 30.2884 63.4844 29.9247C63.4566 29.6635 63.4287 29.4024 63.4008 29.1366C63.9346 29.1739 64.4684 29.2112 65.0022 29.2485ZM92.7504 26.348C92.7272 26.3946 92.6993 26.4412 92.6761 26.4925C93.2656 26.9449 93.8551 27.3972 94.4446 27.8495C93.7019 28.2273 92.9546 28.605 92.2119 28.9827C91.8638 28.6703 91.8916 28.3625 91.0747 28.563C90.6477 28.6703 90.1232 28.8801 89.8214 29.034C89.3294 29.2858 88.0112 29.4117 87.5749 29.104C89.3016 28.1853 91.0283 27.2666 92.7504 26.348ZM40.3548 27.5418C40.9628 27.4112 41.3156 26.7677 41.8401 26.4506C42.0722 26.3107 43.0005 26.5951 43.2837 27.0381C42.8102 27.2247 40.7632 27.9894 40.3548 27.5418ZM25.9284 27.7096C26.0769 27.705 26.2301 27.705 26.3786 27.7003C27.2188 27.0988 28.0543 26.4925 28.8944 25.891C28.9826 25.9236 29.0661 25.9609 29.1543 25.9936C29.1683 26.0542 29.1868 26.1195 29.2008 26.1801C29.4328 26.2081 29.6696 26.2407 29.9017 26.2734C28.6066 27.2013 27.3116 28.1293 26.0165 29.0527C25.9933 28.605 25.9608 28.1573 25.9284 27.7096ZM25.9284 27.7096C25.7195 27.3785 25.9562 26.8889 25.9701 26.5298C25.9887 26.0635 26.3786 26.0962 26.6525 25.9003C27.1352 25.9329 27.6179 25.9609 28.1007 25.9936C27.3766 26.5625 26.6525 27.1361 25.9284 27.7096ZM82.3669 22.1464C81.0904 24.7345 78.9738 22.7013 79.2941 25.4386C77.999 26.0868 76.704 26.7397 75.409 27.3879C75.395 27.3552 75.3857 27.3273 75.3765 27.2946C75.0051 26.7956 74.6384 26.3013 74.2671 25.8024C76.9639 24.5853 79.6654 23.3682 82.3669 22.1464ZM105.501 55.6891C104.814 55.5213 104.127 55.3534 103.44 55.1855C103.542 54.7798 104.926 54.542 105.441 54.1876C106.091 53.7399 106.866 53.0124 107.284 52.7933C108.37 52.2197 110.356 51.0539 111.303 50.4197C110.83 50.0979 107.785 52.1591 107.181 52.5694C106.685 52.9052 105.9 53.4881 105.288 53.9404C104.471 54.542 103.575 54.3741 103.046 55.1296C101.574 54.099 102.786 53.5067 102.182 52.3503C102.201 52.3969 102.219 52.4435 102.238 52.4902C102.814 52.257 103.389 52.0285 103.965 51.7953C103.937 51.7207 103.909 51.6508 103.881 51.5762C103.343 51.8 102.809 52.0192 102.271 52.243C101.644 50.7694 101.783 51.0072 100.251 50.3964C99.388 50.0513 98.3715 49.9813 97.6149 49.6316C97.8887 48.7782 102.66 47.1927 102.916 46.1808C101.013 47.2627 99.1095 48.3445 97.2064 49.4264C95.4797 48.1906 95.4704 49.2585 94.8113 48.8855C94.7927 48.8435 94.7695 48.8062 94.7463 48.7642C99.6479 46.1108 104.55 43.4574 109.451 40.8041C108.69 40.6035 104.763 43.173 103.802 43.6673C102.127 44.53 99.3416 45.7471 97.8702 46.6984C96.9325 47.3046 95.9949 47.8875 95.0202 48.4331C94.2775 48.8482 93.7483 49.93 92.4672 49.0953C91.8545 48.6989 90.8333 47.0342 89.659 47.7943C89.1205 48.1393 89.2505 48.573 88.5171 48.0974C88.2711 47.9342 87.4727 47.2673 87.2917 47.0295C87.2592 46.9735 87.2314 46.9222 87.1989 46.8663C89.9793 45.2481 92.7596 43.63 95.5447 42.0118C95.0341 41.7274 88.2293 46.0129 87.2267 46.6191C87.2546 46.5818 87.2824 46.5399 87.3103 46.5025C86.5723 45.9709 85.8296 45.4393 85.0915 44.9077C85.0915 44.8611 85.0915 44.8144 85.0915 44.7678C86.2148 44.1289 87.3381 43.4947 88.4568 42.8559C88.4382 42.8186 88.4196 42.7813 88.4011 42.7486C87.2082 43.3502 86.0153 43.9517 84.8223 44.558C84.5717 44.3108 84.3164 44.0637 84.0657 43.8165C84.7109 43.173 85.8435 42.716 85.2865 41.373C84.5067 39.4937 83.2627 39.7408 83.1188 39.5356C83.8476 39.1346 84.5717 38.7336 85.3004 38.3325C84.1446 37.6097 82.4875 41.746 78.7556 39.2512C78.7324 39.2046 78.7092 39.1626 78.6906 39.116C79.5308 38.6963 80.3756 38.2766 81.2157 37.8569C81.1879 37.7916 81.1554 37.731 81.1229 37.6657C80.227 38.104 79.3265 38.5424 78.4307 38.9807C78.4539 39.0367 78.4818 39.088 78.505 39.1439C77.3956 38.6077 74.0582 37.3532 73.7286 36.4626C73.7101 36.4253 73.6869 36.3833 73.6683 36.346C75.8592 35.1615 78.0454 33.9817 80.2363 32.7972C79.2987 32.6947 74.4342 35.6185 73.3805 36.2387C72.7028 35.3574 71.9323 35.9449 71.2407 35.847C70.9251 35.8004 70.4284 35.6325 70.0849 35.5299C69.5465 35.362 69.2633 35.5299 68.9245 35.46C73.0324 33.3522 77.1357 31.2397 81.2389 29.1319C81.2204 29.0946 81.2018 29.062 81.1879 29.0247C80.6309 28.8475 73.2784 33.0724 71.9184 33.66C70.9436 34.0843 68.0658 35.7864 67.2952 35.5812C66.1487 35.2734 63.8604 37.0595 62.751 35.8097C63.5772 35.3807 64.4035 34.947 65.2297 34.518C64.6077 34.5506 63.2105 35.2688 62.5886 35.5486C62.4911 35.5905 60.0542 35.917 59.9799 35.9076C59.9706 35.889 60.3791 33.5574 60.6065 33.3522C61.5906 32.4755 61.9294 31.1604 62.3333 30.8667C62.8578 30.9599 62.2451 31.3563 63.1966 30.918C63.5865 30.7361 63.8604 30.6895 64.2921 30.447C64.979 30.0646 65.7728 29.4257 66.4829 29.1552C67.0353 28.9407 68.2607 28.3765 68.8177 28.521C69.2076 28.6236 69.4351 28.9967 69.8482 29.0666C70.3263 29.1459 70.758 28.9547 71.2639 29.104C71.2314 29.1879 61.7484 33.2496 60.7365 34.5366C61.1032 34.7045 67.1467 31.1138 68.2746 30.7687C68.9848 30.5496 71.2036 29.533 71.9462 29.1646C73.0602 28.6096 75.3625 29.1133 76.1284 28.7962C76.639 28.2226 75.6318 28.2459 75.655 27.5464C76.2491 27.1034 77.8737 26.5578 78.5885 26.1941C79.4751 25.7371 80.9511 25.6065 80.7794 26.8842C79.113 27.7096 77.4513 28.535 75.7849 29.3604C75.8174 29.4257 75.8453 29.4863 75.8778 29.5516C77.5488 28.7402 79.2198 27.9288 80.8908 27.1174C81.3596 27.3972 81.095 27.7703 82.2926 27.7609C82.8542 27.7563 83.6062 28.2226 84.1168 27.9615C84.9152 27.5511 86.317 26.6931 87.12 26.1987C87.677 25.8583 93.4652 22.4868 93.4884 22.4868C93.9804 23.6479 92.8478 23.5034 92.4626 24.2215C92.0123 25.0749 92.4951 25.392 92.5508 26.0589C92.133 26.5998 86.4516 29.5516 85.8621 29.5143C84.8316 29.449 78.8252 28.6843 81.5314 31.1978C81.3875 31.3516 79.8093 31.6594 80.7237 32.8346C81.3132 33.5947 82.2694 33.5294 82.8635 34.0377C82.7614 34.1403 82.6547 34.2475 82.5525 34.3501C83.2766 34.3501 83.0446 35.1802 83.8615 36.0196C83.8336 36.0988 83.8058 36.1781 83.7733 36.2574C83.3927 36.4532 81.8099 37.0874 82.0884 37.4885C82.6964 37.1434 83.3045 36.803 83.9126 36.4579C84.5717 36.9149 85.4304 39.1626 86.7254 38.2952C87.431 38.5983 88.0158 39.2978 88.8328 38.9201C89.7286 38.5051 89.2552 37.6657 89.2227 36.9755C90.1139 36.4486 91.0051 35.9216 91.8916 35.3993C91.8684 35.3574 91.8452 35.3107 91.8174 35.2688C90.9262 35.7444 90.0303 36.2247 89.1391 36.7004C89.0927 36.6631 89.0463 36.6258 88.9952 36.5838C88.9488 35.9776 88.907 35.3714 88.8606 34.7651C88.8142 34.7185 88.7724 34.6719 88.726 34.6252C90.0814 33.7625 91.4321 32.9045 92.7875 32.0418C91.5528 32.7226 90.3227 33.4081 89.0881 34.089C88.5728 33.5667 87.1896 32.2097 87.4681 31.5522C88.0901 31.6454 88.5867 32.8998 89.4594 32.6154C89.6404 32.1537 89.8261 31.6921 90.0071 31.2304C90.2903 31.2071 90.578 31.1791 90.8612 31.1558C91.6317 30.4749 91.6921 29.4537 92.639 29.006C93.1217 28.7822 94.7324 27.8822 95.0851 27.9941C96.0321 28.3019 97.406 27.9381 97.7216 26.9122C98.209 25.3267 97.3456 25.35 96.408 24.8184C96.6308 24.3055 103.955 20.5469 104.735 20.2997C105.329 20.8174 105.924 21.335 106.518 21.8526C106.49 21.8713 106.467 21.8899 106.439 21.9039C105.371 22.4448 104.308 22.9858 103.241 23.5267C103.264 23.578 103.292 23.6293 103.315 23.6806C104.434 23.1723 105.557 22.6687 106.675 22.1604C106.708 22.2023 106.74 22.249 106.778 22.2909C107.59 23.3868 108.402 24.4827 109.21 25.5832C107.492 26.264 94.0268 33.5294 93.8969 34.2149C94.1568 34.4107 97.2296 32.247 97.7309 31.9579C99.0352 31.2024 100.353 30.5309 101.653 29.7755C103.241 28.8521 107.673 26.4086 109.224 25.8583C109.256 25.835 109.289 25.8164 109.321 25.793C109.683 26.3806 110.05 26.9682 110.412 27.5558C107.789 28.9221 105.167 30.2931 102.54 31.6594C102.572 31.7247 102.605 31.79 102.637 31.8553C105.306 30.4983 107.975 29.1459 110.644 27.7889C111.067 28.521 111.494 29.2485 111.916 29.9806C111.285 30.3957 108.476 31.5708 108.425 32.1397C109.651 31.5009 110.876 30.862 112.102 30.2231C112.505 30.8853 112.909 31.5522 113.318 32.2143C113.021 32.4289 112.724 32.6387 112.431 32.8532C112.459 32.8998 112.487 32.9511 112.515 32.9978C112.821 32.8532 113.127 32.7086 113.434 32.5641C113.889 33.3522 114.339 34.1356 114.794 34.9237C112.849 35.9496 110.909 36.9755 108.964 38.0014C108.996 38.0667 109.029 38.132 109.061 38.1973C111.011 37.218 112.956 36.2434 114.905 35.2641C115.184 35.8517 115.458 36.4393 115.736 37.0315C113.903 38.0387 112.074 39.046 110.24 40.0533C110.273 40.1139 110.305 40.1745 110.338 40.2351C112.162 39.2512 113.986 38.2719 115.806 37.288C116.01 37.8429 116.214 38.3932 116.418 38.9434C114.798 40.5569 105.069 44.5486 104.638 45.5979C108.606 43.5227 112.57 41.4476 116.539 39.3724C116.572 39.3678 116.604 39.3678 116.637 39.3631C117.008 40.6781 117.379 41.9978 117.751 43.3129C117.783 43.3642 117.816 43.4108 117.848 43.4621C113.592 45.8917 109.335 48.3212 105.079 50.7508C105.111 50.8067 105.139 50.8627 105.172 50.9186C109.433 48.5311 113.698 46.1435 117.959 43.7512C118.168 44.4927 118.382 45.2341 118.591 45.9756C117.31 46.8663 113.805 48.0881 112.793 49.6316C114.668 48.4751 116.544 47.3186 118.419 46.1575C118.442 46.1948 118.461 46.2321 118.484 46.2647C119.547 48.4704 119.296 48.5217 117.203 49.5803C115.991 50.1912 114.385 51.2917 113.243 51.7627C112.543 52.0565 105.589 55.5399 105.501 55.6891ZM97.4988 25.9936C96.9325 28.8288 93.1403 27.234 92.7643 25.2428C92.5136 23.9044 94.0268 24.7112 94.05 22.7619C94.0547 22.3003 94.7649 21.9272 95.1316 21.722C95.9949 21.2324 96.032 21.363 96.8072 21.6241C97.6195 23.8298 96.1156 23.7692 94.9877 24.5759C95.048 24.7298 95.1037 24.879 95.164 25.0329C96.111 25.0936 96.8211 25.5179 97.4988 25.9936ZM79.6979 25.2568C79.3498 24.4547 80.849 24.1283 81.4849 23.8858C82.5804 23.4661 82.8403 21.9692 83.5551 21.5029C85.6114 20.1505 89.3433 22.1044 88.9442 22.8412C88.3732 23.8904 88.0065 23.3495 86.7626 23.3355C85.1333 23.3169 85.2865 24.2448 84.9941 25.378C84.7759 26.2221 84.2653 27.677 83.1745 27.3785C80.0507 26.5158 82.2926 27.2899 80.4638 25.5832C80.4916 25.4386 80.5241 25.2894 80.552 25.1449C80.2688 25.1822 79.981 25.2195 79.6979 25.2568ZM31.2663 17.8562C31.2802 17.9588 31.2942 18.0614 31.3081 18.1686C30.9089 18.4111 30.5097 18.6536 30.1059 18.9008C29.9249 18.6816 30.0455 18.4158 30.2776 18.1593C30.2591 18.0707 30.2359 17.9774 30.2126 17.8888C30.5654 17.8795 30.9135 17.8702 31.2663 17.8562ZM37.8018 15.4873C37.8297 15.5152 37.8622 15.5432 37.89 15.5759C38.0943 15.7764 38.3031 15.9769 38.5074 16.1774C36.2608 17.637 34.0142 19.0966 31.7676 20.5562C31.7815 20.5935 31.7955 20.6355 31.8094 20.6728C31.5959 20.393 31.387 20.1085 31.1735 19.8241C33.3829 18.3785 35.5924 16.9329 37.8018 15.4873ZM85.8992 20.435C87.4217 19.3018 90.578 18.3085 92.5415 17.0728C93.8597 16.2427 97.2435 14.2935 98.7428 14.2562C99.3184 14.8018 99.8893 15.352 100.465 15.8976C99.9821 16.1914 95.8185 18.2106 95.8882 18.6163C95.9578 18.6163 99.0631 16.9982 99.3277 16.8443C100.901 15.9163 100.883 16.1121 102.247 17.7489C100.521 18.6396 98.7939 19.5303 97.0718 20.4256C97.0996 20.4863 97.1321 20.5422 97.16 20.6028C97.2389 20.6448 100.567 18.9008 100.971 18.6956C103.412 17.4505 102.916 18.3785 104.536 20.0526C102.071 21.3163 99.6062 22.5801 97.1461 23.8485C97.6056 22.9811 97.5824 21.3023 96.6819 20.6961C94.5978 20.8174 87.4217 26.3013 84.8363 27.2387C85.0266 26.5811 85.3886 26.0402 85.5371 25.2055C85.6996 24.2961 85.4814 24.1003 86.6233 23.9044C87.3706 23.7785 88.2804 24.2122 88.9024 23.965C89.478 23.7319 89.7054 22.7806 89.5058 22.2117C89.3016 22.0251 88.1783 21.2417 87.8302 21.0272C87.0086 20.5282 86.1823 20.5749 85.8992 20.435ZM37.0452 14.1163C37.2077 14.522 37.3702 14.9277 37.5373 15.3334C35.3464 16.7836 33.1601 18.2339 30.9692 19.6842C30.9785 19.7262 30.9878 19.7681 31.0017 19.8148C30.765 19.5769 30.5329 19.3391 30.2962 19.1013C30.8903 18.5417 31.6144 18.0847 32.3432 18.0334C34.0653 17.9075 33.4804 17.2779 33.5825 16.3127C34.7337 15.5805 35.8895 14.8484 37.0452 14.1163ZM73.0649 24.921C75.1351 23.8625 77.4467 22.6593 79.4565 21.5075C81.7542 20.1878 83.7362 19.437 85.9828 18.3039C87.1246 17.7256 87.8487 16.9515 88.8977 16.4292C89.7611 16.0049 91.1165 15.2354 91.9056 14.6898C92.9453 13.9717 94.1707 13.4914 95.3265 13.0064C95.9114 12.7593 96.4173 12.209 97.0068 12.7639C97.406 13.137 98.2276 13.622 98.39 13.9577C97.4756 14.0883 93.0846 16.35 92.1655 16.9748C90.397 18.1733 88.0158 19.092 86.0431 20.0946C84.6831 20.7894 83.9218 20.2438 82.7985 21.4749C82.52 21.7826 80.3059 22.8226 79.7907 23.0604C79.1919 23.3355 74.1139 25.6205 73.9654 25.6438C73.6637 25.4107 73.3666 25.1635 73.0649 24.921ZM27.1816 13.7665C27.2048 13.7992 27.2327 13.8318 27.2559 13.8644C27.3209 14.0183 26.62 15.1375 26.5364 15.4826C26.3786 16.1121 25.933 16.6391 25.376 16.6391C25.4781 16.4013 25.5849 16.1588 25.6916 15.9209C25.9284 15.7297 26.1697 15.5386 26.4065 15.3474C26.3879 15.3194 26.374 15.2914 26.3554 15.2681C26.0444 15.4639 25.738 15.6551 25.427 15.851C25.4317 15.9209 25.441 15.9909 25.4456 16.0608C25.311 16.1541 25.1718 16.252 25.0371 16.3453C25.1161 16.4386 25.195 16.5365 25.2739 16.6298C25.2553 16.6577 25.2321 16.6857 25.2135 16.7137C25.0232 16.5785 24.8376 16.4479 24.6472 16.3127C24.9257 15.8883 25.1114 15.1375 25.8355 14.9976C25.8819 14.8997 25.9237 14.8064 25.9701 14.7085C26.374 14.3961 26.7778 14.079 27.1816 13.7665ZM32.9698 15.6272C33.5965 14.9696 35.9544 13.0903 36.8178 13.1277C36.8549 13.3375 36.8874 13.552 36.9246 13.7619C35.7641 14.5453 34.5991 15.324 33.434 16.1075C33.2808 15.9443 33.123 15.7857 32.9698 15.6272ZM36.2979 11.8173C36.3304 11.8219 36.3629 11.8266 36.4 11.8313C36.5022 12.0738 36.5996 12.3162 36.7018 12.5634C35.3928 13.5194 34.0885 14.4753 32.7795 15.4313C32.5474 15.2914 32.3153 15.1515 32.0833 15.0069C33.4897 13.9437 34.8961 12.8805 36.2979 11.8173ZM28.3281 11.794C28.3885 12.6147 27.1909 13.6173 26.5271 13.7992C26.0212 14.2888 25.5152 14.7784 25.0047 15.2681C24.8979 15.0069 24.7865 14.7505 24.6797 14.4893C24.7308 14.3634 24.7819 14.2375 24.8329 14.1069C25.998 13.3375 27.163 12.5634 28.3281 11.794ZM30.8811 14.6665C31.5587 13.9484 34.9379 11.3416 35.8245 11.1131C35.9405 11.253 36.0519 11.3929 36.168 11.5328C35.6063 11.9945 35.04 12.4561 34.4784 12.9178C33.5825 13.6033 32.682 14.2841 31.7815 14.9696C31.4845 14.867 31.1828 14.7691 30.8811 14.6665ZM30.3287 13.5473C30.5793 13.0251 32.2271 11.5608 32.8027 11.2204C33.6104 10.7447 34.794 9.50897 35.6574 10.6235C34.0096 11.8686 32.3618 13.1137 30.714 14.3588C30.5886 14.0883 30.4587 13.8178 30.3287 13.5473ZM31.2477 12.0131C31.6098 11.5002 31.5077 11.0805 31.9811 10.6701C32.3664 10.339 32.5706 10.2877 33.0673 9.7468C33.3783 9.82607 33.6893 9.90535 34.0003 9.98462C33.9956 10.0266 33.9956 10.0686 33.991 10.1059C33.0766 10.7447 32.1622 11.3789 31.2477 12.0131ZM24.0345 12.6147C24.1877 13.1183 24.2481 16.4712 24.3363 16.5598C26.2347 18.4344 26.6803 15.907 27.2744 14.993C27.6783 14.3727 27.98 13.8644 28.342 13.2116C28.9826 12.0598 28.7505 12.1344 29.1218 11.2577C29.6139 10.0779 31.9579 9.19653 30.8764 11.6261C30.6258 12.1903 29.6696 13.1416 29.8135 13.7012C30.1337 14.9696 30.1709 15.0069 31.3313 15.3147C33.1508 15.7997 34.1581 17.679 31.4566 17.4225C30.7697 17.3572 30.0502 17.0774 29.7392 17.7909C29.3493 18.6956 29.2518 18.9474 30.0409 19.6049C30.8161 20.2484 32.3942 22.0671 32.9652 22.9158C33.9167 24.3241 31.4613 25.6438 30.3658 25.7651C29.5582 25.8537 26.671 24.7252 25.7009 25.9563C25.1485 26.6604 25.6406 28.7635 24.9861 30.4097C24.3548 32.0045 24.8236 33.8931 26.3183 34.7138C28.1424 35.7164 27.177 37.2786 29.7485 36.5185C30.895 36.1781 33.1555 35.0356 33.7589 34.9843C34.2834 34.9423 35.3139 34.9517 35.6899 34.6019C36.1355 34.1869 36.8456 33.3289 36.3165 32.732C35.3324 31.6268 34.2184 31.1371 34.5619 29.4397C35.8152 29.1413 36.4279 30.1578 38.0943 30.1625C40.1737 30.1672 38.8973 28.3065 38.9994 27.7889C39.4821 27.5744 39.5332 28.2599 40.2619 28.2599C40.7029 28.2599 40.9211 28.1433 41.4874 28.0967C42.2393 28.0361 43.5483 27.7843 43.8361 27.1034C43.8685 27.0614 43.8964 27.0195 43.9289 26.9775C43.4183 26.5811 42.9077 26.1894 42.3925 25.793C42.36 25.835 42.3321 25.877 42.2996 25.9143C42.1929 24.8744 44.6484 24.1936 44.7969 26.8096C44.8619 27.9475 45.1821 30.1066 46.5932 30.2558C47.3777 30.3397 47.7769 29.7801 48.6124 30.4143C49.1647 30.8294 49.5454 31.375 49.2297 32.0931C48.6077 33.4874 46.8671 31.8506 46.2497 33.9211C45.6138 36.0569 48.2457 35.8563 49.0719 36.1968C50.9796 36.9848 50.4876 34.7558 50.8497 33.604C51.6991 30.8667 52.3072 32.5781 53.7925 32.9138C56.1227 33.4408 53.5604 34.5273 56.1784 36.1595C57.7287 37.1247 58.9123 35.7631 58.9634 34.3128C59.0191 32.8579 57.9144 31.5661 59.8221 31.2724C61.702 30.9879 60.2816 29.0014 61.0104 28.0594C61.4745 27.4578 61.948 27.3972 62.1894 26.4879C62.375 25.7977 62.2358 25.434 62.6767 24.7998C63.308 23.8904 65.0626 22.9391 66.158 23.4195C66.9796 23.7785 67.5923 25.1635 68.8084 25.2055C70.4887 25.2661 69.8296 23.0604 72.6332 25.2474C74.7823 26.9262 73.9793 26.3433 75.5157 28.3765C74.1093 28.3485 73.051 28.4884 71.7095 28.5444C69.319 28.647 69.9781 28.4091 68.0518 27.621C67.4299 27.3692 66.3437 25.919 65.3596 27.7563C64.3199 29.6962 62.9088 27.719 62.9088 29.2112C62.9088 31.2071 62.2915 29.2392 61.2471 31.6827C60.458 33.5294 59.9985 32.1677 59.7293 34.4061C59.5668 35.7631 58.592 36.5045 61.1032 36.3646C62.997 36.2574 62.6814 36.7144 64.3756 36.8916C65.2807 36.9848 65.7403 36.0848 67.7084 36.262C69.0777 36.3833 68.9291 35.7677 70.7533 36.2854C72.6425 36.8216 71.8534 35.5905 73.7611 37.3999C74.4945 38.0947 75.7153 38.5051 76.639 38.8641C78.5514 39.6056 80.2224 41.2937 82.3761 40.5149C83.7083 40.0346 84.1539 40.1932 84.827 41.5455C85.4768 42.8559 83.9497 43.0191 83.4855 43.9517C84.075 44.4927 84.386 45.001 84.8873 45.5093C85.4118 46.0409 86.2334 46.1155 86.5955 46.7124C86.925 47.258 88.285 49.4544 89.1205 48.8855C91.3486 47.3606 90.6477 48.7829 92.2073 49.6642C93.3816 50.3311 94.4678 49.3098 95.786 49.4217C96.2224 49.459 98.1208 50.4057 99.2255 50.6388C100.962 51.0072 101.458 51.2637 101.709 53.0544C101.881 54.2762 101.616 55.7451 103.343 55.899C104.814 56.0296 105.297 55.7917 105.367 57.7363C105.496 61.2384 106.174 59.0933 106.689 60.6042C107.214 62.1384 106.875 62.8193 106.949 64.153C107 65.1229 107.581 66.797 108.783 66.5965C109.488 66.4799 109.855 66.0789 110.663 66.2328C111.452 66.382 111.846 66.5918 112.561 65.9996C113.698 65.0576 111.132 60.7674 112.654 59.5457C112.751 59.4664 116.047 57.3213 116.084 57.3073C116.655 57.0881 119.491 56.0482 119.9 55.9689C120.749 59.9514 120.596 66.6478 119.853 70.6675C118.79 76.4033 117.43 79.8588 115.342 85.2122C113.568 89.7589 110.305 94.6413 107.279 98.4418C105.315 100.909 103.505 102.266 101.217 104.304C99.0584 106.225 97.4153 108.146 95.0434 109.895C86.4748 116.209 76.0217 119.935 65.5035 121.11C55.2779 122.252 43.8918 119.552 34.6826 115.122C32.1529 113.905 29.9666 112.739 27.6365 111.149C25.5895 109.746 22.9345 108.127 21.0406 106.71C19.2025 105.334 17.1602 102.891 15.4242 101.212C13.3586 99.2206 12.1007 97.318 10.4483 95.0143C4.66006 86.9469 1.71257 75.895 0.747097 66.0369C0.278285 61.2477 0.463953 56.3933 1.01632 51.6228C1.75899 45.2015 2.13033 42.7533 4.95712 36.845C7.42651 31.7294 9.44565 28.2552 12.9826 23.7925C16.6496 19.1712 19.8338 16.5458 24.0345 12.6147ZM40.3455 13.9624C40.4662 12.4841 41.7334 12.2276 42.7824 11.4349C43.5947 10.8147 45.3725 9.65353 46.0362 9.63954C46.1801 9.82141 46.324 9.99861 46.4679 10.1805C46.2915 10.3344 46.1151 10.4929 45.9388 10.6468C46.1105 10.6841 46.2776 10.7168 46.4493 10.7541C46.5236 10.9826 46.6025 11.2111 46.6768 11.4396C44.4627 12.708 42.2486 13.9717 40.0391 15.2401C40.0159 15.1981 39.9927 15.1562 39.9695 15.1142C40.4755 14.009 40.1784 14.466 41.1299 13.6919C41.3759 13.4867 42.5596 12.9038 42.4343 12.6147C41.738 13.067 41.0417 13.5147 40.3455 13.9624ZM29.9156 8.77218C29.8924 8.82814 27.6829 10.6002 27.3719 10.81C26.9681 11.0805 25.1346 12.3722 24.7958 12.237C26.4993 11.0758 28.2074 9.924 29.9156 8.77218ZM24.573 13.8691C24.1227 12.6054 27.3626 11.1971 28.3699 10.2831C29.0058 9.70949 31.9997 7.8815 32.7842 7.88616C33.6104 8.76751 32.5521 10.3344 31.5912 10.5442C31.4891 10.2318 31.3824 9.91467 31.2802 9.60224C31.8001 9.2898 32.3153 8.98202 32.8352 8.66959C32.4453 8.36181 31.4752 9.36907 30.5701 9.37374C29.8181 9.3784 28.9315 10.3204 28.667 10.9126C28.3977 11.5095 24.87 13.9577 24.573 13.8691ZM45.3725 8.38513C45.521 8.66492 45.6742 8.94472 45.8227 9.22451C45.1125 9.93799 44.458 9.97996 43.6643 10.4043C42.9495 10.7867 42.4018 11.3603 41.673 11.8453C41.3899 11.2297 42.9727 10.6095 42.2486 9.66286C42.2857 9.49964 42.3229 9.33643 42.3554 9.17322C43.3672 8.57166 44.3745 7.96543 45.3864 7.35921C45.4282 7.34522 45.4653 7.3359 45.5071 7.32191C45.4607 7.68098 45.4189 8.03072 45.3725 8.38513ZM48.0275 7.61569C48.4406 7.7789 49.0023 7.25196 49.4247 7.04677C49.434 7.14004 49.4432 7.2333 49.4525 7.32657C49.3922 7.49445 49.3318 7.66232 49.2715 7.83486C48.6959 8.31984 48.4824 7.90481 47.9393 7.78357C47.9718 7.72761 47.9997 7.67165 48.0275 7.61569ZM29.9156 8.77218C30.8857 8.1473 31.8558 7.51776 32.8213 6.89289C32.7934 7.62502 30.4911 8.72088 29.9156 8.77218ZM42.7174 7.81155C42.8056 7.80688 42.8891 7.80222 42.9773 7.79756C43.1444 7.66699 43.3115 7.54108 43.4786 7.41051C44.0217 7.0561 44.5602 6.70169 45.1032 6.35195C45.6556 7.0561 44.8247 7.2846 44.212 7.78823C43.8732 8.06803 42.5921 8.76751 42.2439 8.77218C42.2625 8.70223 42.2811 8.62762 42.3043 8.55767C42.3786 8.52503 42.4482 8.49238 42.5225 8.45974C42.5828 8.24057 42.6524 8.02606 42.7174 7.81155ZM48.0275 7.61569C47.9068 7.50844 47.7815 7.40584 47.6562 7.29859C47.8883 7.08408 48.1157 6.87423 48.3432 6.65972C48.3339 6.63174 48.3246 6.60843 48.3107 6.58045C48.8677 6.23537 49.4247 5.89029 49.9817 5.54054C49.991 6.93019 48.4313 7.05144 48.0275 7.61569ZM42.7174 7.81155C42.6339 7.67631 42.8195 6.28666 42.8659 6.05816C43.098 4.92499 42.7638 5.17215 43.5947 4.26281C43.8639 4.47266 44.1378 4.68251 44.407 4.89235C44.4023 5.02292 44.3931 5.15816 44.3884 5.28873C43.9196 5.61049 43.4508 5.93226 42.9866 6.25402C43.0655 6.35195 43.1444 6.44988 43.2234 6.54781C43.6597 6.16542 44.1006 5.78303 44.537 5.40065C44.6669 5.62448 44.8015 5.85298 44.9315 6.07682C44.1888 6.6504 43.4554 7.2333 42.7174 7.81155ZM53.1334 3.52136C53.9039 4.58924 52.0844 5.23277 51.5181 4.65919C52.0612 4.28147 52.5996 3.89908 53.1334 3.52136ZM51.7316 3.45141C52.1958 3.2369 52.2515 2.71461 53.0545 2.90581C53.0359 3.81514 51.2303 4.68251 50.8125 4.36074C50.5015 4.63121 50.1952 4.89702 49.8842 5.16748C49.0998 5.76904 48.3199 6.3706 47.5401 6.97216C47.4519 6.95817 47.3638 6.94418 47.2756 6.92553C47.3313 6.72967 47.3823 6.52915 47.438 6.3333C48.8352 5.35401 50.3344 4.43069 51.7316 3.45141ZM51.6341 3.38612C50.2184 4.2768 48.8073 5.16282 47.3916 6.0535C47.2616 5.79236 47.1363 5.53588 47.0063 5.27474C48.7795 4.14623 50.5572 3.01772 52.3304 1.89388C52.4464 2.08974 52.5578 2.29026 52.6739 2.48611C52.3257 2.78456 51.9776 3.08767 51.6341 3.38612ZM46.0594 2.1457C46.5004 2.3229 46.6443 1.89854 46.881 2.21098C46.259 2.34622 46.6025 2.61202 46.0455 2.59337C46.0501 2.44414 46.0548 2.29492 46.0594 2.1457ZM49.5918 1.94984C49.6103 1.98248 49.6243 2.01046 49.6428 2.03844C49.2761 2.59803 46.9739 4.011 46.324 4.15556C46.3658 4.02032 46.4122 3.88509 46.454 3.74986C47.4984 3.1483 48.5427 2.5514 49.5918 1.94984ZM58.8334 1.55346C59.3254 1.58144 59.836 1.87523 60.3466 1.64673C61.3492 1.19439 61.1775 1.86124 61.8459 1.38559C62.0408 1.44155 62.2358 1.50217 62.4307 1.55813C61.4188 2.18767 60.4069 2.81254 59.3904 3.44208C59.4136 3.28353 59.4415 3.12498 59.4647 2.96643C59.3254 2.73793 59.1119 1.76797 58.6756 1.94051C58.7267 1.80994 58.7777 1.67937 58.8334 1.55346ZM49.3643 1.39958C49.4897 1.39025 49.6103 1.38092 49.7357 1.3716C49.8935 1.3716 50.0513 1.37626 50.2045 1.37626C49.6939 1.76331 49.0069 1.81461 48.2318 2.24829C47.8001 2.49078 46.7743 3.17161 46.3519 3.47006C45.7484 2.56539 48.0275 1.87989 48.3432 1.57678C48.4128 1.61875 48.4778 1.66072 48.5474 1.70269C48.8212 1.6001 49.0905 1.4975 49.3643 1.39958ZM73.0649 24.921C72.5125 24.5433 71.9648 24.1702 71.4124 23.7925C71.4171 23.7645 76.509 20.5096 77.0614 20.2251C78.0176 19.7401 79.3683 19.2039 80.176 18.5697C81.0393 17.8888 82.0837 17.9121 82.9703 17.1567C84.5392 15.8277 86.5073 14.7551 88.3222 13.7525C89.3109 13.2069 90.3924 13.1323 91.2279 12.4655C91.6224 12.1484 93.6091 10.8567 93.739 10.6888C92.5554 10.7867 91.9241 11.682 90.9447 12.3815C90.1278 12.9644 89.1252 13.0064 88.234 13.538C86.4144 14.6246 84.8363 15.422 83.0817 16.709C81.8331 17.623 79.1084 18.8448 77.6045 19.6422C75.8035 20.5982 74.1464 21.7687 72.4104 22.8319C71.5703 23.3448 70.2102 23.8438 69.6022 24.3101C68.451 25.1915 67.843 24.1842 67.2024 23.5547C65.6567 22.0485 63.0991 23.0137 62.078 24.6505C61.4699 25.6298 62.0594 26.3853 60.8943 27.3879C59.5575 28.5397 61.0382 28.5584 59.2326 29.5423C57.492 30.4936 55.7142 31.1744 54.0432 32.2796C54.0664 32.3263 54.0896 32.3776 54.1128 32.4242C56.2062 31.3796 58.2996 30.3304 60.393 29.2858C60.3559 29.6682 60.3188 30.0506 60.2816 30.433C59.409 31.0998 58.8798 30.2884 58.1743 31.5522C58.1047 33.2776 58.9309 34.2522 57.8262 35.5206C57.1485 36.2994 56.935 36.1455 56.1969 35.5579C55.1015 34.6952 55.8256 35.0682 55.3568 34.4014C56.1041 32.0045 53.9735 32.746 52.8549 31.9159C53.2541 30.6428 59.6132 28.2646 60.1656 27.4019C59.8546 27.2946 54.1546 30.4237 53.5047 30.8713C52.9524 31.2537 52.7945 31.748 52.154 31.6174C51.6434 31.5149 50.9843 31.6734 50.7893 32.1864C50.5015 32.9418 49.9817 35.5999 49.7078 35.8424C49.1322 35.861 46.9135 35.3854 46.765 34.6252C46.5747 33.6646 47.4055 33.0024 48.3896 33.5247C47.9904 33.8232 46.7046 34.2988 47.2152 34.7931C47.1967 34.7651 47.1781 34.7372 47.1595 34.7092C48.0507 34.075 48.9466 33.4408 49.8378 32.8112C49.7914 32.7879 49.7496 32.7646 49.7032 32.746C49.7914 32.2563 49.8796 31.7667 49.9724 31.277C51.8059 29.948 53.6393 28.6143 55.4728 27.2853C55.4264 27.22 55.3846 27.1594 55.3382 27.0941C53.4908 28.3998 51.6388 29.7008 49.7914 31.0066C49.5221 30.6848 49.2529 30.363 48.9837 30.0366C49.1554 29.7568 53.5465 26.8796 54.1871 26.4412C56.002 25.1868 57.673 24.2961 59.5668 22.9531C61.4467 21.6194 69.3283 17.3899 70.1174 16.4712C69.4583 16.2147 57.6358 24.0676 56.0066 25.0096C53.5697 26.4133 51.2906 28.3578 48.9094 29.7195C48.2921 30.0692 47.9579 29.0573 47.1085 29.6542C46.5282 30.0646 45.9248 29.5236 45.7624 28.978C44.8851 26.0309 46.0966 27.3646 47.0574 26.0868C47.0342 26.0449 47.0063 26.0029 46.9831 25.9609C46.4493 26.2873 45.9202 26.6184 45.3864 26.9449C45.4142 26.9309 45.4467 26.9122 45.4746 26.8982C45.3214 26.3247 45.1636 25.7557 45.0104 25.1822C44.9454 25.1868 44.8851 25.1915 44.8201 25.1961C44.8712 25.1075 44.9269 25.0236 44.9779 24.9397C43.5854 24.9024 41.8958 23.2516 41.8401 26.1288C41.1717 26.6231 40.4987 27.1174 39.8303 27.6117C39.1062 26.8936 38.2289 27.2247 38.3031 27.8216C38.3588 28.2972 38.9623 29.0713 38.577 29.4584C37.8807 30.1578 35.9219 29.1319 35.351 28.7869C38.9669 26.4692 42.5874 24.1469 46.208 21.8293C46.0362 21.694 38.8044 26.1288 38.1453 26.6184C37.0035 27.4672 35.4439 28.2413 34.2602 29.0247C32.7888 29.9993 35.3 32.1677 35.6481 32.7133C35.6713 32.7506 35.6945 32.7926 35.7177 32.8299C34.237 33.7206 32.7563 34.6113 31.2756 35.4973C30.3705 35.8004 28.3374 36.747 28.3281 35.5952C30.3287 34.2009 32.3293 32.8066 34.3252 31.4123C34.2788 31.3377 34.2277 31.2677 34.1813 31.1931C32.0879 32.634 29.9991 34.075 27.9057 35.5159C26.7499 34.3641 24.9304 33.562 25.2924 31.7387C25.2692 31.7014 25.246 31.6687 25.2228 31.6314C28.7412 29.1972 32.255 26.7583 35.7734 24.3241C35.727 24.2542 35.6806 24.1889 35.6342 24.1189C32.1993 26.4785 28.7644 28.8381 25.3342 31.1978C25.3621 29.0806 27.8732 28.1433 29.275 27.0335C30.4076 26.1335 33.6707 25.406 33.7636 23.6153C34.1859 23.3308 34.613 23.0511 35.0354 22.7666C34.9982 22.7153 34.9611 22.664 34.924 22.6127C34.5526 22.8738 34.1813 23.135 33.81 23.3961C33.2251 22.5801 32.6403 21.764 32.0554 20.9479C31.8837 20.4163 38.1221 16.7883 38.9855 16.238C41.4224 14.6898 43.9753 13.1463 46.5839 11.8219C46.816 11.9898 47.0435 12.1624 47.2756 12.3349C47.5912 12.0738 47.9068 11.8126 48.2225 11.5515C48.5195 11.6354 48.8212 11.7147 49.1183 11.7986C48.9466 12.0598 41.5848 16.3733 40.7679 16.7976C39.9649 17.2127 33.2019 21.6241 33.1369 21.9459C33.7264 21.8293 40.3455 17.3292 41.7241 16.6064C43.1862 15.8417 44.6298 14.7551 46.0826 14.009C47.4241 13.3188 49.0301 11.5095 50.5897 12.2323C49.1183 13.8551 35.4021 21.5728 35.3789 22.4588C35.4206 22.4681 43.2883 17.3899 44.1424 16.8536C45.637 15.9163 47.0342 15.0676 48.4638 14.0277C49.1879 13.5007 49.8749 13.0297 50.6454 12.5727C51.416 12.1111 51.8476 12.3582 52.8178 11.7054C53.4212 11.295 54.1778 10.1572 54.5491 10.1245C56.2805 9.97996 54.9901 9.95664 55.7142 8.85612C55.9973 8.4271 58.4203 5.75505 58.8056 5.47992C60.0031 4.62655 61.7345 3.31617 63.0574 2.77524C64.0368 2.3742 66.3623 -0.12997 67.3602 1.01253C66.9007 1.80062 57.6034 6.79962 57.0881 8.06803C57.3434 8.21725 59.3533 6.47319 59.7246 6.19806C60.523 5.61049 61.8088 5.04158 62.44 4.53328C63.2059 3.9224 64.2364 3.27887 65.1276 2.82653C66.1998 2.28559 67.0353 1.50683 67.959 0.993874C68.7759 1.12444 69.5975 1.25968 70.4145 1.39025C70.006 1.9545 63.9068 4.90168 64.2549 5.68977C66.418 4.29079 68.581 2.88715 70.744 1.48818C71.6492 1.62341 72.5543 1.76331 73.4594 1.89854C72.545 2.77524 70.6976 3.72188 69.5882 4.32344C68.2607 5.04624 67.8476 6.1048 66.1116 6.75299C62.946 7.94212 61.3028 9.47166 58.6802 11.3743C55.7095 13.5334 45.9387 18.7002 44.2399 20.878C45.029 20.5096 47.7444 18.5697 48.7145 17.9261C50.2787 16.8862 51.9405 15.9256 53.5465 14.9323C55.1525 13.9391 56.6797 13.095 58.2393 11.9945C59.8082 10.8893 61.1403 9.68617 62.7789 8.71156C64.3988 7.75093 65.8702 7.20066 67.4577 6.33796C68.3814 5.83433 68.6924 5.2421 69.5233 4.68251C70.2381 4.20219 71.0086 4.00167 71.7745 3.4141C74.3135 1.4602 74.2485 2.11305 77.0939 2.9198C77.6973 3.08767 81.6613 4.23017 81.8656 4.42603C80.2735 5.47059 69.6857 10.894 69.565 12.1344C71.1293 11.0105 71.8116 10.2971 73.6683 9.42503C74.2067 9.17322 77.3167 7.47113 77.6787 7.18667C78.7788 6.32397 80.5566 5.31671 81.8331 4.76178C83.1142 4.20685 85.1937 5.5079 86.2009 6.27734C85.5232 7.62968 72.1644 14.3214 71.4635 15.7857C76.5415 12.694 81.6149 9.60224 86.6929 6.5105C87.2082 6.75765 87.7234 7.0048 88.2386 7.25196C87.9694 7.68098 74.0861 16.28 72.8885 16.751C69.9085 17.9308 67.5737 20.337 64.9465 21.7733C63.9207 22.3329 57.6498 26.0309 57.5198 26.7397C57.5848 26.7117 65.8006 21.5402 66.0002 21.3816C67.1699 20.4256 68.8641 19.3251 70.1592 18.4951C71.677 17.5158 73.2738 16.9842 74.6941 16.0655C77.4838 14.2608 80.3431 12.5867 83.1699 10.8287C84.5763 9.95664 86.0245 9.1499 87.4078 8.2872C88.6842 7.48978 88.1551 7.15869 89.6636 8.10999C90.2995 8.51103 91.4089 8.88876 91.8127 9.28514C91.5064 9.49032 88.9349 10.6095 88.2757 10.8986C86.809 11.5421 86.2195 12.1764 84.9987 12.8992C84.4185 13.2442 84.1354 13.7525 83.634 14.1676C83.2766 14.466 82.3297 14.8997 81.8934 15.1935C81.4107 15.5199 78.8856 17.1754 78.6767 17.5064C80.1667 17.0215 84.0518 14.0463 85.3422 12.9131C86.9343 11.5142 90.2113 10.4043 92.1609 9.34109C93.5441 10.2691 94.932 11.2017 96.3198 12.1297C96.2873 12.181 96.2502 12.2323 96.2177 12.2836C95.2708 12.7686 94.1429 13.2955 93.1588 13.7199C92.1655 14.1489 91.3207 14.8997 90.4295 15.3054C88.3083 16.2753 86.8415 17.7116 84.516 18.6629C83.3416 19.1432 73.3387 24.2728 72.9488 24.6459C72.9813 24.7485 73.0231 24.8371 73.0649 24.921ZM52.3397 0.998537C52.27 1.09647 52.2051 1.18973 52.1354 1.28766C52.1494 1.42289 52.1633 1.55813 52.1772 1.6887C50.3669 2.86384 48.5613 4.03898 46.751 5.21878C46.6257 4.99494 46.5004 4.77577 46.3751 4.55193C46.4029 4.57059 46.4308 4.5939 46.4586 4.61256C48.0229 3.554 49.5871 2.49544 51.1514 1.43688C51.1885 1.32496 51.2257 1.21305 51.2628 1.10113C51.6248 1.06849 51.9823 1.03584 52.3397 0.998537ZM62.635 1.93119C62.4307 1.43688 63.9439 1.07315 64.1574 0.583507C64.5381 0.625477 64.9187 0.667446 65.2993 0.709415C65.3225 0.779364 65.3457 0.84465 65.3689 0.914598C63.0063 2.42083 60.6483 3.9224 58.2857 5.42396C58.2625 5.40065 58.2393 5.37733 58.2161 5.35401C58.6524 4.80375 59.0933 4.25349 59.5297 3.70322C60.5601 3.11565 61.5999 2.52342 62.635 1.93119ZM38.7348 15.5945C36.9292 14.5826 37.3191 10.8567 35.5228 9.924C33.6011 8.92606 33.6475 10.5862 33.3969 7.76958C33.2669 6.32397 34.7569 6.14677 35.857 5.55453C38.3171 4.23017 39.9927 3.97369 42.4482 3.16695C47.8883 1.3716 44.6112 3.13431 46.5375 5.48925C47.3591 6.49185 46.1476 6.54314 47.879 8.10999C49.6057 9.67218 49.8424 7.38719 50.1534 6.84159C50.9425 5.46127 49.9028 4.62655 51.7687 5.31671C53.4212 5.92759 54.02 4.51929 53.6347 3.12032C53.5001 2.62601 51.9823 0.970557 53.7275 0.863303C54.7905 0.798017 55.8581 0.728068 56.9164 0.64413C58.8056 0.494906 61.2935 0.499569 63.2059 0.588171C63.2105 0.658119 63.2152 0.723405 63.2245 0.793354C61.6788 0.919262 60.1331 1.04517 58.592 1.17108C58.5596 1.12911 58.5271 1.08714 58.4992 1.04517C58.3089 1.42289 58.1186 1.80528 57.9236 2.183C57.9608 2.20166 57.9979 2.22497 58.0397 2.24362C58.787 2.79855 59.3301 2.30425 58.5828 3.77783C58.1511 4.63587 57.9654 4.86904 57.5616 5.83899C57.0649 7.01879 55.1711 7.9701 55.0272 9.15923C54.9019 10.2271 54.3402 8.89342 53.6115 10.0872C53.1009 10.9266 52.6692 11.1411 51.8384 11.5701C50.5201 12.2556 48.9419 10.6188 47.7119 11.2857C47.4798 11.1971 47.2477 11.1038 47.0203 11.0152C46.7743 10.3997 47.1363 10.4929 46.6675 9.77011C46.5654 9.61623 46.1291 8.94938 46.078 8.82814C46.0687 8.80948 45.9527 7.14937 45.8877 6.83693C45.7159 6.03485 44.3327 3.87576 43.2976 3.75918C43.0238 4.38872 42.7499 3.69856 42.5689 5.00427C42.4946 5.54521 42.4807 6.0162 42.3786 6.54314C42.0444 8.25922 41.7287 7.85352 41.9237 9.88203C41.9794 10.4789 40.4523 12.181 40.0995 12.8292C39.315 14.2562 40.183 14.6012 38.7348 15.5945ZM59.1258 0.0239173C41.7148 0.499569 27.7386 6.88356 15.7862 19.7635C3.90346 32.5687 -0.696474 45.4393 0.0833329 62.9265C0.816723 79.4064 6.39605 94.3102 18.7476 105.418C23.9974 110.137 33.5779 115.612 40.1598 118.097C46.4029 120.457 56.4661 122.392 63.1224 121.935C69.5929 121.492 79.8371 118.881 85.6486 116.036C93.507 112.194 99.0677 107.563 105.237 101.417C115.397 91.2884 121.84 74.1883 120.907 59.7788C120.359 51.3243 119.552 45.3834 116.465 37.3766C113.926 30.7921 108.026 22.3982 102.962 17.5484C100.182 14.8857 97.1275 11.6634 93.8412 9.71415C90.5827 7.7789 86.2148 5.37267 82.7104 4.03898C75.3486 1.23636 66.975 -0.195256 59.1258 0.0239173ZM73.5662 76.394C73.2645 76.6551 72.9674 76.9163 72.6657 77.1774C72.5311 77.2567 72.3965 77.336 72.2665 77.4152C71.937 77.1961 71.6027 76.9816 71.2732 76.7624C72.1133 76.31 72.9581 75.8624 73.7983 75.41C73.8679 75.4847 73.9422 75.5593 74.0118 75.6339C73.8633 75.881 73.7147 76.1375 73.5662 76.394ZM52.0101 63.7612C51.9219 63.7099 51.8384 63.654 51.7548 63.6027C50.4134 64.7592 41.4549 70.3457 40.2527 70.2991C39.5471 67.8369 38.7905 68.4012 41.065 66.9882C42.3461 66.1908 43.7989 65.496 45.0058 64.7265C46.2544 63.9291 47.6794 63.3649 48.8398 62.5674C50.0188 61.756 51.5274 60.7534 52.7435 60.0027C55.1061 58.5384 57.543 56.3886 60.0078 55.2461C61.6556 54.4814 62.2033 54.2948 63.7629 53.2736C64.9465 52.4948 66.3948 51.5062 67.5691 50.7881C67.3092 50.6528 64.436 52.5228 63.9207 52.8632C62.5236 53.7772 61.6695 54.3321 60.096 54.929C57.6173 55.871 55.004 58.3938 52.6599 59.7415C50.0142 61.2664 47.6608 63.0198 44.8247 64.554C43.4369 65.3048 42.1558 66.0835 40.7957 66.8623C40.0995 67.2633 39.5053 68.0514 38.8137 67.3519C37.825 66.354 37.4723 66.6105 37.2216 66.3633C39.7003 64.7778 42.5874 63.4395 45.1404 61.9379C47.8697 60.3291 50.1441 58.3565 52.7853 56.7664C54.0339 56.0202 55.2639 55.4327 56.559 54.6399C57.9236 53.8052 59.1073 52.9705 60.5369 52.2197C62.1708 51.3617 62.8299 50.8907 64.2967 49.8881C65.2158 49.2632 67.04 48.2466 67.778 48.8062C69.7321 50.9606 68.4603 49.7528 68.2236 52.4902C68.0797 54.1363 69.3933 54.9897 69.89 56.2487C70.3773 57.4845 70.9158 58.9394 72.0483 59.6389C73.7379 60.6788 74.216 60.3664 75.6132 61.1405C75.9752 61.341 82.2601 57.4285 83.1838 56.8783C85.76 55.3534 88.6657 54.57 91.0283 52.6394C91.0144 52.6394 91.0051 52.6394 90.9911 52.6394C90.7359 52.5321 87.7652 54.4207 87.2407 54.6912C86.0802 55.2788 84.6599 55.8151 83.3834 56.4493C82.1533 57.0601 80.9465 58.0814 79.6561 58.7249C78.0362 59.5363 77.3724 59.9653 75.8267 60.9773C75.8592 60.1239 75.8917 59.2705 75.9242 58.4171C77.5813 57.4798 79.243 56.5472 80.9001 55.6099C80.8722 55.5586 80.8444 55.5073 80.8165 55.4607C79.1594 56.37 77.5023 57.2747 75.8453 58.184C75.3625 57.6757 74.8751 57.1674 74.3878 56.6591C76.0263 55.2368 79.0156 53.7679 80.979 52.7653C81.9723 52.257 83.3277 51.5109 84.2514 50.9C86.2009 49.6083 86.2845 50.6388 87.7837 50.6528C89.4826 50.6668 88.4011 49.3145 91.3486 50.6155C92.3233 51.0446 92.3512 52.4109 92.3605 53.3669C92.3697 54.556 92.379 55.2508 90.8287 55.1482C89.3294 55.0456 90.1417 55.6425 89.4362 55.9969C88.9813 56.2254 88.0576 56.6964 87.8673 57.1627C88.4429 56.855 89.0184 56.5472 89.594 56.2441C90.7544 57.6431 86.3773 56.9949 85.5743 60.0073C85.0591 61.9379 84.5763 61.0799 83.518 61.3737C82.7939 61.5742 81.3178 61.7607 80.7515 61.0006C82.6036 60.0073 84.451 59.0187 86.303 58.0254C86.2705 57.9602 86.238 57.8995 86.2056 57.8342C84.2793 58.8602 82.3483 59.8861 80.422 60.912C80.4359 60.954 80.4452 61.0006 80.4591 61.0426C79.424 60.9633 78.3889 60.884 77.3492 60.8094C76.7875 62.4089 78.556 62.1804 77.1032 63.2623C76.7318 63.5421 75.5714 64.582 76.6622 65.1136C77.4559 65.5006 79.7304 63.9757 82.7893 66.1069C82.5943 66.9462 82.3251 68.0701 81.3364 68.3965C80.6123 68.6343 80.733 68.9561 80.4823 69.4318C80.2363 69.9027 79.5493 69.7395 79.3126 70.2105C78.5885 71.6328 79.8603 71.3623 78.0037 72.5235C77.5627 72.7986 75.2233 74.1929 75.1861 74.51C76.3976 73.8105 77.6091 73.1157 78.8206 72.4162C78.8717 72.4535 78.9274 72.4955 78.9784 72.5375C78.6581 73.3815 78.3379 74.2256 78.0222 75.0696C76.5322 75.2748 75.3115 74.1976 73.7194 75.2375C73.1252 75.6292 69.9503 77.0142 69.825 77.1308C69.4583 77.4852 69.5558 78.5997 69.7043 79.0893C69.9224 79.8075 70.4795 79.4064 70.7997 81.0339C71.0365 82.2184 72.8885 83.6174 72.7864 84.3588C71.3103 84.6573 70.2056 85.492 70.6094 87.1847C71.0597 89.064 70.2613 89.1713 70.1499 90.6822C69.9271 93.7506 70.0571 92.8133 67.7641 93.9978C65.7635 95.0283 67.2674 96.6045 68.5996 97.2434C68.7156 97.6444 68.827 98.0501 68.943 98.4512C68.2189 99.3139 65.1879 99.2906 64.111 100.284C63.2987 101.03 61.4467 102.634 62.324 104.042C61.6416 104.616 60.9547 105.19 60.2723 105.758C60.5416 106.085 61.883 104.7 62.2358 104.434C62.9413 105.208 62.8346 107.293 62.2868 107.857C61.9991 108.155 59.4879 109.405 58.9123 109.722C56.8468 109.806 57.0788 109.484 56.002 111.182C55.7931 111.513 54.7533 111.541 54.6095 112.343C54.5305 112.786 54.3495 113.784 53.9643 114.026C53.9086 113.933 52.9431 111.872 52.9663 111.681C53.1148 110.254 53.0916 110.804 54.5213 109.783C55.1525 109.335 58.9587 107.041 58.8288 106.747C58.8102 106.719 58.7916 106.686 58.7731 106.658C56.805 108.006 54.8369 109.354 52.8688 110.702C52.4046 109.965 52.3118 108.538 53.152 107.824C53.463 107.558 55.8117 106.076 56.0994 105.982C57.0185 105.698 61.5627 102.975 62.0362 102.196C58.8984 104.075 55.7606 105.959 52.6228 107.838C52.6507 107.885 52.6785 107.932 52.7064 107.978C52.516 107.796 52.2283 105.647 51.5645 104.695C51.0493 103.963 51.0678 103.432 50.7893 102.984C50.3716 102.317 49.666 102.55 49.0858 102.019C49.0673 101.986 49.0441 101.949 49.0255 101.916C50.0931 101.272 51.1653 100.624 52.2329 99.9807C52.2051 99.9341 52.1818 99.8874 52.154 99.8408C50.9936 100.508 49.8331 101.175 48.6727 101.846C48.5427 101.324 48.4174 100.806 48.2875 100.284C48.3385 100.302 48.3896 100.326 48.4406 100.344C53.2773 96.9822 58.1139 93.6247 62.9506 90.2625C62.9042 90.1972 62.8624 90.1319 62.816 90.062C58.0397 93.3822 53.268 96.6978 48.4963 100.018C48.4731 99.9807 48.4453 99.9434 48.4221 99.9108C48.5474 99.16 48.6449 97.9429 48.5381 97.4299C48.4499 96.9916 48.1714 96.5066 48.0275 95.989C47.9161 95.5833 47.3777 95.3501 47.373 94.6366C49.0812 93.4801 50.7893 92.319 52.4928 91.1625C51.8755 90.8174 48.1157 93.9465 47.0528 94.4501C46.8392 93.7506 46.6304 93.0511 46.4168 92.3516C46.4122 92.3143 46.4076 92.277 46.4029 92.2397C50.302 89.8335 54.1963 87.4226 58.0954 85.0163C58.049 84.9371 57.9979 84.8578 57.9515 84.7785C54.1174 87.1801 50.2834 89.5817 46.4493 91.9832C46.2219 91.4376 47.1363 89.6843 47.4334 89.134C48.2735 87.5718 47.1827 88.2993 48.9466 87.1055C50.6919 85.921 52.7528 85.0163 54.4377 83.9205C55.6956 83.1044 64.552 77.9422 64.8166 77.5178C64.7934 77.4805 64.7748 77.4432 64.7516 77.4059C59.0794 80.8194 53.4073 84.2329 47.7351 87.6464C47.2848 87.3386 47.373 85.3941 47.6562 84.7972C47.9997 84.0697 49.5918 83.1231 50.3159 82.736C52.8085 81.4023 54.4841 79.9241 56.7632 78.4925C58.8381 77.1867 61.0243 75.9556 63.0434 74.5753C64.2224 73.7686 68.7202 71.9266 69.3608 70.9846C67.9404 71.4649 59.8917 76.0769 58.5828 77.0841C57.0788 78.2406 54.9297 79.2432 53.4537 80.5303C52.0055 81.7894 49.3968 82.694 48.2271 83.8599C48.0693 83.3562 47.9068 82.8526 47.749 82.349C47.7119 82.3723 47.6794 82.3956 47.6423 82.4189C46.8067 81.4536 45.9666 80.4837 45.1311 79.5184C45.1404 79.4438 45.1497 79.3738 45.1543 79.2992C53.1287 74.58 61.1078 69.8608 69.0823 65.1416C69.0405 65.067 68.9941 64.9923 68.9523 64.9177C61.0197 69.6369 53.087 74.3515 45.1543 79.0707C44.834 78.2686 44.5137 77.4712 44.1981 76.6691C44.226 76.6458 44.2585 76.6271 44.2863 76.6038C49.5871 73.5634 54.8926 70.5276 60.1981 67.4872C60.1563 67.4126 60.1145 67.338 60.0727 67.2633C54.7534 70.3224 49.434 73.3815 44.1099 76.4406C43.9289 75.881 43.7525 75.3261 43.5715 74.7665C44.0403 73.8525 47.6469 71.9825 48.6681 71.4509C49.5686 70.98 50.4969 70.882 51.3649 70.2385C52.4046 69.4691 52.9384 69.1659 54.0524 68.5411C54.9019 68.0607 64.3292 62.4136 64.3385 62.3949C64.1807 62.0218 62.3101 63.4255 61.9109 63.626C61.2517 63.9618 59.7478 64.6939 59.1955 65.1043C57.9933 65.9856 55.4821 67.4219 54.1128 68.2193C52.1865 69.3431 50.7104 70.2805 48.6634 71.2411C47.9208 71.5908 46.57 72.1924 45.9434 72.6307C45.5164 72.9292 43.8036 74.2302 43.5111 74.3422C43.2512 73.6613 42.9913 72.9851 42.7313 72.3043C44.031 70.8121 46.5515 70.0753 48.2085 69.0634C48.8352 68.681 53.3608 65.6638 53.4862 65.3561C53.2123 65.1555 48.682 68.4758 48.0507 68.8675C47.2013 69.3898 46.0966 69.7955 45.2611 70.3038C44.9315 70.5043 42.5317 72.0572 42.5317 72.0478C42.0072 71.6048 41.4827 71.1572 40.9582 70.7141C44.6391 68.3825 48.3246 66.0742 52.0101 63.7612ZM73.5337 54.3508C75.5993 52.8213 77.2842 52.1404 79.308 50.8487C79.7907 50.5409 81.782 49.2818 82.1487 49.1046C82.845 48.7689 82.7661 49.2212 83.3509 49.5896C83.5923 49.7435 84.6459 50.2844 84.7295 50.3964C81.1786 52.3782 77.6323 54.3555 74.0814 56.3373C74.0536 56.3793 74.0257 56.4259 73.9979 56.4679C73.8447 55.7638 73.6869 55.0596 73.5337 54.3508ZM72.5357 52.0145C72.6703 52.4202 72.8467 52.8166 72.9303 53.2409C73.1206 54.1783 72.8049 54.3788 73.1206 55.1902C73.5291 56.2347 73.1763 56.2907 74.2114 57.2C74.7452 57.671 75.6364 58.4078 75.576 59.1493C75.4925 60.1892 75.6782 60.7161 74.5874 60.1752C73.8076 59.7881 73.413 59.942 72.4939 59.3451C70.7208 58.1887 70.9529 57.1534 69.9364 55.4746C69.4676 54.7005 69.0544 54.3415 68.7806 53.3902C68.4092 52.0891 68.8734 52.2057 68.9245 51.2078C68.9663 50.4197 69.514 49.8274 69.1287 49.2585C68.7899 48.7642 67.5041 48.7269 67.8755 47.6823C67.9172 47.5658 69.2958 46.0689 69.4583 46.0036C69.9457 45.817 70.5444 47.1601 70.6558 47.5285C70.9065 48.3678 71.5285 49.1513 71.5749 49.8321C71.677 51.2078 72.364 51.4922 72.5357 52.0145ZM72.5914 51.0725C72.4522 50.5036 71.3289 48.3912 71.8859 47.9575C72.5682 47.4259 74.411 46.3766 75.2326 45.9523C76.1052 45.5046 81.717 42.273 82.0373 42.231C82.6732 43.0844 82.7614 43.1683 82.3622 44.4554C82.0791 45.3694 82.2972 44.8424 81.8006 45.6585C81.5406 46.0875 81.0068 46.4652 80.9976 46.5165C81.7634 46.6471 81.898 46.1015 82.028 47.4399C82.1116 48.2839 82.7196 48.4798 82.1951 48.8342C81.2575 49.4637 80.1899 50.0793 79.2151 50.6622C78.6721 50.9886 73.5662 53.9125 73.478 53.9358C73.594 53.9031 72.9442 51.5202 72.8978 51.3523C72.8467 51.3243 72.791 51.2964 72.74 51.2637C75.1119 49.8321 77.4838 48.4005 79.8557 46.9689C78.6721 47.0015 73.8911 50.2005 72.5914 51.0725ZM70.5073 45.9756C71.2639 45.4673 72.0669 44.8191 72.805 44.4274C73.5012 44.0543 74.5781 43.63 75.1444 43.2802C76.8618 42.2124 78.4446 40.9626 80.5334 42.0025C80.5287 41.9652 80.5241 41.9326 80.5241 41.8952C80.9419 41.8486 81.3596 41.8067 81.7774 41.76C81.7913 41.8393 81.8099 41.9139 81.8238 41.9932C78.3518 43.9471 74.8844 45.901 71.4124 47.8549C71.1061 47.23 70.8044 46.6005 70.5073 45.9756ZM70.3773 37.0828C70.4795 37.2133 70.5862 37.3439 70.6883 37.4745C70.0942 37.7916 69.5001 38.1087 68.9059 38.4211C68.9059 38.16 68.9059 37.8988 68.9059 37.6377C69.0266 37.5864 69.1426 37.5351 69.2633 37.4792C69.254 37.3952 69.2448 37.3113 69.2355 37.2273C69.6115 37.176 69.9967 37.1294 70.3773 37.0828ZM25.6452 67.7996C24.6705 67.6411 23.7003 67.4778 22.7256 67.3193C22.7349 67.2773 22.7395 67.2354 22.7488 67.1934C23.1294 66.2607 27.0656 64.3581 28.0078 63.7566C28.9269 63.169 29.8042 62.9778 30.83 62.1944C31.814 61.4436 32.3432 61.0845 33.3133 60.4736C33.2855 60.4223 33.253 60.3757 33.2251 60.3244C29.5675 62.5161 25.9051 64.7032 22.2428 66.8949C21.7972 66.1721 21.3516 65.4493 20.906 64.7265C20.9432 64.7079 20.9757 64.6846 21.0128 64.6659C21.9365 64.1296 22.8555 63.5887 23.7792 63.0524C23.7514 62.9965 23.7189 62.9405 23.6911 62.8845C22.7534 63.3882 21.8158 63.8871 20.8782 64.3908C20.4326 63.7799 19.987 63.169 19.5367 62.5581C20.8689 61.9426 21.8297 61.4669 23.1944 60.6089C24.5962 59.7275 24.9118 59.2565 26.5643 58.5337C27.1352 58.2866 33.7914 53.9498 33.8146 53.8798C33.8193 53.8751 33.8193 53.8705 33.8239 53.8658C33.2205 53.8192 30.0688 55.9689 29.3122 56.4306C28.5231 56.9156 27.8361 57.5032 27.1027 57.9322C26.2858 58.4125 25.5013 58.571 24.7633 59.126C23.4311 60.1239 21.9968 61.1918 20.4743 61.8819C19.2675 62.4322 19.3 62.5022 18.2463 61.6395C17.6383 61.1405 16.9838 60.5343 17.0441 59.6576C17.2298 57.1208 17.2066 56.9855 19.3975 55.7031C20.8967 54.8311 22.1779 53.8192 23.6168 52.9238C25.2924 51.8839 31.633 48.6103 32.5614 47.5098C32.5289 47.4585 32.501 47.4072 32.4685 47.3559C27.3441 50.4943 22.2196 53.6327 17.0905 56.771C17.1184 56.813 17.1416 56.8596 17.1695 56.9016C16.8863 56.2767 16.7285 54.8218 17.1555 54.2249C17.2809 54.043 18.9101 53.2596 19.2025 53.1057C20.9571 52.1917 22.4099 51.0399 24.0717 50.1539C25.3853 49.4544 32.8723 45.0896 33.4154 44.3388C28.0264 47.5285 22.6374 50.7181 17.2484 53.9031C17.2298 53.8705 17.2112 53.8332 17.188 53.8005C17.0859 53.7213 16.7146 51.8606 16.6821 51.5948C16.5567 50.5782 16.4825 50.1725 17.4108 49.8461C18.1535 49.585 18.6316 49.0487 19.3835 48.587C20.5625 47.8642 19.6621 47.3046 20.479 46.5165C22.1129 44.945 22.4842 45.0989 24.5962 44.9404C26.5921 44.7911 25.4038 42.4735 26.1558 41.4336C26.9727 40.3004 29.0754 39.8388 30.338 39.2838C31.2199 38.8968 31.7258 38.2999 32.6588 38.2346C33.4154 38.1833 34.5666 37.9501 35.3742 37.8429C36.3072 37.717 38.396 36.8076 39.9509 36.5372C40.7957 36.3926 44.1563 35.6605 44.6808 36.29C44.7273 36.6025 44.4116 37.4698 44.277 37.731C44.0867 38.0994 43.4926 38.2952 43.047 38.5191C42.3554 38.8688 40.9025 39.8434 40.4151 40.0346C39.38 40.4403 36.2329 42.4315 35.4114 43.2756C38.3031 41.5735 41.1949 39.8761 44.0867 38.174C44.1053 38.2066 44.1238 38.2393 44.1424 38.2719C44.5323 39.1206 45.3075 38.7009 46.2869 39.2978C44.899 41.0605 35.2628 45.3974 34.6548 46.3487C34.8636 46.3253 40.4708 43.4108 40.9489 43.1077C41.8076 42.5714 46.3472 39.517 46.8253 39.5823C47.1688 40.3657 47.5169 41.1445 47.8604 41.9279C47.1734 42.3476 46.4865 42.7673 45.7949 43.187C45.8274 43.2429 45.8552 43.2989 45.8877 43.3549C46.6629 42.9352 47.4427 42.5201 48.2178 42.1004C48.1993 42.1424 48.1807 42.1797 48.1621 42.2217C48.9048 42.6274 49.6428 43.0284 50.3855 43.4341C50.3623 43.3968 50.3391 43.3642 50.3159 43.3269C49.4525 43.8398 48.5938 44.3528 47.7304 44.8704C47.749 44.9077 47.7722 44.9404 47.7908 44.9777C48.125 45.001 49.8888 43.8725 50.4319 43.6067C51.1235 43.2709 52.6599 43.3455 53.268 42.9258C53.3748 42.9911 53.4862 43.0517 53.5976 43.117C53.8993 42.8839 55.8674 42.674 57.0092 41.9092C58.2161 41.1025 59.474 42.6694 60.2955 42.3383C60.458 42.5714 60.6251 42.7999 60.7876 43.0331C60.7504 43.089 54.1314 47.3186 53.3469 47.9108C52.4603 48.5824 50.9657 48.7129 49.5268 49.7109C48.8677 50.1679 45.962 51.8513 45.6974 52.2337C45.9991 52.5788 49.7357 49.8228 50.3205 49.4684C51.2953 48.8808 52.3257 48.8015 53.0406 48.3632C53.7972 47.8969 54.5909 47.3932 55.2918 46.801C55.9741 46.2227 59.2047 44.2502 60.0495 43.8352C60.3745 43.6766 61.0057 43.1963 61.3167 43.2662C61.9155 43.4015 61.8784 43.7186 62.5561 43.3642C63.243 43.0051 63.0342 43.0424 63.2523 42.3802C63.4751 41.7087 63.995 41.8953 64.3246 41.4709C64.3106 41.4383 64.2967 41.4056 64.2828 41.373C63.9811 41.4989 63.6794 41.6294 63.3823 41.76C63.2291 41.3357 63.1781 40.5756 63.8604 40.389C64.4267 40.7667 65.7542 42.0864 64.8862 42.9631C64.5334 43.3175 62.3518 44.5486 61.7623 44.8937C60.6855 45.5233 56.4476 47.6544 55.9277 48.629C59.0609 46.7683 62.194 44.9077 65.3272 43.0471C65.3179 43.0984 65.3132 43.145 65.304 43.1963C65.7217 43.4481 66.1395 43.6999 66.5619 43.9517C67.2674 43.6113 67.3092 42.8652 67.6109 42.3569C67.8198 42.0072 68.8316 41.4569 69.2308 41.2144C69.7693 40.888 72.5357 39.3724 72.4243 39.0274C72.4058 38.9994 72.3872 38.9667 72.3686 38.9388C70.8694 39.8901 69.3654 40.8414 67.8662 41.7927C67.4438 41.2471 68.6042 39.0693 69.0823 38.645C70.5769 37.3113 71.0736 37.7729 72.5914 38.5657C75.2836 39.974 73.9654 39.4377 74.8241 41.4522C75.6782 43.4574 75.7107 42.6134 73.1995 43.8911C72.2433 44.3761 70.874 46.0129 69.8853 45.4487C68.9895 44.9404 68.024 47.1741 67.2906 47.7989C66.3437 48.6103 61.6045 51.2964 60.3141 51.9725C58.035 53.171 56.1412 54.6866 53.76 55.8943C51.402 57.0881 49.4015 58.8275 47.2291 60.3431C45.7577 61.369 33.2298 68.1867 33.2112 68.2893C34.1952 67.8835 35.1746 67.4778 36.1587 67.0721C36.2469 67.2773 35.6574 68.4058 35.3696 68.695C34.9611 69.1007 33.7171 68.9281 33.1416 68.9375C32.5474 68.9514 29.521 68.5224 29.4004 68.2799C34.2509 65.3094 39.0969 62.3389 43.9475 59.3731C43.5576 58.8928 39.8256 61.7234 39.2686 62.0731C37.8065 62.9825 36.1494 63.8219 34.5851 64.7918C33.3226 65.5752 31.1085 66.6898 30.0455 67.5291C29.5953 67.8835 28.3792 68.625 27.8129 68.4758C27.3534 68.3685 25.8959 68.0934 25.6452 67.7996ZM37.5976 66.9369C39.6957 67.9115 38.7952 69.3991 39.7838 70.4996C40.2341 70.9986 41.0928 71.2504 41.5802 71.7587C41.5988 71.7774 42.2811 72.794 42.4946 73.0737C42.5178 73.1064 43.5854 76.5525 43.7386 76.9629C44.1563 78.0914 44.5323 79.8308 45.3493 80.6096C46.0826 81.3091 47.8836 83.0531 47.4659 84.0837C46.4865 86.4806 46.9042 85.5246 47.0806 87.8796C47.2988 90.8734 44.1517 90.3884 47.2384 95.933C48.2039 97.6631 48.1296 97.5931 47.8511 99.603C47.6469 101.095 47.995 102.326 49.5454 102.751C50.6501 103.054 50.418 103.287 50.6501 104.084C50.8404 104.733 51.3603 104.667 51.6248 105.847C52.0194 107.586 51.8662 108.552 52.2236 110.123C52.3629 110.743 52.3675 111.312 52.4603 111.919C52.581 112.711 53.2355 112.842 53.3933 113.518C54.1128 116.549 54.8647 113.052 55.2454 112.329C55.5796 111.699 55.8442 112.087 56.2944 111.751C56.5543 111.555 56.6889 111.033 56.8607 110.753C57.4363 109.834 58.5967 110.51 59.3486 110.039C60.3466 109.419 62.7881 108.57 62.9831 107.577C63.4751 105.054 63.2755 105.908 62.6628 103.464C62.4029 102.429 64.1342 100.615 65.1601 100.344C65.5314 100.247 69.073 99.1646 69.1287 99.1367C70.6466 98.2879 67.6527 96.0729 67.5181 95.8631C66.5572 94.4128 70.0199 94.2216 70.4098 93.0558C70.6233 92.4216 70.5166 91.7174 70.5909 91.0739C70.679 90.3138 71.12 89.6283 71.1339 88.9754C71.1618 87.7583 70.6233 86.0096 71.7049 85.1935C72.9813 84.2329 74.7498 86.1169 72.7168 82.9785C72.3315 82.3863 71.4589 81.7614 71.301 81.2438C70.8601 79.7982 71.6167 80.5863 70.433 79.1919C70.0849 78.7816 69.9364 77.7557 70.4098 77.3686C71.12 76.795 71.6909 78.0308 72.3361 77.8769C74.2717 77.4106 74.1046 74.6779 75.7107 75.3634C75.8638 75.4287 77.3677 75.6199 77.6555 75.6572C78.5003 75.7644 78.5978 74.7479 78.9134 74.2023C79.3405 73.4561 79.3173 71.2178 79.6561 70.6582C79.9857 70.1126 82.4597 68.4012 82.9146 67.5758C83.1931 67.0721 83.5227 65.8504 82.9517 65.4866C82.469 65.1789 81.6242 64.6193 81.0904 64.6239C80.3245 64.6286 79.735 64.2835 78.8067 64.3255C78.0037 64.3628 77.2888 65.0949 76.6715 64.3302C77.4049 63.3649 78.8624 63.141 77.7391 61.5648C79.0388 61.4762 80.0739 61.5322 81.3271 61.854C83.4298 62.3902 82.8403 61.7421 84.3953 61.8493C86.4841 61.9939 84.9569 58.6643 88.5914 58.0721C89.7333 57.8855 90.1603 57.1254 90.216 56.1182C90.2485 55.5166 91.6456 55.6005 92.5136 55.2928C93.0706 55.0969 92.7643 52.728 92.6529 52.1637C92.3976 50.8021 92.8339 50.7601 91.2279 50.2098C89.8168 49.7248 89.9793 49.1466 88.5728 50.042C87.6723 50.6155 86.8136 49.6782 85.941 49.7668C84.0472 49.958 82.0187 48.186 82.2508 46.2461C82.3529 45.3927 82.6964 44.6932 82.8496 43.7839C83.026 42.7067 82.6686 41.2657 81.4385 41.2098C80.422 41.1631 79.5633 40.9486 78.6256 41.0139C76.95 41.1305 76.9825 42.0118 75.6457 42.0258C74.2717 39.2512 76.0031 39.6662 72.6332 38.0014C71.8812 37.6284 71.1896 36.9662 70.382 36.5885C69.7043 36.2714 68.581 36.8729 68.4882 37.6657C68.3257 39.0087 68.2097 39.074 67.6898 40.2631C67.3927 40.9533 67.3556 40.7061 67.3463 41.4756C67.337 42.4968 67.1467 41.9139 66.9657 42.5201C66.4365 44.3201 65.8006 42.5434 65.5685 41.9372C65.225 41.0419 64.7609 40.3284 63.9161 39.7315C61.832 41.4149 63.4937 40.6781 62.8856 42.3476C62.3843 43.7279 61.2007 42.5248 60.7365 42.0398C60.4766 41.7693 58.5224 41.3123 58.0582 41.2331C56.7818 41.0232 56.5218 41.9232 55.0876 42.2403C53.9643 42.4921 52.6924 42.5761 51.4902 42.8372C50.6547 43.0191 49.4711 42.5994 48.7934 42.0305C47.6701 41.0885 47.7397 40.5009 47.2709 39.4377C46.8624 38.5097 44.8665 38.5657 44.7412 38.118C44.5509 37.4279 46.0177 35.8004 44.2492 35.5019C44.1331 35.4833 41.0974 35.7444 40.8236 35.7911C39.9277 35.9496 38.8787 36.0802 38.0246 36.332C36.9988 36.6351 35.8802 37.218 34.8961 37.3859C33.7775 37.5817 32.631 37.4418 31.6191 37.9548C30.5886 38.4818 29.9341 38.9947 28.7459 39.3351C25.0604 40.3937 25.9655 40.86 25.3946 43.7093C25.1996 44.6745 24.0438 44.6885 23.2547 44.5953C21.3284 44.3714 22.0015 44.5813 20.6554 45.6725C19.1097 46.9269 19.7178 47.7523 18.9612 48.2326C18.613 48.4518 16.501 49.571 16.4639 49.6036C15.8559 50.1212 16.1668 51.814 16.3339 52.5275C16.7331 54.2435 16.32 54.2016 16.2411 55.7171C16.1808 56.9249 17.0209 56.6964 16.5707 58.8881C16.3339 60.054 16.7192 61.0472 17.6476 61.7794C20.971 64.4001 19.4996 63.9571 21.528 66.8157C22.2846 67.8835 25.8309 68.3732 27.1816 68.7836C28.5231 69.1893 30.8114 69.0307 32.5428 69.3758C36.5207 70.2012 35.4021 68.1214 37.5976 66.9369ZM81.0347 96.4133C81.7356 97.0615 80.0507 97.5512 79.8418 98.1107C79.5493 98.8848 79.359 99.4911 79.0713 100.223C78.7835 100.96 79.7954 101.179 78.7417 102.303C78.0222 103.068 77.3863 101.352 77.2656 100.899C77.883 100.447 78.5003 99.9947 79.1223 99.5424C79.0945 99.5051 79.0713 99.4678 79.0434 99.4304C78.2172 99.8175 77.7205 100.363 77.0707 100.708C76.3698 101.081 75.8267 100.219 75.8174 99.603C77.5534 98.5444 79.2941 97.4765 81.0347 96.4133ZM80.7005 94.9118C80.7469 94.9118 80.7933 94.9118 80.8351 94.9118C80.9743 95.2708 81.1182 95.6299 81.2575 95.989C81.225 96.003 81.1879 96.0123 81.1554 96.0263C79.3869 97.1221 77.6138 98.2227 75.8453 99.3185C75.7107 98.9595 75.5807 98.5957 75.4461 98.2367C77.2006 97.1268 78.9506 96.0216 80.7005 94.9118ZM80.2688 93.8485C79.9207 94.646 81.1275 94.161 79.9207 95.0377C79.6607 95.2242 79.4704 95.518 79.2476 95.6299C78.8624 95.8211 79.0388 95.6998 78.5932 95.9796C77.3863 96.7211 76.8107 96.9123 75.5436 98.0175C75.525 97.8729 75.5018 97.7237 75.4832 97.5791C75.8499 97.2667 76.2212 96.9543 76.5879 96.6372C76.5508 96.5206 76.5137 96.4087 76.4719 96.2921C76.5926 96.1475 76.7179 96.003 76.8386 95.8584C77.6695 95.2662 78.5003 94.6739 79.3312 94.0817C79.6422 94.0024 79.9532 93.9231 80.2688 93.8485ZM81.42 92.9672C81.6103 92.7014 82.2183 92.1511 82.5433 92.1511C82.534 92.2304 82.5247 92.305 82.5154 92.3843C82.4365 92.4682 82.3576 92.5568 82.2787 92.6408C82.3019 92.6827 82.3251 92.7247 82.3483 92.7667C82.2601 92.8506 82.1766 92.9299 82.093 93.0138C81.8656 92.9905 81.6428 92.9765 81.42 92.9672ZM78.5328 91.8806C79.424 91.0273 80.8769 90.5936 81.4292 89.162C81.6799 88.5231 82.8078 88.0941 83.0678 88.9288C83.2627 89.5397 82.4968 89.5304 82.3994 90.4117C82.2926 91.3723 82.715 91.5449 82.093 92.0532C81.7309 92.3516 80.8537 93.1304 80.5195 93.247C79.7814 93.5035 77.3074 95.2428 77.0289 95.2708C76.9686 94.3801 76.6947 90.9014 78.5328 91.8806ZM80.7144 93.7273C81.4107 93.5594 82.1116 93.3915 82.8078 93.2237C82.9703 92.5801 83.1281 91.9319 83.2906 91.2884C83.142 91.2744 82.9889 91.2558 82.8403 91.2418C82.9517 90.9527 82.7707 90.5796 82.9285 90.3697C83.2349 89.9594 83.518 90.3698 83.6155 89.5957C83.6619 89.2412 83.4577 87.8376 82.7707 87.8329C82.0976 87.8283 81.0486 88.3552 80.8537 89.0734C80.7608 89.4231 79.7118 90.3045 79.359 90.6169C78.31 91.5356 76.1377 90.6775 76.4394 93.5921C76.7458 96.5625 74.8937 96.8983 74.9169 97.7237C74.9541 99.1413 75.2929 100.773 76.6668 101.286C76.9686 101.398 78.6674 104.928 79.684 101.804C79.7721 101.534 79.554 100.652 79.8325 99.603C79.995 98.9921 80.5102 98.0221 81.0579 97.7144C83.0585 96.5812 80.5798 94.5667 80.7144 93.7273ZM46.1291 29.3464C47.6098 28.6563 49.4897 26.5158 50.7011 25.891C52.2004 25.1215 53.8343 23.6013 55.3104 22.6966C58.4992 20.7427 61.9666 18.8914 65.0254 16.7836C67.5134 15.0676 83.5783 6.40324 84.0657 5.50324C83.5691 5.57785 66.3808 15.5712 64.6263 16.7557C63.0481 17.8235 61.3724 18.7189 59.7293 19.6749C58.6709 20.2904 55.9695 21.8433 55.1154 22.5148C52.6646 24.45 48.0229 27.0801 46.1291 29.3464ZM113.42 69.4411C114.371 69.6789 114.868 70.5556 114.724 71.2924C114.311 71.4323 112.789 70.6535 112.422 70.397C112.761 70.1312 113.104 69.8701 113.443 69.6043C113.438 69.5483 113.429 69.497 113.42 69.4411ZM110.635 69.1753C111.155 68.6157 111.902 68.4385 112.533 68.0048C113.132 67.5944 113.708 66.9276 114.348 67.4778C114.478 68.2053 113.216 70.038 111.944 70.1173C111.795 69.954 111.642 69.7908 111.494 69.6276C111.517 69.5996 111.545 69.5763 111.568 69.5483C111.257 69.4271 110.946 69.3012 110.635 69.1753ZM109.502 68.3126C109.966 67.9348 111.15 67.5105 111.665 67.5105C112.013 67.5198 112.362 67.5338 112.71 67.5431C111.888 68.0281 111.071 68.5084 110.254 68.9934C110.004 68.7649 109.753 68.5411 109.502 68.3126ZM113.754 66.7411C112.037 67.0815 111.373 67.1281 109.637 67.767C108.425 68.21 108.917 68.8115 109.818 69.3851C110.31 69.7022 110.672 69.5996 111.025 69.8841C111.368 70.1639 111.637 70.5183 112.004 70.7654C113.202 71.5722 115.745 73.1064 115.212 70.3504C114.933 68.9001 114.028 70.2245 114.566 68.3918C114.692 67.9628 115.119 67.6224 114.729 67.1934C114.552 67.0069 114.033 66.6851 113.754 66.7411ZM25.6452 67.7996C26.801 67.2867 28.1285 66.1115 29.2704 65.5799C30.5701 64.9737 32.0368 64.0737 33.3272 63.3742C35.8987 61.9845 37.8483 59.8021 40.5219 58.4638C42.5271 57.4565 45.8784 55.0223 47.8186 53.6466C48.6449 53.0637 50.6872 51.5249 51.4577 51.1751C52.4093 50.7414 54.3634 49.6969 55.0458 48.9508C54.5259 49.1046 51.7037 50.7088 51.0771 51.0819C50.0095 51.7207 48.5195 53.0451 47.5448 53.5441C45.1357 54.7845 42.6756 57.1348 40.2295 58.2912C37.6997 59.4897 35.5924 61.9472 33.1184 63.1597C32.1018 63.668 25.7102 67.0628 25.6452 67.7996ZM73.919 40.403C73.7565 40.445 67.8383 44.4227 67.1235 44.8844C65.9259 45.6538 64.8259 46.2041 63.6004 46.8989C62.3704 47.5937 61.1635 48.8761 60.2398 49.3378C58.0722 50.4197 54.4934 52.1684 52.5764 53.4928C51.5227 54.2249 50.2927 55.1109 49.2204 55.7638C48.8816 55.9689 45.9434 57.9415 45.9527 57.9462C46.4168 58.0627 52.024 54.1409 52.8503 53.6513C55.2593 52.2244 58.2857 50.844 60.5741 49.4311C61.7948 48.6756 62.5746 47.7756 64.06 46.9409C65.2993 46.2461 66.5247 45.5606 67.7408 44.8191C68.1447 44.5766 74.8566 40.1605 73.919 40.403ZM25.9284 32.8998C25.9423 32.8998 33.991 27.3925 34.4877 26.9682C36.0566 25.6392 37.398 25.3873 38.9251 24.2542C39.3197 23.9604 42.8659 21.321 42.9031 21.265C41.9051 21.4609 39.5193 23.3728 38.693 24.1143C37.6255 25.0749 35.5599 25.5506 34.2045 26.7723C33.1462 27.733 26.0676 32.1584 25.9284 32.8998ZM28.2074 54.2435C28.2492 54.2389 35.9544 49.4497 36.6785 48.9834C38.0107 48.1254 40.0763 47.1461 41.2228 46.0968C42.2393 45.1642 44.8665 44.2688 45.3725 43.574C43.033 44.031 39.1711 47.4958 36.725 48.6523C35.792 49.0953 28.3374 53.7399 28.2074 54.2435ZM25.7937 45.901C25.8309 45.9383 25.868 45.9803 25.9098 46.0176C26.9635 45.402 28.5277 44.2922 29.6278 43.574C30.7697 42.8232 32.2643 41.8253 33.4433 41.1911C34.7615 40.4869 35.9266 39.6382 37.3609 38.9154C37.6951 38.7429 41.3249 36.747 41.3388 36.733C41.0696 36.346 38.0293 38.188 37.528 38.4538C36.1912 39.1579 34.7337 40.2584 33.4433 40.902C32.4546 41.387 26.2115 45.2901 25.7937 45.901ZM38.3542 54.2435C44.8015 50.2705 51.2535 46.2974 57.7008 42.3243C57.2645 41.8719 55.7188 43.187 55.2779 43.5274C54.7255 43.9517 53.5511 44.6512 52.9152 44.9777C51.105 45.901 49.6892 47.0901 48.0507 47.9808C47.4148 48.3259 46.2173 49.1932 45.5674 49.6456C44.8712 50.1352 43.6829 50.5456 42.9913 51.0632C41.362 52.2757 39.9602 52.9565 38.3542 54.2435ZM54.1917 90.2019C54.7487 90.4537 61.1403 86.0236 62.0919 85.3241C62.9924 84.6619 69.8853 80.8147 69.8714 80.3578C69.3376 80.4184 54.3727 89.9127 54.1917 90.2019ZM48.6913 96.9309C48.7238 96.9216 52.2561 94.3195 52.8456 93.9558C54.3959 92.9952 55.8952 92.1884 57.4641 91.2091C58.9355 90.2905 60.2259 89.148 61.767 88.1547C62.3147 87.805 65.8795 85.45 65.6428 84.9884C65.5871 85.0023 63.8325 86.4013 63.6144 86.5739C62.9599 87.1008 62.1662 87.5438 61.5535 88.0381C61.0893 88.4112 59.8546 89.1387 59.2883 89.4931C58.6292 89.9034 58.0861 90.6076 57.2831 91.1112C55.8859 91.9879 48.9698 95.7045 48.6913 96.9309ZM66.172 76.7064C66.4876 76.9396 67.7733 75.8297 68.1122 75.5686C68.8084 75.0323 69.5093 74.8131 70.1917 74.4074C71.612 73.5681 72.9488 72.738 74.2857 71.8287C75.4322 71.0499 76.8989 70.066 77.9712 69.2219C78.4725 68.8255 81.9398 67.4639 82.028 66.9183C81.782 66.8903 78.1522 68.8955 77.637 69.1706C76.263 69.8888 75.3254 70.9053 74.0211 71.7587C71.6956 73.2836 68.0379 75.065 66.172 76.7064ZM53.6022 99.0994C54.02 99.3232 60.7969 94.548 61.6881 93.9558C62.2868 93.5594 69.2587 88.5184 69.2773 88.4951C68.5578 88.3179 62.5561 93.1444 61.5024 93.8579C60.6808 94.4081 53.6811 98.9221 53.6022 99.0994ZM52.0101 63.7612C53.4351 63.2016 67.6991 54.6679 67.9915 54.071C62.6675 57.2513 57.3388 60.4363 52.0147 63.6167C51.9915 63.5887 51.9683 63.5654 51.9498 63.5374C51.9683 63.612 51.9915 63.6866 52.0101 63.7612ZM46.0362 24.2495C47.2848 24.1143 51.3974 20.7661 52.7853 19.9407C53.398 19.5769 55.6538 18.3785 55.9741 18.0754C56.5033 17.5811 59.1398 15.8463 59.1815 15.7717C58.8659 15.394 56.4058 17.3899 55.9463 17.6603C55.3521 18.0147 55.1479 18.2526 54.4052 18.6396C53.9457 18.8821 53.1984 19.3624 52.7249 19.6795C51.5784 20.449 50.5155 21.1578 49.4804 22.0624C48.8166 22.6407 46.4818 23.5967 46.0362 24.2495ZM37.463 23.2189C43.1769 19.6096 48.8955 16.0002 54.6095 12.3955C53.6068 12.4701 47.2988 16.6577 45.9573 17.5251C44.7505 18.3085 42.3646 19.7308 41.4224 20.435C40.6333 21.0272 37.5048 22.4868 37.463 23.2189ZM60.4302 15.1329C61.2564 15.0816 72.053 8.04937 72.2804 7.54574C71.9184 7.11672 67.1235 10.8287 66.4458 11.2903C65.3736 12.0178 64.4963 12.6893 63.3684 13.3608C62.9135 13.6266 60.4162 14.6898 60.4302 15.1329ZM53.7183 17.1334C53.8854 17.1287 59.2233 13.6966 59.7432 13.3375C60.8247 12.596 65.0997 10.395 65.666 9.53695C65.3504 9.57892 60.0542 12.7919 59.525 13.2116C58.6106 13.9484 53.9225 16.4152 53.7183 17.1334ZM25 62.4788C25.0696 62.5488 25.1346 62.6187 25.2042 62.684C27.0238 61.4203 28.7319 60.1052 30.7232 59.1866C31.4009 58.8741 35.9776 56.1322 36.2701 55.6798C35.5553 55.7684 31.5587 58.4731 30.4679 59.028C29.4793 59.527 28.6205 59.998 27.6968 60.6415C26.9449 61.1731 25.7148 62.1058 25 62.4788ZM54.7626 65.2068C55.069 65.1789 56.9257 63.7939 57.4641 63.5234C58.4574 63.0244 59.409 62.5161 60.393 61.9752C61.1032 61.5788 64.928 59.1306 65.29 58.5757C64.9373 58.6223 60.458 61.5648 59.8778 61.9519C58.5828 62.8099 55.5471 64.0084 54.7626 65.2068ZM100.669 50.1445C101.036 50.5083 102.892 49.1046 103.431 48.8761C104.373 48.4751 105.501 48.1067 106.276 47.4305C107.103 46.7077 111.54 44.7305 111.661 44.1336C107.994 46.1388 104.331 48.144 100.669 50.1445ZM37.8297 57.1208C37.5465 57.5265 34.302 58.9254 34.3438 59.485C34.9008 59.4524 43.8314 53.614 44.2352 52.9938C44.212 52.9611 44.1935 52.9285 44.1703 52.8959C42.0583 54.3042 39.9417 55.7125 37.8297 57.1208ZM61.8737 66.6478C65.3411 64.6006 68.8084 62.5535 72.2711 60.5063C71.7884 60.2312 67.6898 63.0058 66.9703 63.3789C66.2787 63.7379 61.9341 66.0276 61.8737 66.6478ZM66.4087 9.02866C66.6083 9.02399 71.185 6.26335 71.5331 5.9649C72.3918 5.21878 75.5296 4.37007 76.4162 3.19026C76.1377 2.82653 74.462 4.25349 73.97 4.49598C73.4177 4.76644 71.496 5.55453 71.1989 5.825C70.6001 6.36128 66.4458 8.72088 66.4087 9.02866ZM70.3866 70.3644C70.6094 70.3691 72.1551 69.2452 72.5729 69.0354C73.3155 68.6576 74.3228 68.2613 74.9726 67.8089C75.9149 67.1561 78.8809 66.0183 79.4565 65.2955C79.2569 65.053 75.2094 67.3519 74.6663 67.697C74.1418 68.0374 70.1592 69.8095 70.3866 70.3644ZM17.6336 59.8208C18.0189 60.3198 25.2275 56.0762 25.9887 55.3767C25.6452 55.1669 22.4749 57.3166 21.8669 57.6244C21.463 57.8296 17.6568 59.7928 17.6336 59.8208ZM91.3718 47.7057C91.5017 47.7103 91.6271 47.7103 91.757 47.715C94.4678 46.1948 97.1832 44.6699 99.8986 43.1497C99.5365 42.8046 96.4544 44.7398 95.7767 45.1549C95.2801 45.458 91.46 47.5704 91.3718 47.7057ZM52.2979 77.7044C52.6507 77.8396 55.6121 76.0023 56.2016 75.7038C56.6054 75.4986 57.9468 74.8831 58.2068 74.6593C59.0933 73.8805 59.2372 73.9738 60.096 73.4002C59.8035 72.9991 57.0139 75.0043 56.2665 75.3867C55.8117 75.6106 52.4139 77.5178 52.2979 77.7044ZM52.038 105.101C52.0751 105.152 52.1076 105.204 52.1447 105.25C54.7719 103.52 57.1717 101.818 60.1609 100.321C59.3301 99.8455 53.5419 103.972 52.038 105.101ZM51.3185 103.59C51.5181 103.599 52.8688 102.28 53.1752 102.051C53.7739 101.594 54.7348 101.086 55.3057 100.652C55.9045 100.195 59.1119 98.4978 59.163 97.9615C58.5549 98.0408 51.1978 102.947 51.3185 103.59ZM98.1997 37.7077C101.194 36.0196 104.188 34.3268 107.177 32.6387C106.601 32.5501 98.6871 36.9522 98.1997 37.7077ZM60.1331 8.11466C60.1424 8.13797 60.1563 8.16129 60.1656 8.18461C59.6225 8.26855 56.2758 10.7354 55.8024 11.4675C56.1087 11.4396 58.787 9.24317 59.4879 8.85612C60.0913 8.52036 60.5508 8.11932 61.3214 7.73694C61.7206 7.53642 62.7139 6.92087 62.997 6.49651C62.9738 6.4592 62.9552 6.42656 62.932 6.38926C61.9991 6.95817 61.0661 7.53642 60.1331 8.11466ZM82.5525 34.3454C81.8748 34.4014 79.7443 35.5159 79.0248 35.9683C78.7092 36.1688 78.5096 36.1734 78.2033 36.3833C77.7716 36.6771 77.7391 36.5465 77.3863 36.8076C77.0289 37.0734 76.1795 37.218 75.8128 37.689C76.0263 37.8009 82.1719 34.9237 82.5525 34.3454ZM43.2234 47.687C43.2419 47.7243 43.2651 47.757 43.2837 47.7943C42.5828 47.9015 41.3945 48.8715 40.5451 49.2632C39.9138 49.557 38.1314 50.6435 38.0664 51.3663C38.3774 51.1611 38.5909 50.8067 38.8694 50.6435C39.134 50.4896 39.64 50.1865 39.8628 50.014C40.2109 49.7435 41.3249 49.086 41.7937 48.8388C42.2439 48.5963 45.2332 46.9269 45.4235 46.4792C44.6901 46.8756 43.9567 47.2813 43.2234 47.687ZM62.064 72.3183C62.1058 72.309 65.2668 70.4577 65.4757 70.2991C66.1627 69.7862 68.5856 68.6623 68.9848 68.0887C68.7527 67.9955 65.8981 69.6882 65.5964 69.9354C64.9048 70.509 62.1383 71.6281 62.064 72.3183ZM97.536 29.4397C100.725 27.7096 103.324 26.3107 106.453 24.5386C106.137 24.4314 97.652 28.9874 97.536 29.4397ZM66.3344 79.5417C66.3623 79.593 66.3901 79.6489 66.4226 79.7002C64.8166 80.6888 63.2059 81.6821 61.5999 82.6707C61.8273 82.8106 64.1853 81.407 64.5102 81.1412C64.6355 81.0386 67.5366 79.2339 67.5691 79.2292C67.5366 79.1733 67.5041 79.122 67.4716 79.066C67.4902 79.094 67.5088 79.122 67.5273 79.15C68.0797 78.7629 68.6274 78.3805 69.1798 77.9935C68.2468 78.0168 66.9796 79.4438 66.3344 79.5417ZM82.8403 54.4301C82.9703 54.4394 83.0956 54.4441 83.2256 54.4534C84.0611 53.9684 84.9012 53.4834 85.7367 52.9985C86.7626 52.5088 87.7884 52.0145 88.8142 51.5249C88.7863 51.4829 88.7538 51.4456 88.726 51.4036C88.9395 51.301 89.153 51.1984 89.3712 51.0958C89.0138 50.858 86.5815 52.3409 85.9131 52.658C84.7573 53.213 83.945 53.67 82.8403 54.4301ZM46.4168 21.363C48.5706 20.1412 50.0745 19.1619 52.3304 18.0474C52.3814 17.9028 52.4325 17.7583 52.4836 17.6137C52.0751 17.7349 52.1494 17.8655 51.778 17.9681C51.5227 18.0381 51.156 18.2619 50.8868 18.3971C49.615 19.0407 47.1409 20.2531 46.4168 21.363ZM92.509 37.4185C92.9639 37.2926 93.6369 36.6677 94.0315 36.5605C94.3982 36.4626 95.4333 36.0662 95.7071 35.8563C96.8722 34.9517 98.2693 34.3315 99.4344 33.5947C98.9935 33.5993 96.473 35.1335 96.0181 35.3947C95.2708 35.8237 92.6947 36.719 92.509 37.4185ZM100.474 39.2325C100.915 39.4564 105.775 36.0335 106.917 35.9729C106.253 35.3947 101.393 38.6823 100.474 39.2325ZM73.5383 6.73434C73.724 6.8276 75.9335 5.67111 76.328 5.54054C77.0103 5.31671 78.3471 4.22084 79.127 3.80115C79.062 3.7312 78.9923 3.65659 78.9274 3.58664C78.5096 3.9224 76.5787 5.18614 76.1748 5.34002C75.7292 5.50324 73.8447 6.34262 73.5383 6.73434ZM61.9712 16.751C63.2059 16.0375 64.4406 15.324 65.6753 14.6106C65.6521 14.5779 65.6289 14.5499 65.6057 14.5173C66.4737 14.0043 67.3463 13.4961 68.2143 12.9831C67.959 12.6007 65.5221 14.3448 65.174 14.6106C64.6031 15.0396 62.2265 16.3546 61.9712 16.751ZM70.1452 64.6286C70.9065 64.0317 71.8627 63.4441 72.5125 63.0151C73.1624 62.5861 74.8612 62.0965 75.1537 61.6488C74.4481 61.7187 69.7786 63.9338 70.1452 64.6286ZM4.32585 41.5315C4.76217 41.8393 5.9783 40.6735 6.50281 40.3191C7.6029 39.5776 7.51006 39.4237 8.77261 38.9714C8.28987 38.4818 7.04125 39.6989 6.51674 39.9647C6.12219 40.1605 5.85297 40.6035 5.50485 40.8041C5.25884 40.9439 4.51152 41.2237 4.32585 41.5315ZM65.6474 61.5695C67.3741 60.6648 69.1055 59.7602 70.8369 58.8508C70.8229 58.8229 70.8044 58.7902 70.7904 58.7622C70.3031 58.8135 65.5732 61.1778 65.6474 61.5695ZM7.16193 35.3714C7.4915 35.6045 8.79117 34.6346 9.20893 34.3175C9.91911 33.7765 10.6061 33.4641 11.3116 32.9278C10.8289 32.6434 7.66324 35.1009 7.16193 35.3714ZM70.1174 22.207C69.695 22.1277 68.2236 22.8599 67.8755 23.2935C68.1122 23.2656 68.3443 23.2422 68.581 23.2143C68.5624 23.1397 68.5485 23.065 68.5299 22.9904C68.6413 23.0184 68.7481 23.0417 68.8595 23.0697C69.9642 22.5008 71.0643 21.9319 72.169 21.363C72.1412 21.307 72.1133 21.251 72.0855 21.1951C71.4264 21.5308 70.7719 21.8666 70.1174 22.207ZM71.561 66.424C71.9509 66.6991 75.2094 64.3162 75.6503 63.8825C76.1006 64.0364 75.9613 64.0597 76.0031 63.6633C74.9309 63.7799 74.4713 64.6752 73.7147 65.0903C73.4548 65.2395 71.6956 66.2328 71.561 66.424ZM7.97423 33.0724C8.29451 33.3475 9.61276 32.4988 9.92839 32.2563C10.4251 31.8693 11.7154 31.4915 12.0775 31.2304C11.9986 31.1325 11.9197 31.0392 11.8408 30.9413C10.5504 31.6501 9.25999 32.3589 7.97423 33.0724ZM112.993 43.8631C113.248 43.8352 114.58 42.8372 114.998 42.6274C115.481 42.3896 115.564 42.1984 115.954 42.0445C116.042 42.0118 117.05 41.5269 117.068 41.5129C116.994 41.4383 116.92 41.359 116.845 41.2844C116.168 41.8253 113.058 43.1497 112.993 43.8631ZM3.18863 50.1072C2.83122 50.4057 2.46917 50.7088 2.11176 51.0072C2.15353 51.1145 2.19531 51.2218 2.23708 51.329C3.27683 50.499 4.31657 49.6689 5.35167 48.8388C4.91071 48.3166 3.62031 50.3217 3.18863 50.1072ZM5.63481 38.6683C6.49353 38.3185 6.95306 37.7543 7.70501 37.3066C8.33165 36.9382 9.58955 36.4579 10.0816 36.1128C9.97945 36.0709 9.87733 36.0289 9.77986 35.9869C9.23678 36.4299 5.6998 37.9175 5.63481 38.6683ZM26.9495 34.0796C27.3673 34.1543 30.0641 32.3402 30.389 31.8459C30.1941 31.8693 28.8433 32.6993 28.5695 32.8858C28.1935 33.1423 26.8845 33.7066 26.9495 34.0796ZM85.4536 41.2984C87.6027 40.0999 89.7472 38.9014 91.8963 37.7077C91.4739 37.5538 89.0927 39.1766 88.5775 39.4937C88.0344 39.8248 85.384 40.7807 85.4536 41.2984ZM106.174 58.0208C106.165 58.1467 106.151 58.2773 106.142 58.4032C106.156 58.4032 107.678 57.4892 107.984 57.3353C108.569 57.0368 109.479 56.8316 110.027 56.4819C109.419 56.0855 106.666 57.9135 106.174 58.0208ZM102.637 41.3916C102.971 41.6155 105.933 39.8527 106.346 39.2745C106.327 39.2465 106.313 39.2185 106.295 39.1859C105.079 39.918 103.858 40.6548 102.637 41.3916ZM97.8237 101.091C97.898 101.175 97.9723 101.258 98.0419 101.338C98.5896 100.951 101.751 100.522 102.47 100.587C102.052 99.9481 98.8078 100.895 97.8237 101.091ZM49.4525 24.4407C49.4943 24.45 49.5407 24.4594 49.5825 24.4687C50.8822 23.8298 51.8151 23.093 53.0638 22.235C52.7435 21.7826 49.7728 24.2169 49.4525 24.4407ZM2.02821 71.5489C2.84515 71.4743 4.39084 69.3898 4.96641 68.7602C4.53473 68.8115 2.05606 71.2831 2.02821 71.5489ZM9.24606 30.9553C9.71023 31.2257 10.5736 30.2931 11.0517 30.0319C11.7201 29.6635 12.3931 29.4211 13.1358 28.9687C12.8852 28.619 11.7479 29.4957 11.3116 29.7148C11.0331 29.8547 9.36674 30.7827 9.24606 30.9553ZM1.27161 60.7814C1.42943 60.7674 3.74564 58.7016 4.20981 58.3798C4.11698 58.3798 4.0195 58.3798 3.92667 58.3798C3.07259 58.6503 1.71257 60.1052 1.27161 60.7814ZM61.753 99.3745C61.7809 99.4165 61.8087 99.4584 61.8366 99.5004C63.1502 98.6144 64.4638 97.7237 65.7774 96.8377C65.2065 96.5579 62.5793 98.717 61.753 99.3745ZM64.0553 94.8185C65.796 93.6946 67.532 92.5755 69.2726 91.4516C68.7759 91.5029 64.4127 94.2682 64.0553 94.8185ZM77.4281 93.3729C78.7881 92.4449 80.1481 91.5122 81.5081 90.5843C80.9929 90.6402 77.4699 92.9019 77.4281 93.3729ZM71.2036 117.822C72.0019 117.967 72.805 118.116 73.6033 118.261C73.6776 118.163 73.7519 118.06 73.8261 117.962C72.9396 117.808 72.053 117.654 71.1664 117.505C71.1804 117.612 71.1943 117.72 71.2036 117.822ZM2.63627 52.8679C2.63627 52.8819 2.64091 52.9005 2.64091 52.9145C2.12104 53.3575 1.60117 53.8052 1.0813 54.2482C1.22055 54.2296 1.36444 54.2062 1.5037 54.1876C2.41347 53.4135 3.3186 52.6394 4.22838 51.8653C4.20517 51.8326 4.18196 51.8 4.15875 51.7674C3.6528 52.1358 3.14222 52.4995 2.63627 52.8679ZM17.0209 51.5295C17.1741 51.5295 17.3273 51.5295 17.4851 51.5249C17.4619 51.4876 17.4387 51.4503 17.4201 51.4083C18.613 50.6202 19.8059 49.8368 20.9989 49.0487C20.5208 49.1046 17.2948 51.1425 17.0209 51.5295ZM47.2152 80.7168C47.2013 80.8008 47.1874 80.8847 47.1734 80.9733C48.0507 80.8707 49.4943 79.1733 50.288 79.0194C50.2787 78.9774 50.2648 78.9355 50.2555 78.8982C49.0626 79.2759 48.2364 79.9847 47.2152 80.7168ZM3.23969 62.3016C2.6734 62.782 2.10712 63.2576 1.54083 63.7379C1.49441 63.9198 1.44799 64.1063 1.40158 64.2882C2.20923 63.5561 3.01225 62.8239 3.81526 62.0918C3.78277 62.0452 3.74564 61.9985 3.71315 61.9566C3.55997 62.0685 3.40215 62.1851 3.23969 62.3016ZM4.53009 46.5212C4.53937 46.5445 4.5533 46.5678 4.56258 46.5911C4.00557 46.9922 3.44393 47.3979 2.88692 47.8036C3.23969 47.9668 3.40679 47.8316 3.62495 47.5937C3.93595 47.3839 4.25159 47.1741 4.56258 46.9642C4.54401 46.8989 4.52545 46.8383 4.50224 46.773C4.89678 46.6891 5.5002 46.1948 5.54198 45.887C5.20313 46.0968 4.86429 46.3114 4.53009 46.5212ZM3.07259 73.5681C3.65745 73.5168 5.00354 71.8333 5.49092 71.4136C5.46771 71.381 5.43986 71.3483 5.41665 71.3157C4.46975 72.0105 3.73636 72.5468 3.07259 73.5681ZM1.84254 67.5105C1.91681 67.5245 1.99572 67.5385 2.06998 67.5525C2.91013 66.7364 3.75492 65.925 4.59507 65.1089C4.20053 65.1509 2.12104 67.0815 1.84254 67.5105ZM64.436 89.0454C64.9001 89.0034 67.2813 87.2733 67.5134 86.7604C66.6176 87.3993 65.7263 88.0381 64.8305 88.677C64.7005 88.8029 64.5659 88.9241 64.436 89.0454ZM100.307 99.0201C100.627 99.2439 102.749 98.7589 103.018 98.5817C102.591 98.5025 100.493 98.703 100.307 99.0201ZM60.6901 83.0531C60.3002 83.2956 59.9103 83.5334 59.5204 83.7759C59.4879 83.8925 59.46 84.0137 59.4276 84.1303C59.4832 84.1723 59.539 84.2189 59.5947 84.2609C60.1331 83.5661 61.2285 83.1744 61.4792 82.7826C61.2146 82.8712 60.9547 82.9598 60.6901 83.0531ZM4.14018 80.5769C5.16136 79.8401 5.09638 79.7282 5.90867 78.7816C5.5559 78.7862 4.1309 80.0173 4.14018 80.5769ZM10.6757 28.7029C10.7128 28.7309 10.7453 28.7589 10.7825 28.7869C11.6273 28.2646 12.472 27.7469 13.3122 27.2247C12.9037 27.0475 11.0656 28.3065 10.6757 28.7029ZM35.0447 8.68358C35.0957 8.53435 35.1514 8.38513 35.2025 8.2359C35.3 7.71828 35.3974 7.20532 35.4949 6.6877C35.4299 6.62242 35.3603 6.55713 35.2953 6.48718C35.0725 6.86491 34.7337 8.33383 35.0447 8.68358ZM1.09987 57.0648C1.14164 57.1208 1.17878 57.1814 1.22055 57.2373C1.93537 56.5612 2.64555 55.885 3.36038 55.2042C2.77552 55.2695 1.5826 56.5658 1.09987 57.0648ZM75.9102 117.123C75.836 117.039 75.7617 116.95 75.6828 116.866C74.968 116.726 74.2532 116.587 73.5383 116.447C73.5987 116.95 75.395 117.076 75.9102 117.123ZM112.631 83.0251C112.928 83.3562 114.863 82.9645 115.17 82.6194C115.077 82.6148 114.984 82.6101 114.891 82.6054C114.766 82.5961 112.71 82.9645 112.631 83.0251ZM68.9013 32.5874C70.2195 31.9625 71.5378 31.3377 72.8514 30.7128C72.6146 30.5589 69.1659 32.219 68.9013 32.5874ZM93.4559 40.2072C94.6256 39.6056 95.7907 39.004 96.9557 38.4071C96.422 38.3932 93.7576 39.7455 93.4559 40.2072ZM69.6532 85.3941C69.7693 85.3847 69.89 85.3801 70.0106 85.3707C70.4841 84.9557 70.9576 84.5407 71.431 84.1257C71.5935 84.0231 71.7513 83.9251 71.9137 83.8225C71.612 83.5008 69.9874 85.063 69.6532 85.3941ZM45.3725 8.38513C45.2889 8.39912 45.2054 8.40844 45.1172 8.42243C44.3142 8.95404 43.5111 9.48099 42.7081 10.0126C42.9449 10.1665 45.1497 8.73021 45.3725 8.38513ZM75.641 115.934C75.9892 116.199 76.9036 116.353 77.3306 116.353C77.3631 116.353 77.3956 116.353 77.4234 116.353C77.8041 116.353 77.7066 116.437 77.8969 116.176C77.5163 116.139 77.1403 116.102 76.7597 116.064C76.5369 115.999 75.7107 115.607 75.641 115.934ZM56.2341 34.0144C56.1969 34.0004 56.1598 33.9864 56.1227 33.9724C56.0205 34.075 55.9184 34.1822 55.8163 34.2848C55.8488 34.3315 55.8859 34.3734 55.9184 34.4201C56.0298 34.3874 56.1366 34.3594 56.248 34.3268C56.8096 33.9024 57.3759 33.4827 57.9376 33.0584C57.9097 33.0164 57.8819 32.9791 57.854 32.9371C57.3109 33.2962 56.7725 33.6553 56.2341 34.0144ZM98.4921 26.0169C98.5246 26.0635 98.5618 26.1055 98.5943 26.1521C99.4344 25.6625 100.279 25.1728 101.119 24.6785C99.8847 25.0749 99.5969 25.336 98.4921 26.0169ZM117.24 58.4731C117.597 58.7762 118.995 57.699 119.245 57.3446C119.227 57.3166 119.213 57.2886 119.194 57.2607C118.544 57.6664 117.89 58.0721 117.24 58.4731ZM114.534 80.7075C114.399 80.7728 114.265 80.8427 114.13 80.908C114.2 80.9686 114.269 81.0293 114.339 81.0899C114.794 80.9686 115.244 80.8521 115.699 80.7308C115.838 80.6748 115.977 80.6189 116.117 80.5629C115.912 80.3018 115.04 80.6469 114.534 80.7075ZM12.6531 26.1708C13.5489 26.0682 13.8367 25.5226 14.4541 24.921C14.1245 24.9583 12.8666 25.8443 12.6531 26.1708ZM89.4733 21.75C89.9375 21.5448 90.397 21.335 90.8612 21.1298C91.0933 20.9526 91.33 20.7754 91.5621 20.5982C91.2232 20.4769 89.7147 21.3769 89.4733 21.75ZM3.76885 76.7018C3.81062 76.7624 3.84776 76.823 3.88953 76.8836C4.30729 76.5665 4.72968 76.2541 5.14743 75.937C5.13351 75.9043 5.12423 75.8717 5.1103 75.8344C5.19849 75.7271 5.28204 75.6152 5.37024 75.508C5.34703 75.48 5.32382 75.4567 5.30061 75.4287C4.79002 75.853 4.27944 76.2774 3.76885 76.7018ZM98.8124 40.0673C98.7799 40.0579 98.7474 40.0533 98.715 40.0439C98.4179 40.2724 98.1255 40.5009 97.8284 40.7294C97.8702 40.7574 97.9073 40.7854 97.9491 40.8134C98.6314 40.3844 99.3184 39.96 100.001 39.531C99.8986 39.517 99.7918 39.503 99.6897 39.489C99.3973 39.6849 99.1049 39.8761 98.8124 40.0673ZM97.2342 29.5143C96.4684 29.6169 95.786 30.0832 95.3868 30.6615C96.0645 30.2744 96.7469 29.8874 97.4292 29.5003C97.3874 29.449 97.3456 29.3977 97.3039 29.3464C97.2807 29.4024 97.2575 29.4584 97.2342 29.5143ZM5.91796 85.6832C6.33571 85.3148 6.59565 84.8671 7.01804 84.4101C7.03197 84.3215 7.04125 84.2329 7.05518 84.149C6.75346 84.2795 5.74621 85.2308 5.91796 85.6832ZM15.8883 98.5911C15.7909 98.9595 15.698 99.3279 15.6006 99.6962C15.6748 99.7429 15.7491 99.7895 15.828 99.8361C15.9626 99.4678 16.0926 99.0994 16.2272 98.7263C16.204 98.6051 16.1761 98.4838 16.1529 98.3626C16.0647 98.4418 15.9765 98.5164 15.8883 98.5911ZM3.46714 44.8564C3.7967 45.2854 4.72968 44.1103 4.96177 43.7885C4.70183 43.7885 3.79206 44.6139 3.46714 44.8564ZM31.9208 30.82C31.9533 30.8667 31.9858 30.918 32.0183 30.9646C32.3153 30.7967 32.6171 30.6335 32.9141 30.4656C33.0812 30.2838 33.253 30.1019 33.4201 29.92C32.9977 29.9667 32.2132 30.5216 31.9208 30.82ZM67.1978 57.3586C67.2349 57.4099 67.2767 57.4658 67.3138 57.5171C67.8151 56.9995 68.4789 56.6498 69.1658 56.2301C69.1426 56.1835 69.1148 56.1368 69.0916 56.0902C68.4 56.384 67.8058 56.9202 67.1978 57.3586ZM61.0197 96.7397C61.4049 96.8936 62.6257 95.7465 63.0109 95.49C62.6443 95.532 61.2007 96.4646 61.0197 96.7397ZM101.802 97.4159C101.899 97.5232 101.997 97.6304 102.094 97.7377C102.563 97.3879 103.064 97.5232 103.593 97.2294C102.967 97.2107 102.447 97.304 101.802 97.4159ZM4.9432 82.1111C4.96641 82.1344 4.99426 82.1578 5.01747 82.1811C5.66731 81.5609 5.84833 81.2811 6.27073 80.6422C5.77406 80.936 5.30989 81.4863 4.9432 82.1111ZM92.7921 32.0371C92.8386 32.0511 92.885 32.0651 92.9314 32.0791C93.5302 31.7667 94.129 31.4589 94.7277 31.1511C94.7092 31.1092 94.6906 31.0718 94.6674 31.0299C94.1382 31.3143 93.1124 31.5428 92.7921 32.0371ZM13.2658 96.1149C13.2704 96.2921 13.2704 96.4693 13.2751 96.6465C13.3122 96.6558 13.354 96.6605 13.3911 96.6698C13.5675 96.0869 13.7439 95.5086 13.9203 94.9257C13.8924 94.9118 13.8599 94.9024 13.8321 94.8884C13.6418 95.2941 13.4561 95.7045 13.2658 96.1149ZM91.4043 41.387C91.3764 41.387 91.3439 41.387 91.3161 41.387C91.0004 41.6108 90.6894 41.8393 90.3738 42.0631C90.4017 42.1051 90.4342 42.1517 90.462 42.1937C91.0004 41.844 91.5389 41.4942 92.0773 41.1445C92.0495 41.1025 92.0216 41.0559 91.9984 41.0139C91.7988 41.1398 91.5992 41.2611 91.4043 41.387ZM6.73026 87.4645C6.75811 87.4832 6.78596 87.5019 6.81381 87.5158C7.1805 87.0635 7.54256 86.6158 7.90925 86.1635C7.20835 86.2381 7.0134 86.9656 6.73026 87.4645ZM68.2561 83.0531C68.2329 83.1697 68.205 83.2863 68.1818 83.4075C68.6831 83.0997 69.1891 82.792 69.6904 82.4795C69.6718 82.4422 69.6486 82.4049 69.63 82.3676C69.1705 82.5961 68.711 82.8246 68.2561 83.0531ZM22.1361 48.2839C22.6699 48.0181 23.199 47.7476 23.7328 47.4818C23.4265 47.1507 22.3867 47.8969 22.1361 48.2839ZM35.2582 52.658C34.9054 52.9425 34.548 53.227 34.1952 53.5161C34.237 53.572 34.2788 53.628 34.3206 53.684C34.7708 53.3156 35.221 52.9472 35.6713 52.5788C35.532 52.6021 35.3928 52.6301 35.2582 52.658ZM78.3147 115.155C78.7185 115.164 79.1223 115.174 79.5261 115.188C79.4472 115.118 79.3637 115.048 79.2848 114.978C78.7835 114.94 78.2822 114.898 77.7809 114.861C77.9619 114.959 78.1383 115.057 78.3147 115.155ZM19.9545 104.336C20.3212 104.234 20.3908 103.483 20.7111 102.989C20.1866 103.063 20.0659 103.861 19.9545 104.336ZM7.7143 89.2086C7.83498 89.2459 7.95102 89.2879 8.07171 89.3252C8.3595 89.0221 8.64728 88.7143 8.93507 88.4112C8.90257 88.3739 8.87008 88.3319 8.83759 88.2946C8.38735 88.6397 8.17847 88.9941 7.7143 89.2086ZM15.7909 22.9764C15.8559 23.0277 15.9255 23.0744 15.9905 23.1257C16.1529 22.7806 16.8585 22.8412 16.9931 22.3656C16.4361 22.4542 16.2458 22.622 15.7909 22.9764ZM14.2684 97.789C14.3009 97.789 14.338 97.789 14.3705 97.789C14.3891 97.7144 14.4123 97.6351 14.4308 97.5605C14.533 97.1548 14.6304 96.7491 14.7326 96.348C14.3334 96.6838 14.1848 97.2294 14.2684 97.789ZM21.6858 105.479C22.1779 105.32 22.0618 104.952 22.4053 104.555C22.3682 104.518 22.331 104.481 22.2893 104.448C22.0061 104.611 21.6766 105.064 21.6858 105.479ZM117.546 59.8208C118.182 59.4151 118.326 59.4664 118.874 58.8602C118.577 58.7529 117.755 59.499 117.546 59.8208ZM35.9869 6.47786C36.0705 6.70636 35.7409 7.13071 36.0705 7.51776C36.1262 7.27994 36.1819 7.04211 36.2376 6.79962C36.2654 6.61309 36.2933 6.43122 36.3165 6.24469C36.2097 6.32397 36.0983 6.40325 35.9869 6.47786ZM55.0458 2.13637C55.0504 2.22497 55.0597 2.31824 55.0643 2.40684C55.1618 2.47212 55.2593 2.53741 55.3568 2.6027C55.3753 2.29492 55.3985 1.98715 55.4171 1.67937C55.1247 1.67937 55.0226 1.73533 55.0458 2.13637ZM54.2149 1.88455C54.201 2.07108 54.1871 2.25761 54.1685 2.44414C54.2613 2.53275 54.3542 2.61669 54.447 2.70529C54.4563 2.40218 54.5538 1.6374 54.4238 1.47419C54.3588 1.60942 54.2892 1.74932 54.2149 1.88455ZM37.036 6.00687C37.0081 6.41257 36.9849 6.81827 36.957 7.22398C37.0035 7.22864 37.0545 7.23797 37.1009 7.24263C37.1659 6.75299 37.2355 6.26335 37.3005 5.77371C37.2123 5.85764 37.1241 5.93226 37.036 6.00687ZM48.2178 25.3081C48.255 25.3267 48.2921 25.3407 48.3246 25.3594C48.8677 25.0516 48.9141 24.8697 49.434 24.6132C49.4386 24.5573 49.4432 24.5013 49.4479 24.4454C48.928 24.6879 48.6495 24.9257 48.2178 25.3081ZM38.266 6.34262C38.3542 6.34729 38.4378 6.34729 38.5259 6.35195C38.5538 6.00687 38.6884 5.57319 38.5074 5.32603C38.136 5.67578 38.4099 5.96956 38.266 6.34262ZM58.3646 18.8635C58.5363 18.7702 58.7034 18.6769 58.8752 18.5883C58.9077 18.6023 58.9448 18.6163 58.9773 18.6303C59.2465 18.4204 59.5157 18.2106 59.785 18.0008C59.3765 18.0474 58.606 18.4951 58.3646 18.8635ZM118.516 61.6814C118.387 61.8213 118.257 61.9612 118.122 62.1058C118.619 62.1198 118.869 61.8773 119.129 61.4343C118.93 61.5182 118.721 61.5975 118.516 61.6814ZM5.65802 75.5779C5.97366 75.3494 6.32179 75.0183 6.37284 74.6499C6.05257 74.7432 5.64874 75.1302 5.65802 75.5779ZM100.34 42.7393C100.683 42.5714 101.022 42.4035 101.365 42.2403C101.398 42.2543 101.435 42.2683 101.467 42.2776C101.667 42.1331 101.871 41.9932 102.071 41.8486C101.95 41.8486 101.83 41.8486 101.709 41.8486C101.254 42.1471 100.794 42.4409 100.34 42.7393ZM92.95 19.908C92.7411 19.992 92.5322 20.0712 92.3233 20.1552C92.3744 20.2018 92.4254 20.2484 92.4765 20.2904C92.5693 20.2251 92.6668 20.1645 92.7596 20.0992C92.9732 19.978 93.182 19.8567 93.3956 19.7355C93.4373 19.7588 93.4837 19.7868 93.5255 19.8101C93.5952 19.7168 93.6694 19.6236 93.739 19.5303C93.5905 19.5396 93.442 19.5443 93.2934 19.5536C93.182 19.6749 93.066 19.7914 92.95 19.908ZM79.9996 114.213C80.3292 114.157 80.5752 114.246 80.9187 114.222C80.8676 114.012 80.357 113.919 80.0831 113.859C80.0599 113.975 80.0321 114.092 79.9996 114.213ZM17.1648 101.193C17.2669 100.731 17.3923 100.321 17.5686 99.9247C17.072 100.083 17.072 100.806 17.1648 101.193ZM8.95363 90.8267C8.99541 90.8687 9.03718 90.9107 9.07896 90.9527C9.36674 90.7475 9.69631 90.4723 9.6731 90.0993C9.43637 90.3418 9.195 90.5843 8.95363 90.8267ZM55.8906 20.351C56.248 20.3883 56.6332 20.1458 56.8375 19.8567C56.805 19.8241 56.7678 19.7914 56.7307 19.7588C56.4522 19.9593 56.1691 20.1552 55.8906 20.351ZM44.9779 11.1924C45.0197 11.239 45.0661 11.2857 45.1079 11.337C45.3493 11.1738 45.5953 11.0105 45.8366 10.8473C45.7949 10.8007 45.7531 10.7494 45.7113 10.7028C45.4699 10.866 45.2239 11.0292 44.9779 11.1924ZM118.312 63.64C118.628 63.64 118.939 63.3136 119.148 63.0151C118.8 63.0105 118.53 63.3369 118.312 63.64ZM9.83556 91.5122C9.82627 91.5822 9.82163 91.6475 9.81235 91.7128C10.1651 91.7221 10.3879 91.4936 10.4343 91.1485C10.2394 91.2744 10.0352 91.391 9.83556 91.5122ZM56.0902 2.05709C56.1134 2.23896 56.1412 2.42083 56.1644 2.60736C56.2016 2.61202 56.2341 2.61202 56.2712 2.61669C56.3176 2.31824 56.3594 2.01979 56.4058 1.726C56.299 1.83326 56.1923 1.94518 56.0902 2.05709ZM23.1944 106.421C23.2362 106.463 23.2779 106.5 23.3197 106.542C23.6632 106.201 23.7746 106.229 23.5843 105.782C23.4961 106.048 23.3708 106.197 23.1944 106.421ZM46.0362 24.2495C45.9944 24.2215 45.9527 24.1982 45.9109 24.1702C45.702 24.3894 45.4885 24.6086 45.2796 24.8278C45.651 24.7904 45.832 24.5573 46.0362 24.2495ZM48.2178 25.3081C48.1528 25.3034 48.0832 25.2987 48.0182 25.2941C47.7629 25.4713 47.5123 25.6485 47.257 25.8257C47.3405 25.835 47.4241 25.8397 47.5076 25.849C47.7444 25.6671 47.9811 25.4853 48.2178 25.3081ZM115.569 77.1914C115.82 77.3686 116.029 77.2194 116.205 76.9676C116.038 76.8044 115.718 77.0142 115.569 77.1914ZM118.14 60.7721C118.349 60.5576 118.563 60.3477 118.772 60.1332C118.41 60.1286 118.131 60.3757 118.14 60.7721ZM64.436 89.0454C64.1528 89.2692 63.865 89.4931 63.5819 89.7169C64.1946 89.6609 63.8836 89.3485 64.5241 89.2086C64.4963 89.1573 64.4638 89.1013 64.436 89.0454ZM43.474 5.03691C43.5993 4.87836 43.72 4.71981 43.8453 4.56592C43.5019 4.56126 43.2791 4.68251 43.474 5.03691Z"
              fill="#D9E6F7"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="121" height="122" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
  ])
const [lessons14b] = useState([
    {
      name: "Қазақ тілі",
      link: "kaz",
      img: (
        <svg
          width="185"
          height="190"
          viewBox="0 0 185 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7895 73.6394C16.7895 67.4401 21.7779 62.413 27.9341 62.413C34.0903 62.413 39.0787 67.4401 39.0787 73.6394H16.7895ZM56.025 73.6394H52.7752H56.025ZM27.4043 76.3781H11.1743H27.4043ZM16.7895 73.6394H0.55957H16.7895ZM52.7752 73.6394C52.7752 69.829 49.7083 66.7443 45.9288 66.7443C42.1493 66.7443 39.0824 69.829 39.0824 73.6394"
            fill="white"
          />
          <path
            d="M52.7752 73.6394C52.7752 69.829 49.7083 66.7443 45.9288 66.7443C42.1493 66.7443 39.0824 69.829 39.0824 73.6394M16.7895 73.6394C16.7895 67.4401 21.7779 62.413 27.9341 62.413C34.0903 62.413 39.0787 67.4401 39.0787 73.6394H16.7895ZM56.025 73.6394H52.7752H56.025ZM27.4043 76.3781H11.1743H27.4043ZM16.7895 73.6394H0.55957H16.7895Z"
            stroke="#D9E6F7"
            strokeWidth="3"
            strokeMiterlimit="2.6131"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M151.763 100.583C151.763 96.1145 155.36 92.4902 159.8 92.4902C164.236 92.4902 167.833 96.1145 167.833 100.583H151.763ZM141.894 100.583H132.089H141.894ZM175.612 102.556H160.18H175.612ZM172.071 100.583H167.833H172.071ZM151.763 100.583C151.763 97.8373 149.554 95.6121 146.827 95.6121C144.103 95.6121 141.891 97.8373 141.891 100.583"
            fill="white"
          />
          <path
            d="M151.763 100.583C151.763 97.8373 149.554 95.6121 146.827 95.6121C144.103 95.6121 141.891 97.8373 141.891 100.583M151.763 100.583C151.763 96.1145 155.36 92.4902 159.8 92.4902C164.236 92.4902 167.833 96.1145 167.833 100.583H151.763ZM141.894 100.583H132.089H141.894ZM175.612 102.556H160.18H175.612ZM172.071 100.583H167.833H172.071Z"
            stroke="#D9E6F7"
            strokeWidth="3"
            strokeMiterlimit="2.6131"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M152.349 28.8934C152.174 28.8934 152.006 28.8115 151.901 28.6701C150.748 27.1259 148.196 26.7278 146.092 27.7622C145.816 27.8999 145.48 27.7845 145.342 27.5092C145.204 27.2338 145.32 26.8989 145.596 26.7612C147.842 25.6561 150.536 25.9314 152.159 27.3231C153.17 25.3249 155.207 24.4505 158.371 24.6477C158.68 24.6663 158.912 24.9342 158.893 25.2393C158.874 25.5482 158.621 25.7789 158.3 25.7603C154.326 25.5073 153.3 27.2078 152.882 28.5064C152.819 28.7036 152.647 28.8525 152.442 28.886C152.409 28.8934 152.379 28.8934 152.349 28.8934Z"
            fill="#D9E6F7"
          />
          <path
            d="M172.534 40.7598C172.358 40.7598 172.19 40.6779 172.086 40.5365C171.179 39.3235 169.168 39.0146 167.504 39.8295C167.228 39.9672 166.892 39.8519 166.754 39.5765C166.616 39.3011 166.732 38.9662 167.008 38.8286C168.821 37.9355 170.989 38.1327 172.347 39.2156C173.209 37.6527 174.918 36.9457 177.421 37.102C177.731 37.1206 177.966 37.3885 177.944 37.6937C177.925 38.0025 177.66 38.2332 177.35 38.2146C174.194 38.0137 173.392 39.3495 173.063 40.3691C173 40.5663 172.828 40.7151 172.623 40.7486C172.593 40.7561 172.563 40.7598 172.534 40.7598Z"
            fill="#D9E6F7"
          />
          <path
            d="M129.03 22.5751C128.854 22.5751 128.686 22.4932 128.582 22.3518C127.429 20.8076 124.877 20.4094 122.773 21.4439C122.497 21.5816 122.161 21.4662 122.023 21.1908C121.885 20.9155 122 20.5806 122.276 20.4429C124.523 19.3378 127.216 19.6131 128.839 21.0048C129.85 19.0066 131.884 18.1321 135.051 18.3294C135.361 18.348 135.592 18.6159 135.574 18.921C135.555 19.2299 135.301 19.4606 134.981 19.442C131.007 19.1889 129.981 20.8894 129.563 22.1881C129.5 22.3853 129.328 22.5341 129.123 22.5676C129.089 22.5751 129.059 22.5751 129.03 22.5751Z"
            fill="#D9E6F7"
          />
          <path
            d="M180.622 65.7354C180.492 65.7354 180.369 65.6759 180.29 65.568C179.749 64.8424 178.541 64.66 177.533 65.1512C177.328 65.2517 177.078 65.1661 176.977 64.9614C176.877 64.7568 176.962 64.5075 177.168 64.407C178.309 63.8488 179.63 63.953 180.492 64.6079C181.052 63.6665 182.115 63.2386 183.663 63.3316C183.891 63.3465 184.066 63.54 184.051 63.7707C184.036 63.9977 183.85 64.1726 183.611 64.1577C181.727 64.0423 181.234 64.7865 181.018 65.4489C180.969 65.5977 180.843 65.7056 180.69 65.728C180.664 65.7317 180.641 65.7354 180.622 65.7354Z"
            fill="#D9E6F7"
          />
          <path
            d="M74.3554 189.955C74.3218 189.955 74.2882 189.952 74.2509 189.944C73.9673 189.892 73.7733 189.635 73.7957 189.349L80.9145 103.873L76.6798 84.4043C76.6425 84.2406 76.6835 84.0657 76.7917 83.9355C76.8962 83.8053 77.0566 83.7271 77.2282 83.7271H79.3325C79.6012 83.7271 79.8325 83.9169 79.881 84.1811L83.5747 103.731C83.5822 103.772 83.5859 103.817 83.5822 103.858L81.1757 157.925L79.9743 172.306C79.9705 172.344 79.9631 172.381 79.9519 172.418L74.8852 189.546C74.818 189.795 74.5979 189.955 74.3554 189.955ZM77.9222 84.8471L82.0263 103.72C82.0375 103.776 82.0413 103.828 82.0375 103.884L75.3627 184.005L78.8662 172.161L80.0638 157.858L82.4666 103.877L78.8736 84.8434H77.9222V84.8471Z"
            fill="#D9E6F7"
          />
          <path
            d="M78.0043 189.955C77.9707 189.955 77.9334 189.952 77.8998 189.944C77.6162 189.892 77.4222 189.635 77.4446 189.349L84.5634 103.873L80.3735 84.4043C80.3399 84.2406 80.3809 84.0657 80.4854 83.9355C80.5899 83.8053 80.7503 83.7271 80.9219 83.7271H85.1716C85.291 83.7271 85.4029 83.7643 85.4924 83.8276C85.5857 83.7606 85.6976 83.7271 85.8133 83.7271H88.6041C88.8951 83.7271 89.1376 83.9504 89.1638 84.2406L90.7084 103.791C90.7084 103.813 90.7121 103.836 90.7084 103.858L87.746 170.081C87.746 170.118 87.7385 170.159 87.7273 170.197L82.7016 189.531C82.6307 189.81 82.3547 189.989 82.0674 189.94C81.7801 189.892 81.5786 189.635 81.601 189.349L82.627 175.812L78.5341 189.55C78.4669 189.795 78.2468 189.955 78.0043 189.955ZM81.6159 84.8471L85.679 103.724C85.6902 103.776 85.6939 103.832 85.6902 103.888L79.0117 184.065L83.0524 170.513C83.1344 170.241 83.4105 170.074 83.6904 170.122C83.9702 170.174 84.1679 170.427 84.1455 170.714L83.1979 183.217L86.6379 169.981L89.5966 103.85L88.093 84.8471H86.4625L89.119 103.761C89.1265 103.802 89.1265 103.839 89.1227 103.88L84.4851 165.821C84.4627 166.126 84.194 166.356 83.8918 166.338C83.5859 166.319 83.3508 166.063 83.3658 165.757L86.1118 103.85L84.653 84.8471H81.6159ZM86.317 91.8576L87.2348 103.798C87.2348 103.821 87.2386 103.843 87.2348 103.865L86.1193 129.012L88.0034 103.858L86.317 91.8576Z"
            fill="#D9E6F7"
          />
          <path
            d="M105.957 189.955C105.715 189.955 105.491 189.795 105.42 189.557L100.309 172.429C100.297 172.392 100.29 172.355 100.286 172.318L99.0847 157.958L96.6782 103.869C96.6745 103.824 96.6782 103.784 96.6857 103.743L100.379 84.1922C100.428 83.9281 100.659 83.7383 100.928 83.7383H103.032C103.2 83.7383 103.36 83.8164 103.469 83.9467C103.573 84.0769 103.614 84.2518 103.581 84.4155L99.3496 103.884L106.513 189.356C106.536 189.643 106.342 189.9 106.058 189.952C106.024 189.952 105.991 189.955 105.957 189.955ZM101.398 172.165L104.946 184.057L98.2266 103.888C98.2229 103.832 98.2266 103.776 98.2378 103.724L102.342 84.8509H101.398L97.805 103.884L100.208 157.887L101.398 172.165Z"
            fill="#D9E6F7"
          />
          <path
            d="M102.264 189.955C102.021 189.955 101.797 189.795 101.726 189.557L96.1449 170.829C96.1337 170.788 96.1262 170.751 96.1225 170.71L95.7792 165.821L93.0332 103.865C93.0332 103.843 93.0332 103.821 93.0332 103.798L94.5368 84.248C94.5592 83.9578 94.8017 83.7308 95.0965 83.7308H99.3909C99.5588 83.7308 99.7192 83.8089 99.8274 83.9392C99.9319 84.0694 99.9729 84.2443 99.9393 84.408L95.7046 103.877L102.827 189.353C102.85 189.639 102.656 189.896 102.372 189.948C102.331 189.952 102.297 189.955 102.264 189.955ZM97.2343 170.569L101.256 184.065L94.5741 103.888C94.5704 103.832 94.5741 103.776 94.5853 103.724L98.6894 84.8508H95.6076L94.1488 103.854L96.8948 165.761L97.2343 170.569Z"
            fill="#D9E6F7"
          />
          <path
            d="M98.0963 189.955C97.8463 189.955 97.6187 189.788 97.5553 189.539L92.5333 170.204C92.5221 170.167 92.5184 170.126 92.5147 170.089L89.5933 103.865C89.5933 103.843 89.5933 103.821 89.5933 103.798L91.0969 84.248C91.1193 83.9578 91.3618 83.7308 91.6565 83.7308H94.4473C94.6078 83.7308 94.7645 83.8015 94.8689 83.9243C94.9771 84.0471 95.0219 84.2071 94.9995 84.3671L92.2609 103.858L98.6559 189.356C98.6783 189.643 98.4731 189.9 98.1896 189.948C98.1597 189.952 98.1299 189.955 98.0963 189.955ZM93.6302 169.981L97.0777 183.243L91.1416 103.884C91.1379 103.843 91.1416 103.806 91.1454 103.765L93.8056 84.8508H92.1751L90.7126 103.854L93.6302 169.981Z"
            fill="#D9E6F7"
          />
          <path
            d="M103.081 84.8472H77.1876C76.8779 84.8472 76.6279 84.5978 76.6279 84.289V76.6348C76.6279 76.326 76.8779 76.0767 77.1876 76.0767H103.081C103.391 76.0767 103.641 76.326 103.641 76.6348V84.289C103.641 84.5978 103.387 84.8472 103.081 84.8472ZM77.7472 83.7308H102.521V77.193H77.7472V83.7308Z"
            fill="#D9E6F7"
          />
          <path
            d="M79.1275 77.193C79.1238 77.193 79.1238 77.193 79.1201 77.193H77.1874C76.9747 77.193 76.777 77.0702 76.6837 76.8804L57.704 37.9955C57.5772 37.7351 57.6704 37.4225 57.9167 37.2736C58.1629 37.1248 58.4838 37.1881 58.6554 37.4188L74.1989 58.3533C74.2362 58.4054 74.266 58.465 74.2847 58.5245L79.6275 76.3929C79.6648 76.4674 79.6835 76.5492 79.6835 76.6348C79.6872 76.9436 79.4372 77.193 79.1275 77.193ZM77.5344 76.0766H78.3664L73.24 58.9375L61.3567 42.9333L77.5344 76.0766Z"
            fill="#D9E6F7"
          />
          <path
            d="M84.321 77.193C84.3173 77.193 84.3173 77.193 84.3136 77.193H82.5115C82.2988 77.193 82.1011 77.0702 82.0078 76.8804L62.9423 37.9955C62.8154 37.7351 62.9087 37.4225 63.155 37.2736C63.4012 37.1248 63.7221 37.1881 63.8937 37.4188L79.3924 58.3533C79.4297 58.4054 79.4595 58.465 79.4782 58.5245L84.821 76.3929C84.8583 76.4674 84.877 76.5492 84.877 76.6348C84.8807 76.9436 84.6307 77.193 84.321 77.193ZM82.8622 76.0766H83.5636L78.4372 58.9375L66.6547 43.0227L82.8622 76.0766Z"
            fill="#D9E6F7"
          />
          <path
            d="M89.5183 77.193C89.5146 77.193 89.5146 77.193 89.5109 77.193H87.7088C87.4961 77.193 87.2984 77.0702 87.2051 76.8804L68.1396 37.9955C68.0127 37.7351 68.106 37.4225 68.3522 37.2736C68.5985 37.1248 68.9193 37.1881 69.091 37.4188L84.5934 58.3533C84.6307 58.4054 84.6605 58.465 84.6792 58.5245L90.022 76.3929C90.0593 76.4674 90.078 76.5492 90.078 76.6348C90.078 76.9436 89.828 77.193 89.5183 77.193ZM88.0558 76.0766H88.7572L83.6345 58.9375L71.8482 43.0189L88.0558 76.0766Z"
            fill="#D9E6F7"
          />
          <path
            d="M90.97 77.1929H89.5112C89.2612 77.1929 89.0448 77.0292 88.974 76.7911L83.6498 58.7961C83.6311 58.7329 83.6237 58.6696 83.6274 58.6026L84.9146 37.6234C84.9333 37.3481 85.1497 37.1248 85.4258 37.1025C85.7018 37.0801 85.9556 37.2625 86.019 37.5304L90.9589 58.5505C90.9663 58.5877 90.9738 58.625 90.9738 58.6622L91.5334 76.6125C91.5372 76.765 91.4812 76.9101 91.3767 77.018C91.2685 77.1297 91.123 77.1929 90.97 77.1929ZM89.9291 76.0766H90.3955L89.8582 58.7589L85.8026 41.497L84.7542 58.5803L89.9291 76.0766Z"
            fill="#D9E6F7"
          />
          <path
            d="M102.95 77.193H101.189C101.01 77.193 100.846 77.1074 100.738 76.966C100.633 76.8246 100.599 76.6385 100.652 76.4711L106.491 57.5682C106.509 57.505 106.539 57.4491 106.577 57.397L121.605 37.4151C121.777 37.1844 122.101 37.1248 122.344 37.2737C122.59 37.4225 122.68 37.7351 122.553 37.9955L103.443 76.8804C103.357 77.0702 103.163 77.193 102.95 77.193ZM101.946 76.0767H102.599L118.941 42.8254L107.535 57.9924L101.946 76.0767Z"
            fill="#D9E6F7"
          />
          <path
            d="M97.7564 77.1929H95.9543C95.7789 77.1929 95.611 77.1111 95.5066 76.9697C95.4021 76.8283 95.3685 76.646 95.4208 76.4748L100.79 58.5245C100.808 58.4612 100.838 58.4054 100.876 58.3533L116.378 37.4188C116.55 37.1881 116.87 37.1211 117.12 37.2736C117.367 37.4225 117.46 37.7351 117.333 37.9955L98.2675 76.8804C98.1631 77.0702 97.9691 77.1929 97.7564 77.1929ZM96.7005 76.0766H97.4019L113.61 43.0189L101.823 58.9375L96.7005 76.0766Z"
            fill="#D9E6F7"
          />
          <path
            d="M92.5591 77.193H90.757C90.5817 77.193 90.4138 77.1111 90.3093 76.9697C90.2048 76.8283 90.1713 76.646 90.2235 76.4748L95.5887 58.5245C95.6074 58.4612 95.6372 58.4054 95.6745 58.3533L111.218 37.4188C111.39 37.1881 111.71 37.1248 111.957 37.2736C112.203 37.4225 112.296 37.7351 112.169 37.9955L93.0591 76.8804C92.9658 77.0702 92.7718 77.193 92.5591 77.193ZM91.507 76.0766H92.2084L108.461 43.0041L96.6297 58.9375L91.507 76.0766Z"
            fill="#D9E6F7"
          />
          <path
            d="M90.7569 77.193H89.2981C89.1451 77.193 89.0034 77.1334 88.8952 77.0218C88.7907 76.9139 88.7347 76.7688 88.7385 76.6162L89.2981 58.6659C89.2981 58.6287 89.3056 58.5915 89.313 58.5543L94.2492 37.5341C94.3126 37.2662 94.5626 37.0839 94.8424 37.1062C95.1185 37.1285 95.3386 37.3518 95.3536 37.6272L96.6408 58.6064C96.6445 58.6696 96.637 58.7366 96.6184 58.7999L91.2942 76.7948C91.2233 77.0293 91.0032 77.193 90.7569 77.193ZM89.8727 76.0767H90.3353L95.514 58.5766L94.4656 41.4933L90.41 58.7552L89.8727 76.0767Z"
            fill="#D9E6F7"
          />
          <path
            d="M88.4366 28.8343C88.306 28.8343 88.1754 28.7897 88.0747 28.7041C87.9478 28.5962 87.877 28.4436 87.877 28.2762V27.4985C87.877 26.4082 88.7276 25.5561 89.8096 25.5561H90.4551C91.4961 25.5561 92.343 26.4268 92.343 27.4985V28.2762C92.343 28.4399 92.2721 28.5925 92.1453 28.7004C92.0221 28.8083 91.8542 28.8529 91.6938 28.8269C91.164 28.745 90.6305 28.7041 90.0633 28.7041C89.5298 28.7041 89 28.745 88.5262 28.8269C88.5 28.8306 88.4665 28.8343 88.4366 28.8343ZM90.0671 27.5878C90.4663 27.5878 90.8469 27.6064 91.2237 27.6436V27.4985C91.2237 27.0371 90.8842 26.6724 90.4551 26.6724H89.8096C89.347 26.6724 88.9963 27.0259 88.9963 27.4985V27.6399C89.3432 27.6064 89.7014 27.5878 90.0671 27.5878Z"
            fill="#D9E6F7"
          />
          <path
            d="M91.0557 26.8026C90.9699 26.8026 90.8841 26.784 90.802 26.7431C90.7162 26.6984 90.5856 26.6724 90.455 26.6724H89.8095C89.6752 26.6724 89.5484 26.6984 89.4626 26.7431C89.2835 26.8324 89.0671 26.8212 88.8992 26.7096C88.7313 26.598 88.638 26.4045 88.6529 26.2035L89.5111 14.9586C89.5334 14.6683 89.776 14.4413 90.0707 14.4413H90.1565C90.4475 14.4413 90.6901 14.6646 90.7162 14.9548L91.6191 26.1998C91.634 26.4008 91.5407 26.5943 91.3728 26.7059C91.2758 26.7691 91.1676 26.8026 91.0557 26.8026ZM89.8245 25.5561H90.4401L90.1229 21.6229L89.8245 25.5561Z"
            fill="#D9E6F7"
          />
          <path
            d="M90.0667 55.0044C89.8392 55.0044 89.5817 55.0044 89.3131 54.9486C89.1004 54.9039 88.9288 54.7402 88.8803 54.5281L85.7985 41.4338L85.0896 52.835C85.0784 53.0322 84.9627 53.2071 84.7836 53.2964C84.6083 53.3857 84.3956 53.3746 84.2277 53.2704C80.4407 50.8517 78.0864 46.26 78.0864 41.2961C78.0864 33.7386 83.4628 27.5878 90.0667 27.5878C96.6744 27.5878 102.047 33.7349 102.047 41.2961C102.047 46.2041 99.745 50.755 96.0401 53.1811C95.8722 53.289 95.6595 53.3039 95.4842 53.2146C95.3051 53.1253 95.1894 52.9504 95.1745 52.7494L94.4656 41.43L91.3838 54.5281C91.3316 54.7476 91.1562 54.9151 90.9323 54.9523C90.6301 55.0044 90.3466 55.0044 90.0667 55.0044ZM89.8802 53.8844C90.0481 53.8881 90.2272 53.8881 90.3913 53.8806L94.2492 37.4895C94.3127 37.2215 94.5589 37.0355 94.8425 37.0615C95.1185 37.0839 95.3387 37.3071 95.3536 37.5825L96.2341 51.6666C99.1555 49.341 100.931 45.4599 100.931 41.2961C100.931 34.3526 96.0588 28.7041 90.0705 28.7041C84.0822 28.7041 79.2095 34.3526 79.2095 41.2961C79.2095 45.5232 81.0377 49.4452 84.0374 51.7671L84.9179 37.5825C84.9366 37.3071 85.153 37.0839 85.4291 37.0615C85.7089 37.0392 85.9589 37.2215 86.0223 37.4895L89.8802 53.8844Z"
            fill="#D9E6F7"
          />
          <path
            d="M77.1873 77.193C76.8851 77.193 76.6352 76.9511 76.6277 76.6497L76.4598 69.8923L69.688 62.4353C69.5873 62.3237 69.535 62.1748 69.5462 62.0223L70.0387 54.7662L63.9012 50.4908C63.6475 50.3159 63.584 49.9661 63.7631 49.7131C63.9385 49.4601 64.2892 49.4005 64.5429 49.5754L70.9416 54.0295C71.102 54.1411 71.1916 54.3309 71.1804 54.5244L70.6804 61.8586L77.4336 69.2932C77.5231 69.3937 77.5754 69.5202 77.5791 69.6541L77.7507 76.6199C77.7582 76.9288 77.5157 77.1855 77.206 77.193C77.1948 77.193 77.1911 77.193 77.1873 77.193Z"
            fill="#D9E6F7"
          />
          <path
            d="M102.95 77.193C102.939 77.193 102.928 77.193 102.92 77.193C102.61 77.1744 102.375 76.9139 102.39 76.605L102.778 69.6393C102.786 69.5127 102.834 69.3937 102.92 69.3006L109.546 61.866L108.923 54.5356C108.905 54.3346 108.998 54.1411 109.166 54.0295L115.695 49.5754C115.949 49.4005 116.3 49.4675 116.471 49.7205C116.647 49.9736 116.579 50.3233 116.326 50.4982L110.069 54.77L110.684 62.0148C110.699 62.1674 110.647 62.32 110.546 62.4316L103.89 69.8997L103.513 76.6683C103.491 76.9623 103.245 77.193 102.95 77.193Z"
            fill="#D9E6F7"
          />
          <path
            d="M82.5114 77.193C82.2129 77.193 81.9629 76.9548 81.9517 76.6571L81.7017 69.896L74.9672 62.4353C74.8665 62.3237 74.8143 62.1786 74.8255 62.0297L75.2396 54.7142L67.5649 47.2795C67.3447 47.0637 67.3373 46.7102 67.5537 46.4907C67.7701 46.2711 68.1245 46.2637 68.3447 46.4795L76.2022 54.0927C76.3179 54.2044 76.3813 54.3644 76.3701 54.5244L75.9522 61.8623L82.6681 69.3006C82.7576 69.3974 82.8061 69.5239 82.8098 69.6541L83.0673 76.6199C83.0785 76.9288 82.836 77.1855 82.53 77.1967C82.5263 77.193 82.5188 77.193 82.5114 77.193Z"
            fill="#D9E6F7"
          />
          <path
            d="M97.7563 77.1483C97.7489 77.1483 97.7414 77.1483 97.7339 77.1483C97.4243 77.1371 97.1855 76.8767 97.1967 76.5716L97.4541 69.6504C97.4578 69.5202 97.5101 69.3937 97.5959 69.2969L104.312 61.8586L103.894 54.5207C103.886 54.3607 103.946 54.2044 104.062 54.089L112.005 46.3455C112.225 46.1297 112.58 46.1334 112.796 46.353C113.012 46.5725 113.009 46.926 112.789 47.1418L105.028 54.7067L105.446 62.0223C105.453 62.1711 105.401 62.3162 105.304 62.4279L98.5697 69.8886L98.3197 76.6088C98.301 76.9139 98.0548 77.1483 97.7563 77.1483Z"
            fill="#D9E6F7"
          />
          <path
            d="M87.7089 77.1929C87.4104 77.1929 87.1604 76.9585 87.1492 76.6571L86.8992 70.0225L80.161 62.4316C80.064 62.32 80.0118 62.1785 80.023 62.0297L80.4408 54.7179L72.7698 47.3688C72.546 47.1567 72.5385 46.8032 72.7549 46.58C72.9676 46.3567 73.322 46.3492 73.5459 46.5651L81.4034 54.0927C81.5228 54.2044 81.5825 54.3644 81.5751 54.5281L81.1572 61.8697L87.8768 69.4383C87.9626 69.535 88.0111 69.6578 88.0185 69.7881L88.276 76.6236C88.2872 76.9325 88.0484 77.1892 87.7387 77.2041C87.7201 77.1929 87.7126 77.1929 87.7089 77.1929Z"
            fill="#D9E6F7"
          />
          <path
            d="M92.7307 76.8469C92.727 76.8469 92.7233 76.8469 92.7195 76.8469C92.4098 76.8394 92.1636 76.5864 92.1711 76.2776L92.3017 69.6578C92.3054 69.5239 92.3539 69.3974 92.4434 69.2969L99.1145 61.8585L98.6966 54.5207C98.6892 54.3569 98.7489 54.1969 98.8683 54.0853L106.685 46.6469C106.909 46.4348 107.263 46.4423 107.476 46.6655C107.688 46.8888 107.681 47.2423 107.457 47.4544L99.8271 54.7179L100.241 62.0297C100.249 62.1786 100.2 62.3237 100.099 62.4316L93.4098 69.8885L93.2829 76.2999C93.2829 76.6013 93.0367 76.8469 92.7307 76.8469Z"
            fill="#D9E6F7"
          />
          <path
            d="M115.788 55.0453H64.4757C64.166 55.0453 63.916 54.796 63.916 54.4872C63.916 54.1783 64.166 53.929 64.4757 53.929H115.788C116.098 53.929 116.348 54.1783 116.348 54.4872C116.348 54.796 116.098 55.0453 115.788 55.0453Z"
            fill="#D9E6F7"
          />
          <path
            d="M73.367 44.7083C73.3558 44.7083 73.3483 44.7083 73.3371 44.7083C73.0274 44.6934 72.7924 44.4292 72.8073 44.1241C73.2476 35.5954 79.941 28.5255 88.3806 27.6808C88.6828 27.651 88.9627 27.8743 88.9925 28.1794C89.0223 28.4845 88.7985 28.7599 88.4925 28.7897C80.5977 29.5822 74.3333 36.1983 73.9229 44.1799C73.908 44.4776 73.6617 44.7083 73.367 44.7083Z"
            fill="#D9E6F7"
          />
          <path
            d="M90.1119 28.7041H89.7686C89.459 28.7041 89.209 28.4548 89.209 28.1459C89.209 27.8371 89.459 27.5878 89.7686 27.5878H90.1119C90.4216 27.5878 90.6716 27.8371 90.6716 28.1459C90.6716 28.4548 90.4216 28.7041 90.1119 28.7041Z"
            fill="#D9E6F7"
          />
          <path
            d="M106.901 44.2766C106.614 44.2766 106.368 44.0534 106.346 43.7631C105.722 35.8448 99.5737 29.545 91.7348 28.7897C91.4289 28.7599 91.2013 28.4883 91.2311 28.1794C91.261 27.8706 91.5334 27.651 91.843 27.6771C100.227 28.4845 106.797 35.2122 107.461 43.6738C107.487 43.9827 107.256 44.2506 106.946 44.2729C106.931 44.2766 106.916 44.2766 106.901 44.2766Z"
            fill="#D9E6F7"
          />
          <path
            d="M112.614 62.6139H67.6099C67.3003 62.6139 67.0503 62.3646 67.0503 62.0557C67.0503 61.7469 67.3003 61.4976 67.6099 61.4976H112.61C112.92 61.4976 113.169 61.7469 113.169 62.0557C113.169 62.3646 112.92 62.6139 112.614 62.6139Z"
            fill="#D9E6F7"
          />
          <path
            d="M73.5794 44.8385C73.542 44.8385 73.5047 44.8348 73.4674 44.8274C73.1652 44.7678 72.9675 44.4739 73.0309 44.1687C74.527 36.7676 81.7279 31.3944 90.1526 31.3944C98.5026 31.3944 105.689 36.749 107.233 44.1241C107.297 44.4255 107.103 44.7232 106.8 44.7864C106.502 44.8497 106.203 44.6562 106.14 44.3548C104.7 37.4932 97.9765 32.5144 90.1563 32.5144C82.2614 32.5144 75.5232 37.5118 74.1315 44.3957C74.0756 44.6562 73.8405 44.8385 73.5794 44.8385Z"
            fill="#D9E6F7"
          />
          <path
            d="M74.8256 46.6544C74.7174 46.6544 74.6055 46.6209 74.5085 46.5539C74.2548 46.379 74.1914 46.033 74.3667 45.7762C77.2284 41.6347 83.4256 38.9593 90.1564 38.9593C91.5294 38.9593 92.9062 39.0746 94.3687 39.3128C94.6747 39.3611 94.8799 39.6477 94.8314 39.9528C94.7829 40.2579 94.4956 40.4626 94.1896 40.4142C92.7868 40.1872 91.466 40.0756 90.1564 40.0756C83.7838 40.0756 77.9485 42.5612 75.2883 46.4088C75.1763 46.5688 75.0047 46.6544 74.8256 46.6544Z"
            fill="#D9E6F7"
          />
          <path
            d="M105.443 46.6544C105.267 46.6544 105.092 46.5725 104.984 46.4162C103.025 43.6031 99.3163 41.4635 94.8092 40.5482C94.507 40.4849 94.3093 40.1909 94.3727 39.8895C94.4361 39.5881 94.7309 39.3946 95.0331 39.4542C99.8163 40.4254 103.779 42.7324 105.902 45.7799C106.077 46.033 106.013 46.379 105.76 46.5576C105.663 46.6209 105.551 46.6544 105.443 46.6544Z"
            fill="#D9E6F7"
          />
          <path
            d="M77.4 49.9438C77.1985 49.9438 77.0045 49.8359 76.9037 49.6461C76.7582 49.3745 76.8664 49.0359 77.1388 48.8907C79.1759 47.8191 81.8212 47.0228 84.7911 46.5837C85.1008 46.539 85.3806 46.7474 85.4254 47.0525C85.4702 47.3577 85.2612 47.6405 84.9553 47.6851C82.1085 48.1056 79.5864 48.8647 77.6611 49.8768C77.5791 49.9215 77.4895 49.9438 77.4 49.9438Z"
            fill="#D9E6F7"
          />
          <path
            d="M92.6451 47.3911C92.6339 47.3911 92.6264 47.3911 92.6153 47.3911C91.8877 47.3539 90.9811 47.3056 90.1528 47.3056C89.2797 47.3056 88.3768 47.3539 87.6493 47.3911C87.3433 47.4097 87.0784 47.1716 87.0598 46.8628C87.0448 46.5539 87.2799 46.2934 87.5896 46.2748C88.3283 46.2376 89.2499 46.1892 90.1528 46.1892C91.0109 46.1892 91.9325 46.2376 92.675 46.2748C92.9846 46.2897 93.2197 46.5539 93.2048 46.8628C93.1898 47.1604 92.9399 47.3911 92.6451 47.3911Z"
            fill="#D9E6F7"
          />
          <path
            d="M102.864 49.9438C102.775 49.9438 102.685 49.9215 102.603 49.8805C100.678 48.8684 98.1593 48.113 95.3126 47.6888C95.0066 47.6442 94.7977 47.3577 94.8425 47.0563C94.8872 46.7511 95.1708 46.5428 95.4767 46.5874C98.4466 47.0265 101.092 47.8265 103.125 48.8945C103.398 49.0396 103.502 49.3745 103.36 49.6498C103.26 49.8359 103.066 49.9438 102.864 49.9438Z"
            fill="#D9E6F7"
          />
          <path
            d="M109.047 70.2272H71.2179C70.9082 70.2272 70.6582 69.9779 70.6582 69.669C70.6582 69.3602 70.9082 69.1108 71.2179 69.1108H109.047C109.356 69.1108 109.606 69.3602 109.606 69.669C109.606 69.9779 109.356 70.2272 109.047 70.2272Z"
            fill="#D9E6F7"
          />
          <path
            d="M111.584 190H66.7965C66.4868 190 66.2368 189.751 66.2368 189.442C66.2368 189.133 66.4868 188.884 66.7965 188.884H111.584C111.893 188.884 112.143 189.133 112.143 189.442C112.143 189.751 111.89 190 111.584 190Z"
            fill="#D9E6F7"
          />
          <path
            d="M90.026 189.78C89.7163 189.78 89.4663 189.531 89.4663 189.222V84.289C89.4663 83.9801 89.7163 83.7308 90.026 83.7308C90.3356 83.7308 90.5856 83.9801 90.5856 84.289V189.222C90.5856 189.531 90.3356 189.78 90.026 189.78Z"
            fill="#D9E6F7"
          />
          <path
            d="M98.0142 79.7456H77.1876C76.8779 79.7456 76.6279 79.4963 76.6279 79.1874C76.6279 78.8786 76.8779 78.6293 77.1876 78.6293H98.0142C98.3238 78.6293 98.5738 78.8786 98.5738 79.1874C98.5738 79.4963 98.3201 79.7456 98.0142 79.7456Z"
            fill="#D9E6F7"
          />
        </svg>
      )
    },
    {
      name: "Русский язык",
      link: "rus",
      img: (
        <svg
          width="87"
          height="165"
          viewBox="0 0 87 165"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M39.329 64.8895C38.9371 64.8895 38.6292 64.5811 38.6292 64.1885V57.5144C38.6012 57.1499 38.4892 54.8785 40.3367 53.4483C41.9043 52.2425 42.968 50.9806 42.968 48.8494C42.968 48.4568 43.2759 48.1483 43.6678 48.1483C44.0597 48.1483 44.3676 48.4568 44.3676 48.8494C44.3676 51.7377 42.7721 53.3642 41.2045 54.57C39.8609 55.6076 40.0288 57.3181 40.0288 57.4023C40.0288 57.4303 40.0288 57.4583 40.0288 57.4864V64.1885C40.0288 64.5811 39.7209 64.8895 39.329 64.8895Z"
              fill="#D9E6F7"
            />
            <path
              d="M48.0069 64.8895C47.615 64.8895 47.3071 64.5811 47.3071 64.1885V57.4864C47.3071 57.4583 47.3071 57.4303 47.3071 57.4023C47.3071 57.3462 47.475 55.6076 46.1314 54.57C44.5638 53.3642 42.9683 51.7377 42.9683 48.8494C42.9683 48.4568 43.2762 48.1483 43.6681 48.1483C44.06 48.1483 44.3679 48.4568 44.3679 48.8494C44.3679 51.0086 45.4316 52.2425 46.9992 53.4483C48.8466 54.8785 48.7347 57.1218 48.7067 57.5144V64.1885C48.7067 64.5811 48.3988 64.8895 48.0069 64.8895Z"
              fill="#D9E6F7"
            />
            <path
              d="M39.3013 64.8895C38.9094 64.8895 38.6015 64.5811 38.6015 64.1885V57.4864C38.6015 57.4583 38.6015 57.4303 38.6015 57.4023C38.6015 57.3462 38.7695 55.6076 37.4258 54.57C36.81 54.0933 36.1942 53.5605 35.6623 52.8875V64.1885C35.6623 64.5811 35.3544 64.8895 34.9625 64.8895C34.5706 64.8895 34.2627 64.5811 34.2627 64.1885V48.8494C34.2627 48.4568 34.5706 48.1483 34.9625 48.1483C35.3544 48.1483 35.6623 48.4568 35.6623 48.8494C35.6623 51.0086 36.726 52.2425 38.2936 53.4483C40.1411 54.8785 40.0291 57.1218 40.0011 57.5144V64.1885C40.0011 64.5811 39.6932 64.8895 39.3013 64.8895Z"
              fill="#D9E6F7"
            />
            <path
              d="M35.7459 52.5229C35.6899 52.5229 35.6619 52.5229 35.606 52.5229C35.2141 52.4388 34.9901 52.0743 35.0461 51.7097L42.9959 9.53434C43.0799 9.14175 43.4438 8.91741 43.8077 8.97349C44.1996 9.05762 44.4235 9.42217 44.3675 9.78672L36.4457 51.9621C36.3897 52.2706 36.0818 52.5229 35.7459 52.5229Z"
              fill="#D9E6F7"
            />
            <path
              d="M41.0645 45.7928C41.0365 45.7928 41.0365 45.7928 41.0085 45.7928C40.6166 45.7648 40.3367 45.4283 40.3647 45.0357L41.1205 34.7723C41.1485 34.3797 41.4844 34.0993 41.8763 34.1273C42.2682 34.1553 42.5481 34.4918 42.5201 34.8844L41.7643 45.1479C41.7363 45.5124 41.4284 45.7928 41.0645 45.7928Z"
              fill="#D9E6F7"
            />
            <path
              d="M51.5898 52.5229C51.2539 52.5229 50.9739 52.2986 50.89 51.9621L42.9961 9.78671C42.9122 9.39412 43.1641 9.02957 43.556 8.97349C43.9479 8.88936 44.3118 9.14174 44.3678 9.53433L52.2896 51.7097C52.3735 52.1023 52.1216 52.4669 51.7297 52.5229C51.6737 52.5229 51.6457 52.5229 51.5898 52.5229Z"
              fill="#D9E6F7"
            />
            <path
              d="M46.271 45.7648C45.9071 45.7648 45.5992 45.4844 45.5712 45.1198L44.8154 34.8844C44.7874 34.4918 45.0673 34.1553 45.4592 34.1273C45.8511 34.0993 46.187 34.3797 46.215 34.7723L46.9708 45.0077C46.9988 45.4002 46.7189 45.7367 46.327 45.7648C46.327 45.7648 46.299 45.7648 46.271 45.7648Z"
              fill="#D9E6F7"
            />
            <path
              d="M43.668 81.7429C40.085 81.7429 37.1738 78.8265 37.1738 75.2371C37.1738 71.6477 40.085 68.7313 43.668 68.7313C47.2511 68.7313 50.1622 71.6477 50.1622 75.2371C50.1622 78.8265 47.2511 81.7429 43.668 81.7429ZM43.668 70.1614C40.8688 70.1614 38.5734 72.4609 38.5734 75.2651C38.5734 78.0693 40.8688 80.3688 43.668 80.3688C46.4673 80.3688 48.7626 78.0693 48.7626 75.2651C48.7626 72.4609 46.4953 70.1614 43.668 70.1614Z"
              fill="#D9E6F7"
            />
            <path
              d="M43.6681 165H24.2135C23.8216 165 23.5137 164.692 23.5137 164.299V102.606C23.5137 102.214 23.8216 101.905 24.2135 101.905H35.8863C36.2782 101.905 36.5861 102.214 36.5861 102.606C36.5861 102.999 36.2782 103.307 35.8863 103.307H24.9133V163.598H43.6681C44.06 163.598 44.3679 163.906 44.3679 164.299C44.3679 164.692 44.06 165 43.6681 165Z"
              fill="#D9E6F7"
            />
            <path
              d="M43.6679 120.217H35.858C35.4661 120.217 35.1582 119.908 35.1582 119.516V102.634C35.1582 102.606 35.1582 102.578 35.1582 102.55C35.1862 102.382 35.6621 98.6803 38.3493 96.9978C40.5607 95.6237 42.968 92.6232 42.968 89.3143C42.968 88.9217 43.276 88.6132 43.6679 88.6132C44.0597 88.6132 44.3677 88.9217 44.3677 89.3143C44.3677 93.156 41.6244 96.6052 39.1051 98.1756C37.1177 99.4094 36.6138 102.298 36.5858 102.662V118.787H43.6958C44.0877 118.787 44.3957 119.095 44.3957 119.488C44.3957 119.88 44.0597 120.217 43.6679 120.217Z"
              fill="#D9E6F7"
            />
            <path
              d="M24.2135 103.307C23.8216 103.307 23.5137 102.999 23.5137 102.606V96.7735C23.5137 96.5772 23.5976 96.3809 23.7376 96.2407L23.9056 96.1004L25.837 82.6683C25.893 82.2757 26.2569 82.0233 26.6208 82.0794C27.0127 82.1355 27.2646 82.5 27.2086 82.8646L25.2492 96.5491C25.2212 96.7174 25.1372 96.8576 25.0253 96.9698L24.9133 97.0819V102.606C24.9133 102.999 24.6054 103.307 24.2135 103.307Z"
              fill="#D9E6F7"
            />
            <path
              d="M28.8599 97.4745C28.692 97.4745 28.524 97.4184 28.384 97.3062L28.0201 96.9697C27.9082 96.8576 27.8242 96.7174 27.7962 96.5491L25.8367 82.8645C25.7808 82.472 26.0607 82.1355 26.4246 82.0794C26.8165 82.0233 27.1524 82.3037 27.2084 82.6683L29.1398 96.1004L29.3078 96.2406C29.5877 96.493 29.6157 96.9417 29.3638 97.2221C29.2518 97.3904 29.0559 97.4745 28.8599 97.4745Z"
              fill="#D9E6F7"
            />
            <path
              d="M47.2791 12.4788C47.1392 12.4788 46.9992 12.4227 46.8592 12.3385L43.6681 10.0391L40.505 12.3385C40.2531 12.5068 39.9172 12.5068 39.6932 12.3385C39.4413 12.1703 39.3573 11.8338 39.4413 11.5534L40.645 7.79572L37.4538 5.46822C37.2019 5.29997 37.1179 4.96346 37.2019 4.68304C37.2859 4.40262 37.5658 4.20632 37.8737 4.20632H41.7926L42.9963 0.448674C43.1083 0.196295 43.3882 0 43.6681 0C43.976 0 44.228 0.196295 44.3399 0.476717L45.5436 4.23436H49.4625C49.7704 4.23436 50.0224 4.43066 50.1343 4.71108C50.2183 4.9915 50.1343 5.32801 49.8824 5.49626L46.6913 7.82376L47.895 11.5814C47.9789 11.8618 47.8949 12.1983 47.643 12.3666C47.559 12.4227 47.4191 12.4788 47.2791 12.4788ZM43.6681 8.46873C43.8081 8.46873 43.948 8.52481 44.088 8.60894L45.9355 9.95496L45.2357 7.76767C45.1517 7.48725 45.2357 7.15075 45.4876 6.98249L47.3351 5.63647H45.0397C44.7318 5.63647 44.4799 5.44018 44.3679 5.15976L43.6681 2.97247L42.9683 5.15976C42.8843 5.44018 42.6044 5.63647 42.2965 5.63647H40.0291L41.8766 6.98249C42.1285 7.15075 42.2125 7.48725 42.1285 7.76767L41.4287 9.92692L43.2762 8.5809C43.3882 8.49677 43.5282 8.46873 43.6681 8.46873Z"
              fill="#D9E6F7"
            />
            <path
              d="M46.4113 75.9662H43.6681C43.2762 75.9662 42.9683 75.6577 42.9683 75.2651V70.8344C42.9683 70.4419 43.2762 70.1334 43.6681 70.1334C44.06 70.1334 44.3679 70.4419 44.3679 70.8344V74.564H46.4113C46.8032 74.564 47.1111 74.8725 47.1111 75.2651C47.1111 75.6297 46.8032 75.9662 46.4113 75.9662Z"
              fill="#D9E6F7"
            />
            <path
              d="M28.86 103.307C28.4681 103.307 28.1602 102.999 28.1602 102.606V96.7734C28.1602 96.7454 28.1602 96.6893 28.1602 96.6613C28.1881 96.4369 28.5241 94.5301 29.8957 93.7729C30.6795 93.3243 31.3233 91.5576 31.3233 89.9031C31.3233 89.5105 31.6312 89.2021 32.0231 89.2021C32.415 89.2021 32.7229 89.5105 32.7229 89.9031C32.7229 91.838 31.9951 94.1936 30.5675 94.9787C29.9517 95.3153 29.6437 96.3809 29.5598 96.8015V102.578C29.5598 102.999 29.2519 103.307 28.86 103.307Z"
              fill="#D9E6F7"
            />
            <path
              d="M35.1862 97.4745C34.8503 97.4745 34.5424 97.2221 34.4864 96.8856C34.4304 96.4931 34.1225 95.3714 33.4786 95.0068C32.051 94.2216 31.3232 91.8381 31.3232 89.9312C31.3232 89.5386 31.6312 89.2301 32.023 89.2301C32.4149 89.2301 32.7229 89.5386 32.7229 89.9312C32.7229 91.5857 33.3947 93.3523 34.1505 93.801C35.4941 94.5581 35.83 96.465 35.886 96.6893C35.942 97.0819 35.69 97.4184 35.2981 97.5026C35.2702 97.4745 35.2422 97.4745 35.1862 97.4745Z"
              fill="#D9E6F7"
            />
            <path
              d="M35.1861 103.307C34.7942 103.307 34.4863 102.999 34.4863 102.606V96.7734C34.4863 96.7454 34.4863 96.6893 34.4863 96.6613C34.5143 96.4369 34.8502 94.5301 36.1939 93.7729C36.9776 93.3243 37.6215 91.5576 37.6215 89.9031C37.6215 89.5105 37.9294 89.2021 38.3213 89.2021C38.7132 89.2021 39.0211 89.5105 39.0211 89.9031C39.0211 91.838 38.2933 94.1936 36.8657 94.9787C36.2498 95.3153 35.9419 96.3809 35.858 96.8015V102.578C35.8859 102.999 35.578 103.307 35.1861 103.307Z"
              fill="#D9E6F7"
            />
            <path
              d="M41.1208 96.2126C40.8689 96.2126 40.6169 96.0724 40.505 95.82C40.309 95.4274 40.0851 95.147 39.8331 95.0068C38.4055 94.2216 37.6777 91.8381 37.6777 89.9312C37.6777 89.5386 37.9856 89.2301 38.3775 89.2301C38.7694 89.2301 39.0773 89.5386 39.0773 89.9312C39.0773 91.5857 39.7492 93.3523 40.505 93.801C41.0088 94.0814 41.4287 94.5581 41.7646 95.2311C41.9326 95.5677 41.7926 95.9883 41.4287 96.1565C41.3447 96.1846 41.2328 96.2126 41.1208 96.2126Z"
              fill="#D9E6F7"
            />
            <path
              d="M43.6679 161.607H36.8658C36.4739 161.607 36.166 161.298 36.166 160.906V148.063C36.166 147.894 36.194 144.024 38.6293 141.557C39.917 140.267 41.5965 139.622 43.64 139.622C44.0318 139.622 44.3398 139.93 44.3398 140.323C44.3398 140.716 44.0318 141.024 43.64 141.024C41.9884 141.024 40.6168 141.529 39.6091 142.538C37.5656 144.585 37.5376 148.006 37.5376 148.063V160.205H43.64C44.0318 160.205 44.3398 160.513 44.3398 160.906C44.3398 161.298 44.0598 161.607 43.6679 161.607Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.4702 161.607H43.6681C43.2762 161.607 42.9683 161.298 42.9683 160.906C42.9683 160.513 43.2762 160.205 43.6681 160.205H49.7704V148.063C49.7704 147.782 49.6864 141.024 43.6681 141.024C43.2762 141.024 42.9683 140.716 42.9683 140.323C42.9683 139.93 43.2762 139.622 43.6681 139.622C45.7115 139.622 47.391 140.267 48.6787 141.557C51.142 144.024 51.142 147.894 51.142 148.063V160.906C51.17 161.298 50.8621 161.607 50.4702 161.607Z"
              fill="#D9E6F7"
            />
            <path
              d="M45.5991 129.667V135.416H41.7922V129.667H45.5991ZM45.5991 128.265H41.7922C41.0084 128.265 40.3926 128.882 40.3926 129.667V135.416C40.3926 136.201 41.0084 136.818 41.7922 136.818H45.5991C46.3829 136.818 46.9988 136.201 46.9988 135.416V129.667C46.9988 128.91 46.3549 128.265 45.5991 128.265Z"
              fill="#D9E6F7"
            />
            <path
              d="M43.6681 124.535H24.2135C23.8216 124.535 23.5137 124.227 23.5137 123.834C23.5137 123.442 23.8216 123.133 24.2135 123.133H43.6681C44.06 123.133 44.3679 123.442 44.3679 123.834C44.3679 124.227 44.06 124.535 43.6681 124.535Z"
              fill="#D9E6F7"
            />
            <path
              d="M43.6681 106.644C43.2762 106.644 42.9683 106.336 42.9683 105.943V102.634C42.9683 102.242 43.2762 101.933 43.6681 101.933C44.06 101.933 44.3679 102.242 44.3679 102.634V105.943C44.3679 106.336 44.06 106.644 43.6681 106.644Z"
              fill="#D9E6F7"
            />
            <path
              d="M22.5338 136.341C22.1419 136.341 21.834 136.032 21.834 135.64V130.508C21.834 130.256 21.9739 130.031 22.1979 129.891C22.4218 129.779 22.6738 129.779 22.8977 129.891C23.2336 130.116 24.9131 131.181 24.9131 132.443C24.9131 132.836 24.6052 133.144 24.2133 133.144C23.8214 133.144 23.5135 132.836 23.5135 132.443C23.5135 132.331 23.4016 132.163 23.2336 131.966V135.64C23.2336 136.004 22.8977 136.341 22.5338 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M15.5914 136.341C15.1995 136.341 14.8916 136.033 14.8916 135.64V130.508C14.8916 130.256 15.0316 130.032 15.2555 129.891C15.4794 129.779 15.7314 129.779 15.9553 129.891C16.2912 130.088 17.9987 131.181 17.9987 132.443C17.9987 132.836 17.6908 133.144 17.2989 133.144C16.907 133.144 16.5991 132.836 16.5991 132.443C16.5991 132.331 16.4872 132.163 16.3192 131.966V135.64C16.2912 136.005 15.9833 136.341 15.5914 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M18.9785 136.341C18.5866 136.341 18.2787 136.032 18.2787 135.64V131.966C18.1107 132.163 17.9987 132.331 17.9987 132.443C17.9987 132.836 17.6908 133.144 17.2989 133.144C16.907 133.144 16.5991 132.836 16.5991 132.443C16.5991 131.181 18.2787 130.088 18.6426 129.891C18.8665 129.751 19.1184 129.751 19.3424 129.891C19.5663 130.003 19.7063 130.256 19.7063 130.508V135.64C19.6783 136.004 19.3704 136.341 18.9785 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M8.64951 136.341C8.25762 136.341 7.94971 136.033 7.94971 135.64V130.508C7.94971 130.256 8.08967 130.032 8.31361 129.891C8.53755 129.779 8.78948 129.779 9.01341 129.891C9.34932 130.088 11.0568 131.181 11.0568 132.443C11.0568 132.836 10.7489 133.144 10.357 133.144C9.96515 133.144 9.65724 132.836 9.65724 132.443C9.65724 132.331 9.54527 132.163 9.37731 131.966V135.64C9.34932 136.005 9.04141 136.341 8.64951 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M12.0366 136.341C11.6447 136.341 11.3368 136.032 11.3368 135.64V131.966C11.1688 132.163 11.0568 132.331 11.0568 132.443C11.0568 132.836 10.7489 133.144 10.357 133.144C9.96514 133.144 9.65723 132.836 9.65723 132.443C9.65723 131.181 11.3368 130.088 11.7007 129.891C11.9246 129.751 12.1765 129.751 12.4005 129.891C12.6244 130.003 12.7644 130.256 12.7644 130.508V135.64C12.7364 136.004 12.4285 136.341 12.0366 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M24.2132 136.341H1.73545C1.34356 136.341 1.03564 136.033 1.03564 135.64V130.508C1.03564 130.256 1.17561 130.032 1.39954 129.891C1.62348 129.779 1.87541 129.779 2.09935 129.891C2.43526 130.088 4.14279 131.181 4.14279 132.443C4.14279 132.836 3.83487 133.144 3.44298 133.144C3.05109 133.144 2.74317 132.836 2.74317 132.443C2.74317 132.331 2.6312 132.163 2.46325 131.966V134.939H24.2412C24.6331 134.939 24.941 135.247 24.941 135.64C24.941 136.033 24.6051 136.341 24.2132 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M5.12251 136.341C4.73062 136.341 4.4227 136.032 4.4227 135.64V131.966C4.25475 132.163 4.14278 132.331 4.14278 132.443C4.14278 132.836 3.83486 133.144 3.44297 133.144C3.05108 133.144 2.74316 132.836 2.74316 132.443C2.74316 131.181 4.4227 130.088 4.7866 129.891C5.01054 129.751 5.26247 129.751 5.48641 129.891C5.71035 130.003 5.85031 130.256 5.85031 130.508V135.64C5.82231 136.004 5.48641 136.341 5.12251 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M27.9922 165H1.73545C1.34356 165 1.03564 164.692 1.03564 164.299V135.64C1.03564 135.247 1.34356 134.939 1.73545 134.939C2.12734 134.939 2.43526 135.247 2.43526 135.64V163.626H27.9922C28.3841 163.626 28.692 163.934 28.692 164.327C28.692 164.692 28.3841 165 27.9922 165Z"
              fill="#D9E6F7"
            />
            <path
              d="M24.2132 160.317H1.73545C1.34356 160.317 1.03564 160.008 1.03564 159.616C1.03564 159.223 1.34356 158.915 1.73545 158.915H24.2132C24.6051 158.915 24.9131 159.223 24.9131 159.616C24.9131 160.008 24.6051 160.317 24.2132 160.317Z"
              fill="#D9E6F7"
            />
            <path
              d="M48.0069 64.8895C47.615 64.8895 47.3071 64.5811 47.3071 64.1885V57.4864C47.3071 57.4583 47.3071 57.4303 47.3071 57.4023C47.3071 57.3462 47.475 55.6076 46.1314 54.57C44.5638 53.3642 42.9683 51.7377 42.9683 48.8494C42.9683 48.4568 43.2762 48.1483 43.6681 48.1483C44.06 48.1483 44.3679 48.4568 44.3679 48.8494C44.3679 51.0086 45.4316 52.2425 46.9992 53.4483C48.8466 54.8785 48.7347 57.1218 48.7067 57.5144V64.1885C48.7067 64.5811 48.3988 64.8895 48.0069 64.8895Z"
              fill="#D9E6F7"
            />
            <path
              d="M52.3734 64.8895C51.9815 64.8895 51.6736 64.5811 51.6736 64.1885V52.8875C51.1417 53.5324 50.5259 54.0933 49.9101 54.57C48.5384 55.6076 48.7344 57.3742 48.7344 57.4023C48.7344 57.4303 48.7344 57.4583 48.7344 57.4864V64.1885C48.7344 64.5811 48.4265 64.8895 48.0346 64.8895C47.6427 64.8895 47.3348 64.5811 47.3348 64.1885V57.5144C47.3068 57.1499 47.1948 54.8785 49.0423 53.4483C50.6099 52.2425 51.6736 50.9806 51.6736 48.8494C51.6736 48.4568 51.9815 48.1483 52.3734 48.1483C52.7653 48.1483 53.0732 48.4568 53.0732 48.8494V64.1885C53.0732 64.5811 52.7653 64.8895 52.3734 64.8895Z"
              fill="#D9E6F7"
            />
            <path
              d="M63.1507 165H43.6681C43.2762 165 42.9683 164.692 42.9683 164.299C42.9683 163.906 43.2762 163.598 43.6681 163.598H62.4229V103.307H51.4499C51.058 103.307 50.7501 102.999 50.7501 102.606C50.7501 102.214 51.058 101.905 51.4499 101.905H63.1227C63.5146 101.905 63.8225 102.214 63.8225 102.606V164.299C63.8505 164.692 63.5426 165 63.1507 165Z"
              fill="#D9E6F7"
            />
            <path
              d="M51.4779 120.217H43.6681C43.2762 120.217 42.9683 119.908 42.9683 119.516C42.9683 119.123 43.2762 118.815 43.6681 118.815H50.7781V102.69C50.7221 102.326 50.2463 99.4375 48.2588 98.2036C45.7115 96.6332 42.9963 93.1841 42.9963 89.3423C42.9963 88.9497 43.3042 88.6412 43.6961 88.6412C44.088 88.6412 44.3959 88.9497 44.3959 89.3423C44.3959 92.6513 46.7752 95.6518 48.9866 97.0258C51.6739 98.7084 52.1497 102.41 52.1777 102.578C52.1777 102.606 52.1777 102.634 52.1777 102.662V119.544C52.1777 119.88 51.8698 120.217 51.4779 120.217Z"
              fill="#D9E6F7"
            />
            <path
              d="M63.1504 103.307C62.7585 103.307 62.4506 102.999 62.4506 102.606V97.0819L62.3107 96.9697C62.1987 96.8576 62.1147 96.7174 62.0867 96.5491L60.1273 82.8645C60.0713 82.472 60.3512 82.1355 60.7151 82.0794C61.107 82.0233 61.4429 82.3037 61.4989 82.6683L63.4304 96.1004L63.5983 96.2406C63.7383 96.3809 63.8223 96.5771 63.8223 96.7734V102.606C63.8502 102.999 63.5423 103.307 63.1504 103.307Z"
              fill="#D9E6F7"
            />
            <path
              d="M58.5039 97.4745C58.3079 97.4745 58.112 97.3904 57.972 97.2502C57.7201 96.9698 57.7481 96.5211 58.028 96.2687L58.196 96.1285L60.1274 82.6963C60.1834 82.3037 60.5473 82.0513 60.9112 82.1074C61.3031 82.1635 61.555 82.528 61.499 82.8926L59.5396 96.5772C59.5116 96.7454 59.4276 96.8856 59.3156 96.9978L58.9517 97.3343C58.8398 97.4184 58.6718 97.4745 58.5039 97.4745Z"
              fill="#D9E6F7"
            />
            <path
              d="M58.5036 103.307C58.1117 103.307 57.8038 102.999 57.8038 102.606V96.8296C57.7198 96.4089 57.4119 95.3433 56.796 95.0068C55.3684 94.2216 54.6406 91.8381 54.6406 89.9312C54.6406 89.5386 54.9485 89.2301 55.3404 89.2301C55.7323 89.2301 56.0402 89.5386 56.0402 89.9312C56.0402 91.5857 56.7121 93.3523 57.4678 93.801C58.8115 94.5581 59.1474 96.465 59.1754 96.6893C59.1754 96.7174 59.1754 96.7735 59.1754 96.8015V102.634C59.2034 102.999 58.8954 103.307 58.5036 103.307Z"
              fill="#D9E6F7"
            />
            <path
              d="M52.1495 97.4745C52.1215 97.4745 52.0655 97.4745 52.0375 97.4745C51.6456 97.4184 51.3937 97.0539 51.4497 96.6613C51.4777 96.4369 51.8136 94.5301 53.1572 93.7729C53.941 93.3243 54.5848 91.5576 54.5848 89.9031C54.5848 89.5105 54.8927 89.2021 55.2846 89.2021C55.6765 89.2021 55.9844 89.5105 55.9844 89.9031C55.9844 91.838 55.2566 94.1936 53.829 94.9787C53.1852 95.3433 52.8773 96.493 52.8213 96.8576C52.7933 97.2221 52.5134 97.4745 52.1495 97.4745Z"
              fill="#D9E6F7"
            />
            <path
              d="M52.1496 103.307C51.7577 103.307 51.4497 102.999 51.4497 102.606V96.8296C51.3658 96.4089 51.0579 95.3433 50.442 95.0068C49.0144 94.2216 48.2866 91.8381 48.2866 89.9312C48.2866 89.5386 48.5945 89.2301 48.9864 89.2301C49.3783 89.2301 49.6862 89.5386 49.6862 89.9312C49.6862 91.5857 50.3581 93.3523 51.1138 93.801C52.4575 94.5581 52.7934 96.465 52.8214 96.6893C52.8214 96.7174 52.8214 96.7735 52.8214 96.8015V102.634C52.8494 102.999 52.5414 103.307 52.1496 103.307Z"
              fill="#D9E6F7"
            />
            <path
              d="M46.2154 96.2126C46.1034 96.2126 46.0194 96.1846 45.9075 96.1285C45.5716 95.9602 45.4036 95.5396 45.5996 95.2031C45.9355 94.5301 46.3553 94.0534 46.8592 93.7729C47.643 93.3243 48.2868 91.5576 48.2868 89.9031C48.2868 89.5105 48.5947 89.2021 48.9866 89.2021C49.3785 89.2021 49.6864 89.5105 49.6864 89.9031C49.6864 91.838 48.9586 94.1936 47.531 94.9787C47.2791 95.119 47.0552 95.3994 46.8592 95.792C46.7472 96.0724 46.4953 96.2126 46.2154 96.2126Z"
              fill="#D9E6F7"
            />
            <path
              d="M63.1507 124.535H43.6681C43.2762 124.535 42.9683 124.227 42.9683 123.834C42.9683 123.442 43.2762 123.133 43.6681 123.133H63.1227C63.5146 123.133 63.8225 123.442 63.8225 123.834C63.8225 124.227 63.5426 124.535 63.1507 124.535Z"
              fill="#D9E6F7"
            />
            <path
              d="M64.83 136.341C64.4381 136.341 64.1302 136.032 64.1302 135.64V131.966C63.9623 132.163 63.8503 132.331 63.8503 132.443C63.8503 132.836 63.5424 133.144 63.1505 133.144C62.7586 133.144 62.4507 132.836 62.4507 132.443C62.4507 131.181 64.1302 130.088 64.4941 129.891C64.7181 129.751 64.97 129.751 65.1939 129.891C65.4179 130.003 65.5578 130.256 65.5578 130.508V135.64C65.5298 136.004 65.2219 136.341 64.83 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M71.7719 136.341C71.38 136.341 71.0721 136.032 71.0721 135.64V131.966C70.9042 132.163 70.7922 132.331 70.7922 132.443C70.7922 132.836 70.4843 133.144 70.0924 133.144C69.7005 133.144 69.3926 132.836 69.3926 132.443C69.3926 131.181 71.0721 130.088 71.436 129.891C71.6599 129.751 71.9119 129.751 72.1358 129.891C72.3598 130.003 72.4997 130.256 72.4997 130.508V135.64C72.4717 136.004 72.1638 136.341 71.7719 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M68.3849 136.341C67.993 136.341 67.6851 136.033 67.6851 135.64V130.508C67.6851 130.256 67.825 130.032 68.049 129.891C68.2729 129.779 68.5248 129.779 68.7488 129.891C69.0847 130.088 70.7922 131.181 70.7922 132.443C70.7922 132.836 70.4843 133.144 70.0924 133.144C69.7005 133.144 69.3926 132.836 69.3926 132.443C69.3926 132.331 69.2806 132.163 69.1127 131.966V135.64C69.0847 136.005 68.7768 136.341 68.3849 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M78.7143 136.341C78.3224 136.341 78.0145 136.032 78.0145 135.64V131.966C77.8465 132.163 77.7346 132.331 77.7346 132.443C77.7346 132.836 77.4267 133.144 77.0348 133.144C76.6429 133.144 76.335 132.836 76.335 132.443C76.335 131.181 78.0145 130.088 78.3784 129.891C78.6023 129.751 78.8543 129.751 79.0782 129.891C79.3021 130.003 79.4421 130.256 79.4421 130.508V135.64C79.4141 136.004 79.0782 136.341 78.7143 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M75.3272 136.341C74.9354 136.341 74.6274 136.033 74.6274 135.64V130.508C74.6274 130.256 74.7674 130.032 74.9913 129.891C75.2153 129.779 75.4672 129.779 75.6912 129.891C76.0271 130.088 77.7346 131.181 77.7346 132.443C77.7346 132.836 77.4267 133.144 77.0348 133.144C76.6429 133.144 76.335 132.836 76.335 132.443C76.335 132.331 76.223 132.163 76.055 131.966V135.64C76.0271 136.005 75.6911 136.341 75.3272 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M85.6283 136.341H63.1505C62.7586 136.341 62.4507 136.032 62.4507 135.64C62.4507 135.247 62.7586 134.939 63.1505 134.939H84.9285V131.966C84.7605 132.163 84.6486 132.331 84.6486 132.443C84.6486 132.836 84.3406 133.144 83.9488 133.144C83.5569 133.144 83.2489 132.836 83.2489 132.443C83.2489 131.181 84.9285 130.088 85.2924 129.891C85.5163 129.751 85.7682 129.751 85.9922 129.891C86.2161 130.003 86.3561 130.256 86.3561 130.508V135.64C86.3281 136.004 86.0202 136.341 85.6283 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M82.2413 136.341C81.8494 136.341 81.5415 136.032 81.5415 135.64V130.508C81.5415 130.256 81.6815 130.031 81.9054 129.891C82.1293 129.779 82.3813 129.779 82.6052 129.891C82.9411 130.088 84.6487 131.181 84.6487 132.443C84.6487 132.836 84.3407 133.144 83.9489 133.144C83.557 133.144 83.249 132.836 83.249 132.443C83.249 132.331 83.1371 132.163 82.9691 131.966V135.64C82.9411 136.004 82.6332 136.341 82.2413 136.341Z"
              fill="#D9E6F7"
            />
            <path
              d="M85.6284 165H59.3717C58.9798 165 58.6719 164.692 58.6719 164.299C58.6719 163.906 58.9798 163.598 59.3717 163.598H84.9286V135.612C84.9286 135.219 85.2366 134.911 85.6284 134.911C86.0203 134.911 86.3283 135.219 86.3283 135.612V164.299C86.3283 164.692 86.0203 165 85.6284 165Z"
              fill="#D9E6F7"
            />
            <path
              d="M85.6283 160.317H63.1505C62.7586 160.317 62.4507 160.008 62.4507 159.616C62.4507 159.223 62.7586 158.915 63.1505 158.915H85.6283C86.0202 158.915 86.3281 159.223 86.3281 159.616C86.3281 160.008 86.0202 160.317 85.6283 160.317Z"
              fill="#D9E6F7"
            />
            <path
              d="M52.9052 86.1735H34.4303C34.0384 86.1735 33.7305 85.865 33.7305 85.4725C33.7305 85.0799 34.0384 84.7714 34.4303 84.7714H52.9052C53.2971 84.7714 53.605 85.0799 53.605 85.4725C53.605 85.865 53.2971 86.1735 52.9052 86.1735Z"
              fill="#D9E6F7"
            />
            <path
              d="M34.4303 95.6518C34.0384 95.6518 33.7305 95.3433 33.7305 94.9507V64.1885C33.7305 63.7959 34.0384 63.4874 34.4303 63.4874H43.6677C44.0596 63.4874 44.3675 63.7959 44.3675 64.1885C44.3675 64.5811 44.0596 64.8895 43.6677 64.8895H35.1301V94.9227C35.1301 95.3153 34.8222 95.6518 34.4303 95.6518Z"
              fill="#D9E6F7"
            />
            <path
              d="M52.9055 95.6518C52.5136 95.6518 52.2057 95.3433 52.2057 94.9507V64.8895H43.6681C43.2762 64.8895 42.9683 64.5811 42.9683 64.1885C42.9683 63.7959 43.2762 63.4874 43.6681 63.4874H52.9055C53.2974 63.4874 53.6053 63.7959 53.6053 64.1885V94.9227C53.6053 95.3153 53.2974 95.6518 52.9055 95.6518Z"
              fill="#D9E6F7"
            />
            <path
              d="M9.29318 49.4103C9.26519 49.4103 9.2372 49.4103 9.2372 49.4103C8.92928 49.3822 8.67735 49.1579 8.62137 48.8494L8.08951 46.1013L5.51422 45.0357C5.2343 44.9235 5.06635 44.6151 5.09434 44.3066C5.12233 43.9981 5.34627 43.7457 5.65418 43.6897L8.39743 43.1569L9.46113 40.577C9.5731 40.2966 9.88102 40.1283 10.1889 40.1564C10.4968 40.1844 10.7488 40.4087 10.8048 40.7172L11.3366 43.4653L13.9119 44.5309C14.1918 44.6431 14.3598 44.9516 14.3318 45.26C14.3038 45.5685 14.0799 45.8209 13.7719 45.877L11.0287 46.4098L9.96499 48.9896C9.82503 49.242 9.5731 49.4103 9.29318 49.4103ZM8.20148 44.6431L8.95727 44.9516C9.18121 45.0357 9.32117 45.232 9.37716 45.4563L9.54511 46.2695L9.85303 45.5124C9.937 45.2881 10.1329 45.1479 10.3569 45.0918L11.1687 44.9235L10.4129 44.6151C10.1889 44.5309 10.049 44.3346 9.99299 44.1103L9.82503 43.2971L9.51712 44.0542C9.43314 44.2786 9.2372 44.4188 9.01326 44.4748L8.20148 44.6431Z"
              fill="#D9E6F7"
            />
            <path
              d="M6.27021 68.535C6.24222 68.535 6.21423 68.535 6.21423 68.535C5.90631 68.507 5.65438 68.2826 5.5984 67.9742L4.73063 63.4033L0.447817 61.6366C0.167894 61.5245 -5.94277e-05 61.216 0.0279328 60.9075C0.0559251 60.5991 0.279863 60.3467 0.587778 60.2906L5.15052 59.4213L6.91403 55.1309C7.026 54.8504 7.33392 54.6822 7.64183 54.7102C7.94975 54.7383 8.20168 54.9626 8.25766 55.2711L9.12542 59.8419L13.4082 61.6086C13.6882 61.7208 13.8561 62.0292 13.8281 62.3377C13.8001 62.6461 13.5762 62.8985 13.2683 62.9546L8.67754 63.8239L6.91403 68.1144C6.83006 68.3667 6.55013 68.535 6.27021 68.535ZM3.13508 61.244L5.5984 62.2536C5.82233 62.3377 5.9623 62.534 6.01828 62.7583L6.52214 65.3662L7.52986 62.8985C7.61384 62.6742 7.80978 62.534 8.03372 62.4779L10.637 61.9731L8.17368 60.9636C7.94975 60.8795 7.80978 60.6832 7.7538 60.4589L7.27793 57.8509L6.27021 60.3186C6.18623 60.543 5.99029 60.6832 5.76635 60.7393L3.13508 61.244Z"
              fill="#D9E6F7"
            />
            <path
              d="M13.7441 33.0897C13.6881 33.0897 13.6041 33.0897 13.5481 33.0897C13.0443 33.0336 12.5684 32.7813 12.2605 32.3887C11.9246 31.9961 11.7846 31.4913 11.8406 30.9866C11.9526 29.921 12.8763 29.1638 13.94 29.276C15.0037 29.3882 15.7595 30.3136 15.6476 31.3792C15.5916 31.8839 15.3396 32.3606 14.9478 32.6691C14.6118 32.9495 14.192 33.0897 13.7441 33.0897ZM13.2402 31.1268C13.2402 31.267 13.2682 31.4072 13.3522 31.5194C13.4362 31.6315 13.5761 31.6876 13.6881 31.7157C13.8281 31.7437 13.968 31.6876 14.08 31.6035C14.192 31.5194 14.2479 31.3792 14.2759 31.267C14.3039 31.1548 14.22 30.9585 14.136 30.8464C14.052 30.7342 13.912 30.6781 13.8001 30.6501C13.5201 30.622 13.2682 30.8464 13.2402 31.1268Z"
              fill="#D9E6F7"
            />
            <path
              d="M18.8949 24.4247C18.8389 24.4247 18.7549 24.4247 18.6989 24.4247C17.6352 24.3126 16.8794 23.3872 16.9634 22.3216C17.0194 21.8168 17.2713 21.3681 17.6632 21.0316C18.0551 20.6951 18.559 20.5549 19.0628 20.611C19.5947 20.6671 20.0425 20.8914 20.3785 21.312C20.7144 21.7046 20.8543 22.2094 20.7983 22.7141C20.6864 23.6956 19.8466 24.4247 18.8949 24.4247ZM18.363 22.4618C18.335 22.7422 18.531 22.9946 18.8109 23.0226C19.0908 23.0507 19.3427 22.8544 19.3707 22.5459C19.3707 22.4057 19.3427 22.2655 19.2588 22.1813C19.2028 22.0692 19.0628 22.0131 18.9229 22.0131C18.7829 22.0131 18.6429 22.0411 18.531 22.1253C18.447 22.2094 18.391 22.3216 18.363 22.4618Z"
              fill="#D9E6F7"
            />
            <path
              d="M26.5088 17.3581C26.4528 17.3581 26.4248 17.3581 26.3689 17.3581C26.0329 17.302 25.697 17.1338 25.4731 16.8534C25.2492 16.601 25.1652 16.2364 25.1932 15.8999C25.2772 15.1708 25.921 14.638 26.6488 14.7222C27.3486 14.7782 27.8804 15.4232 27.8244 16.1523C27.7405 16.8253 27.1806 17.3581 26.5088 17.3581ZM26.5088 15.956C26.4808 15.956 26.4248 15.984 26.4248 16.0401C26.4248 16.0401 26.4248 16.0682 26.4528 16.0962C26.4808 16.1243 26.5088 16.1243 26.5088 16.1243C26.5088 16.1243 26.5368 16.1243 26.5648 16.0962C26.5928 16.0682 26.5928 16.0401 26.5928 16.0401C26.5928 16.0401 26.5928 16.0121 26.5648 15.984C26.5368 15.956 26.5088 15.956 26.5088 15.956Z"
              fill="#D9E6F7"
            />
            <path
              d="M29.7277 36.1463C28.9999 36.1463 28.4121 35.5575 28.4121 34.8284C28.4121 34.0993 28.9999 33.5104 29.7277 33.5104C30.4555 33.5104 31.0434 34.0993 31.0434 34.8284C31.0434 35.5575 30.4555 36.1463 29.7277 36.1463ZM29.7277 34.7442C29.6718 34.7442 29.6438 34.7723 29.6438 34.8284C29.6438 34.8844 29.6718 34.9125 29.7277 34.9125C29.7837 34.9125 29.8117 34.8844 29.8117 34.8284C29.8117 34.7723 29.7837 34.7442 29.7277 34.7442Z"
              fill="#D9E6F7"
            />
            <path
              d="M26.6486 45.0077C25.9208 45.0077 25.333 44.4188 25.333 43.6897C25.333 42.9606 25.9208 42.3717 26.6486 42.3717C27.3764 42.3717 27.9643 42.9606 27.9643 43.6897C27.9643 44.4188 27.3764 45.0077 26.6486 45.0077ZM26.6486 43.6056C26.5927 43.6056 26.5647 43.6336 26.5647 43.6897C26.5647 43.7458 26.5927 43.7738 26.6486 43.7738C26.7046 43.7738 26.7326 43.7458 26.7326 43.6897C26.7326 43.6336 26.6766 43.6056 26.6486 43.6056Z"
              fill="#D9E6F7"
            />
            <path
              d="M83.6129 43.4093C83.3889 43.4093 83.165 43.2971 83.025 43.1008L81.5135 40.7453L78.7142 40.7172C78.4063 40.7172 78.1264 40.5209 78.0424 40.2125C77.9584 39.904 78.0704 39.5955 78.3503 39.4273L80.7017 37.913L80.7297 35.1088C80.7297 34.8003 80.9256 34.5199 81.2335 34.4358C81.5414 34.3516 81.8494 34.4638 82.0173 34.7442L83.5289 37.0998L86.3281 37.1278C86.636 37.1278 86.916 37.3241 86.9999 37.6326C87.0839 37.941 86.9719 38.2495 86.72 38.4178L84.3687 39.932L84.3407 42.7362C84.3407 43.0447 84.1447 43.3251 83.8368 43.4093C83.7528 43.4093 83.6689 43.4093 83.6129 43.4093ZM81.0936 39.3431H81.9053C82.1293 39.3431 82.3532 39.4553 82.4932 39.6516L82.9411 40.3527V39.5394C82.9411 39.3151 83.053 39.0908 83.249 38.9506L83.9488 38.5019H83.137C82.9131 38.5019 82.6891 38.3897 82.5492 38.1934L82.1013 37.4924V38.3056C82.1013 38.5299 81.9893 38.7543 81.7934 38.8945L81.0936 39.3431Z"
              fill="#D9E6F7"
            />
            <path
              d="M76.0828 28.1824C75.2431 28.1824 74.4873 27.6496 74.2353 26.8083C73.9554 25.7988 74.5153 24.7332 75.551 24.4247C76.5587 24.1443 77.6224 24.7051 77.9303 25.7427C78.2102 26.7522 77.6504 27.8178 76.6147 28.1263C76.4187 28.1824 76.2508 28.1824 76.0828 28.1824ZM76.0828 25.7707C76.0268 25.7707 75.9988 25.7707 75.9429 25.7988C75.6629 25.8829 75.523 26.1633 75.579 26.4437C75.6629 26.7242 75.9429 26.8644 76.2228 26.8083C76.5027 26.7242 76.6427 26.4437 76.5867 26.1633C76.5027 25.9109 76.3068 25.7707 76.0828 25.7707Z"
              fill="#D9E6F7"
            />
            <path
              d="M69.4486 20.611C68.6088 20.611 67.853 20.0501 67.6011 19.2369C67.3211 18.2274 67.881 17.1618 68.9167 16.8533C69.4206 16.7131 69.9244 16.7692 70.3723 17.0216C70.8202 17.274 71.1561 17.6666 71.296 18.1713C71.576 19.1808 71.0161 20.2464 69.9804 20.5549C69.8125 20.5829 69.6165 20.611 69.4486 20.611ZM69.4486 18.1713C69.3926 18.1713 69.3646 18.1713 69.3086 18.1994C69.0287 18.2835 68.8887 18.5639 68.9447 18.8443C69.0287 19.1248 69.3086 19.265 69.5885 19.2089C69.8684 19.1248 70.0084 18.8443 69.9524 18.5639C69.9244 18.4237 69.8125 18.3115 69.7005 18.2554C69.6165 18.1994 69.5325 18.1713 69.4486 18.1713Z"
              fill="#D9E6F7"
            />
            <path
              d="M60.7711 15.0025C60.5472 15.0025 60.3232 14.9464 60.1273 14.8343C59.8194 14.666 59.5954 14.3856 59.4835 14.0491C59.2875 13.348 59.6794 12.6189 60.3792 12.4226C61.079 12.2264 61.8068 12.6189 62.0028 13.32C62.2547 14.0211 61.8628 14.7501 61.163 14.9464C61.0231 15.0025 60.9111 15.0025 60.7711 15.0025ZM60.8551 13.6565L60.6871 13.7126C60.6871 13.7687 60.7431 13.7687 60.7991 13.7687C60.7991 13.7687 60.8271 13.7687 60.8551 13.7406C60.8831 13.7126 60.8551 13.6845 60.8551 13.6565ZM60.7991 13.6004C60.7711 13.6004 60.7711 13.6004 60.7991 13.6004C60.7431 13.6285 60.7151 13.6565 60.7151 13.7126L60.8831 13.6565C60.8831 13.6565 60.8831 13.6285 60.8551 13.6004C60.7991 13.6004 60.7991 13.6004 60.7991 13.6004Z"
              fill="#D9E6F7"
            />
            <path
              d="M64.466 41.1098C64.298 41.1098 64.1581 41.0818 63.9901 41.0537C62.9544 40.8013 62.3386 39.7357 62.5905 38.7262C62.8424 37.6887 63.9061 37.0717 64.9138 37.3241C65.4177 37.4363 65.8376 37.7728 66.0895 38.1934C66.3414 38.6421 66.4254 39.1468 66.3135 39.6516C66.2015 40.1564 65.8656 40.577 65.4457 40.8294C65.1378 40.9976 64.8019 41.1098 64.466 41.1098ZM64.466 38.6701C64.242 38.6701 64.0181 38.8384 63.9621 39.0627C63.9061 39.3431 64.0741 39.6236 64.326 39.6796C64.466 39.7077 64.6059 39.6796 64.7179 39.6236C64.8299 39.5394 64.9138 39.4273 64.9418 39.3151C64.9698 39.1749 64.9418 39.0347 64.8859 38.9225C64.8019 38.8103 64.6899 38.7262 64.5779 38.6982C64.5499 38.6701 64.522 38.6701 64.466 38.6701Z"
              fill="#D9E6F7"
            />
            <path
              d="M59.5116 31.7998C59.3996 31.7998 59.2877 31.7998 59.1757 31.7718C58.4759 31.6035 58.028 30.8744 58.2239 30.1734C58.3079 29.8369 58.5319 29.5564 58.8398 29.3601C59.1477 29.1919 59.4836 29.1358 59.8475 29.2199C60.1834 29.3041 60.4633 29.5284 60.6593 29.8369C60.8272 30.1453 60.8832 30.4818 60.7992 30.8464C60.7153 31.1829 60.4913 31.4633 60.1834 31.6596C59.9595 31.7437 59.7355 31.7998 59.5116 31.7998ZM59.4276 30.4538C59.4276 30.4538 59.4276 30.4818 59.4276 30.5099C59.4556 30.5379 59.4836 30.5379 59.4836 30.5379C59.5116 30.5379 59.5676 30.5099 59.5676 30.4818C59.5676 30.4257 59.5396 30.3977 59.5116 30.3977C59.5116 30.3977 59.4836 30.3977 59.4556 30.3977C59.4276 30.4257 59.4276 30.4538 59.4276 30.4538Z"
              fill="#D9E6F7"
            />
            <path
              d="M10.7212 142.118H7.75401C7.36211 142.118 7.0542 141.809 7.0542 141.417C7.0542 141.024 7.36211 140.715 7.75401 140.715H10.7212C11.1131 140.715 11.421 141.024 11.421 141.417C11.421 141.809 11.1131 142.118 10.7212 142.118Z"
              fill="#D9E6F7"
            />
            <path
              d="M13.4643 145.399H11.8688C11.4769 145.399 11.1689 145.09 11.1689 144.698C11.1689 144.305 11.4769 143.996 11.8688 143.996H13.4363C13.8282 143.996 14.1361 144.305 14.1361 144.698C14.1361 145.09 13.8282 145.399 13.4643 145.399Z"
              fill="#D9E6F7"
            />
            <path
              d="M7.44609 155.886H5.87852C5.48663 155.886 5.17871 155.578 5.17871 155.185C5.17871 154.793 5.48663 154.484 5.87852 154.484H7.44609C7.83798 154.484 8.14589 154.793 8.14589 155.185C8.14589 155.578 7.83798 155.886 7.44609 155.886Z"
              fill="#D9E6F7"
            />
            <path
              d="M69.1687 143.996H67.6012C67.2093 143.996 66.9014 143.688 66.9014 143.295C66.9014 142.903 67.2093 142.594 67.6012 142.594H69.1687C69.5606 142.594 69.8685 142.903 69.8685 143.295C69.8685 143.688 69.5606 143.996 69.1687 143.996Z"
              fill="#D9E6F7"
            />
            <path
              d="M80.45 150.39H78.8824C78.4905 150.39 78.1826 150.082 78.1826 149.689C78.1826 149.296 78.4905 148.988 78.8824 148.988H80.45C80.8419 148.988 81.1498 149.296 81.1498 149.689C81.1498 150.082 80.8139 150.39 80.45 150.39Z"
              fill="#D9E6F7"
            />
            <path
              d="M78.1263 153.222H76.5587C76.1668 153.222 75.8589 152.914 75.8589 152.521C75.8589 152.129 76.1668 151.82 76.5587 151.82H78.1263C78.5181 151.82 78.8261 152.129 78.8261 152.521C78.8261 152.914 78.5181 153.222 78.1263 153.222Z"
              fill="#D9E6F7"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="87" height="165" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      name: "Познание мира",
      link: "historyk",
      img: (
        <svg
          width="164"
          height="127"
          viewBox="0 0 164 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M81.5132 0.710022C100.925 0.710022 116.679 16.405 116.679 35.8022C116.679 55.1732 100.951 70.8682 81.5132 70.8682C62.1016 70.8682 46.3477 55.1732 46.3477 35.8022C46.3477 16.4311 62.1016 0.710022 81.5132 0.710022Z"
            fill="#D9E6F7"
          />
          <path
            d="M80.3374 97.0179L79.7365 98.2172L79.0572 99.7554L78.6653 100.485L78.3257 101.163L78.0644 101.711L77.7248 102.05L76.9149 101.372L76.0266 100.772L75.0861 100.303L74.0672 99.9118L72.996 99.6511L71.9248 99.3904L70.8537 99.1818L69.7041 99.0515L67.3528 98.8429L65.0014 98.7647L62.7024 98.6343L60.5339 98.3736L59.3321 98.165L58.1826 97.9043L57.5817 97.6957L56.9808 97.4872L56.4321 97.2265L55.9619 96.9657L55.2303 96.4965L54.4988 95.949L53.6889 95.3493L52.9574 94.6715L51.4159 93.1854L49.8745 91.6993L48.3331 90.2915L46.9223 89.014L46.243 88.5447L45.5637 88.0754L44.9628 87.8147L44.3619 87.6061L43.2124 87.3454L42.1935 87.0065L41.1745 86.6675L40.1556 86.1982L39.2673 85.8072L38.3791 85.2597L37.5692 84.7122L36.8376 84.1647L36.0277 83.565L35.3485 82.9654L34.6692 82.2875L33.9638 81.6097L32.6836 80.2018L31.4818 78.7157L29.0521 75.5611L26.4917 72.3282L25.0026 70.79L23.4611 69.2518L22.5728 68.4436L21.6846 67.7136L20.744 67.0357L19.7251 66.3057L19.5161 66.384L19.3332 66.5404L19.1242 66.8011L18.9936 67.14L18.8107 67.7397L18.7323 68.0004L18.2621 67.8179L17.844 67.6093L17.3738 67.4007L16.9819 67.2704H16.1197L15.6495 67.4007L15.1531 67.6093L15.6233 68.209L16.2242 69.0172L16.8251 69.9557L17.3738 70.9725L17.9224 72.0414L18.3143 73.0582L18.4449 73.6057L18.5756 74.0229L18.6539 74.4922V74.8832H17.9224H15.0224L15.5711 75.6915L16.172 76.4997L16.8513 77.3079L17.5828 78.0379L18.3143 78.7679L19.0458 79.4979L19.7774 80.0975L20.4566 80.5668L19.7251 80.645L18.7062 80.7232L17.7134 80.8536L16.9819 80.9318L17.5828 81.4793L18.3143 82.0268L19.1242 82.6265L20.0125 83.2261L20.9008 83.7475L21.7891 84.2168L22.599 84.4775L23.3305 84.6861L23.6701 84.7643L23.9314 84.8425L24.1404 84.9207L24.271 85.0511L24.3494 85.1293V85.39L24.271 85.5204L24.1404 85.9115L24.062 86.3286L23.9837 86.5893V86.7979L24.062 87.1368L24.1404 87.3975L24.271 87.5279L24.48 87.6582L24.7413 87.7886L25.0809 87.8668L25.4206 87.9972L25.7602 88.1275L26.0999 88.2579L26.3611 88.4665L26.4395 88.5447V88.675L26.3611 88.7532L26.0999 88.9618L25.8386 89.1704L25.5773 89.4311L25.3161 89.77V90.0307L25.2377 90.2915L25.3161 90.6304L25.3422 91.0215L26.4917 91.4125L27.6935 91.8297L28.2422 91.96L28.7908 92.1686L29.1827 92.3772L29.5224 92.5857L27.3017 94.3325L27.9025 94.88L28.6341 95.2711L29.5746 95.7143L30.5151 96.0532L31.5863 96.3922L32.6052 96.6007L33.4935 96.8093H34.3034L33.5719 97.3568L32.6314 97.9565L31.6124 98.504L30.8809 99.0515L31.5602 99.5207L32.5007 99.99L33.5719 100.538L34.8521 101.137L37.8043 102.415L41.0439 103.692L44.4142 104.865L47.706 105.934L49.1952 106.404L50.5538 106.743L51.7556 107.081L52.8267 107.29L50.6583 107.081L48.6466 106.821L46.6349 106.482L44.7538 106.091L42.8727 105.543L41.0439 104.996L39.2935 104.396L37.6214 103.718L34.3295 102.363L31.2205 101.007L29.7314 100.407L28.2422 99.8075L26.8314 99.26L25.4206 98.7125L25.7602 98.504L26.1521 98.3736L26.7008 98.165L27.3017 98.0347L28.5818 97.6175L29.7314 97.2265L27.7197 96.8875L24.9503 96.34L23.5918 95.949L22.4422 95.61L21.972 95.4536L21.5539 95.245L21.2143 95.0365L21.0053 94.8279V94.7497L21.0837 94.6715L21.2927 94.5932L21.5017 94.4629L22.0503 94.2543L22.7819 94.0457L24.4017 93.5765L25.7602 93.1072L22.4683 92.5075L19.908 92.0904L18.9675 91.8818L18.2359 91.6211L17.9747 91.4907L17.7134 91.2822L17.5044 91.1518L17.3215 91.0215L17.5305 90.8911L18.1314 90.7607L19.0197 90.6304L20.0386 90.4218L21.1098 90.2915L22.0503 90.0307L22.5206 89.9004L22.9125 89.77L23.1737 89.5615L23.435 89.3529L22.8864 89.1443L22.3638 88.9357L21.6846 88.8054L21.0314 88.675L19.49 88.4665L17.9485 88.2579L17.1386 88.0493L16.4071 87.9189L15.6756 87.6582L14.9441 87.3975L14.2648 87.0586L13.6116 86.5893L13.063 86.12L12.645 85.5204L12.7756 85.4422L13.063 85.364H13.4026L13.9513 85.4422L15.1531 85.5204L16.5116 85.5986L18.0008 85.729H19.8819L20.4305 85.6507L20.8485 85.5204L21.1098 85.39L19.49 84.7122L17.3215 83.7736L16.1197 83.174L14.8396 82.5743L13.5594 81.8965L12.2792 81.2186L11.0774 80.4886L9.92787 79.6804L8.85671 78.8722L7.91617 78.064L7.52428 77.5947L7.10627 77.1775L6.84501 76.7865L6.58375 76.3172L6.27024 75.9L6.13961 75.4307L6.06123 75.0136L6.00898 74.5443H6.47924L7.02789 74.6225L7.57653 74.8311L8.12518 75.0397L9.19635 75.7175L10.3981 76.3954L10.9468 76.7343L11.5477 77.0732L12.1486 77.334L12.6972 77.5425L13.2981 77.6729L13.8468 77.7511H14.4477L14.9963 77.5425L13.3765 76.3432L11.5477 74.805L9.45761 72.98L7.36753 70.9725L5.27745 68.8086L3.318 66.6447L2.42972 65.4715L1.56756 64.4025L0.836031 63.3336L0.156756 62.3168L0 62.03V61.5607L0.0783779 61.3522L0.156756 61.1436L0.365764 61.0132L0.574772 60.8047L0.78378 60.6743L1.04504 60.5961L1.3063 60.5179H1.82882L2.16846 60.5961L2.42972 60.6743L2.69098 60.8829L2.89998 61.0915L4.10178 62.2907L5.51258 63.6986L7.00176 65.2368L8.62157 66.775L10.2414 68.1829L11.8612 69.5386L12.6711 70.0861L13.4026 70.5554L14.2125 70.9465L14.9441 71.2072L14.3954 70.8682L13.7945 70.2686L12.9846 69.4604L12.0963 68.4436L10.1369 66.0972L8.02068 63.3857L6.94951 61.8997L5.9306 60.4136L4.99006 58.9275L4.04953 57.5197L3.23962 56.164L2.56035 54.9647L2.09008 53.8175L1.69819 52.879L1.61981 52.54V51.9925L1.69819 51.784L1.82882 51.5754L1.95945 51.3668L2.09008 51.2365L2.29909 51.1061L2.76935 50.9757L3.18737 50.8454H4.12791L4.38916 50.9236L4.59817 51.0018L4.85943 51.1322L5.06844 51.3407L5.61709 51.81L6.16573 52.4879L7.36753 54.0261L8.6477 55.9815L10.1369 58.0672L11.6783 60.2311L12.4882 61.2479L13.2981 62.2647L14.1864 63.1511L15.1269 63.9593L13.9774 61.7432L12.6972 59.1882L12.018 57.7804L11.4171 56.3725L10.8162 54.8865L10.2675 53.4004L9.79724 51.8622L9.32697 50.3761L8.98734 48.89L8.72608 47.404L8.59545 45.9961L8.49094 44.6143L8.56932 43.9365L8.6477 43.3368L8.72608 42.7372L8.85671 42.1375L8.98734 41.929L9.06572 41.7204L9.27472 41.5118L9.40535 41.3815L9.87562 41.1729L10.3459 41.0425H10.8162L11.208 41.1207L11.4171 41.199L11.5477 41.2772L11.6261 41.4075L11.7044 41.6161L12.3837 43.78L12.9846 46.0743L13.5855 48.4207L14.1864 50.715L14.7873 53.0093L15.5972 55.1732L16.0152 56.19L16.4855 57.2068L17.0341 58.1454L17.635 59.084L17.217 57.1286L16.9558 55.3818L16.6945 53.7654L16.5639 52.2793L16.4332 51.0018L16.3549 49.8547L16.4332 48.9161L16.5116 48.1079L16.6423 47.43L16.8513 46.8825L16.9819 46.674L17.1125 46.4654L17.2431 46.335L17.4522 46.2047L17.6612 46.1265H18.2621L18.8107 46.335L19.3594 46.5957L19.8296 48.7597L20.2999 50.8454L20.8485 52.8007L21.4494 54.6779L22.1287 56.555L22.8602 58.4322L23.6701 60.3875L24.6107 62.3429L25.29 63.6204L25.9692 64.8979L26.7008 66.1754L27.4323 67.4529L28.2422 68.6522L29.0521 69.8515L29.9142 71.0507L30.7242 72.25L32.344 74.2575L34.016 76.1347L35.7665 78.0118L37.5953 79.7586L39.4764 81.5054L41.4358 83.1218L43.4475 84.66L45.5376 86.1461L46.9484 87.0847L48.4376 87.945L49.979 88.8315L51.4682 89.6397L53.8195 90.7868L56.1186 91.8557L58.5483 92.7943L60.978 93.6807L63.2771 94.4107L65.6285 95.0104L68.0582 95.5579L70.4095 96.0272L72.8915 96.3661L75.3212 96.6268L77.8293 96.8354L80.3374 97.0179Z"
            fill="#D9E6F7"
          />
          <path
            d="M86.4772 117.458L87.6268 117.588L88.1754 117.797L88.306 117.875V117.953H88.1754L88.0448 118.031L86.9736 118.24H86.1115L83.2898 118.031L79.8412 117.953L76.1313 117.875L72.2908 117.953L70.462 118.031L68.6332 118.162L67.0134 118.292L65.4719 118.423L64.1918 118.631L63.0422 118.892L62.6242 119.022L62.2323 119.153L61.8927 119.283L61.6314 119.491L61.762 118.814L62.0233 118.136L61.553 118.266L61.0828 118.396L60.6647 118.605L60.2729 118.814L59.9332 119.022L59.672 119.283L59.463 119.622L59.3846 119.961L59.1756 119.491L59.0449 119.074L58.9666 118.605L58.8882 118.214L58.9666 117.875L59.0449 117.458L59.1233 117.119L59.3323 116.78L59.463 116.519L59.7242 116.18L59.9855 115.92L60.2467 115.659L60.9783 115.19L61.7882 114.72C62.2323 114.981 62.7287 115.164 63.199 115.32C63.617 115.372 64.1134 115.32 64.6098 115.19C65.4197 115.92 66.5431 115.815 67.2485 115.059C67.3791 114.929 67.5359 114.694 67.5881 114.512C67.6926 114.121 67.6665 113.625 67.5881 113.156L68.398 113.078L69.3386 112.948L70.3575 112.687L71.4287 112.426L72.4998 112.218L73.5187 111.957L74.4593 111.826L75.2692 111.748L74.9295 112.009L74.1196 112.609L73.1791 113.339L72.4998 113.808L73.3881 114.016L74.1196 114.147L73.571 114.746L73.0223 115.346L72.4737 115.946L72.0818 116.493L72.6304 116.702L73.1791 116.832L73.78 116.963H74.9818L75.5827 116.832L76.1836 116.702L76.6539 116.441L77.2025 116.702L77.7511 116.91L78.2998 117.041L78.8484 117.171L80.0502 117.301L81.3304 117.432H86.4772"
            fill="#D9E6F7"
          />
          <path
            d="M115.973 120.743L115.503 120.951L115.033 121.03L114.615 121.108L114.275 121.03L113.935 120.951L113.596 120.821L113.334 120.691L112.995 120.482L112.446 120.065L111.897 119.674L111.636 119.465L111.297 119.335L111.035 119.257H110.696L110.095 120.534L109.285 122.151L109.024 122.568L108.762 122.907L108.501 123.115L108.24 123.324L107.9 123.454H107.561L107.221 123.324L106.829 123.115L106.698 122.907L106.568 122.698L106.437 122.438L106.307 122.099L106.176 121.499L106.098 121.108L105.706 121.447L105.288 121.916L104.948 122.464L104.504 123.037L104.034 123.637L103.563 124.106L103.302 124.367L102.962 124.575L102.623 124.706L102.231 124.836H102.022L101.682 124.914L101.343 124.836L101.081 124.706L100.271 123.767L99.3831 122.829L98.7822 123.767L98.103 124.575L97.7633 124.914L97.4237 125.253L97.084 125.514L96.7444 125.723L96.4832 125.853L96.1435 125.931H95.8039L95.5426 125.853L95.2814 125.723L95.0723 125.514L94.8111 125.175L94.6805 124.758L94.5498 124.367L94.2886 123.689L94.2102 123.35L94.0534 123.089L93.9228 122.959H93.7922L91.9634 125.905L91.7021 126.166L91.2318 126.374L90.6832 126.505L90.1345 126.635H89.5336L89.0634 126.505L88.9327 126.426L88.7237 126.218L88.6454 126.088V125.827L88.9066 122.881L88.6976 122.959L88.4363 123.089L88.1751 123.22L87.9138 123.48L87.3652 124.08L86.7643 124.758L86.1634 125.488L85.4319 126.088L85.0922 126.348L84.7526 126.609L84.3607 126.818L84.0211 126.896L83.5508 127L83.2112 126.922L83.0805 126.844L82.9499 126.713L82.8715 126.505V126.296L82.9499 125.41L83.0805 124.549L83.1589 124.08L83.0805 123.689L83.0021 123.272L82.7409 122.803L82.3229 123.402L81.6436 124.263L80.8337 125.149L79.9715 126.009L79.5013 126.348L79.031 126.687L78.613 126.818L78.2995 127L78.1688 126.922H77.9598L77.8292 126.791L77.7508 126.713L77.6202 126.505L77.5418 126.296V126.035L77.4634 125.696L77.5418 123.141L75.8436 124.289L73.8319 125.566L73.3617 125.775L72.813 126.035L72.3427 126.166L71.7941 126.296L71.3238 126.426H70.8536L70.3833 126.348L69.9653 126.218L70.1743 125.67L70.3833 125.201L70.5923 124.732L70.8536 124.341L71.1148 123.924L71.3761 123.533L71.7157 123.194L72.0554 122.855L72.7869 122.307L73.649 121.76L74.5373 121.369L75.5562 121.03L76.5752 120.769L77.7247 120.56L78.8742 120.352L80.0238 120.221L82.5319 120.091L85.0922 120.013H90.2129L91.4931 119.935L92.6949 119.856L93.8967 119.778L95.0462 119.648L96.1958 119.439L97.2147 119.231L98.2336 118.97L99.1741 118.579L100.036 118.162L100.768 117.614L101.499 117.067L102.1 116.337L101.421 114.981L101.97 114.903L102.518 114.773L103.067 114.512L103.537 114.173L103.746 114.043L103.981 113.964L104.112 113.704L104.243 113.495L104.321 113.234V112.765L104.19 112.504L105.34 112.296L106.542 112.165L107.822 112.087H109.18L111.95 112.218L114.771 112.426L117.671 112.765L120.493 113.026L123.262 113.286L125.823 113.417V114.355L125.744 114.746L125.614 115.164L125.483 115.555L125.352 115.894L125.143 116.154L124.882 116.493L124.412 116.963L123.811 117.38L123.21 117.64L122.531 117.771L121.799 117.901L121.068 117.823L120.388 117.745L119.657 117.536L118.978 117.197L118.298 116.858L117.75 116.389L117.201 115.841V116.989L116.992 118.475L116.861 119.205L116.652 119.883L116.522 120.143L116.313 120.352L116.182 120.56L115.973 120.743ZM61.7878 114.434L63.3293 115.111L63.7212 114.773L64.2698 114.381L64.8707 114.043L65.4194 113.704L67.4311 112.895L69.1815 112.087L70.0437 111.748L70.7752 111.331L71.5067 110.94L72.1076 110.523L73.649 109.506L75.1905 108.489L76.6797 107.551L78.0382 106.612L79.0571 105.804L79.867 105.074L80.7553 104.266L81.6958 103.379L82.0355 103.04L82.4535 102.78L82.9238 102.519L83.4724 102.258L84.622 101.711L85.7715 101.32L87.3129 100.903L88.985 100.485L90.7354 100.146L92.6949 99.8075L95.0462 99.5468L97.3976 99.2079L99.8273 98.9472L102.179 98.53L102.989 98.3997L103.72 98.1911L104.53 97.9825L105.34 97.774L106.15 96.7572L107.43 95.3493L108.292 94.489L109.311 93.6807L110.461 92.7943L111.819 91.934L113.831 90.7347L115.999 89.6657L118.22 88.5186L120.388 87.5018L122.4 86.485L124.281 85.5465L125.823 84.7382L127.024 83.93L127.364 82.9132L127.834 81.8965L128.435 80.8797L129.167 79.8629L129.977 78.794L130.996 77.725L132.067 76.5257L133.425 75.2482L134.627 74.1793L135.907 73.1104L136.587 72.6411L137.266 72.1718L137.997 71.7547L138.729 71.3636L139.46 71.0247L140.192 70.764L141.002 70.5554L141.733 70.3468L142.543 70.2686L143.275 70.1904L144.085 70.2686L144.816 70.399L144.738 71.2072L144.529 72.0154L144.268 72.8236L143.928 73.684L143.458 74.5704L142.857 75.4307L142.125 76.3693L141.237 77.3079L141.916 77.2297L142.517 77.0993L142.987 76.969L143.458 76.7604L143.876 76.63L144.346 76.4997L144.947 76.4215L145.626 76.3432L145.704 76.8125V77.2818L145.626 77.7511L145.495 78.1422L145.286 78.5593L145.025 78.9504L144.764 79.2893L144.424 79.6282L143.014 80.984L141.603 82.2615L142.413 82.3397L143.301 82.6004L144.163 82.8611L144.842 82.9915L144.032 83.5911L143.092 84.1907L142.151 84.7904L141.08 85.39L140.009 85.9897L138.938 86.6675L137.867 87.3975L136.848 88.2057L137.318 88.284L137.919 88.5447L138.18 88.6229L138.441 88.7532L138.65 88.8315L138.859 88.7532L137.501 89.4832L135.829 90.2915L135.019 90.7086L134.34 91.0997L134 91.3082L133.791 91.5168L133.66 91.7254L133.53 91.934L133.608 92.1947L133.739 92.4032L134 92.6118L134.209 92.8204L134.131 93.0811L134 93.2897L133.739 93.4982L133.478 93.7068L132.877 94.0457L132.067 94.3847L131.257 94.6454L130.525 94.9061L129.977 95.1668L129.559 95.3754L130.917 96.7311L130.447 97.2004L129.977 97.5393L129.559 97.7479L129.088 97.9565L128.148 98.0868H126.868L126.998 98.6865L127.207 99.2861L127.338 99.964L127.469 100.642L126.319 101.502L124.908 102.519L123.367 103.536L121.616 104.553L120.597 105.1L119.579 105.569L118.507 105.986L117.358 106.378L116.156 106.795L114.954 107.081L113.596 107.342L112.185 107.551L114.667 107.629H116.835L118.847 107.42L120.676 107.212L122.348 106.873L123.837 106.456L125.326 105.908L126.737 105.361L128.618 104.474L130.447 103.458L132.197 102.389L134.026 101.32L132.955 100.772L131.884 100.433L131.335 100.225L130.787 99.964L130.186 99.7032L129.585 99.3643L130.133 98.9472L130.734 98.6865L131.466 98.4257L132.276 98.2172L133.896 97.8783L135.594 97.6697L137.083 97.4611L138.441 97.3307L138.99 97.2004L139.46 97.07L139.722 96.9397L139.931 96.7311L139.852 96.6529L139.722 96.5225L139.513 96.4443L139.251 96.314L138.468 96.2618L137.527 96.1315L136.587 96.0532L135.646 95.9229L134.836 95.7143L134.287 95.5057L136.116 95.0886L137.945 94.6975L139.565 94.3586L140.923 94.0197L142.073 93.6807L143.092 93.2636L143.536 93.1072L143.876 92.8986L144.215 92.69L144.477 92.4293L144.398 92.3511L144.268 92.2207L144.006 92.1425L143.667 92.0643L142.805 91.9861H141.786L140.714 91.9079L139.696 91.8297L138.833 91.6993L138.285 91.569L138.755 91.3604L139.225 91.1518L140.845 90.6825L142.256 90.2915L143.536 89.9525L144.738 89.5354L146.018 89.1443L147.298 88.5968L147.899 88.2579L148.448 87.919L148.657 87.7104L148.866 87.4497L149.075 87.2411L149.153 87.0325L149.075 86.824L148.866 86.6936L148.657 86.6154H146.776L145.914 86.6936H144.712L144.372 86.6154L144.111 86.485L143.85 86.3547L146.541 84.6079L149.022 82.9915L151.243 81.5836L153.203 80.2279L154.013 79.55L154.744 78.8722L155.345 78.1943L155.894 77.5165L156.312 76.7865L156.651 76.0565L156.86 75.2482V74.3618H156.39L155.92 74.44L155.371 74.6486L154.822 74.8572L153.751 75.535L152.602 76.2129L152.001 76.5518L151.452 76.8907L150.851 77.1515L150.25 77.36L149.702 77.4904L149.153 77.5686H148.552L148.004 77.36L149.623 76.1607L151.452 74.6225L153.542 72.7975L155.632 70.79L157.722 68.6261L159.682 66.4622L160.544 65.315L161.406 64.2461L162.138 63.1772L162.817 62.1604L162.948 61.8997L163.026 61.6911L162.948 61.4304L162.869 61.2218L162.791 61.0132L162.582 60.8829L162.373 60.6743L162.164 60.5961L161.903 60.4657L161.641 60.3875H161.093L160.831 60.4657L160.492 60.544L160.283 60.7525L160.022 60.9611L158.82 62.1604L157.409 63.5682L155.92 65.1065L154.3 66.6447L152.68 68.0525L151.06 69.4082L150.25 69.9557L149.519 70.425L148.709 70.8422L148.03 71.1811L148.5 70.79L149.101 70.1904L149.911 69.3822L150.773 68.3654L152.732 66.019L154.901 63.2554L155.998 61.8215L157.017 60.3354L158.036 58.9275L158.924 57.4415L159.734 56.0857L160.413 54.8865L160.962 53.7393L161.302 52.8007L161.38 52.4618V51.9143L161.302 51.7057L161.171 51.4972L161.04 51.2886L160.91 51.1582L160.701 51.08L160.283 50.8715L159.813 50.7411H158.872L158.611 50.8193L158.402 50.8975L158.14 51.0279L157.931 51.2365L157.383 51.7057L156.834 52.3836L155.632 53.9218L154.352 55.8772L152.941 57.9629L151.4 60.1268L150.512 61.1436L149.702 62.1604L148.84 63.0207L147.899 63.829L149.101 61.6129L150.303 59.0579L150.982 57.65L151.583 56.2422L152.184 54.7561L152.732 53.27L153.203 51.7318L153.673 50.2457L153.986 48.7857L154.248 47.2997L154.378 45.8918L154.457 44.5361L154.378 43.8582L154.3 43.2586L154.222 42.659L154.091 42.0593L154.013 41.8507L153.882 41.6422L153.673 41.4336L153.542 41.3032L153.072 41.0947L152.602 40.9643H152.131L151.713 41.0425L151.583 41.1207L151.374 41.199L151.295 41.3293L151.217 41.5379L150.538 43.754L149.937 45.97L149.336 48.3165L148.735 50.6107L148.134 52.905L147.324 55.069L146.932 56.1379L146.462 57.0765L145.914 58.0932L145.313 58.9536L145.704 56.9982L145.966 55.2515L146.227 53.635L146.358 52.149L146.488 50.8715L146.567 49.7243V48.7857L146.488 47.9775L146.358 47.2997L146.149 46.7522L146.018 46.5436L145.887 46.335L145.757 46.2047L145.548 46.1265L145.339 46.0482L145.13 45.97H144.921L144.712 46.0482L144.163 46.1786L143.614 46.4393L143.144 48.6032L142.674 50.689L142.125 52.6443L141.524 54.5215L140.845 56.3986L140.114 58.2757L139.304 60.2311L138.363 62.1865L137.684 63.464L137.005 64.7415L136.273 66.019L135.541 67.2965L134.732 68.4957L133.922 69.695L133.033 70.8943L132.171 72.0936L130.551 74.1011L128.853 75.9782L127.103 77.8554L125.274 79.6022L123.393 81.349L121.433 82.9654L119.422 84.5036L117.332 85.9897L115.921 86.9282L114.432 87.8668L112.943 88.7532L111.453 89.6136L109.102 90.6825L106.751 91.7515L104.321 92.6379L101.891 93.4982L99.8795 94.0979L97.8678 94.6975L95.7777 95.1668L93.6877 95.6361L91.5976 95.975L89.4291 96.2357L87.3391 96.4965L85.1706 96.6268L84.9616 96.705L84.7526 96.7832L84.3607 96.9918L83.8904 97.3307L83.2112 97.9304L82.3229 98.7386L81.2517 99.8075L79.9715 101.215L78.7697 102.623L77.3589 104.161L76.6274 104.891L75.8959 105.621L75.0337 106.299L74.1716 106.977L73.4923 107.446L72.813 107.864L72.0815 108.203L71.35 108.541L69.7301 109.219L68.1103 109.819L66.4905 110.419L65.0797 110.966L64.4788 111.227L63.8779 111.566L63.3293 111.826L62.9113 112.087L62.5194 112.504L62.1797 112.843L61.9707 113.182L61.8401 113.521L61.7617 113.99V114.434"
            fill="#D9E6F7"
          />
        </svg>
      )
    },
    {
      name: "Естествознание",
      link: "geography",
      img: (
        <svg
          width="121"
          height="122"
          viewBox="0 0 121 122"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M111.675 62.9405C111.93 63.7892 112.176 64.596 112.431 65.4447C112.241 65.5892 112.046 65.7338 111.856 65.8737C110.728 65.841 110.89 65.5053 109.563 65.8737C108.184 66.2561 108.579 66.1255 107.952 65.3001C107.933 65.2675 107.91 65.2302 107.892 65.1975C109.15 64.4327 110.417 63.7053 111.675 62.9405ZM111.665 62.8985C110.375 63.584 109.085 64.2695 107.799 64.955C107.525 64.6193 107.39 64.0317 107.673 63.7333C107.613 63.6633 107.557 63.5887 107.502 63.5187C107.984 63.0384 110.333 61.6628 111.006 61.5322C111.043 61.4436 111.08 61.355 111.122 61.2711C111.354 61.5835 111.856 62.4788 111.665 62.8985ZM105.51 55.7171C107.047 55.2042 107.683 54.7891 109.057 54.1036C110.324 53.4694 111.494 53.0124 112.649 52.4575C113.559 52.0238 118.869 48.7316 119.31 48.8342C119.449 49.6502 119.589 50.4663 119.728 51.2824C118.335 52.3922 113.081 53.9451 112.617 54.999C114.993 53.8705 117.375 52.7373 119.751 51.6088C119.756 52.3083 119.765 53.0078 119.77 53.7073C118.558 54.6679 115.184 55.9083 113.698 56.9995C112.273 58.0441 108.481 59.4151 107.683 60.5996C111.693 58.4032 115.704 56.2114 119.714 54.0197C119.747 54.0523 119.779 54.0897 119.812 54.1223C119.83 54.5746 119.853 55.0223 119.872 55.4746C118.586 56.3933 116.112 56.5612 114.956 57.6011C113.726 58.7156 110.988 59.1353 111.076 60.954C111.094 60.9819 111.108 61.0146 111.127 61.0426C109.98 61.7001 108.834 62.3623 107.687 63.0198C107.673 62.9871 107.362 60.954 107.358 60.87C107.265 59.3218 106.736 60.0073 106.04 59.3778C105.863 58.142 105.691 56.9436 105.51 55.7171ZM34.0142 34.3688C34.4645 34.0377 35.4485 33.0211 35.8616 33.3102C35.7781 33.3475 35.6945 33.3848 35.611 33.4175C35.6713 33.4874 35.727 33.5574 35.7827 33.6273C35.2675 34.1636 34.6083 34.6952 34.0142 34.3688ZM82.3437 31.7294C82.5665 30.461 82.4133 31.0672 81.5453 30.6382C80.5195 30.1299 82.2323 30.0086 82.4179 30.004C83.5319 29.976 84.14 29.9107 85.3515 29.99C86.7858 30.0832 87.2082 29.7661 88.4753 29.8874C89.8075 30.0179 90.657 29.0853 91.4971 29.1226C91.3439 29.2905 91.1954 29.463 91.0422 29.6309C90.9819 29.9107 90.9215 30.1952 90.8612 30.4749C89.4548 30.6522 89.5569 31.0066 89.102 32.0325C88.0808 31.7993 88.0854 30.6148 87.171 30.9459C86.5212 31.7014 87.3149 32.8252 87.9276 33.4081C88.9581 34.3874 88.1319 35.4133 88.6935 36.9196C88.5589 37.0968 88.4243 37.274 88.2897 37.4512C88.4429 37.3952 88.6007 37.3439 88.7539 37.288C88.7817 37.5165 88.8096 37.7496 88.8374 37.9781C88.1829 39.2512 87.482 37.8942 86.874 37.5304C86.2009 37.6564 86.3077 38.5843 85.0637 37.1714C84.4371 36.4626 84.3814 36.0335 83.894 35.3107C83.2999 34.4294 83.6387 34.1822 82.896 33.4874C82.3947 33.0164 81.5174 33.0351 80.9465 32.3542C80.9326 32.3123 80.914 32.2703 80.9001 32.233C81.3875 32.0651 81.8656 31.8972 82.3437 31.7294ZM65.0022 29.2485C65.3736 29.2765 65.536 27.7376 66.9053 27.3179C67.286 27.635 67.6666 27.9521 68.0472 28.2739C68.024 28.2459 68.0054 28.2133 67.9822 28.1853C66.4597 28.9874 64.9373 29.7894 63.4148 30.5915C63.4008 30.2138 63.5262 30.2884 63.4844 29.9247C63.4566 29.6635 63.4287 29.4024 63.4008 29.1366C63.9346 29.1739 64.4684 29.2112 65.0022 29.2485ZM92.7504 26.348C92.7272 26.3946 92.6993 26.4412 92.6761 26.4925C93.2656 26.9449 93.8551 27.3972 94.4446 27.8495C93.7019 28.2273 92.9546 28.605 92.2119 28.9827C91.8638 28.6703 91.8916 28.3625 91.0747 28.563C90.6477 28.6703 90.1232 28.8801 89.8214 29.034C89.3294 29.2858 88.0112 29.4117 87.5749 29.104C89.3016 28.1853 91.0283 27.2666 92.7504 26.348ZM40.3548 27.5418C40.9628 27.4112 41.3156 26.7677 41.8401 26.4506C42.0722 26.3107 43.0005 26.5951 43.2837 27.0381C42.8102 27.2247 40.7632 27.9894 40.3548 27.5418ZM25.9284 27.7096C26.0769 27.705 26.2301 27.705 26.3786 27.7003C27.2188 27.0988 28.0543 26.4925 28.8944 25.891C28.9826 25.9236 29.0661 25.9609 29.1543 25.9936C29.1683 26.0542 29.1868 26.1195 29.2008 26.1801C29.4328 26.2081 29.6696 26.2407 29.9017 26.2734C28.6066 27.2013 27.3116 28.1293 26.0165 29.0527C25.9933 28.605 25.9608 28.1573 25.9284 27.7096ZM25.9284 27.7096C25.7195 27.3785 25.9562 26.8889 25.9701 26.5298C25.9887 26.0635 26.3786 26.0962 26.6525 25.9003C27.1352 25.9329 27.6179 25.9609 28.1007 25.9936C27.3766 26.5625 26.6525 27.1361 25.9284 27.7096ZM82.3669 22.1464C81.0904 24.7345 78.9738 22.7013 79.2941 25.4386C77.999 26.0868 76.704 26.7397 75.409 27.3879C75.395 27.3552 75.3857 27.3273 75.3765 27.2946C75.0051 26.7956 74.6384 26.3013 74.2671 25.8024C76.9639 24.5853 79.6654 23.3682 82.3669 22.1464ZM105.501 55.6891C104.814 55.5213 104.127 55.3534 103.44 55.1855C103.542 54.7798 104.926 54.542 105.441 54.1876C106.091 53.7399 106.866 53.0124 107.284 52.7933C108.37 52.2197 110.356 51.0539 111.303 50.4197C110.83 50.0979 107.785 52.1591 107.181 52.5694C106.685 52.9052 105.9 53.4881 105.288 53.9404C104.471 54.542 103.575 54.3741 103.046 55.1296C101.574 54.099 102.786 53.5067 102.182 52.3503C102.201 52.3969 102.219 52.4435 102.238 52.4902C102.814 52.257 103.389 52.0285 103.965 51.7953C103.937 51.7207 103.909 51.6508 103.881 51.5762C103.343 51.8 102.809 52.0192 102.271 52.243C101.644 50.7694 101.783 51.0072 100.251 50.3964C99.388 50.0513 98.3715 49.9813 97.6149 49.6316C97.8887 48.7782 102.66 47.1927 102.916 46.1808C101.013 47.2627 99.1095 48.3445 97.2064 49.4264C95.4797 48.1906 95.4704 49.2585 94.8113 48.8855C94.7927 48.8435 94.7695 48.8062 94.7463 48.7642C99.6479 46.1108 104.55 43.4574 109.451 40.8041C108.69 40.6035 104.763 43.173 103.802 43.6673C102.127 44.53 99.3416 45.7471 97.8702 46.6984C96.9325 47.3046 95.9949 47.8875 95.0202 48.4331C94.2775 48.8482 93.7483 49.93 92.4672 49.0953C91.8545 48.6989 90.8333 47.0342 89.659 47.7943C89.1205 48.1393 89.2505 48.573 88.5171 48.0974C88.2711 47.9342 87.4727 47.2673 87.2917 47.0295C87.2592 46.9735 87.2314 46.9222 87.1989 46.8663C89.9793 45.2481 92.7596 43.63 95.5447 42.0118C95.0341 41.7274 88.2293 46.0129 87.2267 46.6191C87.2546 46.5818 87.2824 46.5399 87.3103 46.5025C86.5723 45.9709 85.8296 45.4393 85.0915 44.9077C85.0915 44.8611 85.0915 44.8144 85.0915 44.7678C86.2148 44.1289 87.3381 43.4947 88.4568 42.8559C88.4382 42.8186 88.4196 42.7813 88.4011 42.7486C87.2082 43.3502 86.0153 43.9517 84.8223 44.558C84.5717 44.3108 84.3164 44.0637 84.0657 43.8165C84.7109 43.173 85.8435 42.716 85.2865 41.373C84.5067 39.4937 83.2627 39.7408 83.1188 39.5356C83.8476 39.1346 84.5717 38.7336 85.3004 38.3325C84.1446 37.6097 82.4875 41.746 78.7556 39.2512C78.7324 39.2046 78.7092 39.1626 78.6906 39.116C79.5308 38.6963 80.3756 38.2766 81.2157 37.8569C81.1879 37.7916 81.1554 37.731 81.1229 37.6657C80.227 38.104 79.3265 38.5424 78.4307 38.9807C78.4539 39.0367 78.4818 39.088 78.505 39.1439C77.3956 38.6077 74.0582 37.3532 73.7286 36.4626C73.7101 36.4253 73.6869 36.3833 73.6683 36.346C75.8592 35.1615 78.0454 33.9817 80.2363 32.7972C79.2987 32.6947 74.4342 35.6185 73.3805 36.2387C72.7028 35.3574 71.9323 35.9449 71.2407 35.847C70.9251 35.8004 70.4284 35.6325 70.0849 35.5299C69.5465 35.362 69.2633 35.5299 68.9245 35.46C73.0324 33.3522 77.1357 31.2397 81.2389 29.1319C81.2204 29.0946 81.2018 29.062 81.1879 29.0247C80.6309 28.8475 73.2784 33.0724 71.9184 33.66C70.9436 34.0843 68.0658 35.7864 67.2952 35.5812C66.1487 35.2734 63.8604 37.0595 62.751 35.8097C63.5772 35.3807 64.4035 34.947 65.2297 34.518C64.6077 34.5506 63.2105 35.2688 62.5886 35.5486C62.4911 35.5905 60.0542 35.917 59.9799 35.9076C59.9706 35.889 60.3791 33.5574 60.6065 33.3522C61.5906 32.4755 61.9294 31.1604 62.3333 30.8667C62.8578 30.9599 62.2451 31.3563 63.1966 30.918C63.5865 30.7361 63.8604 30.6895 64.2921 30.447C64.979 30.0646 65.7728 29.4257 66.4829 29.1552C67.0353 28.9407 68.2607 28.3765 68.8177 28.521C69.2076 28.6236 69.4351 28.9967 69.8482 29.0666C70.3263 29.1459 70.758 28.9547 71.2639 29.104C71.2314 29.1879 61.7484 33.2496 60.7365 34.5366C61.1032 34.7045 67.1467 31.1138 68.2746 30.7687C68.9848 30.5496 71.2036 29.533 71.9462 29.1646C73.0602 28.6096 75.3625 29.1133 76.1284 28.7962C76.639 28.2226 75.6318 28.2459 75.655 27.5464C76.2491 27.1034 77.8737 26.5578 78.5885 26.1941C79.4751 25.7371 80.9511 25.6065 80.7794 26.8842C79.113 27.7096 77.4513 28.535 75.7849 29.3604C75.8174 29.4257 75.8453 29.4863 75.8778 29.5516C77.5488 28.7402 79.2198 27.9288 80.8908 27.1174C81.3596 27.3972 81.095 27.7703 82.2926 27.7609C82.8542 27.7563 83.6062 28.2226 84.1168 27.9615C84.9152 27.5511 86.317 26.6931 87.12 26.1987C87.677 25.8583 93.4652 22.4868 93.4884 22.4868C93.9804 23.6479 92.8478 23.5034 92.4626 24.2215C92.0123 25.0749 92.4951 25.392 92.5508 26.0589C92.133 26.5998 86.4516 29.5516 85.8621 29.5143C84.8316 29.449 78.8252 28.6843 81.5314 31.1978C81.3875 31.3516 79.8093 31.6594 80.7237 32.8346C81.3132 33.5947 82.2694 33.5294 82.8635 34.0377C82.7614 34.1403 82.6547 34.2475 82.5525 34.3501C83.2766 34.3501 83.0446 35.1802 83.8615 36.0196C83.8336 36.0988 83.8058 36.1781 83.7733 36.2574C83.3927 36.4532 81.8099 37.0874 82.0884 37.4885C82.6964 37.1434 83.3045 36.803 83.9126 36.4579C84.5717 36.9149 85.4304 39.1626 86.7254 38.2952C87.431 38.5983 88.0158 39.2978 88.8328 38.9201C89.7286 38.5051 89.2552 37.6657 89.2227 36.9755C90.1139 36.4486 91.0051 35.9216 91.8916 35.3993C91.8684 35.3574 91.8452 35.3107 91.8174 35.2688C90.9262 35.7444 90.0303 36.2247 89.1391 36.7004C89.0927 36.6631 89.0463 36.6258 88.9952 36.5838C88.9488 35.9776 88.907 35.3714 88.8606 34.7651C88.8142 34.7185 88.7724 34.6719 88.726 34.6252C90.0814 33.7625 91.4321 32.9045 92.7875 32.0418C91.5528 32.7226 90.3227 33.4081 89.0881 34.089C88.5728 33.5667 87.1896 32.2097 87.4681 31.5522C88.0901 31.6454 88.5867 32.8998 89.4594 32.6154C89.6404 32.1537 89.8261 31.6921 90.0071 31.2304C90.2903 31.2071 90.578 31.1791 90.8612 31.1558C91.6317 30.4749 91.6921 29.4537 92.639 29.006C93.1217 28.7822 94.7324 27.8822 95.0851 27.9941C96.0321 28.3019 97.406 27.9381 97.7216 26.9122C98.209 25.3267 97.3456 25.35 96.408 24.8184C96.6308 24.3055 103.955 20.5469 104.735 20.2997C105.329 20.8174 105.924 21.335 106.518 21.8526C106.49 21.8713 106.467 21.8899 106.439 21.9039C105.371 22.4448 104.308 22.9858 103.241 23.5267C103.264 23.578 103.292 23.6293 103.315 23.6806C104.434 23.1723 105.557 22.6687 106.675 22.1604C106.708 22.2023 106.74 22.249 106.778 22.2909C107.59 23.3868 108.402 24.4827 109.21 25.5832C107.492 26.264 94.0268 33.5294 93.8969 34.2149C94.1568 34.4107 97.2296 32.247 97.7309 31.9579C99.0352 31.2024 100.353 30.5309 101.653 29.7755C103.241 28.8521 107.673 26.4086 109.224 25.8583C109.256 25.835 109.289 25.8164 109.321 25.793C109.683 26.3806 110.05 26.9682 110.412 27.5558C107.789 28.9221 105.167 30.2931 102.54 31.6594C102.572 31.7247 102.605 31.79 102.637 31.8553C105.306 30.4983 107.975 29.1459 110.644 27.7889C111.067 28.521 111.494 29.2485 111.916 29.9806C111.285 30.3957 108.476 31.5708 108.425 32.1397C109.651 31.5009 110.876 30.862 112.102 30.2231C112.505 30.8853 112.909 31.5522 113.318 32.2143C113.021 32.4289 112.724 32.6387 112.431 32.8532C112.459 32.8998 112.487 32.9511 112.515 32.9978C112.821 32.8532 113.127 32.7086 113.434 32.5641C113.889 33.3522 114.339 34.1356 114.794 34.9237C112.849 35.9496 110.909 36.9755 108.964 38.0014C108.996 38.0667 109.029 38.132 109.061 38.1973C111.011 37.218 112.956 36.2434 114.905 35.2641C115.184 35.8517 115.458 36.4393 115.736 37.0315C113.903 38.0387 112.074 39.046 110.24 40.0533C110.273 40.1139 110.305 40.1745 110.338 40.2351C112.162 39.2512 113.986 38.2719 115.806 37.288C116.01 37.8429 116.214 38.3932 116.418 38.9434C114.798 40.5569 105.069 44.5486 104.638 45.5979C108.606 43.5227 112.57 41.4476 116.539 39.3724C116.572 39.3678 116.604 39.3678 116.637 39.3631C117.008 40.6781 117.379 41.9978 117.751 43.3129C117.783 43.3642 117.816 43.4108 117.848 43.4621C113.592 45.8917 109.335 48.3212 105.079 50.7508C105.111 50.8067 105.139 50.8627 105.172 50.9186C109.433 48.5311 113.698 46.1435 117.959 43.7512C118.168 44.4927 118.382 45.2341 118.591 45.9756C117.31 46.8663 113.805 48.0881 112.793 49.6316C114.668 48.4751 116.544 47.3186 118.419 46.1575C118.442 46.1948 118.461 46.2321 118.484 46.2647C119.547 48.4704 119.296 48.5217 117.203 49.5803C115.991 50.1912 114.385 51.2917 113.243 51.7627C112.543 52.0565 105.589 55.5399 105.501 55.6891ZM97.4988 25.9936C96.9325 28.8288 93.1403 27.234 92.7643 25.2428C92.5136 23.9044 94.0268 24.7112 94.05 22.7619C94.0547 22.3003 94.7649 21.9272 95.1316 21.722C95.9949 21.2324 96.032 21.363 96.8072 21.6241C97.6195 23.8298 96.1156 23.7692 94.9877 24.5759C95.048 24.7298 95.1037 24.879 95.164 25.0329C96.111 25.0936 96.8211 25.5179 97.4988 25.9936ZM79.6979 25.2568C79.3498 24.4547 80.849 24.1283 81.4849 23.8858C82.5804 23.4661 82.8403 21.9692 83.5551 21.5029C85.6114 20.1505 89.3433 22.1044 88.9442 22.8412C88.3732 23.8904 88.0065 23.3495 86.7626 23.3355C85.1333 23.3169 85.2865 24.2448 84.9941 25.378C84.7759 26.2221 84.2653 27.677 83.1745 27.3785C80.0507 26.5158 82.2926 27.2899 80.4638 25.5832C80.4916 25.4386 80.5241 25.2894 80.552 25.1449C80.2688 25.1822 79.981 25.2195 79.6979 25.2568ZM31.2663 17.8562C31.2802 17.9588 31.2942 18.0614 31.3081 18.1686C30.9089 18.4111 30.5097 18.6536 30.1059 18.9008C29.9249 18.6816 30.0455 18.4158 30.2776 18.1593C30.2591 18.0707 30.2359 17.9774 30.2126 17.8888C30.5654 17.8795 30.9135 17.8702 31.2663 17.8562ZM37.8018 15.4873C37.8297 15.5152 37.8622 15.5432 37.89 15.5759C38.0943 15.7764 38.3031 15.9769 38.5074 16.1774C36.2608 17.637 34.0142 19.0966 31.7676 20.5562C31.7815 20.5935 31.7955 20.6355 31.8094 20.6728C31.5959 20.393 31.387 20.1085 31.1735 19.8241C33.3829 18.3785 35.5924 16.9329 37.8018 15.4873ZM85.8992 20.435C87.4217 19.3018 90.578 18.3085 92.5415 17.0728C93.8597 16.2427 97.2435 14.2935 98.7428 14.2562C99.3184 14.8018 99.8893 15.352 100.465 15.8976C99.9821 16.1914 95.8185 18.2106 95.8882 18.6163C95.9578 18.6163 99.0631 16.9982 99.3277 16.8443C100.901 15.9163 100.883 16.1121 102.247 17.7489C100.521 18.6396 98.7939 19.5303 97.0718 20.4256C97.0996 20.4863 97.1321 20.5422 97.16 20.6028C97.2389 20.6448 100.567 18.9008 100.971 18.6956C103.412 17.4505 102.916 18.3785 104.536 20.0526C102.071 21.3163 99.6062 22.5801 97.1461 23.8485C97.6056 22.9811 97.5824 21.3023 96.6819 20.6961C94.5978 20.8174 87.4217 26.3013 84.8363 27.2387C85.0266 26.5811 85.3886 26.0402 85.5371 25.2055C85.6996 24.2961 85.4814 24.1003 86.6233 23.9044C87.3706 23.7785 88.2804 24.2122 88.9024 23.965C89.478 23.7319 89.7054 22.7806 89.5058 22.2117C89.3016 22.0251 88.1783 21.2417 87.8302 21.0272C87.0086 20.5282 86.1823 20.5749 85.8992 20.435ZM37.0452 14.1163C37.2077 14.522 37.3702 14.9277 37.5373 15.3334C35.3464 16.7836 33.1601 18.2339 30.9692 19.6842C30.9785 19.7262 30.9878 19.7681 31.0017 19.8148C30.765 19.5769 30.5329 19.3391 30.2962 19.1013C30.8903 18.5417 31.6144 18.0847 32.3432 18.0334C34.0653 17.9075 33.4804 17.2779 33.5825 16.3127C34.7337 15.5805 35.8895 14.8484 37.0452 14.1163ZM73.0649 24.921C75.1351 23.8625 77.4467 22.6593 79.4565 21.5075C81.7542 20.1878 83.7362 19.437 85.9828 18.3039C87.1246 17.7256 87.8487 16.9515 88.8977 16.4292C89.7611 16.0049 91.1165 15.2354 91.9056 14.6898C92.9453 13.9717 94.1707 13.4914 95.3265 13.0064C95.9114 12.7593 96.4173 12.209 97.0068 12.7639C97.406 13.137 98.2276 13.622 98.39 13.9577C97.4756 14.0883 93.0846 16.35 92.1655 16.9748C90.397 18.1733 88.0158 19.092 86.0431 20.0946C84.6831 20.7894 83.9218 20.2438 82.7985 21.4749C82.52 21.7826 80.3059 22.8226 79.7907 23.0604C79.1919 23.3355 74.1139 25.6205 73.9654 25.6438C73.6637 25.4107 73.3666 25.1635 73.0649 24.921ZM27.1816 13.7665C27.2048 13.7992 27.2327 13.8318 27.2559 13.8644C27.3209 14.0183 26.62 15.1375 26.5364 15.4826C26.3786 16.1121 25.933 16.6391 25.376 16.6391C25.4781 16.4013 25.5849 16.1588 25.6916 15.9209C25.9284 15.7297 26.1697 15.5386 26.4065 15.3474C26.3879 15.3194 26.374 15.2914 26.3554 15.2681C26.0444 15.4639 25.738 15.6551 25.427 15.851C25.4317 15.9209 25.441 15.9909 25.4456 16.0608C25.311 16.1541 25.1718 16.252 25.0371 16.3453C25.1161 16.4386 25.195 16.5365 25.2739 16.6298C25.2553 16.6577 25.2321 16.6857 25.2135 16.7137C25.0232 16.5785 24.8376 16.4479 24.6472 16.3127C24.9257 15.8883 25.1114 15.1375 25.8355 14.9976C25.8819 14.8997 25.9237 14.8064 25.9701 14.7085C26.374 14.3961 26.7778 14.079 27.1816 13.7665ZM32.9698 15.6272C33.5965 14.9696 35.9544 13.0903 36.8178 13.1277C36.8549 13.3375 36.8874 13.552 36.9246 13.7619C35.7641 14.5453 34.5991 15.324 33.434 16.1075C33.2808 15.9443 33.123 15.7857 32.9698 15.6272ZM36.2979 11.8173C36.3304 11.8219 36.3629 11.8266 36.4 11.8313C36.5022 12.0738 36.5996 12.3162 36.7018 12.5634C35.3928 13.5194 34.0885 14.4753 32.7795 15.4313C32.5474 15.2914 32.3153 15.1515 32.0833 15.0069C33.4897 13.9437 34.8961 12.8805 36.2979 11.8173ZM28.3281 11.794C28.3885 12.6147 27.1909 13.6173 26.5271 13.7992C26.0212 14.2888 25.5152 14.7784 25.0047 15.2681C24.8979 15.0069 24.7865 14.7505 24.6797 14.4893C24.7308 14.3634 24.7819 14.2375 24.8329 14.1069C25.998 13.3375 27.163 12.5634 28.3281 11.794ZM30.8811 14.6665C31.5587 13.9484 34.9379 11.3416 35.8245 11.1131C35.9405 11.253 36.0519 11.3929 36.168 11.5328C35.6063 11.9945 35.04 12.4561 34.4784 12.9178C33.5825 13.6033 32.682 14.2841 31.7815 14.9696C31.4845 14.867 31.1828 14.7691 30.8811 14.6665ZM30.3287 13.5473C30.5793 13.0251 32.2271 11.5608 32.8027 11.2204C33.6104 10.7447 34.794 9.50897 35.6574 10.6235C34.0096 11.8686 32.3618 13.1137 30.714 14.3588C30.5886 14.0883 30.4587 13.8178 30.3287 13.5473ZM31.2477 12.0131C31.6098 11.5002 31.5077 11.0805 31.9811 10.6701C32.3664 10.339 32.5706 10.2877 33.0673 9.7468C33.3783 9.82607 33.6893 9.90535 34.0003 9.98462C33.9956 10.0266 33.9956 10.0686 33.991 10.1059C33.0766 10.7447 32.1622 11.3789 31.2477 12.0131ZM24.0345 12.6147C24.1877 13.1183 24.2481 16.4712 24.3363 16.5598C26.2347 18.4344 26.6803 15.907 27.2744 14.993C27.6783 14.3727 27.98 13.8644 28.342 13.2116C28.9826 12.0598 28.7505 12.1344 29.1218 11.2577C29.6139 10.0779 31.9579 9.19653 30.8764 11.6261C30.6258 12.1903 29.6696 13.1416 29.8135 13.7012C30.1337 14.9696 30.1709 15.0069 31.3313 15.3147C33.1508 15.7997 34.1581 17.679 31.4566 17.4225C30.7697 17.3572 30.0502 17.0774 29.7392 17.7909C29.3493 18.6956 29.2518 18.9474 30.0409 19.6049C30.8161 20.2484 32.3942 22.0671 32.9652 22.9158C33.9167 24.3241 31.4613 25.6438 30.3658 25.7651C29.5582 25.8537 26.671 24.7252 25.7009 25.9563C25.1485 26.6604 25.6406 28.7635 24.9861 30.4097C24.3548 32.0045 24.8236 33.8931 26.3183 34.7138C28.1424 35.7164 27.177 37.2786 29.7485 36.5185C30.895 36.1781 33.1555 35.0356 33.7589 34.9843C34.2834 34.9423 35.3139 34.9517 35.6899 34.6019C36.1355 34.1869 36.8456 33.3289 36.3165 32.732C35.3324 31.6268 34.2184 31.1371 34.5619 29.4397C35.8152 29.1413 36.4279 30.1578 38.0943 30.1625C40.1737 30.1672 38.8973 28.3065 38.9994 27.7889C39.4821 27.5744 39.5332 28.2599 40.2619 28.2599C40.7029 28.2599 40.9211 28.1433 41.4874 28.0967C42.2393 28.0361 43.5483 27.7843 43.8361 27.1034C43.8685 27.0614 43.8964 27.0195 43.9289 26.9775C43.4183 26.5811 42.9077 26.1894 42.3925 25.793C42.36 25.835 42.3321 25.877 42.2996 25.9143C42.1929 24.8744 44.6484 24.1936 44.7969 26.8096C44.8619 27.9475 45.1821 30.1066 46.5932 30.2558C47.3777 30.3397 47.7769 29.7801 48.6124 30.4143C49.1647 30.8294 49.5454 31.375 49.2297 32.0931C48.6077 33.4874 46.8671 31.8506 46.2497 33.9211C45.6138 36.0569 48.2457 35.8563 49.0719 36.1968C50.9796 36.9848 50.4876 34.7558 50.8497 33.604C51.6991 30.8667 52.3072 32.5781 53.7925 32.9138C56.1227 33.4408 53.5604 34.5273 56.1784 36.1595C57.7287 37.1247 58.9123 35.7631 58.9634 34.3128C59.0191 32.8579 57.9144 31.5661 59.8221 31.2724C61.702 30.9879 60.2816 29.0014 61.0104 28.0594C61.4745 27.4578 61.948 27.3972 62.1894 26.4879C62.375 25.7977 62.2358 25.434 62.6767 24.7998C63.308 23.8904 65.0626 22.9391 66.158 23.4195C66.9796 23.7785 67.5923 25.1635 68.8084 25.2055C70.4887 25.2661 69.8296 23.0604 72.6332 25.2474C74.7823 26.9262 73.9793 26.3433 75.5157 28.3765C74.1093 28.3485 73.051 28.4884 71.7095 28.5444C69.319 28.647 69.9781 28.4091 68.0518 27.621C67.4299 27.3692 66.3437 25.919 65.3596 27.7563C64.3199 29.6962 62.9088 27.719 62.9088 29.2112C62.9088 31.2071 62.2915 29.2392 61.2471 31.6827C60.458 33.5294 59.9985 32.1677 59.7293 34.4061C59.5668 35.7631 58.592 36.5045 61.1032 36.3646C62.997 36.2574 62.6814 36.7144 64.3756 36.8916C65.2807 36.9848 65.7403 36.0848 67.7084 36.262C69.0777 36.3833 68.9291 35.7677 70.7533 36.2854C72.6425 36.8216 71.8534 35.5905 73.7611 37.3999C74.4945 38.0947 75.7153 38.5051 76.639 38.8641C78.5514 39.6056 80.2224 41.2937 82.3761 40.5149C83.7083 40.0346 84.1539 40.1932 84.827 41.5455C85.4768 42.8559 83.9497 43.0191 83.4855 43.9517C84.075 44.4927 84.386 45.001 84.8873 45.5093C85.4118 46.0409 86.2334 46.1155 86.5955 46.7124C86.925 47.258 88.285 49.4544 89.1205 48.8855C91.3486 47.3606 90.6477 48.7829 92.2073 49.6642C93.3816 50.3311 94.4678 49.3098 95.786 49.4217C96.2224 49.459 98.1208 50.4057 99.2255 50.6388C100.962 51.0072 101.458 51.2637 101.709 53.0544C101.881 54.2762 101.616 55.7451 103.343 55.899C104.814 56.0296 105.297 55.7917 105.367 57.7363C105.496 61.2384 106.174 59.0933 106.689 60.6042C107.214 62.1384 106.875 62.8193 106.949 64.153C107 65.1229 107.581 66.797 108.783 66.5965C109.488 66.4799 109.855 66.0789 110.663 66.2328C111.452 66.382 111.846 66.5918 112.561 65.9996C113.698 65.0576 111.132 60.7674 112.654 59.5457C112.751 59.4664 116.047 57.3213 116.084 57.3073C116.655 57.0881 119.491 56.0482 119.9 55.9689C120.749 59.9514 120.596 66.6478 119.853 70.6675C118.79 76.4033 117.43 79.8588 115.342 85.2122C113.568 89.7589 110.305 94.6413 107.279 98.4418C105.315 100.909 103.505 102.266 101.217 104.304C99.0584 106.225 97.4153 108.146 95.0434 109.895C86.4748 116.209 76.0217 119.935 65.5035 121.11C55.2779 122.252 43.8918 119.552 34.6826 115.122C32.1529 113.905 29.9666 112.739 27.6365 111.149C25.5895 109.746 22.9345 108.127 21.0406 106.71C19.2025 105.334 17.1602 102.891 15.4242 101.212C13.3586 99.2206 12.1007 97.318 10.4483 95.0143C4.66006 86.9469 1.71257 75.895 0.747097 66.0369C0.278285 61.2477 0.463953 56.3933 1.01632 51.6228C1.75899 45.2015 2.13033 42.7533 4.95712 36.845C7.42651 31.7294 9.44565 28.2552 12.9826 23.7925C16.6496 19.1712 19.8338 16.5458 24.0345 12.6147ZM40.3455 13.9624C40.4662 12.4841 41.7334 12.2276 42.7824 11.4349C43.5947 10.8147 45.3725 9.65353 46.0362 9.63954C46.1801 9.82141 46.324 9.99861 46.4679 10.1805C46.2915 10.3344 46.1151 10.4929 45.9388 10.6468C46.1105 10.6841 46.2776 10.7168 46.4493 10.7541C46.5236 10.9826 46.6025 11.2111 46.6768 11.4396C44.4627 12.708 42.2486 13.9717 40.0391 15.2401C40.0159 15.1981 39.9927 15.1562 39.9695 15.1142C40.4755 14.009 40.1784 14.466 41.1299 13.6919C41.3759 13.4867 42.5596 12.9038 42.4343 12.6147C41.738 13.067 41.0417 13.5147 40.3455 13.9624ZM29.9156 8.77218C29.8924 8.82814 27.6829 10.6002 27.3719 10.81C26.9681 11.0805 25.1346 12.3722 24.7958 12.237C26.4993 11.0758 28.2074 9.924 29.9156 8.77218ZM24.573 13.8691C24.1227 12.6054 27.3626 11.1971 28.3699 10.2831C29.0058 9.70949 31.9997 7.8815 32.7842 7.88616C33.6104 8.76751 32.5521 10.3344 31.5912 10.5442C31.4891 10.2318 31.3824 9.91467 31.2802 9.60224C31.8001 9.2898 32.3153 8.98202 32.8352 8.66959C32.4453 8.36181 31.4752 9.36907 30.5701 9.37374C29.8181 9.3784 28.9315 10.3204 28.667 10.9126C28.3977 11.5095 24.87 13.9577 24.573 13.8691ZM45.3725 8.38513C45.521 8.66492 45.6742 8.94472 45.8227 9.22451C45.1125 9.93799 44.458 9.97996 43.6643 10.4043C42.9495 10.7867 42.4018 11.3603 41.673 11.8453C41.3899 11.2297 42.9727 10.6095 42.2486 9.66286C42.2857 9.49964 42.3229 9.33643 42.3554 9.17322C43.3672 8.57166 44.3745 7.96543 45.3864 7.35921C45.4282 7.34522 45.4653 7.3359 45.5071 7.32191C45.4607 7.68098 45.4189 8.03072 45.3725 8.38513ZM48.0275 7.61569C48.4406 7.7789 49.0023 7.25196 49.4247 7.04677C49.434 7.14004 49.4432 7.2333 49.4525 7.32657C49.3922 7.49445 49.3318 7.66232 49.2715 7.83486C48.6959 8.31984 48.4824 7.90481 47.9393 7.78357C47.9718 7.72761 47.9997 7.67165 48.0275 7.61569ZM29.9156 8.77218C30.8857 8.1473 31.8558 7.51776 32.8213 6.89289C32.7934 7.62502 30.4911 8.72088 29.9156 8.77218ZM42.7174 7.81155C42.8056 7.80688 42.8891 7.80222 42.9773 7.79756C43.1444 7.66699 43.3115 7.54108 43.4786 7.41051C44.0217 7.0561 44.5602 6.70169 45.1032 6.35195C45.6556 7.0561 44.8247 7.2846 44.212 7.78823C43.8732 8.06803 42.5921 8.76751 42.2439 8.77218C42.2625 8.70223 42.2811 8.62762 42.3043 8.55767C42.3786 8.52503 42.4482 8.49238 42.5225 8.45974C42.5828 8.24057 42.6524 8.02606 42.7174 7.81155ZM48.0275 7.61569C47.9068 7.50844 47.7815 7.40584 47.6562 7.29859C47.8883 7.08408 48.1157 6.87423 48.3432 6.65972C48.3339 6.63174 48.3246 6.60843 48.3107 6.58045C48.8677 6.23537 49.4247 5.89029 49.9817 5.54054C49.991 6.93019 48.4313 7.05144 48.0275 7.61569ZM42.7174 7.81155C42.6339 7.67631 42.8195 6.28666 42.8659 6.05816C43.098 4.92499 42.7638 5.17215 43.5947 4.26281C43.8639 4.47266 44.1378 4.68251 44.407 4.89235C44.4023 5.02292 44.3931 5.15816 44.3884 5.28873C43.9196 5.61049 43.4508 5.93226 42.9866 6.25402C43.0655 6.35195 43.1444 6.44988 43.2234 6.54781C43.6597 6.16542 44.1006 5.78303 44.537 5.40065C44.6669 5.62448 44.8015 5.85298 44.9315 6.07682C44.1888 6.6504 43.4554 7.2333 42.7174 7.81155ZM53.1334 3.52136C53.9039 4.58924 52.0844 5.23277 51.5181 4.65919C52.0612 4.28147 52.5996 3.89908 53.1334 3.52136ZM51.7316 3.45141C52.1958 3.2369 52.2515 2.71461 53.0545 2.90581C53.0359 3.81514 51.2303 4.68251 50.8125 4.36074C50.5015 4.63121 50.1952 4.89702 49.8842 5.16748C49.0998 5.76904 48.3199 6.3706 47.5401 6.97216C47.4519 6.95817 47.3638 6.94418 47.2756 6.92553C47.3313 6.72967 47.3823 6.52915 47.438 6.3333C48.8352 5.35401 50.3344 4.43069 51.7316 3.45141ZM51.6341 3.38612C50.2184 4.2768 48.8073 5.16282 47.3916 6.0535C47.2616 5.79236 47.1363 5.53588 47.0063 5.27474C48.7795 4.14623 50.5572 3.01772 52.3304 1.89388C52.4464 2.08974 52.5578 2.29026 52.6739 2.48611C52.3257 2.78456 51.9776 3.08767 51.6341 3.38612ZM46.0594 2.1457C46.5004 2.3229 46.6443 1.89854 46.881 2.21098C46.259 2.34622 46.6025 2.61202 46.0455 2.59337C46.0501 2.44414 46.0548 2.29492 46.0594 2.1457ZM49.5918 1.94984C49.6103 1.98248 49.6243 2.01046 49.6428 2.03844C49.2761 2.59803 46.9739 4.011 46.324 4.15556C46.3658 4.02032 46.4122 3.88509 46.454 3.74986C47.4984 3.1483 48.5427 2.5514 49.5918 1.94984ZM58.8334 1.55346C59.3254 1.58144 59.836 1.87523 60.3466 1.64673C61.3492 1.19439 61.1775 1.86124 61.8459 1.38559C62.0408 1.44155 62.2358 1.50217 62.4307 1.55813C61.4188 2.18767 60.4069 2.81254 59.3904 3.44208C59.4136 3.28353 59.4415 3.12498 59.4647 2.96643C59.3254 2.73793 59.1119 1.76797 58.6756 1.94051C58.7267 1.80994 58.7777 1.67937 58.8334 1.55346ZM49.3643 1.39958C49.4897 1.39025 49.6103 1.38092 49.7357 1.3716C49.8935 1.3716 50.0513 1.37626 50.2045 1.37626C49.6939 1.76331 49.0069 1.81461 48.2318 2.24829C47.8001 2.49078 46.7743 3.17161 46.3519 3.47006C45.7484 2.56539 48.0275 1.87989 48.3432 1.57678C48.4128 1.61875 48.4778 1.66072 48.5474 1.70269C48.8212 1.6001 49.0905 1.4975 49.3643 1.39958ZM73.0649 24.921C72.5125 24.5433 71.9648 24.1702 71.4124 23.7925C71.4171 23.7645 76.509 20.5096 77.0614 20.2251C78.0176 19.7401 79.3683 19.2039 80.176 18.5697C81.0393 17.8888 82.0837 17.9121 82.9703 17.1567C84.5392 15.8277 86.5073 14.7551 88.3222 13.7525C89.3109 13.2069 90.3924 13.1323 91.2279 12.4655C91.6224 12.1484 93.6091 10.8567 93.739 10.6888C92.5554 10.7867 91.9241 11.682 90.9447 12.3815C90.1278 12.9644 89.1252 13.0064 88.234 13.538C86.4144 14.6246 84.8363 15.422 83.0817 16.709C81.8331 17.623 79.1084 18.8448 77.6045 19.6422C75.8035 20.5982 74.1464 21.7687 72.4104 22.8319C71.5703 23.3448 70.2102 23.8438 69.6022 24.3101C68.451 25.1915 67.843 24.1842 67.2024 23.5547C65.6567 22.0485 63.0991 23.0137 62.078 24.6505C61.4699 25.6298 62.0594 26.3853 60.8943 27.3879C59.5575 28.5397 61.0382 28.5584 59.2326 29.5423C57.492 30.4936 55.7142 31.1744 54.0432 32.2796C54.0664 32.3263 54.0896 32.3776 54.1128 32.4242C56.2062 31.3796 58.2996 30.3304 60.393 29.2858C60.3559 29.6682 60.3188 30.0506 60.2816 30.433C59.409 31.0998 58.8798 30.2884 58.1743 31.5522C58.1047 33.2776 58.9309 34.2522 57.8262 35.5206C57.1485 36.2994 56.935 36.1455 56.1969 35.5579C55.1015 34.6952 55.8256 35.0682 55.3568 34.4014C56.1041 32.0045 53.9735 32.746 52.8549 31.9159C53.2541 30.6428 59.6132 28.2646 60.1656 27.4019C59.8546 27.2946 54.1546 30.4237 53.5047 30.8713C52.9524 31.2537 52.7945 31.748 52.154 31.6174C51.6434 31.5149 50.9843 31.6734 50.7893 32.1864C50.5015 32.9418 49.9817 35.5999 49.7078 35.8424C49.1322 35.861 46.9135 35.3854 46.765 34.6252C46.5747 33.6646 47.4055 33.0024 48.3896 33.5247C47.9904 33.8232 46.7046 34.2988 47.2152 34.7931C47.1967 34.7651 47.1781 34.7372 47.1595 34.7092C48.0507 34.075 48.9466 33.4408 49.8378 32.8112C49.7914 32.7879 49.7496 32.7646 49.7032 32.746C49.7914 32.2563 49.8796 31.7667 49.9724 31.277C51.8059 29.948 53.6393 28.6143 55.4728 27.2853C55.4264 27.22 55.3846 27.1594 55.3382 27.0941C53.4908 28.3998 51.6388 29.7008 49.7914 31.0066C49.5221 30.6848 49.2529 30.363 48.9837 30.0366C49.1554 29.7568 53.5465 26.8796 54.1871 26.4412C56.002 25.1868 57.673 24.2961 59.5668 22.9531C61.4467 21.6194 69.3283 17.3899 70.1174 16.4712C69.4583 16.2147 57.6358 24.0676 56.0066 25.0096C53.5697 26.4133 51.2906 28.3578 48.9094 29.7195C48.2921 30.0692 47.9579 29.0573 47.1085 29.6542C46.5282 30.0646 45.9248 29.5236 45.7624 28.978C44.8851 26.0309 46.0966 27.3646 47.0574 26.0868C47.0342 26.0449 47.0063 26.0029 46.9831 25.9609C46.4493 26.2873 45.9202 26.6184 45.3864 26.9449C45.4142 26.9309 45.4467 26.9122 45.4746 26.8982C45.3214 26.3247 45.1636 25.7557 45.0104 25.1822C44.9454 25.1868 44.8851 25.1915 44.8201 25.1961C44.8712 25.1075 44.9269 25.0236 44.9779 24.9397C43.5854 24.9024 41.8958 23.2516 41.8401 26.1288C41.1717 26.6231 40.4987 27.1174 39.8303 27.6117C39.1062 26.8936 38.2289 27.2247 38.3031 27.8216C38.3588 28.2972 38.9623 29.0713 38.577 29.4584C37.8807 30.1578 35.9219 29.1319 35.351 28.7869C38.9669 26.4692 42.5874 24.1469 46.208 21.8293C46.0362 21.694 38.8044 26.1288 38.1453 26.6184C37.0035 27.4672 35.4439 28.2413 34.2602 29.0247C32.7888 29.9993 35.3 32.1677 35.6481 32.7133C35.6713 32.7506 35.6945 32.7926 35.7177 32.8299C34.237 33.7206 32.7563 34.6113 31.2756 35.4973C30.3705 35.8004 28.3374 36.747 28.3281 35.5952C30.3287 34.2009 32.3293 32.8066 34.3252 31.4123C34.2788 31.3377 34.2277 31.2677 34.1813 31.1931C32.0879 32.634 29.9991 34.075 27.9057 35.5159C26.7499 34.3641 24.9304 33.562 25.2924 31.7387C25.2692 31.7014 25.246 31.6687 25.2228 31.6314C28.7412 29.1972 32.255 26.7583 35.7734 24.3241C35.727 24.2542 35.6806 24.1889 35.6342 24.1189C32.1993 26.4785 28.7644 28.8381 25.3342 31.1978C25.3621 29.0806 27.8732 28.1433 29.275 27.0335C30.4076 26.1335 33.6707 25.406 33.7636 23.6153C34.1859 23.3308 34.613 23.0511 35.0354 22.7666C34.9982 22.7153 34.9611 22.664 34.924 22.6127C34.5526 22.8738 34.1813 23.135 33.81 23.3961C33.2251 22.5801 32.6403 21.764 32.0554 20.9479C31.8837 20.4163 38.1221 16.7883 38.9855 16.238C41.4224 14.6898 43.9753 13.1463 46.5839 11.8219C46.816 11.9898 47.0435 12.1624 47.2756 12.3349C47.5912 12.0738 47.9068 11.8126 48.2225 11.5515C48.5195 11.6354 48.8212 11.7147 49.1183 11.7986C48.9466 12.0598 41.5848 16.3733 40.7679 16.7976C39.9649 17.2127 33.2019 21.6241 33.1369 21.9459C33.7264 21.8293 40.3455 17.3292 41.7241 16.6064C43.1862 15.8417 44.6298 14.7551 46.0826 14.009C47.4241 13.3188 49.0301 11.5095 50.5897 12.2323C49.1183 13.8551 35.4021 21.5728 35.3789 22.4588C35.4206 22.4681 43.2883 17.3899 44.1424 16.8536C45.637 15.9163 47.0342 15.0676 48.4638 14.0277C49.1879 13.5007 49.8749 13.0297 50.6454 12.5727C51.416 12.1111 51.8476 12.3582 52.8178 11.7054C53.4212 11.295 54.1778 10.1572 54.5491 10.1245C56.2805 9.97996 54.9901 9.95664 55.7142 8.85612C55.9973 8.4271 58.4203 5.75505 58.8056 5.47992C60.0031 4.62655 61.7345 3.31617 63.0574 2.77524C64.0368 2.3742 66.3623 -0.12997 67.3602 1.01253C66.9007 1.80062 57.6034 6.79962 57.0881 8.06803C57.3434 8.21725 59.3533 6.47319 59.7246 6.19806C60.523 5.61049 61.8088 5.04158 62.44 4.53328C63.2059 3.9224 64.2364 3.27887 65.1276 2.82653C66.1998 2.28559 67.0353 1.50683 67.959 0.993874C68.7759 1.12444 69.5975 1.25968 70.4145 1.39025C70.006 1.9545 63.9068 4.90168 64.2549 5.68977C66.418 4.29079 68.581 2.88715 70.744 1.48818C71.6492 1.62341 72.5543 1.76331 73.4594 1.89854C72.545 2.77524 70.6976 3.72188 69.5882 4.32344C68.2607 5.04624 67.8476 6.1048 66.1116 6.75299C62.946 7.94212 61.3028 9.47166 58.6802 11.3743C55.7095 13.5334 45.9387 18.7002 44.2399 20.878C45.029 20.5096 47.7444 18.5697 48.7145 17.9261C50.2787 16.8862 51.9405 15.9256 53.5465 14.9323C55.1525 13.9391 56.6797 13.095 58.2393 11.9945C59.8082 10.8893 61.1403 9.68617 62.7789 8.71156C64.3988 7.75093 65.8702 7.20066 67.4577 6.33796C68.3814 5.83433 68.6924 5.2421 69.5233 4.68251C70.2381 4.20219 71.0086 4.00167 71.7745 3.4141C74.3135 1.4602 74.2485 2.11305 77.0939 2.9198C77.6973 3.08767 81.6613 4.23017 81.8656 4.42603C80.2735 5.47059 69.6857 10.894 69.565 12.1344C71.1293 11.0105 71.8116 10.2971 73.6683 9.42503C74.2067 9.17322 77.3167 7.47113 77.6787 7.18667C78.7788 6.32397 80.5566 5.31671 81.8331 4.76178C83.1142 4.20685 85.1937 5.5079 86.2009 6.27734C85.5232 7.62968 72.1644 14.3214 71.4635 15.7857C76.5415 12.694 81.6149 9.60224 86.6929 6.5105C87.2082 6.75765 87.7234 7.0048 88.2386 7.25196C87.9694 7.68098 74.0861 16.28 72.8885 16.751C69.9085 17.9308 67.5737 20.337 64.9465 21.7733C63.9207 22.3329 57.6498 26.0309 57.5198 26.7397C57.5848 26.7117 65.8006 21.5402 66.0002 21.3816C67.1699 20.4256 68.8641 19.3251 70.1592 18.4951C71.677 17.5158 73.2738 16.9842 74.6941 16.0655C77.4838 14.2608 80.3431 12.5867 83.1699 10.8287C84.5763 9.95664 86.0245 9.1499 87.4078 8.2872C88.6842 7.48978 88.1551 7.15869 89.6636 8.10999C90.2995 8.51103 91.4089 8.88876 91.8127 9.28514C91.5064 9.49032 88.9349 10.6095 88.2757 10.8986C86.809 11.5421 86.2195 12.1764 84.9987 12.8992C84.4185 13.2442 84.1354 13.7525 83.634 14.1676C83.2766 14.466 82.3297 14.8997 81.8934 15.1935C81.4107 15.5199 78.8856 17.1754 78.6767 17.5064C80.1667 17.0215 84.0518 14.0463 85.3422 12.9131C86.9343 11.5142 90.2113 10.4043 92.1609 9.34109C93.5441 10.2691 94.932 11.2017 96.3198 12.1297C96.2873 12.181 96.2502 12.2323 96.2177 12.2836C95.2708 12.7686 94.1429 13.2955 93.1588 13.7199C92.1655 14.1489 91.3207 14.8997 90.4295 15.3054C88.3083 16.2753 86.8415 17.7116 84.516 18.6629C83.3416 19.1432 73.3387 24.2728 72.9488 24.6459C72.9813 24.7485 73.0231 24.8371 73.0649 24.921ZM52.3397 0.998537C52.27 1.09647 52.2051 1.18973 52.1354 1.28766C52.1494 1.42289 52.1633 1.55813 52.1772 1.6887C50.3669 2.86384 48.5613 4.03898 46.751 5.21878C46.6257 4.99494 46.5004 4.77577 46.3751 4.55193C46.4029 4.57059 46.4308 4.5939 46.4586 4.61256C48.0229 3.554 49.5871 2.49544 51.1514 1.43688C51.1885 1.32496 51.2257 1.21305 51.2628 1.10113C51.6248 1.06849 51.9823 1.03584 52.3397 0.998537ZM62.635 1.93119C62.4307 1.43688 63.9439 1.07315 64.1574 0.583507C64.5381 0.625477 64.9187 0.667446 65.2993 0.709415C65.3225 0.779364 65.3457 0.84465 65.3689 0.914598C63.0063 2.42083 60.6483 3.9224 58.2857 5.42396C58.2625 5.40065 58.2393 5.37733 58.2161 5.35401C58.6524 4.80375 59.0933 4.25349 59.5297 3.70322C60.5601 3.11565 61.5999 2.52342 62.635 1.93119ZM38.7348 15.5945C36.9292 14.5826 37.3191 10.8567 35.5228 9.924C33.6011 8.92606 33.6475 10.5862 33.3969 7.76958C33.2669 6.32397 34.7569 6.14677 35.857 5.55453C38.3171 4.23017 39.9927 3.97369 42.4482 3.16695C47.8883 1.3716 44.6112 3.13431 46.5375 5.48925C47.3591 6.49185 46.1476 6.54314 47.879 8.10999C49.6057 9.67218 49.8424 7.38719 50.1534 6.84159C50.9425 5.46127 49.9028 4.62655 51.7687 5.31671C53.4212 5.92759 54.02 4.51929 53.6347 3.12032C53.5001 2.62601 51.9823 0.970557 53.7275 0.863303C54.7905 0.798017 55.8581 0.728068 56.9164 0.64413C58.8056 0.494906 61.2935 0.499569 63.2059 0.588171C63.2105 0.658119 63.2152 0.723405 63.2245 0.793354C61.6788 0.919262 60.1331 1.04517 58.592 1.17108C58.5596 1.12911 58.5271 1.08714 58.4992 1.04517C58.3089 1.42289 58.1186 1.80528 57.9236 2.183C57.9608 2.20166 57.9979 2.22497 58.0397 2.24362C58.787 2.79855 59.3301 2.30425 58.5828 3.77783C58.1511 4.63587 57.9654 4.86904 57.5616 5.83899C57.0649 7.01879 55.1711 7.9701 55.0272 9.15923C54.9019 10.2271 54.3402 8.89342 53.6115 10.0872C53.1009 10.9266 52.6692 11.1411 51.8384 11.5701C50.5201 12.2556 48.9419 10.6188 47.7119 11.2857C47.4798 11.1971 47.2477 11.1038 47.0203 11.0152C46.7743 10.3997 47.1363 10.4929 46.6675 9.77011C46.5654 9.61623 46.1291 8.94938 46.078 8.82814C46.0687 8.80948 45.9527 7.14937 45.8877 6.83693C45.7159 6.03485 44.3327 3.87576 43.2976 3.75918C43.0238 4.38872 42.7499 3.69856 42.5689 5.00427C42.4946 5.54521 42.4807 6.0162 42.3786 6.54314C42.0444 8.25922 41.7287 7.85352 41.9237 9.88203C41.9794 10.4789 40.4523 12.181 40.0995 12.8292C39.315 14.2562 40.183 14.6012 38.7348 15.5945ZM59.1258 0.0239173C41.7148 0.499569 27.7386 6.88356 15.7862 19.7635C3.90346 32.5687 -0.696474 45.4393 0.0833329 62.9265C0.816723 79.4064 6.39605 94.3102 18.7476 105.418C23.9974 110.137 33.5779 115.612 40.1598 118.097C46.4029 120.457 56.4661 122.392 63.1224 121.935C69.5929 121.492 79.8371 118.881 85.6486 116.036C93.507 112.194 99.0677 107.563 105.237 101.417C115.397 91.2884 121.84 74.1883 120.907 59.7788C120.359 51.3243 119.552 45.3834 116.465 37.3766C113.926 30.7921 108.026 22.3982 102.962 17.5484C100.182 14.8857 97.1275 11.6634 93.8412 9.71415C90.5827 7.7789 86.2148 5.37267 82.7104 4.03898C75.3486 1.23636 66.975 -0.195256 59.1258 0.0239173ZM73.5662 76.394C73.2645 76.6551 72.9674 76.9163 72.6657 77.1774C72.5311 77.2567 72.3965 77.336 72.2665 77.4152C71.937 77.1961 71.6027 76.9816 71.2732 76.7624C72.1133 76.31 72.9581 75.8624 73.7983 75.41C73.8679 75.4847 73.9422 75.5593 74.0118 75.6339C73.8633 75.881 73.7147 76.1375 73.5662 76.394ZM52.0101 63.7612C51.9219 63.7099 51.8384 63.654 51.7548 63.6027C50.4134 64.7592 41.4549 70.3457 40.2527 70.2991C39.5471 67.8369 38.7905 68.4012 41.065 66.9882C42.3461 66.1908 43.7989 65.496 45.0058 64.7265C46.2544 63.9291 47.6794 63.3649 48.8398 62.5674C50.0188 61.756 51.5274 60.7534 52.7435 60.0027C55.1061 58.5384 57.543 56.3886 60.0078 55.2461C61.6556 54.4814 62.2033 54.2948 63.7629 53.2736C64.9465 52.4948 66.3948 51.5062 67.5691 50.7881C67.3092 50.6528 64.436 52.5228 63.9207 52.8632C62.5236 53.7772 61.6695 54.3321 60.096 54.929C57.6173 55.871 55.004 58.3938 52.6599 59.7415C50.0142 61.2664 47.6608 63.0198 44.8247 64.554C43.4369 65.3048 42.1558 66.0835 40.7957 66.8623C40.0995 67.2633 39.5053 68.0514 38.8137 67.3519C37.825 66.354 37.4723 66.6105 37.2216 66.3633C39.7003 64.7778 42.5874 63.4395 45.1404 61.9379C47.8697 60.3291 50.1441 58.3565 52.7853 56.7664C54.0339 56.0202 55.2639 55.4327 56.559 54.6399C57.9236 53.8052 59.1073 52.9705 60.5369 52.2197C62.1708 51.3617 62.8299 50.8907 64.2967 49.8881C65.2158 49.2632 67.04 48.2466 67.778 48.8062C69.7321 50.9606 68.4603 49.7528 68.2236 52.4902C68.0797 54.1363 69.3933 54.9897 69.89 56.2487C70.3773 57.4845 70.9158 58.9394 72.0483 59.6389C73.7379 60.6788 74.216 60.3664 75.6132 61.1405C75.9752 61.341 82.2601 57.4285 83.1838 56.8783C85.76 55.3534 88.6657 54.57 91.0283 52.6394C91.0144 52.6394 91.0051 52.6394 90.9911 52.6394C90.7359 52.5321 87.7652 54.4207 87.2407 54.6912C86.0802 55.2788 84.6599 55.8151 83.3834 56.4493C82.1533 57.0601 80.9465 58.0814 79.6561 58.7249C78.0362 59.5363 77.3724 59.9653 75.8267 60.9773C75.8592 60.1239 75.8917 59.2705 75.9242 58.4171C77.5813 57.4798 79.243 56.5472 80.9001 55.6099C80.8722 55.5586 80.8444 55.5073 80.8165 55.4607C79.1594 56.37 77.5023 57.2747 75.8453 58.184C75.3625 57.6757 74.8751 57.1674 74.3878 56.6591C76.0263 55.2368 79.0156 53.7679 80.979 52.7653C81.9723 52.257 83.3277 51.5109 84.2514 50.9C86.2009 49.6083 86.2845 50.6388 87.7837 50.6528C89.4826 50.6668 88.4011 49.3145 91.3486 50.6155C92.3233 51.0446 92.3512 52.4109 92.3605 53.3669C92.3697 54.556 92.379 55.2508 90.8287 55.1482C89.3294 55.0456 90.1417 55.6425 89.4362 55.9969C88.9813 56.2254 88.0576 56.6964 87.8673 57.1627C88.4429 56.855 89.0184 56.5472 89.594 56.2441C90.7544 57.6431 86.3773 56.9949 85.5743 60.0073C85.0591 61.9379 84.5763 61.0799 83.518 61.3737C82.7939 61.5742 81.3178 61.7607 80.7515 61.0006C82.6036 60.0073 84.451 59.0187 86.303 58.0254C86.2705 57.9602 86.238 57.8995 86.2056 57.8342C84.2793 58.8602 82.3483 59.8861 80.422 60.912C80.4359 60.954 80.4452 61.0006 80.4591 61.0426C79.424 60.9633 78.3889 60.884 77.3492 60.8094C76.7875 62.4089 78.556 62.1804 77.1032 63.2623C76.7318 63.5421 75.5714 64.582 76.6622 65.1136C77.4559 65.5006 79.7304 63.9757 82.7893 66.1069C82.5943 66.9462 82.3251 68.0701 81.3364 68.3965C80.6123 68.6343 80.733 68.9561 80.4823 69.4318C80.2363 69.9027 79.5493 69.7395 79.3126 70.2105C78.5885 71.6328 79.8603 71.3623 78.0037 72.5235C77.5627 72.7986 75.2233 74.1929 75.1861 74.51C76.3976 73.8105 77.6091 73.1157 78.8206 72.4162C78.8717 72.4535 78.9274 72.4955 78.9784 72.5375C78.6581 73.3815 78.3379 74.2256 78.0222 75.0696C76.5322 75.2748 75.3115 74.1976 73.7194 75.2375C73.1252 75.6292 69.9503 77.0142 69.825 77.1308C69.4583 77.4852 69.5558 78.5997 69.7043 79.0893C69.9224 79.8075 70.4795 79.4064 70.7997 81.0339C71.0365 82.2184 72.8885 83.6174 72.7864 84.3588C71.3103 84.6573 70.2056 85.492 70.6094 87.1847C71.0597 89.064 70.2613 89.1713 70.1499 90.6822C69.9271 93.7506 70.0571 92.8133 67.7641 93.9978C65.7635 95.0283 67.2674 96.6045 68.5996 97.2434C68.7156 97.6444 68.827 98.0501 68.943 98.4512C68.2189 99.3139 65.1879 99.2906 64.111 100.284C63.2987 101.03 61.4467 102.634 62.324 104.042C61.6416 104.616 60.9547 105.19 60.2723 105.758C60.5416 106.085 61.883 104.7 62.2358 104.434C62.9413 105.208 62.8346 107.293 62.2868 107.857C61.9991 108.155 59.4879 109.405 58.9123 109.722C56.8468 109.806 57.0788 109.484 56.002 111.182C55.7931 111.513 54.7533 111.541 54.6095 112.343C54.5305 112.786 54.3495 113.784 53.9643 114.026C53.9086 113.933 52.9431 111.872 52.9663 111.681C53.1148 110.254 53.0916 110.804 54.5213 109.783C55.1525 109.335 58.9587 107.041 58.8288 106.747C58.8102 106.719 58.7916 106.686 58.7731 106.658C56.805 108.006 54.8369 109.354 52.8688 110.702C52.4046 109.965 52.3118 108.538 53.152 107.824C53.463 107.558 55.8117 106.076 56.0994 105.982C57.0185 105.698 61.5627 102.975 62.0362 102.196C58.8984 104.075 55.7606 105.959 52.6228 107.838C52.6507 107.885 52.6785 107.932 52.7064 107.978C52.516 107.796 52.2283 105.647 51.5645 104.695C51.0493 103.963 51.0678 103.432 50.7893 102.984C50.3716 102.317 49.666 102.55 49.0858 102.019C49.0673 101.986 49.0441 101.949 49.0255 101.916C50.0931 101.272 51.1653 100.624 52.2329 99.9807C52.2051 99.9341 52.1818 99.8874 52.154 99.8408C50.9936 100.508 49.8331 101.175 48.6727 101.846C48.5427 101.324 48.4174 100.806 48.2875 100.284C48.3385 100.302 48.3896 100.326 48.4406 100.344C53.2773 96.9822 58.1139 93.6247 62.9506 90.2625C62.9042 90.1972 62.8624 90.1319 62.816 90.062C58.0397 93.3822 53.268 96.6978 48.4963 100.018C48.4731 99.9807 48.4453 99.9434 48.4221 99.9108C48.5474 99.16 48.6449 97.9429 48.5381 97.4299C48.4499 96.9916 48.1714 96.5066 48.0275 95.989C47.9161 95.5833 47.3777 95.3501 47.373 94.6366C49.0812 93.4801 50.7893 92.319 52.4928 91.1625C51.8755 90.8174 48.1157 93.9465 47.0528 94.4501C46.8392 93.7506 46.6304 93.0511 46.4168 92.3516C46.4122 92.3143 46.4076 92.277 46.4029 92.2397C50.302 89.8335 54.1963 87.4226 58.0954 85.0163C58.049 84.9371 57.9979 84.8578 57.9515 84.7785C54.1174 87.1801 50.2834 89.5817 46.4493 91.9832C46.2219 91.4376 47.1363 89.6843 47.4334 89.134C48.2735 87.5718 47.1827 88.2993 48.9466 87.1055C50.6919 85.921 52.7528 85.0163 54.4377 83.9205C55.6956 83.1044 64.552 77.9422 64.8166 77.5178C64.7934 77.4805 64.7748 77.4432 64.7516 77.4059C59.0794 80.8194 53.4073 84.2329 47.7351 87.6464C47.2848 87.3386 47.373 85.3941 47.6562 84.7972C47.9997 84.0697 49.5918 83.1231 50.3159 82.736C52.8085 81.4023 54.4841 79.9241 56.7632 78.4925C58.8381 77.1867 61.0243 75.9556 63.0434 74.5753C64.2224 73.7686 68.7202 71.9266 69.3608 70.9846C67.9404 71.4649 59.8917 76.0769 58.5828 77.0841C57.0788 78.2406 54.9297 79.2432 53.4537 80.5303C52.0055 81.7894 49.3968 82.694 48.2271 83.8599C48.0693 83.3562 47.9068 82.8526 47.749 82.349C47.7119 82.3723 47.6794 82.3956 47.6423 82.4189C46.8067 81.4536 45.9666 80.4837 45.1311 79.5184C45.1404 79.4438 45.1497 79.3738 45.1543 79.2992C53.1287 74.58 61.1078 69.8608 69.0823 65.1416C69.0405 65.067 68.9941 64.9923 68.9523 64.9177C61.0197 69.6369 53.087 74.3515 45.1543 79.0707C44.834 78.2686 44.5137 77.4712 44.1981 76.6691C44.226 76.6458 44.2585 76.6271 44.2863 76.6038C49.5871 73.5634 54.8926 70.5276 60.1981 67.4872C60.1563 67.4126 60.1145 67.338 60.0727 67.2633C54.7534 70.3224 49.434 73.3815 44.1099 76.4406C43.9289 75.881 43.7525 75.3261 43.5715 74.7665C44.0403 73.8525 47.6469 71.9825 48.6681 71.4509C49.5686 70.98 50.4969 70.882 51.3649 70.2385C52.4046 69.4691 52.9384 69.1659 54.0524 68.5411C54.9019 68.0607 64.3292 62.4136 64.3385 62.3949C64.1807 62.0218 62.3101 63.4255 61.9109 63.626C61.2517 63.9618 59.7478 64.6939 59.1955 65.1043C57.9933 65.9856 55.4821 67.4219 54.1128 68.2193C52.1865 69.3431 50.7104 70.2805 48.6634 71.2411C47.9208 71.5908 46.57 72.1924 45.9434 72.6307C45.5164 72.9292 43.8036 74.2302 43.5111 74.3422C43.2512 73.6613 42.9913 72.9851 42.7313 72.3043C44.031 70.8121 46.5515 70.0753 48.2085 69.0634C48.8352 68.681 53.3608 65.6638 53.4862 65.3561C53.2123 65.1555 48.682 68.4758 48.0507 68.8675C47.2013 69.3898 46.0966 69.7955 45.2611 70.3038C44.9315 70.5043 42.5317 72.0572 42.5317 72.0478C42.0072 71.6048 41.4827 71.1572 40.9582 70.7141C44.6391 68.3825 48.3246 66.0742 52.0101 63.7612ZM73.5337 54.3508C75.5993 52.8213 77.2842 52.1404 79.308 50.8487C79.7907 50.5409 81.782 49.2818 82.1487 49.1046C82.845 48.7689 82.7661 49.2212 83.3509 49.5896C83.5923 49.7435 84.6459 50.2844 84.7295 50.3964C81.1786 52.3782 77.6323 54.3555 74.0814 56.3373C74.0536 56.3793 74.0257 56.4259 73.9979 56.4679C73.8447 55.7638 73.6869 55.0596 73.5337 54.3508ZM72.5357 52.0145C72.6703 52.4202 72.8467 52.8166 72.9303 53.2409C73.1206 54.1783 72.8049 54.3788 73.1206 55.1902C73.5291 56.2347 73.1763 56.2907 74.2114 57.2C74.7452 57.671 75.6364 58.4078 75.576 59.1493C75.4925 60.1892 75.6782 60.7161 74.5874 60.1752C73.8076 59.7881 73.413 59.942 72.4939 59.3451C70.7208 58.1887 70.9529 57.1534 69.9364 55.4746C69.4676 54.7005 69.0544 54.3415 68.7806 53.3902C68.4092 52.0891 68.8734 52.2057 68.9245 51.2078C68.9663 50.4197 69.514 49.8274 69.1287 49.2585C68.7899 48.7642 67.5041 48.7269 67.8755 47.6823C67.9172 47.5658 69.2958 46.0689 69.4583 46.0036C69.9457 45.817 70.5444 47.1601 70.6558 47.5285C70.9065 48.3678 71.5285 49.1513 71.5749 49.8321C71.677 51.2078 72.364 51.4922 72.5357 52.0145ZM72.5914 51.0725C72.4522 50.5036 71.3289 48.3912 71.8859 47.9575C72.5682 47.4259 74.411 46.3766 75.2326 45.9523C76.1052 45.5046 81.717 42.273 82.0373 42.231C82.6732 43.0844 82.7614 43.1683 82.3622 44.4554C82.0791 45.3694 82.2972 44.8424 81.8006 45.6585C81.5406 46.0875 81.0068 46.4652 80.9976 46.5165C81.7634 46.6471 81.898 46.1015 82.028 47.4399C82.1116 48.2839 82.7196 48.4798 82.1951 48.8342C81.2575 49.4637 80.1899 50.0793 79.2151 50.6622C78.6721 50.9886 73.5662 53.9125 73.478 53.9358C73.594 53.9031 72.9442 51.5202 72.8978 51.3523C72.8467 51.3243 72.791 51.2964 72.74 51.2637C75.1119 49.8321 77.4838 48.4005 79.8557 46.9689C78.6721 47.0015 73.8911 50.2005 72.5914 51.0725ZM70.5073 45.9756C71.2639 45.4673 72.0669 44.8191 72.805 44.4274C73.5012 44.0543 74.5781 43.63 75.1444 43.2802C76.8618 42.2124 78.4446 40.9626 80.5334 42.0025C80.5287 41.9652 80.5241 41.9326 80.5241 41.8952C80.9419 41.8486 81.3596 41.8067 81.7774 41.76C81.7913 41.8393 81.8099 41.9139 81.8238 41.9932C78.3518 43.9471 74.8844 45.901 71.4124 47.8549C71.1061 47.23 70.8044 46.6005 70.5073 45.9756ZM70.3773 37.0828C70.4795 37.2133 70.5862 37.3439 70.6883 37.4745C70.0942 37.7916 69.5001 38.1087 68.9059 38.4211C68.9059 38.16 68.9059 37.8988 68.9059 37.6377C69.0266 37.5864 69.1426 37.5351 69.2633 37.4792C69.254 37.3952 69.2448 37.3113 69.2355 37.2273C69.6115 37.176 69.9967 37.1294 70.3773 37.0828ZM25.6452 67.7996C24.6705 67.6411 23.7003 67.4778 22.7256 67.3193C22.7349 67.2773 22.7395 67.2354 22.7488 67.1934C23.1294 66.2607 27.0656 64.3581 28.0078 63.7566C28.9269 63.169 29.8042 62.9778 30.83 62.1944C31.814 61.4436 32.3432 61.0845 33.3133 60.4736C33.2855 60.4223 33.253 60.3757 33.2251 60.3244C29.5675 62.5161 25.9051 64.7032 22.2428 66.8949C21.7972 66.1721 21.3516 65.4493 20.906 64.7265C20.9432 64.7079 20.9757 64.6846 21.0128 64.6659C21.9365 64.1296 22.8555 63.5887 23.7792 63.0524C23.7514 62.9965 23.7189 62.9405 23.6911 62.8845C22.7534 63.3882 21.8158 63.8871 20.8782 64.3908C20.4326 63.7799 19.987 63.169 19.5367 62.5581C20.8689 61.9426 21.8297 61.4669 23.1944 60.6089C24.5962 59.7275 24.9118 59.2565 26.5643 58.5337C27.1352 58.2866 33.7914 53.9498 33.8146 53.8798C33.8193 53.8751 33.8193 53.8705 33.8239 53.8658C33.2205 53.8192 30.0688 55.9689 29.3122 56.4306C28.5231 56.9156 27.8361 57.5032 27.1027 57.9322C26.2858 58.4125 25.5013 58.571 24.7633 59.126C23.4311 60.1239 21.9968 61.1918 20.4743 61.8819C19.2675 62.4322 19.3 62.5022 18.2463 61.6395C17.6383 61.1405 16.9838 60.5343 17.0441 59.6576C17.2298 57.1208 17.2066 56.9855 19.3975 55.7031C20.8967 54.8311 22.1779 53.8192 23.6168 52.9238C25.2924 51.8839 31.633 48.6103 32.5614 47.5098C32.5289 47.4585 32.501 47.4072 32.4685 47.3559C27.3441 50.4943 22.2196 53.6327 17.0905 56.771C17.1184 56.813 17.1416 56.8596 17.1695 56.9016C16.8863 56.2767 16.7285 54.8218 17.1555 54.2249C17.2809 54.043 18.9101 53.2596 19.2025 53.1057C20.9571 52.1917 22.4099 51.0399 24.0717 50.1539C25.3853 49.4544 32.8723 45.0896 33.4154 44.3388C28.0264 47.5285 22.6374 50.7181 17.2484 53.9031C17.2298 53.8705 17.2112 53.8332 17.188 53.8005C17.0859 53.7213 16.7146 51.8606 16.6821 51.5948C16.5567 50.5782 16.4825 50.1725 17.4108 49.8461C18.1535 49.585 18.6316 49.0487 19.3835 48.587C20.5625 47.8642 19.6621 47.3046 20.479 46.5165C22.1129 44.945 22.4842 45.0989 24.5962 44.9404C26.5921 44.7911 25.4038 42.4735 26.1558 41.4336C26.9727 40.3004 29.0754 39.8388 30.338 39.2838C31.2199 38.8968 31.7258 38.2999 32.6588 38.2346C33.4154 38.1833 34.5666 37.9501 35.3742 37.8429C36.3072 37.717 38.396 36.8076 39.9509 36.5372C40.7957 36.3926 44.1563 35.6605 44.6808 36.29C44.7273 36.6025 44.4116 37.4698 44.277 37.731C44.0867 38.0994 43.4926 38.2952 43.047 38.5191C42.3554 38.8688 40.9025 39.8434 40.4151 40.0346C39.38 40.4403 36.2329 42.4315 35.4114 43.2756C38.3031 41.5735 41.1949 39.8761 44.0867 38.174C44.1053 38.2066 44.1238 38.2393 44.1424 38.2719C44.5323 39.1206 45.3075 38.7009 46.2869 39.2978C44.899 41.0605 35.2628 45.3974 34.6548 46.3487C34.8636 46.3253 40.4708 43.4108 40.9489 43.1077C41.8076 42.5714 46.3472 39.517 46.8253 39.5823C47.1688 40.3657 47.5169 41.1445 47.8604 41.9279C47.1734 42.3476 46.4865 42.7673 45.7949 43.187C45.8274 43.2429 45.8552 43.2989 45.8877 43.3549C46.6629 42.9352 47.4427 42.5201 48.2178 42.1004C48.1993 42.1424 48.1807 42.1797 48.1621 42.2217C48.9048 42.6274 49.6428 43.0284 50.3855 43.4341C50.3623 43.3968 50.3391 43.3642 50.3159 43.3269C49.4525 43.8398 48.5938 44.3528 47.7304 44.8704C47.749 44.9077 47.7722 44.9404 47.7908 44.9777C48.125 45.001 49.8888 43.8725 50.4319 43.6067C51.1235 43.2709 52.6599 43.3455 53.268 42.9258C53.3748 42.9911 53.4862 43.0517 53.5976 43.117C53.8993 42.8839 55.8674 42.674 57.0092 41.9092C58.2161 41.1025 59.474 42.6694 60.2955 42.3383C60.458 42.5714 60.6251 42.7999 60.7876 43.0331C60.7504 43.089 54.1314 47.3186 53.3469 47.9108C52.4603 48.5824 50.9657 48.7129 49.5268 49.7109C48.8677 50.1679 45.962 51.8513 45.6974 52.2337C45.9991 52.5788 49.7357 49.8228 50.3205 49.4684C51.2953 48.8808 52.3257 48.8015 53.0406 48.3632C53.7972 47.8969 54.5909 47.3932 55.2918 46.801C55.9741 46.2227 59.2047 44.2502 60.0495 43.8352C60.3745 43.6766 61.0057 43.1963 61.3167 43.2662C61.9155 43.4015 61.8784 43.7186 62.5561 43.3642C63.243 43.0051 63.0342 43.0424 63.2523 42.3802C63.4751 41.7087 63.995 41.8953 64.3246 41.4709C64.3106 41.4383 64.2967 41.4056 64.2828 41.373C63.9811 41.4989 63.6794 41.6294 63.3823 41.76C63.2291 41.3357 63.1781 40.5756 63.8604 40.389C64.4267 40.7667 65.7542 42.0864 64.8862 42.9631C64.5334 43.3175 62.3518 44.5486 61.7623 44.8937C60.6855 45.5233 56.4476 47.6544 55.9277 48.629C59.0609 46.7683 62.194 44.9077 65.3272 43.0471C65.3179 43.0984 65.3132 43.145 65.304 43.1963C65.7217 43.4481 66.1395 43.6999 66.5619 43.9517C67.2674 43.6113 67.3092 42.8652 67.6109 42.3569C67.8198 42.0072 68.8316 41.4569 69.2308 41.2144C69.7693 40.888 72.5357 39.3724 72.4243 39.0274C72.4058 38.9994 72.3872 38.9667 72.3686 38.9388C70.8694 39.8901 69.3654 40.8414 67.8662 41.7927C67.4438 41.2471 68.6042 39.0693 69.0823 38.645C70.5769 37.3113 71.0736 37.7729 72.5914 38.5657C75.2836 39.974 73.9654 39.4377 74.8241 41.4522C75.6782 43.4574 75.7107 42.6134 73.1995 43.8911C72.2433 44.3761 70.874 46.0129 69.8853 45.4487C68.9895 44.9404 68.024 47.1741 67.2906 47.7989C66.3437 48.6103 61.6045 51.2964 60.3141 51.9725C58.035 53.171 56.1412 54.6866 53.76 55.8943C51.402 57.0881 49.4015 58.8275 47.2291 60.3431C45.7577 61.369 33.2298 68.1867 33.2112 68.2893C34.1952 67.8835 35.1746 67.4778 36.1587 67.0721C36.2469 67.2773 35.6574 68.4058 35.3696 68.695C34.9611 69.1007 33.7171 68.9281 33.1416 68.9375C32.5474 68.9514 29.521 68.5224 29.4004 68.2799C34.2509 65.3094 39.0969 62.3389 43.9475 59.3731C43.5576 58.8928 39.8256 61.7234 39.2686 62.0731C37.8065 62.9825 36.1494 63.8219 34.5851 64.7918C33.3226 65.5752 31.1085 66.6898 30.0455 67.5291C29.5953 67.8835 28.3792 68.625 27.8129 68.4758C27.3534 68.3685 25.8959 68.0934 25.6452 67.7996ZM37.5976 66.9369C39.6957 67.9115 38.7952 69.3991 39.7838 70.4996C40.2341 70.9986 41.0928 71.2504 41.5802 71.7587C41.5988 71.7774 42.2811 72.794 42.4946 73.0737C42.5178 73.1064 43.5854 76.5525 43.7386 76.9629C44.1563 78.0914 44.5323 79.8308 45.3493 80.6096C46.0826 81.3091 47.8836 83.0531 47.4659 84.0837C46.4865 86.4806 46.9042 85.5246 47.0806 87.8796C47.2988 90.8734 44.1517 90.3884 47.2384 95.933C48.2039 97.6631 48.1296 97.5931 47.8511 99.603C47.6469 101.095 47.995 102.326 49.5454 102.751C50.6501 103.054 50.418 103.287 50.6501 104.084C50.8404 104.733 51.3603 104.667 51.6248 105.847C52.0194 107.586 51.8662 108.552 52.2236 110.123C52.3629 110.743 52.3675 111.312 52.4603 111.919C52.581 112.711 53.2355 112.842 53.3933 113.518C54.1128 116.549 54.8647 113.052 55.2454 112.329C55.5796 111.699 55.8442 112.087 56.2944 111.751C56.5543 111.555 56.6889 111.033 56.8607 110.753C57.4363 109.834 58.5967 110.51 59.3486 110.039C60.3466 109.419 62.7881 108.57 62.9831 107.577C63.4751 105.054 63.2755 105.908 62.6628 103.464C62.4029 102.429 64.1342 100.615 65.1601 100.344C65.5314 100.247 69.073 99.1646 69.1287 99.1367C70.6466 98.2879 67.6527 96.0729 67.5181 95.8631C66.5572 94.4128 70.0199 94.2216 70.4098 93.0558C70.6233 92.4216 70.5166 91.7174 70.5909 91.0739C70.679 90.3138 71.12 89.6283 71.1339 88.9754C71.1618 87.7583 70.6233 86.0096 71.7049 85.1935C72.9813 84.2329 74.7498 86.1169 72.7168 82.9785C72.3315 82.3863 71.4589 81.7614 71.301 81.2438C70.8601 79.7982 71.6167 80.5863 70.433 79.1919C70.0849 78.7816 69.9364 77.7557 70.4098 77.3686C71.12 76.795 71.6909 78.0308 72.3361 77.8769C74.2717 77.4106 74.1046 74.6779 75.7107 75.3634C75.8638 75.4287 77.3677 75.6199 77.6555 75.6572C78.5003 75.7644 78.5978 74.7479 78.9134 74.2023C79.3405 73.4561 79.3173 71.2178 79.6561 70.6582C79.9857 70.1126 82.4597 68.4012 82.9146 67.5758C83.1931 67.0721 83.5227 65.8504 82.9517 65.4866C82.469 65.1789 81.6242 64.6193 81.0904 64.6239C80.3245 64.6286 79.735 64.2835 78.8067 64.3255C78.0037 64.3628 77.2888 65.0949 76.6715 64.3302C77.4049 63.3649 78.8624 63.141 77.7391 61.5648C79.0388 61.4762 80.0739 61.5322 81.3271 61.854C83.4298 62.3902 82.8403 61.7421 84.3953 61.8493C86.4841 61.9939 84.9569 58.6643 88.5914 58.0721C89.7333 57.8855 90.1603 57.1254 90.216 56.1182C90.2485 55.5166 91.6456 55.6005 92.5136 55.2928C93.0706 55.0969 92.7643 52.728 92.6529 52.1637C92.3976 50.8021 92.8339 50.7601 91.2279 50.2098C89.8168 49.7248 89.9793 49.1466 88.5728 50.042C87.6723 50.6155 86.8136 49.6782 85.941 49.7668C84.0472 49.958 82.0187 48.186 82.2508 46.2461C82.3529 45.3927 82.6964 44.6932 82.8496 43.7839C83.026 42.7067 82.6686 41.2657 81.4385 41.2098C80.422 41.1631 79.5633 40.9486 78.6256 41.0139C76.95 41.1305 76.9825 42.0118 75.6457 42.0258C74.2717 39.2512 76.0031 39.6662 72.6332 38.0014C71.8812 37.6284 71.1896 36.9662 70.382 36.5885C69.7043 36.2714 68.581 36.8729 68.4882 37.6657C68.3257 39.0087 68.2097 39.074 67.6898 40.2631C67.3927 40.9533 67.3556 40.7061 67.3463 41.4756C67.337 42.4968 67.1467 41.9139 66.9657 42.5201C66.4365 44.3201 65.8006 42.5434 65.5685 41.9372C65.225 41.0419 64.7609 40.3284 63.9161 39.7315C61.832 41.4149 63.4937 40.6781 62.8856 42.3476C62.3843 43.7279 61.2007 42.5248 60.7365 42.0398C60.4766 41.7693 58.5224 41.3123 58.0582 41.2331C56.7818 41.0232 56.5218 41.9232 55.0876 42.2403C53.9643 42.4921 52.6924 42.5761 51.4902 42.8372C50.6547 43.0191 49.4711 42.5994 48.7934 42.0305C47.6701 41.0885 47.7397 40.5009 47.2709 39.4377C46.8624 38.5097 44.8665 38.5657 44.7412 38.118C44.5509 37.4279 46.0177 35.8004 44.2492 35.5019C44.1331 35.4833 41.0974 35.7444 40.8236 35.7911C39.9277 35.9496 38.8787 36.0802 38.0246 36.332C36.9988 36.6351 35.8802 37.218 34.8961 37.3859C33.7775 37.5817 32.631 37.4418 31.6191 37.9548C30.5886 38.4818 29.9341 38.9947 28.7459 39.3351C25.0604 40.3937 25.9655 40.86 25.3946 43.7093C25.1996 44.6745 24.0438 44.6885 23.2547 44.5953C21.3284 44.3714 22.0015 44.5813 20.6554 45.6725C19.1097 46.9269 19.7178 47.7523 18.9612 48.2326C18.613 48.4518 16.501 49.571 16.4639 49.6036C15.8559 50.1212 16.1668 51.814 16.3339 52.5275C16.7331 54.2435 16.32 54.2016 16.2411 55.7171C16.1808 56.9249 17.0209 56.6964 16.5707 58.8881C16.3339 60.054 16.7192 61.0472 17.6476 61.7794C20.971 64.4001 19.4996 63.9571 21.528 66.8157C22.2846 67.8835 25.8309 68.3732 27.1816 68.7836C28.5231 69.1893 30.8114 69.0307 32.5428 69.3758C36.5207 70.2012 35.4021 68.1214 37.5976 66.9369ZM81.0347 96.4133C81.7356 97.0615 80.0507 97.5512 79.8418 98.1107C79.5493 98.8848 79.359 99.4911 79.0713 100.223C78.7835 100.96 79.7954 101.179 78.7417 102.303C78.0222 103.068 77.3863 101.352 77.2656 100.899C77.883 100.447 78.5003 99.9947 79.1223 99.5424C79.0945 99.5051 79.0713 99.4678 79.0434 99.4304C78.2172 99.8175 77.7205 100.363 77.0707 100.708C76.3698 101.081 75.8267 100.219 75.8174 99.603C77.5534 98.5444 79.2941 97.4765 81.0347 96.4133ZM80.7005 94.9118C80.7469 94.9118 80.7933 94.9118 80.8351 94.9118C80.9743 95.2708 81.1182 95.6299 81.2575 95.989C81.225 96.003 81.1879 96.0123 81.1554 96.0263C79.3869 97.1221 77.6138 98.2227 75.8453 99.3185C75.7107 98.9595 75.5807 98.5957 75.4461 98.2367C77.2006 97.1268 78.9506 96.0216 80.7005 94.9118ZM80.2688 93.8485C79.9207 94.646 81.1275 94.161 79.9207 95.0377C79.6607 95.2242 79.4704 95.518 79.2476 95.6299C78.8624 95.8211 79.0388 95.6998 78.5932 95.9796C77.3863 96.7211 76.8107 96.9123 75.5436 98.0175C75.525 97.8729 75.5018 97.7237 75.4832 97.5791C75.8499 97.2667 76.2212 96.9543 76.5879 96.6372C76.5508 96.5206 76.5137 96.4087 76.4719 96.2921C76.5926 96.1475 76.7179 96.003 76.8386 95.8584C77.6695 95.2662 78.5003 94.6739 79.3312 94.0817C79.6422 94.0024 79.9532 93.9231 80.2688 93.8485ZM81.42 92.9672C81.6103 92.7014 82.2183 92.1511 82.5433 92.1511C82.534 92.2304 82.5247 92.305 82.5154 92.3843C82.4365 92.4682 82.3576 92.5568 82.2787 92.6408C82.3019 92.6827 82.3251 92.7247 82.3483 92.7667C82.2601 92.8506 82.1766 92.9299 82.093 93.0138C81.8656 92.9905 81.6428 92.9765 81.42 92.9672ZM78.5328 91.8806C79.424 91.0273 80.8769 90.5936 81.4292 89.162C81.6799 88.5231 82.8078 88.0941 83.0678 88.9288C83.2627 89.5397 82.4968 89.5304 82.3994 90.4117C82.2926 91.3723 82.715 91.5449 82.093 92.0532C81.7309 92.3516 80.8537 93.1304 80.5195 93.247C79.7814 93.5035 77.3074 95.2428 77.0289 95.2708C76.9686 94.3801 76.6947 90.9014 78.5328 91.8806ZM80.7144 93.7273C81.4107 93.5594 82.1116 93.3915 82.8078 93.2237C82.9703 92.5801 83.1281 91.9319 83.2906 91.2884C83.142 91.2744 82.9889 91.2558 82.8403 91.2418C82.9517 90.9527 82.7707 90.5796 82.9285 90.3697C83.2349 89.9594 83.518 90.3698 83.6155 89.5957C83.6619 89.2412 83.4577 87.8376 82.7707 87.8329C82.0976 87.8283 81.0486 88.3552 80.8537 89.0734C80.7608 89.4231 79.7118 90.3045 79.359 90.6169C78.31 91.5356 76.1377 90.6775 76.4394 93.5921C76.7458 96.5625 74.8937 96.8983 74.9169 97.7237C74.9541 99.1413 75.2929 100.773 76.6668 101.286C76.9686 101.398 78.6674 104.928 79.684 101.804C79.7721 101.534 79.554 100.652 79.8325 99.603C79.995 98.9921 80.5102 98.0221 81.0579 97.7144C83.0585 96.5812 80.5798 94.5667 80.7144 93.7273ZM46.1291 29.3464C47.6098 28.6563 49.4897 26.5158 50.7011 25.891C52.2004 25.1215 53.8343 23.6013 55.3104 22.6966C58.4992 20.7427 61.9666 18.8914 65.0254 16.7836C67.5134 15.0676 83.5783 6.40324 84.0657 5.50324C83.5691 5.57785 66.3808 15.5712 64.6263 16.7557C63.0481 17.8235 61.3724 18.7189 59.7293 19.6749C58.6709 20.2904 55.9695 21.8433 55.1154 22.5148C52.6646 24.45 48.0229 27.0801 46.1291 29.3464ZM113.42 69.4411C114.371 69.6789 114.868 70.5556 114.724 71.2924C114.311 71.4323 112.789 70.6535 112.422 70.397C112.761 70.1312 113.104 69.8701 113.443 69.6043C113.438 69.5483 113.429 69.497 113.42 69.4411ZM110.635 69.1753C111.155 68.6157 111.902 68.4385 112.533 68.0048C113.132 67.5944 113.708 66.9276 114.348 67.4778C114.478 68.2053 113.216 70.038 111.944 70.1173C111.795 69.954 111.642 69.7908 111.494 69.6276C111.517 69.5996 111.545 69.5763 111.568 69.5483C111.257 69.4271 110.946 69.3012 110.635 69.1753ZM109.502 68.3126C109.966 67.9348 111.15 67.5105 111.665 67.5105C112.013 67.5198 112.362 67.5338 112.71 67.5431C111.888 68.0281 111.071 68.5084 110.254 68.9934C110.004 68.7649 109.753 68.5411 109.502 68.3126ZM113.754 66.7411C112.037 67.0815 111.373 67.1281 109.637 67.767C108.425 68.21 108.917 68.8115 109.818 69.3851C110.31 69.7022 110.672 69.5996 111.025 69.8841C111.368 70.1639 111.637 70.5183 112.004 70.7654C113.202 71.5722 115.745 73.1064 115.212 70.3504C114.933 68.9001 114.028 70.2245 114.566 68.3918C114.692 67.9628 115.119 67.6224 114.729 67.1934C114.552 67.0069 114.033 66.6851 113.754 66.7411ZM25.6452 67.7996C26.801 67.2867 28.1285 66.1115 29.2704 65.5799C30.5701 64.9737 32.0368 64.0737 33.3272 63.3742C35.8987 61.9845 37.8483 59.8021 40.5219 58.4638C42.5271 57.4565 45.8784 55.0223 47.8186 53.6466C48.6449 53.0637 50.6872 51.5249 51.4577 51.1751C52.4093 50.7414 54.3634 49.6969 55.0458 48.9508C54.5259 49.1046 51.7037 50.7088 51.0771 51.0819C50.0095 51.7207 48.5195 53.0451 47.5448 53.5441C45.1357 54.7845 42.6756 57.1348 40.2295 58.2912C37.6997 59.4897 35.5924 61.9472 33.1184 63.1597C32.1018 63.668 25.7102 67.0628 25.6452 67.7996ZM73.919 40.403C73.7565 40.445 67.8383 44.4227 67.1235 44.8844C65.9259 45.6538 64.8259 46.2041 63.6004 46.8989C62.3704 47.5937 61.1635 48.8761 60.2398 49.3378C58.0722 50.4197 54.4934 52.1684 52.5764 53.4928C51.5227 54.2249 50.2927 55.1109 49.2204 55.7638C48.8816 55.9689 45.9434 57.9415 45.9527 57.9462C46.4168 58.0627 52.024 54.1409 52.8503 53.6513C55.2593 52.2244 58.2857 50.844 60.5741 49.4311C61.7948 48.6756 62.5746 47.7756 64.06 46.9409C65.2993 46.2461 66.5247 45.5606 67.7408 44.8191C68.1447 44.5766 74.8566 40.1605 73.919 40.403ZM25.9284 32.8998C25.9423 32.8998 33.991 27.3925 34.4877 26.9682C36.0566 25.6392 37.398 25.3873 38.9251 24.2542C39.3197 23.9604 42.8659 21.321 42.9031 21.265C41.9051 21.4609 39.5193 23.3728 38.693 24.1143C37.6255 25.0749 35.5599 25.5506 34.2045 26.7723C33.1462 27.733 26.0676 32.1584 25.9284 32.8998ZM28.2074 54.2435C28.2492 54.2389 35.9544 49.4497 36.6785 48.9834C38.0107 48.1254 40.0763 47.1461 41.2228 46.0968C42.2393 45.1642 44.8665 44.2688 45.3725 43.574C43.033 44.031 39.1711 47.4958 36.725 48.6523C35.792 49.0953 28.3374 53.7399 28.2074 54.2435ZM25.7937 45.901C25.8309 45.9383 25.868 45.9803 25.9098 46.0176C26.9635 45.402 28.5277 44.2922 29.6278 43.574C30.7697 42.8232 32.2643 41.8253 33.4433 41.1911C34.7615 40.4869 35.9266 39.6382 37.3609 38.9154C37.6951 38.7429 41.3249 36.747 41.3388 36.733C41.0696 36.346 38.0293 38.188 37.528 38.4538C36.1912 39.1579 34.7337 40.2584 33.4433 40.902C32.4546 41.387 26.2115 45.2901 25.7937 45.901ZM38.3542 54.2435C44.8015 50.2705 51.2535 46.2974 57.7008 42.3243C57.2645 41.8719 55.7188 43.187 55.2779 43.5274C54.7255 43.9517 53.5511 44.6512 52.9152 44.9777C51.105 45.901 49.6892 47.0901 48.0507 47.9808C47.4148 48.3259 46.2173 49.1932 45.5674 49.6456C44.8712 50.1352 43.6829 50.5456 42.9913 51.0632C41.362 52.2757 39.9602 52.9565 38.3542 54.2435ZM54.1917 90.2019C54.7487 90.4537 61.1403 86.0236 62.0919 85.3241C62.9924 84.6619 69.8853 80.8147 69.8714 80.3578C69.3376 80.4184 54.3727 89.9127 54.1917 90.2019ZM48.6913 96.9309C48.7238 96.9216 52.2561 94.3195 52.8456 93.9558C54.3959 92.9952 55.8952 92.1884 57.4641 91.2091C58.9355 90.2905 60.2259 89.148 61.767 88.1547C62.3147 87.805 65.8795 85.45 65.6428 84.9884C65.5871 85.0023 63.8325 86.4013 63.6144 86.5739C62.9599 87.1008 62.1662 87.5438 61.5535 88.0381C61.0893 88.4112 59.8546 89.1387 59.2883 89.4931C58.6292 89.9034 58.0861 90.6076 57.2831 91.1112C55.8859 91.9879 48.9698 95.7045 48.6913 96.9309ZM66.172 76.7064C66.4876 76.9396 67.7733 75.8297 68.1122 75.5686C68.8084 75.0323 69.5093 74.8131 70.1917 74.4074C71.612 73.5681 72.9488 72.738 74.2857 71.8287C75.4322 71.0499 76.8989 70.066 77.9712 69.2219C78.4725 68.8255 81.9398 67.4639 82.028 66.9183C81.782 66.8903 78.1522 68.8955 77.637 69.1706C76.263 69.8888 75.3254 70.9053 74.0211 71.7587C71.6956 73.2836 68.0379 75.065 66.172 76.7064ZM53.6022 99.0994C54.02 99.3232 60.7969 94.548 61.6881 93.9558C62.2868 93.5594 69.2587 88.5184 69.2773 88.4951C68.5578 88.3179 62.5561 93.1444 61.5024 93.8579C60.6808 94.4081 53.6811 98.9221 53.6022 99.0994ZM52.0101 63.7612C53.4351 63.2016 67.6991 54.6679 67.9915 54.071C62.6675 57.2513 57.3388 60.4363 52.0147 63.6167C51.9915 63.5887 51.9683 63.5654 51.9498 63.5374C51.9683 63.612 51.9915 63.6866 52.0101 63.7612ZM46.0362 24.2495C47.2848 24.1143 51.3974 20.7661 52.7853 19.9407C53.398 19.5769 55.6538 18.3785 55.9741 18.0754C56.5033 17.5811 59.1398 15.8463 59.1815 15.7717C58.8659 15.394 56.4058 17.3899 55.9463 17.6603C55.3521 18.0147 55.1479 18.2526 54.4052 18.6396C53.9457 18.8821 53.1984 19.3624 52.7249 19.6795C51.5784 20.449 50.5155 21.1578 49.4804 22.0624C48.8166 22.6407 46.4818 23.5967 46.0362 24.2495ZM37.463 23.2189C43.1769 19.6096 48.8955 16.0002 54.6095 12.3955C53.6068 12.4701 47.2988 16.6577 45.9573 17.5251C44.7505 18.3085 42.3646 19.7308 41.4224 20.435C40.6333 21.0272 37.5048 22.4868 37.463 23.2189ZM60.4302 15.1329C61.2564 15.0816 72.053 8.04937 72.2804 7.54574C71.9184 7.11672 67.1235 10.8287 66.4458 11.2903C65.3736 12.0178 64.4963 12.6893 63.3684 13.3608C62.9135 13.6266 60.4162 14.6898 60.4302 15.1329ZM53.7183 17.1334C53.8854 17.1287 59.2233 13.6966 59.7432 13.3375C60.8247 12.596 65.0997 10.395 65.666 9.53695C65.3504 9.57892 60.0542 12.7919 59.525 13.2116C58.6106 13.9484 53.9225 16.4152 53.7183 17.1334ZM25 62.4788C25.0696 62.5488 25.1346 62.6187 25.2042 62.684C27.0238 61.4203 28.7319 60.1052 30.7232 59.1866C31.4009 58.8741 35.9776 56.1322 36.2701 55.6798C35.5553 55.7684 31.5587 58.4731 30.4679 59.028C29.4793 59.527 28.6205 59.998 27.6968 60.6415C26.9449 61.1731 25.7148 62.1058 25 62.4788ZM54.7626 65.2068C55.069 65.1789 56.9257 63.7939 57.4641 63.5234C58.4574 63.0244 59.409 62.5161 60.393 61.9752C61.1032 61.5788 64.928 59.1306 65.29 58.5757C64.9373 58.6223 60.458 61.5648 59.8778 61.9519C58.5828 62.8099 55.5471 64.0084 54.7626 65.2068ZM100.669 50.1445C101.036 50.5083 102.892 49.1046 103.431 48.8761C104.373 48.4751 105.501 48.1067 106.276 47.4305C107.103 46.7077 111.54 44.7305 111.661 44.1336C107.994 46.1388 104.331 48.144 100.669 50.1445ZM37.8297 57.1208C37.5465 57.5265 34.302 58.9254 34.3438 59.485C34.9008 59.4524 43.8314 53.614 44.2352 52.9938C44.212 52.9611 44.1935 52.9285 44.1703 52.8959C42.0583 54.3042 39.9417 55.7125 37.8297 57.1208ZM61.8737 66.6478C65.3411 64.6006 68.8084 62.5535 72.2711 60.5063C71.7884 60.2312 67.6898 63.0058 66.9703 63.3789C66.2787 63.7379 61.9341 66.0276 61.8737 66.6478ZM66.4087 9.02866C66.6083 9.02399 71.185 6.26335 71.5331 5.9649C72.3918 5.21878 75.5296 4.37007 76.4162 3.19026C76.1377 2.82653 74.462 4.25349 73.97 4.49598C73.4177 4.76644 71.496 5.55453 71.1989 5.825C70.6001 6.36128 66.4458 8.72088 66.4087 9.02866ZM70.3866 70.3644C70.6094 70.3691 72.1551 69.2452 72.5729 69.0354C73.3155 68.6576 74.3228 68.2613 74.9726 67.8089C75.9149 67.1561 78.8809 66.0183 79.4565 65.2955C79.2569 65.053 75.2094 67.3519 74.6663 67.697C74.1418 68.0374 70.1592 69.8095 70.3866 70.3644ZM17.6336 59.8208C18.0189 60.3198 25.2275 56.0762 25.9887 55.3767C25.6452 55.1669 22.4749 57.3166 21.8669 57.6244C21.463 57.8296 17.6568 59.7928 17.6336 59.8208ZM91.3718 47.7057C91.5017 47.7103 91.6271 47.7103 91.757 47.715C94.4678 46.1948 97.1832 44.6699 99.8986 43.1497C99.5365 42.8046 96.4544 44.7398 95.7767 45.1549C95.2801 45.458 91.46 47.5704 91.3718 47.7057ZM52.2979 77.7044C52.6507 77.8396 55.6121 76.0023 56.2016 75.7038C56.6054 75.4986 57.9468 74.8831 58.2068 74.6593C59.0933 73.8805 59.2372 73.9738 60.096 73.4002C59.8035 72.9991 57.0139 75.0043 56.2665 75.3867C55.8117 75.6106 52.4139 77.5178 52.2979 77.7044ZM52.038 105.101C52.0751 105.152 52.1076 105.204 52.1447 105.25C54.7719 103.52 57.1717 101.818 60.1609 100.321C59.3301 99.8455 53.5419 103.972 52.038 105.101ZM51.3185 103.59C51.5181 103.599 52.8688 102.28 53.1752 102.051C53.7739 101.594 54.7348 101.086 55.3057 100.652C55.9045 100.195 59.1119 98.4978 59.163 97.9615C58.5549 98.0408 51.1978 102.947 51.3185 103.59ZM98.1997 37.7077C101.194 36.0196 104.188 34.3268 107.177 32.6387C106.601 32.5501 98.6871 36.9522 98.1997 37.7077ZM60.1331 8.11466C60.1424 8.13797 60.1563 8.16129 60.1656 8.18461C59.6225 8.26855 56.2758 10.7354 55.8024 11.4675C56.1087 11.4396 58.787 9.24317 59.4879 8.85612C60.0913 8.52036 60.5508 8.11932 61.3214 7.73694C61.7206 7.53642 62.7139 6.92087 62.997 6.49651C62.9738 6.4592 62.9552 6.42656 62.932 6.38926C61.9991 6.95817 61.0661 7.53642 60.1331 8.11466ZM82.5525 34.3454C81.8748 34.4014 79.7443 35.5159 79.0248 35.9683C78.7092 36.1688 78.5096 36.1734 78.2033 36.3833C77.7716 36.6771 77.7391 36.5465 77.3863 36.8076C77.0289 37.0734 76.1795 37.218 75.8128 37.689C76.0263 37.8009 82.1719 34.9237 82.5525 34.3454ZM43.2234 47.687C43.2419 47.7243 43.2651 47.757 43.2837 47.7943C42.5828 47.9015 41.3945 48.8715 40.5451 49.2632C39.9138 49.557 38.1314 50.6435 38.0664 51.3663C38.3774 51.1611 38.5909 50.8067 38.8694 50.6435C39.134 50.4896 39.64 50.1865 39.8628 50.014C40.2109 49.7435 41.3249 49.086 41.7937 48.8388C42.2439 48.5963 45.2332 46.9269 45.4235 46.4792C44.6901 46.8756 43.9567 47.2813 43.2234 47.687ZM62.064 72.3183C62.1058 72.309 65.2668 70.4577 65.4757 70.2991C66.1627 69.7862 68.5856 68.6623 68.9848 68.0887C68.7527 67.9955 65.8981 69.6882 65.5964 69.9354C64.9048 70.509 62.1383 71.6281 62.064 72.3183ZM97.536 29.4397C100.725 27.7096 103.324 26.3107 106.453 24.5386C106.137 24.4314 97.652 28.9874 97.536 29.4397ZM66.3344 79.5417C66.3623 79.593 66.3901 79.6489 66.4226 79.7002C64.8166 80.6888 63.2059 81.6821 61.5999 82.6707C61.8273 82.8106 64.1853 81.407 64.5102 81.1412C64.6355 81.0386 67.5366 79.2339 67.5691 79.2292C67.5366 79.1733 67.5041 79.122 67.4716 79.066C67.4902 79.094 67.5088 79.122 67.5273 79.15C68.0797 78.7629 68.6274 78.3805 69.1798 77.9935C68.2468 78.0168 66.9796 79.4438 66.3344 79.5417ZM82.8403 54.4301C82.9703 54.4394 83.0956 54.4441 83.2256 54.4534C84.0611 53.9684 84.9012 53.4834 85.7367 52.9985C86.7626 52.5088 87.7884 52.0145 88.8142 51.5249C88.7863 51.4829 88.7538 51.4456 88.726 51.4036C88.9395 51.301 89.153 51.1984 89.3712 51.0958C89.0138 50.858 86.5815 52.3409 85.9131 52.658C84.7573 53.213 83.945 53.67 82.8403 54.4301ZM46.4168 21.363C48.5706 20.1412 50.0745 19.1619 52.3304 18.0474C52.3814 17.9028 52.4325 17.7583 52.4836 17.6137C52.0751 17.7349 52.1494 17.8655 51.778 17.9681C51.5227 18.0381 51.156 18.2619 50.8868 18.3971C49.615 19.0407 47.1409 20.2531 46.4168 21.363ZM92.509 37.4185C92.9639 37.2926 93.6369 36.6677 94.0315 36.5605C94.3982 36.4626 95.4333 36.0662 95.7071 35.8563C96.8722 34.9517 98.2693 34.3315 99.4344 33.5947C98.9935 33.5993 96.473 35.1335 96.0181 35.3947C95.2708 35.8237 92.6947 36.719 92.509 37.4185ZM100.474 39.2325C100.915 39.4564 105.775 36.0335 106.917 35.9729C106.253 35.3947 101.393 38.6823 100.474 39.2325ZM73.5383 6.73434C73.724 6.8276 75.9335 5.67111 76.328 5.54054C77.0103 5.31671 78.3471 4.22084 79.127 3.80115C79.062 3.7312 78.9923 3.65659 78.9274 3.58664C78.5096 3.9224 76.5787 5.18614 76.1748 5.34002C75.7292 5.50324 73.8447 6.34262 73.5383 6.73434ZM61.9712 16.751C63.2059 16.0375 64.4406 15.324 65.6753 14.6106C65.6521 14.5779 65.6289 14.5499 65.6057 14.5173C66.4737 14.0043 67.3463 13.4961 68.2143 12.9831C67.959 12.6007 65.5221 14.3448 65.174 14.6106C64.6031 15.0396 62.2265 16.3546 61.9712 16.751ZM70.1452 64.6286C70.9065 64.0317 71.8627 63.4441 72.5125 63.0151C73.1624 62.5861 74.8612 62.0965 75.1537 61.6488C74.4481 61.7187 69.7786 63.9338 70.1452 64.6286ZM4.32585 41.5315C4.76217 41.8393 5.9783 40.6735 6.50281 40.3191C7.6029 39.5776 7.51006 39.4237 8.77261 38.9714C8.28987 38.4818 7.04125 39.6989 6.51674 39.9647C6.12219 40.1605 5.85297 40.6035 5.50485 40.8041C5.25884 40.9439 4.51152 41.2237 4.32585 41.5315ZM65.6474 61.5695C67.3741 60.6648 69.1055 59.7602 70.8369 58.8508C70.8229 58.8229 70.8044 58.7902 70.7904 58.7622C70.3031 58.8135 65.5732 61.1778 65.6474 61.5695ZM7.16193 35.3714C7.4915 35.6045 8.79117 34.6346 9.20893 34.3175C9.91911 33.7765 10.6061 33.4641 11.3116 32.9278C10.8289 32.6434 7.66324 35.1009 7.16193 35.3714ZM70.1174 22.207C69.695 22.1277 68.2236 22.8599 67.8755 23.2935C68.1122 23.2656 68.3443 23.2422 68.581 23.2143C68.5624 23.1397 68.5485 23.065 68.5299 22.9904C68.6413 23.0184 68.7481 23.0417 68.8595 23.0697C69.9642 22.5008 71.0643 21.9319 72.169 21.363C72.1412 21.307 72.1133 21.251 72.0855 21.1951C71.4264 21.5308 70.7719 21.8666 70.1174 22.207ZM71.561 66.424C71.9509 66.6991 75.2094 64.3162 75.6503 63.8825C76.1006 64.0364 75.9613 64.0597 76.0031 63.6633C74.9309 63.7799 74.4713 64.6752 73.7147 65.0903C73.4548 65.2395 71.6956 66.2328 71.561 66.424ZM7.97423 33.0724C8.29451 33.3475 9.61276 32.4988 9.92839 32.2563C10.4251 31.8693 11.7154 31.4915 12.0775 31.2304C11.9986 31.1325 11.9197 31.0392 11.8408 30.9413C10.5504 31.6501 9.25999 32.3589 7.97423 33.0724ZM112.993 43.8631C113.248 43.8352 114.58 42.8372 114.998 42.6274C115.481 42.3896 115.564 42.1984 115.954 42.0445C116.042 42.0118 117.05 41.5269 117.068 41.5129C116.994 41.4383 116.92 41.359 116.845 41.2844C116.168 41.8253 113.058 43.1497 112.993 43.8631ZM3.18863 50.1072C2.83122 50.4057 2.46917 50.7088 2.11176 51.0072C2.15353 51.1145 2.19531 51.2218 2.23708 51.329C3.27683 50.499 4.31657 49.6689 5.35167 48.8388C4.91071 48.3166 3.62031 50.3217 3.18863 50.1072ZM5.63481 38.6683C6.49353 38.3185 6.95306 37.7543 7.70501 37.3066C8.33165 36.9382 9.58955 36.4579 10.0816 36.1128C9.97945 36.0709 9.87733 36.0289 9.77986 35.9869C9.23678 36.4299 5.6998 37.9175 5.63481 38.6683ZM26.9495 34.0796C27.3673 34.1543 30.0641 32.3402 30.389 31.8459C30.1941 31.8693 28.8433 32.6993 28.5695 32.8858C28.1935 33.1423 26.8845 33.7066 26.9495 34.0796ZM85.4536 41.2984C87.6027 40.0999 89.7472 38.9014 91.8963 37.7077C91.4739 37.5538 89.0927 39.1766 88.5775 39.4937C88.0344 39.8248 85.384 40.7807 85.4536 41.2984ZM106.174 58.0208C106.165 58.1467 106.151 58.2773 106.142 58.4032C106.156 58.4032 107.678 57.4892 107.984 57.3353C108.569 57.0368 109.479 56.8316 110.027 56.4819C109.419 56.0855 106.666 57.9135 106.174 58.0208ZM102.637 41.3916C102.971 41.6155 105.933 39.8527 106.346 39.2745C106.327 39.2465 106.313 39.2185 106.295 39.1859C105.079 39.918 103.858 40.6548 102.637 41.3916ZM97.8237 101.091C97.898 101.175 97.9723 101.258 98.0419 101.338C98.5896 100.951 101.751 100.522 102.47 100.587C102.052 99.9481 98.8078 100.895 97.8237 101.091ZM49.4525 24.4407C49.4943 24.45 49.5407 24.4594 49.5825 24.4687C50.8822 23.8298 51.8151 23.093 53.0638 22.235C52.7435 21.7826 49.7728 24.2169 49.4525 24.4407ZM2.02821 71.5489C2.84515 71.4743 4.39084 69.3898 4.96641 68.7602C4.53473 68.8115 2.05606 71.2831 2.02821 71.5489ZM9.24606 30.9553C9.71023 31.2257 10.5736 30.2931 11.0517 30.0319C11.7201 29.6635 12.3931 29.4211 13.1358 28.9687C12.8852 28.619 11.7479 29.4957 11.3116 29.7148C11.0331 29.8547 9.36674 30.7827 9.24606 30.9553ZM1.27161 60.7814C1.42943 60.7674 3.74564 58.7016 4.20981 58.3798C4.11698 58.3798 4.0195 58.3798 3.92667 58.3798C3.07259 58.6503 1.71257 60.1052 1.27161 60.7814ZM61.753 99.3745C61.7809 99.4165 61.8087 99.4584 61.8366 99.5004C63.1502 98.6144 64.4638 97.7237 65.7774 96.8377C65.2065 96.5579 62.5793 98.717 61.753 99.3745ZM64.0553 94.8185C65.796 93.6946 67.532 92.5755 69.2726 91.4516C68.7759 91.5029 64.4127 94.2682 64.0553 94.8185ZM77.4281 93.3729C78.7881 92.4449 80.1481 91.5122 81.5081 90.5843C80.9929 90.6402 77.4699 92.9019 77.4281 93.3729ZM71.2036 117.822C72.0019 117.967 72.805 118.116 73.6033 118.261C73.6776 118.163 73.7519 118.06 73.8261 117.962C72.9396 117.808 72.053 117.654 71.1664 117.505C71.1804 117.612 71.1943 117.72 71.2036 117.822ZM2.63627 52.8679C2.63627 52.8819 2.64091 52.9005 2.64091 52.9145C2.12104 53.3575 1.60117 53.8052 1.0813 54.2482C1.22055 54.2296 1.36444 54.2062 1.5037 54.1876C2.41347 53.4135 3.3186 52.6394 4.22838 51.8653C4.20517 51.8326 4.18196 51.8 4.15875 51.7674C3.6528 52.1358 3.14222 52.4995 2.63627 52.8679ZM17.0209 51.5295C17.1741 51.5295 17.3273 51.5295 17.4851 51.5249C17.4619 51.4876 17.4387 51.4503 17.4201 51.4083C18.613 50.6202 19.8059 49.8368 20.9989 49.0487C20.5208 49.1046 17.2948 51.1425 17.0209 51.5295ZM47.2152 80.7168C47.2013 80.8008 47.1874 80.8847 47.1734 80.9733C48.0507 80.8707 49.4943 79.1733 50.288 79.0194C50.2787 78.9774 50.2648 78.9355 50.2555 78.8982C49.0626 79.2759 48.2364 79.9847 47.2152 80.7168ZM3.23969 62.3016C2.6734 62.782 2.10712 63.2576 1.54083 63.7379C1.49441 63.9198 1.44799 64.1063 1.40158 64.2882C2.20923 63.5561 3.01225 62.8239 3.81526 62.0918C3.78277 62.0452 3.74564 61.9985 3.71315 61.9566C3.55997 62.0685 3.40215 62.1851 3.23969 62.3016ZM4.53009 46.5212C4.53937 46.5445 4.5533 46.5678 4.56258 46.5911C4.00557 46.9922 3.44393 47.3979 2.88692 47.8036C3.23969 47.9668 3.40679 47.8316 3.62495 47.5937C3.93595 47.3839 4.25159 47.1741 4.56258 46.9642C4.54401 46.8989 4.52545 46.8383 4.50224 46.773C4.89678 46.6891 5.5002 46.1948 5.54198 45.887C5.20313 46.0968 4.86429 46.3114 4.53009 46.5212ZM3.07259 73.5681C3.65745 73.5168 5.00354 71.8333 5.49092 71.4136C5.46771 71.381 5.43986 71.3483 5.41665 71.3157C4.46975 72.0105 3.73636 72.5468 3.07259 73.5681ZM1.84254 67.5105C1.91681 67.5245 1.99572 67.5385 2.06998 67.5525C2.91013 66.7364 3.75492 65.925 4.59507 65.1089C4.20053 65.1509 2.12104 67.0815 1.84254 67.5105ZM64.436 89.0454C64.9001 89.0034 67.2813 87.2733 67.5134 86.7604C66.6176 87.3993 65.7263 88.0381 64.8305 88.677C64.7005 88.8029 64.5659 88.9241 64.436 89.0454ZM100.307 99.0201C100.627 99.2439 102.749 98.7589 103.018 98.5817C102.591 98.5025 100.493 98.703 100.307 99.0201ZM60.6901 83.0531C60.3002 83.2956 59.9103 83.5334 59.5204 83.7759C59.4879 83.8925 59.46 84.0137 59.4276 84.1303C59.4832 84.1723 59.539 84.2189 59.5947 84.2609C60.1331 83.5661 61.2285 83.1744 61.4792 82.7826C61.2146 82.8712 60.9547 82.9598 60.6901 83.0531ZM4.14018 80.5769C5.16136 79.8401 5.09638 79.7282 5.90867 78.7816C5.5559 78.7862 4.1309 80.0173 4.14018 80.5769ZM10.6757 28.7029C10.7128 28.7309 10.7453 28.7589 10.7825 28.7869C11.6273 28.2646 12.472 27.7469 13.3122 27.2247C12.9037 27.0475 11.0656 28.3065 10.6757 28.7029ZM35.0447 8.68358C35.0957 8.53435 35.1514 8.38513 35.2025 8.2359C35.3 7.71828 35.3974 7.20532 35.4949 6.6877C35.4299 6.62242 35.3603 6.55713 35.2953 6.48718C35.0725 6.86491 34.7337 8.33383 35.0447 8.68358ZM1.09987 57.0648C1.14164 57.1208 1.17878 57.1814 1.22055 57.2373C1.93537 56.5612 2.64555 55.885 3.36038 55.2042C2.77552 55.2695 1.5826 56.5658 1.09987 57.0648ZM75.9102 117.123C75.836 117.039 75.7617 116.95 75.6828 116.866C74.968 116.726 74.2532 116.587 73.5383 116.447C73.5987 116.95 75.395 117.076 75.9102 117.123ZM112.631 83.0251C112.928 83.3562 114.863 82.9645 115.17 82.6194C115.077 82.6148 114.984 82.6101 114.891 82.6054C114.766 82.5961 112.71 82.9645 112.631 83.0251ZM68.9013 32.5874C70.2195 31.9625 71.5378 31.3377 72.8514 30.7128C72.6146 30.5589 69.1659 32.219 68.9013 32.5874ZM93.4559 40.2072C94.6256 39.6056 95.7907 39.004 96.9557 38.4071C96.422 38.3932 93.7576 39.7455 93.4559 40.2072ZM69.6532 85.3941C69.7693 85.3847 69.89 85.3801 70.0106 85.3707C70.4841 84.9557 70.9576 84.5407 71.431 84.1257C71.5935 84.0231 71.7513 83.9251 71.9137 83.8225C71.612 83.5008 69.9874 85.063 69.6532 85.3941ZM45.3725 8.38513C45.2889 8.39912 45.2054 8.40844 45.1172 8.42243C44.3142 8.95404 43.5111 9.48099 42.7081 10.0126C42.9449 10.1665 45.1497 8.73021 45.3725 8.38513ZM75.641 115.934C75.9892 116.199 76.9036 116.353 77.3306 116.353C77.3631 116.353 77.3956 116.353 77.4234 116.353C77.8041 116.353 77.7066 116.437 77.8969 116.176C77.5163 116.139 77.1403 116.102 76.7597 116.064C76.5369 115.999 75.7107 115.607 75.641 115.934ZM56.2341 34.0144C56.1969 34.0004 56.1598 33.9864 56.1227 33.9724C56.0205 34.075 55.9184 34.1822 55.8163 34.2848C55.8488 34.3315 55.8859 34.3734 55.9184 34.4201C56.0298 34.3874 56.1366 34.3594 56.248 34.3268C56.8096 33.9024 57.3759 33.4827 57.9376 33.0584C57.9097 33.0164 57.8819 32.9791 57.854 32.9371C57.3109 33.2962 56.7725 33.6553 56.2341 34.0144ZM98.4921 26.0169C98.5246 26.0635 98.5618 26.1055 98.5943 26.1521C99.4344 25.6625 100.279 25.1728 101.119 24.6785C99.8847 25.0749 99.5969 25.336 98.4921 26.0169ZM117.24 58.4731C117.597 58.7762 118.995 57.699 119.245 57.3446C119.227 57.3166 119.213 57.2886 119.194 57.2607C118.544 57.6664 117.89 58.0721 117.24 58.4731ZM114.534 80.7075C114.399 80.7728 114.265 80.8427 114.13 80.908C114.2 80.9686 114.269 81.0293 114.339 81.0899C114.794 80.9686 115.244 80.8521 115.699 80.7308C115.838 80.6748 115.977 80.6189 116.117 80.5629C115.912 80.3018 115.04 80.6469 114.534 80.7075ZM12.6531 26.1708C13.5489 26.0682 13.8367 25.5226 14.4541 24.921C14.1245 24.9583 12.8666 25.8443 12.6531 26.1708ZM89.4733 21.75C89.9375 21.5448 90.397 21.335 90.8612 21.1298C91.0933 20.9526 91.33 20.7754 91.5621 20.5982C91.2232 20.4769 89.7147 21.3769 89.4733 21.75ZM3.76885 76.7018C3.81062 76.7624 3.84776 76.823 3.88953 76.8836C4.30729 76.5665 4.72968 76.2541 5.14743 75.937C5.13351 75.9043 5.12423 75.8717 5.1103 75.8344C5.19849 75.7271 5.28204 75.6152 5.37024 75.508C5.34703 75.48 5.32382 75.4567 5.30061 75.4287C4.79002 75.853 4.27944 76.2774 3.76885 76.7018ZM98.8124 40.0673C98.7799 40.0579 98.7474 40.0533 98.715 40.0439C98.4179 40.2724 98.1255 40.5009 97.8284 40.7294C97.8702 40.7574 97.9073 40.7854 97.9491 40.8134C98.6314 40.3844 99.3184 39.96 100.001 39.531C99.8986 39.517 99.7918 39.503 99.6897 39.489C99.3973 39.6849 99.1049 39.8761 98.8124 40.0673ZM97.2342 29.5143C96.4684 29.6169 95.786 30.0832 95.3868 30.6615C96.0645 30.2744 96.7469 29.8874 97.4292 29.5003C97.3874 29.449 97.3456 29.3977 97.3039 29.3464C97.2807 29.4024 97.2575 29.4584 97.2342 29.5143ZM5.91796 85.6832C6.33571 85.3148 6.59565 84.8671 7.01804 84.4101C7.03197 84.3215 7.04125 84.2329 7.05518 84.149C6.75346 84.2795 5.74621 85.2308 5.91796 85.6832ZM15.8883 98.5911C15.7909 98.9595 15.698 99.3279 15.6006 99.6962C15.6748 99.7429 15.7491 99.7895 15.828 99.8361C15.9626 99.4678 16.0926 99.0994 16.2272 98.7263C16.204 98.6051 16.1761 98.4838 16.1529 98.3626C16.0647 98.4418 15.9765 98.5164 15.8883 98.5911ZM3.46714 44.8564C3.7967 45.2854 4.72968 44.1103 4.96177 43.7885C4.70183 43.7885 3.79206 44.6139 3.46714 44.8564ZM31.9208 30.82C31.9533 30.8667 31.9858 30.918 32.0183 30.9646C32.3153 30.7967 32.6171 30.6335 32.9141 30.4656C33.0812 30.2838 33.253 30.1019 33.4201 29.92C32.9977 29.9667 32.2132 30.5216 31.9208 30.82ZM67.1978 57.3586C67.2349 57.4099 67.2767 57.4658 67.3138 57.5171C67.8151 56.9995 68.4789 56.6498 69.1658 56.2301C69.1426 56.1835 69.1148 56.1368 69.0916 56.0902C68.4 56.384 67.8058 56.9202 67.1978 57.3586ZM61.0197 96.7397C61.4049 96.8936 62.6257 95.7465 63.0109 95.49C62.6443 95.532 61.2007 96.4646 61.0197 96.7397ZM101.802 97.4159C101.899 97.5232 101.997 97.6304 102.094 97.7377C102.563 97.3879 103.064 97.5232 103.593 97.2294C102.967 97.2107 102.447 97.304 101.802 97.4159ZM4.9432 82.1111C4.96641 82.1344 4.99426 82.1578 5.01747 82.1811C5.66731 81.5609 5.84833 81.2811 6.27073 80.6422C5.77406 80.936 5.30989 81.4863 4.9432 82.1111ZM92.7921 32.0371C92.8386 32.0511 92.885 32.0651 92.9314 32.0791C93.5302 31.7667 94.129 31.4589 94.7277 31.1511C94.7092 31.1092 94.6906 31.0718 94.6674 31.0299C94.1382 31.3143 93.1124 31.5428 92.7921 32.0371ZM13.2658 96.1149C13.2704 96.2921 13.2704 96.4693 13.2751 96.6465C13.3122 96.6558 13.354 96.6605 13.3911 96.6698C13.5675 96.0869 13.7439 95.5086 13.9203 94.9257C13.8924 94.9118 13.8599 94.9024 13.8321 94.8884C13.6418 95.2941 13.4561 95.7045 13.2658 96.1149ZM91.4043 41.387C91.3764 41.387 91.3439 41.387 91.3161 41.387C91.0004 41.6108 90.6894 41.8393 90.3738 42.0631C90.4017 42.1051 90.4342 42.1517 90.462 42.1937C91.0004 41.844 91.5389 41.4942 92.0773 41.1445C92.0495 41.1025 92.0216 41.0559 91.9984 41.0139C91.7988 41.1398 91.5992 41.2611 91.4043 41.387ZM6.73026 87.4645C6.75811 87.4832 6.78596 87.5019 6.81381 87.5158C7.1805 87.0635 7.54256 86.6158 7.90925 86.1635C7.20835 86.2381 7.0134 86.9656 6.73026 87.4645ZM68.2561 83.0531C68.2329 83.1697 68.205 83.2863 68.1818 83.4075C68.6831 83.0997 69.1891 82.792 69.6904 82.4795C69.6718 82.4422 69.6486 82.4049 69.63 82.3676C69.1705 82.5961 68.711 82.8246 68.2561 83.0531ZM22.1361 48.2839C22.6699 48.0181 23.199 47.7476 23.7328 47.4818C23.4265 47.1507 22.3867 47.8969 22.1361 48.2839ZM35.2582 52.658C34.9054 52.9425 34.548 53.227 34.1952 53.5161C34.237 53.572 34.2788 53.628 34.3206 53.684C34.7708 53.3156 35.221 52.9472 35.6713 52.5788C35.532 52.6021 35.3928 52.6301 35.2582 52.658ZM78.3147 115.155C78.7185 115.164 79.1223 115.174 79.5261 115.188C79.4472 115.118 79.3637 115.048 79.2848 114.978C78.7835 114.94 78.2822 114.898 77.7809 114.861C77.9619 114.959 78.1383 115.057 78.3147 115.155ZM19.9545 104.336C20.3212 104.234 20.3908 103.483 20.7111 102.989C20.1866 103.063 20.0659 103.861 19.9545 104.336ZM7.7143 89.2086C7.83498 89.2459 7.95102 89.2879 8.07171 89.3252C8.3595 89.0221 8.64728 88.7143 8.93507 88.4112C8.90257 88.3739 8.87008 88.3319 8.83759 88.2946C8.38735 88.6397 8.17847 88.9941 7.7143 89.2086ZM15.7909 22.9764C15.8559 23.0277 15.9255 23.0744 15.9905 23.1257C16.1529 22.7806 16.8585 22.8412 16.9931 22.3656C16.4361 22.4542 16.2458 22.622 15.7909 22.9764ZM14.2684 97.789C14.3009 97.789 14.338 97.789 14.3705 97.789C14.3891 97.7144 14.4123 97.6351 14.4308 97.5605C14.533 97.1548 14.6304 96.7491 14.7326 96.348C14.3334 96.6838 14.1848 97.2294 14.2684 97.789ZM21.6858 105.479C22.1779 105.32 22.0618 104.952 22.4053 104.555C22.3682 104.518 22.331 104.481 22.2893 104.448C22.0061 104.611 21.6766 105.064 21.6858 105.479ZM117.546 59.8208C118.182 59.4151 118.326 59.4664 118.874 58.8602C118.577 58.7529 117.755 59.499 117.546 59.8208ZM35.9869 6.47786C36.0705 6.70636 35.7409 7.13071 36.0705 7.51776C36.1262 7.27994 36.1819 7.04211 36.2376 6.79962C36.2654 6.61309 36.2933 6.43122 36.3165 6.24469C36.2097 6.32397 36.0983 6.40325 35.9869 6.47786ZM55.0458 2.13637C55.0504 2.22497 55.0597 2.31824 55.0643 2.40684C55.1618 2.47212 55.2593 2.53741 55.3568 2.6027C55.3753 2.29492 55.3985 1.98715 55.4171 1.67937C55.1247 1.67937 55.0226 1.73533 55.0458 2.13637ZM54.2149 1.88455C54.201 2.07108 54.1871 2.25761 54.1685 2.44414C54.2613 2.53275 54.3542 2.61669 54.447 2.70529C54.4563 2.40218 54.5538 1.6374 54.4238 1.47419C54.3588 1.60942 54.2892 1.74932 54.2149 1.88455ZM37.036 6.00687C37.0081 6.41257 36.9849 6.81827 36.957 7.22398C37.0035 7.22864 37.0545 7.23797 37.1009 7.24263C37.1659 6.75299 37.2355 6.26335 37.3005 5.77371C37.2123 5.85764 37.1241 5.93226 37.036 6.00687ZM48.2178 25.3081C48.255 25.3267 48.2921 25.3407 48.3246 25.3594C48.8677 25.0516 48.9141 24.8697 49.434 24.6132C49.4386 24.5573 49.4432 24.5013 49.4479 24.4454C48.928 24.6879 48.6495 24.9257 48.2178 25.3081ZM38.266 6.34262C38.3542 6.34729 38.4378 6.34729 38.5259 6.35195C38.5538 6.00687 38.6884 5.57319 38.5074 5.32603C38.136 5.67578 38.4099 5.96956 38.266 6.34262ZM58.3646 18.8635C58.5363 18.7702 58.7034 18.6769 58.8752 18.5883C58.9077 18.6023 58.9448 18.6163 58.9773 18.6303C59.2465 18.4204 59.5157 18.2106 59.785 18.0008C59.3765 18.0474 58.606 18.4951 58.3646 18.8635ZM118.516 61.6814C118.387 61.8213 118.257 61.9612 118.122 62.1058C118.619 62.1198 118.869 61.8773 119.129 61.4343C118.93 61.5182 118.721 61.5975 118.516 61.6814ZM5.65802 75.5779C5.97366 75.3494 6.32179 75.0183 6.37284 74.6499C6.05257 74.7432 5.64874 75.1302 5.65802 75.5779ZM100.34 42.7393C100.683 42.5714 101.022 42.4035 101.365 42.2403C101.398 42.2543 101.435 42.2683 101.467 42.2776C101.667 42.1331 101.871 41.9932 102.071 41.8486C101.95 41.8486 101.83 41.8486 101.709 41.8486C101.254 42.1471 100.794 42.4409 100.34 42.7393ZM92.95 19.908C92.7411 19.992 92.5322 20.0712 92.3233 20.1552C92.3744 20.2018 92.4254 20.2484 92.4765 20.2904C92.5693 20.2251 92.6668 20.1645 92.7596 20.0992C92.9732 19.978 93.182 19.8567 93.3956 19.7355C93.4373 19.7588 93.4837 19.7868 93.5255 19.8101C93.5952 19.7168 93.6694 19.6236 93.739 19.5303C93.5905 19.5396 93.442 19.5443 93.2934 19.5536C93.182 19.6749 93.066 19.7914 92.95 19.908ZM79.9996 114.213C80.3292 114.157 80.5752 114.246 80.9187 114.222C80.8676 114.012 80.357 113.919 80.0831 113.859C80.0599 113.975 80.0321 114.092 79.9996 114.213ZM17.1648 101.193C17.2669 100.731 17.3923 100.321 17.5686 99.9247C17.072 100.083 17.072 100.806 17.1648 101.193ZM8.95363 90.8267C8.99541 90.8687 9.03718 90.9107 9.07896 90.9527C9.36674 90.7475 9.69631 90.4723 9.6731 90.0993C9.43637 90.3418 9.195 90.5843 8.95363 90.8267ZM55.8906 20.351C56.248 20.3883 56.6332 20.1458 56.8375 19.8567C56.805 19.8241 56.7678 19.7914 56.7307 19.7588C56.4522 19.9593 56.1691 20.1552 55.8906 20.351ZM44.9779 11.1924C45.0197 11.239 45.0661 11.2857 45.1079 11.337C45.3493 11.1738 45.5953 11.0105 45.8366 10.8473C45.7949 10.8007 45.7531 10.7494 45.7113 10.7028C45.4699 10.866 45.2239 11.0292 44.9779 11.1924ZM118.312 63.64C118.628 63.64 118.939 63.3136 119.148 63.0151C118.8 63.0105 118.53 63.3369 118.312 63.64ZM9.83556 91.5122C9.82627 91.5822 9.82163 91.6475 9.81235 91.7128C10.1651 91.7221 10.3879 91.4936 10.4343 91.1485C10.2394 91.2744 10.0352 91.391 9.83556 91.5122ZM56.0902 2.05709C56.1134 2.23896 56.1412 2.42083 56.1644 2.60736C56.2016 2.61202 56.2341 2.61202 56.2712 2.61669C56.3176 2.31824 56.3594 2.01979 56.4058 1.726C56.299 1.83326 56.1923 1.94518 56.0902 2.05709ZM23.1944 106.421C23.2362 106.463 23.2779 106.5 23.3197 106.542C23.6632 106.201 23.7746 106.229 23.5843 105.782C23.4961 106.048 23.3708 106.197 23.1944 106.421ZM46.0362 24.2495C45.9944 24.2215 45.9527 24.1982 45.9109 24.1702C45.702 24.3894 45.4885 24.6086 45.2796 24.8278C45.651 24.7904 45.832 24.5573 46.0362 24.2495ZM48.2178 25.3081C48.1528 25.3034 48.0832 25.2987 48.0182 25.2941C47.7629 25.4713 47.5123 25.6485 47.257 25.8257C47.3405 25.835 47.4241 25.8397 47.5076 25.849C47.7444 25.6671 47.9811 25.4853 48.2178 25.3081ZM115.569 77.1914C115.82 77.3686 116.029 77.2194 116.205 76.9676C116.038 76.8044 115.718 77.0142 115.569 77.1914ZM118.14 60.7721C118.349 60.5576 118.563 60.3477 118.772 60.1332C118.41 60.1286 118.131 60.3757 118.14 60.7721ZM64.436 89.0454C64.1528 89.2692 63.865 89.4931 63.5819 89.7169C64.1946 89.6609 63.8836 89.3485 64.5241 89.2086C64.4963 89.1573 64.4638 89.1013 64.436 89.0454ZM43.474 5.03691C43.5993 4.87836 43.72 4.71981 43.8453 4.56592C43.5019 4.56126 43.2791 4.68251 43.474 5.03691Z"
              fill="#D9E6F7"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="121" height="122" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      name: "Самопознание",
      link: "samopoz",
      img: (
        <svg
          width="92"
          height="100"
          viewBox="0 0 92 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M90.0271 54.5417C83.6307 46.9375 82.0524 41.7083 81.8239 40.8542C81.7201 18.3125 63.4032 0 40.912 0C18.3585 0 0 18.4167 0 41.0417C0 48.2292 1.86907 55.2917 5.42032 61.4792C5.44108 61.5 5.46185 61.5417 5.46185 61.5625C6.68713 63.6875 8.03702 65.875 9.38691 68.0208C11.6921 71.7292 13.8519 75.2083 15.1187 78.0208C18.0054 84.4375 18.1923 98.375 18.1923 98.5C18.1923 99.3333 18.8361 99.9792 19.7084 100C20.5391 100 21.2036 99.3125 21.2036 98.4583C21.2036 97.8542 21.0167 83.75 17.86 76.75C16.5102 73.75 14.288 70.1667 11.9205 66.3958C10.5914 64.25 9.22077 62.0625 7.99548 59.9375C7.97472 59.9167 7.97472 59.8958 7.95395 59.8542C4.73499 54.1667 3.03205 47.6667 3.03205 41.0417C3.03205 20.0833 20.0199 3.04167 40.912 3.04167C61.8041 3.04167 78.8126 20.1042 78.8126 41.0625C78.8126 41.1667 78.8126 41.2708 78.8334 41.375C78.8957 41.625 80.1833 47.5625 87.7219 56.5208C88.0749 56.9375 89.1756 58.3542 88.9679 59.5C88.9264 59.7083 88.8226 60.3333 87.6804 61C84.0253 63.125 79.581 64.875 79.5395 64.875C78.8957 65.125 78.5011 65.7917 78.5842 66.4792C78.605 66.5625 79.7472 75.5417 78.7503 80.8958C78.3142 83.1667 73.2054 84.6875 66.0199 84.6875C61.9702 84.6875 59.3535 87.2292 59.3535 91.1458V98.5C59.3535 99.3333 60.0388 100.021 60.8695 100.021C61.7002 100.021 62.3856 99.3333 62.3856 98.5V91.1458C62.3856 88.1667 64.67 87.7083 66.0199 87.7083C71.4402 87.7083 80.6817 86.8958 81.6993 81.4583C82.5923 76.7917 81.9901 69.9583 81.6993 67.25C83.2984 66.5833 86.4135 65.2292 89.1756 63.6042C91.1278 62.4792 91.7508 61.0208 91.9169 60.0208C92.3323 57.7083 90.9201 55.5833 90.0271 54.5417Z"
              fill="#D9E6F7"
            />
            <path
              d="M68.6987 41.1458C68.6987 25.8333 56.2797 13.375 41.0156 13.375C25.7515 13.375 13.3325 25.8333 13.3325 41.1458C13.3325 56.4583 25.7515 68.9167 41.0156 68.9167C56.2797 68.9167 68.6987 56.4583 68.6987 41.1458ZM16.3438 41.1458C16.3438 27.5 27.4129 16.3958 41.0156 16.3958C41.4102 16.3958 41.8048 16.4375 42.1993 16.4583C48.035 17.0625 52.6038 22 52.6038 28.0208C52.6038 34.4167 47.412 39.6458 41.0156 39.6458C32.9578 39.6458 26.416 46.2083 26.416 54.2917C26.416 57.5417 27.496 60.5 29.282 62.9375C21.598 58.7292 16.3438 50.5417 16.3438 41.1458ZM41.0156 65.8958C40.621 65.8958 40.2264 65.8542 39.8318 65.8333C33.9962 65.2292 29.4273 60.2917 29.4273 54.2708C29.4273 47.875 34.6192 42.6458 41.0156 42.6458C49.0734 42.6458 55.6151 36.0833 55.6151 28C55.6151 24.7708 54.556 21.7917 52.77 19.375C60.454 23.5625 65.6874 31.75 65.6874 41.125C65.6874 54.7917 54.6183 65.8958 41.0156 65.8958Z"
              fill="#D9E6F7"
            />
            <path
              d="M41.0156 48.7292C37.9628 48.7292 35.4707 51.2292 35.4707 54.2917C35.4707 57.3542 37.9628 59.8542 41.0156 59.8542C44.0684 59.8542 46.5605 57.3542 46.5605 54.2917C46.5605 51.2083 44.0684 48.7292 41.0156 48.7292ZM41.0156 56.8125C39.6242 56.8125 38.5028 55.6875 38.5028 54.2917C38.5028 52.8958 39.6242 51.7708 41.0156 51.7708C42.407 51.7708 43.5285 52.8958 43.5285 54.2917C43.5285 55.6667 42.407 56.8125 41.0156 56.8125Z"
              fill="#D9E6F7"
            />
            <path
              d="M41.0156 33.5625C44.0684 33.5625 46.5605 31.0625 46.5605 28C46.5605 24.9375 44.0684 22.4375 41.0156 22.4375C37.9628 22.4375 35.4707 24.9375 35.4707 28C35.4707 31.0833 37.9628 33.5625 41.0156 33.5625ZM41.0156 25.5C42.407 25.5 43.5285 26.625 43.5285 28.0208C43.5285 29.4167 42.407 30.5417 41.0156 30.5417C39.6242 30.5417 38.5028 29.4167 38.5028 28.0208C38.5028 26.625 39.6242 25.5 41.0156 25.5Z"
              fill="#D9E6F7"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="92" height="100" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      name: "Английский язык",
      link: "eng",
      img: (
        <svg
          width="97"
          height="166"
          viewBox="0 0 97 166"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8241 37.9624C11.7404 37.9624 11.6846 37.9624 11.6008 37.9343C11.3216 37.8217 11.1262 37.5403 11.1262 37.2307L11.2379 34.4166L8.97666 32.7844C8.72541 32.6156 8.61375 32.2779 8.72541 31.9965C8.83708 31.7151 9.11624 31.5181 9.42333 31.5181L12.215 31.6307L13.8341 29.3512C14.0016 29.098 14.3366 28.9854 14.6158 29.098C14.8949 29.2105 15.0904 29.4919 15.0904 29.8015L14.9787 32.6156L17.2399 34.2478C17.4912 34.4166 17.6028 34.7543 17.4912 35.0357C17.3795 35.3171 17.1003 35.5423 16.7933 35.5141L14.0016 35.4016L12.3825 37.681C12.2429 37.8498 12.0196 37.9624 11.8241 37.9624ZM11.6846 33.0377L12.3546 33.5161C12.55 33.6568 12.6616 33.8819 12.6616 34.1071L12.6337 34.9232L13.1083 34.2478C13.2479 34.0508 13.4712 33.9382 13.6945 33.9664L14.5041 33.9945L13.8341 33.5161C13.6387 33.3754 13.527 33.1503 13.527 32.9251L13.555 32.1091L13.0804 32.7844C12.9408 32.9814 12.7175 33.094 12.4941 33.0659L11.6846 33.0377Z"
            fill="#D9E6F7"
          />
          <path
            d="M4.56575 55.9727C4.482 55.9727 4.42617 55.9727 4.34242 55.9446C4.06325 55.832 3.86784 55.5506 3.86784 55.241L4.06325 50.5978L0.294533 47.8962C0.043285 47.7274 -0.0683808 47.3897 0.043285 47.1083C0.154951 46.8268 0.434115 46.6299 0.741196 46.6299L5.34741 46.8268L8.02739 43.0278C8.19489 42.7745 8.52989 42.662 8.80905 42.7745C9.08821 42.8871 9.28363 43.1685 9.28363 43.478L9.08821 48.1213L12.8569 50.8229C13.1082 50.9917 13.2198 51.3294 13.1082 51.6108C12.9965 51.8922 12.7174 52.0892 12.4103 52.0892L7.80406 51.8922L5.12408 55.6913C4.9845 55.8601 4.78908 55.9727 4.56575 55.9727ZM3.00243 48.1213L5.152 49.6691C5.34741 49.8098 5.45908 50.0349 5.45908 50.2601L5.34741 52.9335L6.88282 50.7666C7.0224 50.5696 7.24573 50.4571 7.46906 50.4852L10.1211 50.5978L7.97156 49.05C7.77614 48.9093 7.66448 48.6842 7.69239 48.459L7.80406 45.7856L6.26865 47.9525C6.12907 48.1495 5.90574 48.262 5.68241 48.2339L3.00243 48.1213Z"
            fill="#D9E6F7"
          />
          <path
            d="M20.1151 23.0757C19.9196 23.0757 19.6963 23.0476 19.5009 22.9632C18.4959 22.6255 17.9655 21.528 18.3005 20.5149C18.6355 19.5018 19.7242 18.9671 20.7292 19.3048C21.2038 19.5018 21.5946 19.8395 21.818 20.2898C22.0413 20.7682 22.0692 21.2747 21.9017 21.7813C21.7621 22.2597 21.3992 22.6536 20.9526 22.8788C20.6734 23.0195 20.3942 23.0757 20.1151 23.0757ZM20.1151 20.6275C20.0313 20.6275 19.9476 20.6556 19.8917 20.6838C19.7521 20.74 19.6684 20.8526 19.6126 20.9652C19.5846 21.1059 19.5846 21.2466 19.6405 21.3873C19.6963 21.4998 19.808 21.5843 19.9476 21.6406C20.0592 21.6687 20.1988 21.6687 20.3384 21.6124C20.4501 21.5561 20.5617 21.4436 20.5896 21.3029C20.6455 21.1622 20.6176 21.0214 20.5617 20.9089C20.5059 20.7963 20.3942 20.7119 20.2826 20.6556C20.2267 20.6275 20.1709 20.6275 20.1151 20.6275Z"
            fill="#D9E6F7"
          />
          <path
            d="M27.0663 15.7872C26.8709 15.7872 26.6475 15.7591 26.4521 15.6746C25.9496 15.5058 25.5588 15.1681 25.3355 14.7178C25.1121 14.2394 25.0842 13.7329 25.2517 13.2264C25.5867 12.2133 26.6755 11.6786 27.6805 12.0163C28.6854 12.354 29.2159 13.4515 28.8809 14.4646C28.6017 15.2807 27.848 15.7872 27.0663 15.7872ZM27.0663 13.3389C26.843 13.3389 26.6475 13.4796 26.5917 13.6766C26.5359 13.8173 26.5638 13.958 26.6196 14.0706C26.6475 14.2113 26.7592 14.2957 26.8988 14.352C27.0384 14.4083 27.178 14.3801 27.2896 14.3239C27.4013 14.2676 27.513 14.155 27.5409 14.0143C27.5967 13.8736 27.5688 13.7329 27.513 13.6203C27.4571 13.5078 27.3455 13.4233 27.2338 13.3671C27.178 13.3389 27.1221 13.3389 27.0663 13.3389Z"
            fill="#D9E6F7"
          />
          <path
            d="M35.916 10.5811C35.7764 10.5811 35.6368 10.5529 35.4973 10.4967C35.1623 10.4122 34.911 10.159 34.7435 9.84942C34.576 9.53986 34.576 9.17403 34.6877 8.83634C34.911 8.13281 35.6648 7.76697 36.3627 8.02024C37.0606 8.24537 37.4235 9.00518 37.1722 9.70871C36.9768 10.2434 36.4743 10.5811 35.916 10.5811ZM35.916 9.17403C35.8881 9.17403 35.8602 9.20217 35.8323 9.23031C35.8043 9.28659 35.8323 9.31473 35.8881 9.34288C35.9439 9.37102 35.9718 9.34288 35.9998 9.28659C35.9998 9.28659 35.9998 9.25845 35.9998 9.23031C35.9998 9.20217 35.9718 9.17403 35.916 9.17403C35.9439 9.17403 35.9439 9.17403 35.916 9.17403Z"
            fill="#D9E6F7"
          />
          <path
            d="M34.7994 29.6889C34.6877 29.6889 34.604 29.6889 34.4923 29.6608C33.7944 29.4919 33.3477 28.7884 33.5152 28.0567C33.6827 27.3532 34.3806 26.9029 35.1065 27.0718C35.8044 27.2406 36.251 27.9442 36.0835 28.6758C35.944 29.2949 35.4135 29.6889 34.7994 29.6889ZM34.7994 28.2819C34.7715 28.2819 34.7435 28.31 34.7156 28.3381C34.7156 28.3944 34.7435 28.4226 34.7715 28.4226C34.8273 28.4226 34.8552 28.3944 34.8552 28.3663C34.911 28.3381 34.8831 28.31 34.7994 28.2819C34.8273 28.2819 34.8273 28.2819 34.7994 28.2819Z"
            fill="#D9E6F7"
          />
          <path
            d="M29.8023 37.6528C29.6906 37.6528 29.6069 37.6528 29.4952 37.6247C28.7973 37.4559 28.3507 36.7523 28.5182 36.0207C28.6857 35.3171 29.3836 34.8669 30.1094 35.0357C30.8073 35.2046 31.254 35.9081 31.0865 36.6398C30.9469 37.2307 30.3886 37.6528 29.8023 37.6528ZM29.8023 36.2458C29.7744 36.2458 29.7465 36.2739 29.7186 36.3021C29.7186 36.3584 29.7465 36.3865 29.7744 36.3865C29.8302 36.3865 29.8581 36.3584 29.8581 36.3302C29.8861 36.3021 29.8581 36.2458 29.8023 36.2458Z"
            fill="#D9E6F7"
          />
          <path
            d="M93.8142 44.1253C93.5908 44.1253 93.3675 44.0127 93.2279 43.8157L91.6367 41.5081L88.845 41.5926C88.5379 41.5926 88.2588 41.3956 88.175 41.1142C88.0913 40.8046 88.175 40.4951 88.4542 40.3262L90.7433 38.7222L90.6596 35.9081C90.6596 35.5985 90.855 35.3171 91.1342 35.2327C91.4413 35.1483 91.7483 35.2327 91.9158 35.5141L93.5071 37.8217L96.2987 37.7372C96.6058 37.7372 96.885 37.9342 96.9687 38.2156C97.0525 38.5252 96.9687 38.8347 96.6895 39.0036L94.4004 40.6076L94.4841 43.4217C94.4841 43.7313 94.2887 44.0127 94.0096 44.0971C93.9817 44.1253 93.8979 44.1253 93.8142 44.1253ZM92.0275 40.1011C92.2508 40.1011 92.4742 40.2137 92.6137 40.4106L93.0883 41.086L93.0604 40.2699C93.0604 40.0448 93.1721 39.8197 93.3675 39.679L94.0375 39.2006L93.2279 39.2287C93.0046 39.2287 92.7812 39.1161 92.6417 38.9192L92.1671 38.2438L92.195 39.0599C92.195 39.285 92.0833 39.5101 91.8879 39.6508L91.2179 40.1292L92.0275 40.1011Z"
            fill="#D9E6F7"
          />
          <path
            d="M85.7743 29.126C84.9647 29.126 84.2109 28.6195 83.9597 27.8034C83.7922 27.325 83.848 26.7903 84.0714 26.3401C84.2947 25.8898 84.6855 25.5521 85.188 25.3833C86.193 25.0456 87.2817 25.6084 87.5888 26.6215C87.9238 27.6346 87.3655 28.7321 86.3605 29.0416C86.1651 29.0698 85.9697 29.126 85.7743 29.126ZM85.7743 26.6778C85.7184 26.6778 85.6626 26.6778 85.6068 26.7059C85.4672 26.7622 85.3834 26.8466 85.2997 26.9592C85.2439 27.0717 85.2159 27.2124 85.2718 27.3532C85.3555 27.6346 85.6626 27.7753 85.9138 27.6908C86.193 27.6064 86.3326 27.2969 86.2488 27.0436C86.193 26.8185 85.9697 26.6778 85.7743 26.6778Z"
            fill="#D9E6F7"
          />
          <path
            d="M78.9066 21.725C78.5995 21.725 78.3203 21.6405 78.0412 21.528C77.5945 21.3028 77.2595 20.9089 77.092 20.4023C76.757 19.3892 77.3153 18.2917 78.3203 17.9822C78.7949 17.8133 79.3253 17.8696 79.772 18.0948C80.2187 18.3199 80.5537 18.7139 80.7212 19.2204C81.0562 20.2335 80.4978 21.331 79.4928 21.6405C79.3253 21.6968 79.102 21.725 78.9066 21.725ZM78.9066 19.2767C78.8508 19.2767 78.7949 19.2767 78.7391 19.3048C78.5995 19.3611 78.5158 19.4455 78.432 19.5581C78.4041 19.6988 78.3762 19.8395 78.432 19.9521C78.4878 20.0928 78.5716 20.1772 78.6833 20.2616C78.7949 20.3179 78.9345 20.346 79.0741 20.2898C79.3532 20.2053 79.4928 19.8958 79.4091 19.6425C79.3533 19.5018 79.2695 19.4174 79.1578 19.333C79.0741 19.3048 78.9903 19.2767 78.9066 19.2767Z"
            fill="#D9E6F7"
          />
          <path
            d="M70.1133 16.4063C69.555 16.4063 69.0525 16.0404 68.857 15.4776C68.7454 15.1399 68.7733 14.7741 68.9408 14.4645C69.1083 14.155 69.3595 13.9017 69.6945 13.8173C70.3924 13.5922 71.1183 13.9861 71.3416 14.6615C71.5649 15.3651 71.1741 16.0967 70.5041 16.3218C70.3924 16.3781 70.2529 16.4063 70.1133 16.4063ZM70.197 15.0555L70.0574 15.1118C70.0574 15.1681 70.1133 15.1681 70.1691 15.1681C70.1691 15.1681 70.197 15.1681 70.2249 15.1399C70.197 15.0836 70.197 15.0555 70.197 15.0555ZM70.1133 14.9992C70.1133 14.9992 70.0854 14.9992 70.1133 14.9992C70.0574 15.0274 70.0295 15.0555 70.0295 15.1118L70.1691 15.0555C70.1691 14.9992 70.1412 14.9992 70.1133 14.9992Z"
            fill="#D9E6F7"
          />
          <path
            d="M74.6354 42.4368C74.4958 42.4368 74.3562 42.4087 74.2167 42.3805C73.1838 42.1554 72.5417 41.1142 72.765 40.1011C72.9883 39.0599 74.0212 38.4126 75.0262 38.6378C76.0591 38.8629 76.7012 39.9041 76.4779 40.9172C76.2825 41.8177 75.5008 42.4368 74.6354 42.4368ZM74.6354 39.9885C74.4121 39.9885 74.1887 40.1574 74.1329 40.4106C74.0771 40.6921 74.2446 40.9735 74.5237 41.0298C74.8029 41.086 75.0821 40.9172 75.1379 40.6358C75.1937 40.3544 75.0262 40.073 74.7471 40.0167C74.6912 39.9885 74.6633 39.9885 74.6354 39.9885Z"
            fill="#D9E6F7"
          />
          <path
            d="M69.3873 33.2909C69.3035 33.2909 69.1918 33.2909 69.1081 33.2628C68.4102 33.094 67.9356 32.3904 68.1031 31.6869C68.2706 30.9834 68.9685 30.505 69.6664 30.6738C70.3643 30.8427 70.8389 31.5462 70.6714 32.2497C70.5877 32.5874 70.3923 32.897 70.0852 33.094C69.8898 33.2065 69.6385 33.2909 69.3873 33.2909ZM69.3035 31.9402C69.3035 31.9965 69.3314 32.0246 69.3593 32.0246C69.3873 32.0246 69.4431 31.9965 69.4431 31.9683C69.4431 31.912 69.4152 31.8839 69.3873 31.8839C69.3873 31.8839 69.3593 31.8839 69.3314 31.8839C69.3035 31.912 69.3035 31.9402 69.3035 31.9402Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2473 67.3136C57.4118 67.3136 61.6272 63.0642 61.6272 57.8581C61.6272 52.652 57.4118 48.4027 52.2473 48.4027C47.0827 48.4027 42.8673 52.652 42.8673 57.8581C42.8394 63.0642 47.0548 67.3136 52.2473 67.3136ZM52.2473 49.7816C56.658 49.7816 60.2314 53.3837 60.2314 57.83C60.2314 62.2763 56.658 65.8784 52.2473 65.8784C47.8365 65.8784 44.2631 62.2763 44.2631 57.83C44.2352 53.4118 47.8365 49.7816 52.2473 49.7816Z"
            fill="#D9E6F7"
          />
          <path
            d="M49.4552 32.4467C49.8461 32.4467 50.1531 32.1372 50.1531 31.7432V29.3793C50.1531 28.9854 49.8461 28.6758 49.4552 28.6758C49.0644 28.6758 48.7573 28.9854 48.7573 29.3793V31.7432C48.7573 32.1372 49.0644 32.4467 49.4552 32.4467Z"
            fill="#D9E6F7"
          />
          <path
            d="M55.0387 32.4467C55.4296 32.4467 55.7366 32.1372 55.7366 31.7432V29.3793C55.7366 28.9854 55.4296 28.6758 55.0387 28.6758C54.6479 28.6758 54.3408 28.9854 54.3408 29.3793V31.7432C54.3408 32.1372 54.6479 32.4467 55.0387 32.4467Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2472 89.9953C52.6381 89.9953 52.9451 89.6857 52.9451 89.2918V78.2604C52.9451 77.8665 52.6381 77.5569 52.2472 77.5569C51.8564 77.5569 51.5493 77.8665 51.5493 78.2604V89.2918C51.5493 89.6857 51.8564 89.9953 52.2472 89.9953Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2472 107.949C52.6381 107.949 52.9451 107.64 52.9451 107.246V96.2145C52.9451 95.8205 52.6381 95.5109 52.2472 95.5109C51.8564 95.5109 51.5493 95.8205 51.5493 96.2145V107.246C51.5493 107.64 51.8564 107.949 52.2472 107.949Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2472 125.903C52.6381 125.903 52.9451 125.594 52.9451 125.2V114.169C52.9451 113.775 52.6381 113.465 52.2472 113.465C51.8564 113.465 51.5493 113.775 51.5493 114.169V125.2C51.5493 125.594 51.8564 125.903 52.2472 125.903Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2472 143.857C52.6381 143.857 52.9451 143.548 52.9451 143.154V132.123C52.9451 131.729 52.6381 131.419 52.2472 131.419C51.8564 131.419 51.5493 131.729 51.5493 132.123V143.154C51.5493 143.52 51.8564 143.857 52.2472 143.857Z"
            fill="#D9E6F7"
          />
          <path
            d="M49.1203 89.9953C49.5111 89.9953 49.8182 89.6857 49.8182 89.2918V78.2604C49.8182 77.8665 49.5111 77.5569 49.1203 77.5569C48.7294 77.5569 48.4224 77.8665 48.4224 78.2604V89.2918C48.4224 89.6857 48.7294 89.9953 49.1203 89.9953Z"
            fill="#D9E6F7"
          />
          <path
            d="M49.1203 107.949C49.5111 107.949 49.8182 107.64 49.8182 107.246V96.2145C49.8182 95.8205 49.5111 95.5109 49.1203 95.5109C48.7294 95.5109 48.4224 95.8205 48.4224 96.2145V107.246C48.4224 107.64 48.7294 107.949 49.1203 107.949Z"
            fill="#D9E6F7"
          />
          <path
            d="M49.1203 125.903C49.5111 125.903 49.8182 125.594 49.8182 125.2V114.169C49.8182 113.775 49.5111 113.465 49.1203 113.465C48.7294 113.465 48.4224 113.775 48.4224 114.169V125.2C48.4224 125.594 48.7294 125.903 49.1203 125.903Z"
            fill="#D9E6F7"
          />
          <path
            d="M49.1203 143.857C49.5111 143.857 49.8182 143.548 49.8182 143.154V132.123C49.8182 131.729 49.5111 131.419 49.1203 131.419C48.7294 131.419 48.4224 131.729 48.4224 132.123V143.154C48.4224 143.52 48.7294 143.857 49.1203 143.857Z"
            fill="#D9E6F7"
          />
          <path
            d="M46.0216 89.9953C46.4125 89.9953 46.7196 89.6857 46.7196 89.2918V78.2604C46.7196 77.8665 46.4125 77.5569 46.0216 77.5569C45.6308 77.5569 45.3237 77.8665 45.3237 78.2604V89.2918C45.3237 89.6857 45.6308 89.9953 46.0216 89.9953Z"
            fill="#D9E6F7"
          />
          <path
            d="M46.0216 107.949C46.4125 107.949 46.7196 107.64 46.7196 107.246V96.2145C46.7196 95.8205 46.4125 95.5109 46.0216 95.5109C45.6308 95.5109 45.3237 95.8205 45.3237 96.2145V107.246C45.3237 107.64 45.6308 107.949 46.0216 107.949Z"
            fill="#D9E6F7"
          />
          <path
            d="M46.0216 125.903C46.4125 125.903 46.7196 125.594 46.7196 125.2V114.169C46.7196 113.775 46.4125 113.465 46.0216 113.465C45.6308 113.465 45.3237 113.775 45.3237 114.169V125.2C45.3237 125.594 45.6308 125.903 46.0216 125.903Z"
            fill="#D9E6F7"
          />
          <path
            d="M46.0216 143.857C46.4125 143.857 46.7196 143.548 46.7196 143.154V132.123C46.7196 131.729 46.4125 131.419 46.0216 131.419C45.6308 131.419 45.3237 131.729 45.3237 132.123V143.154C45.3237 143.52 45.6308 143.857 46.0216 143.857Z"
            fill="#D9E6F7"
          />
          <path
            d="M55.3459 89.9953C55.7367 89.9953 56.0438 89.6857 56.0438 89.2918V78.2604C56.0438 77.8665 55.7367 77.5569 55.3459 77.5569C54.955 77.5569 54.6479 77.8665 54.6479 78.2604V89.2918C54.6479 89.6857 54.9829 89.9953 55.3459 89.9953Z"
            fill="#D9E6F7"
          />
          <path
            d="M55.3459 107.949C55.7367 107.949 56.0438 107.64 56.0438 107.246V96.2145C56.0438 95.8205 55.7367 95.5109 55.3459 95.5109C54.955 95.5109 54.6479 95.8205 54.6479 96.2145V107.246C54.6479 107.64 54.9829 107.949 55.3459 107.949Z"
            fill="#D9E6F7"
          />
          <path
            d="M55.3459 125.903C55.7367 125.903 56.0438 125.594 56.0438 125.2V114.169C56.0438 113.775 55.7367 113.465 55.3459 113.465C54.955 113.465 54.6479 113.775 54.6479 114.169V125.2C54.6479 125.594 54.9829 125.903 55.3459 125.903Z"
            fill="#D9E6F7"
          />
          <path
            d="M55.3459 143.857C55.7367 143.857 56.0438 143.548 56.0438 143.154V132.123C56.0438 131.729 55.7367 131.419 55.3459 131.419C54.955 131.419 54.6479 131.729 54.6479 132.123V143.154C54.6479 143.52 54.9829 143.857 55.3459 143.857Z"
            fill="#D9E6F7"
          />
          <path
            d="M58.4723 89.9953C58.8632 89.9953 59.1702 89.6857 59.1702 89.2918V78.2604C59.1702 77.8665 58.8632 77.5569 58.4723 77.5569C58.0815 77.5569 57.7744 77.8665 57.7744 78.2604V89.2918C57.7744 89.6857 58.0815 89.9953 58.4723 89.9953Z"
            fill="#D9E6F7"
          />
          <path
            d="M58.4723 107.949C58.8632 107.949 59.1702 107.64 59.1702 107.246V96.2145C59.1702 95.8205 58.8632 95.5109 58.4723 95.5109C58.0815 95.5109 57.7744 95.8205 57.7744 96.2145V107.246C57.7744 107.64 58.0815 107.949 58.4723 107.949Z"
            fill="#D9E6F7"
          />
          <path
            d="M58.4723 125.903C58.8632 125.903 59.1702 125.594 59.1702 125.2V114.169C59.1702 113.775 58.8632 113.465 58.4723 113.465C58.0815 113.465 57.7744 113.775 57.7744 114.169V125.2C57.7744 125.594 58.0815 125.903 58.4723 125.903Z"
            fill="#D9E6F7"
          />
          <path
            d="M58.4723 143.857C58.8632 143.857 59.1702 143.548 59.1702 143.154V132.123C59.1702 131.729 58.8632 131.419 58.4723 131.419C58.0815 131.419 57.7744 131.729 57.7744 132.123V143.154C57.7744 143.52 58.0815 143.857 58.4723 143.857Z"
            fill="#D9E6F7"
          />
          <path
            d="M64.5862 37.9905C64.1954 37.9905 63.8883 38.3001 63.8883 38.694V41.2549C62.325 40.4388 59.2821 38.4408 59.1983 34.9794L59.645 33.9945C59.6729 33.91 59.7008 33.7975 59.7008 33.7131V27.4657V22.1752C59.7008 21.7812 59.3937 21.4717 59.0029 21.4717C58.6121 21.4717 58.305 21.7812 58.305 22.1752V25.4959C56.4067 22.9069 52.945 17.1942 52.945 9.73683C52.945 9.70868 52.945 9.6524 52.945 9.62426C52.945 9.59612 52.945 9.56798 52.945 9.5117V6.81015C53.3638 7.1197 53.4475 7.65438 53.4475 7.87951C53.4475 8.27349 53.7546 8.5549 54.1454 8.5549C54.5363 8.5549 54.8434 8.21721 54.8434 7.85137C54.8154 6.92271 54.285 5.62822 52.945 5.29053V0.703528C52.945 0.309552 52.638 0 52.2471 0C51.8563 0 51.5492 0.309552 51.5492 0.703528V5.29053C50.1813 5.62822 49.6788 6.92271 49.6509 7.85137C49.6509 8.24535 49.958 8.5549 50.3488 8.5549C50.7396 8.5549 51.0467 8.24535 51.0467 7.85137C51.0467 7.71067 51.1026 7.1197 51.5492 6.81015V9.5117C51.5492 9.53984 51.5492 9.59612 51.5492 9.62426C51.5492 9.6524 51.5492 9.70868 51.5492 9.73683C51.5492 17.2505 47.9201 22.9913 45.9659 25.5521V22.1752C45.9659 21.7812 45.6588 21.4717 45.268 21.4717C44.8772 21.4717 44.5701 21.7812 44.5701 22.1752V27.4939V33.7131C44.5701 33.8256 44.598 33.91 44.6259 33.9945L45.0726 34.9794C44.9889 38.4408 41.9739 40.4388 40.3826 41.2549V38.694C40.3826 38.3001 40.0756 37.9905 39.6847 37.9905C39.2939 37.9905 38.9868 38.3001 38.9868 38.694V45.3635V45.5042V70.6905C38.9868 71.0845 39.2939 71.394 39.6847 71.394H41.611V149.88H40.3826C39.9918 149.88 39.6847 150.189 39.6847 150.583V164.907C39.6847 165.301 39.9918 165.61 40.3826 165.61H52.1355H63.8883C64.2791 165.61 64.5862 165.301 64.5862 164.907V150.555C64.5862 150.161 64.2791 149.851 63.8883 149.851H62.66V71.3659H64.5862C64.977 71.3659 65.2841 71.0563 65.2841 70.6623V45.476V45.3353V38.6659C65.2841 38.3001 64.9491 37.9905 64.5862 37.9905ZM52.2192 15.7027C53.7546 22.3159 57.3838 26.7341 58.305 27.7471V33.5442L58.0537 34.1352H52.1355H46.2172L45.9659 33.5442V27.7471C46.8872 26.7341 50.6559 22.3159 52.2192 15.7027ZM46.4405 35.5141H52.1355H57.8304C58.2492 39.9885 62.4366 42.1835 63.8883 42.8026V44.66H40.4106V42.8026C41.8064 42.1835 46.0218 39.9885 46.4405 35.5141ZM63.1904 164.175H52.1355H41.0805V151.258H42.3089H52.1355H61.9621H63.1904V164.175ZM61.2641 149.851H52.1355H43.0068V71.3659H61.2362V149.851H61.2641ZM63.8883 69.9588H40.4106V46.067H63.8883V69.9588Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2472 32.4467C52.6381 32.4467 52.9451 32.1372 52.9451 31.7432V29.3793C52.9451 28.9854 52.6381 28.6758 52.2472 28.6758C51.8564 28.6758 51.5493 28.9854 51.5493 29.3793V31.7432C51.5493 32.1372 51.8564 32.4467 52.2472 32.4467Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.2472 43.3373C52.6381 43.3373 52.9451 43.0277 52.9451 42.6338V41.5081C52.9451 41.1142 52.6381 40.8046 52.2472 40.8046C51.8564 40.8046 51.5493 41.1142 51.5493 41.5081V42.6338C51.5493 43.0277 51.8564 43.3373 52.2472 43.3373Z"
            fill="#D9E6F7"
          />
          <path
            d="M49.4552 43.3373C49.8461 43.3373 50.1531 43.0277 50.1531 42.6338V41.5081C50.1531 41.1142 49.8461 40.8046 49.4552 40.8046C49.0644 40.8046 48.7573 41.1142 48.7573 41.5081V42.6338C48.7573 43.0277 49.0923 43.3373 49.4552 43.3373Z"
            fill="#D9E6F7"
          />
          <path
            d="M46.6916 43.3373C47.0824 43.3373 47.3895 43.0277 47.3895 42.6338V41.5081C47.3895 41.1142 47.0824 40.8046 46.6916 40.8046C46.3007 40.8046 45.9937 41.1142 45.9937 41.5081V42.6338C45.9937 43.0277 46.3007 43.3373 46.6916 43.3373Z"
            fill="#D9E6F7"
          />
          <path
            d="M55.0109 43.3373C55.4017 43.3373 55.7088 43.0277 55.7088 42.6338V41.5081C55.7088 41.1142 55.4017 40.8046 55.0109 40.8046C54.6201 40.8046 54.313 41.1142 54.313 41.5081V42.6338C54.313 43.0277 54.6201 43.3373 55.0109 43.3373Z"
            fill="#D9E6F7"
          />
          <path
            d="M57.8024 43.3373C58.1932 43.3373 58.5003 43.0277 58.5003 42.6338V41.5081C58.5003 41.1142 58.1932 40.8046 57.8024 40.8046C57.4116 40.8046 57.1045 41.1142 57.1045 41.5081V42.6338C57.1045 43.0277 57.4116 43.3373 57.8024 43.3373Z"
            fill="#D9E6F7"
          />
          <path
            d="M52.1354 58.7305H57.0487C57.4395 58.7305 57.7466 58.421 57.7466 58.027C57.7466 57.633 57.4395 57.3235 57.0487 57.3235H52.8333V51.7797C52.8333 51.3857 52.5262 51.0761 52.1354 51.0761C51.7446 51.0761 51.4375 51.3857 51.4375 51.7797V57.9989C51.4375 58.3928 51.7446 58.7305 52.1354 58.7305Z"
            fill="#D9E6F7"
          />
        </svg>
      )
    },
    {
      name: "Математика",
      link: "algebra",
      img: (
        <svg
          width="172"
          height="172"
          viewBox="0 0 172 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M96.75 118.25H32.25C29.2803 118.25 26.875 115.845 26.875 112.875V26.875C26.875 23.9053 29.2803 21.5 32.25 21.5H96.75C99.7197 21.5 102.125 23.9053 102.125 26.875V112.875C102.125 115.845 99.7197 118.25 96.75 118.25Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M91.375 118.25H26.875C23.9053 118.25 21.5 115.845 21.5 112.875V26.875C21.5 23.9053 23.9053 21.5 26.875 21.5H91.375C94.3447 21.5 96.75 23.9053 96.75 26.875V112.875C96.75 115.845 94.3447 118.25 91.375 118.25Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M86 32.25H32.25V107.5H86V32.25Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M77.9375 107.5H120.938V86H77.9375C76.4527 86 75.25 87.2027 75.25 88.6875V104.812C75.25 106.297 76.4527 107.5 77.9375 107.5Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M56.4375 129H99.4375V107.5H56.4375C54.9527 107.5 53.75 108.703 53.75 110.188V126.312C53.75 127.797 54.9527 129 56.4375 129Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M67.1875 150.5H110.188V129H67.1875C65.7027 129 64.5 130.203 64.5 131.688V147.812C64.5 149.297 65.7027 150.5 67.1875 150.5Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M75.25 147.812V131.688C75.25 130.203 76.4527 129 77.9375 129H72.5625C71.0777 129 69.875 130.203 69.875 131.688V147.812C69.875 149.297 71.0777 150.5 72.5625 150.5H77.9375C76.4527 150.5 75.25 149.297 75.25 147.812Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M147.812 88.6875V104.812H150.5V107.5H120.938C119.453 107.5 118.25 106.297 118.25 104.812V88.6875C118.25 87.2027 119.453 86 120.938 86H150.5V88.6875H147.812Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M137.062 110.188V126.312H139.75V129H99.4375C97.9527 129 96.75 127.797 96.75 126.312V110.188C96.75 108.703 97.9527 107.5 99.4375 107.5H139.75V110.188H137.062Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M147.812 131.688V147.812H150.5V150.5H110.188C108.703 150.5 107.5 149.297 107.5 147.812V131.688C107.5 130.203 108.703 129 110.188 129H150.5V131.688H147.812Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M102.125 43H91.375C88.4053 43 86 45.4053 86 48.375V64.5H102.125V43Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M102.125 64.5H86V80.625C86 83.5947 88.4053 86 91.375 86H102.125V64.5Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M118.25 64.5V43H102.125C99.1553 43 96.75 45.4053 96.75 48.375V64.5H118.25Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M118.25 64.5H139.75V48.375C139.75 45.4053 137.345 43 134.375 43H118.25V64.5Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M118.25 64.5V86H102.125C99.1553 86 96.75 83.5947 96.75 80.625V64.5H118.25Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M118.25 64.5H139.75V80.625C139.75 83.5947 137.345 86 134.375 86H118.25V64.5Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M147.812 88.6875H120.938V104.812H147.812V88.6875Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M137.062 110.188H99.4375V126.312H137.062V110.188Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M147.812 131.688H110.188V147.812H147.812V131.688Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M59.125 37.625V102.125"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.625 80.625H80.625"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M80.625 37.625C80.625 61.3758 70.997 80.625 59.125 80.625C47.253 80.625 37.625 61.3758 37.625 37.625"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M56.4375 40.3125L59.125 37.625L61.8125 40.3125"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M77.9375 77.9375L80.625 80.625L77.9375 83.3125"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M59.125 83.3125C60.6093 83.3125 61.8125 82.1093 61.8125 80.625C61.8125 79.1407 60.6093 77.9375 59.125 77.9375C57.6407 77.9375 56.4375 79.1407 56.4375 80.625C56.4375 82.1093 57.6407 83.3125 59.125 83.3125Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M48.375 92.7188C49.1171 92.7188 49.7188 92.1171 49.7188 91.375C49.7188 90.6329 49.1171 90.0312 48.375 90.0312C47.6329 90.0312 47.0312 90.6329 47.0312 91.375C47.0312 92.1171 47.6329 92.7188 48.375 92.7188Z"
            fill="#D9E6F7"
          />
          <path
            d="M41.1994 92.8733L40.682 94.7344H38.9822L41.1994 87.4849H43.3494L45.6001 94.7344H43.8331L43.2755 92.8733H41.1994ZM43.0403 91.6505L42.5901 90.1119C42.4625 89.6819 42.3348 89.1444 42.2273 88.7144H42.2072C42.0997 89.1444 41.9922 89.6953 41.8712 90.1119L41.4412 91.6505H43.0403Z"
            fill="#D9E6F7"
          />
          <path
            d="M59.125 28.2188C59.8671 28.2188 60.4688 27.6171 60.4688 26.875C60.4688 26.1329 59.8671 25.5312 59.125 25.5312C58.3829 25.5312 57.7812 26.1329 57.7812 26.875C57.7812 27.6171 58.3829 28.2188 59.125 28.2188Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M75.25 114.219C77.4739 114.219 79.2812 116.026 79.2812 118.25C79.2812 120.474 77.4739 122.281 75.25 122.281C73.0261 122.281 71.2188 120.474 71.2188 118.25C71.2188 116.026 73.0261 114.219 75.25 114.219ZM75.25 112.875C72.2803 112.875 69.875 115.28 69.875 118.25C69.875 121.22 72.2803 123.625 75.25 123.625C78.2197 123.625 80.625 121.22 80.625 118.25C80.625 115.28 78.2197 112.875 75.25 112.875Z"
            fill="#D9E6F7"
          />
          <path
            d="M86 116.906C86.7391 116.906 87.3438 117.511 87.3438 118.25C87.3438 118.989 86.7391 119.594 86 119.594C85.2609 119.594 84.6562 118.989 84.6562 118.25C84.6562 117.511 85.2609 116.906 86 116.906ZM86 115.562C84.5152 115.562 83.3125 116.765 83.3125 118.25C83.3125 119.735 84.5152 120.938 86 120.938C87.4848 120.938 88.6875 119.735 88.6875 118.25C88.6875 116.765 87.4848 115.562 86 115.562Z"
            fill="#D9E6F7"
          />
          <path
            d="M64.5 116.906C65.2391 116.906 65.8438 117.511 65.8438 118.25C65.8438 118.989 65.2391 119.594 64.5 119.594C63.7609 119.594 63.1562 118.989 63.1562 118.25C63.1562 117.511 63.7609 116.906 64.5 116.906ZM64.5 115.562C63.0152 115.562 61.8125 116.765 61.8125 118.25C61.8125 119.735 63.0152 120.938 64.5 120.938C65.9848 120.938 67.1875 119.735 67.1875 118.25C67.1875 116.765 65.9848 115.562 64.5 115.562Z"
            fill="#D9E6F7"
          />
          <path
            d="M96.75 96.75L91.375 102.125H80.625V91.375H96.75V96.75Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M91.375 102.125V96.75H96.75"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M107.5 48.375V59.125"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M102.125 53.75H112.875"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M129 75.25L130.901 77.1514"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M125.197 79.0528L132.803 71.4472"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M103.697 71.4472L111.303 79.0528"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M103.697 79.0528L111.303 71.4472"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M123.625 53.75H134.375"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M120.938 91.375H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M120.938 94.0625H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M120.938 96.75H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M120.938 99.4375H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M120.938 102.125H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M110.745 134.153H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M110.745 137.062H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M110.745 139.75H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M110.745 142.438H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M110.745 145.125H147.812"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M99.9951 123.625H137.062"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M99.9951 120.938H137.062"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M99.9951 118.25H137.062"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M99.9951 115.562H137.062"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M99.9951 112.875H137.062"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M131.688 96.75H126.312V115.562H131.688V96.75Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M102.125 147.812V131.688C102.125 130.203 103.328 129 104.812 129H99.4375C97.9527 129 96.75 130.203 96.75 131.688V147.812C96.75 149.297 97.9527 150.5 99.4375 150.5H104.812C103.328 150.5 102.125 149.297 102.125 147.812Z"
            fill="white"
            stroke="#D9E6F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      name: "Информатика",
      link: "inform",
      img: (
        <svg
          width="112"
          height="113"
          viewBox="0 0 112 113"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M56.0002 91.63C56.9335 91.63 57.7035 90.86 57.7035 89.9267C57.7035 88.9933 56.9335 88.2233 56.0002 88.2233C55.0669 88.2233 54.2969 88.9933 54.2969 89.9267C54.2969 90.8833 55.0669 91.63 56.0002 91.63Z"
            fill="#D9E6F7"
          />
          <path
            d="M103.507 0H8.49333C3.80333 0 0 3.80333 0 8.49333V89.95C0 94.6167 3.80333 98.4433 8.49333 98.4433H33.95V108.617H22.05C21.1167 108.617 20.3467 109.387 20.3467 110.32C20.3467 111.253 21.1167 112.023 22.05 112.023H89.9267C90.86 112.023 91.63 111.253 91.63 110.32C91.63 109.387 90.86 108.617 89.9267 108.617H78.05V98.4433H103.507C108.173 98.4433 112 94.64 112 89.95V8.49333C112 3.80333 108.197 0 103.507 0ZM74.6667 108.593H37.3333V98.42H74.6667V108.593ZM108.617 89.9267C108.617 92.7267 106.33 95.0133 103.53 95.0133H8.49333C5.69333 95.0133 3.40667 92.7267 3.40667 89.9267V84.84H108.617V89.9267ZM108.617 81.4567H3.38333V8.49333C3.38333 5.69333 5.67 3.40667 8.47 3.40667H103.507C106.307 3.40667 108.593 5.69333 108.593 8.49333V81.4567H108.617Z"
            fill="#D9E6F7"
          />
          <path
            d="M27.72 15.8433H20.93C18.7367 15.8433 16.9634 17.6167 16.9634 19.81V33.39C16.9634 35.5833 18.7367 37.3567 20.93 37.3567H27.72C29.9134 37.3567 31.6867 35.5833 31.6867 33.39V19.81C31.6634 17.6167 29.89 15.8433 27.72 15.8433ZM28.28 33.3667C28.28 33.67 28.0234 33.9267 27.72 33.9267H20.93C20.6267 33.9267 20.37 33.67 20.37 33.3667V19.81C20.37 19.5067 20.6267 19.25 20.93 19.25H27.72C28.0234 19.25 28.28 19.5067 28.28 19.81V33.3667Z"
            fill="#D9E6F7"
          />
          <path
            d="M72.9632 15.8433H66.1732C63.9799 15.8433 62.2065 17.6167 62.2065 19.81V33.39C62.2065 35.5833 63.9799 37.3567 66.1732 37.3567H72.9632C75.1566 37.3567 76.9299 35.5833 76.9299 33.39V19.81C76.9299 17.6167 75.1566 15.8433 72.9632 15.8433ZM73.5465 33.3667C73.5465 33.67 73.2899 33.9267 72.9866 33.9267H66.1965C65.8932 33.9267 65.6365 33.67 65.6365 33.3667V19.81C65.6365 19.5067 65.8932 19.25 66.1965 19.25H72.9866C73.2899 19.25 73.5465 19.5067 73.5465 19.81V33.3667Z"
            fill="#D9E6F7"
          />
          <path
            d="M48.8133 16.0067C48.23 15.7267 47.53 15.7967 47.0167 16.2167L41.37 20.7433C40.6467 21.3267 40.53 22.4 41.1133 23.1233C41.6967 23.8467 42.77 23.9633 43.4933 23.38L46.3867 21.07V35.63C46.3867 36.5633 47.1567 37.3333 48.09 37.3333C49.0233 37.3333 49.7933 36.5633 49.7933 35.63V17.5467C49.77 16.8933 49.3967 16.2867 48.8133 16.0067Z"
            fill="#D9E6F7"
          />
          <path
            d="M94.0799 16.0067C93.4966 15.7267 92.7966 15.7967 92.2833 16.2167L86.6366 20.7433C85.9133 21.3267 85.7966 22.4 86.3799 23.1233C86.9633 23.8467 88.0366 23.9633 88.7599 23.38L91.6533 21.07V35.63C91.6533 36.5633 92.4233 37.3333 93.3566 37.3333C94.2899 37.3333 95.0599 36.5633 95.0599 35.63V17.5467C95.0366 16.8933 94.6633 16.2867 94.0799 16.0067Z"
            fill="#D9E6F7"
          />
          <path
            d="M44.6834 47.53H37.8934C35.7234 47.53 33.9268 49.3033 33.9268 51.4967V65.0767C33.9268 67.27 35.7001 69.0433 37.8934 69.0433H44.6834C46.8768 69.0433 48.6501 67.27 48.6501 65.0767V51.4967C48.6501 49.3033 46.8768 47.53 44.6834 47.53ZM45.2434 65.0533C45.2434 65.3567 44.9868 65.6133 44.6834 65.6133H37.8934C37.5901 65.6133 37.3334 65.3567 37.3334 65.0533V51.4733C37.3334 51.17 37.5901 50.9133 37.8934 50.9133H44.6834C44.9868 50.9133 45.2434 51.17 45.2434 51.4733V65.0533Z"
            fill="#D9E6F7"
          />
          <path
            d="M91.0701 47.53H84.2801C82.0868 47.53 80.3135 49.3033 80.3135 51.4967V65.0767C80.3135 67.27 82.0868 69.0433 84.2801 69.0433H91.0701C93.2635 69.0433 95.0368 67.27 95.0368 65.0767V51.4967C95.0368 49.3033 93.2635 47.53 91.0701 47.53ZM91.6302 65.0533C91.6302 65.3567 91.3735 65.6133 91.0701 65.6133H84.2801C83.9768 65.6133 83.7202 65.3567 83.7202 65.0533V51.4733C83.7202 51.17 83.9768 50.9133 84.2801 50.9133H91.0701C91.3735 50.9133 91.6302 51.17 91.6302 51.4733V65.0533Z"
            fill="#D9E6F7"
          />
          <path
            d="M20.5334 47.6933C19.9501 47.4133 19.2501 47.4833 18.7368 47.9033L13.0668 52.4067C12.3434 52.99 12.2268 54.0633 12.8101 54.7867C13.3934 55.51 14.4668 55.6267 15.1901 55.0433L18.0834 52.7333V67.2933C18.0834 68.2267 18.8534 68.9967 19.7868 68.9967C20.7201 68.9967 21.4901 68.2267 21.4901 67.2933V49.1867C21.4901 48.5567 21.1168 47.9733 20.5334 47.6933Z"
            fill="#D9E6F7"
          />
          <path
            d="M66.9198 47.6933C66.3364 47.4133 65.6364 47.4833 65.1231 47.9033L59.4764 52.43C58.7531 53.0133 58.6364 54.0867 59.2198 54.81C59.8031 55.5333 60.8764 55.65 61.5998 55.0667L64.4931 52.7567V67.3167C64.4931 68.25 65.2631 69.02 66.1964 69.02C67.1298 69.02 67.8998 68.25 67.8998 67.3167V49.21C67.8764 48.5567 67.5031 47.9733 66.9198 47.6933Z"
            fill="#D9E6F7"
          />
        </svg>
      )
    },
    {
      name: "Обучение грамоте",
      link: "ruslit",
      img: (
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M137.314 0.195465C117.55 7.22728 85.291 27.3636 80.5228 83.1182C80.5228 83.1227 80.5228 83.1318 80.5183 83.1364C80.1864 87.45 79.9683 93.7864 79.9683 98.9091C79.9683 99.85 80.7319 100.618 81.6774 100.618C82.6228 100.618 83.3864 99.85 83.3864 98.9091C83.3864 94.2546 83.5728 88.5864 83.8546 84.4091C86.8137 83 94.9319 78.4727 96.991 70.2955C99.6137 59.8 106.982 54.5182 114.786 48.9227C126.605 40.45 140 30.8455 140 1.59546C140 0.545465 139.091 -0.427263 137.314 0.195465ZM112.796 46.15C104.468 52.1182 96.6046 57.7591 93.6819 69.4637C92.2865 75 87.3683 78.5864 84.2137 80.3818C89.5955 29.7909 118.718 10.9636 136.55 4.12728C135.827 29.6409 124.123 38.0273 112.796 46.15Z"
              fill="#D9E6F7"
            />
            <path
              d="M74.6909 98.8045C69.7591 100.091 65.5955 101.714 62.3091 103.627C61.4955 104.1 61.2364 105.136 61.6955 105.964C62.1182 106.718 63.1955 107.064 64.0318 106.577C67.0455 104.818 70.9228 103.318 75.5546 102.114C76.4637 101.873 77.0137 100.941 76.7773 100.032C76.5364 99.1091 75.6091 98.5864 74.6909 98.8045Z"
              fill="#D9E6F7"
            />
            <path
              d="M76.841 86.3727C76.6092 85.4636 75.6728 84.9182 74.7638 85.1455C70.0547 86.3545 65.8728 87.9727 62.3365 89.9545C61.5138 90.4136 61.2501 91.4364 61.6819 92.2773C62.1501 93.1954 63.291 93.3273 64.0047 92.9318C67.2956 91.1136 71.1956 89.5909 75.6138 88.4545C76.5274 88.2182 77.0774 87.2864 76.841 86.3727Z"
              fill="#D9E6F7"
            />
            <path
              d="M78.2865 72.3409C78.0774 71.4273 77.1774 70.8318 76.232 71.0727C70.7911 72.3545 66.1092 74.1136 62.3183 76.3C61.5001 76.7727 61.2047 77.8227 61.6956 78.6364C62.2092 79.4909 63.2229 79.7273 64.0274 79.2636C67.532 77.25 71.9001 75.6045 77.0229 74.3954C77.9365 74.1818 78.5047 73.2591 78.2865 72.3409Z"
              fill="#D9E6F7"
            />
            <path
              d="M81.3047 58.05C81.1138 57.1318 80.1911 56.5545 79.2911 56.7182C72.4229 58.1182 66.7183 60.1136 62.3183 62.6455C61.5001 63.1182 61.232 64.1545 61.691 64.9773C62.241 65.9636 63.4092 65.9591 64.0274 65.6045C68.1229 63.2318 73.4729 61.3909 79.9729 60.0636C80.8956 59.8773 81.4911 58.9682 81.3047 58.05Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 62.6455C42.3863 58.0591 30.6363 55.4046 15.4363 54.7682C14.4363 54.7227 13.6999 55.4636 13.659 56.4C13.6226 57.3455 14.3545 58.1409 15.2954 58.1818C33.5363 58.9409 43.5136 62.6546 48.6636 65.6046C49.5908 66.1364 50.5999 65.6773 50.9954 64.9773C51.459 64.1546 51.1772 63.1182 50.3636 62.6455Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 76.3045C42.3863 71.7182 30.6363 69.0636 15.4363 68.4273C14.4363 68.3818 13.6999 69.1227 13.659 70.0591C13.6226 71.0046 14.3545 71.8 15.2954 71.8409C33.5363 72.6 43.5136 76.3136 48.6636 79.2636C49.5908 79.7955 50.5999 79.3364 50.9954 78.6364C51.459 77.8136 51.1772 76.7773 50.3636 76.3045Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 89.9636C42.3863 85.3773 30.6363 82.7227 15.4363 82.0864C14.4363 82.0409 13.6999 82.7818 13.659 83.7182C13.6226 84.6636 14.3545 85.4591 15.2954 85.5C33.5363 86.2591 43.5136 89.9727 48.6636 92.9227C49.5908 93.4545 50.5999 92.9955 50.9954 92.2955C51.459 91.4727 51.1772 90.4364 50.3636 89.9636Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 103.623C42.3863 99.0364 30.6363 96.3818 15.4363 95.7455C14.4363 95.7 13.6999 96.4409 13.659 97.3773C13.6226 98.3227 14.3545 99.1182 15.2954 99.1591C33.5363 99.9182 43.5136 103.632 48.6636 106.582C49.5908 107.114 50.5999 106.655 50.9954 105.955C51.459 105.132 51.1772 104.095 50.3636 103.623Z"
              fill="#D9E6F7"
            />
            <path
              d="M50.3636 117.282C42.3863 112.695 30.6363 110.041 15.4363 109.405C14.4363 109.359 13.6999 110.1 13.659 111.036C13.6226 111.982 14.3545 112.777 15.2954 112.818C33.5363 113.577 43.5136 117.291 48.6636 120.241C49.5908 120.773 50.5999 120.314 50.9954 119.614C51.459 118.791 51.1772 117.755 50.3636 117.282Z"
              fill="#D9E6F7"
            />
            <path
              d="M86.3045 43.6682C86.1727 42.7273 85.2591 42.0545 84.3727 42.2227C66.6454 44.7682 59.1773 50.4636 56.3455 53.5318C52.6364 49.5 40.9591 40.9727 8.53636 40.9727C7.59091 40.9727 6.82727 41.7409 6.82727 42.6818V47.8045H1.70909C0.763636 47.8045 0 48.5727 0 49.5136V138.295C0 139.236 0.763636 140.005 1.70909 140.005H110.977C111.923 140.005 112.686 139.236 112.686 138.295V58.3227C112.686 57.3818 111.923 56.6136 110.977 56.6136C110.032 56.6136 109.268 57.3818 109.268 58.3227V136.586H65.1864C71.7864 134.923 83.6 133.173 104.145 133.173C105.091 133.173 105.855 132.405 105.855 131.464V66.1045C105.855 65.1636 105.091 64.3954 104.145 64.3954C103.2 64.3954 102.436 65.1636 102.436 66.1045V129.764C74.6409 129.891 62.8136 133.177 58.0455 135.327V56.8364C59.1045 55.3273 64.95 48.4591 84.8545 45.6C85.7909 45.4636 86.4409 44.6045 86.3045 43.6682ZM3.41364 136.586V51.2227H6.82727V131.468C6.82727 132.409 7.59091 133.177 8.53636 133.177C29.0818 133.177 40.9045 134.927 47.5 136.591H3.41364V136.586ZM54.6364 135.323C49.8682 133.177 38.0455 129.886 10.2455 129.759V44.3954C44.5682 44.7273 53.3455 55 54.6364 56.8273V135.323Z"
              fill="#D9E6F7"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="140" height="140" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    },
  ])

  return (
    <Fragment>
      <div className="wrap">
        <div className="wrap_Tasks">
          {
            (localStorage.getItem('className') === '1') || (localStorage.getItem('className') === '2') || (localStorage.getItem('className') === '3') || (localStorage.getItem('className') === '4') 
            ? lessons14b.map((i, index) => (
              <NavLink
                to={`/${i.link}`}
                key={index}
                className="item"
                onClick={() => localStorage.setItem("isLessonName", `${i.name}`)}
              >
                <div className={`item_img`}>{i.img}</div>
                <div className="item_title">{i.name}</div>
              </NavLink>
            ))
            :(localStorage.getItem('className') === '5') || (localStorage.getItem('className') === '6') 
            ? lessons56b.map((i, index) => (
              <NavLink
                to={`/${i.link}`}
                key={index}
                className="item"
                onClick={() => localStorage.setItem("isLessonName", `${i.name}`)}
              >
                <div className={`item_img`}>{i.img}</div>
                <div className="item_title">{i.name}</div>
              </NavLink>
            ))
            : (localStorage.getItem('className') === '7') || (localStorage.getItem('className') === '8')||  (localStorage.getItem('className') === '9') 
            ? lessons11b.map((i, index) => (
              <NavLink
                to={`/${i.link}`}
                key={index}
                className="item"
                onClick={() => localStorage.setItem("isLessonName", `${i.name}`)}
              >
                <div className={`item_img`}>{i.img}</div>
                <div className="item_title">{i.name}</div>
              </NavLink>
            ))
            : (localStorage.getItem('className') === '10') || (localStorage.getItem('className') === '11') 
            ? lessons11b.map((i, index) => (
              <NavLink
                to={`/${i.link}`}
                key={index}
                className="item"
                onClick={() => localStorage.setItem("isLessonName", `${i.name}`)}
              >
                <div className={`item_img`}>{i.img}</div>
                <div className="item_title">{i.name}</div>
              </NavLink>
            ))
            : null   
          }
        </div>
      </div>
    </Fragment>
  );
};

export default List;
