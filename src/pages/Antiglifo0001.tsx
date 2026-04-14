import Header from "@/components/Header";
import img0001 from "@/assets/antiglifo/0001.JPG";

const Antiglifo0001 = () => {
  return (
    <>
      <Header />
      <div className="pt-24 px-5 pb-16 max-w-[1000px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1 text-left leading-relaxed">
            <h1 className="text-2xl font-normal text-foreground mb-6">0001</h1>
            <p className="text-base text-foreground leading-relaxed">
              Antes de irmos embora, o meu tio lembrou-se, depois de um dia que não nos podia exigir mais da nossa fadiga, de irmos ver se o tapete já tinha secado. Fomos por uma rua que eu nunca tinha passado, mas que já me tinham dito repetidamente como é que se lá chegava. Em minha defesa, eram muitas as ruelas, para não falar do ar suspeito que elas têm, e com o hábito de apenas fazer o caminho de ida e volta, não cedi, desta vez, à curiosidade que tanto me cansa quanto me sacia. Para além do mais, o tempo era para ser passado dentro de casa para tentar matar uma solidão que cada um de nós vivia e que, agora, habita pelo menos em um de nós. Já a tinha visto, todas as vezes que me debruçava à janela, fosse dia fosse noite, às vezes escondido atrás das cortinas porque os vizinhos faziam uns churrascos e tudo, bem tentador. Porém o que me fazia parar para pensar, ou pensar para parar, e ficar lá só a apreciar, não era a rua que se estendia embaixo, mas sim a vastidão que se prolongava até Sintra. Achava eu que era o pôr-do-sol e os aviões que criavam movimento naquela fotografia, mas todas aquelas casas, carros a percorrerem as estradas, cada canto tinha a sua história e nós ali, também a viver e escrever a nossa. Mas, pela primeira vez na minha vida, que me recorde pelo menos, e última, pude ver a janela de fora e imaginar o que este quadro sentia quando dois sujeitos ficavam sentados só a contemplar. É irónico, mas belo, pensar que foi assim que pude finalmente despedir-me daquele lugar. Poder vê-lo de fora. Dizia-me que "a vida é mais curta do que comprida". E, se assim for, que ao menos seja cumprida, seja lá o que isso possa ser.
            </p>
          </div>
          <div className="flex-1">
            <img src={img0001} alt="0001" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Antiglifo0001;
