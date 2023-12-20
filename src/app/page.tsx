export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-950 text-white">
      <h1 className="text-5xl font-black text-center text-red-600">
        Amigo Secreto
      </h1>
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-center">Como Usar?</h2>
        <ol className="list-decimal w-full md:w-96 gap-2 flex flex-col">
          <li>Clique no botão abaixo para começar</li>
          <li>Crie os grupos com os todos os participantes</li>
          <li>
            Os participantes de um grupo não podem se tirar, podem tirar apenas
            de outros grupos
          </li>
          <li>
            Após adicionar todos os participantes, clique para gerar o sorteio
            do amigo secreto
          </li>
          <li>
            Vai aparecer na tela o nome da pessoa com a pessoa que ela tirou
            escondido
          </li>
          <li>
            Entregue o celular para a pessoa visualizar, após visualizar irá
            aparecer o nome da próxima pessoa para visualizar
          </li>
          <li>Seja feliz! Desejo ótimas festas para você e sua família!</li>
        </ol>
        <button className="bg-emerald-500 px-6 py-3 rounded-lg text-xl font-semibold hover:bg-emerald-800 transition-colors duration-300">
          Começar!
        </button>
      </div>
    </main>
  );
}
