import Header from "@/components/Header";
import img0003 from "@/assets/antiglifo/0003.JPG";

const Antiglifo0003 = () => {
  return (
    <>
      <Header />
      <div className="pt-24 px-5 pb-16 max-w-[1000px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1 text-left leading-relaxed">
            <h1 className="text-2xl font-normal text-foreground mb-6">0003</h1>
            <p className="text-base text-foreground leading-relaxed">
              Um grande amigo meu disse-me, uma vez, que não acreditava na existência do presente. Para ele, só poderíamos ver o passado ou o futuro. Estranhamente, ele tem alguma razão. Todos desejamos a plenitude, à partida, de viver um grande momento que, na nossa condição, só se torna consciente depois de cogitado. A fotografia, porém, faz-nos ver aquilo que nós não conseguimos experienciar, muito menos no mundo veloz em que nos inserimos. Ou, se calhar, por ser tudo tão rápido, só vivemos nesse instante temporal. O passado, o presente e o futuro condensam-se na fotografia, tal como neste exemplo acima — em idades, em movimentos, em tudo. Como é que é possível ver, num só plano, tudo aquilo que estamos constantemente a observar na sua individualidade? Será o passado sinónimo de movimento, o presente um instante entorpecido e o futuro um repouso? Ou será o passado um desejo obstinado pelo futuro e o futuro um longo desejo de regresso ao passado? Será correto humanizar, através de metáforas, aquilo a que chamamos "tempos verbais"? Normalmente tentamos humanizar tudo; talvez assim seja mais fácil de entender, e mesmo assim restam dúvidas. De qualquer forma, acredito que ainda somos novos para olhar para o passado e tentar imaginar o futuro. Hoje, eu só pedia para finalmente viver nesse presente — presente esse que, para o meu amigo, não existe. No fim, enfim, poder apenas olhar para o passado. Honestamente, é bem possível que todos nós possamos escolher com o que queremos viver e, ainda assim, tentarmos viver na mesma realidade, no mesmo espaço-"tempo". Para mim, aqui e agora, observo aquilo que construo e chamo de passado, tento abster-me de alguma da minha consciência para viver o presente e não desejo alcançar o futuro, pelo menos por agora. Tudo o que desejo, quero que aconteça agora e agora, apesar de nem tudo — ou talvez a maior parte desse tudo — ser possível desenrolar-se no imediato. Talvez seja por isso que, por enquanto, a espera imposta pelo tempo ainda seja um problema, até conseguir alcançar algumas dessas coisas. Tempo esse que só acontece no presente. É nele que sofro, saro, refaço, desfaço, idealizo, não concretizo e acabo por fazer. E, por fim, espero. É nesse presente que eu vivo.
            </p>
          </div>
          <div className="flex-1">
            <img src={img0003} alt="0003" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Antiglifo0003;
