

export default function CTA(){
    return (
        <div className="flex items-center bg-white">
        <div className="mx-20 max-w-full px-6 sm:my-20 lg:px-8 ">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-14 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex items-center lg:pr-8 lg:pt-4">
              <div className="lg:max-w-xl">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Apoyo educativo para jovenes estudiantes</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
                <p className="self-start mt-6 text-lg text-left leading-8 text-gray-600">Haz la diferencia donando o siendo un voluntario.</p>
                <div className="self-start mt-6">
                    <a
                        href="#"
                        className="rounded-md bg-lila px-6 py-2.5 mt-4 mr-4 text-sm font-semibold text-morado shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Donar
                    </a>
                    <a
                        href="#"
                        className="rounded-md bg-principal px-6 py-2.5 mt-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Ser Voluntario
                    </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    );

}