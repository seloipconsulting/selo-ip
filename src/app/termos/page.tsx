import Link from "next/link";
import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: `Termos de Serviço — ${site.name}` };

export default function TermosPage() {
  return (
    <LegalPage title="Termos de Serviço" updated="29 de outubro de 2026">
      <section>
        <p>
          Estes termos regem a contratação dos serviços da {site.name}. Ao solicitar um orçamento ou contratar um serviço,
          você concorda com as condições abaixo.
        </p>
      </section>
      <section>
        <h2>1. Serviços</h2>
        <p>
          A {site.name} presta assessoria em propriedade intelectual: busca de viabilidade, registro de marcas, depósito de
          patentes e desenhos industriais, monitoramento e defesa em processos administrativos junto ao INPI.
        </p>
      </section>
      <section>
        <h2>2. Responsabilidades do cliente</h2>
        <ul>
          <li>Fornecer informações verdadeiras, completas e atualizadas.</li>
          <li>Enviar documentos e aprovações dentro dos prazos informados.</li>
          <li>Garantir que possui direito de uso sobre os nomes, logotipos e criações enviados.</li>
        </ul>
      </section>
      <section>
        <h2>3. Resultado do pedido</h2>
        <p>
          A decisão final sobre a concessão do registro ou da patente é exclusiva do INPI. A {site.name} se compromete a
          conduzir o processo com técnica e diligência, mas não pode garantir o deferimento.
        </p>
      </section>
      <section>
        <h2>4. Valores e pagamento</h2>
        <p>
          Os honorários são informados no orçamento enviado antes da contratação. As taxas oficiais do INPI são cobradas à
          parte e informadas com antecedência.
        </p>
      </section>
      <section>
        <h2>5. Cancelamento</h2>
        <p>
          O cancelamento e a devolução de valores seguem a nossa{" "}
          <Link href="/reembolso" className="font-bold text-accent hover:underline">Política de Reembolso</Link>.
        </p>
      </section>
      <section>
        <h2>6. Contato</h2>
        <ContactLine />
      </section>
    </LegalPage>
  );
}
