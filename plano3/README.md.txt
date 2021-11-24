
# Projeto Console em C# integrado ao Banco de Dados
	Olá meu nome é Gabriel e esse é o meu projeto para aplicação
	dos conhecimentos obtidos durante a sprint 3.

# O projeto
O projeto escolhido foi a elaboração de um sistema de consulta e registro de ponto, feito em C# com integração ao banco de dados.
 Nele é possível realizar consulta e a inserção de registros.
 

# Conceitos abordados
Na criação do projeto foram abordados os seguintes conceitos


 - **C#**
 - **SQL** 
 - 
# Funcionamento do  Consultor
Nomeada de Consultor feito em C# o programa funciona em console, onde são apresentado 5 opções no qual cada um realiza um determinada tarefa,
 Como consulta e a inserção de novos Dados.
 

# Utilizando a aplicação
Os passos necessários serão listados abaixo:
 1. Clonar o repositório
 2. Rodar o script de SQL no seu ManagementDB
 3. Abrir o projeto/solução no VisualStudio.
 4. Fazer a conexão do BD ao programa na Class ConexaoSql .
 5. Mudar a sua string de conexão na f(x) = SqlConnection(
 "Data Source=SuaInstanciaAqui; Initial Catalog=NomebancoAqui; User Id=sa;Password=senhaaqui");

Detalhe, nesta aplicação não foi utilizado nenhum Framework para conexão ou consulta de dados. Apenas as funções nativa do C# para saber mais [SqlConnection Microsoft](https://docs.microsoft.com/pt-br/dotnet/api/system.data.sqlclient.sqlconnection?view=dotnet-plat-ext-5.0)
