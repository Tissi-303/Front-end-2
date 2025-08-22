#Desenvolva um programa que colete dados da altura e o gênero (Masculino ou
#Feminino) de 15 pessoas e apresente os seguintes resultados:

#- A maior e a menor altura do grupo;
#- A média de altura das pessoas do gênero Masculino;
#- O número de pessoas do gênero Feminino.


#Do que eu preciso?
#lista para armazenar dados
#coleta de dados
# A maior e a menor altura do grupo;
# A média de altura das pessoas do gênero Masculino;
# O número de pessoas do gênero Feminino.


pessoas = []
altura = []
genero = []

for i in range(2):
        print(f"Pessoa {i+1}:")
        altura = float (input("Digite sua altura em metros: "))
        genero = input("Digite o seu genero (M/F): ").upper

        pessoa = {
            "altura": altura,
            "genero": genero
        }

pessoas.append(pessoa)

lista_altura = [p["altura"] for p in pessoas]

media.altura = [p[altura] for p in pessoas]

media.altura = sum(lista_altura) / len(lista_altura)
print(f"\nMedia de altura do grupo: {media.altura: .2f} metros")


maior = max(lista_alturas)
menor = min(lista_alturas)

print (f"A maior altura é: {maior: .2f} metros")
print (f"E a menor altura é de: {menor: .2f} metros")

alturas_homens = [p[altura] for p in pessoas if p["genero"] == "M"]
altura_mulheres =[p[altura] for p in pessoas if p["genero"] == "F"]


if alturas_homens:
        print(f"Média de altura dos homens: {sum(alturas_homens)/len(alturas_homens): .2f} metros")
if altura_mulheres:
         print(f"Média de altura das mulheres: {sum(altura_mulheres)/len(altura_mulheres): .2f} metros")  






