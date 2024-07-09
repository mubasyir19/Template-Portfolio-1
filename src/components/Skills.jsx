import React from "react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#24253c] px-8 py-20 lg:px-28 lg:py-40 xl:px-60"
    >
      <div className="">
        <div className="">
          <p className="text-[#e85f5b]">What I Do</p>
          <h2 className="text-4xl font-semibold text-white">My Skills</h2>
          <div className="h-1 w-20 bg-[#e85f5b]"></div>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="card-services rounded-lg border-2 border-[#e85f5b] p-4">
            <svg
              className="my-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="#e85f5b"
              version="1.1"
              viewBox="0 0 511.999 511.999"
              xmlSpace="preserve"
            >
              <path d="M475.889 480.777l-43.018-86.036h23.279c9.211 0 16.679-7.468 16.679-16.679s-7.468-16.679-16.679-16.679h-39.957l-83.598-167.197a82.9 82.9 0 006.801-32.954c0-27.225-13.117-51.441-33.358-66.671V50.038C306.037 22.447 283.59 0 256 0c-27.591 0-50.038 22.447-50.038 50.038v44.523c-20.242 15.23-33.358 39.446-33.358 66.671 0 11.7 2.433 22.839 6.801 32.954L95.807 361.382H55.849c-9.211 0-16.679 7.468-16.679 16.679s7.468 16.679 16.679 16.679h23.279L36.11 480.777c-4.12 8.238-.779 18.258 7.459 22.377 41.229 20.617 91.281 3.936 111.897-37.299l35.557-71.113h48.297v16.679c0 9.211 7.468 16.679 16.679 16.679s16.679-7.468 16.679-16.679v-16.679h48.297l35.557 71.113c20.541 41.081 70.497 57.999 111.897 37.299 8.24-4.119 11.58-14.139 7.46-22.377zM239.321 50.038c0-9.197 7.482-16.679 16.679-16.679s16.679 7.482 16.679 16.679v29.477c-5.391-1.099-10.968-1.678-16.679-1.678s-11.288.579-16.679 1.678V50.038zM256 111.195c27.591 0 50.038 22.447 50.038 50.038 0 26.48-20.68 48.208-46.735 49.916a16.452 16.452 0 00-6.605 0c-26.056-1.708-46.735-23.436-46.735-49.916-.001-27.592 22.446-50.038 50.037-50.038zM125.63 450.936c-9.947 19.897-30.972 29.816-50.957 27.306l41.751-83.502h37.305l-28.099 56.196zm44.777-89.554h-37.305l68.507-137.012c8.422 7.265 18.296 12.885 29.135 16.338l-60.337 120.674zm102.272 0v-16.679c0-9.211-7.468-16.679-16.679-16.679-9.211 0-16.679 7.468-16.679 16.679v16.679h-31.618L256 264.789l48.297 96.594h-31.618zm68.914 0l-60.338-120.674c10.84-3.453 20.713-9.073 29.135-16.339l68.506 137.013h-37.303zm44.777 89.554l-28.098-56.195h37.304l41.751 83.502c-19.956 2.507-40.996-7.384-50.957-27.307z"></path>
            </svg>
            <h3 className="mt-6 text-xl font-medium text-white">
              Creative Design
            </h3>
            <p className="mt-2 text-justify text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              ipsa, placeat, alias quibusdam minus officia accusamus magni,
            </p>
          </div>
          <div className="card-services rounded-lg border-2 border-[#e85f5b] p-4">
            <svg
              className="my-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="#e85f5b"
              viewBox="0 0 36 36"
            >
              <path d="M30.86 20.94a4.74 4.74 0 011.86.64h.05a15.12 15.12 0 00-.61-8.37 1 1 0 00-1.28-.59 1 1 0 00-.59 1.28 13.19 13.19 0 01.57 7.04zM26.33 28.58a13 13 0 01-6.07 2.82 1 1 0 10.17 2h.18a15.16 15.16 0 007.21-3.4v-.07a4.67 4.67 0 01-1.49-1.35zM15.62 31.34a13.19 13.19 0 01-4.29-1.61 15.44 15.44 0 01-1.63-1.11A4.69 4.69 0 018.24 30a15.9 15.9 0 002.07 1.48 15.4 15.4 0 004.94 1.86h.19a1 1 0 00.18-2zM4.56 21.15a4.14 4.14 0 00.6-.09A13 13 0 015.7 14a1 1 0 00-1.88-.69 15 15 0 00-.56 8.43 4.77 4.77 0 011.3-.59z"></path>
              <path d="M31.9 23a3.2 3.2 0 00-2.43-.42 3.27 3.27 0 00-1.4.77l-3.87-2.24a6.87 6.87 0 00-2.77-8.43l-.11-.07a6.6 6.6 0 00-2.42-.81V8a3.22 3.22 0 001.88-1.5A3.3 3.3 0 0019.65 2a3.15 3.15 0 00-2.42-.32 3.24 3.24 0 00-2 1.51 3.3 3.3 0 001.13 4.46 2.86 2.86 0 00.74.35v3.8a6.64 6.64 0 00-4.86 3.28 6.85 6.85 0 00-.42 6l-4 2.29a3.79 3.79 0 00-.45-.34A3.2 3.2 0 003 24.21a3.3 3.3 0 001.1 4.46 3.21 3.21 0 001.65.46 2.93 2.93 0 00.78-.1 3.24 3.24 0 002.29-4.11l3.88-2.24a7.06 7.06 0 001.89 1.71 6.49 6.49 0 008.73-1.7l3.83 2.21a3.29 3.29 0 001.45 3.64 3.15 3.15 0 001.64.46A3.17 3.17 0 0033 27.41 3.3 3.3 0 0031.9 23zM7 26.62a1.4 1.4 0 01-.91.64A1.36 1.36 0 015 27.11a1.48 1.48 0 01-.5-2 1.4 1.4 0 01.88-.66 1.33 1.33 0 01.34-.05 1.4 1.4 0 01.75.22 1.48 1.48 0 01.53 2zm9.78-22.53a1.4 1.4 0 01.88-.66 1.33 1.33 0 01.34-.05 1.42 1.42 0 01.72.2 1.48 1.48 0 01.5 2 1.4 1.4 0 01-.88.66 1.36 1.36 0 01-1.06-.15 1.48 1.48 0 01-.5-2zm2.41 19.32a4.79 4.79 0 01-3.68-.54A5.07 5.07 0 0113.78 16 4.88 4.88 0 0118 13.57a4.81 4.81 0 012.46.67 5.07 5.07 0 011.73 6.87 4.86 4.86 0 01-3 2.3zm12.25 3.08a1.45 1.45 0 01-.88.67A1.36 1.36 0 0129.5 27a1.48 1.48 0 01-.5-2 1.39 1.39 0 01.9-.72 1.93 1.93 0 01.34 0 1.31 1.31 0 01.69.19 1.48 1.48 0 01.51 2.02zM8.05 10a13 13 0 015.35-3.77 5 5 0 01-.17-2.07 15.15 15.15 0 00-6.7 4.51A1 1 0 008.05 10z"></path>
              <path d="M24.67 7.23A13.11 13.11 0 0127.93 10a1 1 0 101.52-1.3 15 15 0 00-3.76-3.2 15.87 15.87 0 00-2.94-1.33 4.79 4.79 0 01-.15 2.06 14.1 14.1 0 012.07 1z"></path>
              <path fillOpacity="0" d="M0 0H36V36H0z"></path>
            </svg>
            <h3 className="mt-6 text-xl font-medium text-white">
              Internet Of Things (IoT)
            </h3>
            <p className="mt-2 text-justify text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              ipsa, placeat, alias quibusdam minus officia accusamus magni,
            </p>
          </div>
          <div className="card-services rounded-lg border-2 border-[#e85f5b] p-4">
            <svg
              className="my-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="#e85f5b"
              version="1.1"
              viewBox="0 0 419.931 419.931"
              xmlSpace="preserve"
            >
              <path d="M282.895 352.367a18.64 18.64 0 01-5.579-5.25 18.972 18.972 0 01-1.771-3.125H28.282V100.276h335.624v159.138c7.165.647 13.177 5.353 15.701 11.797a18.66 18.66 0 017.344-2.213 18.654 18.654 0 015.236.293V39.561c0-12.996-10.571-23.569-23.566-23.569H23.568C10.573 15.992 0 26.565 0 39.561v309.146c0 12.996 10.573 23.568 23.568 23.568h257.179a18.522 18.522 0 01-1.302-13.066 18.643 18.643 0 013.45-6.842zm55.13-296.798a8.703 8.703 0 018.702-8.703h8.702a8.702 8.702 0 018.702 8.703v9.863a8.702 8.702 0 01-8.702 8.702h-8.702a8.701 8.701 0 01-8.702-8.702v-9.863zm-40.465 0a8.703 8.703 0 018.702-8.703h8.703a8.702 8.702 0 018.702 8.703v9.863a8.702 8.702 0 01-8.702 8.702h-8.703a8.702 8.702 0 01-8.702-8.702v-9.863zm-40.466 0a8.703 8.703 0 018.702-8.703h8.702a8.702 8.702 0 018.703 8.703v9.863a8.702 8.702 0 01-8.703 8.702h-8.702a8.703 8.703 0 01-8.702-8.702v-9.863z"></path>
              <path d="M419.875 335.77l-2.615-14.83a3.673 3.673 0 00-4.255-2.979l-13.188 2.324a49.468 49.468 0 00-6.005-10.38l8.614-10.268a3.672 3.672 0 00.847-2.68 3.682 3.682 0 00-1.3-2.494l-11.534-9.68a3.678 3.678 0 00-5.176.453l-8.606 10.26a49.3 49.3 0 00-11.271-4.104V278a3.675 3.675 0 00-3.673-3.674h-15.06A3.675 3.675 0 00342.98 278v13.392a49.253 49.253 0 00-11.271 4.104l-8.608-10.259a3.674 3.674 0 00-5.175-.453l-11.535 9.679a3.681 3.681 0 00-1.299 2.494c-.084.971.22 1.937.846 2.683l8.615 10.266a49.643 49.643 0 00-6.005 10.38l-13.188-2.325a3.677 3.677 0 00-4.255 2.979l-2.614 14.83a3.671 3.671 0 002.977 4.255l13.198 2.326a49.466 49.466 0 002.073 11.812l-11.6 6.695a3.67 3.67 0 00-1.345 5.016l7.529 13.041a3.665 3.665 0 003.18 1.836c.639 0 1.272-.166 1.836-.492l11.609-6.703a49.482 49.482 0 009.18 7.709l-4.584 12.593c-.332.916-.289 1.926.123 2.809s1.157 1.566 2.072 1.898l14.148 5.149a3.669 3.669 0 004.708-2.194l4.583-12.593a49.83 49.83 0 0011.988 0l4.584 12.593a3.668 3.668 0 004.707 2.194l14.15-5.149a3.674 3.674 0 002.193-4.707l-4.584-12.591a49.756 49.756 0 009.18-7.709l11.609 6.703a3.683 3.683 0 002.787.367 3.672 3.672 0 002.229-1.711l7.529-13.043a3.677 3.677 0 00.367-2.787 3.681 3.681 0 00-1.712-2.229l-11.598-6.693a49.482 49.482 0 002.071-11.812l13.198-2.327a3.664 3.664 0 002.37-1.511 3.6 3.6 0 00.629-2.745zm-65.691 23.566c-11.155 0-20.2-9.045-20.2-20.201s9.046-20.2 20.2-20.2c11.156 0 20.201 9.044 20.201 20.2s-9.045 20.201-20.201 20.201zM164.695 235.373a12.3 12.3 0 00-7.096-11.119l-39.455-18.332 39.456-18.334a12.304 12.304 0 007.095-11.118v-.319c0-4.21-2.119-8.075-5.665-10.334a12.248 12.248 0 00-6.606-1.916c-1.778 0-3.563.391-5.16 1.133l-63.078 29.333a12.303 12.303 0 00-7.092 11.117v.877c0 4.743 2.782 9.104 7.093 11.118l63.084 29.336a12.265 12.265 0 0011.759-.786 12.213 12.213 0 005.666-10.335l-.001-.321zM226.932 134.012a12.301 12.301 0 00-9.901-5.03h-.314a12.224 12.224 0 00-11.679 8.516l-41.56 128.772a12.317 12.317 0 001.781 10.962 12.306 12.306 0 009.901 5.029h.315a12.217 12.217 0 0011.672-8.516l41.555-128.762a12.29 12.29 0 00-1.77-10.971zM308.001 194.366l-63.079-29.333a12.303 12.303 0 00-5.152-1.131c-2.358 0-4.644.661-6.605 1.912a12.2 12.2 0 00-5.671 10.337v.319c0 4.746 2.783 9.111 7.097 11.123l39.454 18.33-39.455 18.331a12.3 12.3 0 00-7.096 11.119v.321c0 4.205 2.119 8.066 5.669 10.336a12.25 12.25 0 006.595 1.923c1.792 0 3.527-.383 5.169-1.141l63.082-29.336c4.307-2.009 7.088-6.371 7.088-11.114v-.877a12.313 12.313 0 00-7.096-11.119z"></path>
            </svg>
            <h3 className="mt-6 text-xl font-medium text-white">
              Web Development
            </h3>
            <p className="mt-2 text-justify text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              ipsa, placeat, alias quibusdam minus officia accusamus magni,
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full">
        <h2 className="text-center text-3xl font-semibold text-white">
          Technology That I Use
        </h2>
        <div className="mt-8 grid grid-cols-2 place-items-center gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {/* NodeJS */}
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="80"
              height="80"
              preserveAspectRatio="xMidYMid"
              viewBox="0 -99 512 512"
            >
              <defs>
                <linearGradient
                  id="b"
                  x1="68.188%"
                  x2="27.823%"
                  y1="17.487%"
                  y2="89.755%"
                >
                  <stop offset="0%" stopColor="#41873F"></stop>
                  <stop offset="32.88%" stopColor="#418B3D"></stop>
                  <stop offset="63.52%" stopColor="#419637"></stop>
                  <stop offset="93.19%" stopColor="#3FA92D"></stop>
                  <stop offset="100%" stopColor="#3FAE2A"></stop>
                </linearGradient>
                <path
                  id="a"
                  d="M57.903 1.85a5.957 5.957 0 00-5.894 0L3.352 29.933c-1.85 1.04-2.89 3.005-2.89 5.085v56.286c0 2.08 1.156 4.045 2.89 5.085l48.657 28.085a5.957 5.957 0 005.894 0l48.658-28.085c1.849-1.04 2.89-3.005 2.89-5.085V35.019c0-2.08-1.157-4.045-2.89-5.085L57.903 1.85z"
                ></path>
                <linearGradient
                  id="d"
                  x1="43.277%"
                  x2="159.245%"
                  y1="55.169%"
                  y2="-18.306%"
                >
                  <stop offset="13.76%" stopColor="#41873F"></stop>
                  <stop offset="40.32%" stopColor="#54A044"></stop>
                  <stop offset="71.36%" stopColor="#66B848"></stop>
                  <stop offset="90.81%" stopColor="#6CC04A"></stop>
                </linearGradient>
                <linearGradient
                  id="e"
                  x1="-4413.77%"
                  x2="5327.93%"
                  y1="13.43%"
                  y2="13.43%"
                >
                  <stop offset="9.192%" stopColor="#6CC04A"></stop>
                  <stop offset="28.64%" stopColor="#66B848"></stop>
                  <stop offset="59.68%" stopColor="#54A044"></stop>
                  <stop offset="86.24%" stopColor="#41873F"></stop>
                </linearGradient>
                <linearGradient
                  id="f"
                  x1="-4.389%"
                  x2="101.499%"
                  y1="49.997%"
                  y2="49.997%"
                >
                  <stop offset="9.192%" stopColor="#6CC04A"></stop>
                  <stop offset="28.64%" stopColor="#66B848"></stop>
                  <stop offset="59.68%" stopColor="#54A044"></stop>
                  <stop offset="86.24%" stopColor="#41873F"></stop>
                </linearGradient>
                <linearGradient
                  id="g"
                  x1="-9713.77%"
                  x2="27.93%"
                  y1="36.21%"
                  y2="36.21%"
                >
                  <stop offset="9.192%" stopColor="#6CC04A"></stop>
                  <stop offset="28.64%" stopColor="#66B848"></stop>
                  <stop offset="59.68%" stopColor="#54A044"></stop>
                  <stop offset="86.24%" stopColor="#41873F"></stop>
                </linearGradient>
                <linearGradient
                  id="h"
                  x1="-103.861%"
                  x2="100.797%"
                  y1="50.275%"
                  y2="50.275%"
                >
                  <stop offset="9.192%" stopColor="#6CC04A"></stop>
                  <stop offset="28.64%" stopColor="#66B848"></stop>
                  <stop offset="59.68%" stopColor="#54A044"></stop>
                  <stop offset="86.24%" stopColor="#41873F"></stop>
                </linearGradient>
                <linearGradient
                  id="i"
                  x1="130.613%"
                  x2="4.393%"
                  y1="-211.069%"
                  y2="201.605%"
                >
                  <stop offset="0%" stopColor="#41873F"></stop>
                  <stop offset="32.88%" stopColor="#418B3D"></stop>
                  <stop offset="63.52%" stopColor="#419637"></stop>
                  <stop offset="93.19%" stopColor="#3FA92D"></stop>
                  <stop offset="100%" stopColor="#3FAE2A"></stop>
                </linearGradient>
              </defs>
              <g fill="none">
                <path
                  fill="#539E43"
                  d="M253.11 313.094c-1.733 0-3.351-.462-4.854-1.271l-15.371-9.13c-2.312-1.272-1.156-1.734-.462-1.965 3.12-1.04 3.698-1.272 6.934-3.12.347-.232.81-.116 1.156.115l11.789 7.05c.462.231 1.04.231 1.386 0l46.115-26.698c.462-.231.694-.694.694-1.271v-53.28c0-.579-.232-1.04-.694-1.272l-46.115-26.582c-.462-.232-1.04-.232-1.386 0l-46.115 26.582c-.462.231-.694.809-.694 1.271v53.28c0 .463.232 1.04.694 1.272l12.598 7.281c6.819 3.467 11.095-.578 11.095-4.623v-52.587c0-.693.578-1.387 1.387-1.387h5.894c.694 0 1.387.578 1.387 1.387v52.587c0 9.13-4.97 14.447-13.638 14.447-2.658 0-4.738 0-10.633-2.89l-12.135-6.934c-3.005-1.733-4.854-4.97-4.854-8.437v-53.28c0-3.467 1.849-6.704 4.854-8.437l46.114-26.698c2.89-1.618 6.82-1.618 9.709 0l46.114 26.698c3.005 1.733 4.855 4.97 4.855 8.437v53.28c0 3.467-1.85 6.704-4.855 8.437l-46.114 26.698c-1.503.694-3.236 1.04-4.854 1.04zm14.216-36.637c-20.225 0-24.386-9.246-24.386-17.105 0-.694.578-1.387 1.387-1.387h6.01c.693 0 1.271.462 1.271 1.156.925 6.125 3.583 9.13 15.834 9.13 9.708 0 13.87-2.196 13.87-7.397 0-3.005-1.157-5.2-16.297-6.703-12.598-1.272-20.457-4.045-20.457-14.1 0-9.362 7.86-14.91 21.035-14.91 14.793 0 22.075 5.086 23 16.18 0 .348-.116.694-.347 1.041-.232.231-.578.462-.925.462h-6.01c-.578 0-1.156-.462-1.271-1.04-1.387-6.356-4.97-8.437-14.447-8.437-10.633 0-11.905 3.699-11.905 6.472 0 3.352 1.503 4.392 15.834 6.241 14.216 1.85 20.92 4.508 20.92 14.447-.116 10.171-8.437 15.95-23.116 15.95z"
                ></path>
                <path
                  fill="#333"
                  d="M110.028 104.712c0-2.08-1.156-4.046-3.005-5.086l-49.004-28.2c-.81-.463-1.734-.694-2.658-.81h-.463c-.924 0-1.849.347-2.658.81l-49.004 28.2c-1.85 1.04-3.005 3.005-3.005 5.086l.116 75.817c0 1.04.578 2.08 1.502 2.543.925.578 2.08.578 2.89 0l29.125-16.643c1.849-1.04 3.005-3.005 3.005-5.085v-35.482c0-2.08 1.155-4.045 3.005-5.085l12.366-7.166c.925-.578 1.965-.81 3.005-.81 1.04 0 2.08.232 2.89.81l12.366 7.166c1.85 1.04 3.005 3.004 3.005 5.085v35.482c0 2.08 1.156 4.045 3.005 5.085l29.125 16.643a2.82 2.82 0 003.005 0c.925-.463 1.503-1.503 1.503-2.543l-.116-75.817zM345.571.347c-.924-.463-2.08-.463-2.89 0-.924.578-1.502 1.502-1.502 2.542v75.125c0 .693-.346 1.386-1.04 1.849-.693.346-1.387.346-2.08 0l-12.251-7.05a5.957 5.957 0 00-5.895 0l-49.004 28.316c-1.849 1.04-3.005 3.005-3.005 5.085v56.516c0 2.08 1.156 4.046 3.005 5.086l49.004 28.316a5.957 5.957 0 005.895 0l49.004-28.316c1.849-1.04 3.005-3.005 3.005-5.086V21.844c0-2.196-1.156-4.16-3.005-5.201L345.572.347zm-4.507 143.776c0 .578-.231 1.04-.694 1.271l-16.758 9.708a1.714 1.714 0 01-1.503 0l-16.758-9.708c-.463-.231-.694-.809-.694-1.271v-19.417c0-.578.231-1.04.694-1.271l16.758-9.709a1.714 1.714 0 011.503 0l16.758 9.709c.463.23.694.809.694 1.271v19.417zm167.584-19.879c1.85-1.04 2.89-3.005 2.89-5.086v-13.753c0-2.08-1.156-4.045-2.89-5.085l-48.657-28.2a5.957 5.957 0 00-5.894 0l-49.004 28.315c-1.85 1.04-3.005 3.005-3.005 5.086v56.516c0 2.08 1.155 4.045 3.005 5.085l48.657 27.738c1.85 1.04 4.045 1.04 5.779 0L489 178.45c.925-.463 1.503-1.503 1.503-2.543 0-1.04-.578-2.08-1.503-2.543l-49.235-28.316c-.924-.577-1.502-1.502-1.502-2.542v-17.683c0-1.04.578-2.08 1.502-2.543l15.372-8.784a2.821 2.821 0 013.005 0l15.371 8.784c.925.578 1.503 1.502 1.503 2.543v13.869c0 1.04.578 2.08 1.502 2.542a2.82 2.82 0 003.005 0l29.125-16.99z"
                ></path>
                <path
                  fill="#539E43"
                  d="M456.293 121.586a1.05 1.05 0 011.155 0l9.362 5.432c.347.23.578.577.578 1.04v10.864c0 .462-.231.809-.578 1.04l-9.362 5.432a1.05 1.05 0 01-1.155 0l-9.362-5.432c-.347-.231-.578-.578-.578-1.04v-10.864c0-.463.231-.81.578-1.04l9.362-5.432z"
                ></path>
                <g transform="translate(134.068 70.501)">
                  <mask id="c" fill="#fff">
                    <use xlinkHref="#a"></use>
                  </mask>
                  <use fill="url(#b)" xlinkHref="#a"></use>
                  <g mask="url(#c)">
                    <path d="M51.893 1.85L3.121 29.933C1.27 30.974 0 32.94 0 35.02v56.286c0 1.387.578 2.658 1.502 3.698L56.285 1.156c-1.387-.231-3.005-.116-4.392.693zm4.739 123.203c.462-.116.925-.347 1.387-.578l48.773-28.085c1.85-1.04 3.005-3.005 3.005-5.085V35.019c0-1.502-.694-3.005-1.734-4.045l-51.43 94.079z"></path>
                    <path
                      fill="url(#d)"
                      d="M106.676 29.934L57.788 1.85a8.025 8.025 0 00-1.503-.578L1.502 95.12a6.082 6.082 0 001.619 1.387l48.888 28.085c1.387.809 3.005 1.04 4.507.577l51.432-94.078c-.347-.462-.81-.81-1.272-1.156z"
                    ></path>
                  </g>
                  <g mask="url(#c)">
                    <path d="M109.797 91.305V35.019c0-2.08-1.271-4.045-3.12-5.085L57.786 1.85a5.106 5.106 0 00-1.848-.693l53.511 91.42c.231-.347.347-.809.347-1.271zM3.12 29.934C1.272 30.974 0 32.94 0 35.02v56.286c0 2.08 1.387 4.045 3.12 5.085l48.889 28.085c1.156.693 2.427.925 3.814.693L3.467 29.818l-.346.116z"></path>
                    <path
                      fill="url(#e)"
                      fillRule="evenodd"
                      d="M50.391.809l-.693.347h.924l-.231-.347z"
                      transform="translate(0 -9.246)"
                    ></path>
                    <path
                      fill="url(#f)"
                      fillRule="evenodd"
                      d="M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.053 10.402c-1.387-.231-2.89-.116-4.16.693L3.351 39.065l52.355 95.465a8.057 8.057 0 002.196-.693l48.889-28.2z"
                      transform="translate(0 -9.246)"
                    ></path>
                    <path
                      fill="url(#g)"
                      fillRule="evenodd"
                      d="M111.3 104.712l-.347-.578v.809l.346-.231z"
                      transform="translate(0 -9.246)"
                    ></path>
                    <path
                      fill="url(#h)"
                      fillRule="evenodd"
                      d="M106.792 105.636l-48.773 28.085a6.973 6.973 0 01-2.196.693l.925 1.734 54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z"
                      transform="translate(0 -9.246)"
                    ></path>
                    <path
                      fill="url(#i)"
                      fillRule="evenodd"
                      d="M106.792 105.636l-48.773 28.085a6.973 6.973 0 01-2.196.693l.925 1.734 54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z"
                      transform="translate(0 -9.246)"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          {/* HTML5 */}
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="none"
              viewBox="0 0 32 32"
            >
              <path fill="#E44D26" d="M6 28L4 3h24l-2 25-10 3-10-3z"></path>
              <path fill="#F16529" d="M26 5H16v24.5l8-2.5 2-22z"></path>
              <path
                fill="#fff"
                d="M9.5 17.5L8.5 8H24l-.5 3h-12l.5 3.5h11L22 24l-6 2-6-2-.5-5h3l.5 2.5 3 1 3-1 .5-4h-10z"
              ></path>
            </svg>
          </div>
          {/* JS */}
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="none"
              viewBox="0 0 32 32"
            >
              <path fill="#FFCA28" d="M2 2H30V30H2z"></path>
              <path
                fill="#3E3E3E"
                d="M19 25.288l2.061-1.364c.162.507 1.185 1.713 2.477 1.713 1.293 0 1.893-.706 1.893-1.174 0-1.275-1.32-1.725-1.954-1.94a3.689 3.689 0 01-.246-.09 3.68 3.68 0 00-.133-.053c-.705-.269-3.306-1.262-3.306-4.143 0-3.172 3.062-3.537 3.754-3.537.453 0 2.63.056 3.716 2.094l-2 1.396c-.439-.889-1.167-1.182-1.616-1.182-1.108 0-1.338.812-1.338 1.182 0 1.037 1.203 1.502 2.22 1.894.265.103.518.2.734.303 1.107.523 2.738 1.38 2.738 4.076C28 25.813 26.867 28 24.015 28c-3.83 0-4.846-2.3-5.015-2.712zM9 25.559l2.149-1.364c.168.508.822 1.443 1.772 1.443.949 0 1.435-.975 1.435-1.443V15h2.642v9.195c.043 1.269-.66 3.805-3.765 3.805C10.38 28 9.193 26.304 9 25.56z"
              ></path>
            </svg>
          </div>
          {/* Tailwindcss */}
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              preserveAspectRatio="xMidYMid"
              viewBox="0 -51 256 256"
            >
              <defs>
                <linearGradient
                  id="linearGradient-1"
                  x1="-2.778%"
                  x2="100%"
                  y1="32%"
                  y2="67.556%"
                >
                  <stop offset="0%" stopColor="#2298BD"></stop>
                  <stop offset="100%" stopColor="#0ED7B5"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#linearGradient-1)"
                d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
              ></path>
            </svg>
          </div>
          {/* NextJS */}
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="none"
              viewBox="0 0 24 24"
            >
              <g clipPath="url(#clip0)">
                <path
                  fill="#000"
                  d="M11.214.006c-.052.005-.216.022-.364.033C7.442.347 4.25 2.186 2.226 5.013a11.88 11.88 0 00-2.118 5.243c-.096.66-.108.854-.108 1.748s.012 1.089.108 1.748c.652 4.507 3.86 8.293 8.209 9.696.779.251 1.6.422 2.533.526.364.04 1.936.04 2.3 0 1.611-.179 2.977-.578 4.323-1.265.207-.105.247-.134.219-.157-.02-.014-.899-1.194-1.955-2.62l-1.919-2.593-2.404-3.559a342.499 342.499 0 00-2.422-3.556c-.009-.003-.018 1.578-.023 3.51-.007 3.38-.01 3.516-.052 3.596a.426.426 0 01-.206.213c-.075.038-.14.045-.495.045H7.81l-.108-.068a.44.44 0 01-.157-.172l-.05-.105.005-4.704.007-4.706.073-.092a.644.644 0 01.174-.143c.096-.047.133-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 2 2.895 4.362l4.734 7.172 1.9 2.878.097-.063a12.318 12.318 0 002.465-2.163 11.947 11.947 0 002.825-6.135c.096-.66.108-.854.108-1.748s-.012-1.088-.108-1.748C23.24 5.75 20.032 1.963 15.683.56a12.6 12.6 0 00-2.498-.523c-.226-.024-1.776-.05-1.97-.03zm4.913 7.26a.473.473 0 01.237.276c.018.06.023 1.365.018 4.305l-.007 4.218-.743-1.14-.746-1.14v-3.066c0-1.983.009-3.097.023-3.151a.478.478 0 01.232-.296c.097-.05.132-.054.5-.054.347 0 .408.005.486.047z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <path fill="#fff" d="M0 0H24V24H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>
          {/* ReactJS */}
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 32 32"
            >
              <circle cx="16" cy="15.974" r="2.5" fill="#00d8ff"></circle>
              <path
                fill="#00d8ff"
                d="M16 21.706a28.385 28.385 0 01-8.88-1.2 11.3 11.3 0 01-3.657-1.958A3.543 3.543 0 012 15.974c0-1.653 1.816-3.273 4.858-4.333A28.755 28.755 0 0116 10.293a28.674 28.674 0 019.022 1.324 11.376 11.376 0 013.538 1.866A3.391 3.391 0 0130 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 01-8.7 1.191zm0-10.217a27.948 27.948 0 00-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2 0 .928 1.349 2.387 4.311 3.4A27.21 27.21 0 0016 20.51a27.6 27.6 0 008.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.327 2.327 0 00-1.01-1.573 10.194 10.194 0 00-3.161-1.654A27.462 27.462 0 0016 11.489z"
              ></path>
              <path
                fill="#00d8ff"
                d="M10.32 28.443a2.639 2.639 0 01-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755 28.755 0 013.4-8.593 28.676 28.676 0 015.653-7.154 11.376 11.376 0 013.384-2.133 3.391 3.391 0 012.878 0c1.489.858 1.982 3.486 1.287 6.859a28.806 28.806 0 01-3.316 8.133 28.385 28.385 0 01-5.476 7.093 11.3 11.3 0 01-3.523 2.189 4.926 4.926 0 01-1.624.307zm1.773-14.7a27.948 27.948 0 00-3.26 8.219c-.553 2.915-.022 4.668.75 5.114.8.463 2.742.024 5.1-2.036a27.209 27.209 0 005.227-6.79 27.6 27.6 0 003.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327 2.327 0 00-1.868.089A10.194 10.194 0 0017.5 6.9a27.464 27.464 0 00-5.4 6.849z"
              ></path>
              <path
                fill="#00d8ff"
                d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.756 28.756 0 01-5.747-7.237 28.676 28.676 0 01-3.374-8.471 11.376 11.376 0 01-.158-4A3.391 3.391 0 018.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 015.39 6.934 28.384 28.384 0 013.41 8.287 11.3 11.3 0 01.137 4.146 3.543 3.543 0 01-1.494 2.555 2.59 2.59 0 01-1.315.324zm-9.58-10.2a27.949 27.949 0 005.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9.8-.465 1.39-2.363.782-5.434A27.212 27.212 0 0019.9 13.74a27.6 27.6 0 00-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.327 2.327 0 00-.855 1.662 10.194 10.194 0 00.153 3.565 27.465 27.465 0 003.236 8.1z"
              ></path>
            </svg>
          </div>
          {/* MySQL */}
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="-18.458 -22.75 191.151 191.151"
            >
              <path
                fill="none"
                d="M-18.458 6.58h191.151v132.49H-18.458V6.58z"
              ></path>
              <path
                fill="#5d87a1"
                d="M40.054 113.583h-5.175c-.183-8.735-.687-16.947-1.511-24.642h-.046l-7.879 24.642h-3.94l-7.832-24.642h-.045c-.581 7.388-.947 15.602-1.099 24.642H7.81c.304-10.993 1.068-21.299 2.289-30.919h6.414l7.465 22.719h.046l7.511-22.719h6.137c1.344 11.268 2.138 21.575 2.382 30.919m22.443-22.812c-2.107 11.434-4.887 19.742-8.337 24.928-2.688 3.992-5.633 5.99-8.84 5.99-.855 0-1.91-.258-3.16-.77v-2.757c.611.088 1.328.138 2.152.138 1.498 0 2.702-.412 3.62-1.238 1.098-1.006 1.647-2.137 1.647-3.388 0-.858-.428-2.612-1.282-5.268L42.618 90.77h5.084l4.076 13.19c.916 2.995 1.298 5.086 1.145 6.277 2.229-5.953 3.786-12.444 4.673-19.468h4.901v.002z"
              ></path>
              <path
                fill="#f8981d"
                d="M131.382 113.583h-14.7V82.664h4.945v27.113h9.755v3.806zm-18.548.747l-5.684-2.805c.504-.414.986-.862 1.42-1.381 2.416-2.838 3.621-7.035 3.621-12.594 0-10.229-4.014-15.346-12.045-15.346-3.938 0-7.01 1.298-9.207 3.895-2.414 2.84-3.619 7.022-3.619 12.551 0 5.435 1.068 9.422 3.205 11.951 1.955 2.291 4.902 3.438 8.843 3.438 1.47 0 2.819-.18 4.048-.543l7.4 4.308 2.018-3.474zm-18.413-6.934c-1.252-2.014-1.878-5.248-1.878-9.707 0-7.785 2.365-11.682 7.1-11.682 2.475 0 4.289.932 5.449 2.792 1.25 2.017 1.879 5.222 1.879 9.619 0 7.849-2.367 11.774-7.099 11.774-2.476.001-4.29-.928-5.451-2.796m-9.256-2.383c0 2.622-.962 4.773-2.884 6.458-1.924 1.678-4.504 2.519-7.737 2.519-3.024 0-5.956-.966-8.794-2.888l1.329-2.655c2.442 1.223 4.653 1.831 6.638 1.831 1.863 0 3.319-.413 4.375-1.232 1.055-.822 1.684-1.975 1.684-3.433 0-1.837-1.281-3.407-3.631-4.722-2.167-1.19-6.501-3.678-6.501-3.678-2.349-1.712-3.525-3.55-3.525-6.578 0-2.506.877-4.529 2.632-6.068 1.757-1.545 4.024-2.315 6.803-2.315 2.87 0 5.479.769 7.829 2.291l-1.192 2.656c-2.01-.854-3.994-1.281-5.951-1.281-1.585 0-2.809.381-3.66 1.146-.858.762-1.387 1.737-1.387 2.933 0 1.828 1.308 3.418 3.722 4.759 2.196 1.192 6.638 3.723 6.638 3.723 2.409 1.709 3.612 3.53 3.612 6.534"
              ></path>
              <path
                fill="#5d87a1"
                d="M137.59 72.308c-2.99-.076-5.305.225-7.248 1.047-.561.224-1.453.224-1.531.933.303.3.338.784.601 1.198.448.747 1.229 1.752 1.942 2.276.783.6 1.569 1.194 2.393 1.717 1.453.899 3.1 1.422 4.516 2.318.825.521 1.645 1.195 2.471 1.756.406.299.666.784 1.193.971v-.114c-.264-.336-.339-.822-.598-1.196l-1.122-1.082c-1.084-1.456-2.431-2.727-3.884-3.771-1.196-.824-3.812-1.944-4.297-3.322l-.076-.076c.822-.077 1.797-.375 2.578-.604 1.271-.335 2.43-.259 3.734-.594.6-.15 1.195-.338 1.797-.523v-.337c-.676-.673-1.158-1.567-1.869-2.203-1.902-1.643-3.998-3.25-6.164-4.595-1.16-.749-2.652-1.231-3.887-1.868-.445-.225-1.195-.336-1.457-.71-.67-.822-1.047-1.904-1.533-2.877-1.08-2.053-2.129-4.331-3.061-6.502-.674-1.456-1.084-2.91-1.906-4.257-3.85-6.35-8.031-10.196-14.457-13.971-1.381-.786-3.024-1.121-4.779-1.533l-2.803-.148c-.598-.262-1.197-.973-1.719-1.309-2.132-1.344-7.621-4.257-9.189-.411-1.01 2.431 1.494 4.821 2.354 6.054.635.856 1.458 1.83 1.902 2.802.263.635.337 1.309.6 1.98.598 1.644 1.157 3.473 1.943 5.007.41.782.857 1.604 1.381 2.312.3.414.822.597.936 1.272-.521.744-.562 1.867-.861 2.801-1.344 4.221-.819 9.45 1.086 12.552.596.934 2.018 2.99 3.92 2.202 1.684-.672 1.311-2.801 1.795-4.668.111-.451.038-.747.262-1.043v.073c.521 1.045 1.047 2.052 1.53 3.1 1.159 1.829 3.177 3.735 4.858 5.002.895.676 1.604 1.832 2.725 2.245V74.1h-.074c-.227-.335-.559-.485-.857-.745-.674-.673-1.42-1.495-1.943-2.241-1.566-2.093-2.952-4.41-4.182-6.801-.602-1.16-1.121-2.428-1.606-3.586-.226-.447-.226-1.121-.601-1.346-.562.821-1.381 1.532-1.791 2.538-.711 1.609-.785 3.588-1.049 5.646l-.147.072c-1.19-.299-1.604-1.53-2.056-2.575-1.119-2.654-1.307-6.914-.336-9.976.26-.783 1.385-3.249.936-3.995-.225-.715-.973-1.122-1.383-1.685-.482-.708-1.01-1.604-1.346-2.39-.896-2.091-1.347-4.408-2.312-6.498-.451-.974-1.234-1.982-1.868-2.879-.712-1.008-1.495-1.718-2.058-2.913-.186-.411-.447-1.083-.148-1.53.073-.3.225-.412.523-.487.484-.409 1.867.111 2.352.336 1.385.56 2.543 1.083 3.699 1.867.523.375 1.084 1.085 1.755 1.272h.786c1.193.26 2.538.072 3.661.41 1.979.636 3.772 1.569 5.38 2.576 4.893 3.103 8.928 7.512 11.652 12.778.447.858.637 1.644 1.045 2.539.787 1.832 1.76 3.7 2.541 5.493.785 1.755 1.533 3.547 2.654 5.005.559.784 2.805 1.195 3.812 1.606.745.335 1.905.633 2.577 1.044 1.271.783 2.537 1.682 3.732 2.543.595.448 2.465 1.382 2.576 2.13M99.484 39.844a5.82 5.82 0 00-1.529.188v.075h.072c.301.597.824 1.011 1.197 1.532.301.599.562 1.193.857 1.791l.072-.074c.527-.373.789-.971.789-1.868-.227-.264-.262-.522-.451-.784-.22-.374-.705-.56-1.007-.86"
              ></path>
              <path
                fill="#f8981d"
                d="M141.148 113.578h.774v-3.788h-1.161l-.947 2.585-1.029-2.585h-1.118v3.788h.731v-2.882h.041l1.078 2.882h.557l1.074-2.882v2.882zm-6.235 0h.819v-3.146h1.072v-.643h-3.008v.643h1.115l.002 3.146z"
              ></path>
            </svg>
          </div>
          {/* Git */}
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="none"
              viewBox="0 0 32 32"
            >
              <path
                fill="#EE513B"
                d="M2.585 17.413a1.999 1.999 0 010-2.826L14.587 2.585c.78-.78 2.046-.78 2.826 0l12.002 12.002c.78.78.78 2.046 0 2.826L17.413 29.415c-.78.78-2.046.78-2.826 0L2.585 17.413z"
              ></path>
              <path
                fill="#fff"
                d="M12.149 5.062l-1.215 1.215 3.139 3.139A2.126 2.126 0 0015.25 12.3v7.679a2.126 2.126 0 101.718.097v-7.765l3 3a2.125 2.125 0 101.283-1.147l-3.221-3.223a2.125 2.125 0 00-2.66-2.66l-3.221-3.22z"
              ></path>
            </svg>
          </div>
          {/* MongoDB */}
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 73 73"
            >
              <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1">
                <g
                  fill="#FFF"
                  stroke="#134514"
                  strokeWidth="2"
                  transform="translate(2 2)"
                >
                  <rect width="71" height="71" x="-1" y="-1" rx="14"></rect>
                </g>
                <g transform="translate(25 11)">
                  <path
                    fill="#A6A385"
                    d="M12.494 50.728l-1.348-.46s.165-6.875-2.303-7.368c-1.644-1.908.264-80.918 6.185-.264 0 0-2.04 1.02-2.402 2.763-.395 1.711-.132 5.33-.132 5.33z"
                  ></path>
                  <path
                    fill="#499D4A"
                    d="M13.218 44.084s11.81-7.763 9.046-23.914C19.6 8.427 13.317 4.579 12.626 3.099c-.756-1.053-1.48-2.895-1.48-2.895l.494 32.663c0 .033-1.02 10 1.579 11.217"
                  ></path>
                  <path
                    fill="#58AA50"
                    d="M10.456 44.511S-.63 36.946.028 23.624C.653 10.302 8.482 3.757 9.995 2.572c.987-1.052 1.02-1.447 1.085-2.5.691 1.48.56 22.138.658 24.572.296 9.374-.526 18.091-1.282 19.867z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          {/* VsCode */}
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 32 32"
            >
              <path
                fill="#0065a9"
                d="M29.01 5.03l-5.766-2.776a1.742 1.742 0 00-1.989.338L2.38 19.8a1.166 1.166 0 00-.08 1.647c.025.027.05.053.077.077l1.541 1.4a1.165 1.165 0 001.489.066L28.142 5.75A1.158 1.158 0 0130 6.672v-.067a1.748 1.748 0 00-.99-1.575z"
              ></path>
              <path
                fill="#007acc"
                d="M29.01 26.97l-5.766 2.777a1.745 1.745 0 01-1.989-.338L2.38 12.2a1.166 1.166 0 01-.08-1.647c.025-.027.05-.053.077-.077l1.541-1.4A1.165 1.165 0 015.41 9.01l22.732 17.24A1.158 1.158 0 0030 25.328v.072a1.749 1.749 0 01-.99 1.57z"
              ></path>
              <path
                fill="#1f9cf0"
                d="M23.244 29.747a1.745 1.745 0 01-1.989-.338A1.025 1.025 0 0023 28.684V3.316a1.024 1.024 0 00-1.749-.724 1.744 1.744 0 011.989-.339l5.765 2.772A1.748 1.748 0 0130 6.6v18.8a1.748 1.748 0 01-.991 1.576z"
              ></path>
            </svg>
          </div>
          {/* Figma */}
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="none"
              viewBox="0 0 32 32"
            >
              <path
                fill="#1ABCFE"
                fillRule="evenodd"
                d="M16 16a4 4 0 118 0 4 4 0 01-8 0z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#0ACF83"
                fillRule="evenodd"
                d="M8 24a4 4 0 014-4h4v4a4 4 0 01-8 0z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#FF7262"
                fillRule="evenodd"
                d="M16 4v8h4a4 4 0 000-8h-4z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#F24E1E"
                fillRule="evenodd"
                d="M8 8a4 4 0 004 4h4V4h-4a4 4 0 00-4 4z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#A259FF"
                fillRule="evenodd"
                d="M8 16a4 4 0 004 4h4v-8h-4a4 4 0 00-4 4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}