(self.webpackChunkfrankenworks_github_io=self.webpackChunkfrankenworks_github_io||[]).push([[511],{511:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>z});var i=l(294),a=l(394),n=l(846),o=l(884);const r=a.ZP.div`
  position: relative;
  align-self: center;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #000;
  z-index: 2;
  animation: animate 4s linear infinite;
  @keyframes animate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
`,c=a.ZP.div`
  display: inline-flex;
  margin-top: -28px;
  margin-left: 52px;
  @media (max-width: 34em) {
    margin-top: -14px;
    margin-left: 26px;
  }

  &:first-child {
    margin-top: 0;
  }

  &:nth-child(even) {
    margin-left: 1px;
  }
`,m=a.ZP.div`
  position: relative;
  border: none;
  width: 100px;
  height: 110px;
  background: #111;
  margin: 1px;
  z-index: 2;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: 2s;
  @media (max-width: 34em) {
    width: 50px;
    height: 55px;
  }

  &:hover:not(:disabled) {
    transition: 0s;
    background-color: #0f0;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    pointer-events: none;
    background: rgb(255, 255, 255, 0.02);
    z-index: 1000;
  }

  &:after {
    content: "";
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 4px;
    right: 4px;
    background-color: #111;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    z-index: 1;
  }
`,d=a.ZP.img`
  position: absolute;
  display: flex;
  top: 15px;
  left: 15px;
  z-index: 2;
  @media (max-width: 34em) {
    height: 4rem;
    top: 7px;
    left: 7px;
  }
`,p=a.ZP.img`
  position: absolute;
  display: flex;
  top: 25px;
  left: 25px;
  z-index: 2;
  @media (max-width: 34em) {
    height: 3rem;
    top: 14px;
    left: 12px;
  }
`,h=a.ZP.img`
  position: absolute;
  display: flex;
  top: 22px;
  left: 20px;
  z-index: 2;
  @media (max-width: 34em) {
    height: 3rem;
    top: 12px;
    left: 10px;
  }
`,s=a.ZP.img`
  position: absolute;
  display: flex;
  top: 24px;
  left: 23px;
  z-index: 2;
  @media (max-width: 34em) {
    height: 2.5rem;
    top: 14px;
    left: 13px;
  }
`,g=(0,a.ZP)(o.u)`
  z-index: 3;
  font-weight: bold;
  border: 1px solid white;
`,f=function({filterField:e,options:t}){return i.createElement(r,null,i.createElement(c,null,i.createElement(m,{"data-tooltip-id":"cpp-tooltip","data-tooltip-content":"C++"},i.createElement(d,{height:"80rem",src:l(975),alt:"cpp logo"})),i.createElement(g,{noArrow:!0,id:"cpp-tooltip",style:{backgroundColor:"#000",color:"#fff"}}),i.createElement(m,{"data-tooltip-id":"cs-tooltip","data-tooltip-content":"C#"},i.createElement(d,{height:"80rem",src:l(277),alt:"csharp logo"})),i.createElement(g,{noArrow:!0,id:"cs-tooltip",style:{backgroundColor:"#000",color:"#fff"}}),i.createElement(m,{"data-tooltip-id":"python-tooltip","data-tooltip-content":"Python"},i.createElement(h,{height:"60rem",src:l(650),alt:"python logo"})),i.createElement(g,{noArrow:!0,id:"python-tooltip",style:{backgroundColor:"#000",color:"#fff"}})),i.createElement(c,null,i.createElement(m,{"data-tooltip-id":"html-tooltip","data-tooltip-content":"HTML"},i.createElement(p,{height:"60rem",src:l(755),alt:"html5 logo"})),i.createElement(g,{noArrow:!0,id:"html-tooltip",style:{backgroundColor:"#000",color:"#fff"}}),i.createElement(m,{"data-tooltip-id":"css-tooltip","data-tooltip-content":"CSS"},i.createElement(p,{height:"60rem",src:l(363),alt:"css logo"})),i.createElement(g,{noArrow:!0,id:"css-tooltip",style:{backgroundColor:"#000",color:"#fff"}}),i.createElement(m,{"data-tooltip-id":"js-tooltip","data-tooltip-content":"Javascript"},i.createElement(s,{height:"55rem",src:l(737),alt:"javascript logo"})),i.createElement(g,{noArrow:!0,id:"js-tooltip",style:{backgroundColor:"#000",color:"#fff"}}),i.createElement(m,{"data-tooltip-id":"react-tooltip","data-tooltip-content":"React"},i.createElement(d,{height:"80rem",src:l(252),alt:"react logo"})),i.createElement(g,{noArrow:!0,id:"react-tooltip",style:{backgroundColor:"#000",color:"#fff"}})))},x=a.ZP.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows 1fr 1fr;
  gap: 5rem;
  align-items: center;
  height: 90vh;

  @media(max-height: 40em) {
    height: auto;
  }

  @media (max-width: 75em) {
    grid-template-columns: 1fr;
    grid-template-rows 1fr;

    @media(max-height: 61em) {
      height: auto;
    }
  }

  @media (max-width: 59em) {
    // height: auto;
  }
`,v=a.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  @media (max-width: 75em) {
    align-self: center;
  }
  @media (max-width: 34em) {
    padding: 1rem;
  }
`,u=(a.ZP.div`
  display: flex;

  flex-direction: column;
  gap: 0.25rem;
  @media (max-width: 75em) {
    align-self: center;
  }
  @media (max-width: 34em) {
    padding: 1rem;
  }
`,a.ZP.p`
  margin: 0;
  @media (max-width: 75em) {
    max-width: 40rem;
  }
  @media (max-width: 59em) {
    max-width: 30rem;
    font-size: 1rem;
  }
`),w=a.ZP.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 1rem 2rem;
`,E=a.ZP.h1`
  font-size: 2rem;
  font-weight: 500;
  @media (max-width: 59em) {
    font-size: 1.5rem;
  }
`,z=function(){return i.createElement(x,null,i.createElement(v,null,i.createElement(n.Z,{as:"h2"},"Skills"),i.createElement(v,null,i.createElement(E,null,"System Design"),i.createElement(w,null,i.createElement(u,null,"Contributed in designing for various systems from data capture to report generation"),i.createElement(u,null,"Designed and implemented an attendance tracking system using QR codes")),i.createElement(E,null,"Data Analysis"),i.createElement(w,null,i.createElement(u,null,"Experienced in data analysis tools like pivot tables and power query"),i.createElement(u,null,"Analyzed and generated reports from data related to accounting"),i.createElement(u,null)),i.createElement(E,null,"Programming"),i.createElement(w,null,i.createElement(u,null,"Experienced in development workflow and project deployment"),i.createElement(u,null,"Experienced in client communication and understanding requirements")))),i.createElement(v,null,i.createElement(n.Z,{as:"h2"},"Programming Languages"),i.createElement(f,null)),i.createElement(v,null,i.createElement(n.Z,{as:"h2"},"Other Skill Sets"),i.createElement(v,null,i.createElement(E,null,"Machine Design"),i.createElement(w,null,i.createElement(u,null,"Experienced in CAD designing for various projects"),i.createElement(u,null,"Designed wheelchair modifications for a palsy patient in 2017")),i.createElement(E,null,"Japanese Speaking"),i.createElement(w,null,i.createElement(u,null,"Born in Japan and can converse casually"),i.createElement(u,null,"Passed the JLPT N3 level in 2019")))))}},277:e=>{e.exports="data:image/svg+xml,%3csvg height='2500' preserveAspectRatio='xMidYMid' viewBox='0 -1.428 255.582 290.108' width='2222' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23fff'%3e%3cpath d='m201.892 116.294v13.474h13.474v-13.474h6.737v13.474h13.474v6.737h-13.474v13.473h13.474v6.737h-13.474v13.474h-6.737v-13.474h-13.474v13.474h-6.737v-13.474h-13.473v-6.737h13.473v-13.473h-13.473v-6.737h13.473v-13.474zm13.474 20.21h-13.474v13.474h13.474z'/%3e%3cpath d='m128.457 48.626c35.144 0 65.827 19.086 82.262 47.456l-.16-.273-41.35 23.808c-8.146-13.793-23.08-23.102-40.213-23.294l-.54-.003c-26.125 0-47.305 21.18-47.305 47.305a47.08 47.08 0 0 0 6.239 23.47c8.154 14.235 23.483 23.836 41.067 23.836 17.693 0 33.109-9.723 41.221-24.11l-.197.345 41.287 23.918c-16.255 28.13-46.518 47.157-81.253 47.536l-1.058.006c-35.255 0-66.025-19.204-82.419-47.724-8.003-13.923-12.582-30.064-12.582-47.277 0-52.466 42.532-95 95-95z'/%3e%3c/g%3e%3c/svg%3e"},975:e=>{e.exports="data:image/svg+xml,%3csvg width='2222' height='2500' viewBox='0 0 256 288' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet'%3e%3cpath d='M248.728 148.661h-9.722v9.724h-9.724v-9.724h-9.721v-9.721h9.721v-9.722h9.724v9.722h9.722v9.721M213.253 148.661h-9.721v9.724h-9.722v-9.724h-9.722v-9.721h9.722v-9.722h9.722v9.722h9.721v9.721' fill='%23FFF'/%3e%3cpath d='M164.619 164.616c-7.248 12.854-21.021 21.541-36.828 21.541-15.71 0-29.405-8.578-36.69-21.296a42.062 42.062 0 0 1-5.574-20.968c0-23.341 18.923-42.263 42.264-42.263 15.609 0 29.232 8.471 36.553 21.059l36.941-21.272c-14.683-25.346-42.096-42.398-73.494-42.398-46.876 0-84.875 38-84.875 84.874 0 15.378 4.091 29.799 11.241 42.238 14.646 25.48 42.137 42.637 73.634 42.637 31.555 0 59.089-17.226 73.714-42.781l-36.886-21.371' fill='%23FFF'/%3e%3c/svg%3e"},363:e=>{e.exports="data:image/svg+xml,%3csvg fill='none' height='2500' width='2183' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 124 141.53'%3e%3cpath d='M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z' fill='%23777'/%3e%3cpath d='M62.468 129.275V12.085l51.064.17-9.106 104.85z' fill='%23999'/%3e%3cpath d='M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z' fill='%23fff'/%3e%3c/svg%3e"},755:e=>{e.exports="data:image/svg+xml,%3csvg fill='none' height='2500' width='2183' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 124 141.53199999999998'%3e%3cpath d='M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z' fill='%23777'/%3e%3cpath d='M62.468 129.277V12.085l51.064.17-9.106 104.851z' fill='%23999'/%3e%3cpath d='M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z' fill='%23fff'/%3e%3c/svg%3e"},737:e=>{e.exports="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='2500' height='2500' viewBox='0 0 1052 1052'%3e%3cpath fill='%23fff' d='M0 0h1052v1052H0z'/%3e%3cpath d='M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z' fill='%23323330'/%3e%3c/svg%3e"},650:e=>{e.exports="data:image/svg+xml,%3csvg width='2500' height='2490' viewBox='0 0 256 255' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet'%3e%3cpath d='M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z' fill='%23ccc'/%3e%3cpath d='M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z' fill='%23fff'/%3e%3c/svg%3e"},252:e=>{e.exports="data:image/svg+xml,%3csvg height='2500' viewBox='175.7 78 490.6 436.9' width='2194' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%2361dafb'%3e%3cpath d='m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z' fill='%23fff'/%3e%3ccircle cx='420.9' cy='296.5' r='45.7' fill='%23fff'/%3e%3c/g%3e%3c/svg%3e"}}]);