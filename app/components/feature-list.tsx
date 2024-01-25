import { BookOpenIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/20/solid'

const stats = [
    { id: 1, name: 'Apoyando a los estudiantes a través de ayuda financiera y oportunidades educativas.', value: 'Becas', icon: CurrencyDollarIcon},
    { id: 2, name: 'Involucrarse con la comunidad para crear un impacto positivo en la educación.', value: 'Alcance Comunitario',icon: UserGroupIcon},
    { id: 3, name: 'Proporcionando acceso a materiales educativos y apoyo para estudiantes.', value: 'Recursos Educativos',icon: BookOpenIcon},
  ]

export default function FeatureList(){
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="w-full mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
              <div className="flex justify-center">
                <div className="text-center lg:max-w-xl">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">Potenciar</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Transformando vidas a través de la educación y el compromiso comunitario</p>
                  <p className="mt-6 text-md leading-8 text-gray-600">
                  Nuestra fundación está dedicada a proporcionar becas, interactuar con la comunidad y ofrecer recursos educativos para empoderar a los jóvenes estudiantes.
                  </p>
                </div>
              </div>
              <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto items-center flex max-w-xs flex-col gap-y-4">
                             <div className='order-first'><stat.icon className='fill-principal h-16 w-16'/></div>   
                            <dt className="text-sm leading-7 text-gray-600">{stat.name}</dt>
                            <dd className="order-first text-lg font-semibold tracking-tight text-gray-900 sm:text-3xl">
                                {stat.value}
                            </dd>

                            </div>
                        ))}
                        </dl>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )
}