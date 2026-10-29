import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = { title: `Solicitação de dados pessoais — ${site.name}` };

export default function SolicitacaoDeDadosPage() {
  return (
    <LegalPage title="Solicitação de dados pessoais (LGPD)" updated="29 de outubro de 2026">
      <section>
        <p>
          A Lei Geral de Proteção de Dados garante a você o controle sobre os seus dados pessoais. Veja o que você pode
          solicitar à {site.name} e como fazer o pedido.
        </p>
      </section>
      <section>
        <h2>1. O que você pode pedir</h2>
        <ul>
          <li>Confirmação de que tratamos os seus dados e acesso a eles.</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários.</li>
          <li>Portabilidade dos dados para outro fornecedor.</li>
          <li>Informações sobre com quem compartilhamos os seus dados.</li>
          <li>Revogação do consentimento, quando aplicável.</li>
        </ul>
      </section>
      <section>
        <h2>2. Como fazer o pedido</h2>
        <p>
          Envie um e-mail para <strong>{site.email}</strong> com o assunto &quot;Solicitação LGPD&quot;, informando o seu nome
          completo, CPF ou CNPJ e qual direito deseja exercer. Se preferir,{" "}
          <a
            href={whatsappUrl("Olá! Quero fazer uma solicitação sobre os meus dados pessoais (LGPD).")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-accent hover:underline"
          >
            fale com a gente pelo WhatsApp
          </a>
          .
        </p>
      </section>
      <section>
        <h2>3. Prazo de resposta</h2>
        <p>
          Podemos pedir uma confirmação de identidade para proteger os seus dados. Respondemos em até 15 dias, conforme
          prevê a LGPD.
        </p>
      </section>
      <section>
        <h2>4. Dados que precisamos manter</h2>
        <p>
          Alguns dados podem ser mantidos mesmo após o pedido de exclusão, quando necessários para cumprir obrigações legais
          ou para a defesa em processos, como os vinculados a pedidos já protocolados no INPI.
        </p>
      </section>
    </LegalPage>
  );
}
