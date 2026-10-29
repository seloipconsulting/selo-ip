import Link from "next/link";
import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: `Política de Privacidade — ${site.name}` };

export default function PrivacidadePage() {
  return (
    <LegalPage title="Política de Privacidade" updated="29 de outubro de 2026">
      <section>
        <p>
          Esta política explica como a {site.name} coleta, usa e protege os seus dados pessoais, de acordo com a Lei Geral
          de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
        </p>
      </section>
      <section>
        <h2>1. Dados que coletamos</h2>
        <ul>
          <li>Dados de identificação e contato: nome, CPF ou CNPJ, endereço, e-mail e telefone.</li>
          <li>Informações sobre a marca, invenção ou desenho que você deseja proteger.</li>
          <li>Mensagens trocadas conosco pelo WhatsApp, e-mail ou outros canais.</li>
          <li>Dados de navegação no site, como páginas acessadas e tipo de dispositivo.</li>
        </ul>
      </section>
      <section>
        <h2>2. Para que usamos os dados</h2>
        <ul>
          <li>Realizar buscas de viabilidade e prestar os serviços contratados.</li>
          <li>Preparar e protocolar pedidos junto ao INPI em seu nome.</li>
          <li>Enviar orçamentos, atualizações do processo e avisos de prazos.</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>
      </section>
      <section>
        <h2>3. Compartilhamento</h2>
        <p>
          Compartilhamos dados apenas quando necessário para prestar o serviço, como com o Instituto Nacional da
          Propriedade Industrial (INPI), meios de pagamento e fornecedores de tecnologia que nos ajudam a operar. Os
          pedidos de registro publicados pelo INPI se tornam públicos por exigência legal.
        </p>
      </section>
      <section>
        <h2>4. Armazenamento e segurança</h2>
        <p>
          Guardamos os dados pelo tempo necessário para prestar o serviço e cumprir obrigações legais, adotando medidas
          técnicas e administrativas para protegê-los contra acesso não autorizado.
        </p>
      </section>
      <section>
        <h2>5. Seus direitos</h2>
        <p>
          Você pode pedir a confirmação, o acesso, a correção, a portabilidade ou a exclusão dos seus dados, além de revogar
          consentimentos. Veja como em <Link href="/solicitacao-de-dados" className="font-bold text-accent hover:underline">Solicitação de dados pessoais</Link>.
        </p>
      </section>
      <section>
        <h2>6. Contato</h2>
        <ContactLine />
      </section>
    </LegalPage>
  );
}
