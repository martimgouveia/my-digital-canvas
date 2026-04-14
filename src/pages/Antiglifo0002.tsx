import Header from "@/components/Header";
import img0002 from "@/assets/antiglifo/0002.JPG";

const Antiglifo0002 = () => {
  return (
    <>
      <Header />
      <div className="pt-24 px-5 pb-16 max-w-[1000px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1 text-left leading-relaxed">
            <h1 className="text-2xl font-normal text-foreground mb-6">0002</h1>
            <p className="text-base text-foreground leading-relaxed">
              Não consigo afastar-me da ideia de ir à praia — um complexo balnear, em concreto, que é a pior e mais cruel invenção relacionada com o acesso ao mar — e não ver a "canalha", como lá se diz, e não reviver aquilo que eu, mais uns amigos e outros "buzicos", vivemos. Crescer numa ilha é sinónimo de viver com o mar, e passar o verão inteiro perto dele torna inevitável o habitual encontro. E torna-se também um costume andar com uma mochila às costas que só nos castiga, não pelo seu peso, mas pelo lembrete de que a natureza é a maior força ao nosso redor, e que ela não está só presente no nosso pequeno globo, está também lá fora. Seja quem fosse, morenaços ou não, ninguém escapava aos escaldões. Aparentemente, só um amigo nosso é que conseguia escapar a isso. Porém, houve uma vez que vi algo inacreditável que declarou o óbito ao mito: a pele dele começou a descamar. Apesar de parecer relutante, a sua pele acabou por cair. Isso aplica-se àquilo que nos tornámos. Quantos de nós cedeu e se permitiu ser algo que nunca imaginaria ser? A isso chama-se crescer, supostamente. Não foi de um momento para o outro, nem o salto o foi. Uma vez saltámos de um ilhéu, e entre o saltar e o afundar durou pelo menos um segundo. Foi um dos singulares momentos da minha vida em que me foi trocado o peso do corpo pelo do tempo. Antes disso, tivemos de enfrentar a complicada subida rochosa. Já nos tinham dito que, depois de escalar, não havia outra forma de regressar — apesar desse mesmo rapaz ter provado o contrário e ter-se arranhado todo. Mas, desta vez, a pele não caiu, só se moldou. O salto, porém, não foi para todos bem-sucedido. Outro amigo nosso colocou em prova o que um filme francês me ensinou: "O que importa não é a queda, é a aterragem". A aterragem foi aparatosa, mas houve quem não tivesse saído do ilhéu pelo próprio pé. E quem diz ilhéu, diz qualquer outro sítio de onde se pudesse saltar. Há quem tenha saltado mais cedo, até sem ninguém reparar; há quem se tenha deixado empurrar, ou, mesmo resistindo, acabou por ir. Acredito eu que fomos todos no tempo certo. E achar que nós próprios ainda não fomos é irracional.
            </p>
          </div>
          <div className="flex-1">
            <img src={img0002} alt="0002" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Antiglifo0002;
