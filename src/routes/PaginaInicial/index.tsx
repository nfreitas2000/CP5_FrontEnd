import HospitalLogo from "../../images/hospitalLogo.jpg";

export default function PaginaInicial() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-50">

        <section className="relative bg-blue-700 text-white text-center py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hospital das Clínicas
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Cuidando de vidas com excelência, tecnologia e humanização.
            </p>
          </div>
        </section>

        <main className="flex-1">
          <section className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center gap-10 mt-10">
            <img
              src={HospitalLogo}
              alt="Hospital"
              className="w-full md:w-1/2 h-72 object-cover rounded-2xl shadow-lg"
            />
            <div className="md:w-1/2 text-gray-700">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">Bem-vindo ao Hospital das Clínicas</h2>
              <p className="mb-4 leading-relaxed">O Hospital das Clínicas é referência nacional em saúde e pesquisa. Fundado com o propósito de oferecer atendimento de alta qualidade, o hospital combina inovação tecnológica com o compromisso humano de cuidar das pessoas.</p>
              <p className="leading-relaxed">Nossas equipes são formadas por médicos, enfermeiros e pesquisadores altamente capacitados, prontos para oferecer o melhor tratamento e suporte aos pacientes.</p>
            </div>
          </section>

          <section className="max-w-6xl mx-auto p-6 mt-14">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
              Nossos Pilares de Atendimento
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Humanização</h3>
                <p className="text-gray-600">
                  Atendimento empático, focado nas necessidades individuais de cada paciente.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Inovação</h3>
                <p className="text-gray-600">
                  Uso de tecnologia de ponta e pesquisa constante para melhorar os tratamentos.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Excelência</h3>
                <p className="text-gray-600">
                  Profissionais qualificados e comprometidos com resultados de alta qualidade.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
