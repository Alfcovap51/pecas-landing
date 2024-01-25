
'use client'
import { useState } from 'react'
import Image from 'next/image';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-4xl py-10 sm:py-6">
          <div className="sm:mb-6 flex justify-center">
                <img
                    src="/logo/FundacionPecas-Logo.png"
                    className="w-4/6"
                    alt="Screenshots of the dashboard project showing desktop version"
                />

          </div>
    
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-negro sm:text-6xl">
            Empoderando a los estudiantes a través de la ayuda educativa
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Creemos que la educación es la clave para desbloquear un futuro más brillante. Nuestra fundación está dedicada a proporcionar ayuda educativa a estudiantes necesitados, ayudándolos a superar barreras financieras y perseguir sus sueños.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-lila px-3.5 py-2.5 text-sm font-semibold text-morado shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Donar
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Saber más <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
