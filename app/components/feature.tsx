import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Cambio con impacto',
    description:
      'Help us make a difference by supporting our mission to provide education for all.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Transforma vidas',
    description: 'Con tu ayuda, podemos empoderar a los jóvenes estudiantes y crear un futuro más brillante.',
    icon: LockClosedIcon,
  },
]

export default function Feature() {
  return (
    <div className="flex items-center bg-white">
      <div className="mx-20 max-w-full px-6 sm:my-20 lg:px-8 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-14 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-xl">
              <h2 className="text-base font-semibold leading-7 text-principal">Potenciar</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Rompiendo barreras, construyendo futuros</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              En nuestra fundación, creemos que cada niño merece tener acceso a una educación de calidad. Trabajamos incansablemente para otorgar becas y ayuda educativa a jóvenes estudiantes necesitados.
              </p>
              <dl className="grid  gap-x-8 gap-y-16  mt-10 max-w-xl  text-base leading-7 text-gray-600 lg:max-w-none grid-cols-1 lg:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="font-semibold text-gray-900">
                      <div className="absolute top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="/logo/logo-full-principal.jpg"
            alt="Product screenshot"
            className="place-self-center rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
