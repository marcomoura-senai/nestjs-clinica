# Back End Node T1 e T2

# Projeto Final Avaliativo - Módulo 02 - Semana 11

## Índice

- [Back End Node T1 e T2](#back-end-node-t1-e-t2)
- [Projeto Final Avaliativo - Módulo 02 - Semana 11](#projeto-final-avaliativo---módulo-02---semana-11)
  - [Índice](#índice)
- [**1. CONTEXTUALIZAÇÃO**](#1-contextualização)
- [**2. DESAFIO**](#2-desafio)
    - [**Objetivo técnico do projeto**](#objetivo-técnico-do-projeto)
- [**3. RESULTADOS ESPERADOS (ENTREGA)**](#3-resultados-esperados-entrega)
- [**4. REQUISITOS DAS TAREFAS**](#4-requisitos-das-tarefas)
  - [**4.1. REQUISITOS DE NEGÓCIO (RN)**](#41-requisitos-de-negócio-rn)
    - [**Os conceitos**](#os-conceitos)
    - [**As regras**](#as-regras)
      - [**RN01 - Cada perfil executa só as operações do seu papel**](#rn01---cada-perfil-executa-só-as-operações-do-seu-papel)
      - [**RN02 - O paciente é identificado pelo CPF**](#rn02---o-paciente-é-identificado-pelo-cpf)
      - [**RN03 - O médico tem CRM e tem acesso ao sistema**](#rn03---o-médico-tem-crm-e-tem-acesso-ao-sistema)
      - [**RN04 - O turno define a duração da consulta**](#rn04---o-turno-define-a-duração-da-consulta)
      - [**RN05 - Turnos do mesmo dia não se sobrepõem**](#rn05---turnos-do-mesmo-dia-não-se-sobrepõem)
      - [**RN06 - O horário do turno é hora local da clínica**](#rn06---o-horário-do-turno-é-hora-local-da-clínica)
      - [**RN07 - Só existe consulta em horário que a escala prevê**](#rn07---só-existe-consulta-em-horário-que-a-escala-prevê)
      - [**RN08 - Um médico atende uma consulta por vez**](#rn08---um-médico-atende-uma-consulta-por-vez)
      - [**RN09 - Um paciente está em uma consulta por vez**](#rn09---um-paciente-está-em-uma-consulta-por-vez)
      - [**RN10 - Duas tentativas simultâneas para o mesmo horário: só uma vence**](#rn10---duas-tentativas-simultâneas-para-o-mesmo-horário-só-uma-vence)
      - [**RN11 - A consulta tem um ciclo de vida**](#rn11---a-consulta-tem-um-ciclo-de-vida)
      - [**RN12 - A autoridade para mudar o estado depende da transição**](#rn12---a-autoridade-para-mudar-o-estado-depende-da-transição)
      - [**RN13 - Cancelar libera o horário**](#rn13---cancelar-libera-o-horário)
      - [**RN14 - O prontuário é do médico que atendeu**](#rn14---o-prontuário-é-do-médico-que-atendeu)
      - [**RN15 - Mudar a escala não altera consulta já marcada**](#rn15---mudar-a-escala-não-altera-consulta-já-marcada)
  - [**4.2. REQUISITOS FUNCIONAIS (RF)**](#42-requisitos-funcionais-rf)
    - [**RF01 - Autenticar o usuário e identificar os seus perfis**](#rf01---autenticar-o-usuário-e-identificar-os-seus-perfis)
    - [**RF02 - Cadastrar, consultar, alterar e remover pacientes**](#rf02---cadastrar-consultar-alterar-e-remover-pacientes)
    - [**RF03 - Cadastrar médicos sem deixar estado parcial**](#rf03---cadastrar-médicos-sem-deixar-estado-parcial)
    - [**RF04 - Registrar e consultar a escala de trabalho do médico**](#rf04---registrar-e-consultar-a-escala-de-trabalho-do-médico)
    - [**RF05 - Entregar a agenda do médico num período**](#rf05---entregar-a-agenda-do-médico-num-período)
    - [**RF06 - Criar consulta validando o horário**](#rf06---criar-consulta-validando-o-horário)
    - [**RF07 - Impedir conflito de consulta sob concorrência**](#rf07---impedir-conflito-de-consulta-sob-concorrência)
    - [**RF08 - Controlar a transição de status da consulta**](#rf08---controlar-a-transição-de-status-da-consulta)
    - [**RF09 - Registrar e consultar prontuário com controle por vínculo**](#rf09---registrar-e-consultar-prontuário-com-controle-por-vínculo)
    - [**RF10 - Listar com paginação e filtros**](#rf10---listar-com-paginação-e-filtros)
    - [**RF11 - Responder todo erro no envelope padronizado**](#rf11---responder-todo-erro-no-envelope-padronizado)
    - [**RF12 - Validar os dados de entrada**](#rf12---validar-os-dados-de-entrada)
    - [**RF13 - Não conceder perfil `admin` por rota pública**](#rf13---não-conceder-perfil-admin-por-rota-pública)
  - [**4.3. REQUISITOS NÃO FUNCIONAIS (RNF)**](#43-requisitos-não-funcionais-rnf)
    - [**RNF01 - Senha em hash e segredos fora do repositório**](#rnf01---senha-em-hash-e-segredos-fora-do-repositório)
    - [**RNF02 - Consultas parametrizadas**](#rnf02---consultas-parametrizadas)
    - [**RNF03 - Entrada inválida não derruba a aplicação**](#rnf03---entrada-inválida-não-derruba-a-aplicação)
    - [**RNF04 - Regra de negócio fora dos controllers**](#rnf04---regra-de-negócio-fora-dos-controllers)
    - [**RNF05 - Tipagem estrita**](#rnf05---tipagem-estrita)
    - [**RNF06 - Padrão de nomes declarado e aplicado**](#rnf06---padrão-de-nomes-declarado-e-aplicado)
    - [**RNF07 - Cobertura mínima de 80%**](#rnf07---cobertura-mínima-de-80)
    - [**RNF08 - Configuração por variáveis de ambiente**](#rnf08---configuração-por-variáveis-de-ambiente)
    - [**RNF09 - API publicada disponível durante a correção**](#rnf09---api-publicada-disponível-durante-a-correção)
    - [**RNF10 - Resposta em até 5 segundos**](#rnf10---resposta-em-até-5-segundos)
  - [**4.4. ORGANIZAÇÃO ARQUITETURAL E RESTRIÇÕES DE PROJETO**](#44-organização-arquitetural-e-restrições-de-projeto)
    - [**Restrições de projeto (RP)**](#restrições-de-projeto-rp)
      - [**RP01 - Linguagem e framework**](#rp01---linguagem-e-framework)
      - [**RP02 - Injeção de dependência pelo construtor**](#rp02---injeção-de-dependência-pelo-construtor)
      - [**RP03 - Tratamento de erro em um único ponto**](#rp03---tratamento-de-erro-em-um-único-ponto)
      - [**RP04 - Unicidade garantida pelo banco**](#rp04---unicidade-garantida-pelo-banco)
      - [**RP05 - Instantes guardados com fuso horário**](#rp05---instantes-guardados-com-fuso-horário)
      - [**RP06 - Estrutura do banco criada por migrations**](#rp06---estrutura-do-banco-criada-por-migrations)
      - [**RP07 - Primeiro administrador criado por seed**](#rp07---primeiro-administrador-criado-por-seed)
      - [**RP08 - PostgreSQL gerenciado com SSL**](#rp08---postgresql-gerenciado-com-ssl)
      - [**RP09 - Dockerfile multi-stage**](#rp09---dockerfile-multi-stage)
      - [**RP10 - Porta e endereço de escuta**](#rp10---porta-e-endereço-de-escuta)
    - [**Organização em camadas**](#organização-em-camadas)
  - [**4.5. TESTES AUTOMATIZADOS E COBERTURA**](#45-testes-automatizados-e-cobertura)
    - [**Escopo exigido**](#escopo-exigido)
    - [**Casos mínimos**](#casos-mínimos)
    - [**Executor e configuração**](#executor-e-configuração)
  - [**4.6. INTEGRAÇÃO CONTÍNUA E PUBLICAÇÃO**](#46-integração-contínua-e-publicação)
    - [**4.6.1. Workflow de validação do pull request**](#461-workflow-de-validação-do-pull-request)
    - [**4.6.2. Proteção da branch main**](#462-proteção-da-branch-main)
    - [**4.6.3. Workflow de publicação**](#463-workflow-de-publicação)
    - [**4.6.4. Evidência**](#464-evidência)
  - [**4.7. VERSIONAMENTO COM GITHUB**](#47-versionamento-com-github)
  - [**4.8. GESTÃO DO PROJETO NO BOARD**](#48-gestão-do-projeto-no-board)
  - [**4.9. CONTRATO DA API PARA A CORREÇÃO AUTOMATIZADA**](#49-contrato-da-api-para-a-correção-automatizada)
    - [**4.9.1. Convenções gerais**](#491-convenções-gerais)
    - [**4.9.2. Saúde e autenticação**](#492-saúde-e-autenticação)
      - [`GET /api/v1/health` · público](#get-apiv1health--público)
      - [`POST /api/v1/auth/login` · público](#post-apiv1authlogin--público)
      - [`GET /api/v1/users/me` · autenticado](#get-apiv1usersme--autenticado)
      - [`POST /api/v1/users` · perfil `admin`](#post-apiv1users--perfil-admin)
    - [**4.9.3. Pacientes**](#493-pacientes)
      - [`POST /api/v1/patients` · perfis `admin`, `secretary`](#post-apiv1patients--perfis-admin-secretary)
      - [`GET /api/v1/patients` · autenticado (qualquer perfil)](#get-apiv1patients--autenticado-qualquer-perfil)
      - [`GET /api/v1/patients/{id}` · autenticado](#get-apiv1patientsid--autenticado)
      - [`PATCH /api/v1/patients/{id}` · perfis `admin`, `secretary`](#patch-apiv1patientsid--perfis-admin-secretary)
      - [`DELETE /api/v1/patients/{id}` · perfil `admin`](#delete-apiv1patientsid--perfil-admin)
    - [**4.9.4. Médicos**](#494-médicos)
      - [`POST /api/v1/doctors` · perfil `admin`](#post-apiv1doctors--perfil-admin)
      - [`GET /api/v1/doctors` · autenticado](#get-apiv1doctors--autenticado)
      - [`GET /api/v1/doctors/{id}` · autenticado](#get-apiv1doctorsid--autenticado)
    - [**4.9.5. Escala de trabalho**](#495-escala-de-trabalho)
      - [`PUT /api/v1/doctors/{doctorId}/work-schedule` · perfil `admin`](#put-apiv1doctorsdoctoridwork-schedule--perfil-admin)
      - [`GET /api/v1/doctors/{doctorId}/work-schedule` · autenticado](#get-apiv1doctorsdoctoridwork-schedule--autenticado)
    - [**4.9.6. Agenda do médico**](#496-agenda-do-médico)
      - [`GET /api/v1/doctors/{doctorId}/calendar?from=&to=` · autenticado](#get-apiv1doctorsdoctoridcalendarfromto--autenticado)
    - [**4.9.7. Agendamentos**](#497-agendamentos)
      - [`POST /api/v1/appointments` · perfis `admin`, `secretary`](#post-apiv1appointments--perfis-admin-secretary)
      - [`GET /api/v1/appointments` · autenticado](#get-apiv1appointments--autenticado)
      - [`GET /api/v1/appointments/{id}` · autenticado](#get-apiv1appointmentsid--autenticado)
      - [`PATCH /api/v1/appointments/{id}/status` · autenticado](#patch-apiv1appointmentsidstatus--autenticado)
    - [**4.9.8. Prontuário**](#498-prontuário)
      - [`POST /api/v1/patients/{patientId}/medical-records` · perfil `doctor`, com vínculo](#post-apiv1patientspatientidmedical-records--perfil-doctor-com-vínculo)
      - [`GET /api/v1/patients/{patientId}/medical-records` · perfil `doctor` com vínculo, ou `admin`](#get-apiv1patientspatientidmedical-records--perfil-doctor-com-vínculo-ou-admin)
    - [**4.9.9. Resumo do contrato**](#499-resumo-do-contrato)
- [**5. CRITÉRIOS DE AVALIAÇÃO**](#5-critérios-de-avaliação)
- [**6. REFERÊNCIAS**](#6-referências)

---

# **1. CONTEXTUALIZAÇÃO**

No mini-projeto da Semana 07 você construiu a base de acesso da **MedClinic API**: cadastro de usuário, autenticação por JWT e autorização por perfil. Aquela entrega não tinha funcionalidade de negócio. Servia de base: a API já sabe quem está chamando e o que essa pessoa pode fazer.

Este projeto continua de onde o outro parou. Entram as entidades que a clínica usa no dia a dia: paciente, médico, escala de trabalho, agendamento de consulta e prontuário. Aqui o sistema deixa de ser um exercício de autenticação e ganha regra de negócio, do tipo que dá prejuízo quando está errada: uma agenda que aceita duas consultas no mesmo horário, um prontuário que o médico errado consegue ler, uma consulta marcada fora do turno em que o médico trabalha.

Numa empresa, código que resolve esse tipo de regra não chega à produção por um caminho curto. Abre-se um pull request, uma suíte de testes roda sozinha e reprova a proposta se a regra quebrou, e só depois de aprovada a alteração vai para um ambiente que o cliente acessa. Aí o controle de qualidade roda uma bateria de testes de aceitação contra o ambiente publicado, sem olhar o código, só para ver se a API responde o que o contrato diz.

Este projeto reproduz o ciclo inteiro. Você vai escrever a regra de negócio, cobri-la com testes unitários e configurar o GitHub Actions para validar cada pull request e publicar na nuvem a cada merge na `main`. O professor vai rodar uma bateria de testes de ponta a ponta contra a sua API publicada, como um cliente faria.

Você vai aplicar, entre outros, estes conteúdos:

* Node.js, TypeScript e framework HTTP (Express ou NestJS);
* TypeORM: entidades, relacionamentos, migrations, QueryBuilder e transações;
* PostgreSQL e modelagem de banco de dados relacional;
* Arquitetura em camadas, injeção de dependência e separação de responsabilidades;
* Autenticação com JWT e autorização baseada em perfis (RBAC);
* Controle de acesso por posse do recurso;
* Validação de dados de entrada e tratamento centralizado de erros;
* Programação assíncrona, concorrência e transações com bloqueio;
* Testes unitários com dublês sobre a porta de repositório;
* Cobertura de testes como barreira de qualidade;
* Containers, imagem de produção e variáveis de ambiente;
* Integração contínua e publicação contínua com GitHub Actions;
* Git, GitHub, pull requests e proteção de branch.

---

# **2. DESAFIO**

A clínica aprovou a base de acesso entregue na etapa anterior e liberou o desenvolvimento das funcionalidades de negócio. O sistema continua se chamando:

**MedClinic API**

**Etapa 2 - Agendamento, escala e prontuário**

| ⚠️ Requisito obrigatório de linguagem. A aplicação deverá ser obrigatoriamente desenvolvida em TypeScript, com tipagem estática aplicada de forma consistente em todas as camadas do projeto (variáveis, parâmetros, retornos de função, entidades e DTOs). Não será aceito o uso de JavaScript puro (ainda que em arquivos com extensão `.ts`), nem o uso indiscriminado do tipo `any` para evitar a tipagem correta. |
| :---- |

| ⚠️ Requisito obrigatório de contrato. Esta etapa tem um **contrato de API fixo** (Seção 4.9). Rotas, nomes de campo, códigos de status e códigos de erro são literais e serão verificados por uma bateria automatizada de testes de ponta a ponta executada contra a sua API publicada na nuvem. Um campo chamado `data_inicio` onde o contrato pede `startsAt` reprova o teste, mesmo que a funcionalidade esteja correta. Leia a Seção 4.9 antes de escrever a primeira rota. |
| :---- |

Você pode continuar o mesmo repositório da etapa anterior ou começar um repositório novo, desde que a base de autenticação e autorização esteja presente e funcionando. A escolha do framework é livre entre **Express** e **NestJS**: o contrato da API é o mesmo nos dois casos, e a avaliação automatizada não olha qual deles você usou.

O que muda em relação à etapa anterior, e precisa de atenção: as rotas de autenticação agora vivem sob o prefixo `/api/v1`, e os perfis de acesso passam a ser três. Se o seu projeto da etapa 1 usava `POST /auth/login` devolvendo `{ "token": ... }`, ele precisa ser ajustado para `POST /api/v1/auth/login` devolvendo `{ "accessToken": ... }`.

### **Objetivo técnico do projeto**

Desenvolver e publicar uma API REST capaz de:

* cadastrar pacientes, com CPF único e validado;
* cadastrar médicos, criando em uma única operação atômica o usuário de acesso e o registro profissional;
* registrar a escala de trabalho de cada médico, por dia da semana, turno e duração de consulta;
* devolver a agenda de um médico em um período, de modo que o front-end consiga montar os horários livres;
* criar agendamentos validando o horário contra a escala e contra os agendamentos já existentes;
* impedir que duas requisições simultâneas ocupem o mesmo horário do mesmo médico;
* controlar a transição de status do agendamento;
* registrar e consultar prontuário, restringindo o acesso ao médico que atendeu o paciente;
* tratar erros de forma centralizada, devolvendo um envelope de erro padronizado;
* ser coberta por testes unitários sobre a camada de regra de negócio, com limiar mínimo de cobertura;
* validar cada pull request automaticamente pelo GitHub Actions;
* ser publicada automaticamente na nuvem a cada incorporação na branch `main`;
* responder corretamente a uma bateria de testes de aceitação executada contra a URL pública.

---

# **3. RESULTADOS ESPERADOS (ENTREGA)**

Ao final do projeto, o(a) estudante deverá entregar os seguintes itens:

* **Repositório público no GitHub**, contendo o código-fonte completo, o histórico de desenvolvimento com branches e pull requests, as migrations do banco, o `Dockerfile`, os arquivos de workflow em `.github/workflows/` e o `README.md`, que deve conter:
  * nome e descrição do sistema, e o escopo desta etapa;
  * tecnologias utilizadas;
  * pré-requisitos e instruções de execução local, incluindo o `docker compose` do banco;
  * lista das variáveis de ambiente, com o papel de cada uma (espelhando o `.env.example`);
  * comandos de migration, build, teste e execução;
  * descrição da arquitetura e da estrutura de pastas, com a justificativa das decisões de modelagem e o padrão de nomes adotado (RNF06);
  * o recorte da cobertura de testes, ou seja, quais arquivos entram na conta e por quê;
  * a URL pública da API publicada;
  * resumo dos endpoints, com os perfis exigidos;
  * link do board do projeto.
* **API publicada e acessível na internet**, no Render ou no Google Cloud Run, conectada a um banco PostgreSQL gerenciado, respondendo no contrato definido na Seção 4.9.
* **Board de gestão do projeto**, em GitHub Projects (preferencial) ou Trello, em modo público.
* **Credenciais do usuário administrador de avaliação**, para que o professor consiga autenticar na sua API publicada.

**Entrega no AVA**

A entrega deverá ser submetida na tarefa do AVA: **Módulo 02 - Projeto Final Avaliativo**.

* **Prazo de entrega**: 02/11/26, segunda, até às 22h.
* **Peso**: 60% da nota do Módulo 02, conforme calendário de aula (matriz curricular).

**O que submeter no AVA**

1. Link do repositório **público** no GitHub.
2. **URL pública da API** publicada na nuvem (a raiz do serviço, por exemplo `https://medclinic-seunome.onrender.com`).
3. Link do **board público** (GitHub Projects ou Trello).
4. **E-mail e senha do usuário administrador** de avaliação da sua API publicada.

| ⚠️ A API precisa estar no ar no momento da correção. A bateria de testes de aceitação é executada contra a URL submetida. Serviço fora do ar, banco desligado ou credencial de administrador incorreta reprovam todos os critérios automatizados. Se a sua plataforma suspende o serviço por inatividade, verifique que ele volta ao ar sozinho na primeira requisição, e considere a demora da primeira resposta. |
| :---- |

**Observações importantes**

* Não serão aceitos projetos submetidos após a data limite, nem alterados depois de entregues. Será considerada como data final de entrega a última atualização no repositório.
* O repositório deve permanecer **público** de forma permanente. Este é um projeto de portfólio.
* O banco de dados deverá ser criado pelas **migrations** do projeto. Não é permitido entregar apenas um banco previamente populado, nem usar `synchronize: true` em produção.
* O arquivo `.env` **não pode estar versionado** no repositório. O `.env.example` é obrigatório e deve listar todas as chaves necessárias, sem valores reais.
* Projetos com indícios de plágio, cópia integral de soluções da internet ou sem domínio técnico por parte do(a) estudante estarão sujeitos às penalidades previstas pelo regulamento da unidade curricular. Consultar documentação, exemplos e ferramentas de apoio é permitido, desde que você compreenda, adapte e consiga explicar o código entregue.

---

# **4. REQUISITOS DAS TAREFAS**

Esta seção tem duas partes.

As subseções **4.1 a 4.3** dizem **o que construir**: as regras do negócio da clínica (RN), as funções que o sistema precisa oferecer (RF) e as exigências de qualidade (RNF). É a descrição do problema, e é o que você leria num projeto real antes de abrir o editor.

As subseções **4.4 a 4.9** dizem **sob quais restrições**: a organização do código, os testes, a integração contínua, o versionamento, a gestão do projeto e o contrato de API. Essas restrições não vêm da clínica, vêm da forma como este projeto é desenvolvido e corrigido.

| 💡 Comece pela 4.1 e pela 4.2, mas leia a 4.9 antes de escrever a primeira rota. O contrato de API da 4.9 é a interface fixa que a correção automatizada exige, e refazer rotas depois custa mais caro do que lê-lo antes. |
| :---- |

---

## **4.1. REQUISITOS DE NEGÓCIO (RN)**

Esta subseção descreve como a clínica funciona. São regras do negócio, não de tecnologia: elas existiriam numa agenda de papel, e continuariam valendo se o sistema fosse escrito em outra linguagem. São também o que os seus testes unitários precisam verificar, porque é aqui que mora o que dá prejuízo quando quebra.

**Como ler os requisitos desta seção e das seguintes.** Os requisitos seguem a ISO/IEC/IEEE 29148: cada um tem identificador único, afirma uma coisa só e pode ser verificado. Eles se dividem em quatro tipos, conforme Wiegers e Beatty:

| Sigla | Tipo | Responde a |
| :---- | :---- | :---- |
| **RN** | Regra de negócio | Como a clínica opera? |
| **RF** | Requisito funcional | O que o sistema faz? |
| **RNF** | Requisito não funcional | Com que qualidade o sistema faz? |
| **RP** | Restrição de projeto | O que foi imposto à solução? (Seção 4.4) |

Todos têm prioridade *Deve* na escala MoSCoW, porque todos entram na avaliação. A Seção 6 lista as obras consultadas.

| ℹ️ A modelagem é sua. Esta subseção descreve o que o sistema precisa saber fazer, não como você guarda isso. Nome de entidade, nome de coluna, tipo de chave primária, uma tabela ou três, relação por chave estrangeira ou documento `jsonb`: a decisão é do(a) estudante, e nada disso é avaliado por conformidade. **O único contrato rígido é o da fronteira da API**, ou seja, os DTOs de entrada e de saída da Seção 4.9. Da fronteira para dentro, modele como achar melhor e defenda a sua escolha no README. |
| :---- |

### **Os conceitos**

O sistema lida com seis conceitos.

**Usuário e perfil de acesso.** Vêm da etapa 1. O que muda é que os perfis passam a ser três, com estes nomes exatos, em minúsculas:

| Perfil | Quem é | O que faz |
| :---- | :---- | :---- |
| `admin` | administração da clínica | cria usuários, médicos e escalas; enxerga tudo |
| `secretary` | secretária, atendimento | cadastra pacientes e agendamentos |
| `doctor` | médico | consulta a própria agenda, conduz o atendimento, escreve o prontuário |

Um usuário pode ter mais de um perfil, e o campo `roles` das respostas da API é sempre um **array de strings**. Se na etapa 1 você guardou o perfil como coluna `enum` em vez de tabela separada, pode manter.

**Paciente.** Quem é atendido na clínica, identificado por CPF.

**Médico.** Quem atende, identificado por CRM, e que também é usuário do sistema.

**Escala de trabalho.** O conjunto de turnos em que o médico atende.

**Agendamento.** Uma consulta marcada: liga um paciente a um médico num período, e tem um status.

**Prontuário.** Registros de texto sobre um paciente, cada um com o médico que o escreveu.

### **As regras**

#### **RN01 - Cada perfil executa só as operações do seu papel**

O sistema é administrativo, de uso interno. Quem marca consulta é a secretária, não o paciente, e o paciente não acessa o sistema. A administração configura o sistema (usuários, médicos, escalas), a secretaria opera o atendimento (pacientes, agendamentos) e o médico conduz a consulta e registra o prontuário. Uma operação fora do papel do perfil é recusada.

#### **RN02 - O paciente é identificado pelo CPF**

Cada paciente tem um CPF, com 11 dígitos e sem pontuação. **Dois pacientes não podem ter o mesmo CPF.** Uma tentativa de cadastrar CPF repetido é recusada, e não cria um segundo registro.

#### **RN03 - O médico tem CRM e tem acesso ao sistema**

Cada médico tem um CRM, e **dois médicos não podem ter o mesmo CRM**. Todo médico cadastrado é também um usuário do sistema, com o perfil `doctor`, porque ele precisa entrar para ver a própria agenda.

A clínica não admite meio cadastro: não existe médico sem acesso, nem acesso de médico sem registro profissional. Se o cadastro falha por qualquer motivo, nada é criado.

#### **RN04 - O turno define a duração da consulta**

A escala do médico é uma lista de turnos. Cada turno diz em que dia da semana ele vale, a que hora começa, a que hora termina e **quanto dura cada consulta naquele turno**.

A duração é definida por turno: pode ser 30 minutos na terça e 20 minutos na quinta. Um médico pode ter mais de um turno no mesmo dia da semana (manhã e tarde).

#### **RN05 - Turnos do mesmo dia não se sobrepõem**

Dois turnos do mesmo médico no mesmo dia da semana não podem se sobrepor. Turnos encostados, um terminando exatamente quando o outro começa, são válidos.

#### **RN06 - O horário do turno é hora local da clínica**

O horário do turno é **hora de relógio local da clínica** (`America/Sao_Paulo`), sem data e sem fuso: "terça, das 08:00 às 12:00" vale para toda terça-feira.

#### **RN07 - Só existe consulta em horário que a escala prevê**

Um horário é válido para um médico quando as três condições valem ao mesmo tempo:

1. cai dentro de algum turno da escala dele naquele dia da semana;
2. está alinhado à grade do turno, ou seja, começa num múltiplo da duração da consulta contado a partir do início do turno (num turno que começa às 08:00 com consultas de 30 minutos, 08:00 e 08:30 são válidos, 08:20 não é);
3. a consulta inteira cabe no turno, ou seja, ela termina no fim do turno ou antes.

Horário que falha em qualquer uma das três não é recusado por estar ocupado: ele **não existe** naquela agenda.

#### **RN08 - Um médico atende uma consulta por vez**

Duas consultas ativas do mesmo médico não podem se sobrepor no tempo. Duas consultas se sobrepõem quando uma começa antes da outra terminar:

```
sobrepõe(a, b)  ⇔  a.início < b.fim  e  b.início < a.fim
```

A comparação é estrita, então consultas **encostadas não conflitam**: uma das 10:00 às 10:30 e outra das 10:30 às 11:00 convivem. Mas uma das 10:00 às 10:30 e outra das 10:20 às 10:50 conflitam, mesmo tendo horários de início diferentes.

| 💡 Conflito é interseção de períodos, e não igualdade de início. Como a duração varia por turno, duas consultas podem conflitar começando em horários diferentes. Por isso o problema não se resolve impedindo horário de início repetido. |
| :---- |

#### **RN09 - Um paciente está em uma consulta por vez**

A mesma regra da RN08, agora do lado do paciente: duas consultas ativas do mesmo paciente não podem se sobrepor, ainda que sejam com médicos diferentes. O paciente não consegue estar em duas salas ao mesmo tempo.

#### **RN10 - Duas tentativas simultâneas para o mesmo horário: só uma vence**

A clínica tem várias secretárias trabalhando ao mesmo tempo, cada uma na sua máquina. Duas delas podem abrir a agenda do mesmo médico, ver o mesmo horário livre, escolher pacientes diferentes e confirmar no mesmo instante.

Nesse caso, **uma das duas tem que falhar**. O objetivo não é impedir o segundo clique, é garantir que só uma consulta seja gravada. A que falha recebe um erro que diz que o horário acabou de ser ocupado, e não um erro genérico nem uma confirmação falsa.

#### **RN11 - A consulta tem um ciclo de vida**

Uma consulta nasce **agendada**. Quando o paciente chega e o atendimento começa, ela fica **em andamento**. Quando o atendimento termina, ela fica **concluída**.

Uma consulta pode ser **cancelada** enquanto não estiver concluída. Consulta concluída e consulta cancelada não mudam mais de estado: são o fim da linha.

#### **RN12 - A autoridade para mudar o estado depende da transição**

Quem conduz o atendimento é o médico daquela consulta: é ele quem a coloca em andamento e quem a conclui, e a administração também pode fazê-lo. O cancelamento é uma decisão administrativa e é mais aberto: a administração e o próprio médico da consulta cancelam em qualquer estado em que o cancelamento é possível, e a secretaria cancela consulta agendada, mas não consulta já em andamento. A tabela completa está na Seção 4.9.7.

#### **RN13 - Cancelar libera o horário**

Depois de cancelada, a consulta deixa de ocupar o horário, que volta a estar disponível na agenda do médico e pode receber outra consulta.

#### **RN14 - O prontuário é do médico que atendeu**

Prontuário é informação de saúde, e o acesso a ele não é definido pelo cargo, mas pelo **vínculo com o atendimento**. Um médico tem vínculo com um paciente quando existe ao menos uma consulta entre os dois em andamento ou concluída.

| Quem | Escrever no prontuário | Ler o prontuário |
| :---- | :---- | :---- |
| médico **com** vínculo | sim | sim |
| médico **sem** vínculo | não | não |
| administração | não | sim, para auditoria |
| secretaria | não | não |

Escrever no prontuário é ato médico, então nem a administração nem a secretaria escrevem. A secretaria também não lê: ela agenda consulta, não acessa informação clínica.

#### **RN15 - Mudar a escala não altera consulta já marcada**

A escala do médico muda com o tempo: ele troca de turno, muda a duração da consulta, deixa de atender numa quinta. Consultas já marcadas **mantêm o período que tinham**, e não encurtam nem mudam de horário por causa disso.

Como efeito, uma consulta antiga pode acabar fora da escala nova. O sistema mantém essa consulta como está, e a clínica remarca manualmente se precisar. O sistema não apaga nem move consulta sozinho.

| 💡 Recomendação de modelagem. Guarde na consulta o seu próprio instante de fim, calculado no momento de agendar a partir da duração do turno. Quem guarda só o início e calcula o fim na hora de ler fica com consultas que mudam de duração retroativamente quando a escala do médico é alterada, o que é exatamente o que esta regra proíbe. |
| :---- |

---

## **4.2. REQUISITOS FUNCIONAIS (RF)**

Cada requisito abaixo é uma função que o sistema deve oferecer, escrita como comportamento observável de fora, sem prescrever como implementar. Quando o requisito realiza uma regra de negócio, a regra está citada ao lado. A forma exata da requisição e da resposta de cada um está no contrato da Seção 4.9, e o parágrafo de rastreabilidade ao fim de cada requisito o liga às regras, às rotas, aos casos mínimos e aos critérios de avaliação.

### **RF01 - Autenticar o usuário e identificar os seus perfis**

O sistema deve autenticar o usuário por e-mail e senha e devolver um token com prazo de expiração que identifica o usuário e os seus perfis (`admin`, `secretary` e `doctor`, conforme a RN01). Toda rota, exceto as públicas, deve exigir o token, e o acesso de perfil sem permissão deve ser recusado, conforme indicado para cada rota na Seção 4.9.

As rotas vivem sob o prefixo `/api/v1`, e o campo do token na resposta do login se chama `accessToken`.

**Rastreabilidade.** Regra: RN01. Rotas: `/auth/login` e `/users/me`. Caso mínimo: 6 (Seção 4.5). Critério de avaliação: 8 (Seção 5).

### **RF02 - Cadastrar, consultar, alterar e remover pacientes**

O sistema deve cadastrar paciente com validação de CPF em 11 dígitos numéricos e recusa de CPF repetido (RN02), e deve consultar por identificador, alterar dados e remover.

**Rastreabilidade.** Regra: RN02. Rota: `/patients`. Critério de avaliação: 8 (Seção 5).

### **RF03 - Cadastrar médicos sem deixar estado parcial**

O sistema deve criar, na mesma operação, o registro profissional e o usuário de acesso com perfil `doctor` (RN03). Uma falha por CRM ou e-mail duplicado não pode deixar o usuário criado e o médico ausente, nem o contrário. Se no seu modelo isso são duas gravações, elas acontecem na **mesma transação**, e a falha de uma desfaz a outra.

**Rastreabilidade.** Regra: RN03. Rotas: `POST /doctors` e `GET /doctors`. Critério de avaliação: 8 (Seção 5).

### **RF04 - Registrar e consultar a escala de trabalho do médico**

O sistema deve registrar a escala completa de um médico, com os turnos por dia da semana, horário e duração de consulta (RN04 a RN06), e deve devolvê-la quando consultada. O registro **substitui a escala inteira**: enviar uma escala nova apaga a anterior, e enviar uma lista vazia deixa o médico sem escala.

Turnos sobrepostos no mesmo dia da semana são recusados; turnos encostados são aceitos (RN05).

**Rastreabilidade.** Regras: RN04, RN05, RN06 e RN15. Rota: `/doctors/{id}/work-schedule`. Caso mínimo: 3 (Seção 4.5). Critério de avaliação: 8 (Seção 5).

### **RF05 - Entregar a agenda do médico num período**

O sistema deve devolver, para um médico e um intervalo de datas, a escala dele e as consultas ativas do período (RN13: consulta cancelada não aparece).

**O sistema não gera a lista de horários livres.** Ele entrega os dois conjuntos de dados, e quem monta a grade de horários é o front-end: para cada dia, ele pega os turnos daquele dia da semana, gera os horários de acordo com a duração, e remove os que se sobrepõem a alguma consulta.

| 💡 Por que não gerar os horários livres no backend. A escala muda pouco e é pequena, e o front-end já precisa desenhar a grade da semana de qualquer forma. Gerar horário no backend duplicaria esse trabalho e criaria uma função a mais para manter. A montagem no front-end é apresentação; a regra continua no backend, que é o assunto do RF06. |
| :---- |

**Rastreabilidade.** Regra: RN13. Rota: `/doctors/{id}/calendar`. Critério de avaliação: 8 (Seção 5).

### **RF06 - Criar consulta validando o horário**

O sistema deve criar a consulta a partir do médico, do paciente e do instante de início. **O instante de fim é calculado pelo sistema**, somando ao início a duração da consulta do turno em que o horário cai. O cliente não informa o fim.

Antes de gravar, o sistema deve verificar, nesta ordem:

1. o médico e o paciente existem;
2. o horário existe na escala do médico, pelas três condições da RN07;
3. o médico está livre no período (RN08);
4. o paciente está livre no período (RN09).

Cada falha produz um erro diferente, porque significam coisas diferentes: horário que não existe na escala indica erro de quem chamou a API, e horário ocupado indica que a agenda mudou desde a última leitura. Os códigos estão na Seção 4.9.7.

**Rastreabilidade.** Regras: RN07, RN08, RN09 e RN15. Rota: `POST /appointments`. Casos mínimos: 1 e 2 (Seção 4.5). Critérios de avaliação: 5, 7 e 8 (Seção 5).

### **RF07 - Impedir conflito de consulta sob concorrência**

O sistema deve garantir que duas requisições simultâneas de agendamento para o mesmo médico e o mesmo horário resultem em exatamente uma consulta gravada (RN10). A requisição que perde deve receber `HORARIO_INDISPONIVEL`.

**Abordagem recomendada.** O problema é que verificar e gravar são dois passos, e outra requisição cabe entre eles: as duas verificam, as duas encontram o horário livre, e as duas gravam. A verificação do RF06 está correta; o que falta é impedir que outra gravação para o **mesmo médico** aconteça no meio. A solução construída em aula é uma **transação com bloqueio pessimista na linha do médico**, envolvendo a verificação e a gravação. Pontos de atenção:

* O bloqueio só vale enquanto a transação está aberta. Fora de transação, o TypeORM lança `PessimisticLockTransactionRequiredError`.
* Trave a linha do **médico**, não as linhas de consulta. `FOR UPDATE` trava linhas que já existem; numa agenda vazia não haveria o que travar, e a corrida voltaria justamente no primeiro horário do dia.
* Dentro do callback da transação, **todas** as consultas ao banco passam pelo `EntityManager` da transação. Usar o repositório injetado ali dentro roda a consulta fora da transação, sem erro nenhum, e a proteção some em silêncio.
* Todo caminho que grava consulta precisa do bloqueio. Hoje é só a criação; se você implementar remarcação, ela entra na mesma transação com o mesmo bloqueio. Cancelar não precisa, porque libera horário em vez de ocupar.

**Rastreabilidade.** Regra: RN10. Rota: `POST /appointments`. Sem caso mínimo, porque a verificação é feita pela bateria do professor. Critérios de avaliação: 5 e 8 (Seção 5).

### **RF08 - Controlar a transição de status da consulta**

O sistema deve mudar o status da consulta obedecendo ao ciclo de vida (RN11) e à autoridade de cada perfil (RN12), com dois tipos de recusa: transição que o ciclo não permite, e perfil que não tem autoridade para aquela transição. A tabela de transições e de perfis está na Seção 4.9.7. Depois de cancelada, a consulta libera o horário (RN13).

**Rastreabilidade.** Regras: RN11, RN12 e RN13. Rota: `PATCH /appointments/{id}/status`. Caso mínimo: 4 (Seção 4.5). Critério de avaliação: 8 (Seção 5).

### **RF09 - Registrar e consultar prontuário com controle por vínculo**

O sistema deve permitir escrita e leitura de prontuário conforme a tabela de acesso da RN14. O autor do registro é **sempre o médico autenticado**, obtido do token, e nunca um identificador vindo do corpo da requisição.

**Rastreabilidade.** Regra: RN14. Rota: `/patients/{id}/medical-records`. Caso mínimo: 5 (Seção 4.5). Critério de avaliação: 8 (Seção 5).

### **RF10 - Listar com paginação e filtros**

Toda listagem do sistema deve ser paginada, e devolver os dados junto dos metadados de paginação (total de registros, página atual, tamanho da página e total de páginas), no formato da Seção 4.9.1.

As listagens de paciente e de médico aceitam busca parcial por nome. A listagem de consultas aceita filtro por médico, por paciente, por status e por intervalo de datas, combináveis entre si. É esta função que serve de relatório para a clínica.

Um usuário com perfil `doctor`, ao listar consultas, enxerga **apenas as próprias**, independentemente do filtro que enviar.

**Rastreabilidade.** Sem regra de negócio associada. Aplica-se a todas as listagens. Critério de avaliação: 8 (Seção 5).

### **RF11 - Responder todo erro no envelope padronizado**

O sistema deve responder todo erro, de 400 a 500, no mesmo envelope da Seção 4.9.1, com um dos códigos do catálogo.

**Rastreabilidade.** Sem regra de negócio associada. Aplica-se a todas as rotas. Critério de avaliação: 8 (Seção 5).

### **RF12 - Validar os dados de entrada**

O sistema deve validar todo corpo de requisição, parâmetro de rota e parâmetro de query antes de aplicar a regra de negócio, e recusar o que estiver fora do formato com `DADOS_INVALIDOS`. A ferramenta é livre: validação manual, `class-validator` ou `zod`.

**Rastreabilidade.** Sem regra de negócio associada. Aplica-se a todas as rotas. Critério de avaliação: 8 (Seção 5).

### **RF13 - Não conceder perfil `admin` por rota pública**

O sistema não deve oferecer caminho público que crie ou eleve um administrador. A criação de usuário exige um administrador autenticado, e nenhuma rota aberta concede perfil (RN01). O primeiro administrador é criado como descrito na RP07.

**Rastreabilidade.** Regra: RN01. Rota: `POST /users`. Critério de avaliação: 8 (Seção 5).


---

## **4.3. REQUISITOS NÃO FUNCIONAIS (RNF)**

Cada requisito abaixo é um atributo de qualidade (ISO/IEC 25010) com uma medida e uma forma de verificação. O que foi imposto à solução, como linguagem, banco e contêiner, está nas restrições de projeto da Seção 4.4.

### **RNF01 - Senha em hash e segredos fora do repositório**

Atributo de qualidade (ISO/IEC 25010): segurança, confidencialidade. A senha é armazenada só como hash e não aparece em nenhuma resposta da API. Segredos (credenciais do banco, segredo do JWT, senha do admin) são lidos de variáveis de ambiente e não constam do repositório. Verifica-se pela conferência da tabela de usuários e pela busca de segredos no repositório.

### **RNF02 - Consultas parametrizadas**

Atributo de qualidade (ISO/IEC 25010): segurança, integridade. Todo acesso ao banco usa consulta parametrizada, e qualquer ordenação ou filtro dinâmico passa por lista de permissão. Verifica-se na revisão do código: nenhuma consulta monta SQL por concatenação de entrada.

### **RNF03 - Entrada inválida não derruba a aplicação**

Atributo de qualidade (ISO/IEC 25010): confiabilidade, tolerância a falhas. Nenhuma entrada inválida encerra o processo, e nenhuma resposta de erro contém `stack trace`. Verifica-se pela bateria de aceitação com entradas inválidas e pela inspeção do corpo dos erros.

### **RNF04 - Regra de negócio fora dos controllers**

Atributo de qualidade (ISO/IEC 25010): manutenibilidade, modularidade. Nenhum controller ou rota contém regra de negócio nem importa `typeorm`. A regra de negócio está nos services e o acesso ao banco está nos repositórios. Verifica-se na revisão do código, com a busca de imports de `typeorm` na camada de controllers.

### **RNF05 - Tipagem estrita**

Atributo de qualidade (ISO/IEC 25010): manutenibilidade, analisabilidade. O `tsconfig.json` tem `strict: true`, e o código não contém `any` explícito usado para fugir da tipagem. Verifica-se pelo `tsc` sem erros e pela busca por `any` no código.

### **RNF06 - Padrão de nomes declarado e aplicado**

Atributo de qualidade (ISO/IEC 25010): manutenibilidade, analisabilidade. O padrão de nomes de arquivos, classes, funções, rotas e pastas está declarado no README e é aplicado sem exceção. Verifica-se pela leitura do README e pela amostragem do código.

### **RNF07 - Cobertura mínima de 80%**

Atributo de qualidade (ISO/IEC 25010): manutenibilidade, testabilidade. A cobertura é de pelo menos 80% em `lines`, `branches`, `functions` e `statements` sobre os arquivos de regra de negócio, e nenhum teste depende de banco, rede ou variável de ambiente. Verifica-se pelo `npm run test:cov` no workflow do pull request (Seção 4.5).

### **RNF08 - Configuração por variáveis de ambiente**

Atributo de qualidade (ISO/IEC 25010): portabilidade, adaptabilidade. Nenhum valor de ambiente é fixo no código. O `.env` está no `.gitignore`, e o `.env.example` é versionado com todas as chaves e sem valores reais. Verifica-se pela inspeção do repositório.

### **RNF09 - API publicada disponível durante a correção**

Atributo de qualidade (ISO/IEC 25010): confiabilidade, disponibilidade. A API publicada responde `GET /api/v1/health` com 200 durante a correção. Se a plataforma suspende o serviço por inatividade, ele volta ao ar sozinho na primeira requisição. Verifica-se pela bateria de aceitação.

### **RNF10 - Resposta em até 5 segundos**

Atributo de qualidade (ISO/IEC 25010): eficiência de desempenho, comportamento no tempo. Com a API já ativa, cada rota responde em até 5 segundos. Verifica-se pelo tempo de resposta medido na bateria de aceitação.

Baixo acoplamento, ausência de duplicação e funções com responsabilidade única são qualidades que dependem de julgamento. Entram no critério 3 da Seção 5, avaliado pelo professor, e não como requisito mensurável.

---

## **4.4. ORGANIZAÇÃO ARQUITETURAL E RESTRIÇÕES DE PROJETO**

### **Restrições de projeto (RP)**

Restrição de projeto é uma decisão imposta à solução, e não uma função do sistema nem um atributo de qualidade. A banca a impõe por razões de ensino, de correção ou de implantação.

#### **RP01 - Linguagem e framework**

A aplicação é escrita em TypeScript, com tipagem estática em todas as camadas (variáveis, parâmetros, retornos, entidades e DTOs). JavaScript puro não é aceito, nem em arquivo `.ts`. O framework é Express ou NestJS.

#### **RP02 - Injeção de dependência pelo construtor**

As camadas se ligam por injeção de dependência pelo construtor.

#### **RP03 - Tratamento de erro em um único ponto**

O tratamento de erro fica num único ponto: middleware de erro no Express, exception filter no NestJS. Erros de domínio lançados na regra de negócio são traduzidos para HTTP nessa borda, e a regra de negócio não conhece código de status.

#### **RP04 - Unicidade garantida pelo banco**

A unicidade de e-mail de usuário, de CPF de paciente e de CRM de médico é garantida por restrição no banco, e não só verificada em código.

#### **RP05 - Instantes guardados com fuso horário**

Instantes são guardados com fuso (`timestamptz`), para que a conversão entre o horário local da clínica e o UTC não se perca.

#### **RP06 - Estrutura do banco criada por migrations**

Toda a estrutura do banco é criada por migrations do TypeORM versionadas no repositório. `synchronize: true` é proibido no ambiente publicado. As migrations rodam em produção como passo declarado da publicação ou na inicialização da aplicação.

#### **RP07 - Primeiro administrador criado por seed**

O primeiro usuário `admin` é criado por migration de seed ou por script de seed, à sua escolha, com as credenciais lidas de variáveis de ambiente.

#### **RP08 - PostgreSQL gerenciado com SSL**

O banco de produção é um PostgreSQL gerenciado (Neon, Render PostgreSQL, Cloud SQL ou equivalente), com SSL habilitado no `DataSource` por variável de ambiente.

#### **RP09 - Dockerfile multi-stage**

O projeto tem um `Dockerfile` multi-stage, com etapa de build e etapa de execução, e um `.dockerignore`. A imagem final executa o código compilado (`node dist/...`), sem dependências de desenvolvimento.

#### **RP10 - Porta e endereço de escuta**

A aplicação escuta na porta informada por `PORT` e no endereço `0.0.0.0`. Endereço fixo em `localhost` impede o serviço de receber tráfego na nuvem.

### **Organização em camadas**

A aplicação deve ser organizada em camadas, com responsabilidades separadas. Não será aceita aplicação concentrada em poucos arquivos, nem regra de negócio escrita dentro de controller ou de rota (RNF04).

**Responsabilidade das camadas**

| Camada | Responsabilidade |
| :---- | :---- |
| **Bootstrap / Main** | Inicia a aplicação, conecta ao banco, registra middlewares, filtros e rotas, lê a porta do ambiente. |
| **Rotas / Controllers** | Recebem a requisição HTTP, extraem corpo, parâmetros e query, acionam a camada de regra de negócio e devolvem a resposta. Não contêm regra de negócio. |
| **Middlewares / Guards / Filters** | Autenticação, autorização por perfil, validação de entrada e tratamento centralizado de erros. |
| **Services / Use Cases** | Implementam a regra de negócio. É aqui que vivem a validação do horário contra a escala, a detecção de conflito, a transição de status e a regra de posse do prontuário. **Esta é a camada avaliada pela cobertura de testes.** |
| **Repositories** | Acesso ao banco pelo TypeORM. Nenhuma regra de negócio. |
| **Entities** | Classes decoradas do TypeORM, com atributos, tipos e relacionamentos. |
| **DTOs** | Contratos de entrada e de saída. A entidade do TypeORM não é a resposta da API. |
| **Database** | Configuração do `DataSource` e as migrations. |

**Fluxo esperado de uma requisição**

```
Requisição HTTP
  → Middleware/Guard de autenticação (valida o JWT)
  → Middleware/Guard de autorização (confere o perfil)
  → Validação do corpo (DTO)
  → Controller
  → Service / Use Case   (regra de negócio)
  → Repository           (TypeORM)
  → PostgreSQL
```

Erro lançado em qualquer ponto sobe até o tratamento centralizado, que o traduz para o envelope de erro da Seção 4.9.

A nomenclatura de pastas e arquivos é livre, desde que a separação em camadas esteja clara e consistente.

---

## **4.5. TESTES AUTOMATIZADOS E COBERTURA**

### **Escopo exigido**

São obrigatórios **testes unitários sobre a camada de regra de negócio**, com dublês construídos sobre a porta de repositório. Nenhum teste pode depender de banco de dados em execução, de rede ou de variável de ambiente.

**Não são exigidos** testes de integração HTTP nem testes de ponta a ponta escritos por você. A verificação de ponta a ponta é feita pela bateria do professor contra a sua API publicada.

### **Casos mínimos**

A suíte deve conter, no mínimo, casos para:

1. **Sobreposição de períodos**: os cinco cenários (um antes do outro, um depois, encostados, um dentro do outro, cruzando a borda). Encostado não conflita.
2. **Criação de agendamento**: caminho que dá certo; horário fora de qualquer turno; horário desalinhado da grade; consulta que não cabe no fim do turno; conflito com agendamento existente do médico; conflito com agendamento existente do paciente.
3. **Validação da escala**: turnos sobrepostos no mesmo dia da semana rejeitados; turnos encostados aceitos.
4. **Transição de status**: ao menos uma transição válida e uma inválida.
5. **Prontuário**: médico com vínculo escreve; médico sem vínculo recebe erro de acesso.
6. **Login**: credencial inválida produz erro de autenticação, e a senha é comparada pelo hash.

### **Executor e configuração**

O executor é o que estiver configurado no seu projeto. O material do módulo usa o **Vitest**; o Jest é aceito, desde que a cobertura seja produzida com o mesmo recorte e o mesmo limiar.

O limiar de cobertura é de **80%** em `lines`, `branches`, `functions` e `statements`, aplicado **apenas sobre os arquivos de regra de negócio**. Delimitar esse recorte na configuração de cobertura é parte da tarefa: você escolhe o critério e o declara no `README.md`.

| 💡 Sugestão. O jeito mais simples de recortar é por sufixo de nome de arquivo. Se os seus arquivos de regra de negócio terminam todos no mesmo sufixo (`.service.ts`, `.usecase.ts`, `.rules.ts`, o que você preferir), o `include` da cobertura vira uma linha. Sem um padrão de nome, o recorte tem que ser feito por caminho, arquivo por arquivo, e quebra cada vez que você cria um arquivo novo. |
| :---- |

Exemplo com Vitest, usando `.service.ts` como sufixo:

```ts
// vitest.config.ts
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/**/*.service.ts'],
      thresholds: { lines: 80, branches: 80, functions: 80, statements: 80 },
    },
  },
})
```

O `package.json` deve expor os scripts:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:cov": "vitest run --coverage"
  }
}
```

| ⚠️ O recorte da cobertura é o ponto do critério. Incluir controller, entidade, módulo e migration na conta infla o número sem testar regra nenhuma, e um recorte frouxo é tratado como cobertura não cumprida. O limiar vale sobre a camada onde mora o que quebra. 80% em `branches` significa, na prática, cobrir os caminhos de erro (409, 422, 403), e não apenas o caminho que dá certo. |
| :---- |

---

## **4.6. INTEGRAÇÃO CONTÍNUA E PUBLICAÇÃO**

O repositório deve conter **dois workflows** em `.github/workflows/`. Os arquivos construídos na Semana 10 (`pr-workflow.yml` e `deploy.yml`) são o ponto de partida; o que falta neles para este projeto está indicado abaixo.

### **4.6.1. Workflow de validação do pull request**

Arquivo: `.github/workflows/pr-workflow.yml`

Requisitos:

* Gatilho `on: pull_request` com `branches: [main]`.
* Um job em `ubuntu-latest`, com `actions/checkout` e `actions/setup-node` na versão 22.
* `npm ci` (e não `npm install`).
* Passo de build: se não compila, não adianta testar.
* Passo de testes com cobertura, que **reprova o job quando a cobertura fica abaixo de 80%** no recorte da Seção 4.5. Esta é a diferença em relação ao arquivo da Semana 10, em que a cobertura era apenas informativa.
* O nome do job deve ser estável, porque é ele que vira o check obrigatório.

### **4.6.2. Proteção da branch main**

Em `Settings > Branches > Add branch protection rule`, para a branch `main`:

* marcar **Require a pull request before merging**;
* marcar **Require status checks to pass before merging** e adicionar o check do workflow de validação.

Sem essa regra o check aparece no pull request, mas o botão de merge continua liberado, e o critério não é cumprido. A proteção precisa estar **ativa no repositório entregue**.

### **4.6.3. Workflow de publicação**

Arquivo: `.github/workflows/deploy.yml`

Requisitos:

* Gatilho `on: push` com `branches: [main]`. O merge de um pull request gera um push na branch, e é esse push que dispara a publicação. Não deve haver gatilho de `pull_request` aqui.
* Build da imagem a partir do `Dockerfile` e publicação num registro de imagens (GHCR ou Artifact Registry).
* Disparo da publicação na plataforma escolhida:
  * **Render**: `curl` para o Deploy Hook, com a URL guardada no segredo `RENDER_DEPLOY_HOOK_URL`;
  * **Google Cloud Run**: `google-github-actions/deploy-cloudrun`, autenticando com a chave de service account guardada em segredo.
* Nenhuma variável de ambiente da aplicação (`JWT_SECRET`, `DB_HOST`, senha do admin) pode estar escrita no workflow nem no repositório. Elas são configuradas no painel da plataforma, porque o container precisa delas em tempo de execução, e não em tempo de build.

### **4.6.4. Evidência**

O histórico do repositório deve mostrar o ciclo funcionando: pull requests fechados com o check verde, e execuções do workflow de publicação na aba Actions. Um repositório com todos os commits direto na `main` e os workflows adicionados no último commit não cumpre o critério, ainda que os arquivos estejam lá.

---

## **4.7. VERSIONAMENTO COM GITHUB**

**Fluxo obrigatório**

1. Criar uma branch a partir da `main` para cada funcionalidade.
2. Desenvolver com commits semânticos e pequenos.
3. Abrir um **pull request** para a `main`.
4. Esperar o check de validação ficar verde.
5. Incorporar o pull request, o que dispara a publicação.

**Branches mínimas**

`main`, mais uma branch por funcionalidade. As branches não precisam ser removidas depois do merge.

Exemplos: `feat/paciente`, `feat/medico`, `feat/escala`, `feat/agendamento`, `feat/prontuario`, `test/agendamento`, `ci/pr-workflow`, `ci/deploy`, `docs/readme`.

**Commits**

Mínimo de **10 commits** com conteúdo real, distribuídos ao longo do desenvolvimento. Commits apenas de criação do projeto ou de alteração do README não entram na conta. Mensagens no imperativo, descrevendo o que a alteração faz:

```
feat: cria entidade e migration de paciente
feat: implementa cadastro de paciente com cpf unico
feat: cria medico e usuario na mesma transacao
feat: implementa escala de trabalho por turno
feat: devolve agenda do medico por periodo
feat: valida horario do agendamento contra a escala
fix: impede agendamento duplicado com lock na linha do medico
test: cobre sobreposicao de periodos
test: cobre conflito de agendamento
feat: restringe prontuario ao medico que atendeu
ci: adiciona workflow de validacao do pull request
ci: reprova pull request abaixo de 80% de cobertura
ci: publica imagem e dispara deploy no merge
docs: documenta variaveis de ambiente e endpoints
```

**Pull requests**

Mínimo de **3 pull requests** fechados na `main`, cada um com o check de validação verde. O pull request precisa de um título que diga o que ele entrega e de uma descrição de uma ou duas linhas.

---

## **4.8. GESTÃO DO PROJETO NO BOARD**

Crie um board para o projeto, em **GitHub Projects** (preferencial) ou Trello, em modo público, com as colunas de um fluxo Kanban (por exemplo: Backlog, A fazer, Em andamento, Em revisão, Concluído).

O que se espera:

* um card por funcionalidade ou tarefa técnica, com **granularidade suficiente para que cada card corresponda a um pull request**, e não ao projeto inteiro;
* o card descreve o que precisa ser feito e como saber que terminou (critério de aceitação, que pode apontar para o trecho do contrato da Seção 4.9), como um item do Product Backlog do Scrum Guide, e não apenas um título genérico;
* os cards se movem pelas colunas ao longo do desenvolvimento, em vez de aparecerem todos em "Concluído" no último dia;
* no GitHub Projects, vincular o card ao pull request correspondente.

O link do board vai no `README.md` e na submissão do AVA.

---

## **4.9. CONTRATO DA API PARA A CORREÇÃO AUTOMATIZADA**

As subseções anteriores descreveram o problema. Esta descreve uma **restrição de correção**, e é importante saber a diferença.

Num projeto real, você mesmo desenharia a interface da API: rotas, nomes de campo, códigos de erro, e documentaria a escolha para quem fosse consumi-la. Aqui não, por um motivo prático. Um script automatizado vai testar a sua URL publicada sem olhar o código, e para o mesmo script servir à turma inteira a interface tem que ser igual em todas as APIs.

É o que acontece quando uma empresa integra com um parceiro, ou quando o time de front-end já existe e o backend chega depois: o contrato vem de fora e o trabalho é cumpri-lo. Trate cada nome de campo, cada código de status e cada código de erro abaixo como literal.

| ⚠️ Conformidade literal. O teste automatizado envia exatamente os corpos descritos aqui e verifica exatamente os campos descritos aqui. Diferença de nome (`data_nascimento` em vez de `startsAt`), de caixa (`ADMIN` em vez de `admin`), de estrutura (`{ "token": ... }` em vez de `{ "accessToken": ... }`) ou de código de status (`200` em vez de `201`) reprova o caso de teste, ainda que a funcionalidade esteja implementada e funcionando. Campos **adicionais** na resposta são tolerados: o teste verifica os campos exigidos, e ignora o resto. |
| :---- |

| 💡 O contrato é da fronteira para fora. Nada aqui prescreve como você modela ou organiza o código: o que entra e o que sai de cada rota é fixo, e o caminho entre as duas pontas é seu. Um nome de coluna, uma classe de entidade ou um método de service podem se chamar o que você quiser. |
| :---- |

### **4.9.1. Convenções gerais**

**Prefixo.** Toda rota vive sob **`/api/v1`**. A URL completa de um endpoint é `https://<seu-dominio>/api/v1/<rota>`.

**Formato.** Requisição e resposta em JSON, com `Content-Type: application/json`. Nomes de campo em `camelCase`.

**Autenticação.** Exceto onde indicado como público, toda rota exige o cabeçalho:

```
Authorization: Bearer <accessToken>
```

Token ausente, malformado, inválido ou expirado devolve **401**.

**Datas e horas.** Campos de instante (`startsAt`, `endsAt`, `createdAt`) são aceitos em ISO 8601 **com fuso explícito** (`2026-10-13T10:00:00-03:00` ou `2026-10-13T13:00:00Z`) e são sempre **devolvidos em UTC, com sufixo `Z`**. Campos de hora de relógio da escala (`startTime`, `endTime`) usam o formato `HH:MM` de 24 horas, sem fuso, no horário local da clínica (`America/Sao_Paulo`). Campos de data pura (`from`, `to`) usam `YYYY-MM-DD`.

**Envelope de erro.** Toda resposta de erro, de 400 a 500, tem este corpo:

```json
{
  "statusCode": 409,
  "error": "HORARIO_INDISPONIVEL",
  "message": "Este horário acabou de ser ocupado."
}
```

O teste verifica `statusCode` e `error`. O campo `message` é texto livre, em português, e não é verificado.

**Catálogo de códigos de erro.** Estes são os únicos valores aceitos no campo `error`:

| Código | Status | Quando |
| :---- | :---- | :---- |
| `DADOS_INVALIDOS` | 400 | corpo, parâmetro ou query fora do formato esperado |
| `NAO_AUTENTICADO` | 401 | token ausente, inválido ou expirado |
| `CREDENCIAIS_INVALIDAS` | 401 | e-mail ou senha incorretos no login |
| `ACESSO_NEGADO` | 403 | autenticado, mas sem permissão para o recurso |
| `RECURSO_NAO_ENCONTRADO` | 404 | o recurso referenciado não existe |
| `EMAIL_JA_CADASTRADO` | 409 | e-mail já em uso |
| `CPF_JA_CADASTRADO` | 409 | CPF já em uso |
| `CRM_JA_CADASTRADO` | 409 | CRM já em uso |
| `HORARIO_INDISPONIVEL` | 409 | o médico já tem agendamento ativo sobrepondo o período |
| `PACIENTE_INDISPONIVEL` | 409 | o paciente já tem agendamento ativo sobrepondo o período |
| `HORARIO_FORA_DA_ESCALA` | 422 | o horário não existe na escala do médico |
| `TRANSICAO_INVALIDA` | 422 | a mudança de status pedida não é permitida |

**Envelope de listagem.** Toda rota de listagem é paginada e devolve:

```json
{
  "data": [ ... ],
  "meta": { "total": 57, "page": 1, "pageSize": 20, "totalPages": 3 }
}
```

Aceita `?page=` (padrão 1) e `?pageSize=` (padrão 20, máximo 100). Valor inválido devolve 400 `DADOS_INVALIDOS`.

---

### **4.9.2. Saúde e autenticação**

#### `GET /api/v1/health` · público

Resposta **200**:

```json
{ "status": "ok" }
```

#### `POST /api/v1/auth/login` · público

Corpo:

```json
{ "email": "admin@medclinic.com", "password": "SenhaForte@123" }
```

Resposta **200**:

```json
{ "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }
```

O token deve carregar o identificador do usuário e os seus perfis, e ter prazo de expiração definido.

| Situação | Status | `error` |
| :---- | :---- | :---- |
| e-mail ou senha incorretos | 401 | `CREDENCIAIS_INVALIDAS` |
| corpo sem `email` ou sem `password` | 400 | `DADOS_INVALIDOS` |

A resposta de credencial incorreta é a mesma para e-mail inexistente e para senha errada. Não informe qual dos dois falhou.

#### `GET /api/v1/users/me` · autenticado

Resposta **200**:

```json
{
  "id": 1,
  "name": "Administrador",
  "email": "admin@medclinic.com",
  "roles": ["admin"]
}
```

O campo `password` nunca aparece em nenhuma resposta da API.

#### `POST /api/v1/users` · perfil `admin`

Cria um usuário de acesso. Corpo:

```json
{
  "name": "Joana Secretária",
  "email": "joana@medclinic.com",
  "password": "SenhaForte@123",
  "roles": ["secretary"]
}
```

Resposta **201**:

```json
{ "id": 2, "name": "Joana Secretária", "email": "joana@medclinic.com", "roles": ["secretary"] }
```

| Situação | Status | `error` |
| :---- | :---- | :---- |
| e-mail já cadastrado | 409 | `EMAIL_JA_CADASTRADO` |
| perfil inexistente em `roles` | 400 | `DADOS_INVALIDOS` |
| usuário autenticado não é `admin` | 403 | `ACESSO_NEGADO` |
| sem token | 401 | `NAO_AUTENTICADO` |

| ⚠️ Não pode existir nenhuma rota pública capaz de criar um usuário com perfil `admin`, nem de elevar o perfil de um usuário existente. O primeiro administrador do sistema é criado por migration ou por script de seed, executado no ambiente publicado, com as credenciais vindas de variáveis de ambiente. Essas credenciais são as que você submete no AVA. Uma rota pública de registro que conceda `admin` reprova os casos de controle de acesso da bateria de aceitação. |
| :---- |

---

### **4.9.3. Pacientes**

#### `POST /api/v1/patients` · perfis `admin`, `secretary`

```json
{ "name": "Carlos Pereira", "cpf": "12345678901" }
```

Resposta **201**:

```json
{ "id": 10, "name": "Carlos Pereira", "cpf": "12345678901", "createdAt": "2026-10-20T14:03:11.000Z" }
```

| Situação | Status | `error` |
| :---- | :---- | :---- |
| CPF já cadastrado | 409 | `CPF_JA_CADASTRADO` |
| `cpf` com tamanho diferente de 11, ou com caractere não numérico | 400 | `DADOS_INVALIDOS` |
| `name` ausente ou vazio | 400 | `DADOS_INVALIDOS` |
| perfil `doctor` | 403 | `ACESSO_NEGADO` |

#### `GET /api/v1/patients` · autenticado (qualquer perfil)

Query opcional: `page`, `pageSize`, `name` (busca parcial, sem diferenciar maiúsculas).

Resposta **200**, envelope de listagem, cada item no formato do `POST`.

#### `GET /api/v1/patients/{id}` · autenticado

Resposta **200** com o paciente, ou **404** `RECURSO_NAO_ENCONTRADO`.

#### `PATCH /api/v1/patients/{id}` · perfis `admin`, `secretary`

Corpo com os campos a alterar (`name`). Resposta **200** com o paciente atualizado, ou **404**.

#### `DELETE /api/v1/patients/{id}` · perfil `admin`

Resposta **204**, sem corpo. Paciente inexistente devolve **404**. A remoção pode ser lógica (`deletedAt`); se for, o paciente removido deixa de aparecer nas listagens e nas buscas por id.

---

### **4.9.4. Médicos**

#### `POST /api/v1/doctors` · perfil `admin`

Cria, **numa única operação atômica**, o usuário de acesso do médico (com perfil `doctor`) e o registro profissional.

```json
{
  "name": "Dra. Helena Souza",
  "email": "helena@medclinic.com",
  "password": "SenhaForte@123",
  "crm": "CRM-SC-54321"
}
```

Resposta **201**:

```json
{
  "id": 3,
  "crm": "CRM-SC-54321",
  "user": { "id": 7, "name": "Dra. Helena Souza", "email": "helena@medclinic.com", "roles": ["doctor"] }
}
```

| Situação | Status | `error` |
| :---- | :---- | :---- |
| e-mail já cadastrado | 409 | `EMAIL_JA_CADASTRADO` |
| CRM já cadastrado | 409 | `CRM_JA_CADASTRADO` |
| campo obrigatório ausente | 400 | `DADOS_INVALIDOS` |
| usuário autenticado não é `admin` | 403 | `ACESSO_NEGADO` |

| ⚠️ Atomicidade verificada. Quando a criação falha por CRM duplicado, **o usuário não pode ter sido criado**. O teste automatizado cria um médico, tenta criar um segundo com e-mail novo e o mesmo CRM, recebe 409, e em seguida tenta autenticar com o e-mail novo: a resposta precisa ser 401. Se no seu modelo isso são duas gravações, elas pertencem à mesma transação. |
| :---- |

Depois de criado, o médico autentica normalmente em `POST /api/v1/auth/login` com o e-mail e a senha informados aqui.

#### `GET /api/v1/doctors` · autenticado

Query opcional: `page`, `pageSize`, `name`.

Resposta **200**, envelope de listagem, cada item no formato do `POST`.

#### `GET /api/v1/doctors/{id}` · autenticado

Resposta **200** com o médico, ou **404** `RECURSO_NAO_ENCONTRADO`.

---

### **4.9.5. Escala de trabalho**

#### `PUT /api/v1/doctors/{doctorId}/work-schedule` · perfil `admin`

Substitui a escala inteira do médico pelo conteúdo enviado. Enviar `"shifts": []` apaga a escala.

```json
{
  "shifts": [
    { "weekDay": 2, "startTime": "08:00", "endTime": "12:00", "slotDurationMinutes": 30 },
    { "weekDay": 2, "startTime": "14:00", "endTime": "18:00", "slotDurationMinutes": 20 },
    { "weekDay": 4, "startTime": "08:00", "endTime": "11:00", "slotDurationMinutes": 30 }
  ]
}
```

Resposta **200**, com o mesmo formato do corpo enviado.

O `weekDay` vai de 0 (domingo) a 6 (sábado), na mesma convenção do `Date.getDay()`. Como você guarda isso é indiferente: uma linha por turno, ou um documento `jsonb` por médico. O que é fixo é o formato do payload acima.

| Situação | Status | `error` |
| :---- | :---- | :---- |
| `weekDay` fora de 0 a 6 | 400 | `DADOS_INVALIDOS` |
| hora fora do formato `HH:MM` | 400 | `DADOS_INVALIDOS` |
| `startTime` maior ou igual a `endTime` | 400 | `DADOS_INVALIDOS` |
| `slotDurationMinutes` menor ou igual a zero | 400 | `DADOS_INVALIDOS` |
| dois turnos do mesmo `weekDay` se sobrepõem | 400 | `DADOS_INVALIDOS` |
| médico inexistente | 404 | `RECURSO_NAO_ENCONTRADO` |
| usuário autenticado não é `admin` | 403 | `ACESSO_NEGADO` |

Dois turnos encostados (`08:00` a `12:00` e `12:00` a `18:00`) **não** se sobrepõem e devem ser aceitos.

#### `GET /api/v1/doctors/{doctorId}/work-schedule` · autenticado

Resposta **200**:

```json
{ "shifts": [ { "weekDay": 2, "startTime": "08:00", "endTime": "12:00", "slotDurationMinutes": 30 } ] }
```

Médico sem escala cadastrada devolve **200** com `"shifts": []`, e não 404.

---

### **4.9.6. Agenda do médico**

#### `GET /api/v1/doctors/{doctorId}/calendar?from=&to=` · autenticado

Devolve a escala do médico e os agendamentos ativos do período, para que o front-end monte a grade de horários livres. **A API não gera slots.**

Exemplo: `GET /api/v1/doctors/3/calendar?from=2026-10-12&to=2026-10-16`

Resposta **200**:

```json
{
  "workSchedule": {
    "shifts": [
      { "weekDay": 2, "startTime": "08:00", "endTime": "12:00", "slotDurationMinutes": 30 }
    ]
  },
  "appointments": [
    {
      "id": 41,
      "patientId": 10,
      "startsAt": "2026-10-13T11:00:00.000Z",
      "endsAt": "2026-10-13T11:30:00.000Z",
      "status": "scheduled"
    }
  ]
}
```

Regras:

* Agendamentos com status `cancelled` **não** aparecem.
* O período é inclusivo nas duas pontas, considerando o dia inteiro no horário local da clínica.
* `from` ou `to` fora do formato `YYYY-MM-DD`, `from` posterior a `to`, ou intervalo maior que 31 dias devolvem **400** `DADOS_INVALIDOS`.
* Médico inexistente devolve **404** `RECURSO_NAO_ENCONTRADO`.

---

### **4.9.7. Agendamentos**

#### `POST /api/v1/appointments` · perfis `admin`, `secretary`

```json
{ "doctorId": 3, "patientId": 10, "startsAt": "2026-10-13T08:00:00-03:00" }
```

O cliente envia apenas o início. **O `endsAt` é calculado pelo backend**, somando ao `startsAt` o `slotDurationMinutes` do turno em que o horário cai.

Resposta **201**:

```json
{
  "id": 41,
  "doctorId": 3,
  "patientId": 10,
  "startsAt": "2026-10-13T11:00:00.000Z",
  "endsAt": "2026-10-13T11:30:00.000Z",
  "status": "scheduled"
}
```

**Validações obrigatórias, nesta ordem:**

1. O médico e o paciente existem. Se não: **404** `RECURSO_NAO_ENCONTRADO`.
2. O `startsAt`, convertido para o horário local da clínica, cai dentro de algum turno da escala daquele dia da semana.
3. O horário está alinhado à grade do turno: `(minutos desde startTime) % slotDurationMinutes === 0`.
4. A consulta inteira cabe no turno: `startsAt + slotDurationMinutes <= endTime`.
5. Nenhum agendamento ativo do **mesmo médico** se sobrepõe ao período `[startsAt, endsAt)`.
6. Nenhum agendamento ativo do **mesmo paciente** se sobrepõe ao período `[startsAt, endsAt)`.

Falha em 2, 3 ou 4 devolve **422** `HORARIO_FORA_DA_ESCALA`. Falha em 5 devolve **409** `HORARIO_INDISPONIVEL`. Falha em 6 devolve **409** `PACIENTE_INDISPONIVEL`.

Agendamento ativo é aquele cujo status não é `cancelled`.

| 💡 Sobreposição é interseção de períodos, não igualdade de início. Duas consultas se sobrepõem quando `a.startsAt < b.endsAt && b.startsAt < a.endsAt`. A comparação é estrita, então períodos encostados (10:00 a 10:30 e 10:30 a 11:00) **não** conflitam. Um índice único em `(doctorId, startsAt)` não resolve o problema: com durações diferentes por turno, uma consulta das 10:00 às 10:30 e outra às 10:20 têm inícios diferentes e passariam pelo índice. |
| :---- |

| ⚠️ Concorrência verificada. A verificação do passo 5 e a gravação são dois passos, e outra requisição cabe entre eles. O teste automatizado dispara **duas requisições simultâneas** para o mesmo médico, no mesmo horário, com pacientes diferentes. Exatamente uma deve responder **201**, e a outra **409** `HORARIO_INDISPONIVEL`. Duas respostas 201 reprovam o caso. A solução é uma transação com bloqueio pessimista na linha do médico (`SELECT ... FOR UPDATE`), envolvendo a verificação e a gravação, como construído na aula de 12/10. Todo caminho que grava agendamento precisa do bloqueio. |
| :---- |

#### `GET /api/v1/appointments` · autenticado

Query opcional: `doctorId`, `patientId`, `status`, `from` (`YYYY-MM-DD`), `to` (`YYYY-MM-DD`), `page`, `pageSize`.

Resposta **200**, envelope de listagem, cada item no formato do `POST`.

| ⚠️ Filtro forçado por perfil. Um usuário com perfil `doctor` (e sem `admin`) só enxerga os próprios agendamentos, independentemente do que ele mandar na query. Se ele enviar `?doctorId=` de outro médico, a resposta é **200 com lista vazia** ou apenas os dele, nunca os agendamentos alheios. O teste verifica isso. |
| :---- |

#### `GET /api/v1/appointments/{id}` · autenticado

Resposta **200** com o agendamento, ou **404** `RECURSO_NAO_ENCONTRADO`. Um `doctor` que não é o médico do agendamento recebe **403** `ACESSO_NEGADO`.

#### `PATCH /api/v1/appointments/{id}/status` · autenticado

```json
{ "status": "in_progress" }
```

Resposta **200** com o agendamento atualizado.

**Transições permitidas:**

| De | Para | Quem pode |
| :---- | :---- | :---- |
| `scheduled` | `in_progress` | o `doctor` do agendamento, ou `admin` |
| `scheduled` | `cancelled` | `admin`, `secretary`, ou o `doctor` do agendamento |
| `in_progress` | `done` | o `doctor` do agendamento, ou `admin` |
| `in_progress` | `cancelled` | `admin`, ou o `doctor` do agendamento |

| Situação | Status | `error` |
| :---- | :---- | :---- |
| transição não listada acima | 422 | `TRANSICAO_INVALIDA` |
| status enviado fora do enum | 400 | `DADOS_INVALIDOS` |
| perfil sem permissão para a transição | 403 | `ACESSO_NEGADO` |
| agendamento inexistente | 404 | `RECURSO_NAO_ENCONTRADO` |

Cancelar libera o horário: depois de `cancelled`, o mesmo horário pode ser agendado de novo e deve responder **201**.

---

### **4.9.8. Prontuário**

O prontuário é o recurso mais sensível do sistema. O controle de acesso aqui é **por posse**, e não apenas por perfil.

**Regra de vínculo:** um médico tem vínculo com um paciente quando existe pelo menos um agendamento entre os dois com status `in_progress` ou `done`.

#### `POST /api/v1/patients/{patientId}/medical-records` · perfil `doctor`, com vínculo

```json
{ "text": "Paciente relata dor lombar há duas semanas. Solicitado raio-X." }
```

Resposta **201**:

```json
{
  "id": 5,
  "patientId": 10,
  "doctorId": 3,
  "text": "Paciente relata dor lombar há duas semanas. Solicitado raio-X.",
  "createdAt": "2026-10-13T11:25:00.000Z"
}
```

O `doctorId` vem do usuário autenticado, **nunca do corpo da requisição**. Se o corpo trouxer `doctorId`, ele é ignorado.

| Situação | Status | `error` |
| :---- | :---- | :---- |
| médico sem vínculo com o paciente | 403 | `ACESSO_NEGADO` |
| perfil `admin` ou `secretary` | 403 | `ACESSO_NEGADO` |
| `text` ausente ou vazio | 400 | `DADOS_INVALIDOS` |
| paciente inexistente | 404 | `RECURSO_NAO_ENCONTRADO` |

Escrever no prontuário é ato médico: nem `admin` nem `secretary` escrevem.

#### `GET /api/v1/patients/{patientId}/medical-records` · perfil `doctor` com vínculo, ou `admin`

Resposta **200**, envelope de listagem, em ordem decrescente de `createdAt`.

| Situação | Status | `error` |
| :---- | :---- | :---- |
| perfil `doctor` sem vínculo com o paciente | 403 | `ACESSO_NEGADO` |
| perfil `secretary` | 403 | `ACESSO_NEGADO` |
| paciente inexistente | 404 | `RECURSO_NAO_ENCONTRADO` |

---

### **4.9.9. Resumo do contrato**

| Método | Rota (sob `/api/v1`) | Perfis |
| :---- | :---- | :---- |
| `GET` | `/health` | público |
| `POST` | `/auth/login` | público |
| `GET` | `/users/me` | autenticado |
| `POST` | `/users` | `admin` |
| `POST` | `/patients` | `admin`, `secretary` |
| `GET` | `/patients` | autenticado |
| `GET` | `/patients/{id}` | autenticado |
| `PATCH` | `/patients/{id}` | `admin`, `secretary` |
| `DELETE` | `/patients/{id}` | `admin` |
| `POST` | `/doctors` | `admin` |
| `GET` | `/doctors` | autenticado |
| `GET` | `/doctors/{id}` | autenticado |
| `PUT` | `/doctors/{id}/work-schedule` | `admin`, `doctor` |
| `GET` | `/doctors/{id}/work-schedule` | autenticado |
| `GET` | `/doctors/{id}/calendar` | autenticado |
| `POST` | `/appointments` | `admin`, `secretary` |
| `GET` | `/appointments` | autenticado (filtrado por perfil) |
| `GET` | `/appointments/{id}` | autenticado (com posse) |
| `PATCH` | `/appointments/{id}/status` | conforme a transição |
| `POST` | `/patients/{id}/medical-records` | `doctor` com vínculo |
| `GET` | `/patients/{id}/medical-records` | `doctor` com vínculo, `admin` |

---

# **5. CRITÉRIOS DE AVALIAÇÃO**

A nota do projeto varia de 0 (zero) a 10 (dez) pontos. Os critérios 5 e 8 são verificados por execução automatizada contra a API publicada. Os critérios 4, 6 e 7 são verificados no repositório e nas execuções registradas na aba Actions. Os critérios 1, 2 e 3 são avaliados manualmente pelo professor.

Serão desconsiderados e receberão nota 0 os projetos que apresentarem plágio de soluções encontradas na internet ou de outros colegas.

| ⚠️ API fora do ar no momento da correção zera os critérios 5, 6 e 8, ou seja, 4,50 dos 10 pontos. Credencial de administrador incorreta tem o mesmo efeito, porque a bateria não consegue autenticar. Confira a URL e as credenciais submetidas antes do prazo. |
| :---- |

Em cada critério, "não atende" vale 0 e "atende plenamente" vale a pontuação da coluna Pontos. "Atende parcialmente" vale metade dela, exceto no critério 8, que tem faixas intermediárias indicadas na própria célula.

| Nº | Critério | Pontos | Não atende | Atende parcialmente | Atende plenamente |
| :---: | :---- | :---: | :---- | :---- | :---- |
| 1 | **Gestão do projeto no board** | 1,00 | Não há board, ou o board está vazio. | O board existe, mas os cards são genéricos, ou foram todos criados e concluídos de uma vez, sem refletir o desenvolvimento. | O board tem um card por funcionalidade, com descrição, movimentados ao longo do desenvolvimento. |
| 2 | **Versionamento e documentação** | 1,00 | Commits direto na `main`, sem pull requests, e sem README. | Parte do fluxo foi seguida (poucos pull requests, commits concentrados, ou README incompleto). | Mínimo de 20 commits e 6 pull requests fechados com check verde, branch por funcionalidade, e README completo conforme a Seção 3. |
| 3 | **Qualidade de código e arquitetura** | 1,00 | Regra de negócio em controller, acesso ao TypeORM espalhado, ou aplicação sem separação em camadas. | Camadas presentes, mas com alto acoplamento, duplicação relevante, tipagem frouxa ou uso de `any` para fugir da tipagem. | Camadas bem definidas, injeção de dependência por construtor, tipagem consistente, erros de domínio separados do HTTP, nomenclatura padronizada. |
| 4 | **Workflow de validação do pull request** | 1,00 | Não existe workflow de validação. | O workflow existe e roda os testes, mas não reprova por cobertura abaixo do limiar, ou a proteção da branch `main` não está ativa. | Workflow dispara em todo pull request para a `main`, roda build e testes, reprova abaixo de 80% de cobertura, e o check é obrigatório na proteção da branch. |
| 5 | **Regra de negócio sob concorrência** | 1,00 | O agendamento não valida o horário contra a escala. | A validação contra a escala funciona, mas duas requisições simultâneas conseguem ocupar o mesmo horário. | As seis validações funcionam com os códigos corretos, e a transação com bloqueio garante que duas requisições simultâneas produzam exatamente um 201 e um 409. |
| 6 | **Publicação na nuvem e workflow de deploy** | 1,50 | A API não está publicada, ou não responde na URL submetida. | A API está publicada, mas a publicação é manual, ou o workflow de deploy não dispara no merge para a `main`, ou há segredo da aplicação versionado no repositório. | API publicada e acessível, com `Dockerfile` multi-stage, banco PostgreSQL gerenciado, e workflow que publica automaticamente a cada incorporação na `main`, com os segredos fora do repositório. |
| 7 | **Cobertura de testes** | 1,50 | Não há testes unitários, ou a suíte não executa. | A suíte executa, mas a cobertura fica abaixo de 80%, ou o recorte inclui camadas sem regra de negócio, ou os casos mínimos da Seção 4.5 não estão cobertos. | Cobertura igual ou superior a 80% em `lines`, `branches`, `functions` e `statements` sobre a camada de regra de negócio, com o recorte declarado no README, os casos mínimos presentes e dublês sobre a porta de repositório. |
| 8 | **Contrato da API na bateria de aceitação** | 2,00 | Menos de 25% dos casos aprovados, ou a autenticação não funciona e a bateria não consegue começar. | Entre 50% e 89% dos casos aprovados | 90% ou mais dos casos da bateria aprovados, incluindo os de controle de acesso e os de prontuário. |
| | **TOTAL** | **10,00** | | | |

---

# **6. REFERÊNCIAS**

Obras consultadas para a forma e a classificação dos requisitos (Seções 4.1 a 4.4), para o board (Seção 4.8) e para o contrato da API (Seção 4.9).

ANDERSON, D. J. **Kanban**: successful evolutionary change for your technology business. Sequim: Blue Hole Press, 2010.

BUSINESS RULES GROUP. **The Business Rules Manifesto**: the principles of rule independence. Versão 1.2. 2003.

CLEGG, D.; BARKER, R. **Case Method Fast-Track**: a RAD approach. Wokingham: Addison-Wesley, 1994. (Origem da priorização MoSCoW.)

COHN, M. **User Stories Applied**: for agile software development. Boston: Addison-Wesley, 2004.

FIELDING, R.; NOTTINGHAM, M.; RESCHKE, J. (ed.). **RFC 9110**: HTTP Semantics. Internet Engineering Task Force, 2022.

FOWLER, M. **Patterns of Enterprise Application Architecture**. Boston: Addison-Wesley, 2002.

IEEE. **IEEE Std 830-1998**: recommended practice for software requirements specifications. New York: IEEE, 1998. (Substituída pela ISO/IEC/IEEE 29148.)

INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. **ISO 8601-1:2019**: date and time, representations for information interchange, part 1: basic rules. Geneva: ISO, 2019.

INTERNATIONAL ORGANIZATION FOR STANDARDIZATION; INTERNATIONAL ELECTROTECHNICAL COMMISSION. **ISO/IEC 25010:2011**: systems and software engineering, systems and software quality requirements and evaluation (SQuaRE), system and software quality models. Geneva: ISO/IEC, 2011.

INTERNATIONAL ORGANIZATION FOR STANDARDIZATION; INTERNATIONAL ELECTROTECHNICAL COMMISSION; INSTITUTE OF ELECTRICAL AND ELECTRONICS ENGINEERS. **ISO/IEC/IEEE 29148:2018**: systems and software engineering, life cycle processes, requirements engineering. Geneva: ISO/IEC/IEEE, 2018.

JONES, M.; BRADLEY, J.; SAKIMURA, N. **RFC 7519**: JSON Web Token (JWT). Internet Engineering Task Force, 2015.

SCHWABER, K.; SUTHERLAND, J. **The Scrum Guide**: the definitive guide to Scrum, the rules of the game. 2020. Disponível em: https://scrumguides.org.

WAKE, B. **INVEST in good stories, and SMART tasks**. XP123, 2003. Disponível em: https://xp123.com/invest-in-good-stories-and-smart-tasks.

WIEGERS, K. E.; BEATTY, J. **Software Requirements**. 3. ed. Redmond: Microsoft Press, 2013.