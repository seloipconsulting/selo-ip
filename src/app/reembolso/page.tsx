import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: `Política de Reembolso — ${site.name}` };

export default function ReembolsoPage() {
  return (
    <LegalPage title="Política de Reembolso" updated="29 de outubro de 2026">
      <section>
        <p>
          Queremos que você contrate com tranquilidade. Esta política explica quando e como os valores pagos à {site.name}{" "}
          podem ser devolvidos.
        </p>
      </section>
      <section>
        <h2>1. Antes do protocolo no INPI</h2>
        <p>
          Se você desistir do serviço antes de protocolarmos o pedido no INPI, devolvemos os honorários pagos, descontados
          apenas os custos de serviços já executados, como a busca de viabilidade completa.
        </p>
      </section>
      <section>
        <h2>2. Depois do protocolo no INPI</h2>
        <p>
          Após o protocolo, o trabalho técnico já foi realizado e o pedido passa a tramitar no INPI. Por isso, os honorários
          dessa etapa não são reembolsáveis.
        </p>
      </section>
      <section>
        <h2>3. Taxas oficiais do INPI</h2>
        <p>
          As taxas (GRUs) são pagas diretamente ao INPI e seguem as regras do próprio instituto. Depois de pagas, a {site.name}{" "}
          não tem como devolvê-las.
        </p>
      </section>
      <section>
        <h2>4. Direito de arrependimento</h2>
        <p>
          Nas contratações feitas pela internet ou pelo WhatsApp, você pode desistir em até 7 dias a partir da contratação,
          conforme o artigo 49 do Código de Defesa do Consumidor, desde que o pedido ainda não tenha sido protocolado.
        </p>
      </section>
      <section>
        <h2>5. Como pedir o reembolso</h2>
        <p>Envie o pedido com o seu nome e o serviço contratado. O valor é devolvido pelo mesmo meio de pagamento usado.</p>
        <ContactLine />
      </section>
    </LegalPage>
  );
}
