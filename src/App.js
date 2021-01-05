import React from 'react'

import textLogo from './assets/beevent_texto.png'
import splash1 from './assets/undraw_modern_life1.png'

import featureInvites from './assets/feature_invites.png'
import featureCheckin from './assets/feature_checkin.png'
import featureAgenda from './assets/feature_agenda.png'
import featureNotifications from './assets/feature_notifications.png'

function App() {
  return (
    <div class="root">
      {/* Header + Top Section */}
      <div class="relative bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav class="relative flex items-center justify-center sm:h-10 lg:justify-start" aria-label="Global">
                <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div class="flex items-center justify-center w-full md:w-auto">
                    <a href="#">
                      <span class="sr-only">Beevent</span>
                      <img class="h-40 w-auto sm:h-30" src={textLogo} />
                    </a>
                  </div>
                </div>
                {/* <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Solução</a>
                  <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Para quem</a>
                  <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>
                  <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Company</a>
                  <a href="#" class="font-medium text-yellow-600 hover:text-yellow-500">Começar</a>
                </div> */}
              </nav>
            </div>

            {/* <div class="relative top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                  <div class="px-2 pt-2 pb-3 space-y-1" role="none">
                    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">
                      Solução
                    </a>
                    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">
                      Para quem
                    </a>
                    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">
                      Marketplace
                    </a>
                    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">
                      Company
                    </a>
                  </div>
                  <div role="none">
                    <a href="#" class="block w-full px-5 py-3 text-center font-medium text-yellow-600 bg-gray-50 hover:bg-gray-100" role="menuitem">
                      Começar
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span class="block xl:inline">Sua produção de eventos </span>
                  <span class="block text-yellow-600 xl:inline">digital</span>
                </h1>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Monte, organize e acompanhe suas produções de eventos. Tudo em um só lugar.
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div class="rounded-md shadow">
                    <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10">
                      Get started
                    </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10">
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={splash1} alt="" />
        </div>
      </div>

      {/* Features Section */}
      <div class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <h2 class="text-base text-yellow-600 font-semibold tracking-wide uppercase">Transactions</h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to send money
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div class="mt-10">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Competitive exchange rates
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    No hidden fees
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Transfers are instant
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Mobile notifications
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Features with UnDraw section */}
      <div class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <img src={featureInvites} />
            </div>
            <div class="text-center sm:text-left lg:mt-12">
              <p class="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Convites inteligente
              </p>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Monte, organize e acompanhe suas produções de eventos. Tudo em um só lugar.
              </p>
            </div>
          </div>

          
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="sm:col-start-2">
              <img src={featureCheckin} />
            </div>         
            <div class="sm:col-start-1 sm:row-start-1 text-center sm:text-right lg:mt-12">
              <p class="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Confirmação no local
              </p>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Monte, organize e acompanhe suas produções de eventos. Tudo em um só lugar.
              </p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <img src={featureAgenda} />
            </div>
            <div class="text-center sm:text-left lg:mt-12">
              <p class="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Veja suas prioridades
              </p>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Monte, organize e acompanhe suas produções de eventos. Tudo em um só lugar.
              </p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="sm:col-start-2">
              <img src={featureNotifications} />
            </div>
            <div class="sm:col-start-1 sm:row-start-1 text-center sm:text-right lg:mt-12">
              <p class="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Alertas com notificação
              </p>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Monte, organize e acompanhe suas produções de eventos. Tudo em um só lugar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action section */}
      <div class="bg-gray-50">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">Ready to dive in?</span>
            <span class="block text-yellow-600">Start your free trial today.</span>
          </h2>
          <div class="mt-8 lex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
              <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700">
                Get started
              </a>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
              <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yellow-600 bg-white hover:bg-yellow-50">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
