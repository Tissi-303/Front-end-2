
alturas = []
generos = []

for i in range(1, 16): 
    print(f"\nPessoa {i}:")
    altura = float(input("Digite a altura (em metros): "))
    genero = input("Digite o gênero (M para masculino / F para feminino): ")
    
    alturas.append(altura)
    generos.append(genero)

# Maior e menor altura

maior_altura = max(alturas)
menor_altura = min(alturas)

# Média de altura dos homens

soma_masculino = 0
qtd_masculino = 0
for i in range(15):
    if generos[i] == "M": 
        soma_masculino += alturas[i]
        qtd_masculino += 1

if qtd_masculino > 0:
    media_masculino = soma_masculino / qtd_masculino
else:
    media_masculino = 0

# Número de mulheres
qtd_feminino = generos.count("F")  

print("\n=== RESULTADOS ===")
print(f"Maior altura: {maior_altura:.2f} m")
print(f"Menor altura: {menor_altura:.2f} m")
print(f"Média de altura dos homens: {media_masculino:.2f} m")
print(f"Número de mulheres: {qtd_feminino}")