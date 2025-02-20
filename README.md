# asw

Repositório com a finalidade de gerenciar os arquivos de aula da disciplina Análise de Sistemas Web
Professor: Igor Rafael C. Campos

Atividade: Criando um Sistema Interativo com POO e
Componentes HTML
  Objetivo
    Criar um sistema web interativo que permita ao usuário escolher um
    animal, personalizar suas características e interagir com ele. O sistema deve usar
    conceitos de POO (Encapsulamento, Herança e Polimorfismo) e incluir componentes
    HTML avançados como select, input color, step-by-step e sons reais dos
    animais.

O que precisa ser feito?
  1⃣ Criar um formulário interativo onde o usuário escolhe um animal e define suas
  características.
  2⃣ Criar classes em JavaScript representando os animais, garantindo que cada um
  tenha seus próprios comportamentos (herança e polimorfismo).
  3⃣ Adicionar um sistema de interação, permitindo que o usuário ouça os sons dos
  animais e veja como eles se movem.
  4⃣ Estilizar a interface com CSS para tornar a experiência mais visual e intuitiva.

� Requisitos da Implementação
Precisam seguir os requisitos abaixo para desenvolver seu próprio sistema.
  ✅ 1. Estrutura do Sistema
    • Criar um formulário de múltiplas etapas (steps) para:
      o Escolher um animal (select).
      o Definir o nome (input text) e a cor (input color).
      o Confirmar a criação e interagir com o animal.

  ✅ 2. Conceitos de POO Aplicados
    • Criar uma classe base Animal com:
      o Atributos nome e cor (encapsulados).
      o Métodos fazerSom() e mover(), que podem ser sobrescritos.
    • Criar as classes Cachorro, Gato, Passaro e Peixe, herdando de Animal e
    sobrescrevendo os métodos:
      o O cachorro deve latir e correr.
      o O gato deve miar e saltar.
      o O pássaro deve cantar e voar.
      o O peixe não faz som, mas nada.
    • Criar um novo animal (exemplo: Cavalo) com seus próprios métodos.
    
  ✅ 3. Interatividade com HTML
  • O usuário deve conseguir:
    o Criar seu animal personalizado (nome + cor).
    o Ver informações do animal em uma div.
    o Ouvir o som ao clicar em um botão (audio).
    o Ver o movimento com um alerta ou animação.
