### SOLID

- O que é?
    - Facilitar na compreensão, organização, desenvolvimento e a manuteção de software
    - O objetivo é criar uma estrutura:
        - Tolerante a mudanças
        - Sejam fáceis de entender
        - Seja a base de componenetes que possam ser utilizadas em outros sistemas
        
- Frase → Bons sistemas de softwares começam com um código limpo. Por outro lado, se os tijolos não são bem-feitos, a arquitetura da construção perde a importância. Por outro lado, você pode fazer uma bagunça considerável com tijolos bem feitos.

- Princípios
    - Single Responsability Principle (Princípio da responsabilidade única)
        - Uma classe deve ter apenas uma única responsabildiade;
    - Open-Closed Principle (Princípio Aberto-Fechado)
        - Um artefato deve ser aberto para extensões, mas fechado para modificações;
    - Liskov Substitution Principle (Princípio de Substituição de Liskov)
        - A classes devem ser substituida por suas classes bases;
    - Interface Segregation Principle (Princípio da Segregação da Interface)
        - Deve evitar que a classe não implemente métodos que não são necessários;
    - Dependency Inversion Principle (Princípio da Inversão de Dependência)
        - O código deve depende de uma abastração (interface) e não de uma implementação;