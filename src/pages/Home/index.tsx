import Header from "@/components/header/Header";
import next from "next";
import Image from "next/image";
import styles from "../../styles/home.module.css";
import Link from "next/link";

const HomeMain=()=>{


    return(
        <>
        
        <section className={styles.ContainerHome}>
         <div className={styles.ContainerContent}>
            <h1>
            Trabalhamos para Implusionar, o sucesso do seu Négocio no Mercado Digital.
            </h1>
            <span></span>
            <p>
                Desenvolvemos soluções para peguenas e médias empresas, utilizamos as tecnologias mais recentes para construir de Landing pages, Sites Instituicionais, E-commerces e Aplicações Web.
            </p>
            <div>
                <button>IMPLUSIONAR MEU NÉGOCIO</button>
                <button>CONHEÇA NOSSAS SOLUÇÕES</button>
            </div>
         </div>
         <div className={styles.Containercreative}>
            <img src="/images/bannermain.png" alt="img" />
         </div>
        </section>

        <section id="sobre" className={styles.ContainerAbout}>

            <div className={styles.AboutCreative}>
               
              <img
                   src="/images/img-about.jpg"
                   alt="iconlogo"
                />
               
            </div>

            <div className={styles.AboutContent}>
                <span>Quem Somos?</span>
                <h2>
                    Utilizamos tecnologia a favor do pequeno e médio empreendedor

                </h2>
                <div>
                    <Image
                        src="/icones/icon-o-que-somos-1.svg"
                        width={60} 
                        height={60}
                        alt="iconlogo"
                    />
                    <p>
                        Oferecemos consultoria financeira para ajudar os colaboradores a superar desafios e realizar sonhos
                    </p>
                </div>
                <div>
                    <Image
                        src="/icones/icon-o-que-somos-2.svg"
                        width={60} 
                        height={60}
                        alt="iconlogo"
                    />
                    <p>
                        Diagnosticamos a raiz dos problemas financeiros e entregamos a melhor solução para cada caso
                    </p>
                </div>
                <div>
                    <Image
                        src="/icones/icon-o-que-somos-3.svg"
                        width={60} 
                        height={60}
                        alt="iconlogo"
                    />
                    <p>
                        Monitoramos a saúde financeira dos colaboradores, reportando os dados para os RH's das empresas
                    </p>
                </div>

            </div>

        </section>
        
        <section className={styles.ContainerOpportunity}>
            <span>Oportunidade</span>
            <h3>
            Segundo a Internet World Stats<br/> cerca de 4,9 bilhões de pessoas em todo o mundo usam a Internet
            </h3>
            <p>
            Segundo a Statista, a receita global de comércio eletrônico em 2021 deve chegar a mais de US$ 4,2 trilhões. Ter um site é fundamental para aproveitar essa oportunidade de negócios.
            </p>
            <div className={styles.ContainerOpportunityBox}>
                <div>
                    <span>46%</span>
                    <p>
                        Das pequenas empresas que não possuiem um site e que pode estar perdendo clientes para a sua concorrência direta.
                    </p>
                </div>
                <div>
                    <span>85%</span>
                    <p>
                    Dos consumidores pesquisam on-line antes de fazer uma compra. Um site bem projetado pode ajudandar a atrair mais clientes.
                    </p>
                </div>
                <div>
                    <span>25%</span>
                    <p>
                    Essa é a média que os consumidores gastam há mais na internet em comparação com as compras reaizadas diretamente nas lojas fisicas.

                    </p>
                </div>
            </div>
        </section>

        <section>
            <span>Tecnologias</span>
              <h3>
              Utilizamos tecnologia de ponta para desenvolver soluções, como JavaScript, HTML semântico e CSS3, além de frameworks como React e Next.js e tecnologias como Node.js e WordPress com Elementor. Também utilizamos o Graphql para consultas mais eficientes ao banco de dados.
              </h3>
        </section>

        </>
    )
}

export default HomeMain